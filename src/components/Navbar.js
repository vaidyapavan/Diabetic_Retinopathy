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
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/landingpage">Login</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
