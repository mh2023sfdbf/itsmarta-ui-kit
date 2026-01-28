'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroBubbles() {
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null);

  // Template preview bubbles with positions and real project images
  const bubbles = [
    {
      id: 'clamalo',
      name: 'Clamalo',
      label: 'Hero Video',
      labelPosition: '-bottom-8 left-0', // Below, left-aligned
      image: '/project-screenshots/clamalo_concept_preview.jpeg',
      position: 'top-[20%] left-[8%]',
      size: 'w-48 h-48', // Larger - Hero bubble
      delay: '0s',
    },
    {
      id: 'myroomdesigner',
      name: 'MyRoomDesigner',
      label: 'Sign In',
      labelPosition: '-bottom-8 left-0', // Below, left-aligned
      image: '/project-screenshots/myroomdesignerai_cover.png',
      position: 'top-[15%] right-[8%]',
      size: 'w-52 h-52', // Larger - Hero bubble
      delay: '0.1s',
    },
    {
      id: 'myskinroutine',
      name: 'MySkinRoutine',
      label: 'Pulsing Logo',
      labelPosition: '-bottom-8 left-0', // Below, left-aligned
      image: '/project-screenshots/myskinroutine_cover.png',
      position: 'top-[50%] left-[5%]',
      size: 'w-32 h-32',
      delay: '0.2s',
    },
    {
      id: 'dreamhouse',
      name: 'DreamHouseAI',
      label: 'Pricing',
      labelPosition: '-bottom-8 left-0', // Below, left-aligned
      image: '/project-screenshots/dreamhouseai1_cover.png',
      position: 'bottom-[15%] right-[6%]',
      size: 'w-44 h-44', // Larger
      delay: '0.3s',
    },
    {
      id: 'moodboard',
      name: 'MoodboardAI',
      label: 'Features',
      labelPosition: '-bottom-8 left-0', // Below, left-aligned
      image: '/project-screenshots/moodboardai_cover.png',
      position: 'bottom-[15%] left-[15%]',
      size: 'w-32 h-32',
      delay: '0.4s',
    },
    {
      id: 'roomdesigner2',
      name: 'Room Design',
      label: 'Navigation',
      labelPosition: '-bottom-8 left-0', // Below, left-aligned
      image: '/project-screenshots/myroomdesignerai1.png',
      position: 'top-[48%] right-[4%]',
      size: 'w-28 h-28',
      delay: '0.15s',
    },
  ];

  // Text-only bubbles showing what we offer
  const textBubbles = [
    {
      id: 'text-auth',
      text: 'Sign In Template',
      position: 'top-[18%] left-[25%]',
      size: 'w-32',
      delay: '0.5s',
    },
    {
      id: 'text-landing',
      text: 'Landing Pages',
      position: 'top-[18%] right-[25%]',
      size: 'w-28',
      delay: '0.6s',
    },
    {
      id: 'text-nav',
      text: 'Navigation Bars',
      position: 'bottom-[37%] left-[18%]',
      size: 'w-32',
      delay: '0.7s',
    },
    {
      id: 'text-pricing',
      text: 'Pricing Cards',
      position: 'top-[55%] right-[18%]',
      size: 'w-28',
      delay: '0.8s',
    },
    {
      id: 'text-features',
      text: 'Feature Sections',
      position: 'bottom-[24%] right-[24%]',
      size: 'w-32',
      delay: '0.9s',
    },
    {
      id: 'text-testimonials',
      text: 'Social Proof',
      position: 'bottom-[20%] left-[26%]',
      size: 'w-28',
      delay: '1s',
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#f7f6f4] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Subtle Texture Overlay - Optional */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.015]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Main Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20 px-6">
        <h1 className="text-[clamp(3rem,8vw,4.5rem)] md:text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.01em] text-black/95 mb-6 sm:mb-6 md:mb-4 animate-on-load animate-slideUp">
          <span className="text-[0.85em] font-[350]">My UI kits.</span>
          <br className="md:hidden" />
          <span className="md:inline"> </span>
          <span className="font-serif italic font-normal">Live previews.</span>
          <br />
          <span className="text-[0.85em] font-[350]">Built from real SaaS work.</span>
        </h1>
        
        <p className="text-base md:text-sm sm:text-base text-black/60 font-light max-w-xl mx-auto leading-relaxed mb-10 md:mb-8 animate-on-load animate-slideUp animate-delay-100">
          These UI decisions doubled revenue in a real SaaS product. Now you can preview, buy and use them too.
        </p>

        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-4 sm:gap-6 animate-on-load animate-slideUp animate-delay-200">
          <a
            href="#ui-templates"
            className="inline-flex items-center justify-center px-8 py-4 md:px-6 md:py-3 rounded-full bg-black text-white text-base md:text-sm font-medium hover:bg-black/90 transition-all duration-200 shadow-lg hover:shadow-xl w-full md:w-auto max-w-sm md:max-w-none"
          >
            Browse Live Previews
          </a>
          <a
            href="/demo-minimal-calm"
            className="inline-flex items-center justify-center gap-2 text-base md:text-sm text-black hover:text-black/60 transition-colors group"
          >
            <span>See full demo</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Tech Stack */}
        <p className="text-xs text-black/40 mt-10 md:mt-8">
          React · Tailwind · TypeScript · Copy & Paste
        </p>
      </div>

      {/* Floating Glassy Bubbles - Template Previews */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute ${bubble.position} ${bubble.size} hidden lg:block animate-float z-20`}
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
            {/* Project preview image */}
            <div className="absolute inset-2 rounded-2xl overflow-hidden">
              <Image
                src={bubble.image}
                alt={bubble.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 200px"
              />
            </div>

            {/* Template label - Shows on hover below bubble */}
            <div className={`absolute ${bubble.labelPosition} z-30 whitespace-nowrap transition-all duration-300 ${
              hoveredBubble === bubble.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <div className="flex items-center justify-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-white/60 shadow-lg">
                <span className="text-[9px] font-medium text-black/60 uppercase tracking-widest leading-none">{bubble.label}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Text-Only Bubbles - Showing What We Offer */}
      {textBubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute ${bubble.position} ${bubble.size} hidden lg:block animate-float z-10`}
          style={{
            animationDelay: bubble.delay,
          }}
        >
          {/* Glassy text bubble */}
          <div className="px-4 py-2.5 rounded-full backdrop-blur-md bg-white/10 border border-white/60 shadow-lg">
            <p className="text-[10px] font-medium text-black/70 uppercase tracking-wider leading-none text-center">
              {bubble.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
