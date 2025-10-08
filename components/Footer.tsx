"use client";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About CLIMAFIX</h3>
          <p className="text-sm text-green-200">
            CLIMAFIX Summit is dedicated to innovation and collaboration to
            combat climate change through technology, policy, and community.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-green-200 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#speakers" className="hover:text-white">
                Speakers
              </a>
            </li>
            <li>
              <a href="#agenda" className="hover:text-white">
                Agenda
              </a>
            </li>
            <li>
              <a href="#sponsors" className="hover:text-white">
                Sponsors
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-green-200 text-sm mb-4">
            Subscribe to stay updated with the latest news and announcements.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 flex-wrap max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded border border-green-700 bg-white text-green-900 focus:outline-none flex-grow min-w-0"
            />

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 py-2 px-6 rounded text-white font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact & Follow Us</h3>
          <p className="text-green-200 text-sm mb-4">
            Email: contact@climafix.in
            <br />
            Phone: +91 12345 67890
            <br />
            Address: 123 Green Street, Mumbai, India
          </p>
          <div className="flex space-x-5 text-2xl text-green-200">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-green-300">
        © {new Date().getFullYear()} CLIMAFIX Summit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
