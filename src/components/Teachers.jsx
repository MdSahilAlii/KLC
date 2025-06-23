'use client';
import React from 'react';
import { motion } from 'framer-motion';

const teachersData = [
    {
        name: "Dr. Ananya Sharma",
        subject: "Physics Expert",
        experience: "IIT Delhi | 12+ years experience | 5000+ students",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Prof. Rajesh Kumar",
        subject: "Chemistry Expert",
        experience: "IIT Bombay | 15+ years experience | 8000+ students",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Dr. Priya Singh",
        subject: "Mathematics Expert",
        experience: "IIT Kanpur | 10+ years experience | 6000+ students",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Dr. Amit Patel",
        subject: "Biology Expert",
        experience: "AIIMS Delhi | 8+ years experience | 4000+ students",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.2
        }
    })
};

const Teachers = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-4xl font-bold text-center text-gray-800 mb-4"
                >
                    Learn from the Best Teachers
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center text-gray-600 mb-12 max-w-xl mx-auto"
                >
                    Our experienced and passionate educators are dedicated to helping you excel in your academic journey.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teachersData.map((teacher, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <img
                                src={teacher.image}
                                alt={teacher.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{teacher.name}</h3>
                                <p className="text-indigo-600 font-medium mb-2">{teacher.subject}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{teacher.experience}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teachers;
