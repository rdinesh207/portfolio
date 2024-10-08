import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';
import Education from './components/education/Education';
import Certificates from './components/certificates/Certificates';

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Education />
			<Certificates />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
