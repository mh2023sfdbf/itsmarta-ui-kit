export default function HeroMinimal() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
          ✨ Premium Templates
        </div>
        
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter mb-8">
          <span className="text-gray-900">Design</span>
          <br />
          <span className="text-gray-300">Simplified</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-12">
          Clean, minimal components for modern web applications
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-full font-medium hover:border-gray-300 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

