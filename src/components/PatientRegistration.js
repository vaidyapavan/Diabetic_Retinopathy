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
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation
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

    setIsLoading(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("http://localhost:5000/register-patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if response status is not 2xx
      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.message || "Error registering patient.");
      } else {
        const data = await response.json();
        setMessage(`Successfully registered! Patient ID: ${data.patientID}`);

        // Clear the form
        setFormData({
          name: "",
          age: "",
          bloodGroup: "",
          address: "",
          phone: "",
          isGenetic: "No",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while registering the patient.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle cancel action
  const handleCancel = () => {
    setFormData({
      name: "",
      age: "",
      bloodGroup: "",
      address: "",
      phone: "",
      isGenetic: "No",
    });
    setMessage(""); // Clear the message
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
          <button type="submit" className="register-button" disabled={isLoading} style={{marginLeft:"90px"}}>
            {isLoading ? "Registering..." : "Register"}
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
             style={{marginRight:"90px"}}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegistration;
