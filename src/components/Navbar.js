import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>HOPE</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <div className="login-btn-container">
        <Link to="/accesspage" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
