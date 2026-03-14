import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              BlogHub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/our-story"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Our Story
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/our-services"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Our Services
            </Link>
          </div>

          {/* Subscribe Button */}
          <div className="hidden md:flex">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1 focus:outline-none"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2 border-t border-gray-200">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 py-2 px-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/our-story"
              className="block text-gray-700 hover:text-blue-600 py-2 px-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 py-2 px-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;