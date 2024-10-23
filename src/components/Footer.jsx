import React from 'react';
import logo from "../assets/Container.png";
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Use react-icons for social media icons

const Footer = () => {
  return (
    <footer className="bg-[#0d0d12] text-white py-10 px-6 relative pt-[300px]">
      {/* Container for the whole footer */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-0">
          {/* Logo */}
          <div className="flex flex-col mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="h-14 " /> {/* Replace with your logo */}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          {/* Usecase Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 border-b-[0.5px]">Usecase</h3>
            <ul className="space-y-2 text-[12px]">
              <li>Learning and Development</li>
              <li>Marketing Teams</li>
              <li>Personalised videos</li>
              <li>Dubbing</li>
              <li>Customer Service</li>
              <li>Enterprise</li>
            </ul>
          </div>

          {/* Feature Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 border-b-[0.5px]">Feature</h3>
            <ul className="space-y-2 text-[12px]">
              <li>AI Avatars</li>
              <li>Video Dubbing</li>
              <li>AI Face Swap</li>
              <li>Customised Virtual Influencer</li>
              <li>Video Personalisation</li>
            </ul>
          </div>

          {/* Resource Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 border-b-[0.5px]">Resource</h3>
            <ul className="space-y-2 text-[12px]">
              <li>Blogs</li>
              <li>Support</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 border-b-[0.5px]">Company</h3>
            <ul className="space-y-2 text-[12px]">
              <li>About us</li>
              <li>Contact</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>

        {/* Address and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8">
          {/* Address */}
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            2nd Floor, 2735, 16th Cross Rd, PWD Quarters, 1st Sector, HSR Layout,<br />
            Bengaluru, Karnataka 560102
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            Copyright © 2024 UnscriptAI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
