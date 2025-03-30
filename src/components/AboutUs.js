import React from 'react';
import styles from './AboutUs.module.css';
import image1 from '../images/2.jpg'; // Import the image
import Navbar from './Navbar';
import Footer from './Footer';
import ImageSlider from './ImageSlider';


const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Navbar></Navbar>
     
      <ImageSlider></ImageSlider>

      <div className={styles.container}>
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>What is Federated Learning?</h2>
    <p className={styles.sectionContent}>
      Federated learning is a revolutionary approach to machine learning that enables models to be trained across
      multiple decentralized devices while keeping data on the local device.
    </p>
  </div>

  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>Data Privacy</h2>
    <p className={styles.sectionContent}>
      This method ensures that personal health data remains private, as it is never shared or transferred to a central server.
    </p>
  </div>

  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>How It Works</h2>
    <p className={styles.sectionContent}>
      Instead, only model updates are shared, making federated learning a secure and privacy-preserving solution for healthcare applications like ours.
    </p>
  </div>
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>How It Works</h2>
    <p className={styles.sectionContent}>
      Instead, only model updates are shared, making federated learning a secure and privacy-preserving solution for healthcare applications like ours.
    </p>
  </div>
</div>


      <div className={styles.federatedLearningSection}>
        <h2>Federated Learning in Healthcare</h2>
        <h3>Key Features</h3>

        <div className={styles.featureCardsContainer}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <span>🤖</span> {/* AI Icon */}
            </div>
            <h4>AI-Based Retinopathy Detection</h4>
            <p>Federated learning enables AI models to detect diabetic retinopathy with high accuracy, ensuring timely diagnosis.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <span>🔒</span> {/* Privacy Icon */}
            </div>
            <h4>Data Privacy with Federated Learning</h4>
            <p>Personal health data remains private, with only model updates shared instead of sensitive data.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <span>📊</span> {/* Customization Icon */}
            </div>
            <h4>Customizable Health Insights</h4>
            <p>Federated learning allows the generation of personalized health insights tailored to the individual’s needs.</p>
          </div>
        </div>
      </div>



      <Footer></Footer>
    </div>
  );
};

export default About;
