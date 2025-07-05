'use client'
import React, { useState, useEffect } from 'react';
import { BookOpen, Target, Award, Users, ArrowRight, Play, Star, TrendingUp } from 'lucide-react';

const KalamHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, number: "500+", label: "Students Enrolled" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: TrendingUp, number: "8+", label: "Years of Excellence" }
  ];

  const floatingIcons = [
    { Icon: BookOpen, delay: 0 },
    { Icon: Target, delay: 1 },
    { Icon: Award, delay: 2 },
    { Icon: Star, delay: 3 },
    { Icon: TrendingUp, delay: 4 },
    { Icon: Users, delay: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-purple-800 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <Icon
            key={index}
            className="absolute text-white opacity-5 w-16 h-16 animate-bounce"
            style={{
              top: `${10 + (index * 15)}%`,
              left: `${5 + (index % 2 ? 85 : 5)}%`,
              animationDelay: `${delay}s`,
              animationDuration: '6s'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">Trusted by 500+ Students</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Unlock Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Academic Excellence
            </span>
          </h1>

          {/* Tagline */}
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Premier coaching for Classes 6-12, JEE & NEET preparation with personalized attention and proven results
          </p>

          {/* Stats */}
          <div className={`flex flex-wrap justify-center gap-8 mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${currentStat === index ? 'ring-2 ring-yellow-300' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-yellow-300" />
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Success Stories
            </button>
          </div>

          {/* Features */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              {
                icon: BookOpen,
                title: "Expert Faculty",
                description: "Learn from experienced teachers with proven track records"
              },
              {
                icon: Target,
                title: "Focused Approach",
                description: "Tailored study plans for JEE, NEET, and board exams"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Consistent top rankings and scholarship achievements"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-8 h-8 text-yellow-300 mb-3 mx-auto" />
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-sm">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default KalamHeroSection;