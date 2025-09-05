import React from 'react';

const MoreThan = () => {
    return (
        <section className="bg-teal-50 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Heading */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                        More than 25,000 teams use Collabs
                    </h2>
                </div>


                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                    

                    <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-gray-700 transition-colors">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-sm flex items-center justify-center">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                        </div>
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold ">Unsplash</span>
                    </div>


                    <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-gray-700 transition-colors">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm font-bold">N</span>
                        </div>
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold">Notion</span>
                    </div>


                    <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-gray-700 transition-colors">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                            <div className="w-full h-full bg-gray-400 rounded-sm flex items-center justify-center">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold">INTERCOM</span>
                    </div>


                    <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-gray-700 transition-colors">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-400 transform rotate-45 rounded-sm"></div>
                        </div>
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold">descript</span>
                    </div>


                    <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-gray-700 transition-colors">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm font-bold">G</span>
                        </div>
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold">grammarly</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MoreThan;