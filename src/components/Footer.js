import React from "react";

// Import icons from 'react-icons' library
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Import assets
import Logo from "../assets/logo.png";

// Import styles
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-section">
          <div className="footer-info">
            <div className="logo">
              <img src={Logo} alt="Task-tech" />
            </div>
            <p className="footer-text">
              help fresh graduates who need a job opportunity to develop
              themselves. so it will help the business owners to save a lot of
              effort, time and money to get there service at the best price.
            </p>
            <ul className="social-links">
              <li>
                <FaFacebookF /> / Tasktech@yahoo.com
              </li>
              <li>
                <FaTwitter /> / Tasktech201
              </li>
              <li>
                <FaLinkedinIn /> / Tasktech.21@gmail.com
              </li>
            </ul>
          </div>
          <ul className="links">
            <h3 className="footer-title">Trending Category</h3>
            <li>Ui/ UX Design</li>
            <li>Web Design</li>
            <li>Marketing</li>
            <li>App Developer</li>
            <li>Product Manager</li>
            <li>Graphic Designer</li>
            <li>Accountant</li>
            <li>Software Engineering</li>
          </ul>
          <ul className="links">
            <h3 className="footer-title">Useful Links</h3>
            <li>Home </li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>How it works </li>
          </ul>
        </div>
      </div>
      <div className="copyrights-section">
        <div className="container">
          <div className="copyrights-text">
            Copyright © All rights reserved.2022
          </div>
          <ul className="copyrights-links">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Content Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
