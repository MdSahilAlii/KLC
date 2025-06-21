import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo and Nav Links */}
                <div className="flex items-center space-x-10">
                    <a href="#" className="text-2xl font-extrabold text-blue-700 tracking-tight">
                        Kalam Learning Center
                    </a>
                    <div className="hidden  md:flex space-x-6">
                        <a href="https://www.klc.live/courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
                        <a href="https://www.klc.live/courses?filterId=28&sortId=11" className="text-gray-700 hover:text-blue-600 font-medium">Live Classes</a>
                        
                        <a href="https://www.klc.live/freetest" className="text-gray-700 hover:text-blue-600 font-medium">Practice</a>
                        <a href="https://www.klc.live/about-us" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="hidden md:block px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-full transition duration-200">
                        Login
                    </button>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-200">
                        Sign Up
                    </button>
                    {/* Mobile menu icon */}
                    <button className="md:hidden text-gray-700 hover:text-blue-600 transition duration-200">
                        <FaBars size={22} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
