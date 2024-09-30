import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './Skills.css';

const Skills = () => {
	return (
		<section id='skills'>
			<h2>My Skillset</h2>
			<div className='container skills__container' bis_skin_checked="1">
				{/* UI/UX Design */}
				<article className='skill'>
					<div className='skill__head'>
						<h3>Programming & Scripting</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Python</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>C & Embedded C</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>MATLAB/Simulink</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>C++</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Java</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>JavaScript</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>HTML</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Bash</p>
						</li>
					</ul>
				</article>
				{/* Web Development */}
				<article className='skill'>
					<div className='skill__head'>
						<h3>Technical Interests</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Computer Vision</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Deep Learning</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Machine Learning</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Natural Language Processing</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Generative AI</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Generative Adversarial Networks</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Large Language Models</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Transformers</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Embedded Systems</p>
						</li>
					</ul>
				</article>
				{/* End of Web Development */}
				<article className='skill'>
					<div className='skill__head'>
						<h3>Tools and Platforms</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Pandas, NumPy, Scikit-learn, Matplotlib</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>TensorFlow, Keras, HuggingFace</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>OpenCV2</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>TensorRT, ONNx, TFLite</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>AWS, Google Cloud, Azure</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>SQL</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>GIT</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Docker</p>
						</li>

					</ul>
				</article>
				{/* End of Content Creation */}
				<article className='skill'>
					<div className='skill__head'>
						<h3>Models</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>ResNet50 and ResNet101</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Google's ViT</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Dino v2</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>SWIN Transformer</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Vicuna 7b</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>FLAN T5</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Pixel2Style2Pixel GAN</p>
						</li>
					</ul>
				</article>
				<article className='skill'>
					<div className='skill__head'>
						<h3>Deep Learning</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>YoLo</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>BLIP-2 and Instruct BLIP</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>R-CNN, Fast R-CNN, Faster R-CNN</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>UNet/UNet++</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>UPerNet</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>LSTM Autoencoders</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>PEFT like qLora</p>
						</li>
					</ul>
				</article>
				<article className='skill'>
					<div className='skill__head'>
						<h3>Embedded Systems</h3>
					</div>
					<ul className='skill__list'>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>MSP430</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Arduino UNO, Nano and Mega</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>ARM Cortex M3(LPC1768)</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>NodeMCU</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>ESP 32 Dev Kit</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Basys 3 Artix 7 FPGA</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>Raspberry Pi</p>
						</li>
						<li>
							<BiCheck className='skill__list-icon' />
							<p>DSK6713 DSP Kit</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Skills;
