import React from "react";
import "./Footer.css";
import logo from '../assets/image.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="contact-item">
          <FaPhoneAlt />
          <span>+91 XXXXXXXXXX</span>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <span>globalschool@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>
            Dharapuram Road, Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur –
            638701
          </span>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-section">
          <img
            src={logo}
            alt="School Logo"
            className="school-logo"
          />
          <p>
            Global International School <br />
            Affiliated to CBSE, New Delhi. Affiliation No. 1931647, Dharapuram
            Road, Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur – 638701
          </p>
        </div>
        <div className="footer-section">
          <h4>EXPLORE</h4>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>Life@GMHSS</li>
            <li>Careers</li>
            <li>Contact US</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Alumni Connect</li>
            <li>Admissions</li>
            <li>Fee Structure</li>
            <li>Curriculum</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>SOCIAL MEDIA</h4>
          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;