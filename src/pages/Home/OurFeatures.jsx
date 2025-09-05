import React from 'react';

const OurFeatures = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-20 gap-6">
                    <div className="max-w-md">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Our Features you cab get
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                        <p className="text-gray-400 text-lg max-w-sm">
                            We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Features Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Collaboration Teams Card */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        {/* Card Visual */}
                        <div className="bg-gray-50 p-8 h-80 flex items-center justify-center">
                            <div className="relative w-full max-w-xs">
                                {/* List Items */}
                                <div className="space-y-4">
                                    {/* First Item */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-teal-500 rounded-lg flex-shrink-0"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="w-full h-3 bg-gray-200 rounded-full"></div>
                                            <div className="w-3/4 h-3 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <div className="w-0 h-0 border-l-8 border-l-teal-500 border-y-4 border-y-transparent"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Second Item */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex-shrink-0"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="w-full h-3 bg-gray-200 rounded-full"></div>
                                            <div className="w-2/3 h-3 bg-gray-200 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom Elements */}
                                <div className="flex items-center justify-between mt-8">
                                    <div className="w-18 h-18 bg-gray-300 rounded-full"></div>
                                    <div className="w-18 h-18 bg-blue-500 rounded-full"></div>
                                    <div className="w-18 h-18 bg-teal-500 rounded-full flex items-center justify-center">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card Content */}
                        <div className="p-6 lg:p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Collboration Teams</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Here you can handle projects together with team virtually
                            </p>
                        </div>
                    </div>

                    {/* Cloud Storage Card */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        {/* Card Visual */}
                        <div className="bg-gray-50 p-8 h-80 flex items-center justify-center">
                            <div className="relative">
                                {/* Main Window */}
                                <div className="w-60 h-56 bg-white rounded-2xl border-4 border-gray-200 p-6 shadow-lg">
                                    {/* Top Bar */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Document Section */}
                                    <div className="bg-teal-500 rounded-xl p-4 mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                                                <div className="w-4 h-6 bg-white rounded-sm"></div>
                                            </div>
                                            <div className="w-6 h-6 bg-white bg-opacity-30 rounded-full"></div>
                                        </div>
                                        <div className="text-white font-semibold mb-1">Document File</div>
                                        <div className="text-white text-sm opacity-90">456 GB | 1056 items</div>
                                    </div>
                                    
                                    {/* Chart Bars */}
                                    <div className="flex items-end gap-2 justify-center">
                                        <div className="w-3 h-8 bg-teal-400 rounded-full"></div>
                                        <div className="w-3 h-12 bg-teal-500 rounded-full"></div>
                                        <div className="w-3 h-6 bg-teal-400 rounded-full"></div>
                                        <div className="w-3 h-10 bg-teal-500 rounded-full"></div>
                                        <div className="w-3 h-14 bg-teal-500 rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Bottom Label */}
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded text-sm">
                                    315 x 365
                                </div>
                            </div>
                        </div>
                        
                        {/* Card Content */}
                        <div className="p-6 lg:p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Storage</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                No nedd to worry about storage because we provide storage up to 2 TB
                            </p>
                        </div>
                    </div>

                    {/* Daily Analytics Card */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        {/* Card Visual */}
                        <div className="bg-gray-50 p-8 h-80 flex items-center justify-center">
                            <div className="relative w-full max-w-xs">
                                {/* Donut Chart */}
                                <div className="relative w-32 h-32 mx-auto mb-8">
                                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                                        <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="10" fill="none"/>
                                        <circle cx="60" cy="60" r="50" stroke="#3b82f6" strokeWidth="10" fill="none"
                                                strokeDasharray="188" strokeDashoffset="75" strokeLinecap="round"/>
                                        <circle cx="60" cy="60" r="50" stroke="#fbbf24" strokeWidth="10" fill="none"
                                                strokeDasharray="75" strokeDashoffset="0" strokeLinecap="round"/>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">d</span>
                                        </div>
                                    </div>
                                    {/* Percentage Labels */}
                                    <div className="absolute -top-2 left-8 text-sm font-semibold text-gray-700">60%</div>
                                    <div className="absolute -bottom-2 right-8 text-sm font-semibold text-gray-700">40%</div>
                                </div>
                                
                                {/* List Items */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                            </svg>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="w-full h-3 bg-teal-400 rounded-full"></div>
                                            <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                                            <div className="w-6 h-6 bg-white rounded-sm"></div>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                                            <div className="w-full h-3 bg-teal-400 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card Content */}
                        <div className="p-6 lg:p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Analytics</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We always provide useful informatin to make it easier for you every day
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurFeatures;