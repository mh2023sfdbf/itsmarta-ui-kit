'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image';

export default function HeroBeforeAfter() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Slide data - Recent Work Previews (single photos)
  const slides = [
    {
      image: "/project-screenshots/clamalo_concept2.png",
      alt: "Clamalo Concept",
      label: "Clamalo"
    },
    {
      image: "/project-screenshots/dreamhouseai2.png",
      alt: "DreamHouse AI",
      label: "DreamHouse AI"
    },
    {
      image: "/project-screenshots/myroomdesignerai2.png",
      alt: "MyRoomDesigner AI",
      label: "MyRoom Designer"
    },
    {
      image: "/project-screenshots/moodboardai.png",
      alt: "Mood Board AI",
      label: "Mood Board AI"
    }
  ];

  // Auto-slide effect (10 seconds per slide)
  useEffect(() => {
    const autoSlideRef = setInterval(() => {
      setActiveSlide(prev => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 10000);

    return () => {
      clearInterval(autoSlideRef);
    };
  }, [slides.length]);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section className="relative">
        {/* Main Content Container */}
        <div className="container-fluid relative">
          <div className="flex flex-col max-w-[2500px] px-0">
            
            {/* Main Image Slider */}
            <div className="flex-1 min-w-0 mb-4 relative">
              <div className="relative w-full aspect-[15/8] max-h-[1300px] overflow-hidden">
                <div className="relative h-full w-full">
                  {/* Single Image with fade-in animation */}
                  <div
                    key={activeSlide}
                    className="absolute inset-0 animate-fade-in"
                    style={{ animation: 'fadeIn 700ms ease-in-out' }}
                  >
                    <Image
                      src={slides[activeSlide].image}
                      alt={slides[activeSlide].alt}
                      className="absolute inset-0 w-full h-full object-cover"
                      width={2560}
                      height={1600}
                      priority
                    />
                  </div>

                  {/* Overlay gradient for large screens */}
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Header content for large screens */}
                  <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-[5] p-8">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-5xl font-heading leading-[1.1] tracking-[-0.02em] mb-4 text-white">
                        See Your Room Transform
                      </h2>
                      <p className="text-lg text-white/90 font-light max-w-2xl mx-auto mb-6">
                        Upload a photo and get instant redesigns, virtual staging, or fresh inspiration with MyRoom Designer.AI.
                      </p>
                      <div className="flex justify-center items-center gap-6">
                        <button
                          className="py-3 px-8 bg-white hover:bg-gray-100 text-black rounded-full font-heading text-base hover:shadow-lg transition-all duration-300"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnails Section */}
              <div className="w-full relative z-[5] mb-4">
                <div className="mx-auto max-w-[1400px] px-4 md:px-0">
                  <div className="flex gap-3 pt-1 pb-2 px-1 items-center md:justify-center overflow-x-auto scrollbar-hide">
                    {slides.map((slide, index) => (
                      <div key={index} className="flex-shrink-0 w-[120px] md:w-[180px] lg:w-[220px]">
                        <button
                          onClick={() => setActiveSlide(index)}
                          className="group flex flex-col items-center w-full relative"
                        >
                          <div className={`relative w-[120px] md:w-[180px] lg:w-[220px] h-[90px] md:h-[135px] lg:h-[165px] overflow-hidden rounded-lg ${
                            index === activeSlide ? 'ring-1 ring-gray-700' : ''
                          }`}>
                            <Image
                              src={slide.image}
                              alt={slide.alt}
                              className="w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110 object-cover"
                              width={220}
                              height={165}
                            />
                            <div className={`absolute inset-0 bg-black transition-all duration-500 ease-in-out ${
                              index === activeSlide ? 'bg-opacity-0' : 'bg-opacity-20 group-hover:bg-opacity-10'
                            }`} />
                            <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-[2px] py-1.5 px-2">
                              <p className="text-xs md:text-sm font-medium text-center text-gray-900">
                                {slide.label}
                              </p>
                            </div>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Header Section - Only visible on mobile/tablet */}
              <div className="lg:hidden bg-gradient-to-t from-[#f7f6f4] via-[#f7f6f4]/95 to-transparent pt-3 pb-6">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[2rem] md:text-4xl font-heading leading-[1.1] tracking-[-0.02em] mb-2">
                      See Your Room Transform
                    </h2>
                    <p className="text-sm lg:text-lg text-gray-600 font-light max-w-2xl mx-auto mb-4 px-4">
                      Upload a photo and get instant redesigns, virtual staging, or fresh inspiration with MyRoom Designer.AI.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:space-x-6 px-4">
                      <button
                        className="w-full sm:w-auto py-2 px-6 bg-[#2C2C2C] hover:bg-black text-white rounded-full font-heading text-sm sm:text-base hover:shadow-lg transition-all duration-300 shadow-sm"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
