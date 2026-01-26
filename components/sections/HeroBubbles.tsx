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
      labelPosition: 'top-1/2 -translate-y-1/2 -right-[4.5rem]', // Right side, vertically centered
      image: '/project-screenshots/clamalo_concept_preview.jpeg',
      position: 'top-[20%] left-[8%]',
      size: 'w-32 h-32',
      delay: '0s',
    },
    {
      id: 'myroomdesigner',
      name: 'MyRoomDesigner',
      label: 'Sign In',
      labelPosition: 'top-1/2 -translate-y-1/2 -left-[4.5rem]', // Left side for right-positioned bubbles
      image: '/project-screenshots/myroomdesignerai_cover.png',
      position: 'top-[15%] right-[12%]',
      size: 'w-36 h-36',
      delay: '0.1s',
    },
    {
      id: 'myskinroutine',
      name: 'MySkinRoutine',
      label: 'Pulsing Logo',
      labelPosition: 'top-1/2 -translate-y-1/2 -right-[5rem]', // Right side, vertically centered
      image: '/project-screenshots/myskinroutine_cover.png',
      position: 'top-[50%] left-[5%]',
      size: 'w-28 h-28',
      delay: '0.2s',
    },
    {
      id: 'dreamhouse',
      name: 'DreamHouseAI',
      label: 'Pricing',
      labelPosition: 'top-1/2 -translate-y-1/2 -left-[4rem]', // Left side for right-positioned bubbles
      image: '/project-screenshots/dreamhouseai1_cover.png',
      position: 'bottom-[25%] right-[8%]',
      size: 'w-32 h-32',
      delay: '0.3s',
    },
    {
      id: 'moodboard',
      name: 'MoodboardAI',
      label: 'Features',
      labelPosition: 'top-1/2 -translate-y-1/2 -right-[4.5rem]', // Right side, vertically centered
      image: '/project-screenshots/moodboardai_cover.png',
      position: 'bottom-[15%] left-[15%]',
      size: 'w-28 h-28',
      delay: '0.4s',
    },
    {
      id: 'roomdesigner2',
      name: 'Room Design',
      label: 'Navigation',
      labelPosition: 'top-1/2 -translate-y-1/2 -left-[5rem]', // Left side for right-positioned bubbles
      image: '/project-screenshots/myroomdesignerai1.png',
      position: 'top-[40%] right-[6%]',
      size: 'w-24 h-24',
      delay: '0.15s',
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-red-100 via-yellow-50 to-purple-100 overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Blurry Color Blobs Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left - Red/Yellow Blob */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px]">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60 blur-3xl">
            <g transform="translate(300,300)">
              <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#fecaca"></path>
            </g>
          </svg>
        </div>

        {/* Top Right - Purple/Pink Blob */}
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/3 w-[700px] h-[700px]">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-50 blur-3xl">
            <g transform="translate(300,300)">
              <path d="M115.4,-145.5C148.1,-112.3,173.5,-71.8,180.3,-27.2C187.1,17.4,175.2,66.1,148.7,107.3C122.2,148.5,81.1,182.2,36.5,193.6C-8.1,205,-56.3,193.9,-98.8,168.7C-141.3,143.5,-178.2,104.1,-189.6,58.9C-201.1,13.7,-187.2,-37.3,-162.8,-76.9C-138.4,-116.5,-103.5,-144.7,-63.8,-174.4C-24.1,-204.1,20.5,-235.3,63.8,-223.7C107.1,-212.1,148.9,-157.7,138.6,-155.1Z" fill="#e9d5ff"></path>
            </g>
          </svg>
        </div>

        {/* Center - Yellow Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40 blur-3xl">
            <g transform="translate(300,300)">
              <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#fef3c7"></path>
            </g>
          </svg>
        </div>

        {/* Bottom Left - Pink/Red Blob */}
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/4 w-[650px] h-[650px]">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-50 blur-3xl">
            <g transform="translate(300,300)">
              <path d="M98.7,-117.3C125.1,-85.4,142.1,-49.5,148.2,-9.8C154.3,29.9,149.4,73.4,127.8,107.8C106.1,142.2,67.6,167.5,25.8,178.9C-16,190.3,-61.1,187.9,-98.3,166.2C-135.5,144.5,-164.9,103.6,-176.8,58.4C-188.7,13.2,-183.2,-36.3,-163.4,-76.2C-143.6,-116.1,-109.6,-146.4,-71.8,-174.7C-34,-203,-17,-229.3,7.6,-238.2C32.2,-247.1,72.3,-238.5,98.7,-117.3Z" fill="#fbcfe8"></path>
            </g>
          </svg>
        </div>

        {/* Bottom Right - Purple Blob */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/3 w-[700px] h-[700px]">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-45 blur-3xl">
            <g transform="translate(300,300)">
              <path d="M115.4,-145.5C148.1,-112.3,173.5,-71.8,180.3,-27.2C187.1,17.4,175.2,66.1,148.7,107.3C122.2,148.5,81.1,182.2,36.5,193.6C-8.1,205,-56.3,193.9,-98.8,168.7C-141.3,143.5,-178.2,104.1,-189.6,58.9C-201.1,13.7,-187.2,-37.3,-162.8,-76.9C-138.4,-116.5,-103.5,-144.7,-63.8,-174.4C-24.1,-204.1,20.5,-235.3,63.8,-223.7C107.1,-212.1,148.9,-157.7,138.6,-155.1Z" fill="#ddd6fe"></path>
            </g>
          </svg>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20">
        <h1 className="text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.01em] text-black/95 mb-4 sm:mb-6">
          <span className="text-[0.85em] font-[350]">My UI kits.</span> <span className="font-serif italic font-normal">Live previews.</span>
          <br />
          <span className="text-[0.85em] font-[350]">Built from real SaaS work.</span>
        </h1>
        
        <p className="text-sm sm:text-base text-black/60 font-light max-w-xl mx-auto leading-relaxed mb-8">
          These UI decisions doubled revenue in a real SaaS product. Now you can preview, buy and use them too.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="#ui-templates"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Browse Live Previews
          </a>
          <a
            href="/demo-minimal-calm"
            className="inline-flex items-center gap-2 text-sm text-black hover:text-black/60 transition-colors group"
          >
            <span>See full demo</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Tech Stack */}
        <p className="text-xs text-black/40 mt-8">
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

            {/* Small glassy label - Playfully positioned outside bubble */}
            <div className={`absolute ${bubble.labelPosition} z-10 whitespace-nowrap`}>
              <div className="flex items-center justify-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-white/60 shadow-lg">
                <span className="text-[9px] font-medium text-black/60 uppercase tracking-widest leading-none">{bubble.label}</span>
              </div>
            </div>

            {/* Project name - Shows on hover below bubble */}
            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 z-30 ${
              hoveredBubble === bubble.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-black/10 shadow-lg">
                <span className="text-xs font-medium text-black/70">{bubble.name}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
