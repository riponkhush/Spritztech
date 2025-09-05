import React from 'react';

const Benifit = () => {
    return (
        <section className="bg-teal-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Main Heading */}
                        <div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                What Benifit Will You Get
                            </h2>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-6">
                            
                            {/* Free Consulting */}
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-lg lg:text-xl text-gray-900 font-medium">
                                    Free Consulting With Experet Saving Money
                                </span>
                            </div>

                            {/* Online Banking */}
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-lg lg:text-xl text-gray-900 font-medium">
                                    Online Banking
                                </span>
                            </div>

                            {/* Investment Report */}
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-lg lg:text-xl text-gray-900 font-medium">
                                    Investment Report Every Month
                                </span>
                            </div>

                            {/* Saving Money */}
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-lg lg:text-xl text-gray-900 font-medium">
                                    Saving Money For The Future
                                </span>
                            </div>

                            {/* Online Transaction */}
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-lg lg:text-xl text-gray-900 font-medium">
                                    Online Transection
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Right Content - Workspace Image with Floating Elements */}
                    <div className="relative order-first lg:order-last">
                        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                            
                            {/* Main Workspace Image */}
                            <div className="relative bg-gray-100 rounded-3xl overflow-hidden">
                                <img 
                                    src="https://i.ibb.co/VWBmyVG2/f952ad38bb672fc5332c4f29f14334e1e5438788-1.png" 
                                    alt="Laptop workspace with coffee"
                                    className="w-full md:w-[500px] h-80 sm:h-96 lg:h-[500px] object-cover"
                                />
                            </div>

                            {/* Floating UI Elements */}
                            
                            {/* User Profile Card - Top Left */}
                            <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-semibold">A</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">Amanda Young</div>
                                        <div className="text-gray-500 text-xs">Expert Saving Money</div>
                                    </div>
                                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center ml-2">
                                        <span className="text-white text-xs font-bold">P</span>
                                    </div>
                                </div>
                            </div>

                            {/* Total Income Card - Top Right */}
                            <div className="absolute top-4 -right-4 sm:-right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100 z-10">
                                <div className="text-xs text-gray-500 mb-1">Total Income</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-gray-900">$245.00</span>
                                    <div className="flex gap-0.5">
                                        <div className="w-1 h-4 bg-teal-500 rounded-full"></div>
                                        <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
                                        <div className="w-1 h-3 bg-teal-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Icon - Left Middle */}
                            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shadow-xl z-10">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.4 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                                </svg>
                            </div>

                            {/* Success Message - Bottom */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-3 shadow-xl border border-gray-100 z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Money Transfer Succesfull</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benifit;