'use client';
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Rocket,
  Heart,
  Building,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    if (!phone || phone.length < 10) {
      setMessage('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Using Formspree for email handling (replace with your endpoint)
      const response = await fetch('https://formspree.io/f/xpwlynjb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
          source: 'Newsletter Subscription',
          message: `New newsletter subscription from: ${email}, Phone: ${phone}`
        }),
      });

      if (response.ok) {
        setMessage('Successfully subscribed! Thank you for joining us.');
        setEmail('');
        setPhone('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    {
      title: 'Popular Courses',
      icon: <Rocket className="text-cyan-400" />,
      links: [
        { name: 'JEE Main & Advanced', popular: true, href: '/courses/jee-main-advanced' },
        { name: 'NEET UG Preparation', popular: true, href: '/courses/neet-ug' },
        { name: 'CBSE Class 12', popular: false, href: '/courses/cbse-class-12' },
        { name: 'Foundation Courses', popular: false, href: '/courses/foundation' }
      ]
    },
    {
      title: 'Study Resources',
      icon: <Heart className="text-pink-400" />,
      links: [
        { name: 'Study Material', popular: false, href: '/resources/study-material' },
        { name: 'Mock Tests', popular: true, href: '/resources/mock-tests' },
        { name: 'Previous Year Papers', popular: true, href: '/resources/previous-papers' },
        { name: 'NCERT Solutions', popular: false, href: '/resources/ncert-solutions' },
        { name: 'Expert Tips & Blog', popular: false, href: '/blog' }
      ]
    },
    {
      title: 'Company',
      icon: <Building className="text-emerald-400" />,
      links: [
        { name: 'About Kalam Centre', popular: false, href: '/about' },
        { name: 'Join Our Team', popular: false, href: '/careers' },
        { name: 'Contact Support', popular: false, href: '/contact' },
        { name: 'Privacy Policy', popular: false, href: '/privacy' },
        { name: 'Terms & Conditions', popular: false, href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { 
      Icon: Facebook, 
      color: 'hover:bg-blue-600', 
      href: 'https://www.facebook.com/kalamlearningcenter?mibextid=wwXIfr&rdid=zosOKVjfhKl878MA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DLvjUGxEf%2F%3Fmibextid%3DwwXIfr#' 
    },
    { Icon: Twitter, color: 'hover:bg-sky-500', href: 'https://x.com/klcindia' },
    { Icon: Instagram, color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500', href: 'https://www.instagram.com/klc.live/#' },
    { Icon: Linkedin, color: 'hover:bg-blue-700', href: '#' },
    { Icon: Youtube, color: 'hover:bg-red-600', href: 'https://www.youtube.com/@kalamlearning' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse-glow delay-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-6 h-6 bg-purple-400/30 rounded-full animate-float delay-400"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        
        {/* Newsletter Section */}
         <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Stay Updated with Kalam Learning
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest study tips, exam updates, and exclusive content delivered to your inbox
          </p>
          
          {/* Updated Newsletter Form Layout */}
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            {/* Email and Phone inputs row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
              
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                required
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
            </div>
            
            {/* Centered Subscribe button */}
            <button
              onClick={handleSubscribe}
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </button>
          </div>
          
          {message && (
            <div className={`mt-4 text-sm ${message.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-default">
              Kalam Learning Centre
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              India's most trusted online learning platform. Join millions of students achieving their dreams through expert guidance and innovative teaching methods.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="text-cyan-400 w-4 h-4" />
                <span>+91 9335004071</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="text-cyan-400 w-4 h-4" />
                <span>support@kalamlearning.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <MapPin className="text-cyan-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mull Building, 4, Ashok Marg, Hazratganj, Lucknow, Uttar Pradesh 226001.</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 ${social.color}`}
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <div
              key={index}
              className={`animate-fade-in-up delay-${(index + 1) * 200}`}
            >
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h4 className="text-xl font-bold">{section.title}</h4>
              </div>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:translate-x-2 transition-transform duration-200">
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="group-hover:text-cyan-400">{link.name}</span>
                      {link.popular && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold animate-pulse">
                          Popular
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-white/10 animate-fade-in-up delay-600">
          {[
            { number: '2M+', label: 'Students Enrolled' },
            { number: '150+', label: 'Expert Faculty' },
            { number: '95%', label: 'Success Rate' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 animate-fade-in-up delay-800">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Kalam Learning Centre. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
          >
            <ArrowUp className="text-white w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>
    </footer>
  );
};

export default Footer;