import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Kalam Learning Center</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            India’s #1 online learning platform for JEE, NEET, and school exams.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-blue-500 transition duration-200"><FaFacebookF /></a>
                            <a href="#" className="hover:text-sky-400 transition duration-200"><FaTwitter /></a>
                            <a href="#" className="hover:text-pink-500 transition duration-200"><FaInstagram /></a>
                            <a href="#" className="hover:text-blue-400 transition duration-200"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-red-500 transition duration-200"><FaYoutube /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Courses</h4>
                        <ul className="space-y-3 text-gray-400">
                            {['JEE Courses', 'NEET Courses', 'CBSE Classes', 'ICSE Classes', 'Foundation Courses'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-white transition duration-150">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3 text-gray-400">
                            {['Study Material', 'Sample Papers', 'Previous Year Papers', 'NCERT Solutions', 'Blog'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-white transition duration-150">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            {['About Us', 'Careers', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-white transition duration-150">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Kalam Learning Center. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
