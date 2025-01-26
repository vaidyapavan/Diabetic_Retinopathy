import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlreadyDoctor.css'; // Add relevant CSS for this component if needed
import axios from 'axios'; // Import axios for making HTTP requests

const AlreadyDoctor = ({ onSignupClick }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospital_id: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCancelClick = () => {
    navigate('/'); // Redirect back to the landing page
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:5000/login-hospital', formData);

      if (response.data.success) {
        // On successful login, navigate to the landing page
        navigate('/landingpage');
      } else {
        setMessage(response.data.message); // Show the error message if credentials are invalid
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  const handleSignupClick = () => {
    if (onSignupClick) {
      onSignupClick();
    } else {
      navigate('/registrationform');
    }
  };

  return (
    <div className="form-container">
<h3 style={{ textAlign: "center" }}>Hospital Login</h3>

      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="hospital_id">Hospital User ID:</label>
          <input
            type="text"
            id="hospital_id"
            name="hospital_id"
            placeholder="Enter Hospital User ID"
            required
            value={formData.hospital_id}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {message && <p className="error-message">{message}</p>} {/* Display error message */}
        <div className="button-group">
          <button
            type="submit"
            className="login-btn"
            style={{ backgroundColor: 'green', color: 'white' , marginLeft:"80px"}}
          >
            Login
          </button>
          <button
            type="button"
            className="cancel-btn"
            style={{ backgroundColor: 'red', color: 'white', marginRight:"80px"}}
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

export default AlreadyDoctor;
