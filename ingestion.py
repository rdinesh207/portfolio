import argparse
import os
import sys
import tempfile
import shutil
from typing import Iterable, List, Optional, Tuple

from dotenv import load_dotenv
from supabase import create_client, Client
import google.generativeai as genai

# Optional dependencies
try:
    from docx import Document  # python-docx
except Exception:  # pragma: no cover
    Document = None  # type: ignore

try:
    from git import Repo  # GitPython
except Exception:  # pragma: no cover
    Repo = None  # type: ignore


EMBEDDING_MODEL = "models/gemini-embedding-001"
EMBEDDING_DIMENSIONS = 768
embeddings_model = None  # lazily initialized after configure

# Optional readers
try:
    from pypdf import PdfReader  # pypdf
except Exception:  # pragma: no cover
    PdfReader = None  # type: ignore

try:
    import json as _json
    import nbformat  # type: ignore
except Exception:  # pragma: no cover
    nbformat = None  # type: ignore
    import json as _json  # fallback for naive parsing


def chunk_text(text: str, max_chars: int = 4000, overlap: int = 200) -> List[str]:
    if max_chars <= 0:
        return [text]
    chunks: List[str] = []
    start = 0
    text_len = len(text)
    while start < text_len:
        end = min(start + max_chars, text_len)
        chunks.append(text[start:end])
        if end == text_len:
            break
        start = max(0, end - overlap)
    return chunks


def average_embeddings(vectors: List[List[float]]) -> List[float]:
    if not vectors:
        return []
    length = len(vectors[0])
    sums = [0.0] * length
    for vec in vectors:
        if len(vec) != length:
            raise ValueError("All embedding vectors must have the same length")
        for i, v in enumerate(vec):
            sums[i] += v
    count = float(len(vectors))
    return [s / count for s in sums]


def _parse_embedding_response(resp) -> List[float]:
    # Handle multiple possible response shapes from google-generativeai
    if isinstance(resp, dict):
        emb = resp.get("embedding")
        if isinstance(emb, list):
            return emb
        if isinstance(emb, dict) and "values" in emb:
            return emb["values"]
    # Some SDK versions return objects
    if hasattr(resp, "embedding"):
        emb = getattr(resp, "embedding")
        if hasattr(emb, "values"):
            return list(emb.values)
        if isinstance(emb, list):
            return emb
    # Rare case: direct list is returned
    if isinstance(resp, list) and resp and isinstance(resp[0], (int, float)):
        return resp
    raise TypeError("Unexpected embedding response shape from Gemini API")


def embed_text(text: str) -> List[float]:
    chunks = chunk_text(text)
    vectors: List[List[float]] = []
    for chunk in chunks:
        if globals().get("embeddings_model") is not None:
            resp = embeddings_model.embed_content(
                content=chunk,
                output_dimensionality=EMBEDDING_DIMENSIONS,
            )  # type: ignore
        else:
            resp = genai.embed_content(
                model=EMBEDDING_MODEL,
                content=chunk,
                output_dimensionality=EMBEDDING_DIMENSIONS,
            )
        vec = _parse_embedding_response(resp)
        vectors.append(vec)
    return average_embeddings(vectors)


TEXT_EXTENSIONS = {
    ".txt",
    ".md",
    ".py",
    ".js",
    ".ts",
    ".tsx",
    ".jsx",
    ".json",
    ".yaml",
    ".yml",
    ".html",
    ".css",
    ".sql",
    ".toml",
    ".ini",
    ".cfg",
    ".c",
    ".cc",
    ".cpp",
    ".h",
    ".hpp",
    ".ino",
}


def is_probably_text_file(path: str) -> bool:
    ext = os.path.splitext(path)[1].lower()
    if ext == ".csv":
        return False
    if ext in TEXT_EXTENSIONS:
        return True
    # Heuristic: skip common binary folders/files
    basename = os.path.basename(path)
    if basename.startswith(".") or basename.endswith(".png") or basename.endswith(".jpg") or basename.endswith(".jpeg") or basename.endswith(".gif") or basename.endswith(".pdf"):
        return False
    # Fallback: try to open a small chunk
    try:
        with open(path, "rb") as f:
            sample = f.read(1024)
        if b"\x00" in sample:
            return False
        sample.decode("utf-8", errors="ignore")
        return True
    except Exception:
        return False


def read_docx(file_path: str) -> str:
    if Document is None:
        raise RuntimeError("python-docx is required to read .docx files. Please install it.")
    doc = Document(file_path)
    return "\n".join(p.text for p in doc.paragraphs)


def read_pdf(file_path: str) -> str:
    if PdfReader is None:
        raise RuntimeError("pypdf is required to read .pdf files. Please install it.")
    reader = PdfReader(file_path)
    pages_text: List[str] = []
    for page in reader.pages:
        try:
            txt = page.extract_text() or ""
        except Exception:
            txt = ""
        if txt:
            pages_text.append(txt)
    return "\n\n".join(pages_text)


def read_ipynb(file_path: str) -> str:
    # Prefer nbformat for robust parsing; fallback to naive JSON
    try:
        if nbformat is not None:
            nb = nbformat.read(file_path, as_version=4)  # type: ignore
            parts: List[str] = []
            for cell in nb.cells:
                cell_type = getattr(cell, "cell_type", "")
                source = getattr(cell, "source", "")
                if not source:
                    continue
                if cell_type == "markdown":
                    parts.append(source)
                elif cell_type == "code":
                    parts.append(source)
            return "\n\n".join(parts)
    except Exception:
        pass
    # Fallback
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        data = _json.load(f)
    cells = data.get("cells", [])
    texts: List[str] = []
    for cell in cells:
        src = cell.get("source", [])
        if isinstance(src, list):
            texts.append("".join(src))
        elif isinstance(src, str):
            texts.append(src)
    return "\n\n".join(texts)


def read_local_file(file_path: str) -> Tuple[str, str]:
    ext = os.path.splitext(file_path)[1].lower()
    if ext == ".docx":
        content = read_docx(file_path)
    elif ext == ".pdf":
        content = read_pdf(file_path)
    elif ext == ".ipynb":
        content = read_ipynb(file_path)
    else:
        if not is_probably_text_file(file_path):
            raise ValueError(f"Unsupported or binary file type: {file_path}")
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    return (file_path.replace("\\", "/"), content)


def iter_repo_files(root_dir: str) -> Iterable[str]:
    skip_dirs = {".git", "node_modules", "build", "dist", "venv", ".venv", "__pycache__"}
    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames[:] = [d for d in dirnames if d not in skip_dirs]
        for name in filenames:
            yield os.path.join(dirpath, name)


def clone_repo(repo_url: str, github_token: Optional[str]) -> str:
    if Repo is None:
        raise RuntimeError("GitPython is required to clone repositories. Please install it.")
    tmp_dir = tempfile.mkdtemp(prefix="repo_")
    url = repo_url
    if github_token and repo_url.startswith("https://") and "@" not in repo_url:
        # inject token for private repos: https://<token>@github.com/owner/repo
        url = repo_url.replace("https://", f"https://{github_token}@", 1)
    Repo.clone_from(url, tmp_dir, depth=1)
    return tmp_dir


def create_supabase_client() -> Client:
    supabase_url = os.environ.get("SUPABASE_URL")
    supabase_key = os.environ.get("SUPABASE_ANON_KEY")
    if not supabase_url or not supabase_key:
        raise RuntimeError("SUPABASE_URL and SUPABASE_ANON_KEY must be set in environment")
    return create_client(supabase_url, supabase_key)


def upsert_document(supabase: Client, file_path: str, content: str, embedding: List[float]) -> None:
    data = {
        "file_path": file_path,
        "content": content,
        "embedding": embedding,
    }
    # Use upsert on primary key file_path
    supabase.table("documents").upsert(data).execute()


def process_local_path(path: str, supabase: Client) -> None:
    if os.path.splitext(path)[1].lower() == ".csv":
        print(f"Skip (CSV): {path}")
        return
    file_path, content = read_local_file(path)
    vector = embed_text(content)
    if len(vector) != 768:
        raise RuntimeError(f"Expected 768-d embedding, got {len(vector)}")
    upsert_document(supabase, file_path, content, vector)
    print(f"Upserted: {file_path}")


def process_github_repo(repo_url: str, supabase: Client, github_token: Optional[str]) -> None:
    repo_dir = clone_repo(repo_url, github_token)
    try:
        for path in iter_repo_files(repo_dir):
            ext = os.path.splitext(path)[1].lower()
            try:
                if ext == ".docx":
                    content = read_docx(path)
                elif ext == ".pdf":
                    content = read_pdf(path)
                elif ext == ".ipynb":
                    content = read_ipynb(path)
                elif is_probably_text_file(path):
                    with open(path, "r", encoding="utf-8", errors="ignore") as f:
                        content = f.read()
                else:
                    continue
                rel_path = os.path.relpath(path, repo_dir).replace("\\", "/")
                # Namespacing file_path with repo URL for uniqueness
                file_id = f"{repo_url.rstrip('/')}/{rel_path}"
                vector = embed_text(content)
                if len(vector) != 768:
                    raise RuntimeError(f"Expected 768-d embedding, got {len(vector)}")
                upsert_document(supabase, file_id, content, vector)
                print(f"Upserted: {file_id}")
            except Exception as e:
                print(f"Skip {path}: {e}")
    finally:
        shutil.rmtree(repo_dir, ignore_errors=True)


def parse_args(argv: List[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Ingest files or GitHub repos into Supabase with Gemini embeddings")
    parser.add_argument("input", help="File path (.txt/.docx or other text) or GitHub repo URL")
    parser.add_argument("--api-key", dest="api_key", default=None, help="Gemini API key (overrides GEMINI_API_KEY)")
    parser.add_argument("--supabase-url", dest="supabase_url", default=None, help="Supabase URL (overrides SUPABASE_URL)")
    parser.add_argument("--supabase-key", dest="supabase_key", default=None, help="Supabase anon/service key (overrides SUPABASE_ANON_KEY)")
    parser.add_argument("--github-token", dest="github_token", default=None, help="GitHub token for private repos (overrides GITHUB_TOKEN)")
    parser.add_argument("--model", dest="model", default=EMBEDDING_MODEL, help="Gemini embedding model (default: gemini-embedding-001)")
    parser.add_argument("--max-chars", dest="max_chars", type=int, default=4000, help="Chunk size in characters")
    parser.add_argument("--overlap", dest="overlap", type=int, default=200, help="Chunk overlap in characters")
    return parser.parse_args(argv)


def main(argv: Optional[List[str]] = None) -> None:
    load_dotenv()
    args = parse_args(argv or sys.argv[1:])

    # Configure API keys and endpoints
    api_key = args.api_key or os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise RuntimeError("Gemini API key not found. Set GEMINI_API_KEY or pass --api-key.")
    genai.configure(api_key=api_key)

    global EMBEDDING_MODEL
    EMBEDDING_MODEL = args.model
    # Initialize embeddings model for consistent return shape
    global embeddings_model
    try:
        embeddings_model = genai.EmbeddingsModel(model_name=EMBEDDING_MODEL)
    except Exception:
        embeddings_model = None

    # Update chunking parameters dynamically
    global chunk_text  # rebind closure to use new defaults
    def chunk_text(text: str, max_chars: int = args.max_chars, overlap: int = args.overlap) -> List[str]:
        if max_chars <= 0:
            return [text]
        chunks: List[str] = []
        start = 0
        text_len = len(text)
        while start < text_len:
            end = min(start + max_chars, text_len)
            chunks.append(text[start:end])
            if end == text_len:
                break
            start = max(0, end - overlap)
        return chunks

    # Supabase client
    if args.supabase_url:
        os.environ["SUPABASE_URL"] = args.supabase_url
    if args.supabase_key:
        os.environ["SUPABASE_ANON_KEY"] = args.supabase_key
    supabase = create_supabase_client()

    target = args.input
    if target.startswith("https://github.com/"):
        github_token = args.github_token or os.environ.get("GITHUB_TOKEN")
        process_github_repo(target, supabase, github_token)
    else:
        if not os.path.isfile(target):
            raise FileNotFoundError(f"File not found: {target}")
        process_local_path(target, supabase)


if __name__ == "__main__":
    main()

