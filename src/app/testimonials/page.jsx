'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Users, Trophy, BookOpen, Target, Sparkles, Award, TrendingUp, Heart } from 'lucide-react';

const TestimonialsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      class: "Class 12",
      course: "JEE Advanced",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Kalam Learning Centre transformed my approach to JEE preparation. The personalized attention and comprehensive study materials helped me crack JEE Advanced with AIR 247. The teachers here don't just teach; they inspire and guide you to excellence.",
      achievement: "JEE Advanced AIR 247",
      year: "2024",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Priya Patel",
      class: "Class 12",
      course: "NEET",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c78b3c6c?w=150&h=150&fit=crop&crop=face",
      text: "The biology faculty at KLC is exceptional. Their innovative teaching methods and regular mock tests prepared me thoroughly for NEET. I secured admission in AIIMS Delhi, and I owe it all to this wonderful institution.",
      achievement: "AIIMS Delhi",
      year: "2024",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 3,
      name: "Rahul Verma",
      class: "Class 10",
      course: "CBSE Board",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "From struggling in mathematics to scoring 98% in Class 10 boards, KLC made the impossible possible. The doubt-clearing sessions and peer learning environment boosted my confidence tremendously.",
      achievement: "98% in Class 10",
      year: "2023",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      class: "Class 11",
      course: "JEE Foundation",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Starting JEE preparation in Class 11 seemed daunting, but KLC's structured approach and excellent faculty made it manageable. The regular assessments keep me on track for my JEE goals.",
      achievement: "Top 5% in Foundation",
      year: "2024",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      name: "Vikram Singh",
      class: "Class 9",
      course: "Foundation Course",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "KLC's foundation course gave me a strong base in all subjects. The interactive teaching style and regular parent-teacher meetings ensure holistic development. Highly recommended for early starters.",
      achievement: "Class Topper",
      year: "2023",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 6,
      name: "Anjali Reddy",
      class: "Class 12",
      course: "NEET",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "The chemistry department at KLC is outstanding. Their problem-solving techniques and conceptual clarity helped me secure a seat in Government Medical College. Forever grateful!",
      achievement: "Govt. Medical College",
      year: "2024",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Students", value: "2500+", color: "from-blue-500 to-cyan-500" },
    { icon: Trophy, label: "JEE Success Rate", value: "92%", color: "from-yellow-500 to-orange-500" },
    { icon: Award, label: "NEET Success Rate", value: "89%", color: "from-pink-500 to-rose-500" },
    { icon: TrendingUp, label: "Board Toppers", value: "150+", color: "from-green-500 to-emerald-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic Cursor Effect */}
      <div 
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 opacity-20 blur-sm transition-all duration-100"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Kalam Learning Centre
                </h1>
                <p className="text-purple-200 text-sm flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Excellence in Education
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 backdrop-blur-sm">
                <span className="text-white font-semibold">Classes 6-12 | JEE | NEET</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center justify-center mb-6">
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 backdrop-blur-sm">
                <span className="text-purple-200 text-sm font-medium flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Student Success Stories
                </span>
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Dreams Achieved
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how our students transformed their aspirations into reality with personalized coaching and expert guidance
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center group transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className={`relative w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                  <stat.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonials Carousel */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-white mb-6">What Our Students Say</h3>
            <p className="text-gray-300 text-lg">Real experiences from real students who achieved their goals</p>
          </div>

          <div className="relative">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 p-12 lg:p-16">
                    <div className="max-w-4xl mx-auto text-center">
                      <div className="mb-8">
                        <div className="relative mb-8">
                          <Quote className="w-20 h-20 text-white/30 mx-auto mb-6" />
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                        </div>
                        <p className="text-2xl lg:text-3xl text-white leading-relaxed mb-8 italic font-light">
                          "{testimonial.text}"
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-8">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full border-4 border-white/20 shadow-xl"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full opacity-20 blur-md`}></div>
                        </div>
                        <div className="text-left">
                          <h4 className="text-2xl font-bold text-white">{testimonial.name}</h4>
                          <p className="text-gray-300 text-lg">{testimonial.class} • {testimonial.course}</p>
                          <div className="flex items-center space-x-2 mt-3">
                            <div className="flex space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-gray-400">• {testimonial.year}</span>
                          </div>
                          <div className={`mt-3 px-4 py-2 bg-gradient-to-r ${testimonial.color} text-white text-sm rounded-full inline-block shadow-lg`}>
                            {testimonial.achievement}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center hover:bg-black/60 transition-all duration-300 group shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center hover:bg-black/60 transition-all duration-300 group shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-12 shadow-lg' 
                    : 'bg-white/30 w-3 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Testimonials Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-5xl font-bold text-center text-white mb-16">More Success Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={testimonial.id} className={`relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-5 rounded-3xl`}></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-white/20 shadow-lg"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full opacity-20 blur-md`}></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-gray-300 text-sm">{testimonial.course}</p>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    "{testimonial.text.substring(0, 150)}..."
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">{testimonial.year}</span>
                    <span className={`px-3 py-1 bg-gradient-to-r ${testimonial.color} text-white text-xs rounded-full shadow-md`}>
                      {testimonial.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
            <h3 className="text-5xl font-bold text-white mb-6">Ready to Join Our Success Story?</h3>
            <p className="text-xl text-gray-300 mb-8 opacity-90">
              Start your journey towards academic excellence with personalized coaching and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Enroll Now
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-xl border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white">Kalam Learning Centre</h4>
          </div>
          <p className="text-gray-300 mb-4">Empowering students to achieve their dreams through quality education</p>
          <p className="text-gray-500 text-sm">© 2024 Kalam Learning Centre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TestimonialsPage;