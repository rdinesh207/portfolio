import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import ASU from '../../assets/ASU-logo.png';
import PES from '../../assets/pesit.png';
import './Education.css';

const Education = () => {
	return (
		<section class="ftco-section ftco-no-pb goto-here" id="education">
			<h2>Education</h2>
			<div class="container" bis_skin_checked="1">
				<div class="row" bis_skin_checked="1">
					<div class="col-md-9" bis_skin_checked="1">
						<div id="page-2" class="page two" bis_skin_checked="1">
							<div class="resume-wrap d-flex ftco-animate fadeInUp ftco-animated" bis_skin_checked="1">
								<div class="d-flex align-items-center justify-content-center logo-container" bis_skin_checked="1">
									<a>
										<img src={ASU} alt="ASU Logo"></img>
									</a>
								</div>
								<div class="text pl-3" bis_skin_checked="1">
									<span class="date">2022-2024</span>
									<h3>Arizona State Univeristy</h3>
									<span class="position">Masters in RAS-Artificial Intelligence</span>
									<br></br>
									<span class="gpa">GPA: 3.97/4.0</span>
								</div>
							</div>
							<div class="resume-wrap d-flex ftco-animate fadeInUp ftco-animated" bis_skin_checked="1">
								<div class="d-flex align-items-center justify-content-center logo-container" bis_skin_checked="1">
									<a target="_blank">
										<img src={PES} alt="PESIT Logo"></img>
									</a>
								</div>
								<div class="text pl-3" bis_skin_checked="1">
									<span class="date">2015-2019</span>
									<h3>PESIT South Campus</h3>
									<span class="position">Bachelors in Electronics and Communication Engineering</span>
									<br></br>
									<span class="cgpa">CGPA: 7.5/10.0</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
