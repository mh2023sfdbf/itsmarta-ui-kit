'use client';

import { useState } from 'react';

export default function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 md:py-40 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Choose the plan that fits your needs. Start free, upgrade anytime.
          </p>
          <div className="inline-flex items-center bg-[#f7f6f4] rounded-lg px-4 py-2 border border-gray-200">
            <p className="text-sm font-medium text-gray-700">All plans include 14-day free trial</p>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full shadow-sm p-1">
            <button 
              onClick={() => setIsYearly(false)}
              className={`py-2 px-6 rounded-full text-sm transition duration-200 ${
                !isYearly 
                  ? 'bg-gray-900 text-white font-medium' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`relative py-2 px-6 rounded-full text-sm transition duration-200 ${
                isYearly 
                  ? 'bg-gray-900 text-white font-medium' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yearly
              <span className="absolute -top-3 -right-5 bg-[#f7f6f4] text-xs px-2 py-0.5 rounded-full shadow-sm font-medium text-black border border-gray-200">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="rounded-2xl p-8 md:p-10 text-center bg-white flex flex-col shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[#f7f6f4] rounded-full text-gray-900 font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto border border-gray-200">
              For Individuals
            </div>
            <h3 className="font-heading text-3xl md:text-4xl mb-3 text-gray-900 font-light">Starter</h3>
            <p className="text-5xl md:text-6xl font-light font-heading mb-2 text-black">$0</p>
            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
              Perfect for getting started with essential features and exploring the platform.
            </p>
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Up to 5 projects</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Basic analytics</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Community support</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 md:py-4 px-6 text-sm md:text-base font-medium text-black border border-gray-900 bg-white hover:bg-gray-50 rounded-full transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl p-8 md:p-10 text-center bg-[#f7f6f4] flex flex-col shadow-lg border-2 border-gray-900 transform md:scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-1 rounded-full font-medium">
              Most Popular
            </div>
            <div className="bg-white rounded-full text-gray-900 font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto border border-gray-200">
              For Teams
            </div>
            <h3 className="font-heading text-3xl md:text-4xl mb-3 text-gray-900 font-light">Professional</h3>
            <div className="flex items-center justify-center mb-1">
              <p className="text-5xl md:text-6xl font-light font-heading text-black">
                ${isYearly ? '228' : '29'}
              </p>
              {isYearly && (
                <span className="ml-2 text-xs bg-white text-black px-2 py-1 rounded-full font-medium border border-gray-200">
                  Save $120
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-6">{isYearly ? 'per year' : 'per month'}</p>
            <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-700">
              Ideal for growing teams who need advanced features and priority support.
            </p>
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Unlimited projects</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Advanced analytics & insights</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Priority support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Custom integrations</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 md:py-4 px-6 text-sm md:text-base font-medium text-white border border-gray-900 bg-gray-900 hover:bg-gray-800 rounded-full transition duration-300">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-2xl p-8 md:p-10 text-center bg-white shadow-md flex flex-col border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[#f7f6f4] rounded-full text-gray-900 font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto border border-gray-200">
              For Organizations
            </div>
            <h3 className="font-heading text-3xl md:text-4xl mb-3 text-gray-900 font-light">Enterprise</h3>
            <div className="flex items-center justify-center mb-1">
              <p className="text-5xl md:text-6xl font-light font-heading text-black">
                ${isYearly ? '948' : '99'}
              </p>
              {isYearly && (
                <span className="ml-2 text-xs bg-[#f7f6f4] text-black px-2 py-1 rounded-full font-medium border border-gray-200">
                  Save $240
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-6">{isYearly ? 'per year' : 'per month'}</p>
            <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-700">
              Designed for large organizations requiring enterprise-grade security and support.
            </p>
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Everything in Professional</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Custom SLA & security</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">On-premise deployment option</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 md:py-4 px-6 text-sm md:text-base font-medium text-black border border-gray-900 bg-white hover:bg-gray-50 rounded-full transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
