import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

import './Footer.css';

const Footer = () => {
	return (
		<footer id='footer'>
			<ul className='permalinks'>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#education'>Education</a>
				</li>
				<li>
					<a href='#certificates'>Certificates</a>
				</li>
				<li>
					<a href='#skills'>Skills</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a
					href='https://www.linkedin.com/in/raghavendradinesh/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsLinkedin className='footer__socials-icon' />
				</a>
				<a
					href='https://github.com/rdinesh207/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsGithub className='footer__socials-icon' />
				</a>
			</div>
			<div className='footer__copyright'>
				<small>&copy; Raghavendra Dinesh - All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
