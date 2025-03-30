import { Play, Pause, Volume2, Maximize } from "lucide-react"
import "../components/HomePage.css"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import doctor_image from "../images/doctor.jpg"
import first from "../images/11.jpg"
import second from "../images/22.jpg"
import third from "../images/33.jpg"
import female from "../images/female.jpeg"
import vision from "../images/vision.jpg"
import mision from "../images/mission.jpg"
import doctor1 from "../images/doctor1.jpg"
import doctor2 from "../images/doctor2.jpg"
import doctor3 from "../images/doctor3.jpg"
import doctor4 from "../images/doctor4.jpg"
import logo from "../images/logo.png"

const HomePage = () => {
  return (
    <div className="page-container">
      {/* Header Navigation */}
      <header className="header">
        <div class="header">
          <div class="header-container">

            <nav class="navbar">
              <img src={logo} alt="Retinal Examination Icon" width={64} height={64} />
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>

      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Innovating with Care,
                <br />
                for a Healthier You
              </h1>
              <div className="video-container">
                <img
                  src={doctor_image}
                  alt="Doctor smiling"
                  width={400}
                  height={300}
                  className="video-image"
                />
                <div className="video-controls">
                  <button className="control-button">
                    <Pause className="control-icon" />
                  </button>
                  <button className="control-button">
                    <Volume2 className="control-icon" />
                  </button>
                  <button className="control-button">
                    <Play className="control-icon" />
                  </button>
                  <button className="control-button red">
                    <Maximize className="control-icon" />
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {/* Retinal Examination */}
            <div className="service-card">
              <div className="service-icon">
                <img src={first} alt="Retinal Examination Icon" width={64} height={64} />
              </div>
              <h3 className="service-title">Retinal Examination</h3>
              <p className="service-text">
                A retinal examination is essential for detecting diabetic retinopathy, a condition caused by diabetes.
                Diabetic retinopathy impacts the retina and can be identified early through regular retinal check-ups.
              </p>
            </div>

            {/* STOP Diabetes */}
            <div className="service-card">
              <div className="service-icon">
                <img src={second} alt="Stop Diabetes Icon" width={64} height={64} />
              </div>
              <h3 className="service-title">STOP Diabetes</h3>
              <p className="service-text">
                Diabetes can cause diabetic retinopathy, leading to vision loss or blindness if left untreated. Early
                detection, regular eye exams, and maintaining a healthy lifestyle are vital to preventing complications
                from diabetic retinopathy.
              </p>
            </div>

            {/* At a glance */}
            <div className="service-card">
              <div className="service-icon">
                <img src={third} alt="At a glance Icon" width={64} height={64} />
              </div>
              <h3 className="service-title">At a glance</h3>
              <p className="service-text">
                Accuracy, Correct classifications of DR severity Precision and Recall. For imbalanced datasets with
                multiple DR stages. Later Symptoms: Blurry vision, floating spots, blindness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teleconsult Section */}
      <section className="teleconsult-section">
        <div className="container">
          <div className="teleconsult-card">
            <div className="teleconsult-content">
              <h2 className="teleconsult-title">
                Teleconsult: Our
                <br />
                Patient Advisors
              </h2>
              <button className="book-call-button">Book a Call</button>
            </div>
            <div className="teleconsult-image">
              <img
                src={female}
                alt="Female Doctor"
                width={200}
                height={400}
                className="doctor-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {/* Total Patients */}
            <div className="stat-card">
              <div className="stat-icon">
                <img src={first} width={64} height={64} />
              </div>
              <h3 className="stat-title">Total Patients</h3>
            </div>

            {/* Total Doctors */}
            <div className="stat-card">
              <div className="stat-icon">
                <img src={second} width={64} height={64} />
              </div>
              <h3 className="stat-title">Total Doctors</h3>
            </div>

            {/* Recovered Patients */}
            <div className="stat-card">
              <div className="stat-icon">
                <img src={third} alt="Recovered Patients Icon" width={64} height={64} />
              </div>
              <h3 className="stat-title">Recovered Patients</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            {/* Vision */}
            <div className="circle-card">
              <div className="circle-background"></div>
              <h3 className="circle-title">Vision</h3>
              <div className="circle-icon">
                <img src={vision} alt="Vision Icon" width={30} height={30} />
              </div>
              <p className="circle-text">
                Empowering healthcare with efficient, secure, and accessible diabetic retinopathy detection to improve
                early diagnosis and patient care globally.
              </p>
            </div>

            {/* Mission */}
            <div className="circle-card">
              <div className="circle-background"></div>
              <h3 className="circle-title">Mission</h3>
              <div className="circle-icon">
                <img src={mision} alt="Mission Icon" width={30} height={30} />
              </div>
              <p className="circle-text">
                At Hope, we believe in transforming healthcare by making diabetic retinopathy detection faster, easier,
                and more accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="specialists-section">
        <div className="container">
          <h2 className="specialists-title">Specialist</h2>
          <div className="specialists-grid">
            {/* Doctor 1 */}
            <div className="doctor-card">
              <img
                src={doctor1}
                alt="Dr. Sam Warren"
                width={200}
                height={200}
                className="doctor-photo"
              />
              <div className="doctor-name">
                <h3>Dr. Sam Warren</h3>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="doctor-card">
              <img
                src={doctor2}
                alt="Dr. Cameron Williamson"
                width={200}
                height={200}
                className="doctor-photo"
              />
              <div className="doctor-name">
                <h3>Dr. Cameron Williamson</h3>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="doctor-card">
              <img
                src={doctor3}
                alt="Dr. Regina Phalange"
                width={200}
                height={200}
                className="doctor-photo"
              />
              <div className="doctor-name">
                <h3>Dr. Regina Phalange</h3>
              </div>
            </div>

            {/* Doctor 4 */}
            <div className="doctor-card">
              <img
                src={doctor4}
                alt="Dr. Drake Ramoray"
                width={200}
                height={200}
                className="doctor-photo"
              />
              <div className="doctor-name">
                <h3>Dr. Drake Ramoray</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Logo and About */}
            <div className="footer-column">
              <div className="footer-logo">
                <img
                  src={logo}
                  alt="Hope Logo"
                  width={30}
                  height={30}
                  className="footer-logo-image"
                />
                <span className="footer-logo-text">HOPE</span>
              </div>
              <h4 className="footer-heading">About HopePoint</h4>
              <p className="footer-text">
                HopePoint is a cutting-edge eye care platform focused on combating diabetes-related eye conditions
                around the world. We are headquartered in the USA.
              </p>
            </div>

            {/* Useful Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Useful Links</h4>
              <ul className="footer-links">

                <li>
                  <a href="#" className="footer-link">
                    Treatment of DR
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Clinical Trial
                  </a>
                </li>


                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="footer-link">
                    Medical Videos
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="contact-list">
                <li className="contact-item">
                  <div className="contact-icon red"></div>
                  <span>info@hopepoint.com</span>
                </li>
                <li className="contact-item">
                  <div className="contact-icon yellow"></div>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="contact-item">
                  <div className="contact-icon blue"></div>
                  <span>123 Medical Center Dr, Healthcare City, USA</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Downloads
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon-link facebook">
              <span className="sr-only">Facebook</span>
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="social-icon-link instagram">
              <span className="sr-only">Instagram</span>
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="social-icon-link linkedin">
              <span className="sr-only">LinkedIn</span>
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="social-icon-link youtube">
              <span className="sr-only">YouTube</span>
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="social-icon-link pinterest">
              <span className="sr-only">Pinterest</span>
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

