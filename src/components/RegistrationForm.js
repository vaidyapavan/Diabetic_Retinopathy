import React, { useState } from 'react';
import './RegistrationForm.css'; // Add styling for the form
import axios from 'axios'; // Import axios for making HTTP requests

const RegistrationForm = () => {
  const [hospitalDetails, setHospitalDetails] = useState({
    name: '',
    address: '',
    hospital_id: '',
    password: '',
    confirm_password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalDetails({
      ...hospitalDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hospitalDetails.password !== hospitalDetails.confirm_password) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register-hospital', hospitalDetails);
      if (response.data.success) {
        setSuccess('Hospital Registered Successfully!');
        setError('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Error registering hospital. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h3  style={{ textAlign: "center" }}>Hospital Registration</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Hospital Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hospitalDetails.name}
            onChange={handleChange}
            placeholder="Enter Hospital Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Hospital Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={hospitalDetails.address}
            onChange={handleChange}
            placeholder="Enter Address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hospital_id">Hospital ID:</label>
          <input
            type="text"
            id="hospital_id"
            name="hospital_id"
            value={hospitalDetails.hospital_id}
            onChange={handleChange}
            placeholder="Enter Hospital ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={hospitalDetails.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={hospitalDetails.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="register-btn" style={{marginLeft:"60px"}}>Register</button>
          <button type="button" className="cancel-btn" onClick={() => window.history.back()} style={{marginRight:"90px"}}>Cancel</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default RegistrationForm;
