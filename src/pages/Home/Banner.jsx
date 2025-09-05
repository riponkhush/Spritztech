import React from "react";

const Banner = () => {
  return (
    <section className="bg-teal-50 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                We're here to
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Increase your
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Productivity
              </h1>

              {/* Green curved underline */}
              <div className="mt-6 lg:mt-8">
                <svg
                  className="w-40 sm:w-48 md:w-64 lg:w-72 xl:w-80 h-3 sm:h-4"
                  viewBox="0 0 320 16"
                  fill="none"
                >
                  <path
                    d="M4 8C60 3 120 13 180 8C220 5 260 11 316 8"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl max-w-md lg:max-w-lg leading-relaxed">
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest features in managing work every
              day.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center pt-2">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl">
                Try free trial
              </button>
              <button className="flex items-center gap-3 text-gray-700 hover:text-teal-600 font-medium text-sm sm:text-base transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                View Demo
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative order-1  flex justify-center lg:justify-end">
            {/* Person Image */}
            <div className="relative z-10 flex justify-center items-end h-full">
              <img
                src="https://i.ibb.co/BVZZ5Kmg/3.png"
                alt="Person with hoodie and glasses"
                className="w-full h-full object-cover object-top rounded-2xl lg:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
