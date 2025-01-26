import React from 'react';
import './AboutUs.css'; // Import CSS for styling
import image1 from '../images/2.jpg'; // Import the image
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-container">
      <Navbar></Navbar>
      <h1>About Us</h1>
     

      <div className="about-content">
        {/* Text and Image Section */}
        <div className="text-section">
        <p>
          Federated learning is a revolutionary approach to machine learning that enables models to be trained across 
          multiple decentralized devices while keeping data on the local device. This method ensures that personal health 
          data remains private, as it is never shared or transferred to a central server. Instead, only model updates are 
          shared, making federated learning a secure and privacy-preserving solution for healthcare applications like ours.
        </p>
        </div>

        {/* <div className="image-section">
          <img
            src={image1} 
            alt="Group Exercise"
          />
        </div> */}
      </div>

      {/* Federated Learning Section */}
      <div className="federated-learning-section">
        <h2>Federated Learning in Healthcare</h2>
       
        <h3>Key Features</h3>
        <ul>
          <li>AI-Based Retinopathy Detection</li>
          <li>Data Privacy with Federated Learning</li>
          <li>Customizable Health Insights</li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
