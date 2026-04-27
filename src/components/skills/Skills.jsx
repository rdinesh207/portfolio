import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './Skills.css';

const Skills = () => {
	return (
		<section id='skills'>
			<h2>My Skillset</h2>
			<div className='container skills__container'>
				<article className='skill'>
					<div className='skill__head'>
						<h3>Languages & APIs</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Python</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>C++</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>JavaScript</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>SQL</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>FastAPI</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>REST APIs</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>OpenAI API, Gemini API</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Bash</p>
						</li>
					</ul>
				</article>

				<article className='skill'>
					<div className='skill__head'>
						<h3>Applied AI / ML</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>LLM Applications</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Agentic Systems</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Retrieval-Augmented Generation (RAG)</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Computer Vision</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Vision-Language Models</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Deep Learning</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Model Distillation</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Transfer Learning</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Fine-tuning & PEFT (QLoRA)</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Few-shot & Zero-shot Learning</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>NLP & Generative AI</p>
						</li>
					</ul>
				</article>

				<article className='skill'>
					<div className='skill__head'>
						<h3>Frameworks & Tools</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>PyTorch</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>LangChain</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>FastMCP</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>OpenCV</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>TensorFlow & Keras</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>ONNX & TensorRT</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>HuggingFace Transformers</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Pandas, NumPy, Scikit-learn</p>
						</li>
					</ul>
				</article>

				<article className='skill'>
					<div className='skill__head'>
						<h3>Cloud & DevOps</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Docker</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>GitHub Actions (CI/CD)</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Azure AI Foundry</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>GCP Cloud Run</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>AWS</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Git & Version Control</p>
						</li>
					</ul>
				</article>

				<article className='skill'>
					<div className='skill__head'>
						<h3>Data & Platforms</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Supabase</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Azure AI Search</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Pinecone</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>SQL Databases</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Skills;
