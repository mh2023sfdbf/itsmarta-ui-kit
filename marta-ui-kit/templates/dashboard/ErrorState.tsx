'use client';

export default function ErrorState() {
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
            Something went wrong.
          </p>
        </div>

        {/* Error State - Centered */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="max-w-md w-full bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-100">
            
            {/* Minimal Error Graphic */}
            <div className="mb-4 flex justify-center">
              <span className="text-6xl text-gray-400 font-light">!</span>
            </div>

            {/* Content */}
            <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-4">
              ERROR
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-gray-900 mb-3">
              Something Went Wrong
            </h2>
            <p className="font-heading text-base text-gray-600 mb-8">
              We encountered an error while loading your data. Please try again or contact support if the problem persists.
            </p>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full font-heading text-sm py-3 px-6 rounded-full bg-black text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Try Again
              </button>
              <button className="w-full font-heading text-sm py-3 px-6 rounded-full border border-black hover:bg-gray-100 transition text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Go Back
              </button>
            </div>

            {/* Help Link */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="font-heading text-sm text-gray-600">
                Need help?{' '}
                <a href="#" className="text-gray-900 hover:text-gray-600 transition underline focus:outline-none focus:text-gray-600">
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Alternative: Inline Error State */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xs uppercase tracking-widest text-gray-900">
                Recent Activity
              </h2>
            </div>

            {/* Inline Error */}
            <div className="py-12 text-center border-2 border-dashed border-gray-300 rounded-xl">
            <div className="mb-4 flex justify-center">
              <span className="text-6xl text-gray-900 font-light">!</span>
            </div>
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
                ERROR
              </p>
              <h3 className="font-heading text-lg text-gray-900 mb-2">
                Failed to Load Activity
              </h3>
              <p className="font-heading text-sm text-gray-600 mb-6 max-w-sm mx-auto">
                We couldn't retrieve your recent activity. Please try refreshing the page.
              </p>
              <button className="font-heading text-sm py-2.5 px-5 rounded-full bg-black text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Alternative: Connection Error */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center">
              {/* Minimal Connection Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>

              <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
                CONNECTION LOST
              </p>
              <h2 className="font-heading text-2xl md:text-3xl text-gray-900 mb-3">
                Connection Lost
              </h2>
              <p className="font-heading text-base text-gray-600 mb-8 max-w-md mx-auto">
                We're having trouble connecting to the server. Please check your internet connection and try again.
              </p>

              <div className="flex items-center justify-center space-x-3">
                <button className="font-heading text-sm py-3 px-6 rounded-full bg-black text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                  Retry Connection
                </button>
                <button className="font-heading text-sm py-3 px-6 rounded-full border border-black hover:bg-gray-100 transition text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                  Go Offline
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative: Permission Error */}
        <div className="mt-20 max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 text-center border border-gray-100">
            <div className="mb-6 flex justify-center">
              <span className="text-6xl text-gray-400 font-light">×</span>
            </div>

            <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
              ACCESS DENIED
            </p>
            <h2 className="font-heading text-2xl text-gray-900 mb-3">
              Access Denied
            </h2>
            <p className="font-heading text-base text-gray-600 mb-8">
              You don't have permission to view this content. Contact your administrator for access.
            </p>

            <button className="w-full font-heading text-sm py-3 px-6 rounded-full bg-black text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
