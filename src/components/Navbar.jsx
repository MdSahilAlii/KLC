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

  const fadeIn = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80 }}
      className="bg-white/70 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-white/30 font-poppins"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold text-blue-700 tracking-wide"
        >
          <img src="klc.jpg" alt="KLC Logo" className="h-10" />
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center relative">
          {/* Courses Dropdown on Hover */}
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer text-black font-medium hover:text-blue-600">
              <span>Courses</span>
              <svg
                className="w-3 h-3 transform transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a
                href="https://www.klc.live/courses?category=neet"
                className="block px-4 py-2 text-black hover:bg-blue-100"
              >
                NEET
              </a>
              <a
                href="https://www.klc.live/courses?category=jee"
                className="block px-4 py-2 text-black hover:bg-blue-100"
              >
                JEE
              </a>
              <a
                href="https://www.klc.live/courses?category=foundation"
                className="block px-4 py-2 text-black hover:bg-blue-100"
              >
                Foundation
              </a>
            </div>
          </div>

          {/* Other Links */}
          {['Live Classes', 'Practice', 'About Us'].map((item, i) => (
            <motion.a
              key={i}
              href={
                item === 'Live Classes'
                  ? 'https://www.klc.live/courses?filterId=28&sortId=11'
                  : item === 'Practice'
                  ? 'https://www.klc.live/freetest'
                  : '/about-us'
              }
              className="text-black font-medium hover:text-blue-600 relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              window.open(
                'https://login.klc.live/login?orgCode=tgbukb',
                '_blank'
              )
            }
            className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 rounded-full transition duration-200"
          >
            Login
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-6 pt-2 backdrop-blur-md"
          >
            <div className="space-y-4 text-center">
              {/* Mobile Courses Toggle */}
              <div className="text-center">
                <button
                  onClick={() => setIsCourseOpen(!isCourseOpen)}
                  className="text-gray-800 font-medium hover:text-blue-600 transition"
                >
                  Courses {isCourseOpen ? '▲' : '▼'}
                </button>
                <AnimatePresence>
                  {isCourseOpen && (
                    <motion.div {...fadeIn} className="mt-2 space-y-2">
                      <a
                        onClick={handleCloseMenu}
                        href="https://www.klc.live/courses?category=neet"
                        className="block text-gray-700 hover:text-blue-600"
                      >
                        NEET
                      </a>
                      <a
                        onClick={handleCloseMenu}
                        href="https://www.klc.live/courses?category=jee"
                        className="block text-gray-700 hover:text-blue-600"
                      >
                        JEE
                      </a>
                      <a
                        onClick={handleCloseMenu}
                        href="https://www.klc.live/courses?category=foundation"
                        className="block text-gray-700 hover:text-blue-600"
                      >
                        Foundation
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Mobile Links */}
              {['Live Classes', 'Practice', 'About Us'].map((item, i) => (
                <motion.a
                  {...fadeIn}
                  key={i}
                  onClick={handleCloseMenu}
                  href={
                    item === 'Live Classes'
                      ? 'https://www.klc.live/courses?filterId=28&sortId=11'
                      : item === 'Practice'
                      ? 'https://www.klc.live/freetest'
                      : '/about-us'
                  }
                  className="block text-gray-800 font-medium hover:text-blue-600 transition"
                >
                  {item}
                </motion.a>
              ))}

              <hr className="border-gray-300 my-2" />

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleCloseMenu();
                  window.open(
                    'https://login.klc.live/login?orgCode=tgbukb',
                    '_blank'
                  );
                }}
                className="w-full text-blue-600 font-semibold hover:bg-blue-50 py-2 rounded-full transition"
              >
                Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
