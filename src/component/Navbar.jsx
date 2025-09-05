import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-teal-100 px-4 sm:px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-teal-600 text-xl sm:text-2xl font-bold">
                        Biccas
                    </div>
                    
                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <a href="#" className="text-gray-800 hover:text-teal-600 font-medium transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                            Product
                        </a>
                        <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                            FAQ
                        </a>
                        <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                            Blog
                        </a>
                        <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                            About Us
                        </a>
                    </div>
                    
                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                        <button className="text-gray-600 hover:text-teal-600 transition-colors px-2">
                            Login
                        </button>
                        <button className="bg-teal-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm sm:text-base">
                            Sign Up
                        </button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-teal-600 transition-colors p-1"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                        ? 'max-h-screen opacity-100 visible' 
                        : 'max-h-0 opacity-0 invisible overflow-hidden'
                }`}>
                    <div className="pt-4 pb-2 border-t border-teal-200 mt-4">
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col space-y-3 mb-4">
                            <a href="#" className="text-gray-800 hover:text-teal-600 font-medium transition-colors py-2 px-2 rounded">
                                Home
                            </a>
                            <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors py-2 px-2 rounded">
                                Product
                            </a>
                            <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors py-2 px-2 rounded">
                                FAQ
                            </a>
                            <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors py-2 px-2 rounded">
                                Blog
                            </a>
                            <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors py-2 px-2 rounded">
                                About Us
                            </a>
                        </div>
                        
                        {/* Mobile Auth Buttons */}
                        <div className="flex flex-col space-y-2 pt-2 border-t border-teal-200">
                            <button className="text-gray-600 hover:text-teal-600 transition-colors py-2 px-2 rounded text-left">
                                Login
                            </button>
                            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors w-full sm:w-auto">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;