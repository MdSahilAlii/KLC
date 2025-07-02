'use client';
import React, { useState } from 'react';
import { Clock, Users, Star, BookOpen, Award, Play, ChevronRight } from 'lucide-react';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const categories = [
    { id: 'all', name: 'All Courses', color: 'from-purple-500 to-pink-500' },
    { id: 'design', name: 'Design', color: 'from-blue-500 to-cyan-500' },
    { id: 'development', name: 'Development', color: 'from-green-500 to-emerald-500' },
    { id: 'business', name: 'Business', color: 'from-orange-500 to-red-500' },
    { id: 'marketing', name: 'Marketing', color: 'from-pink-500 to-rose-500' }
  ];

  const courses = [
    {
      id: 1,
      title: "Advanced UI/UX Design Mastery",
      instructor: "Sarah Chen",
      category: "design",
      price: 149,
      originalPrice: 199,
      rating: 4.9,
      students: 12847,
      duration: "42 hours",
      lessons: 156,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      description: "Master the art of creating stunning user interfaces and experiences"
    },
    {
      id: 2,
      title: "Full-Stack React Development",
      instructor: "Mike Rodriguez",
      category: "development",
      price: 179,
      originalPrice: 249,
      rating: 4.8,
      students: 8943,
      duration: "68 hours",
      lessons: 203,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      gradient: "from-blue-600 via-purple-600 to-cyan-600",
      description: "Build modern web applications from frontend to backend"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy 2024",
      instructor: "Emma Thompson",
      category: "marketing",
      price: 129,
      originalPrice: 179,
      rating: 4.7,
      students: 15632,
      duration: "35 hours",
      lessons: 98,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      gradient: "from-pink-600 via-rose-600 to-orange-600",
      description: "Master digital marketing in the modern landscape"
    },
    {
      id: 4,
      title: "Entrepreneurship & Startup Fundamentals",
      instructor: "David Park",
      category: "business",
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      students: 6754,
      duration: "52 hours",
      lessons: 127,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      description: "Launch and scale your startup from idea to success"
    },
    {
      id: 5,
      title: "3D Motion Graphics with Blender",
      instructor: "Alex Kim",
      category: "design",
      price: 159,
      originalPrice: 219,
      rating: 4.8,
      students: 4287,
      duration: "46 hours",
      lessons: 134,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      description: "Create stunning 3D animations and motion graphics"
    },
    {
      id: 6,
      title: "Machine Learning with Python",
      instructor: "Dr. Lisa Wang",
      category: "development",
      price: 189,
      originalPrice: 259,
      rating: 4.9,
      students: 9876,
      duration: "78 hours",
      lessons: 234,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      description: "Dive deep into AI and machine learning algorithms"
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              Premium Courses
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock your potential with our carefully curated collection of expert-led courses. 
              Transform your skills and accelerate your career with cutting-edge content.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl shadow-purple-500/25`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90`}></div>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
                {/* Discount Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {course.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{course.instructor}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">${course.price}</span>
                    <span className="text-gray-400 line-through text-sm">${course.originalPrice}</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                    Enroll Now
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of students who have transformed their careers with our courses
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;