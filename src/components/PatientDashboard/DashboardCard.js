import React from "react";
import "./DashboardCard.css";
import img1 from "../imgs/img1.jpg";


const DashboardCard = () => {

  const getSeverityClass = (severity) => {
    switch (severity) {
      case "High":
        return "high"; // Red color
      case "Moderate":
        return "moderate"; // Yellow color
      case "Low":
        return "low"; // Green color
      default:
        return ""; // Default color
    }
  };

  return (
    <div className="dashboard-card">
      {/* Left Side - Profile Section */}
      <div className="profile-section">
        <div className="profile-image">
          <img
            src={img1}
            alt="User Profile"
            className="image"
          />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">Maria Waston</h2>
          <p className="profile-email">mariawaston2022@gmail.com</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>

      {/* Right Side - User Details Section */}
      <div className="details-section">
        <div className="detail">
          <span className="detail-label">Last Eye Exam:</span>
          <span className="detail-value">10 Mar 2023</span>
        </div>
        <div className="detail">
          <span className="detail-label">Retinopathy Stage:</span>
          <span className={`detail-value ${getSeverityClass("Moderate")}`}>Moderate</span>
        </div>
        <div className="detail">
          <span className="detail-label">Visual Acuity (OD):</span>
          <span className={`detail-value ${getSeverityClass("Low")}`}>20/40</span>
        </div>
        <div className="detail">
          <span className="detail-label">Visual Acuity (OS):</span>
          <span className={`detail-value ${getSeverityClass("Low")}`}>20/40</span>
        </div>
        <div className="detail">
          <span className="detail-label">Insulin Therapy:</span>
          <span className={`detail-value ${getSeverityClass("Low")}`}>Insulin Pump - 10 units/day</span>
        </div>
        <div className="detail">
          <span className="detail-label">Laser Treatment:</span>
          <span className="detail-value">Yes, 5 Jan 2023</span>
        </div>
        <div className="detail">
          <span className="detail-label">Chronic Kidney Disease:</span>
          <span className="detail-value">No</span>
        </div>
        <div className="detail">
          <span className="detail-label">Retinal Surgery History:</span>
          <span className="detail-value">No</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
