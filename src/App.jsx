import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Portfolio />
			<Education />
			<Skills />
			<Certificates />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
