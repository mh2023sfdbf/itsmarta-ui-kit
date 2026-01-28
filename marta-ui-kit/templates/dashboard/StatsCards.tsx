'use client';

export default function StatsCards() {
  return (
    <section className="relative overflow-hidden pb-20 pt-20 bg-[#f7f6f4]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="mb-3 font-heading text-xs uppercase tracking-widest text-gray-500">
            ANALYTICS
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-4">
            Performance Overview
          </h2>
          <p className="font-heading text-base text-gray-600 max-w-2xl">
            Track your key metrics and monitor growth in real-time
          </p>
        </div>

        {/* Style 1: Simple Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          <div className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                USERS
              </p>
              <span className="font-heading text-xs text-gray-900">
                +12.5%
              </span>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl text-gray-900 mb-1">
              2,847
            </h3>
            <p className="font-heading text-sm text-gray-500">
              Total users
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                REVENUE
              </p>
              <span className="font-heading text-xs text-gray-900">
                +8.2%
              </span>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl text-gray-900 mb-1">
              $45,231
            </h3>
            <p className="font-heading text-sm text-gray-500">
              Monthly revenue
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                PROJECTS
              </p>
              <span className="font-heading text-xs text-gray-900">
                +18.4%
              </span>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl text-gray-900 mb-1">
              1,429
            </h3>
            <p className="font-heading text-sm text-gray-500">
              Active projects
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                SUCCESS
              </p>
              <span className="font-heading text-xs text-gray-900">
                +24.3%
              </span>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl text-gray-900 mb-1">
              94.2%
            </h3>
            <p className="font-heading text-sm text-gray-500">
              Success rate
            </p>
          </div>
        </div>

        {/* Style 2: Large Stats with Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          
          <div className="bg-white rounded-2xl p-8 transform hover:-translate-y-2 transition ease-out duration-500 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                CUSTOMERS
              </p>
              <span className="font-heading text-sm text-gray-900">
                ↑ 12.5%
              </span>
            </div>
            <h3 className="font-heading text-4xl md:text-5xl text-gray-900 mb-3">
              12,847
            </h3>
            <p className="font-heading text-base text-gray-900 mb-2">
              Total Customers
            </p>
            <p className="font-heading text-sm text-gray-600">
              +423 new customers this month. Your growth is accelerating.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 transform hover:-translate-y-2 transition ease-out duration-500 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                REVENUE
              </p>
              <span className="font-heading text-sm text-gray-900">
                ↑ 28.9%
              </span>
            </div>
            <h3 className="font-heading text-4xl md:text-5xl text-gray-900 mb-3">
              $284,092
            </h3>
            <p className="font-heading text-base text-gray-900 mb-2">
              Total Revenue
            </p>
            <p className="font-heading text-sm text-gray-600">
              +$64,230 increase from last quarter. Keep up the great work.
            </p>
          </div>
        </div>

        {/* Style 3: Minimal Stats Row */}
        <div className="bg-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto mb-20 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            
            <div className="pt-8 sm:pt-0 text-center">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
                ACTIVE USERS
              </p>
              <h3 className="font-heading text-4xl md:text-5xl text-gray-900 mb-2">
                8,420
              </h3>
              <p className="font-heading text-sm text-gray-600">
                ↑ 15.3%
              </p>
            </div>

            <div className="pt-8 sm:pt-0 text-center sm:px-8">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
                CONVERSION
              </p>
              <h3 className="font-heading text-4xl md:text-5xl text-gray-900 mb-2">
                3.2%
              </h3>
              <p className="font-heading text-sm text-gray-600">
                ↑ 8.1%
              </p>
            </div>

            <div className="pt-8 sm:pt-0 text-center sm:pl-8">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
                AVG SESSION
              </p>
              <h3 className="font-heading text-4xl md:text-5xl text-gray-900 mb-2">
                4m 32s
              </h3>
              <p className="font-heading text-sm text-gray-500">
                ↓ 2.4%
              </p>
            </div>
          </div>
        </div>

        {/* Style 4: Compact Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-6 text-center">
            QUICK OVERVIEW
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-white rounded-xl p-5 text-center transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
              <h4 className="font-heading text-2xl text-gray-900 mb-1">
                247
              </h4>
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                PROJECTS
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
              <h4 className="font-heading text-2xl text-gray-900 mb-1">
                1.2k
              </h4>
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                MEMBERS
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
              <h4 className="font-heading text-2xl text-gray-900 mb-1">
                48h
              </h4>
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                SAVED TIME
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
              <h4 className="font-heading text-2xl text-gray-900 mb-1">
                98%
              </h4>
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                SATISFACTION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
