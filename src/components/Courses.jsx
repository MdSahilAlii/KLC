'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "NEET Pinnacle 2027 - 2 Year Program",
    description:
      "A 2-year intensive program for NEET aspirants with expert faculty and comprehensive study material.",
    price: "₹19,999",
    originalPrice: "₹25,000",
    rating: 4.8,
    reviews: 1245,
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "NEET UG Complete",
    description:
      "Comprehensive NEET preparation with NCERT focus and test series.",
    price: "₹17,999",
    originalPrice: "₹22,000",
    rating: 4.9,
    reviews: 890,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "CBSE Class 12",
    description:
      "Board exam preparation with chapter-wise tests and sample papers.",
    price: "₹12,999",
    originalPrice: "₹15,000",
    rating: 5.0,
    reviews: 1520,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0d?auto=format&fit=crop&w=1422&q=80",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Courses = () => {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
        >
          Choose Your <span className="text-cyan-600">Perfect Program</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-14"
        >
          Our curated learning paths offer maximum value with expert mentorship,
          premium materials, and modern test strategies.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl hover:shadow-cyan-200 transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`mr-1 ${
                        index < Math.floor(course.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>

                {/* Pricing + CTA */}
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <div className="text-sm line-through text-gray-400">
                      {course.originalPrice}
                    </div>
                    <div className="text-lg font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      {course.price}
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.klc.live/courses/639277"
                    className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg hover:shadow-cyan-400/40 transition"
                  >
                    Enroll Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
