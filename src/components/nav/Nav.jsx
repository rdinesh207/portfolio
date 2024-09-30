import { React, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail, BiBriefcase } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './Nav.css';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a
				href='!#'
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			>
				<BiBriefcase />
			</a>
			<a
				href='#education'
				onClick={() => setActiveNav('#education')}
				className={activeNav === '#education' ? 'active' : ''}
			>
				<BiBook />
			</a>
			<a
				href='#certificates'
				onClick={() => setActiveNav('#certificates')}
				className={activeNav === '#certificates' ? 'active' : ''}
			>
				<AiOutlineFileDone />
			</a>
			<a
				href='#skills'
				onClick={() => setActiveNav('#skills')}
				className={activeNav === '#skills' ? 'active' : ''}
			>
				<RiServiceLine />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export default Nav;
