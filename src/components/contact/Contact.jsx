import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			'service_u6g7sah',
			'template_pczimnf',
			form.current,
			'IQarIunzewqSF6tCv'
		);
		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					{/* END OF CONTACT OPTIONS */}
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>rdinesh2@asu.com</h5>
						<a
							href='mailto:rdinesh2@asu.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<BsLinkedin className='contact__option-icon' />
						<h4>Linkedin</h4>
						<h5>Raghavendra Dinesh</h5>
						<a
							href='https://www.linkedin.com/in/raghavendradinesh/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Check it out
						</a>
					</article>
					<article className='contact__option'>
						<BsGithub className='contact__option-icon' />
						<h4>GitHub</h4>
						<a
							href='https://github.com/rdinesh207/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Check it out
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input
						type='text'
						name='subject'
						placeholder='The subject of your email'
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows='3'
						placeholder='Your message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
