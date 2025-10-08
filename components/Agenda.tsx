"use client";
import React from "react";

const Agenda: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">Event Agenda</h2>
      <ul className="divide-y divide-gray-200 space-y-4 text-left">
        <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              Day 1: Opening & Keynotes
            </h3>
            <p className="text-gray-600">
              9:00 AM - 12:00 PM - Inauguration, Welcome Speech & Keynote
              Sessions
            </p>
          </div>
        </li>
        <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              Day 1: Panel Discussions
            </h3>
            <p className="text-gray-600">
              1:00 PM - 4:00 PM - Climate Tech, Policy & Investment
            </p>
          </div>
        </li>
        <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              Day 2: Workshops & Networking
            </h3>
            <p className="text-gray-600">
              10:00 AM - 5:00 PM - Hands-on sessions, roundtables & networking
            </p>
          </div>
        </li>
        <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              Day 2: Closing & Awards
            </h3>
            <p className="text-gray-600">
              5:00 PM - 6:00 PM - Summit closing, awards, and future roadmap
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Agenda;
