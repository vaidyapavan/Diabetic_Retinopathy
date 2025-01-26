import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlreadyPatient.css'; // Add relevant CSS for styling

const AlreadyPatient = () => {
  const [patientID, setPatientID] = useState('');
  const [patientName, setPatientName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/'); // Redirect back to the landing page
  };

  const handleSignupClick = () => {
    navigate('/patient-data'); // Navigate to the signup page
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'patient_id') setPatientID(value);
    else if (name === 'patient_name') setPatientName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation: Ensure both fields are provided
    if (!patientID || !patientName) {
      setErrorMessage('Please enter both Patient ID and Name.');
      return;
    }

    try {
      // Send login request to backend
      const response = await fetch('http://localhost:5000/login-patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patient_id: patientID, patient_name: patientName }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success
        navigate('/landingpage'); // Navigate to the patient dashboard on success
      } else {
        // Display error from backend
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="patient-login-form">
      <h3>Patient Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patient_id">Patient ID:</label>
          <input
            type="text"
            id="patient_id"
            name="patient_id"
            value={patientID}
            onChange={handleInputChange}
            placeholder="Enter Patient ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patient_name">Patient Name:</label>
          <input
            type="text"
            id="patient_name"
            name="patient_name"
            value={patientName}
            onChange={handleInputChange}
            placeholder="Enter Patient Name"
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-group">
          <button type="submit" className="login-btn" style={{ backgroundColor: 'green', color: 'white' }}>
            Login
          </button>
          <button type="button" className="cancel-btn" style={{ backgroundColor: 'red', color: 'white', marginRight:"50px"}} onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
      <p>
        Don't have an account?{' '}
        <a href="#" onClick={handleSignupClick}>
          Sign up here
        </a>
      </p>
    </div>
  );
};

export default AlreadyPatient;
