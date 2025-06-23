import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
            <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
                
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Personalized Online Learning for <br />
                        <span className="text-yellow-300">Class 6 to 12</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        India&apos;s #1 online tutoring platform with live classes, interactive quizzes, and doubt solving.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md transition hover:bg-gray-100">
                            Book Free Class
                        </button>
                        <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold transition hover:bg-white hover:text-blue-700">
                            Explore Courses
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Online Learning" 
                        className="rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
