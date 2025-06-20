import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Kalam Learning Center</h3>
                        <p className="text-gray-400 mb-4">India's #1 online learning platform for JEE, NEET, and school exams.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Courses</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">JEE Courses</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">NEET Courses</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">CBSE Classes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">ICSE Classes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Foundation Courses</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Study Material</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Sample Papers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Previous Year Papers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">NCERT Solutions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© 2023 Kalam Learning Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
