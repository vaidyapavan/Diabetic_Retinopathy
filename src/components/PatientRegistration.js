import React, { useState } from "react";
import "./PatientRegistration.css";

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    address: "",
    phone: "",
    isGenetic: "No",
  });

  const [message, setMessage] = useState("");

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
      !formData.age ||
      !formData.bloodGroup ||
      !formData.address ||
      !formData.phone
    ) {
      setMessage("Please fill in all the fields.");
      return;
    }

    setMessage("Successfully registered!");
    setFormData({
      name: "",
      age: "",
      bloodGroup: "",
      address: "",
      phone: "",
      isGenetic: "No",
    });
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      age: "",
      bloodGroup: "",
      address: "",
      phone: "",
      isGenetic: "No",
    });
    setMessage("");
  };

  return (
    <div className="registration-page">
      <h2>Patient Registration</h2>
      <form className="registration-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter patient name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter patient age"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Enter blood group"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="isGenetic">Is it genetic?</label>
          <select
            id="isGenetic"
            name="isGenetic"
            value={formData.isGenetic}
            onChange={handleChange}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
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

export default PatientRegistration;
