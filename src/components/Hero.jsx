'use client';
import React from 'react';
import { FaBookOpen, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' }
    };

    return (
        <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10 relative z-10">
                
                {/* Left Content */}
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 shadow-lg"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        Personalized Online Learning for <br />
                        <span className="text-yellow-300">Class 6 to 12</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl mb-8"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        India&apos;s #1 online tutoring platform with live classes, interactive quizzes, and doubt solving.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                        variants={fadeInUp}
                        transition={{ delay: 0.3 }}
                    >
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
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Online Learning" 
                        className="rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-full object-cover hover:scale-105 transition-transform duration-300 border-4 border-yellow-300"
                    />
                </motion.div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg className="absolute -top-20 -left-20 opacity-20" width="400" height="400" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="200" fill="rgba(255, 255, 255, 0.1)" />
                </svg>
                <svg className="absolute bottom-0 right-0 opacity-20" width="400" height="400" viewBox="0 0 400 400">
                    <rect x="0" y="0" width="400" height="400" fill="rgba(255, 255, 255, 0.1)" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
