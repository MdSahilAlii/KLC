'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <BookOpen className={`h-10 w-10 transition-all duration-500 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              } group-hover:scale-110 group-hover:rotate-12`} />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
            </div>
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <h1 className={`text-2xl font-bold transition-colors duration-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Kalam Learning Centre
              </h1>
              <p className={`text-sm transition-colors duration-500 ${
                isScrolled ? 'text-gray-600' : 'text-blue-100'
              }`}>
                Excellence in Education
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                } group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center space-x-2 transition-colors duration-500 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            } hover:scale-105 transform transition-transform duration-300`}>
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              } ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              } ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:text-blue-200 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: `translateX(${isMenuOpen ? '0' : '-100%'})`,
                    transition: `all 0.3s ease ${index * 100}ms`
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;