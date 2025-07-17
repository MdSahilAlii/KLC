'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    heading: 'Personalized Online Learning for',
    highlight: 'Class 6 to 12',
    description: "India's #1 online tutoring platform with live classes, interactive quizzes, and doubt solving.",
    image: 'https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F75a54457-aec6-4e35-8516-3dd604ea3278.png&w=640&q=75',
    stats: { students: '1M+', rating: '4.9', courses: '500+' }
  },
  {
    heading: 'Master Maths and Science with',
    highlight: 'Top Educators',
    description: 'Live doubt-solving, concept clarity, and progress tracking with expert teachers.',
    image: 'https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F88de103d-0f6c-47eb-8bea-aea79d743e65.jpg&w=640&q=75',
    stats: { students: '50k+', rating: '4.8', courses: '200+' }
  },
  {
    heading: 'Crack Olympiads and NTSE with',
    highlight: 'Focused Mentorship',
    description: 'Targeted preparation, personalized plans, and practice tests for competitive edge.',
    image: 'https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2Fb15b3f76-f703-4f45-9bf4-f05bb6117ef4.jpg&w=640&q=75',
    stats: { students: '25k+', rating: '4.9', courses: '100+' }
  }
];

const RocketIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.8, rotateY: 90 },
  animate: { opacity: 1, scale: 1, rotateY: 0 },
  exit: { opacity: 0, scale: 0.8, rotateY: -90 }
};

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[calc(100vh-80px)] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden scroll-smooth">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  variants={slideVariants}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-blue-200">Live Classes Available</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="text-white">{slide.heading}</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-400">{slide.stats.students}</span>
                      <span className="text-gray-400">Students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StarIcon />
                      <span className="text-lg font-semibold text-yellow-400">{slide.stats.rating}</span>
                      <span className="text-gray-400">Rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-purple-400">{slide.stats.courses}</span>
                      <span className="text-gray-400">Courses</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center">
                        <RocketIcon />
                        <a href='https://www.klc.live/contact-us'  className="ml-2">Start Free Trial</a>
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-gray-300 hover:border-blue-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-center">
                        <BookIcon />
                        <a href='/courses' className="ml-2">Explore Courses</a>
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Image Only (No video button) */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.image}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-tr from-gray-800 to-gray-900 p-2 rounded-3xl shadow-2xl">
                    <img
                      src={slide.image}
                      alt="Educational content"
                      className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                    />
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  Live Now
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  24/7 Support
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            {isPlaying ? 'Pause' : 'Play'} Slideshow
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
