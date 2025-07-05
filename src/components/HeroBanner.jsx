'use client';
import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    heading: 'Personalized Online Learning for',
    highlight: 'Class 6 to 12',
    description: "India's #1 online tutoring platform with live classes, interactive quizzes, and doubt solving.",
    image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    heading: 'Master Maths and Science with',
    highlight: 'Top Educators',
    description: 'Live doubt-solving, concept clarity, and progress tracking with expert teachers.',
    image: 'https://images.unsplash.com/photo-1600195077070-b034a5f6b67a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    heading: 'Crack Olympiads and NTSE with',
    highlight: 'Focused Mentorship',
    description: 'Targeted preparation, personalized plans, and practice tests for competitive edge.',
    image: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=89',
  },
];

const fadeVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center gap-10 bg-white/10 rounded-2xl p-10 shadow-2xl">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.heading}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeVariants}
              transition={fadeVariants.transition}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
                {slide.heading} <br />
                <span className="text-yellow-300">{slide.highlight}</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-white/90">{slide.description}</p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md flex items-center"
                >
                  <FaRocket className="mr-2" /> Book Free Class
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 flex items-center"
                >
                  <FaBookOpen className="mr-2" /> Explore Courses
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={slide.image}
              alt="Slide Visual"
              className="rounded-xl shadow-xl object-cover aspect-[4/3] w-full max-w-md border-4 border-yellow-300"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroBanner;
