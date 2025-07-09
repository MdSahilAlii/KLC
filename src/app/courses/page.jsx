'use client';

import React, { useState } from 'react';
import { Clock, Users, Star, BookOpen, Award, Play, ChevronRight, Filter, Zap } from 'lucide-react';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const categories = [
    { id: 'all', name: 'All Courses', gradient: 'from-violet-600 via-purple-600 to-indigo-600', bgGradient: 'from-violet-50 to-purple-50' },
    { id: 'neet', name: 'NEET', gradient: 'from-blue-600 via-cyan-600 to-teal-600', bgGradient: 'from-blue-50 to-cyan-50' },
    { id: 'jee', name: 'JEE', gradient: 'from-emerald-600 via-green-600 to-teal-600', bgGradient: 'from-emerald-50 to-green-50' },
    { id: 'cbse', name: 'CBSE', gradient: 'from-amber-600 via-orange-600 to-red-600', bgGradient: 'from-amber-50 to-orange-50' },
     {id: 'jee/neet', name: 'JEE/NEET', gradient: 'from-amber-600 via-orange-600 to-red-600', bgGradient: 'from-amber-50 to-orange-50' },
    { id: 'amu/jmi', name: 'AMU/JMI', gradient: 'from-pink-600 via-rose-600 to-red-600', bgGradient: 'from-pink-50 to-rose-50' }
  ];

  const courses = [
    {
      id: 1,
      title: "NEET 2025 30 Days Express Crash Course",
      instructor: "Sarah Chen",
      instructorTitle: "Senior Design Director at Meta",
      category: "neet",
      price:1999,
      originalPrice: 6019,
      rating: 4.9,
      students: 12847,
      duration: "42 hours",
      lessons: 156,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F75a54457-aec6-4e35-8516-3dd604ea3278.png&w=640&q=75",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      bgGradient: "from-blue-50 to-cyan-50",
      badge: "Most Popular",
      description: "Master enterprise-level design systems and create stunning user experiences that drive business results.",
      link:"https://www.klc.live/courses/647079?category=neet"
    },
    {
      id: 2,
      title: "NEET Pinnacle 2027 - 2 Year Program",
      instructor: "Michael Rodriguez",
      instructorTitle: "Lead Software Architect at Google",
      category: "neet",
      price: 19999,
      originalPrice: 30019,
      rating: 4.8,
      students: 8943,
      duration: "68 hours",
      lessons: 203,
      level: "Intermediate",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F38700a0c-ed4a-4c1c-8061-3e1bbc887ab6.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Trending",
      description: "Build production-ready applications with cutting-edge technologies and industry best practices.",
      link:"https://www.klc.live/courses/639277?category=neet"
    },
    {
      id: 3,
      title: "JEE Pinnacle 2027 - 2 Year Program",
      instructor: "Emma Thompson",
      instructorTitle: "VP of Marketing at HubSpot",
      category: "jee",
      price: 19999,
      originalPrice: 30019,
      rating: 4.7,
      students: 15632,
      duration: "35 hours",
      lessons: 98,
      level: "Intermediate",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F88de103d-0f6c-47eb-8bea-aea79d743e65.jpg&w=640&q=75",
      gradient: "from-pink-600 via-rose-600 to-red-600",
      bgGradient: "from-pink-50 to-rose-50",
      badge: "Best Seller",
      description: "Master data-driven marketing strategies that generate measurable ROI and sustainable growth.",
      link:"https://www.klc.live/courses/639269?mainCategory=8"
    },
    {
      id: 4,
      title: "JEE Sprint 2026 - 1 Year Program",
      instructor: "David Park",
      instructorTitle: "CEO & Executive Coach",
      category: "jee",
      price: 14999,
      originalPrice: 25019,
      rating: 4.9,
      students: 6754,
      duration: "52 hours",
      lessons: 127,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F993f5177-df21-412b-b469-e8a94094cd66.jpg&w=640&q=75",
      gradient: "from-amber-600 via-orange-600 to-red-600",
      bgGradient: "from-amber-50 to-orange-50",
      badge: "Premium",
      description: "Advanced leadership strategies and executive presence for C-suite professionals and entrepreneurs.",
      link:"https://www.klc.live/courses/638898?mainCategory=8"
    },
    {
      id: 5,
      title: "CBSE Grade 7 Foundation Builder",
      instructor: "Alexandra Kim",
      instructorTitle: "Creative Director at Adobe",
      category: "cbse",
      price: 5999,
      originalPrice: 10019,
      rating: 4.8,
      students: 4287,
      duration: "46 hours",
      lessons: 134,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2Fdf194bab-bff1-4d96-af01-8c486a3c3834.png&w=640&q=75",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      bgGradient: "from-blue-50 to-cyan-50",
      badge: "New",
      description: "Create compelling motion graphics and brand experiences that captivate audiences and drive engagement.",
      link:"https://www.klc.live/courses/622887?mainCategory=0"
      
    },
    {
      id: 6,
      title: "CBSE Grade 8 Foundation Builder",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "cbse",
      price: 5999,
      originalPrice: 10019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F4535e7de-5601-462e-84e4-a45509f2cd95.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/623132?mainCategory=0"
    },
     {
      id: 7,
      title: "Parwaz 2.0",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "amu/jmi",
      price: 399,
      originalPrice: 4019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F9e7092b3-3dc7-4fb1-828e-69cbab71f614.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/624176?mainCategory=0&subCatList=%5B273449%5D"
    },
     {
      id: 8,
      title: "Aaghaz 2.0: AMU & JMI Prep for Grade 9",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "amu/jmi",
      price: 399,
      originalPrice: 4019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F1e554b6f-9c7b-4122-a2d4-839a005155ac.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/624174?mainCategory=0&subCatList=%5B273449%5D"
    },
     {
      id: 9,
      title: "CBSE Grade 6 Foundation Builder",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "cbse",
      price: 5999,
      originalPrice: 10019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F72706ece-4ed2-46cc-bbe8-4a943389cf37.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/622886?mainCategory=0&subCatList=%5B274454%5D"
    },
     {
      id: 10,
      title: "Grade 9 CBSE Step-Up Batch",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "cbse",
      price: 9999,
      originalPrice: 16019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F04b5fb2f-5618-4ef2-bc72-b4420b3baec6.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/622889?mainCategory=0&subCatList=%5B274457%2C274458%2C274459%2C274460%2C274461%2C274462%2C282668%5D"
    },
     {
      id: 11,
      title: "Grade 10 CBSE X-Celebrate Batch",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "cbse",
      price: 9999,
      originalPrice: 16019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F4535e7de-5601-462e-84e4-a45509f2cd95.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/623132?mainCategory=0"
    },
     {
      id: 12,
      title: "Grade 9 JEE/NEET Foundation 2026",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "jee/neet",
      price: 12499,
      originalPrice: 20019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F941efab6-0b4b-4990-b512-2a57fdfa981c.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/622892?mainCategory=0&subCatList=%5B274457%2C274458%2C274459%2C274460%2C274461%2C274462%2C282668%5D"
    },
     {
      id: 13,
      title: "Grade 10 JEE/NEET Foundation 2026",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "jee/neet",
      price: 12499,
      originalPrice: 20019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F839cfb63-9245-46b1-bd5c-134a76d612be.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/622893?mainCategory=0&subCatList=%5B274457%2C274458%2C274459%2C274460%2C274461%2C274462%2C282668%5D"
    },
     {
      id: 14,
      title: "Aspire CBSE 2027 2 Year Batch",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "cbse",
      price: 14999,
      originalPrice: 25019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2Fbabb15dd-3846-41a4-a8a7-b8cabd2e52bf.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/622891?filterId=33&sortId=7"
    },{
      id: 15,
      title: "NEET Sprint 2026 - 1 Year Program",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "neet",
      price: 14999,
      originalPrice: 25019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2Fb15b3f76-f703-4f45-9bf4-f05bb6117ef4.jpg&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/639270?mainCategory=0&filterId=1&sortId=7"
    },
    {
      id: 16,
      title: "NEET TITANS TEST SERIES 2025 - Your Ultimate NEET Prep Partner!",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "neet",
      price: 1999,
      originalPrice: 5019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2F06c7d657-2fe1-4f5b-857f-e8e7664bf202.png&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/639194?mainCategory=0&filterId=1&sortId=7"
    },
        {
      id: 17,
      title: "CBSE Mastery 12 (2027) - PCM/B",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "cbse",
      price: 14999,
      originalPrice: 25019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2Ff4326741-ced2-4128-8250-f576dd3a6fed.jpg&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/638897?mainCategory=0&filterId=1&sortId=7"
    },
     {
      id: 18,
      title: "CBSE Excel 12 (2026) - PCM/B",
      instructor: "Dr. Lisa Wang",
      instructorTitle: "Principal Data Scientist at Microsoft",
      category: "cbse",
      price: 12999,
      originalPrice: 20019,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftgbukb%2Ff4326741-ced2-4128-8250-f576dd3a6fed.jpg&w=640&q=75",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      badge: "Hot",
      description: "Master cutting-edge AI technologies and build intelligent systems that solve real-world problems.",
      link:"https://www.klc.live/courses/638897?mainCategory=0&filterId=1&sortId=7"
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-gradient-to-r from-emerald-500 to-green-500 text-white';
      case 'Intermediate': return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white';
      case 'Advanced': return 'bg-gradient-to-r from-rose-500 to-red-500 text-white';
      default: return 'bg-gradient-to-r from-slate-500 to-gray-500 text-white';
    }
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Most Popular': 'bg-gradient-to-r from-violet-500 to-purple-500',
      'Trending': 'bg-gradient-to-r from-blue-500 to-cyan-500',
      'Best Seller': 'bg-gradient-to-r from-pink-500 to-rose-500',
      'Premium': 'bg-gradient-to-r from-amber-500 to-orange-500',
      'New': 'bg-gradient-to-r from-emerald-500 to-green-500',
      'Hot': 'bg-gradient-to-r from-red-500 to-pink-500'
    };
    return colors[badge] || 'bg-gradient-to-r from-slate-500 to-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-pink-800/10 opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-5 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Zap className="w-4 h-4 text-yellow-400" />
              Premium Learning Experience
            </div>
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Transform Your Career
              </span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Join thousands of professionals who've advanced their careers with our world-class courses. 
              Learn from industry experts and gain skills that matter.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-indigo-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                50,000+ Students
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Industry Experts
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                Career Growth
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticy top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Filter Courses</h3>
                <p className="text-sm text-slate-500">Find the perfect course for your goals</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-2 rounded-lg border border-slate-200">
              <span className="text-sm font-medium text-slate-700">
                {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
              </span>
            </div>
          </div>
          <div className="flex  flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg shadow-indigo-500/25`
                    : 'bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 hover:from-slate-100 hover:to-slate-200 border border-slate-200'
                }`}
              >
                {category.name}
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-3xl shadow-sm border border-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {/* Course Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-60`}></div> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getLevelColor(course.level)} shadow-lg`}>
                    {course.level}
                  </span>
                  {course.badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(course.badge)} shadow-lg animate-pulse`}>
                      {course.badge}
                    </span>
                  )}
                </div>
                
                {/* Play Button */}
                {/* <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg">
                    <Play className="w-5 h-5 text-slate-700" />
                  </div>
                </div> */}
                
                {/* Discount Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                    Save {Math.round((1 - course.price / course.originalPrice) * 100)}%
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Rating and Students */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-white fill-current" />
                      <span className="font-bold text-white text-sm">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {course.category}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {course.title}
                </h3>
                
                {/* Description */}
                {/* <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  {course.description}
                </p> */}

                {/* Course Details */}
                <div className="flex items-center gap-4 mb-5 text-sm">
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">{course.lessons} lessons</span>
                  </div>
                </div>

                {/* Instructor */}
                {/* <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200/50">
                  <div className={`w-12 h-12 bg-gradient-to-r ${course.gradient} rounded-2xl flex items-center justify-center text-white font-bold shadow-lg`}>
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{course.instructor}</div>
                    <div className="text-slate-600 text-sm">{course.instructorTitle}</div>
                  </div>
                </div> */}

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      ₹{course.price}
                    </span>
                    <span className="text-slate-400 line-through text-base">₹{course.originalPrice}</span>
                  </div>
                  <a
                  href={course.link}
                  >
                  <button className={`bg-gradient-to-r ${course.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}>
                    Enroll Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${course.gradient} transition-opacity duration-500 pointer-events-none rounded-3xl`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-indigo-900/10 to-purple-900/10 opacity-40"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Ready to Level Up?
              </span>
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join the elite community of learners who are transforming their careers with cutting-edge skills. 
              Your future self will thank you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Explore All Courses
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;