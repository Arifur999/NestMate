import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-16 py-12 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <NavLink
            to="/"
            className="flex items-center w-20 text-2xl font-bold text-indigo-600 "
          >
            <img
              src="/logo2.png"
              alt="NestMate Logo"
              className="w-full h-12 object-contain drop-shadow-sm"
            />
            <h1>
              {" "}
              Nest<span className="text-gray-600 dark:text-white">Mate</span>
            </h1>
          </NavLink>{" "}
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted platform to find compatible roommates and shared spaces
            with ease. Live smarter, live together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/rooms" className="hover:text-white transition">
                Find Room
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF className="text-white w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-white w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition"
            >
              <FaTwitter className="text-white w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition"
            >
              <FaLinkedinIn className="text-white w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} NestMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
