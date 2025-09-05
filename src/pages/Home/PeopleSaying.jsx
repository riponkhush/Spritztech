import React, { useState } from 'react';

const PeopleSaying = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (email && message) {
            console.log('Demo requested:', { email, message });
            setEmail('');
            setMessage('');
        } else {
            console.log('Demo requested:', { email, message });
        }
    };

    const handleFreeTrial = () => {
        console.log('Free trial started');
    };

    return (
        <div className=" bg-slate-900 text-white">
            <div className="container max-w-7xl mx-auto px-4 py-8 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                People are Saying
                                <br />
                                About DoWhith
                            </h1>
                            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                                Everything you need to accept to payment and grow
                                <br />
                                your money of manage anywhere on planet
                            </p>
                        </div>

                        {/* Testimonial Card */}
                        <div className="">
                            {/* Quote Mark */}
                            <div className="">
                                <div className="text-6xl md:text-7xl text-slate-600 font-serif leading-none select-none">"</div>
                            </div>
                            
                            {/* Testimonial Text */}
                            <blockquote className="text-slate-200 text-base md:text-md leading-relaxed mb-6">
                                I am very helped by this E-wallet application, my days are very easy to use this application and its very helpful in my life, even I can pay a short time 😊
                            </blockquote>
                            
                            {/* Author */}
                            <cite className="text-slate-400 text-sm md:text-base font-medium">
                                — Aria Zinarrio
                            </cite>
                        </div>

                        {/* User Avatars with Play Button */}
                        <div className="flex items-center space-x-4">
                            {/* Avatar Group */}
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-slate-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-white font-semibold text-sm">A</span>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-3 border-slate-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-white font-semibold text-sm">B</span>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-3 border-slate-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-white font-semibold text-sm">C</span>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-3 border-slate-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-white font-semibold text-sm">D</span>
                                </div>
                            </div>
                            
                            {/* Play Button */}
                            <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-600 hover:scale-110 transition-all duration-300 shadow-lg">
                                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Get Started Form */}
                    <div className="lg:pl-8">
                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-700/50 shadow-2xl">
                            
                            {/* Form Header */}
                            <div className="text-center mb-8">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Get Started</h2>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <label className="block text-slate-300 text-sm font-medium mb-3">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-slate-300 text-sm font-medium mb-3">
                                        Message
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="What are you say ?"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-800 shadow-lg hover:shadow-emerald-500/25"
                                >
                                    Request Demo
                                </button>

                                {/* Divider and Free Trial */}
                                <div className="text-center">
                                    <p className="text-slate-400 text-sm">
                                        or{' '}
                                        <button
                                            onClick={handleFreeTrial}
                                            className="text-emerald-400 hover:text-emerald-300 font-medium underline transition-colors duration-300"
                                        >
                                            Start Free Trial
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSaying;