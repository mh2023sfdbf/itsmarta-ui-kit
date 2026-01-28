'use client';

export default function DashboardOverview() {
  return (
    <section className="relative min-h-screen bg-[#f7f6f4] pb-20 pt-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
            OVERVIEW
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="font-heading text-base text-gray-600">
            Welcome back. Here's what's happening today.
          </p>
        </div>

        {/* Stats Grid - KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Stat Card 1 */}
          <div className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <p className="font-heading text-xs uppercase tracking-wider text-gray-500">
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

          {/* Stat Card 2 */}
          <div className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <p className="font-heading text-xs uppercase tracking-wider text-gray-500">
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
              This month
            </p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <p className="font-heading text-xs uppercase tracking-wider text-gray-500">
                ACTIVE
              </p>
              <span className="font-heading text-xs text-gray-500">
                -3.1%
              </span>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl text-gray-900 mb-1">
              1,429
            </h3>
            <p className="font-heading text-sm text-gray-500">
              Sessions
            </p>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition ease-out duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <p className="font-heading text-xs uppercase tracking-wider text-gray-500">
                CONVERSION
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

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Activity Feed - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-xs uppercase tracking-widest text-gray-900">
                Recent Activity
              </h2>
              <button className="font-heading text-xs text-gray-500 hover:text-gray-900 transition uppercase tracking-wider focus:outline-none focus:text-gray-900">
                View All
              </button>
            </div>

            {/* Empty State - Alternative view */}
            <div className="text-center py-12">
              <div className="w-20 h-20 shrink-0 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center mx-auto mb-6">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              <p className="font-heading text-xs uppercase tracking-widest text-gray-400 mb-3">
                EMPTY
              </p>
              <h3 className="font-heading text-xl text-gray-900 mb-2">
                No Activity Yet
              </h3>
              <p className="font-heading text-sm text-gray-500 max-w-xs mx-auto">
                Your recent activity will appear here once you start using the platform
              </p>
            </div>
            
            {/* Activity Items - Comment out for empty state, uncomment to show activity */}
            {/* <div className="space-y-6">
              
              <div className="flex items-start space-x-4 pb-6 border-b border-gray-100">
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-base text-gray-900 mb-2">
                    New user registered
                  </p>
                  <p className="font-heading text-sm text-gray-500">
                    sarah.wilson@example.com
                  </p>
                </div>
                <span className="font-heading text-xs text-gray-400 flex-shrink-0">
                  2min ago
                </span>
              </div>

              <div className="flex items-start space-x-4 pb-6 border-b border-gray-100">
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-base text-gray-900 mb-2">
                    Report generated
                  </p>
                  <p className="font-heading text-sm text-gray-500">
                    Monthly analytics ready
                  </p>
                </div>
                <span className="font-heading text-xs text-gray-400 flex-shrink-0">
                  15min ago
                </span>
              </div>

              <div className="flex items-start space-x-4 pb-6 border-b border-gray-100">
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-base text-gray-900 mb-2">
                    Product shipped
                  </p>
                  <p className="font-heading text-sm text-gray-500">
                    Order #3847 dispatched
                  </p>
                </div>
                <span className="font-heading text-xs text-gray-400 flex-shrink-0">
                  1hr ago
                </span>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-base text-gray-900 mb-2">
                    System update available
                  </p>
                  <p className="font-heading text-sm text-gray-500">
                    New features ready
                  </p>
                </div>
                <span className="font-heading text-xs text-gray-400 flex-shrink-0">
                  3hr ago
                </span>
              </div>
            </div> */}
          </div>

          {/* Quick Actions - Takes 1 column */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
            <h2 className="font-heading text-xs uppercase tracking-widest text-gray-900 mb-8">
              Quick Actions
            </h2>

            <div className="space-y-3">
              <button className="w-full font-heading text-sm py-3 px-5 rounded-full border border-black hover:bg-gray-100 transition text-left focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Add New User
              </button>

              <button className="w-full font-heading text-sm py-3 px-5 rounded-full border border-black hover:bg-gray-100 transition text-left focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Generate Report
              </button>

              <button className="w-full font-heading text-sm py-3 px-5 rounded-full border border-black hover:bg-gray-100 transition text-left focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Export Data
              </button>

              <button className="w-full font-heading text-sm py-3 px-5 rounded-full border border-black hover:bg-gray-100 transition text-left focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Settings
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="font-heading text-xs uppercase tracking-wider text-gray-500 mb-2">
                NEED HELP?
              </p>
              <p className="font-heading text-sm text-gray-900 mb-3">
                Check documentation or contact support.
              </p>
              <button className="font-heading text-xs text-gray-900 hover:text-gray-600 transition focus:outline-none focus:text-gray-600">
                View Docs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
