import React from 'react';

const HowWe = () => {
    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
                    
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Heading */}
                        <div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                                How we support our partner all over the world
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            SaaS become a common delivery model for many business application, including 
                            office software, messaging software, payroll processing software, DBMS software, 
                            management software
                        </p>

                        {/* Ratings Section */}
                        <div className="flex gap-16">
                            
                            {/* databricks Rating */}
                            <div className="space-y-4">
                                {/* Stars */}
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i}
                                            className="w-6 h-6 text-yellow-400 fill-current" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    ))}
                                </div>
                                {/* Rating Info */}
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">
                                        4.9 <span className="text-lg font-normal text-gray-400">/ 5 rating</span>
                                    </div>
                                    <div className="text-gray-400 text-base mt-1">databricks</div>
                                </div>
                            </div>

                            {/* Chainalysis Rating */}
                            <div className="space-y-4">
                                {/* Stars */}
                                <div className="flex items-center gap-1">
                                    {[...Array(4)].map((_, i) => (
                                        <svg 
                                            key={i}
                                            className="w-6 h-6 text-yellow-400 fill-current" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    ))}
                                    <svg className="w-6 h-6 text-gray-300 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                {/* Rating Info */}
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">
                                        4.8 <span className="text-lg font-normal text-gray-400">/ 5 rating</span>
                                    </div>
                                    <div className="text-gray-400 text-base mt-1">Chainalysis</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Content - Features */}
                    <div className="space-y-12">
                        
                        {/* Publishing */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                                    <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Publishing</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Plan, collaborate, and publishing your conten that drivves meaningful engagement and growth for your bramd
                                </p>
                            </div>
                        </div>

                        {/* Analytics */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                                    <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Analyze your performance and create goegeous report
                                </p>
                            </div>
                        </div>

                        {/* Engagement */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                                    <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Quiuckly navigate you anda engage with your audiecne
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowWe;