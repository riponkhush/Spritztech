import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailSubmit = () => {
        if (email) {
            console.log('Email submitted:', email);
            setEmail('');
        } else {
            console.log('Email submitted:', email);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleEmailSubmit();
        }
    };

    return (
        <footer className="bg-slate-900 text-white py-4 md:py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* Brand and Email Subscription */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <h2 className="text-4xl md:text-7xl font-bold text-emerald-400 mb-4">
                                Biccas
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Get started noew try our product
                            </p>
                        </div>
                        
                        {/* Email Input */}
                        <div className="relative">
                            <div className="flex items-center bg-slate-800 rounded-full border border-slate-700 overflow-hidden">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Enter your email here"
                                    className="flex-1 px-4 py-3 bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm"
                                />
                                <button
                                    onClick={handleEmailSubmit}
                                    className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300 mr-1"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Support Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-base mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Help centre
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Account information
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Help and Solution Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-base mb-4">Help and Solution</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Talk to support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Support docs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    System status
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Covid responde
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Product Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-base mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Update
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Beta test
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">
                                    Pricing product
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-slate-400 text-sm">
                            © 2022 Biccas Inc. Copyright and rights reserved
                        </div>
                        
                        {/* Legal Links */}
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                                Terms and Condtions
                            </a>
                            <span className="text-slate-600">•</span>
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;