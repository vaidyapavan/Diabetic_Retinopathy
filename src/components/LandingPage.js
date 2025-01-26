import React from 'react';

import './LandingPage.css'; // CSS file to style the component
import Navbar from './Navbar';

import Footer from './Footer';
const LandingPage = () => {
  return (
    <div className='main_container'>
    <Navbar />
    <div className="homepage-content">
      <h2>Welcome to HOPE </h2>
      <p>
      This provides you with detection and classification of diabetic retinopathy
      </p>
    </div>
    {/* <Footer></Footer> */}
  </div>
  );
};

export default LandingPage;
