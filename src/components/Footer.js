import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Navbar from './Navbar';
import styles from './Footer.module.css'; // Importing CSS module

const Footer = () => {
    return (
        <>
            <div className={styles.main_container}>
                <Navbar />
                <footer className={styles.footer}>
                    <div className={styles.footerLogo}>HOPE</div>
                    <p>Federated learning-based models for detection and classification of diabetic retinopathy</p>
                    <div className={styles.socialMedia}>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <TwitterIcon />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <InstagramIcon />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FacebookIcon />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <LinkedInIcon />
                        </a>
                        <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <EmailIcon></EmailIcon>
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;
