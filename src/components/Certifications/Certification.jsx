// src/components/Certification.js

import React from 'react';
import './Certification.css';  // Importing the CSS file for styling

const Certification = ({ title, imageSrc, description, link }) => {
  return (
    <div className="certificate-card">
    
      <img src={imageSrc} alt={title} className="certificate-image" />
      <div className="certificate-details">
        <h3 className="certificate-title">{title}</h3>
        <p className="certificate-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="certificate-link">
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default Certification;
