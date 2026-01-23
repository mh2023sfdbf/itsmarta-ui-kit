"use client";

export default function HeroVideo() {
  return (
    <section className="relative bg-[#f7f6f4] min-h-screen flex items-center overflow-auto">
      <div className="container mx-auto py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 relative">
        {/* Hero Content with Video Taking Center Stage */}
        <div className="flex flex-col items-center text-center relative z-10">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl max-w-4xl mx-auto mb-3 md:mb-4 text-coolGray-900">
            <span className="block sm:inline">Track. </span>
            <span className="">Reflect. </span>
            <span className="">Grow.</span>
          </h1>
          
          <p className="text-sm md:text-base text-coolGray-700 max-w-2xl mx-auto mb-5 md:mb-6 leading-relaxed">
            Capture your thoughts, feelings, and reflections. Your space to grow, your way.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 md:mb-7">
            <a 
              href="" 
              className="inline-flex py-2.5 px-5 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800"
            >
              Get Started
            </a>
            <a 
              href="" 
              className="inline-flex py-2.5 px-5 text-sm font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-white/60"
            >
              Learn More
            </a>
          </div>
          
          {/* Video in Spotlight - Compact on desktop/tablet */}
          <div className="relative w-full max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-8">
            <div className="relative p-1 rounded-2xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
                >
                  <source src="https://app.clamalo.com/videos/clamalo-main.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Always visible */}
        <div className="flex justify-center pt-1">
          <a className="text-center inline-block group" href="">
            <div className="inline-block text-gray-400 group-hover:text-coolGray-600 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none"
                className="mx-auto"
              >
                <path 
                  d="M13 16.2929L16.1464 13.1464C16.3417 12.9512 16.6583 12.9512 16.8536 13.1464C17.0488 13.3417 17.0488 13.6583 16.8536 13.8536L12.8536 17.8536C12.6583 18.0488 12.3417 18.0488 12.1464 17.8536L8.14645 13.8536C7.95118 13.6583 7.95118 13.3417 8.14645 13.1464C8.34171 12.9512 8.65829 12.9512 8.85355 13.1464L12 16.2929V6.5C12 6.22386 12.2239 6 12.5 6C12.7761 6 13 6.22386 13 6.5V16.2929Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <p className="text-xs text-coolGray-600 group-hover:text-coolGray-800 transition-colors mt-0.5">
              Scroll to explore
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
