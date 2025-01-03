import React from 'react';
import './Certification.css';

const certifications = [
  {
    title: "AWS Academy Machine Learning",
    imageSrc: "assets/certifications/awsmlcertificate.png",
    link: "https://drive.google.com/file/d/1hzsTnes5ylyZIoQFLGct_KzTXyILxMk0/view?usp=sharing"
  },
  {
    title: "Oracle JAVA Certification",
    imageSrc: "assets/certifications/JavaFundamentals.png",
    link: "https://drive.google.com/file/d/1bymdwEGaUi73OmCQfO4p6r-38Ctw8Tw5/view?usp=sharing"
  },
  {
    title: "Oracle SQL Certification",
    imageSrc: "assets/certifications/sqlfundamentals.png",
    link: "https://drive.google.com/file/d/1tPPvsdpE_4uF6GIBfaZszWiOusHky7X0/view?usp=sharing"
  },
  {
    title: "Python for Data Science",
    imageSrc: "path_to_image3.jpg",
    link: "https://drive.google.com/your_certificate_link_3"
  },
];

const CertificationSection = () => {
  return (
    <div className="certification-section" id="certificates">
      <div className="certification-header">
        <h1 className='certification-title'>Certifications</h1>
      </div>
      {certifications.map((cert, index) => (
        <div key={index} className="certificate-card">
          <img src={cert.imageSrc} alt={cert.title} className="certificate-image" />
          <h3>{cert.title}</h3>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">View Certificate</a>
        </div>
      ))}
    </div>
  );
};

export default CertificationSection;
