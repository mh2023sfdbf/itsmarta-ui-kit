import Image from 'next/image';

export default function VideoContentLayout() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Side - Video Container */}
            <div className="w-full lg:w-3/5">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.08)] transition-all duration-300">
                <video 
                  className="w-full aspect-video object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/template-video1.mp4" type="video/mp4" />
                </video>
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full -z-10"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-2/5 space-y-10">
              <div className="space-y-6">
                <p className="font-heading text-xs uppercase tracking-widest text-gray-500">
                  HOW IT WORKS
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900">
                  Simple Process, Powerful Results
                </h1>
              </div>

              <div className="space-y-8">
                {/* Steps with Enhanced Visual Style */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-heading text-gray-400 text-2xl">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 tracking-wide text-gray-900">
                      Start Your Journey
                    </h3>
                    <p className="font-heading text-base text-gray-600 leading-relaxed mb-4">
                      Begin with a simple upload or entry. Our platform instantly analyzes your input for optimized results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-heading text-gray-400 text-2xl">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 tracking-wide text-gray-900">
                      Customize Your Experience
                    </h3>
                    <p className="text-gray-600 font-heading mb-4 text-left">
                      Choose from curated options or personalize details to match your vision perfectly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-heading text-gray-400 text-2xl">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 tracking-wide text-gray-900">
                      Refine & Perfect
                    </h3>
                    <p className="text-gray-600 font-heading mb-3 text-left">
                      Make adjustments and fine-tune your results until everything is exactly as you envisioned.
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="inline-flex py-2.5 px-5 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
