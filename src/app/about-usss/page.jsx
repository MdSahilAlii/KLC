'use client'
import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Award, Target, Lightbulb, Heart, Star, ChevronDown } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate particles only on client side
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2
    }));
    setParticles(generatedParticles);

    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '1000+', label: 'Students Trained', icon: Users },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '7+', label: 'Years Experience', icon: Target },
    { number: '50+', label: 'Expert Faculty', icon: BookOpen }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge teaching methods and technology-driven learning experiences'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Individual attention and personalized guidance for every student'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Commitment to achieving the highest standards in education'
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Goal-oriented approach to help students achieve their dreams'
    }
  ];

  const courses = [
    { grade: 'Class 6-8', subjects: ['Math', 'Science', 'English'], color: 'from-blue-400 to-purple-500' },
    { grade: 'Class 9-10', subjects: ['Math', 'Science', 'English'], color: 'from-green-400 to-blue-500' },
    { grade: 'Class 11-12', subjects: ['Physics', 'Chemistry', 'Math', 'Biology'], color: 'from-purple-400 to-pink-500' },
    { grade: 'JEE Prep', subjects: ['Physics', 'Chemistry', 'Mathematics'], color: 'from-orange-400 to-red-500' },
    { grade: 'NEET Prep', subjects: ['Physics', 'Chemistry', 'Biology'], color: 'from-teal-400 to-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>

        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Kalam Learning Centre
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Nurturing Young Minds • Shaping Bright Futures
          </p>
          <div className="flex justify-center items-center space-x-4 mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <BookOpen className="w-8 h-8 text-blue-400" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative inline-block p-6 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <stat.icon className="w-12 h-12 text-blue-400 relative z-10 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Kalam Learning Centre
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Named after the visionary Dr. A.P.J. Abdul Kalam, our learning centre embodies his passion for education and scientific excellence. We are dedicated to nurturing young minds from Class 6 to 12, providing comprehensive coaching for academic success.
                </p>
                <p>
                  Our specialized programs for JEE and NEET preparation have consistently delivered outstanding results, helping students achieve their dreams of pursuing engineering and medical careers at top institutions.
                </p>
                <p>
                  With a team of experienced educators and state-of-the-art facilities, we create an environment where learning becomes an exciting journey of discovery and growth.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  To provide world-class education that empowers students to excel academically while developing critical thinking, creativity, and character. We strive to make quality education accessible and inspiring for every student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {course.grade}
                  </h3>
                  <div className="space-y-2">
                    {course.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`text-center group transition-all duration-500 ${activeSection === index ? 'scale-105' : ''}`}
              >
                <div className="relative inline-block p-6 mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl transition-all duration-300 ${activeSection === index ? 'blur-2xl scale-110' : ''}`}></div>
                  <value.icon className={`w-16 h-16 relative z-10 mx-auto transition-all duration-300 ${activeSection === index ? 'text-blue-400 scale-110' : 'text-white/80'}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${activeSection === index ? 'text-blue-400' : 'text-white'}`}>
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of successful students who have achieved their dreams with Kalam Learning Centre
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;