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
								<h3>Applied AI Engineer</h3>
								<span className="company">Indra Solutions LLC</span>
								<span className="date">May 2025 - Present</span>
							</div>
							<ul className="experience__bullets">
								<li>Designed, built, and deployed agentic LLM systems for social media automation using FastMCP and LangChain, running on GCP Cloud Run with Docker, reducing manual marketing effort and improving audience engagement.</li>
								<li>Built production-grade retrieval-augmented generation pipelines (RAG) using Azure AI Foundry, Azure AI Search, LangChain, and Supabase, reducing end-to-end query latency from ~180 seconds to ~12 seconds.</li>
								<li>Developed internal platforms and APIs to support organization-wide collaboration and knowledge access, improving developer productivity and accessibility.</li>
								<li>Optimized CI/CD pipelines using GitHub Actions and container image optimization, reducing Azure container costs.</li>
								<li>Mentored engineers on LLM apps, Supabase optimization, and agentic workflows, improving speed and code quality.</li>
							</ul>
						</div>
					</div>

					{/* Logos Robotics Lab */}
					<div className="experience__item">
						<div className="experience__logo">
							<img src={ASU} alt="Logos Robotics Lab Logo" />
						</div>
						<div className="experience__details">
							<div className="experience__header">
								<h3>Applied ML Engineer</h3>
								<span className="company">Logos Robotics Lab</span>
								<span className="date">Jun 2024 - May 2025</span>
							</div>
							<ul className="experience__bullets">
								<li>Built and integrated multimodal (vision-language) AI systems for plant health diagnostics, leveraging zero-shot learning with BLIP-2, SWIN Transformer, and PyTorch-based pipelines to achieve up to 98% classification accuracy.</li>
								<li>Designed a vision-language reasoning pipeline using Q-Former to connect a frozen vision encoder with LLaMA 3.2 (3B), generating localized treatment recommendations with a RougeL F1 score of 0.86.</li>
								<li>Optimized and fine-tuned large models using PEFT, improving inference while reducing computational overhead.</li>
								<li>Validated system across multiple model configurations and datasets, focusing on reliability and practical deployment.</li>
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
								<li>Applied model distillation to refine an Autoencoder anomaly detection system, reducing analysis time from 30-50 hours to 6-8 hours and enhancing work throughput.</li>
								<li>Designed a smart inventory tracking system using transfer learning on YOLOv4-tiny and Tesseract OCR, enabling real-time tracking and reducing asset search labour by 8 hours per week.</li>
								<li>Accelerated report generation, reducing time by 90% by building a web app to automate data extraction and rendering.</li>
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
