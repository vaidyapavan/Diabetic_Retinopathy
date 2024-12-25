import React, { useState } from 'react';
import './DoctorRegistration.css';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    specialty: '',
    availableTime: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNo ||
      !formData.specialty ||
      !formData.availableTime
    ) {
      setMessage('Please fill in all the fields.');
      return;
    }

    setMessage('Doctor successfully registered!');
    setFormData({
      name: '',
      email: '',
      phoneNo: '',
      specialty: '',
      availableTime: '',
    });
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      phoneNo: '',
      specialty: '',
      availableTime: '',
    });
    setMessage('');
  };

  return (
    <div className="registration-page">
      <h2>Doctor Registration</h2>
      <form className="registration-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Doctor Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter doctor's name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter doctor's email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Enter doctor's phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Specialty</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            placeholder="Enter doctor's specialty"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="availableTime">Available Time</label>
          <input
            type="text"
            id="availableTime"
            name="availableTime"
            value={formData.availableTime}
            onChange={handleChange}
            placeholder="Enter available time (e.g., 9:00 AM - 5:00 PM)"
            required
          />
        </div>
        {message && <p className="message">{message}</p>}
        <div className="form-buttons">
          <button type="submit" className="register-button">
            Register
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorRegistration;
