import React from 'react';
import './Experience.css';
import BGSW from '../../assets/bgsw.png';
import ASU from '../../assets/ASU-logo.png';
import CNM from '../../assets/connectm.png';
import INDRASOL from '../../assets/Indrasol company logo_.png';

const Experience = () => {
	return (
		<section className="experience" id="experience">
			<h2>Experience</h2>
			<div className="container experience__container">
				<div className="experience__content">
					{/* Indra Solutions */}
					<div className="experience__item">
						<div className="experience__logo">
							<img src={INDRASOL} alt="Indrasol Logo" />
						</div>
						<div className="experience__details">
							<div className="experience__header">
								<h3>Staff Data Scientist</h3>
								<span className="company">Indra Solutions LLC</span>
								<span className="date">May 2025 - Present</span>
							</div>
							<ul className="experience__bullets">
								<li>Led a cross-functional team to develop custom MCP (Model Context Protocol) agents, improving real-time data processing capabilities following Agile Practices on Azure DevOps</li>
								<li>Spearheaded the design and implementation of an organization-wide Intranet platform, enhancing collaboration and accessibility for all employees</li>
								<li>Mentored junior engineers in LLM app development, Supabase optimization, and AI pipeline deployment best practices, leading to improved project completion rates and technical skills development</li>
								<li>Re-engineered GitHub CI/CD workflows, reducing Azure Container costs through purging and image optimization, resulting in significant cost savings</li>
								<li>Deployed cost-efficient LLM ChatBots using Supabase edge functions and RPC calls, optimizing inference pathways and concurrency limits, enhancing user interaction speed and experience</li>
								<li>Engineered a Retrieval-Augmented Generation (RAG) pipeline using Supabase, LangChain and RPC functions, cutting query latency from 3 minutes to 12 seconds through optimized data retrieval/caching.</li>
								<li>Integrated OpenAI APIs for LLM inference and fine-tuned model selection, reducing API latency from 2–3 minutes to 30 seconds via prompt optimization and efficient token usage, achieving 70% cost reduction while maintaining model accuracy and responsiveness.</li>
							</ul>
						</div>
					</div>

					{/* ASU */}
					<div className="experience__item">
						<div className="experience__logo">
							<img src={ASU} alt="ASU Logo" />
						</div>
						<div className="experience__details">
							<div className="experience__header">
								<h3>Deep Learning Engineer</h3>
								<span className="company">Arizona State University</span>
								<span className="date">Jun 2024 - May 2025</span>
							</div>
							<ul className="experience__bullets">
								<li>Engineered a custom BLIP-2 that integrates large vision and language models for plant health diagnostics attaining 98% accuracy with a Lite ResNet50 model and 96% accuracy with a fine-tuned SWIN Transformer over 40 epochs</li>
								<li>Enhanced diagnostic precision by developing an end-to-end solution that leverages QFormer to interface a frozen SWIN encoder with Llama 3.2 3B, achieving a maximum RougeL F1 score of 0.86 for generating localized cure</li>
								<li>Improved treatment insights by first validating a proof-of-concept using Gemini API (RougeL F1 score of 0.2) and later optimizing performance with PEFT on Vicuna 7B (score of 0.6) before transitioning to Llama 3.2 3B</li>
							</ul>
						</div>
					</div>

					{/* America Reads */}
					<div className="experience__item">
						<div className="experience__logo">
							<img src={ASU} alt="ASU Logo" />
						</div>
						<div className="experience__details">
							<div className="experience__header">
								<h3>Tutor</h3>
								<span className="company">America Reads, Mary Lou Fulton Teachers College</span>
								<span className="date">Oct 2022 - May 2024</span>
							</div>
							<ul className="experience__bullets">
								<li>Developed a Gemini-driven platform that automatically generated daily activity plans and personalized worksheets, improving student engagement and learning outcomes</li>
								<li>Enhanced adaptive assessment by designing a module that customizes questions based on student progress, leading to more accurate evaluations and tailored learning experiences</li>
							</ul>
						</div>
					</div>

					{/* Bosch */}
					<div className="experience__item">
						<div className="experience__logo">
							<img src={BGSW} alt="Bosch Logo" />
						</div>
						<div className="experience__details">
							<div className="experience__header">
								<h3>Automation Engineer</h3>
								<span className="company">Bosch Global Software Technologies Pvt. Ltd.</span>
								<span className="date">Sep 2019 - Aug 2022</span>
							</div>
							<ul className="experience__bullets">
								<li>Delivered an RF emission analysis portal with interactive visualizations by Plotly. Agile practices applied during iterative refinements of an Autoencoder anomaly detection—reducing analysis time from 30–50 hours to 6–8 hours</li>
								<li>Advanced lab asset management by designing a smart inventory tracking system on Raspberry Pi 3B that integrated YOLOv4-tiny for asset detection and Tesseract OCR for auto labeling, to provide real-time tracking</li>
								<li>Accelerated report generation, reducing manual processing time by 90% by building a web application to automate data extraction and document rendering</li>
							</ul>
						</div>
					</div>

					{/* ConnectM */}
					<div className="experience__item">
						<div className="experience__logo">
							<img src={CNM} alt="ConnectM Logo" />
						</div>
						<div className="experience__details">
							<div className="experience__header">
								<h3>Artificial Intelligence Intern</h3>
								<span className="company">ConnectM Technology Solutions Pvt. Ltd.</span>
								<span className="date">Jan 2019 - Mar 2019</span>
							</div>
							<ul className="experience__bullets">
								<li>Developed a Driver Assistance System with Safety Constraints using Facial Recognition and Voice Assistance, enhancing driver safety by alerting them to potential hazards</li>
								<li>Built voice and face recognition systems using CMU Pocket Sphinx, Haar Cascade, and AWS Face Rekognition, improving system accuracy and user interaction</li>
								<li>Trained drowsiness detection using Facial Landmark detection and integrated all modules on Raspberry Pi 3B, resulting in a comprehensive system that alerts drivers to prevent accidents</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
