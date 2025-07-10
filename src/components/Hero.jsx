'use client';
import React from 'react';
import { FaBookOpen, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' }
    };

    return (
        <section className="relative min-h-[90vh] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden flex items-center justify-center px-6">
            {/* Blurred Background Shapes */}
            <div className="absolute w-[300px] h-[300px] bg-purple-600 rounded-full opacity-30 blur-3xl top-10 left-[-100px] z-0"></div>
            <div className="absolute w-[400px] h-[400px] bg-yellow-400 rounded-full opacity-20 blur-2xl bottom-10 right-[-150px] z-0"></div>

            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Content */}
                <motion.div
                    className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-10 shadow-2xl"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeInUp}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        Learn Smarter, Not Harder
                        <br />
                        <span className="text-yellow-400">Classes 6 - 12</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-white/80 mb-8"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        India's most trusted platform with live expert classes, adaptive learning tools, and real-time doubt solving.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        variants={fadeInUp}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center shadow-md"
                        >
                            <FaRocket className="mr-2" /> Book Free Class
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white/50 px-6 py-3 rounded-xl font-semibold flex items-center hover:bg-white hover:text-gray-900 transition"
                        >
                            <FaBookOpen className="mr-2" /> Explore Courses
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <img
                        src="https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F75a54457-aec6-4e35-8516-3dd604ea3278.png&w=640&q=75"
                        alt="Student Learning"
                        className="rounded-3xl shadow-2xl max-w-md w-full object-cover hover:scale-105 transition-transform duration-300 border-4 border-white/20"
                    />
                </motion.div>
            </div>

            {/* Floating Icons */}
            <div className="absolute bottom-12 left-6 text-white/10 text-7xl animate-pulse select-none">📘</div>
            <div className="absolute top-20 right-10 text-white/10 text-6xl rotate-12 select-none">🎓</div>
        </section>
    );
};

export default Hero;
