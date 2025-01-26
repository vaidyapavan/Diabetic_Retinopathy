import React from "react";
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Navbar  from'./Navbar';

const Footer = () => {
    return (
        <>
            <div className="main_container">
              <Navbar></Navbar>
                <footer className="footer">
                    <div className="footer-logo">HOPE</div>
                    <p>Federated learning-based models for detection and classification of diabetic retinopathy</p>
                    <div className="social-media">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <TwitterIcon />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <InstagramIcon />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FacebookIcon />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <LinkedInIcon/>
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;
