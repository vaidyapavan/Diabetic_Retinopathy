import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="homepage-content">
        <h2>Welcome to HOPE </h2>
        <p>
        This provides you with detection and classification of diabetic retinopathy
        </p>
      </div>
    </div>
  );
};

export default HomePage;
