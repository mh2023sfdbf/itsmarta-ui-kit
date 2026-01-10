export default function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Glassmorphism decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/40 border border-white/60 shadow-lg mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">New templates every week</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Beautiful UI
            </span>
            <br />
            <span className="text-gray-900">Made Simple</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Hand-crafted Tailwind components with glassmorphism design. 
            Copy, paste, and ship in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Browse Templates</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="px-8 py-4 backdrop-blur-md bg-white/40 border border-white/60 text-gray-700 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/60">
              View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "50+", label: "Components" },
              { value: "10k+", label: "Developers" },
              { value: "4.9", label: "Rating" }
            ].map((stat) => (
              <div key={stat.label} className="backdrop-blur-md bg-white/30 border border-white/60 rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

