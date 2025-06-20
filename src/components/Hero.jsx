import React from 'react';

const Hero = () => {
    return (
        <section className="hero-gradient text-white py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Personalized Online Learning for <span className="text-yellow-300">Class 6 to 12</span></h1>
                    <p className="text-xl mb-8">India's #1 online tutoring platform with live classes, interactive quizzes, and doubt solving.</p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">Book Free Class</button>
                        <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600">Explore Courses</button>
                    </div>
                </div>
                <div className="md:w-1/2 relative">
                    <img src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                         alt="Online Learning" className="rounded-lg shadow-xl w-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
