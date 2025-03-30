"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AccessPage.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
const AccessPage = () => {
  const navigate = useNavigate()

  // State to manage the display of login and registration forms
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showSignupForm, setShowSignupForm] = useState(false)

  // Function to handle showing login form
  const handleHospitalLoginClick = () => {
    setShowLoginForm(true)
    navigate("/alreadydoctor")
  }

  // Function to handle showing signup form
  const handleDoctorSignup = () => {
    setShowSignupForm(true)
    navigate("/registrationform")
  }

  const handlePatientSignup = () => {
    setShowLoginForm(true)
    navigate("/patient-data")
  }

  // Function to handle canceling the signup
  const handleCancelClick = () => {
    setShowSignupForm(false)
    setShowLoginForm(false)
  }

  const handlePatientLoginClick = () => {
    setShowSignupForm(true)
    navigate("/alreadypatient")
  }

  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <div className="section hospital">
          <div className="section-inner">
            <h2>For Hospitals</h2>
            <p>Manage patient records, analyze diagnosis trends and access federated learning insights.</p>
            <button className="login-section-btn" onClick={handleHospitalLoginClick}>
              Login
            </button>
            <div className="note">
              <span>Don't have a account?</span>
              <span className="signup-text" onClick={handleDoctorSignup}>
                Sign up
              </span>
            </div>
          </div>
        </div>

        <div className="section patient">
          <div className="section-inner">
            <h2>For Patients</h2>
            <p>Access your reports, monitor your progress and schedule consultant.</p>
            <button className="login-section-btn" onClick={handlePatientLoginClick}>
              Login
            </button>
            <div className="note">
              <span>Don't have a account?</span>
              <span className="signup-text" onClick={handlePatientSignup}>
                Sign up
              </span>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default AccessPage

