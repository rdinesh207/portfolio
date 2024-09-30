import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './Experience.css';
import BGSW from '../../assets/bgsw.png';
import ASU from '../../assets/ASU-logo.png';
import CNM from '../../assets/connectm.png';

const Experience = () => {
	return (
		<section class="ftco-section ftco-no-pb goto-here" id="experience">
			<div class="container" bis_skin_checked="1">
				<div class="row" bis_skin_checked="1">
					<div class="col-md-9" bis_skin_checked="1">
						<div id="page-1" class="page one" bis_skin_checked="1">
							<h2 class="heading">Experience</h2>
							<div class="resume-wrap d-flex ftco-animate fadeInUp ftco-animated" bis_skin_checked="1">
								<div class="icon d-flex align-items-center justify-content-center logo-container" bis_skin_checked="1">
										<img src={ASU} alt="ASU Logo"></img>
								</div>
								<div class="text pl-3" bis_skin_checked="1">
									<span class="date">June 2024 - Present</span>
	 					<h2>Multi Modal Deep Learning Researcher</h2>
						<span class="position">Arizona State University</span><br></br>
	 					<span class="position"><i>Plant Image based Health Diagnostics System with BLIP-2 Image Captioning using Vicuna 7B and Gemini API</i></span>
	 					<p></p>
	 						<li>Trained ResNet50 with PlantVillage Data. Obtained TFLite using ONNx. Integrated with Gemini API as LLM for PoC and reference.</li>
	 						<li>Initially trained Google’s ViT for same dataset but due to low accuracy shifted to SWIN Transformer for Low Level feature extraction.</li>
	 						<li>Integrated SWIN with Vicuna 7B as LLM to obtain plant information, disease/problem and remedies.</li>
	 					<p></p>								</div>
							</div>
							<div class="resume-wrap d-flex ftco-animate fadeInUp ftco-animated"  bis_skin_checked="1">
								<div class="icon d-flex align-items-center justify-content-center logo-container">
									<img src={BGSW} alt="Bosch Logo"></img>
								</div>
								<div class="text pl-3">
									<span class="date">Sep 2019 - Aug 2022</span>
									<h2>Automation Engineer</h2>
									<span class="position">Bosch Global Software Technologies Pvt. Ltd.</span><br></br>
									<span class="position"><i>RF Emission Analysis and Harmonic Anomaly Detection for Automotive Conformance</i></span>
									<p></p>
										<li>Initiated a website to view and store RF Emission data based on spectrum to compare for conformance analysis using Django.</li>
										<li>Employed BiLSTM Autoencoder to find anomalies in the emissions and used them to find harmonics of resonant frequencies.</li>
										<li>Generated reports with plots automatically taking 10% of the time taken manually with 85% accuracy.</li>
										<br></br>
										<i>Smart Inventory Tracking Using Asset Detection and OCR</i>
										<li>Developed a website to store Inventory data and track arrival, use, storage, and shipment of packages using Django.</li>
										<li>Leveraged Computer Vision YOLOv4-tiny algorithm to detect artifacts and Tesseract OCR to detect Label data and store in SQL.</li>
										<li>Deployed the software on Raspberry Pi 3B+ with Pi SC0818 camera and Barcode Reader saving 25 hours/week.</li>
										<br></br>
										<i>Team Lead Projects</i>
										<li>Led a team of three to develop and implement Pattern Recognition tools, enabling analysis of test results and report generation.</li>
										<li>Collaborated with a team of two to spearhead the development of the Azure CAN Dashboard, which facilitates data transfer from ECU to Azure.</li>
									<p></p>
								</div>
							</div>
							<div class="resume-wrap d-flex ftco-animate fadeInUp ftco-animated"  bis_skin_checked="1">
								<div class="icon d-flex align-items-center justify-content-center logo-container">
									<img src={CNM} alt="ConnectM Logo"></img>
								</div>
								<div class="text pl-3">
									<span class="date">Jan 2019 - Mar 2019</span>
									<h2>Artificial Intelligence Intern</h2>
									<span class="position">ConnectM Technology Solutions Pvt. Ltd.</span><br></br>
									<span class="position"><i>Truck Driver Assistance System with Safety Constraints using Facial Recognition and Voice Assistance ChatBot.</i></span>
									<p></p>
										<li>Built voice recognition and face recognition systems using CMU Pocket Sphinx and Haar Cascade and AWS Face Recognition.</li>
										<li>Trained drowsiness detection using Facial Landmark detection and ensured modules can be deployed on Edge devices.</li>
										<li>Seamlessly integrated the modules onto a Raspberry Pi 3B, ensuring optimal performance, user experience, and road safety.</li>
									<p></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
