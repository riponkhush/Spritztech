import React, { useState } from 'react';

const Service = () => {
    const [billingType, setBillingType] = useState('yearly');

    return (
        <section className="bg-teal-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Choose Plan
                    </h2>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                        That's Right For You
                    </h2>
                    <p className="text-gray-400 text-lg mb-10">
                        Choose plan that works best for you, feel free to contact us
                    </p>
                    
                    {/* Billing Toggle */}
                    <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
                        <button 
                            onClick={() => setBillingType('monthly')}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${
                                billingType === 'monthly' 
                                    ? 'bg-white text-gray-900 shadow-md' 
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Bil Monthly
                        </button>
                        <button 
                            onClick={() => setBillingType('yearly')}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${
                                billingType === 'yearly' 
                                    ? 'bg-teal-500 text-white shadow-md' 
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Bil Yearly
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    
                    {/* Free Plan */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-fit">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free</h3>
                            <p className="text-gray-500 mb-6">
                                Have a go and test your superpowers
                            </p>
                            <div className="mb-6">
                                <span className="text-gray-400 text-lg">$</span>
                                <span className="text-6xl font-bold text-gray-900">0</span>
                            </div>
                        </div>
                        
                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">2 Users</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">2 Files</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Public Share & Comments</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Chat Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">New income apps</span>
                            </div>
                        </div>
                        
                        <button className="w-full text-teal-500 font-medium py-3 shadow-xl rounded-xl hover:text-teal-600 transition-colors">
                            Signup for free
                        </button>
                    </div>

                    {/* Pro Plan - Featured */}
                    <div className="bg-teal-500 rounded-3xl p-8 shadow-xl relative transform lg:scale-105">
                        <div className="text-center mb-4">
                            <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                            <p className="text-white text-opacity-90 mb-4">
                                Experiment the power of infinite possibilities
                            </p>
                            <div className="mb-4">
                                <span className="text-white text-opacity-70 text-lg">$</span>
                                <span className="text-6xl font-bold text-white">8</span>
                            </div>
                            <div className="bg-teal-400 bg-opacity-20 rounded-full px-4 py-2 inline-block mb-6">
                                <span className="text-white  text-sm">Save $50 a year</span>
                            </div>
                        </div>
                        
                        {/* Features in White Box */}
                        <div className="bg-white rounded-2xl p-6 mb-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">4 Users</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">All apps</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Unlimited editable exports</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Folders and collaboration</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">All incoming apps</span>
                                </div>
                            </div>
                        </div>
                        
                        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 rounded-2xl transition-colors">
                            Go to pro
                        </button>
                    </div>

                    {/* Business Plan */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-fit">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Business</h3>
                            <p className="text-gray-500 mb-6">
                                Unveil new superpowers and join the Design League
                            </p>
                            <div className="mb-6">
                                <span className="text-gray-400 text-lg">$</span>
                                <span className="text-6xl font-bold text-gray-900">16</span>
                            </div>
                        </div>
                        
                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">All the features of pro plan</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Account success Manager</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Single Sign-On (SSO)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Co-conception pogram</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Collaboration-Soon</span>
                            </div>
                        </div>
                        
                        <button className="w-full text-teal-500 font-medium py-3 shadow-xl rounded-xl hover:text-teal-600 transition-colors">
                            Goto Business
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Service;