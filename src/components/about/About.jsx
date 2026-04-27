import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiBriefcase } from 'react-icons/bi';

const About = () => {
	return (
		<section id='about'>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='Raghavendra Dinesh - Applied AI Engineer based in San Jose, CA' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<BiBriefcase className='about__icon' />
							<h5>Experience</h5>
							<small>4+ Years in Production AI</small>
						</article>
						<article className='about__card'>
							<FaProjectDiagram className='about__icon' />
							<h5>Ship-to-Production</h5>
							<small>12+ Systems Deployed</small>
						</article>
						<article className='about__card'>
							<AiOutlineFileDone className='about__icon' />
							<h5>Impact</h5>
							<small>15x Latency Reduction</small>
						</article>
					</div>
					<p>
						Applied AI Engineer with 4+ years of experience shipping production-grade <strong>agentic LLM systems</strong>, <strong>RAG pipelines</strong>, and <strong>multimodal vision-language solutions</strong>. I build AI that works at scale — reducing query latency by 15x, cutting deployment costs, and driving measurable user engagement for real products.
					</p>
					<p>
						At <strong>Indra Solutions</strong>, I architect end-to-end AI systems using LangChain, FastMCP, and Azure AI Foundry, deployed on GCP Cloud Run and Azure. Previously at <strong>Logos Robotics Lab (ASU)</strong>, I built vision-language diagnostic pipelines achieving 98% accuracy with custom BLIP-2 architectures connecting SWIN encoders to LLaMA 3.2. At <strong>Bosch</strong>, I delivered model distillation and computer vision systems that saved 40+ engineering hours weekly.
					</p>
					<p>
						MS in AI-Robotics from Arizona State University (GPA 3.97). I bring deep expertise across the full AI stack — from model fine-tuning (PEFT, QLoRA) to cloud deployment (Docker, CI/CD, GitHub Actions) — and I'm seeking roles where I can drive AI-native product innovation at scale.
					</p>
					<a href='#contact' className='btn btn-primary'>
						Let's Connect
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
