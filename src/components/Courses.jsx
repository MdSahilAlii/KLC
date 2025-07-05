'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "NEET Pinnacle 2027 - 2 Year Program",
    description:
      "A 2-year intensive program for NEET aspirants with expert faculty and comprehensive study material.",
    price: "₹15,999",
    originalPrice: "₹30,019",
    rating: 4.8,
    reviews: 1245,
    image:
      "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F38700a0c-ed4a-4c1c-8061-3e1bbc887ab6.png&w=640&q=75",
    link: "https://www.klc.live/courses/neet-pinnacle-2027/639277"
  },
  {
    title: "NEET 2025 30 Days Express Crash Course",
    description:
      "Comprehensive NEET preparation with NCERT focus and test series.",
    price: "₹1,999",
    originalPrice: "₹6,019",
    rating: 4.9,
    reviews: 890,
    image:
      "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F75a54457-aec6-4e35-8516-3dd604ea3278.png&w=640&q=75",
    link: "https://www.klc.live/courses/neet-ug-complete/647079"
  },
  {
    title: "JEE Pinnacle 2027 - 2 Year Program",
    description:
      "A 2-year intensive program for JEE aspirants with expert faculty and comprehensive study material.",
    price: "₹19,999",
    originalPrice: "30,019",
    rating: 5.0,
    reviews: 1520,
    image:
      "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F88de103d-0f6c-47eb-8bea-aea79d743e65.jpg&w=640&q=75",
    link: "https://www.klc.live/courses/cbse-class-12/638895?mainCategory=16"
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
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900" id="courses">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
        >
          Choose Your <span className="text-cyan-600">Perfect Program</span>
        </motion.h2>

        {/* Subheading */}
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

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden bg-white/90 backdrop-blur border border-gray-200 shadow-xl hover:shadow-cyan-200 transition duration-300 transform hover:-translate-y-1 h-full flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 md:h-48 object-cover"
              />
              <div className="p-6 flex flex-col h-full text-left">
                {/* Top content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>

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
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-100">
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
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-md hover:shadow-cyan-400/40 transition"
                  >
                    Enroll Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Courses Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/courses"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md hover:shadow-blue-300 transition"
        >
          See All Courses
        </motion.a>
      </div>
    </section>
  );
};

export default Courses;
