'use client';
import React, { useState, useEffect } from 'react';
import { BadgeCheck, BookCopy, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = ['All', 'Web Development', 'Data Science', 'AI & ML', 'UI/UX', 'Programming', 'Business'];

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    category: 'Web Development',
    rating: 4.5,
    price: 4999,
    discountedPrice: 1999,
    image: 'https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061964.jpg',
    badge: 'Best Seller',
    link: '#',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    category: 'Data Science',
    rating: 4.2,
    price: 3499,
    discountedPrice: 1499,
    image: 'https://img.freepik.com/free-photo/top-view-data-analysis-concept_23-2150038896.jpg',
    badge: 'Trending',
    link: '#',
  },
  {
    id: 3,
    title: 'AI & Machine Learning Bootcamp',
    category: 'AI & ML',
    rating: 4.8,
    price: 5999,
    discountedPrice: 2999,
    image: 'https://img.freepik.com/free-photo/futuristic-robot-artificial-intelligence-concept_23-2150401485.jpg',
    badge: 'New',
    link: '#',
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    category: 'UI/UX',
    rating: 4.3,
    price: 2999,
    discountedPrice: 1299,
    image: 'https://img.freepik.com/free-photo/ux-concept-with-wooden-blocks_23-2150315148.jpg',
    badge: 'Recommended',
    link: '#',
  },
  {
    id: 5,
    title: 'JavaScript Mastery',
    category: 'Programming',
    rating: 4.7,
    price: 3999,
    discountedPrice: 1799,
    image: 'https://img.freepik.com/free-photo/javascript-inscription-laptop-screen_23-2150105773.jpg',
    badge: 'Best Seller',
    link: '#',
  },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300); // simulate loading
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen py-14 px-4 md:px-20">
      <section className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Explore Our Courses</h1>
        <p className="text-lg text-gray-300">Upgrade your skills with top-rated online courses</p>
      </section>

      <nav className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {loading ? (
        <div className="text-center text-gray-400 text-lg">Loading courses...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 hover:shadow-indigo-500/10 transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  <span className="text-sm bg-indigo-600 text-white px-2 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">{course.category}</p>
                <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                  <BadgeCheck className="w-4 h-4" />
                  <span>{course.rating} / 5.0</span>
                </div>
                <div className="flex items-baseline gap-2 text-white mb-3">
                  <span className="text-lg font-bold text-green-400">₹{course.discountedPrice}</span>
                  <span className="text-sm line-through text-gray-500">₹{course.price}</span>
                </div>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition-transform"
                >
                  Enroll Now <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </main>
  );
};

export default Courses;
