"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-green-600 font-bold text-xl">
              CLIMAFIX
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-600">
              Blog
            </Link>
            <Link href="/summit" className="text-gray-700 hover:text-green-600">
              Summit
            </Link>
            <Link href="/videos" className="text-gray-700 hover:text-green-600">
              Videos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-white hover:bg-green-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-green-600 hover:bg-green-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-green-600 hover:bg-green-100"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-green-600 hover:bg-green-100"
            >
              Blog
            </Link>
            <Link
              href="/summit"
              className="block px-3 py-2 rounded-md text-base font-medium text-green-600 hover:bg-green-100"
            >
              Summit
            </Link>
            <Link
              href="/videos"
              className="block px-3 py-2 rounded-md text-base font-medium text-green-600 hover:bg-green-100"
            >
              Videos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
