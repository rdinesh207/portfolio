import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaAward, FaProjectDiagram } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail, BiBriefcase } from 'react-icons/bi';

const About = () => {
	return (
		<section id='about'>
			<h2>About me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='me' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<BiBriefcase className='about__icon' />
							<h5>Experience</h5>
							<small>3+ years Working</small>
						</article>
						<article className='about__card'>
							<FaProjectDiagram className='about__icon' />
							<h5>AI/ML Projects</h5>
							<small>20+ Completed</small>
						</article>
						<article className='about__card'>
							<AiOutlineFileDone className='about__icon' />
							<h5>Certificates</h5>
							<small>10+ courses and specialization</small>
						</article>
					</div>
					<p>
						I am advancing plant health diagnostics at Arizona State University by applying cutting-edge technologies, including BLIP-2 for image captioning with large language models (LLMs) such as Vicuna. My research journey began with a Proof of Concept using ResNet50 for image classification and Gemini for generating captions based on those classifications. I subsequently transitioned to using Vision Transformers (ViT) for integration with LLMs and Zeroshot or One Shot learning capabilities. However, due to ViT's limitations in classifying small features, I experimented with Dino V2 before choosing SWIN for its state-of-the-art performance in medical imaging. In evaluating zero-shot capabilities, I compared FLAN-T5 and Vicuna 7B, selecting Vicuna 7B due to its superior ROUGE score.
					</p>
					<p>
						My academic background includes an MS in Robotics and Autonomous Systems with a concentration in AI. My core competencies are in leveraging Computer Vision, Transformers and Sequence Models to create innovative solutions. This expertise was honed during my tenure at Bosch Global Software Technologies, where I contributed to enhancing efficiency through smart inventory systems and harmonic anomaly detection.
					</p>
					<a href='#contact' className='btn btn-primary'>
						Want to connect?
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
