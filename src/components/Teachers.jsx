'use client';
import React from 'react';
import { motion } from 'framer-motion';

const teachers = [
    {
        name: "Dr. Ananya Sharma",
        subject: "Physics",
        experience: "12+ years • IIT Delhi",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Prof. Rajesh Kumar",
        subject: "Chemistry",
        experience: "15+ years • IIT Bombay",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Dr. Priya Singh",
        subject: "Mathematics",
        experience: "10+ years • IIT Kanpur",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Dr. Amit Patel",
        subject: "Biology",
        experience: "8+ years • AIIMS Delhi",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1470&q=80"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6
        }
    })
};

const Teachers = () => {
    return (
        <section className="py-24 bg-gray-150 text-gray-900" id='teachers'>
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900"
                >
                    Meet Our <span className="text-cyan-600">Top Mentors</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed"
                >
                    Handpicked educators with proven excellence, ready to transform your learning experience.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-10">
                    {teachers.map((t, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            viewport={{ once: true }}
                            className="w-full max-w-xs p-6 rounded-3xl bg-white border border-gray-200 hover:scale-[1.04] transition-transform duration-300 shadow-lg"
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-28 h-28 rounded-full object-cover border-4 border-cyan-500 mb-5 shadow"
                                />
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{t.name}</h3>
                                <p className="text-cyan-600 font-medium tracking-wide mb-2">
                                    {t.subject}
                                </p>
                                <p className="text-sm text-gray-600">{t.experience}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teachers;
