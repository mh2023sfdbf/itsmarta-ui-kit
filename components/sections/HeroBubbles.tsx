'use client';

import { useState } from 'react';

export default function HeroBubbles() {
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null);

  // Template preview bubbles with positions
  const bubbles = [
    {
      id: 'nav',
      name: 'Navigation',
      position: 'top-[15%] left-[8%]',
      size: 'w-32 h-32',
      delay: '0s',
    },
    {
      id: 'hero',
      name: 'Hero Video',
      position: 'top-[8%] right-[12%]',
      size: 'w-36 h-36',
      delay: '0.1s',
    },
    {
      id: 'auth',
      name: 'Sign In',
      position: 'top-[45%] left-[5%]',
      size: 'w-28 h-28',
      delay: '0.2s',
    },
    {
      id: 'features',
      name: 'Features',
      position: 'bottom-[25%] right-[8%]',
      size: 'w-32 h-32',
      delay: '0.3s',
    },
    {
      id: 'testimonials',
      name: 'Testimonials',
      position: 'bottom-[15%] left-[15%]',
      size: 'w-28 h-28',
      delay: '0.4s',
    },
    {
      id: 'pricing',
      name: 'Pricing',
      position: 'top-[35%] right-[6%]',
      size: 'w-24 h-24',
      delay: '0.15s',
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#f7f6f4] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Main Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-black/90 tracking-tight mb-6">
          My UI kits. <span className="italic font-serif">Live previews</span>.
          <br />
          <span className="font-light">Built from real SaaS work.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-black/60 font-light max-w-2xl mx-auto mb-8">
          These UI decisions doubled revenue in a real SaaS product. Now you can preview, buy and use them too.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#ui-templates"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Browse Live Previews
          </a>
          <a
            href="/demo-minimal-calm"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm text-black text-sm font-medium hover:bg-white transition-all duration-200 border border-black/10"
          >
            See Full Demo
          </a>
        </div>

        {/* Tech Stack */}
        <p className="text-xs text-black/40 mt-8">
          React · Tailwind · TypeScript · Copy & Paste
        </p>
      </div>

      {/* Central Colorful Blob - Main Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] opacity-40">
          {/* Animated gradient blob */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-200 via-yellow-100 to-purple-200 blur-3xl animate-pulse"></div>
          <div 
            className="absolute inset-[10%] rounded-full bg-gradient-to-tl from-purple-200 via-pink-100 to-yellow-200 blur-2xl animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '3s' }}
          ></div>
        </div>
      </div>

      {/* Floating Glassy Bubbles - Template Previews */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute ${bubble.position} ${bubble.size} hidden lg:block animate-float`}
          style={{
            animationDelay: bubble.delay,
          }}
          onMouseEnter={() => setHoveredBubble(bubble.id)}
          onMouseLeave={() => setHoveredBubble(null)}
        >
          {/* Glassy bubble container */}
          <div className={`relative w-full h-full rounded-3xl backdrop-blur-md bg-white/40 border border-white/60 shadow-xl transition-all duration-300 ${
            hoveredBubble === bubble.id ? 'scale-110 shadow-2xl' : ''
          }`}>
            {/* Preview content - placeholder for now */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 flex items-center justify-center overflow-hidden">
              {/* Template preview placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-black/5 to-black/10 rounded-2xl"></div>
            </div>

            {/* Label */}
            <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
              hoveredBubble === bubble.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 shadow-lg">
                <span className="text-xs font-medium text-black/70">{bubble.name}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
