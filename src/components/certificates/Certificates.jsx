    import React from 'react';
    import { BsPatchCheckFill } from 'react-icons/bs';
    import './Certificates.css';
    import deep from '../../assets/deeplearningai.png';
    import duke from '../../assets/duke-university.png'
    import cou from '../../assets/coursera.png'

    const Certificates = () => {
        return (
            <section id="certificates">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
            <div className="container certificates__container">
                {certificatesData.map((cert, index) => (
                    <div className="certificates__item resume-wrap d-flex-col" key={index}>
                        <div className="d-flex ftco-animate fadeInUp ftco-animated">
                            <div className="icon d-flex align-items-center justify-content-center logo-container">
                                <img src={`${cert.logo}`} alt={`${cert.title} logo`} />
                            </div>
                            <div className="text pl-3">
                                <span className="date">{cert.date}</span>
                                <h2>{cert.title}</h2>
                                <span className="position">{cert.issuer}</span>
                                <p>Skills: {cert.skills}</p>
                            </div>
                        </div>
                        <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
                            <div className="text">
                                <p>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-3 px-3">View Certificate</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </section>
        );
    };

    const certificatesData = [
        {
            logo: deep,
            date: 'Sep 2024',
            title: 'Generative AI with Large Language Models',
            issuer: 'Issued by Amazon Web Services (AWS), DeepLearning.AI',
            skills: 'Generative AI, AWS SageMaker, Large Language Models (LLM)',
            link: 'https://www.coursera.org/account/accomplishments/records/ZB1PM0U4JV9H',
        },
        {
            logo: deep,
            date: 'Jul 2024',
            title: 'Finetuning Large Language Models',
            issuer: 'Issued by DeepLearning.AI',
            skills: 'Large Language Models (LLMs)',
            link: 'https://learn.deeplearning.ai/accomplishments/583ec3b1-90f8-4b6d-932b-68ad66a74caa?usp=sharing',
        },
        {
            logo: deep,
            date: 'July 2024',
            title: 'Building and Evaluating Advanced RAG',
            issuer: 'Issued by DeepLearning.AI',
            skills: 'Skills: Large Language Models (LLM) · RAG',
            link: 'https://learn.deeplearning.ai/accomplishments/0dbda263-ebfc-4b1e-83e8-e04803ec173e?usp=sharing',
        },
        {
            logo: deep,
            date: 'July 2024',
            title: 'How Diffusion Models Work!',
            issuer: 'Issued by DeepLearning.AI',
            skills: 'Diffusion model',
            link: 'https://learn.deeplearning.ai/accomplishments/6b897e07-33a5-4c21-974a-794004322e90?usp=sharing',
        },
        {
            logo: deep,
            date: 'July 2024',
            title: 'Machine Learning in Production',
            issuer: 'Issued by DeepLearning.AI',
            skills: 'MLOps',
            link: 'https://coursera.org/share/ed094a6efd0c15d3c94ff3796ca5ab02',
        },
        {
            logo: deep,
            date: 'July 2024',
            title: 'DeepLearning.AI TensorFlow Developer',
            issuer: 'Issued by DeepLearning.AI',
            skills: 'TensorFlow · Image Processing · Machine Learning Algorithms · Image Recognition · Pandas (Software) · Deeplearning · Keras · OpenCV · Neural Networks',
            link: 'https://coursera.org/share/073973c4f825300ba4663d726305a745',
        },
        {
            logo: duke,
            date: 'July 2023',
            title: 'MLOps|Machine Learning Operations',
            issuer: 'Issued by Duke University',
            skills: 'MLflow · Image Processing · DevOps · Pandas (Software) · Huggingface · DataOps · Neural Networks · AWS SageMaker · MLOps',
            link: 'https://coursera.org/share/da6d613707cd3f5000967b32b4cd7992',
        },
        {
            logo: deep,
            date: 'May 2020',
            title: 'Deep learning specialization',
            issuer: 'Issued by DeepLearning.AI',
            skills: 'Applied Mathematics · Natural Language Processing (NLP) · Image Processing · Image Recognition · Machine Learning · Pandas (Software) · Deep Learning · Keras · Data Analysis · Embedded Machine Learning · OpenCV · Neural Networks · Computer Vision',
            link: 'https://www.coursera.org/account/accomplishments/specialization/UXY75KP9ACMK',
        },
        {
            logo: cou,
            date: 'Nov 2019',
            title: 'Machine Learning',
            issuer: 'Issued by Amazon Web Services (AWS), DeepLearning.AI',
            skills: 'Applied Mathematics · Image Recognition · Machine Learning · Deep Learning · Data Analysis · Embedded Machine Learning · Time Series Analysis · OpenCV · Pattern Recognition',
            link: 'https://www.coursera.org/account/accomplishments/certificate/YB3RKYA3XZZY?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate',
        },
    ];

    export default Certificates;
