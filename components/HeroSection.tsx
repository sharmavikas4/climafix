"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        CLIMAFIX Summit 2025
      </h1>
      <p className="text-xl md:text-2xl mb-6">
        India’s Largest Gathering for Climate Innovation & Stakeholders
      </p>
      <p className="text-md md:text-lg mb-10">
        24-25 April 2025 | Chennai, India
      </p>
      <a
        href="#register"
        className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition"
      >
        Register Now
      </a>
    </section>
  );
};

export default HeroSection;
