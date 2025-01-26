import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
    <div>  <Navbar></Navbar></div>
  
  
    < div className="homepage">
    {/* First Section - Banner */}
    <section className="banner-section">
      <div className="banner-content">
        <h1>Innovating with Care, for a Healthier You</h1>
        <img src={image1} alt="Blood Sugar Measurement" className="banner-image" />
      </div>
    </section>

    {/* Cards Section */}
    <section className="cards-section">
      <div className="card">
        <h3>At a Glance</h3>
        <ul>
          <li>Accuracy: Correct classifications of DR severity.</li>
          <li>Precision and Recall: For imbalanced datasets with multiple DR stages.</li>
          <li>Later Symptoms: Blurry vision, floating spots, blindness.</li>
          <li>Treatment: Injections, laser treatment, surgery.</li>
        </ul>
        <img src={image2} alt="Blood Sugar Measurement" className="card-image" />
      </div>

      <div className="card">
        <h3>What is Diabetic Retinopathy?</h3>
        <p>
          Diabetic retinopathy is an eye condition that can cause vision loss and blindness in people who have diabetes. It affects blood vessels in the retina.
        </p>
        <img src={image3} alt="Eye Examination" className="card-image" />
      </div>
    </section>

    {/* Footer */}
    {/* <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/3.jpg" alt="Logo" className="logo-image" />
        </div>
        <p>Federated learning-based models for detection and classification of diabetic retinopathy.</p>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </footer> */}
    <Footer></Footer>
  </div>
    </>
   
  );
};

export default HomePage;
