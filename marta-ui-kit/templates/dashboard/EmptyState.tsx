'use client';

export default function EmptyState() {
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
            Your workspace is ready to go.
          </p>
        </div>

        {/* Empty State - Centered */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="max-w-md w-full bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-100">
            
            {/* Minimal Graphic */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>

            {/* Content */}
            <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-4">
              EMPTY STATE
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-gray-900 mb-3">
              No Data Yet
            </h2>
            <p className="font-heading text-base text-gray-600 mb-8">
              Start by adding your first item or import existing data to see your dashboard.
            </p>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full font-heading text-sm py-3 px-6 rounded-full bg-black text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Add Your First Item
              </button>
              <button className="w-full font-heading text-sm py-3 px-6 rounded-full border border-black hover:bg-gray-100 transition text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Import Data
              </button>
            </div>

            {/* Help Link */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="font-heading text-sm text-gray-600">
                Need help?{' '}
                <a href="#" className="text-gray-900 hover:text-gray-600 transition underline focus:outline-none focus:text-gray-600">
                  View Guide
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Alternative: Empty State with Grid Preview */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-4">
                YOUR PROJECTS
              </p>
              <h2 className="font-heading text-2xl md:text-3xl text-gray-900 mb-3">
                Projects
              </h2>
              <p className="font-heading text-base text-gray-600">
                Create your first project to get started
              </p>
            </div>

            {/* Empty Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Placeholder Card 1 */}
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="mb-3">
                    <span className="text-gray-300 text-3xl font-light">+</span>
                  </div>
                  <p className="font-heading text-sm text-gray-400 uppercase tracking-wider">
                    Project 1
                  </p>
                </div>
              </div>

              {/* Placeholder Card 2 */}
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="mb-3">
                    <span className="text-gray-300 text-3xl font-light">+</span>
                  </div>
                  <p className="font-heading text-sm text-gray-400 uppercase tracking-wider">
                    Project 2
                  </p>
                </div>
              </div>

              {/* Placeholder Card 3 */}
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="mb-3">
                    <span className="text-gray-300 text-3xl font-light">+</span>
                  </div>
                  <p className="font-heading text-sm text-gray-400 uppercase tracking-wider">
                    Project 3
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="inline-flex items-center font-heading text-sm py-3 px-6 rounded-full bg-black text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Create New Project
              </button>
            </div>
          </div>
        </div>

        {/* Alternative: List Empty State */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xs uppercase tracking-widest text-gray-900">
                Recent Activity
              </h2>
            </div>

            {/* Empty List */}
            <div className="py-16 text-center">
              <div className="w-20 h-20 shrink-0 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center mx-auto mb-4">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
                EMPTY
              </p>
              <h3 className="font-heading text-lg text-gray-900 mb-2">
                No Activity Yet
              </h3>
              <p className="font-heading text-sm text-gray-600 mb-6 max-w-sm mx-auto">
                Your recent activity will appear here once you start using the platform.
              </p>
              <button className="font-heading text-sm py-2.5 px-5 rounded-full border border-black hover:bg-gray-100 transition text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
