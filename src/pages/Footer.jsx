import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/school-logo.jpg"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-sans bg-[#fbfbfb] text-gray-800">

      {/* Top Contact Bar - Rounded, constrained, centered, and reduced height appearance */}
      <div 
        className="bg-[#3c2684] text-white max-w-7xl mx-auto rounded-lg shadow-md py-4 px-4 sm:px-8 
                   flex flex-wrap justify-center md:justify-between items-center gap-4 relative z-10" 
        style={{ marginTop: '-20px' }} // Optional: Use inline style or a custom class to make it slightly overlap the content above
      >
        
        {/* Contact Number - Reduced vertical padding (py-4 instead of py-6) and gap (gap-4) */}
        <div className="flex items-center gap-3 text-base sm:text-lg">
          <FaPhoneAlt className="text-[#f7c04a] text-2xl" /> 
          <span>9750999555</span>
        </div>
        
        {/* Email */}
        <div className="flex items-center gap-3 text-base sm:text-lg">
          <FaEnvelope className="text-red-400 text-2xl" /> 
          <span>globalcbse.kgm@gmail.com</span>
        </div>
        
        {/* Address */}
        <div className="flex items-center gap-3 text-base sm:text-lg text-center md:text-left max-w-xl leading-snug">
          <FaMapMarkerAlt className="text-green-400 text-2xl" /> 
          <span className="text-xs sm:text-sm">
            Dharapuram Road, Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur – 638701
          </span>
        </div>
      </div>


      {/* Main Footer Section - Reduced vertical padding (py-10 instead of py-16) and smaller gap-y-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-wrap justify-center lg:justify-between gap-x-10 gap-y-8 text-gray-700">

        {/* School info block - No major height reduction needed here, but adjusted padding/margins */}
        <div className="max-w-xs flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-start gap-3 mb-3"> {/* mb-3 instead of mb-4 */}
            <img src={logo} alt="School Logo" className="w-14 h-14 object-contain mt-1" /> {/* Slightly smaller logo */}
            <div className="text-left">
              <h3 className="font-bold text-base text-gray-800 leading-tight mb-1">
                Global International School
              </h3>
              <p className="text-xs leading-snug">
                Affiliated to CBSE, New Delhi. Affiliation <br/> No. 1931647, Dharapuram Road, <br/> Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur – 638701
              </p>
            </div>
          </div>
          
          <p className="text-sm leading-relaxed mt-3 max-w-[280px]"> {/* mt-3 instead of mt-4 */}
            Welcome to the Global International School. We are a part of Global Educational Trust, which has a strong presence on the education map of Kangayam Taluk, Tiruppur.
          </p>
        </div>

        {/* Explore Links - Reduced bottom margin (mb-4) and spacing (space-y-3) */}
        <div className="w-full sm:w-auto min-w-[150px] md:min-w-[180px]">
          <h4 className="font-bold text-[#3c2684] mb-4 text-lg uppercase tracking-wider">Explore</h4>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/" className="hover:text-blue-700 text-sm">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-blue-700 text-sm">About Us</Link></li>
            <li><Link to="/infrastructure" className="hover:text-blue-700 text-sm">Infrastructure</Link></li>
            <li><Link to="/careers" className="hover:text-blue-700 text-sm">Careers</Link></li>
            <li><Link to="/contact-us" className="hover:text-blue-700 text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Quick Links - Reduced bottom margin (mb-4) and spacing (space-y-3) */}
        <div className="w-full sm:w-auto min-w-[150px] md:min-w-[180px]">
          <h4 className="font-bold text-[#3c2684] mb-4 text-lg uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/admission-enquiry" className="hover:text-blue-700 text-sm">Admission Enquiry</Link></li>
            <li><Link to="/admission-form" className="hover:text-blue-700 text-sm">Admission Form</Link></li>
            <li><Link to="/fee-structure" className="hover:text-blue-700 text-sm">Fee Structure</Link></li>
            <li><Link to="/curriculum" className="hover:text-blue-700 text-sm">Curriculum</Link></li>
          </ul>
        </div>

        {/* Social Media - Reduced bottom margin (mb-4) and spacing (space-y-3) */}
        <div className="w-full sm:w-auto min-w-[150px] md:min-w-[180px]">
          <h4 className="font-bold text-[#3c2684] mb-4 text-lg uppercase tracking-wider">Social Media</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaFacebook className="text-white bg-[#4267B2] rounded-full p-1.5 w-7 h-7" /> {/* Smaller icon */}
              <a href="#" className="text-gray-700 hover:text-blue-700 text-sm">facebook</a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-white bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F56040] rounded-lg p-1.5 w-7 h-7" /> {/* Smaller icon */}
              <a href="#" className="text-gray-700 hover:text-blue-700 text-sm">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer/Copyright - Reduced py-4 instead of py-5 */}
      <div className="bg-[#fbfbfb] text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()}. Global Matriculation Higher Secondary School . All rights reserved
      </div>
      
      {/* Scroll to Top button */}
      <button 
        className="fixed bottom-5 right-5 bg-[#3c2684] text-white p-2 rounded-full shadow-lg z-20"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </footer>
  );
};

export default Footer;