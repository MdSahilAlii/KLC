import React from 'react';

const coursesData = [
    {
        title: "JEE Main & Advanced",
        description: "Complete preparation for JEE with 500+ hours of live classes",
        price: "₹19,999",
        originalPrice: "₹25,000",
        rating: 4.8,
        reviews: 1245,
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
    },
    {
        title: "NEET UG Complete",
        description: "Comprehensive NEET preparation with NCERT focus and test series",
        price: "₹17,999",
        originalPrice: "₹22,000",
        rating: 4.9,
        reviews: 890,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "CBSE Class 12",
        description: "Board exam preparation with chapter-wise tests and sample papers",
        price: "₹12,999",
        originalPrice: "₹15,000",
        rating: 5.0,
        reviews: 1520,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1422&q=80"
    }
];

const Courses = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Our Popular Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map((course, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{course.title}</h3>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                                <div className="flex items-center mb-4">
                                    <div className="flex mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`fas fa-star ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                                        ))}
                                    </div>
                                    <span className="text-gray-600 text-sm">{course.rating} ({course.reviews} reviews)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-gray-400 line-through text-sm">{course.originalPrice}</span>
                                        <span className="text-blue-600 font-bold ml-2">{course.price}</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
