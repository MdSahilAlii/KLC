'use client'
import React, { useState, useEffect } from 'react';
import { Users, Award, Target, BookOpen, Shield, TrendingUp, CheckCircle, ArrowRight, Sparkles, Star } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '1000+', label: 'Students Mentored', icon: Users, color: 'from-blue-500 to-indigo-600' },
    { number: '95%', label: 'Success Rate', icon: Award, color: 'from-emerald-500 to-teal-600' },
    { number: '7+', label: 'Years of Excellence', icon: Target, color: 'from-purple-500 to-violet-600' },
    { number: '50+', label: 'Expert Faculty', icon: BookOpen, color: 'from-orange-500 to-red-600' }
  ];

  const achievements = [
    'Top-rated coaching institute in the region',
    'Consistent track record of academic excellence',
    'Personalized learning approach for every student',
    'State-of-the-art infrastructure and facilities',
    'Industry-leading faculty with proven expertise',
    'Comprehensive curriculum aligned with latest standards'
  ];

  const courses = [
    {
      category: 'Foundation Courses',
      icon: BookOpen,
      gradient: 'from-blue-500 to-indigo-600',
      programs: [
        { name: 'Class 6-8', description: 'Building strong fundamentals in Mathematics, Science, and English', students: '300+' },
        { name: 'Class 9-10', description: 'Board exam preparation with comprehensive subject coverage', students: '250+' }
      ]
    },
    {
      category: 'Advanced Courses',
      icon: Target,
      gradient: 'from-purple-500 to-violet-600',
      programs: [
        { name: 'Class 11-12', description: 'Higher secondary education with specialization tracks', students: '200+' },
        { name: 'JEE Preparation', description: 'Comprehensive engineering entrance exam coaching', students: '150+' },
        { name: 'NEET Preparation', description: 'Medical entrance exam preparation with expert guidance', students: '100+' }
      ]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest standards of ethical conduct and transparency in all our operations.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Continuously striving for superior academic outcomes and student satisfaction.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Goal-oriented methodology ensuring each student achieves their academic objectives.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with students, parents, and educators to create a supportive learning environment.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"></div>
        
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative pt-32 pb-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full mb-8 border border-white/20">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
                Kalam Learning
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Centre
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
                Where Excellence Meets Innovation • Shaping Tomorrow's Leaders
              </p>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-r ${stat.color} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}>
                    <stat.icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <Star className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">About Us</span>
              </div>
              <h2 className="text-5xl font-bold text-slate-800 leading-tight">
                Excellence in 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Established with a vision to provide world-class education, Kalam Learning Centre has been at the forefront of academic excellence for over seven years. Named after the visionary Dr. A.P.J. Abdul Kalam, we embody his principles of dedication, innovation, and educational excellence.
                </p>
                <p>
                  Our comprehensive academic programs span from foundational learning to advanced competitive exam preparation. We combine traditional teaching excellence with cutting-edge educational technology to create an unparalleled learning experience.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  To deliver exceptional educational experiences that empower students to achieve their full potential through innovative teaching methodologies and unwavering commitment to excellence.
                </p>
                <div className="space-y-4">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 flex-1">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-200 mb-6">
              <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-800 font-medium">Academic Programs</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-slate-800">
              Comprehensive
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Learning Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertly designed programs that cater to diverse learning needs and academic aspirations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {courses.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${category.gradient} text-white p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    <div className="relative flex items-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{category.category}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      {category.programs.map((program, programIndex) => (
                        <div key={programIndex} className="group/item hover:bg-gray-50 p-4 rounded-xl transition-colors duration-300">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-xl font-semibold text-slate-800 group-hover/item:text-blue-600 transition-colors duration-300">
                              {program.name}
                            </h4>
                            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                              {program.students}
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{program.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6">
              <Shield className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="text-emerald-800 font-medium">Our Values</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-slate-800">
              Core Principles That
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Guide Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundational values that shape our educational philosophy and institutional culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeValue === index ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 h-full hover:shadow-2xl transition-all duration-500">
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r ${value.color} shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                    {activeValue === index && (
                      <div className="absolute inset-0 rounded-2xl bg-white/30 animate-pulse"></div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
                {activeValue === index && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full border border-indigo-200 mb-6">
                <Award className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-indigo-800 font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-slate-800 leading-tight">
                What Makes Us
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Different
                </span>
              </h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg flex-1">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white p-10 rounded-3xl shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Promise</h3>
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  We are committed to providing an educational environment that fosters intellectual growth, critical thinking, and personal development. Our approach goes beyond academics to character building and holistic development.
                </p>
                <div className="flex items-center text-blue-400 font-semibold text-lg group cursor-pointer">
                  <span className="group-hover:text-blue-300 transition-colors duration-300">Discover Our Programs</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900 text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full mb-8 border border-white/20">
            <ArrowRight className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join our community of successful students and experience the difference that quality education and personalized guidance can make in your academic journey.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-3xl hover:scale-105">
            Start Your Journey Today
            <ArrowRight className="w-6 h-6 ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;