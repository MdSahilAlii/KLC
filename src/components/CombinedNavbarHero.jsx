"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    heading: "Personalized Online Learning for",
    highlight: "Class 6 to 12",
    description:
      "India's #1 online tutoring platform with live classes, interactive quizzes, and doubt solving.",
    image:
      "https://cdn-wl-assets.classplus.co/production/single/tgbukb/75a54457-aec6-4e35-8516-3dd604ea3278.png",
    stats: { students: "1M+", rating: "4.9", courses: "500+" },
  },
  {
    heading: "Master Maths and Science with",
    highlight: "Top Educators",
    description:
      "Live doubt-solving, concept clarity, and progress tracking with expert teachers.",
    image:
      "https://cdn-wl-assets.classplus.co/production/single/tgbukb/993f5177-df21-412b-b469-e8a94094cd66.jpg",
    stats: { students: "50k+", rating: "4.8", courses: "200+" },
  },
];

const CombinedNavbarHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50 px-6 py-4 flex justify-between items-center">
        <img src="klc.jpg" alt="KLC Logo" className="h-10" />
        <div className="hidden md:flex space-x-8 font-semibold text-gray-800">
          <a href="#" className="hover:text-blue-600">
            Courses
          </a>
          <a href="#" className="hover:text-blue-600">
            Practice
          </a>
          <a href="#" className="hover:text-blue-600">
            About Us
          </a>
        </div>
        <div className="hidden md:flex">
          <button
            onClick={() =>
              window.open(
                "https://login.klc.live/login?orgCode=tgbukb",
                "_blank"
              )
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md px-6 py-4"
          >
            <a href="#" className="block py-2 text-gray-800">
              Courses
            </a>
            <a href="#" className="block py-2 text-gray-800">
              Practice
            </a>
            <a href="#" className="block py-2 text-gray-800">
              About Us
            </a>
            <button
              onClick={() =>
                window.open(
                  "https://login.klc.live/login?orgCode=tgbukb",
                  "_blank"
                )
              }
              className="w-full mt-3 bg-blue-600 text-white rounded-full py-2"
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold leading-tight">
              {slide.heading} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {slide.highlight}
              </span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-lg">{slide.description}</p>
            <div className="mt-6 space-x-4">
              <a
                href="https://www.klc.live/contact-us"
                className="inline-block px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700"
              >
                Start Free Trial
              </a>
              <a
                href="/courses"
                className="inline-block px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black"
              >
                Explore Courses
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={slide.image}
              alt="Slide Visual"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-500 w-6" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CombinedNavbarHero;
