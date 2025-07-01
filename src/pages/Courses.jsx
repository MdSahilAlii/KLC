'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';


const courses = [
  {
    id: 1,
    title: 'NEET Pinnacle 2027 - 2 Year Program',
    description: 'Intensive 2-year coaching for NEET aspirants with expert mentorship.',
    price: '₹19,999',
    originalPrice: '₹25,000',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'JEE Advanced 2026 Crash Course',
    description: 'Focused revision batch with problem solving and mock tests.',
    price: '₹9,499',
    originalPrice: '₹13,000',
    rating: 4.6,
  },
  {
    id: 3,
    title: 'Foundation Builder (Class 9 & 10)',
    description: 'Conceptual clarity for school + competitive exams.',
    price: '₹5,999',
    originalPrice: '₹8,000',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'JEE Mains Target Batch',
    description: 'Intensive training for JEE Mains 2026 with full-length tests.',
    price: '₹7,999',
    originalPrice: '₹11,000',
    rating: 4.5,
  },
];

const CourseCard = ({ course }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
  >
    <h3 className="text-xl font-semibold text-blue-700 mb-2">{course.title}</h3>
    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
    <div className="flex items-center justify-between">
      <div className="text-sm">
        <span className="text-blue-600 font-bold">{course.price}</span>{' '}
        <span className="line-through text-gray-400">{course.originalPrice}</span>
      </div>
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        <FaStar className="inline" />
        {course.rating}
      </div>
    </div>
  </motion.div>
);

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12 font-poppins">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Courses</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
