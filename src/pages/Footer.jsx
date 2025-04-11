import React from "react";
import logo from '../assets/image.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-50 text-gray-800 font-sans px-5 pt-10 pb-6">
      
      {/* Top Contact Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10 flex flex-wrap justify-around items-center w-full">
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
      <div className="flex flex-wrap justify-between text-gray-700">
        
        {/* School Info */}
        <div className="flex-1 min-w-[230px] mb-6">
          <img src={logo} alt="School Logo" className="w-16 mb-3" />
          <p className="text-sm leading-relaxed">
            Global International School <br />
            Affiliated to CBSE, New Delhi. Affiliation No. 1931647<br />
            Dharapuram Road, Kangayam, A.P. Pudur,<br />
            Kangayam Taluk, Tiruppur – 638701
          </p>
        </div>

        {/* Explore Links */}
        <div className="flex-1 min-w-[180px] mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">EXPLORE</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">HOME</li>
            <li className="hover:underline cursor-pointer">ABOUT US</li>
            <li className="hover:underline cursor-pointer">Life@GMHSS</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Contact US</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[180px] mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">QUICK LINKS</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Alumni Connect</li>
            <li className="hover:underline cursor-pointer">Admissions</li>
            <li className="hover:underline cursor-pointer">Fee Structure</li>
            <li className="hover:underline cursor-pointer">Curriculum</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 min-w-[180px] mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">SOCIAL MEDIA</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
            <li className="hover:underline cursor-pointer">Facebook</li>
          </ul>
        </div>
      </div>

      {/* Optional: Bottom Note */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Global International School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;