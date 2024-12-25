import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AlreadyPatient.css'; // Add relevant CSS for styling

const AlreadyPatient = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/'); // Redirect back to the landing page
  };

  const handleSignupClick = () => {
    navigate('/patient-data'); // Navigate to the signup page
  };

  return (
    <div className="patient-login-form">
      <h3>Patient Login</h3>
      <form>
        <div className="form-group">
          <label htmlFor="patient_id">Patient ID:</label>
          <input
            type="text"
            id="patient_id"
            name="patient_id"
            placeholder="Enter Patient ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patient_username">Username:</label>
          <input
            type="text"
            id="patient_username"
            name="patient_username"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="button-group">
          <button
            type="submit"
            className="login-btn"
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            Login
          </button>
          <button
            type="button"
            className="cancel-btn"
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleCancelClick}
          >
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
