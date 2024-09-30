import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://www.linkedin.com/in/raghavendradinesh/' target='_blank' rel='noopener noreferrer'>
				<BsLinkedin />
			</a>
			<a
				href='https://github.com/rdinesh207/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
