import Image from 'next/image';

export default function RestyleYourSpace() {
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
                  <source src="/assets/restyling-bedroom-with-ai.mp4" type="video/mp4" />
                </video>
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full -z-10"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-2/5 space-y-10">
              <div className="space-y-6">
                <p className="text-gray-500 uppercase tracking-wider text-sm">
                  RESTYLE YOUR SPACE
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900">
                  Effortless Room Design with AI
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
                      Upload and analyze
                    </h3>
                    <p className="font-heading mb-4 text-gray-600 text-left">
                      Upload a photo, and our AI will instantly analyze your room's layout and key features for an optimized redesign.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-heading text-gray-400 text-2xl">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 tracking-wide text-gray-900">
                      Choose your style
                    </h3>
                    <p className="text-gray-600 font-heading mb-4 text-left">
                      Select from curated design styles or customize details to match your vision perfectly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-heading text-gray-400 text-2xl">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 tracking-wide text-gray-900">
                      Chat with AI
                    </h3>
                    <p className="text-gray-600 font-heading mb-3 text-left">
                      Refine your design by chatting with AI—request color changes, style updates, or ambiance tweaks (e.g., "Paint the walls sage green").
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="w-[200px] sm:w-auto min-w-[180px] py-3 px-8 bg-[#2C2C2C] hover:bg-black text-white rounded-full font-heading text-base hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <span>Try it now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
