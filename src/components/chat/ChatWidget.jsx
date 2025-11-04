import React, { useEffect, useMemo, useRef, useState } from 'react';
import './ChatWidget.css';

const formatTime = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function parseInlineMarkdown(text) {
  const elements = [];
  let keyIdx = 0;
  const codeSplit = text.split(/(`[^`]*`)/g);
  const processLinksBoldItalic = (str) => {
    // Links first: [text](http(s)://url)
    const parts = [];
    let remaining = str;
    const linkRe = /\[([^\]]+)\]\((https?:[^)\s]+)\)/;
    while (true) {
      const m = remaining.match(linkRe);
      if (!m) { parts.push(remaining); break; }
      const [full, label, url] = m;
      const idx = m.index;
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push({ type: 'a', label, url });
      remaining = remaining.slice(idx + full.length);
    }
    // Now process bold then italic in each text piece
    const inlineNodes = parts.flatMap((p) => {
      if (typeof p !== 'string') return [p];
      const boldSplit = p.split(/(\*\*[^*]+\*\*)/g);
      return boldSplit.flatMap((b) => {
        if (/^\*\*[^*]+\*\*$/.test(b)) {
          return [{ type: 'strong', text: b.slice(2, -2) }];
        }
        const italicSplit = b.split(/(\*[^*]+\*)/g);
        return italicSplit.map((i) => {
          if (/^\*[^*]+\*$/.test(i)) return { type: 'em', text: i.slice(1, -1) };
          return i;
        });
      });
    });
    return inlineNodes.map((node) => {
      if (typeof node === 'string') return <span key={`t-${keyIdx++}`}>{node}</span>;
      if (node.type === 'a') return <a key={`a-${keyIdx++}`} href={node.url} target="_blank" rel="noopener noreferrer">{node.label}</a>;
      if (node.type === 'strong') return <strong key={`b-${keyIdx++}`}>{node.text}</strong>;
      if (node.type === 'em') return <em key={`i-${keyIdx++}`}>{node.text}</em>;
      return null;
    });
  };
  codeSplit.forEach((seg) => {
    if (/^`[^`]*`$/.test(seg)) {
      elements.push(<code key={`c-${keyIdx++}`}>{seg.slice(1, -1)}</code>);
    } else if (seg) {
      elements.push(...processLinksBoldItalic(seg));
    }
  });
  return elements;
}

function MarkdownText({ text }) {
  const blocks = text.split(/\n{2,}/);
  let keyIdx = 0;
  const renderList = (lines, ordered) => {
    const items = lines.map((line, i) => {
      const content = ordered ? line.replace(/^\s*\d+\.\s?/, '') : line.replace(/^\s*[-*]\s?/, '');
      return <li key={`li-${i}`}>{parseInlineMarkdown(content)}</li>;
    });
    return ordered ? <ol key={`ol-${keyIdx++}`}>{items}</ol> : <ul key={`ul-${keyIdx++}`}>{items}</ul>;
  };
  const nodes = blocks.map((block, bi) => {
    // Fenced code block ```
    const fence = block.match(/^```[a-zA-Z0-9_-]*\n[\s\S]*\n```$/);
    if (fence) {
      const inner = block.replace(/^```[a-zA-Z0-9_-]*\n/, '').replace(/\n```$/, '');
      return (
        <pre key={`pre-${bi}`}><code>{inner}</code></pre>
      );
    }
    const lines = block.split(/\n/);
    const isUL = lines.every((l) => /^\s*[-*]\s+/.test(l));
    if (isUL) return renderList(lines, false);
    const isOL = lines.every((l) => /^\s*\d+\.\s+/.test(l));
    if (isOL) return renderList(lines, true);
    return <p key={`p-${bi}`}>{parseInlineMarkdown(block.replace(/\n/g, ' '))}</p>;
  });
  return <>{nodes}</>;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hello! I'm Raghavendra Dinesh's Portfolio Assistant. You can ask me about his skills, projects, education, or experience.",
      time: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const autoOpenedRef = useRef(false);

  const endpoint = useMemo(() => {
    const ref = process.env.REACT_APP_SUPABASE_PROJECT_REF;
    const custom = process.env.REACT_APP_RAG_EDGE_URL;
    if (custom) return custom.replace(/\/$/, '') + '/rag-chat';
    if (ref) return `https://${ref}.functions.supabase.co/rag-chat`;
    return '';
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    // Auto-open once per session and play a short chime
    if (autoOpenedRef.current) return;
    const already = (() => {
      try { return sessionStorage.getItem('chatAutoOpened') === '1'; } catch { return false; }
    })();
    if (already) { autoOpenedRef.current = true; return; }
    const timer = setTimeout(() => {
      autoOpenedRef.current = true;
      try { sessionStorage.setItem('chatAutoOpened', '1'); } catch {}
      setOpen(true);
      tryPlayChime();
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load persisted chat history once
    try {
      const raw = localStorage.getItem('chatMessages');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) {
          setMessages(parsed.map((m) => ({ ...m, time: m.time ? new Date(m.time) : new Date() })));
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    // Persist chat history
    try { localStorage.setItem('chatMessages', JSON.stringify(messages)); } catch {}
  }, [messages]);

  function tryPlayChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.2, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
      gain.connect(ctx.destination);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(660, now);
      osc1.connect(gain);
      osc1.start(now);
      osc1.stop(now + 0.12);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.14);
      osc2.connect(gain);
      osc2.start(now + 0.14);
      osc2.stop(now + 0.28);
    } catch {}
  }

  async function sendMessage() {
    const q = input.trim();
    if (!q || loading) return;
    setLoading(true);
    const userMsg = { id: String(Date.now()), role: 'user', text: q, time: new Date() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    try {
      if (!endpoint) throw new Error('Missing RAG function endpoint configuration');
      // include recent chat history (last 10 messages), including this user message
      const history = updated.slice(-10).map((m) => ({ role: m.role, text: m.text }));
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY || ''}`,
          'apikey': process.env.REACT_APP_SUPABASE_ANON_KEY || ''
        },
        body: JSON.stringify({ question: q, k: 5, history })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Request failed');
      const text = data?.answer || 'I could not find an answer.';
      const assistantMsg = { id: String(Date.now() + 1), role: 'assistant', text, time: new Date() };
      setMessages((m) => [...m, assistantMsg]);
    } catch (e) {
      const assistantErr = { id: String(Date.now() + 2), role: 'assistant', text: String(e), time: new Date() };
      setMessages((m) => [...m, assistantErr]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className={`chat-root ${open ? 'open' : ''}`}>
      {!open && (
        <button className="chat-fab" onClick={() => setOpen(true)} aria-label="Open chat">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12c0 3.866-3.582 7-8 7-1.257 0-2.444-.242-3.5-.674L4 19l.764-3.059C4.28 15.02 4 13.544 4 12c0-3.866 3.582-7 8-7s8 3.134 8 7Z" stroke="#fff" strokeWidth="1.4"/>
          </svg>
        </button>
      )}
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-title">
              <div className="chat-avatar">AI</div>
              <div>
                <div>Portfolio Assistant</div>
                <div className="chat-subtitle">Online • Ask about skills, projects, education</div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="chat-body" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`msg ${m.role}`}>
                <div className="bubble">
                  {m.role === 'assistant' ? (
                    <div className="text md"><MarkdownText text={m.text} /></div>
                  ) : (
                    <div className="text">{m.text}</div>
                  )}
                  <div className="meta">{formatTime(m.time)}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="msg assistant"><div className="bubble"><div className="typing"><span/><span/><span/></div></div></div>
            )}
          </div>
          <div className="chat-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about skills, projects, education..."
              rows={1}
            />
            <button onClick={sendMessage} disabled={loading || !input.trim()} className="send-btn">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}


