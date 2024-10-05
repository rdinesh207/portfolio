import React, { useState } from 'react';
import './Portfolio.css';

const data = [
    {
        "id": "1",
        "title": "Plant Image based Health Diagnostics System with BLIP-2 Image Captioning using Vicuna 7B and Gemini API",
        "problemStatement": "Most diagnostic systems perform image recognition and based on classification label, they go through look-up tables to provide diagnostics. The problems are:\n1) To modify the model, we need to train from scratch. (No zero shot or one-shot learning abilities)\n2) The diagnostics are very general, but we need localized and specific diagnostics.",
        "skills": "Multi-Modal Models, LLMs, LVMs, Transformers",
        "approach": "We are using BLIP-2 architecture integrating Large Vision Models with LLMs to perform Image Captioning and Visual Question Answering.",
        "summary": "Searched for datasets online and other sources and found a suitable source from PlantVillage for images. Created a PoC with ResNet50 and Gemini to confirm this is useful. Tried training ViT for classification of images but obtained low accuracy. Tried other models like Dino v2 and finally settled with SWIN. Tested Flan T5 and Vicuna 7B for Zero-shot capability with just prompts of pre-trained model and found better results in Vicuna 7B. Working on PEFT using qLora on Vicuna 7B to obtain better results with prompts then integrating it with SWIN through Instruct BLIP.",
        "outcome": "Achieved 98% accuracy in classification with ResNet50 and 70% with 40 epochs on fine tuning SWIN Transformer Pre-Trained with ImageNet dataset. Obtained a max Rouge-1 score of 0.2 with Gemini with text data given by me. Lower scores in Vicuna 7B and Flan T5 with prompts at Zero-shot and max score of 0.3 on fine tuning but expecting better results if the text dataset came from an expert."
    },
    {
        "id": "2",
        "title": "RF Emission Analysis and Harmonic Anomaly Detection for Automotive Conformance",
        "problemStatement": "Specification Conformance is a very common requirement in the automotive industry. It’s even more important when it comes to EMC Testing. Loading several Emission data files and performing analysis takes several hours to days. Harmonic analysis is even more difficult and sometimes they can be accurate as the analyst misses some large peak emissions.",
        "skills": "Django, React.js, Pandas, Plotly, Keras, Scikit-learn",
	"approach": "Develop an analysis web portal where users can load and store their emission files, load limit lines, perform conformance analysis and predict harmonics using Django and JavaScript.",
        "summary": "Built a web portal to load and store emission data files and Limit Lines for all OEMs using Django and JavaScript. To visualize the data, used Plotly due to its compatibility with Python and JS. While performing spec-conformance, tabulated the frequency ranges where the emission passed the limit with an option to zoom to range on click. For harmonic analysis, peaks of the data are extracted and passed to an Autoencoder model for anomaly detection which gives the harmonic peaks. Using the first harmonic peak obtained, found the next resonant peaks and verified the harmonic detected. All plots and results were dumped into slides for presentation/reports.",
        "outcome": "This task would take 30-50 hours to complete but using this tool the user was able to perform the same task in 6 to 8 hours."
    },
    {
        "id": "3",
        "title": "Smart Inventory Tracking Using Asset Detection and OCR",
        "problemStatement": "While working in a lab, we tend to misplace important assets of various sizes and shapes. On average, every engineer lost 2 hours a week searching for just a screwdriver. Hence, we needed a way to track all assets big or small.",
        "skills": "Computer Vision, YoLo, OCR, Raspberry Pi 3B, Django",
	"approach": "Using a Raspberry Pi 3B, Pi camera, and mainly YoLo, we wanted to track who took the assets and when they’re returning them back at the inventory and storage. Also, we tried to detect assets in a needle in a haystack situation.",
        "summary": "Performed data annotation on assets, lab instruments, and equipment using DarkMark with several images taken over the past several months. Trained YoLo v4 with labeled images and converted it to YoLo-tiny to deploy on Raspberry Pi 3B. Interfaced a Pi Camera to the Raspberry Pi 3B and tested the quantized model on live feed. Deployed a simple Django web portal with Django REST API. Built an app in Raspberry Pi to take photos, label the equipment and pass it to the server via REST API calls. Set up the system such that when an asset is taken or returned, all information is stored for tracking, and users are emailed notifications when assets are available or due.",
        "outcome": "This increases the efficiency in the lab helping everyone find and track all assets and equipment."
    },
    {
        "id": "4",
        "title": "Truck Driver Assistance System with Safety Constraints using Facial Recognition and Voice Assistance ChatBot",
        "problemStatement": "Our truck client requested a PoC of a system that logs in drivers using face recognition, provides user-specific voice-based assistance, and keeps checking if the driver is drowsy and sends an alarm waking him/her up.",
        "skills": "Raspberry Pi 3B, Computer Vision, Speech Recognition, Facial Landmark Detection, Face Recognition, AWS",
	"approach": "We decided to build a face recognition module and drowsiness detection using facial landmarks and thresholding module and integrate them. We decided to use CMU’s Sphinx Speech Recognition module and gTTs Text-to-Speech module for our Driving Assistance.",
        "summary": "Searched for methods like Landmark Detection and ResNet models for face recognition and drowsiness detection. Found that dlib performs facial landmark detection well and Pre-trained ResNet101 to obtain Facial Embeddings. For drowsiness detection, we performed thresholding at the eyelid landmarks and lips. When the eye and lip landmark aspect ratios crossed thresholds for long durations, an alert was sent to the driver. Integrated all modules and deployed on Raspberry Pi 3B to demonstrate it as PoC.",
        "outcome": "The integrated module and demonstration impressed our clients. They granted funds for further development and production."
    },
    {
        "id": "5",
        "title": "Negative CLIPort: Improved Robotic Arm Control enhanced with Negative Language Goals",
        "problemStatement": "Most language-based models and datasets are developed in a positive tone. We wanted to test and fine-tune one such model for negative instructions for safety and security constraints.",
        "skills": "PyTorch, Visual Language Manipulation, GPU Architectures, Perception, Robotic Modeling",
	"approach": "We took the fin-tuned CLIPort model and tested it with negative instructions like 'Pick up the green block that’s not in the yellow square.' The model failed at Zero-shot testing, leading us to create a new negative dataset.",
        "summary": "Initially tested Zero-shot capability with negative prompts. The model failed, so we fine-tuned it with those prompts. We modified the dataset and successfully fine-tuned the model to negative instructions.",
        "outcome": "Achieved 93% accuracy after training over 20 epochs but observed some jitter while performing the action."
    },
    {
        "id": "6",
        "title": "Medical Image Analysis for Lung Disease Classification and Detection",
        "problemStatement": "To build a Multi-Task Module that performs Classification, Localization, and Segmentation of common lung diseases with scope of Zero-shot learning capabilities.",
        "skills": "Computer Vision, Medical Imaging, DICOM Datasets, SWIN, Object Detection, Segmentation",
	"approach": "Tried various SOTA models for classification on datasets like Chest X-Ray 14 and MIMIC IV. Used Faster R-CNN for localization and UPerNet for segmentation.",
        "summary": "Assigned tasks for classification, localization, and segmentation using respective datasets and models. Integrated the best models for multi-task problems.",
        "outcome": "Successfully performed classification, localization, and segmentation tasks on the respective datasets."
    },
    {
        "id": "7",
        "title": "Real-Time Hand Gesture Recognition System for Conference Calling and Media Control",
        "problemStatement": "To develop an embedded system that recognizes hand gestures from images to control PC software such as conference calling apps and media apps.",
        "skills": "Raspberry Pi 4B, Google MediaPipe, Computer Vision, Landmark Detection",
	"approach": "Deployed the model on Raspberry Pi 4, using two approaches: training from scratch or using a Palm Landmarks Embedding model.",
        "summary": "Used Hagrid dataset to train a ResNet50 classifier and then switched to a hand landmark detection model for better performance. Achieved high accuracy with the final model.",
        "outcome": "Achieved remarkable reductions in computation load on edge devices, improving performance across various applications."
    },
    {
        "id": "8",
        "title": "Facial Image Synthesis from Segmentation Maps and Sketches using GANs for Forensics",
        "problemStatement": "Identifying a suspect in a crime scene is getting more difficult. We aimed to use GANs to generate real-life images of people from sketches.",
        "skills": "Style GANs, Pixel2Style2Pixel",
	"approach": "Used Pixel2Style2Pixel GAN to generate realistic images from sketches for forensic applications.",
        "summary": "Fine-tuned the GAN model with larger datasets to improve generated images' quality and accuracy.",
        "outcome": "Generated images closely resembling the original images, improving forensic identification."
    },
    {
        "id": "9",
        "title": "GAN Abstract Art fusion with LSTM Poetry for NFT Auctioning",
        "problemStatement": "There was a huge demand in NFT trading. I decided to sell generated poetry imprinted on abstract art.",
        "skills": "GANs, LSTMs, Selenium",
	"approach": "Used LSTM to generate poetry and GAN for abstract art, combining them for sale on NFT platforms.",
        "summary": "Created a bot using Selenium to automate the upload of generated art and poetry onto Opensea.io for NFT trading.",
        "outcome": "Successfully launched and sold unique NFT art pieces combining poetry and abstract designs."
    }
];

const Portfolio = () => {
	const [expandedItem, setExpandedItem] = useState(null);

	const toggleItem = (id) => {
		setExpandedItem(expandedItem === id ? null : id);
	};

	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, title, problemStatement, skills, approach, summary, outcome }) => {
					const isOpen = expandedItem === id;

					return (
						<article key={id} className='portfolio__item' onClick={() => toggleItem(id)}>
							<h3>{title}</h3>
							{!isOpen ? (
								<div>
									<p><strong>Problem Statement:</strong> {problemStatement}</p>
									<p><strong>Skills:</strong> {skills}</p>
								</div>
							) : (
								<div>
									<p><strong>Problem Statement:</strong> {problemStatement}</p>
									<p><strong>Skills:</strong> {skills}</p>
									<p><strong>Our Approach:</strong> {approach}</p>
									<p><strong>Summary:</strong> {summary}</p>
									<p><strong>Outcome:</strong> {outcome}</p>
								</div>
							)}
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
