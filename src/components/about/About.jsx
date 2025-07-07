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
							<small>5+ years Working</small>
						</article>
						<article className='about__card'>
							<FaProjectDiagram className='about__icon' />
							<h5>AI/ML Projects</h5>
							<small>25+ Completed</small>
						</article>
						<article className='about__card'>
							<AiOutlineFileDone className='about__icon' />
							<h5>Certificates</h5>
							<small>15+ courses and specialization</small>
						</article>
					</div>
					<p>
						I am a Data Scientist and ML Engineer with expertise in developing innovative AI solutions. Currently at Indra Solutions LLC, I engineer applications using FastAPI and LLMs to analyze contract data and streamline RFP document generation, enabling faster proposal submissions and competitive advantage.
					</p>
					<p>
						My recent work at Arizona State University focused on advancing plant health diagnostics through cutting-edge technologies, including custom BLIP-2 implementations with large vision and language models. I achieved 98% accuracy with Lite ResNet50 and 96% accuracy with fine-tuned SWIN Transformers, while developing end-to-end solutions that leverage QFormer to interface frozen SWIN encoders with Llama 3.2 3B for generating localized cures.
					</p>
					<p>
						My academic background includes an MS in Robotics and Autonomous Systems with a concentration in AI. My core competencies span Computer Vision, Transformers, and Sequence Models, honed through diverse experience at Bosch Global Software Technologies and various AI-driven projects.
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
