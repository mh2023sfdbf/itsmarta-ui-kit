'use client';

export default function LoadingState() {
  return (
    <section className="relative min-h-screen bg-[#f7f6f4] pb-20 pt-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Skeleton */}
        <div className="mb-10">
          <div className="h-10 w-64 bg-white rounded-lg animate-shimmer mb-2"></div>
          <div className="h-6 w-80 bg-white rounded-lg animate-shimmer"></div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Stat Card Skeleton 1 */}
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#f7f6f4] animate-pulse"></div>
              <div className="h-6 w-16 bg-[#f7f6f4] rounded-full animate-shimmer"></div>
            </div>
            <div className="h-9 w-24 bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
            <div className="h-5 w-28 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
          </div>

          {/* Stat Card Skeleton 2 */}
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#f7f6f4] animate-pulse"></div>
              <div className="h-6 w-16 bg-[#f7f6f4] rounded-full animate-shimmer"></div>
            </div>
            <div className="h-9 w-28 bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
            <div className="h-5 w-20 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
          </div>

          {/* Stat Card Skeleton 3 */}
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#f7f6f4] animate-pulse"></div>
              <div className="h-6 w-16 bg-[#f7f6f4] rounded-full animate-shimmer"></div>
            </div>
            <div className="h-9 w-24 bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
            <div className="h-5 w-32 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
          </div>

          {/* Stat Card Skeleton 4 */}
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#f7f6f4] animate-pulse"></div>
              <div className="h-6 w-16 bg-[#f7f6f4] rounded-full animate-shimmer"></div>
            </div>
            <div className="h-9 w-24 bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
            <div className="h-5 w-36 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
          </div>
        </div>

        {/* Activity Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Activity Feed Skeleton - 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="h-8 w-48 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
              <div className="h-6 w-20 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
            </div>

            {/* Activity Items Skeleton */}
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#f7f6f4] animate-pulse flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="h-5 w-3/4 bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
                  <div className="h-4 w-full bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
                </div>
                <div className="h-4 w-8 bg-[#f7f6f4] rounded-lg animate-shimmer flex-shrink-0"></div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#f7f6f4] animate-pulse flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="h-5 w-2/3 bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
                  <div className="h-4 w-5/6 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
                </div>
                <div className="h-4 w-10 bg-[#f7f6f4] rounded-lg animate-shimmer flex-shrink-0"></div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#f7f6f4] animate-pulse flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="h-5 w-1/2 bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
                  <div className="h-4 w-full bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
                </div>
                <div className="h-4 w-8 bg-[#f7f6f4] rounded-lg animate-shimmer flex-shrink-0"></div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#f7f6f4] animate-pulse flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="h-5 w-3/5 bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
                  <div className="h-4 w-4/5 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
                </div>
                <div className="h-4 w-8 bg-[#f7f6f4] rounded-lg animate-shimmer flex-shrink-0"></div>
              </div>
            </div>
          </div>

          {/* Quick Actions Skeleton - 1 column */}
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="h-8 w-36 bg-[#f7f6f4] rounded-lg animate-shimmer mb-6"></div>

            <div className="space-y-3">
              <div className="h-12 w-full bg-[#f7f6f4] rounded-full animate-shimmer"></div>
              <div className="h-12 w-full bg-[#f7f6f4] rounded-full animate-shimmer"></div>
              <div className="h-12 w-full bg-[#f7f6f4] rounded-full animate-shimmer"></div>
              <div className="h-12 w-full bg-[#f7f6f4] rounded-full animate-shimmer"></div>
            </div>

            <div className="mt-8 p-4 bg-[#f7f6f4] rounded-xl">
              <div className="h-4 w-20 bg-white rounded animate-shimmer mb-2"></div>
              <div className="h-4 w-full bg-white rounded animate-shimmer mb-2"></div>
              <div className="h-4 w-3/4 bg-white rounded animate-shimmer mb-3"></div>
              <div className="h-4 w-24 bg-white rounded animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Alternative: Card Grid Loading */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="h-8 w-48 bg-white rounded-lg animate-shimmer mb-2"></div>
            <div className="h-6 w-72 bg-white rounded-lg animate-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-6">
                <div className="w-full h-40 bg-[#f7f6f4] rounded-lg animate-shimmer mb-4"></div>
                <div className="h-6 w-3/4 bg-[#f7f6f4] rounded-lg animate-shimmer mb-3"></div>
                <div className="h-4 w-full bg-[#f7f6f4] rounded-lg animate-shimmer mb-2"></div>
                <div className="h-4 w-5/6 bg-[#f7f6f4] rounded-lg animate-shimmer"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
