'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setIsCourseOpen(false);
  };

  return (
    <nav className="bg-white/70 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-white/30 font-ubuntu">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-blue-700 tracking-wide hover:scale-105 transition-transform duration-200">
          Kalam Learning Center
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center relative">
          {/* Courses with Dropdown */}
          <div className="relative group">
            <a
              href="https://www.klc.live/courses"
              className="text-gray-700 font-medium hover:text-blue-600 relative"
            >
              Courses
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
              <a href="https://www.klc.live/courses?category=neet" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">NEET</a>
              <a href="https://www.klc.live/courses?category=jee" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">JEE</a>
              <a href="https://www.klc.live/courses?category=foundation" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Foundation</a>
            </div>
          </div>

          <a href="https://www.klc.live/courses?filterId=28&sortId=11" className="text-gray-700 font-medium hover:text-blue-600 relative group">
            Live Classes
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="https://www.klc.live/freetest" className="text-gray-700 font-medium hover:text-blue-600 relative group">
            Practice
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="https://www.klc.live/about-us" className="text-gray-700 font-medium hover:text-blue-600 relative group">
            About Us
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 rounded-full transition duration-200">
            Login
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-200">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-blue-600 transition duration-200">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-6 pt-2 backdrop-blur-md"
          >
            <div className="space-y-4 text-center">
              {/* Courses with toggle dropdown */}
              <div className="text-center">
                <button
                  onClick={() => setIsCourseOpen(!isCourseOpen)}
                  className="text-gray-800 font-medium hover:text-blue-600 transition"
                >
                  Courses {isCourseOpen ? '▲' : '▼'}
                </button>
                {isCourseOpen && (
                  <div className="mt-2 space-y-2">
                    <a onClick={handleCloseMenu} href="https://www.klc.live/courses?category=neet" className="block text-gray-700 hover:text-blue-600">NEET</a>
                    <a onClick={handleCloseMenu} href="https://www.klc.live/courses?category=jee" className="block text-gray-700 hover:text-blue-600">JEE</a>
                    <a onClick={handleCloseMenu} href="https://www.klc.live/courses?category=foundation" className="block text-gray-700 hover:text-blue-600">Foundation</a>
                  </div>
                )}
              </div>

              <a onClick={handleCloseMenu} href="https://www.klc.live/courses?filterId=28&sortId=11" className="block text-gray-800 font-medium hover:text-blue-600 transition">Live Classes</a>
              <a onClick={handleCloseMenu} href="https://www.klc.live/freetest" className="block text-gray-800 font-medium hover:text-blue-600 transition">Practice</a>
              <a onClick={handleCloseMenu} href="https://www.klc.live/about-us" className="block text-gray-800 font-medium hover:text-blue-600 transition">About Us</a>

              <hr className="border-gray-300 my-2" />
              <button onClick={handleCloseMenu} className="w-full text-blue-600 font-semibold hover:bg-blue-50 py-2 rounded-full transition">
                Login
              </button>
              <button onClick={handleCloseMenu} className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
