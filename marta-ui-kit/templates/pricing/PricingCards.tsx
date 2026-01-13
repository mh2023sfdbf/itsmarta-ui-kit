'use client';

import { useState } from 'react';

export default function PricingCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="therapist-pricing" className="py-24 bg-orange-50 lg:pb-34">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-700 mb-3">
            For clients, and everyday journalers, <span className="font-sego">YourLogo</span> is{' '}
            <span className="font-bold">always free</span>. Therapists get 10 days to try it risk-free.
          </p>
          <div className="inline-flex items-center bg-white rounded-lg px-4 py-2 border border-purple-200">
            <p className="text-sm font-medium">Only therapists pay for premium features</p>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full shadow-sm p-1">
            <button
              onClick={() => setYearly(false)}
              className={`py-2 px-6 rounded-full text-sm transition duration-200 ${
                !yearly ? 'bg-purple-200 text-black font-medium' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative py-2 px-6 rounded-full text-sm transition duration-200 ${
                yearly ? 'bg-purple-200 text-black font-medium' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yearly
              <span className="absolute -top-3 -right-5 bg-[#fbf9bf] text-xs px-2 py-0.5 rounded-full shadow font-medium text-black">
                25% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="rounded-2xl p-10 text-center bg-white flex flex-col opacity-50">
            <div className="bg-blue-100 rounded-full text-blue-800 font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto">
              For Clients and Everyday Journalers
            </div>
            <h3 className="font-heading text-3xl mb-3 text-gray-900">Always Free</h3>
            <p className="text-5xl font-semibold font-heading mb-2 text-black">$0</p>
            <p className="text-gray-600 mb-6 text-base">
              Track emotions, journal daily, reflect, and share with your therapist, if you choose — completely free.
            </p>
            <div className="mt-auto">
              <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black bg-purple-200 hover:bg-purple-100 rounded-full transition duration-300">
                Start Journaling Free
              </a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="rounded-2xl p-10 text-center bg-white transform scale-105 shadow-lg border-2 border-purple-300">
            <div className="rounded-full font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto bg-gray-100">
              For Therapists
            </div>
            <h3 className="font-heading text-3xl mb-3 text-gray-900">Premium</h3>
            <div className="flex items-center justify-center mb-1 relative">
              <p className="text-5xl font-semibold font-heading text-black">{yearly ? '$261' : '$29'}</p>
              {yearly && (
                <span className="ml-2 text-xs bg-[#fbf9bf] text-black px-2 py-0.5 rounded-full font-medium">
                  Save $87
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-4">{yearly ? 'per year' : 'per month'}</p>
            <div className="bg-green-50 rounded-lg p-3 mb-6">
              <p className="text-sm text-green-800">
                Currently includes all Professional features! ($59 value) including unlimited clients and listing in directory.
              </p>
            </div>
            <p className="mb-6 text-base">Perfect for solo therapists who want deeper client insight and advanced tools.</p>
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-sm">•</span>
                <span className="text-sm">10 clients</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sm">•</span>
                <span className="text-sm">Listing in therapist database</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sm">•</span>
                <span className="text-sm">Advanced analytics</span>
              </li>
            </ul>
            <div className="mt-auto">
              <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white border border-gray-900 bg-gray-900 hover:bg-gray-800 rounded-full transition duration-300 w-full">
                Start 10-Day Trial
              </a>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="rounded-2xl p-10 text-center bg-white shadow-sm flex flex-col">
            <div className="bg-gray-100 rounded-full text-gray-800 font-medium py-1 px-4 text-xs mb-4 inline-block mx-auto">
              For Therapists
            </div>
            <div className="bg-yellow-100 text-yellow-800 rounded-lg px-3 py-1 text-xs font-bold mb-2 inline-block mx-auto">
              Coming Soon
            </div>
            <h3 className="font-heading text-3xl mb-3 text-gray-900">Professional</h3>
            <div className="flex items-center justify-center mb-1 relative">
              <p className="text-5xl font-semibold font-heading text-black">{yearly ? '$531' : '$59'}</p>
              {yearly && (
                <span className="ml-2 text-xs bg-[#fbf9bf] text-black px-2 py-0.5 rounded-full font-medium">
                  Save $177
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-4">{yearly ? 'per year' : 'per month'}</p>
            <p className="mb-6 text-base">
              Ideal for therapists ready to expand their client base and be discoverable through our therapist directory.
            </p>
            <ul className="text-left mb-8 space-y-3 opacity-60">
              <li className="flex items-start">
                <span className="mr-2 text-sm">•</span>
                <span className="text-sm">Unlimited clients</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sm">•</span>
                <span className="text-sm">Listing in therapist database</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sm">•</span>
                <span className="text-sm">Custom branding options</span>
              </li>
            </ul>
            <div className="mt-auto">
              <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-400 cursor-not-allowed rounded-full transition duration-300">
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

