'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

const Footer = () => {
  const sections = [
    {
      title: 'Courses',
      links: ['JEE Courses', 'NEET Courses', 'CBSE Classes', 'ICSE Classes', 'Foundation Courses']
    },
    {
      title: 'Resources',
      links: ['Study Material', 'Sample Papers', 'Previous Year Papers', 'NCERT Solutions', 'Blog']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact Us', 'Privacy Policy', 'Terms & Conditions']
    }
  ];

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & Socials */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={footerVariants}
            viewport={{ once: true, amount: 0.5 }}

          >
            <h3 className="text-2xl font-bold mb-4 text-white">Kalam Learning Centre</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India’s #1 online learning platform for JEE, NEET, and school exams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition duration-200"><FaFacebookF /></a>
              <a href="#" className="hover:text-sky-400 transition duration-200"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500 transition duration-200"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-400 transition duration-200"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-red-500 transition duration-200"><FaYoutube /></a>
            </div>
          </motion.div>

          {/* Other Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              variants={footerVariants}
              viewport={{ once: true, amount: 0.5 }}

            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3 text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition duration-150">{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}

        >
          © {new Date().getFullYear()} Kalam Learning Centre. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
