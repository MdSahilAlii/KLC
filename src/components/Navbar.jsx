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
      className="bg-white/70 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-white/30 font-ubuntu"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold text-blue-700 tracking-wide"
        >
          Kalam Learning Centre
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center relative">
          <div className="relative group">
            <a
              href="https://www.klc.live/courses"
              className="text-gray-700 font-medium hover:text-blue-600 relative"
            >
              Courses
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto"
            >
              <a href="https://www.klc.live/courses?category=neet" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">NEET</a>
              <a href="https://www.klc.live/courses?category=jee" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">JEE</a>
              <a href="https://www.klc.live/courses?category=foundation" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Foundation</a>
            </motion.div>
          </div>

          {['Live Classes', 'Practice', 'About Us'].map((item, i) => (
            <motion.a
              key={i}
              href={
                item === 'Live Classes'
                  ? 'https://www.klc.live/courses?filterId=28&sortId=11'
                  : item === 'Practice'
                  ? 'https://www.klc.live/freetest'
                  : 'https://www.klc.live/about-us'
              }
              className="text-gray-700 font-medium hover:text-blue-600 relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 rounded-full transition duration-200"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-200"
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-blue-600 transition duration-200">
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
              {/* Courses Mobile Toggle */}
              <div className="text-center">
                <button
                  onClick={() => setIsCourseOpen(!isCourseOpen)}
                  className="text-gray-800 font-medium hover:text-blue-600 transition"
                >
                  Courses {isCourseOpen ? '▲' : '▼'}
                </button>
                <AnimatePresence>
                  {isCourseOpen && (
                    <motion.div
                      {...fadeIn}
                      className="mt-2 space-y-2"
                    >
                      <a onClick={handleCloseMenu} href="https://www.klc.live/courses?category=neet" className="block text-gray-700 hover:text-blue-600">NEET</a>
                      <a onClick={handleCloseMenu} href="https://www.klc.live/courses?category=jee" className="block text-gray-700 hover:text-blue-600">JEE</a>
                      <a onClick={handleCloseMenu} href="https://www.klc.live/courses?category=foundation" className="block text-gray-700 hover:text-blue-600">Foundation</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
                      : 'https://www.klc.live/about-us'
                  }
                  className="block text-gray-800 font-medium hover:text-blue-600 transition"
                >
                  {item}
                </motion.a>
              ))}

              <hr className="border-gray-300 my-2" />

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCloseMenu}
                className="w-full text-blue-600 font-semibold hover:bg-blue-50 py-2 rounded-full transition"
              >
                Login
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCloseMenu}
                className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Sign Up
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
