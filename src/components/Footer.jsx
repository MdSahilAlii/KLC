'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaRocket,
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const linkHover = {
  hover: {
    x: 5,
    color: "#06b6d4",
    transition: { duration: 0.2 }
  }
};

const socialHover = {
  hover: {
    scale: 1.2,
    rotateY: 180,
    transition: { duration: 0.3 }
  }
};

const Footer = () => {
  const sections = [
    {
      title: 'Popular Courses',
      icon: <FaRocket className="text-cyan-400" />,
      links: [
        { name: 'JEE Main & Advanced', popular: true },
        { name: 'NEET UG Preparation', popular: true },
        { name: 'CBSE Class 12', popular: false },
        { name: 'ICSE Preparation', popular: false },
        { name: 'Foundation Courses', popular: false }
      ]
    },
    {
      title: 'Study Resources',
      icon: <FaHeart className="text-pink-400" />,
      links: [
        { name: 'Study Material', popular: false },
        { name: 'Mock Tests', popular: true },
        { name: 'Previous Year Papers', popular: true },
        { name: 'NCERT Solutions', popular: false },
        { name: 'Expert Tips & Blog', popular: false }
      ]
    },
    {
      title: 'Company',
      icon: <FaMapMarkerAlt className="text-emerald-400" />,
      links: [
        { name: 'About Kalam Centre', popular: false },
        { name: 'Join Our Team', popular: false },
        { name: 'Contact Support', popular: false },
        { name: 'Privacy Policy', popular: false },
        { name: 'Terms & Conditions', popular: false }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, color: 'hover:bg-blue-600', href: '#' },
    { icon: FaTwitter, color: 'hover:bg-sky-500', href: '#' },
    { icon: FaInstagram, color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500', href: '#' },
    { icon: FaLinkedinIn, color: 'hover:bg-blue-700', href: '#' },
    { icon: FaYoutube, color: 'hover:bg-red-600', href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Stay Updated with Kalam Learning
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest study tips, exam updates, and exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={footerVariants}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.h3 
              className="text-3xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Kalam Learning Centre
            </motion.h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              India's most trusted online learning platform. Join millions of students achieving their dreams through expert guidance and innovative teaching methods.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-cyan-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-cyan-400" />
                <span>support@kalamlearning.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Lucknow, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={socialHover}
                  whileHover="hover"
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              variants={footerVariants}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h4 className="text-xl font-bold">{section.title}</h4>
              </div>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <motion.li key={i} variants={linkHover} whileHover="hover">
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2">
                      {link.name}
                      {link.popular && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold">
                          Popular
                        </span>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-white/10"
        >
          {[
            { number: '2M+', label: 'Students Enrolled' },
            { number: '150+', label: 'Expert Faculty' },
            { number: '95%', label: 'Success Rate' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Kalam Learning Centre.
             All rights reserved.
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <FaArrowUp className="text-white" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>
    </footer>
  );
};

export default Footer;