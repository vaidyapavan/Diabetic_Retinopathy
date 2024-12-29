import React from 'react';
import './PatientDetails.css';

const PatientDetails = () => {
  return (
    <div className="patient-details">
      <h3>Patient Information</h3>
      <div className="details-row">
        <span><strong>Name:</strong> Maria Waston</span>
        <span><strong>Age:</strong> 28</span>
      </div>
      <div className="details-row">
        <span><strong>Email:</strong> mariawaston2022@gmail.com</span>
        <span><strong>Blood Group:</strong> A+</span>
      </div>
      <div className="details-row">
        <span><strong>Diabetes Type:</strong> Type 2</span>
        <span><strong>Diabetes Diagnosis Date:</strong> 15 Jan 2015</span>
      </div>
      <div className="details-row">
        <span><strong>Hypertension Status:</strong> Yes</span>
        <span><strong>Last HbA1c Level:</strong> 7.5%</span>
      </div>
      <div className="details-row">
        <span><strong>Smoking Status:</strong> No</span>
        <span><strong>Family History of Retinopathy:</strong> Yes</span>
      </div>
    </div>
  );
};

export default PatientDetails;
