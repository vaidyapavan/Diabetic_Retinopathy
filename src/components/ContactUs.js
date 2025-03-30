import React, { useState } from 'react';
import styles from './ContactUs.module.css';  // Importing the CSS Module
import Footer from './Footer';
import Navbar from './Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [serverResponse, setServerResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.message) {
      formErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/submit-query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Form submitted successfully:', formData);
          setServerResponse(data.message);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setErrors({});
        } else {
          console.error('Failed to submit form:', data.message);
          setServerResponse(data.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setServerResponse('An error occurred while submitting the form.');
      }
    }
  };

  return (
    <> 
      <div className={styles.contactUsContainer}>
        <Navbar></Navbar>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below.</p>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.inputError : ''}
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.inputError : ''}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? styles.inputError : ''}
            ></textarea>
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.submitBtn}>Submit</button>

          {/* Display server response */}
          {serverResponse && <p className={styles.serverResponse}>{serverResponse}</p>}
        </form>
      
      </div>
    
    </>
    
  );
};

export default ContactUs;
