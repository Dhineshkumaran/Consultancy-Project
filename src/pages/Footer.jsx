import React from "react";
import logo from '../assets/image.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800 font-sans px-6 pt-12 pb-6">
      
      {/* Top Contact Section */}
      <div className="bg-sky-50 rounded-xl p-6 mb-10 flex flex-wrap justify-between items-center gap-4 shadow-sm">
        <div className="flex items-center gap-3 text-gray-700 mb-4 sm:mb-0">
          <FaPhoneAlt className="text-blue-600" />
          <span>+91 XXXXXXXXXX</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 mb-4 sm:mb-0">
          <FaEnvelope className="text-blue-600" />
          <span>globalschool@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
          <FaMapMarkerAlt className="text-blue-600" />
          <span>
            Dharapuram Road, Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur – 638701
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-wrap justify-between md:divide-x divide-gray-300 text-gray-700 gap-6">
        
        {/* School Info */}
        <div className="flex-1 min-w-[230px] mb-6 md:px-4">
          <img src={logo} alt="School Logo" className="w-16 mb-3" />
          <p className="text-sm leading-relaxed">
          Dharapuram Road, Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur – 638701
          </p>
        </div>

        {/* Explore Links */}
        <div className="flex-1 min-w-[180px] mb-6 md:px-4">
          <h4 className="font-semibold text-blue-900 mb-3 uppercase tracking-wide">EXPLORE</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[180px] mb-6 md:px-4">
          <h4 className="font-semibold text-blue-900 mb-3 uppercase tracking-wide">QUICK LINKS</h4>
          <ul className="space-y-2">
            <li><Link to="/alumni-panel" className="hover:underline">Alumni Connect</Link></li>
            <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
            <li><Link to="/academics" className="hover:underline">Academics</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 min-w-[180px] mb-6 md:px-4">
          <h4 className="font-semibold text-blue-900 mb-3 uppercase tracking-wide">SOCIAL MEDIA</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t pt-6 border-gray-200">
        © {new Date().getFullYear()} Global International School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;