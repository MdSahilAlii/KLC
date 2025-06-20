import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <a href="#" className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">Kalam Learning Center</span>
                    </a>
                    <div className="hidden  md:flex space-x-6">
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Live Classes</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Study Material</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Practice</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="hidden md:block px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg">Login</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">Sign Up</button>
                    <button className="md:hidden text-gray-700">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
