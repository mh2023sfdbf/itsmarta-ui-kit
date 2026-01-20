'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  role: string;
  company: string;
  period: string;
  description: string;
  image: string;
  images?: string[]; // Multiple images for split screenshots
  tags: string[];
  details?: {
    achievements?: string[];
    technologies?: string[];
  };
}

const projects: Project[] = [
  {
    id: 'clamalo',
    title: 'Clamalo',
    role: 'Designer',
    company: 'Clamalo · Concept',
    period: '2026',
    description: 'A concept design for an emotional journaling and tracking platform. I designed the complete visual identity, including branding, landing page, and app UI, focusing on creating a calm, welcoming space for users to track their emotions, reflect on patterns, and grow through self-awareness.',
    image: '/project-screenshots/clamalo_concept1.png',
    images: ['/project-screenshots/clamalo_concept1.png', '/project-screenshots/clamalo_concept2.png'],
    tags: ['Branding', 'UI Design', 'Landing Page', 'App UI'],
  },
  {
    id: 'dreamhouse',
    title: 'DreamHouse AI',
    role: 'UX Collaborator',
    company: 'DreamHouse AI · Part-time',
    period: 'Dec 2025 – Present · 2 mos',
    description: 'Working with Gabor Herget on our latest project - an AI-powered exterior home design tool. I designed the landing page and UX flows to make AI-generated home transformations feel clear and trustworthy, with strong before/after storytelling that works for homeowners who aren\'t tech-savvy.',
    image: '/project-screenshots/dreamhouseai1_cover.png',
    images: ['/project-screenshots/dreamhouseai1.png', '/project-screenshots/dreamhouseai2.png'],
    tags: ['UX Design', 'Branding Design', 'AI/ML', 'Landing Pages'],
  },
  {
    id: 'myskinroutine',
    title: 'mySkinRoutine',
    role: 'Founder & Developer',
    company: 'mySkinRoutine · Self-employed',
    period: 'Jun 2025 – Present · 8 mos',
    description: 'A solo SaaS project I\'m building end-to-end to deepen my software development skills. I handle product strategy, UX/UI, development, and deployment, using the product as a real-world environment to debug systematically and iterate based on real user needs. The project is actively evolving.',
    image: '/project-screenshots/myskinroutine_cover.png',
    images: ['/project-screenshots/myskinroutine.png'],
    tags: ['Full-Stack Dev', 'Product Strategy', 'UX/UI', 'SaaS'],
  },
  {
    id: 'moodboard',
    title: 'Mood Board AI',
    role: 'Co-Founder & CEO',
    company: 'Mood Board AI · Self-employed',
    period: 'Jan 2022 – Present · 4 yrs 1 mo',
    description: 'I co-founded Mood Board AI (formerly MoodBoardly) and MyRoomDesigner AI, AI-powered design platforms for creating mood boards and visualizing room redesigns. Across both products, I focused on product vision, UX/UI, and making powerful design tools accessible and understandable for non-technical users.',
    image: '/project-screenshots/moodboardai_cover.png',
    images: ['/project-screenshots/moodboardai.png'],
    tags: ['Co-Founder', 'CEO', 'Product Vision', 'UX/UI'],
  },
  {
    id: 'myroomdesigner',
    title: 'MyRoomDesigner AI',
    role: 'Co-Founder & Product Lead',
    company: 'MyRoomDesigner AI · Self-employed',
    period: 'Jan 2022 – Present · 4 yrs 1 mo',
    description: 'Part of the Mood Board AI (MoodBoardly) project, MyRoomDesigner AI is an AI-powered interior design tool for room redesign and redecoration. Users can apply different interior styles to their spaces through AI-generated visualizations. Co-founded with Gabor.',
    image: '/project-screenshots/myroomdesignerai_cover.png',
    images: ['/project-screenshots/myroomdesignerai1.png', '/project-screenshots/myroomdesignerai2.png'],
    tags: ['Co-Founder', 'Product Lead', 'AI/ML', 'Interior Design'],
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [carouselImageLoaded, setCarouselImageLoaded] = useState(false);

  // Reset loading state when modal opens
  useEffect(() => {
    if (selectedProject) {
      setImageLoading(true);
    }
  }, [selectedProject]);

  const nextProject = () => {
    setCarouselImageLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCarouselImageLoaded(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed mb-4 text-black/90">
          Recent work
        </h2>
        <div className="w-12 h-px bg-black/10 mx-auto"></div>
      </div>

      {/* Full-Width Carousel */}
      <div className="relative overflow-hidden">
        {/* Main Card - Full Width with Smooth Transitions */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-[1600px] mx-auto">
            {/* Animated content wrapper */}
            <div 
              key={currentIndex}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fadeIn"
            >
              {/* Left: Image */}
              <div
                className="group cursor-pointer order-2 lg:order-1"
                onClick={() => setSelectedProject(currentProject)}
              >
                <div className="relative aspect-[3/4] overflow-hidden shadow-md bg-neutral-100">
                  {/* Loading skeleton */}
                  {!carouselImageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 animate-pulse">
                      <div className="flex items-center justify-center h-full">
                        <div className="w-6 h-6 border-2 border-black/10 border-t-black/30 rounded-full animate-spin"></div>
                      </div>
                    </div>
                  )}
                  
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={cn(
                      "object-cover object-top transition-opacity duration-500",
                      carouselImageLoaded ? "opacity-100" : "opacity-0"
                    )}
                    priority={currentIndex === 0}
                    quality={90}
                    onLoad={() => setCarouselImageLoaded(true)}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjkwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjkwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg=="
                  />
                  
                  {/* Overlay and button container - synced hover state */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    
                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        className="bg-white/95 backdrop-blur-sm text-black text-sm font-medium px-6 py-3 rounded-full shadow-xl relative z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(currentProject);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    {currentProject.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-black/70">
                    {currentProject.role}
                  </p>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-black/60 max-w-2xl">
                  {currentProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-2 rounded-full bg-black/5 text-black/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={prevProject}
                    className="w-8 h-8 flex items-center justify-center text-black/40 hover:text-black transition-colors"
                    aria-label="Previous project"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          currentIndex === index
                            ? "w-8 bg-black"
                            : "w-2 bg-black/20 hover:bg-black/40"
                        )}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextProject}
                    className="w-8 h-8 flex items-center justify-center text-black/40 hover:text-black transition-colors"
                    aria-label="Next project"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          {/* Close Button - Minimal floating style */}
          <button
            onClick={() => setSelectedProject(null)}
            className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-all duration-200 group"
            aria-label="Close"
          >
            <svg 
              className="w-5 h-5 text-black/60 group-hover:text-black transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Scrollable Image Container */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto px-6 sm:px-8"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0,0,0,0.1) transparent'
            }}
          >
            {/* Loading Skeleton - Minimal elegant style */}
            {imageLoading && (
              <div className="flex flex-col gap-0 rounded-lg overflow-hidden shadow-2xl shadow-black/5 mb-4">
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 animate-pulse">
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center gap-3">
                      {/* Minimal spinner */}
                      <div className="w-8 h-8 border-2 border-black/10 border-t-black/30 rounded-full animate-spin"></div>
                      <p className="text-sm text-black/40 font-light">Loading project...</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pure image display */}
            <div 
              className={cn(
                "flex flex-col gap-0 rounded-lg overflow-hidden shadow-2xl shadow-black/5 transition-opacity duration-300",
                imageLoading ? "opacity-0 absolute" : "opacity-100"
              )}
            >
              {selectedProject.images ? (
                // Multiple images - seamless vertical stack
                selectedProject.images.map((img, index) => (
                  <div key={index} className="relative w-full">
                    <Image
                      src={img}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      width={1400}
                      height={900}
                      className="w-full h-auto"
                      quality={95}
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                      onLoadingComplete={() => {
                        if (index === 0) setImageLoading(false);
                      }}
                    />
                  </div>
                ))
              ) : (
                // Single image fallback
                <div className="relative w-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                    quality={95}
                    priority
                    onLoadingComplete={() => setImageLoading(false)}
                  />
                </div>
              )}
            </div>

            {/* Subtle scroll hint (appears only if content is scrollable) */}
            {!imageLoading && (
              <div className="sticky bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

