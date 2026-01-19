'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import TemplatePreview from '@/components/showcase/TemplatePreview';
import PulsingLogo from '@/marta-ui-kit/templates/loaders/PulsingLogo';
import SignInSplit from '@/marta-ui-kit/templates/auth/SignInSplit';
import FooterComprehensive from '@/marta-ui-kit/templates/footers/FooterComprehensive';
import NavOrange from '@/marta-ui-kit/templates/navigation/NavOrange';
import HeroVideo from '@/marta-ui-kit/templates/heroes/HeroVideo';
import HeroTherapist from '@/marta-ui-kit/templates/heroes/HeroTherapist';
import HeroBeforeAfter from '@/marta-ui-kit/templates/heroes/HeroBeforeAfter';
import BenefitsStats from '@/marta-ui-kit/templates/features/BenefitsStats';
import SocialProof from '@/marta-ui-kit/templates/features/SocialProof';
import RestyleYourSpace from '@/marta-ui-kit/templates/features/RestyleYourSpace';
import OurTips from '@/marta-ui-kit/templates/features/OurTips';
import ComparisonTable from '@/marta-ui-kit/templates/features/ComparisonTable';
import ThreeInOne from '@/marta-ui-kit/templates/features/ThreeInOne';
import VideoTestimonial from '@/marta-ui-kit/templates/video/VideoTestimonial';
import CoreFeatures from '@/marta-ui-kit/templates/features/CoreFeatures';
import TherapistBenefits from '@/marta-ui-kit/templates/features/TherapistBenefits';
import TestimonialsCards from '@/marta-ui-kit/templates/testimonials/TestimonialsCards';
import FAQAccordion from '@/marta-ui-kit/templates/faq/FAQAccordion';
import CTAHighlighted from '@/marta-ui-kit/templates/cta/CTAHighlighted';
import CTAWithImages from '@/marta-ui-kit/templates/cta/CTAWithImages';
import CTAElevate from '@/marta-ui-kit/templates/cta/CTAElevate';
import BridgeGapCTA from '@/marta-ui-kit/templates/about/BridgeGapCTA';
import PricingCards from '@/marta-ui-kit/templates/pricing/PricingCards';
import TermsOfUse from '@/marta-ui-kit/templates/legal/TermsOfUse';

export default function HeroGlassy() {
  const [activeTemplate, setActiveTemplate] = useState('sign-in-split');
  const [activeProject, setActiveProject] = useState('design-app');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Project preview photos carousel
  const carouselCards = [
    {
      title: "Clamalo",
      image: "/project-screenshots/clamalo_concept_preview.jpeg",
      alt: "Clamalo Concept Preview"
    },
    {
      title: "DreamHouse AI",
      image: "/project-screenshots/dreamhouseai1_cover.png",
      alt: "DreamHouse AI Cover"
    },
    {
      title: "MyRoom Designer AI",
      image: "/project-screenshots/myroomdesignerai_cover.png",
      alt: "MyRoom Designer AI Cover"
    },
    {
      title: "Mood Board AI",
      image: "/project-screenshots/moodboardai_cover.png",
      alt: "Mood Board AI Cover"
    },
    {
      title: "MySkin Routine",
      image: "/project-screenshots/myskinroutine_cover.png",
      alt: "MySkin Routine Cover"
    },
  ];

  // Auto-scroll conveyor belt
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % carouselCards.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [carouselCards.length]);

  // Template type definition
  type TemplateProject = 'design-app' | 'therapy-app';
  
  interface Template {
    id: string;
    title: string;
    category: string;
    project: TemplateProject;
    component: React.ReactNode;
    code: string;
  }

  const templates: Template[] = [
    {
      id: 'sign-in-split',
      title: 'Sign In Split',
      category: 'Auth',
      project: 'design-app',
      component: <SignInSplit />,
      code: `'use client';

export default function SignInSplit() {
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";
  
  return (
    <section 
      className="relative pt-16 pb-0 md:py-32 bg-[#f7f6f4]" 
      style={{ backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: 'center' }}
    >
      <div className="container px-4 mx-auto mb-16">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <a className="inline-block mb-6" href="">
                <img className="h-16" src={placeholder} alt="Logo"/>
              </a>
              <h3 className="mb-4 text-2xl md:text-3xl font-heading">Sign in to your account</h3>
            </div>
            
            <form action="" className="">
              <button 
                type="button"
                className="font-heading text-sm sm:text-base rounded-full cursor-pointer hover:ring-2 ring-2 ring-gray-700 hover:ring-gray-500 mx-auto mb-4 flex items-center justify-center p-2 md:w-2/3"
              >
                <img className="w-5 h-5 mr-3" src={placeholder} alt="Google logo"/>
                <span>Sign in with Google</span>
              </button>

              <div className="flex items-center justify-center mb-6">
                <div className="border-t border-coolGray-300 flex-grow mr-4"></div>
                <span className="text-gray-400 text-xs">or</span>
                <div className="border-t border-coolGray-300 flex-grow ml-4"></div>
              </div>

              <div className="mb-6" suppressHydrationWarning>
                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="email">
                  Email
                </label>
                <input 
                  id="email" 
                  className="block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-50" 
                  type="email" 
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="mb-6" suppressHydrationWarning>
                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="password">
                  Password
                </label>
                <input 
                  id="password" 
                  className="block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-50" 
                  type="password" 
                  placeholder="************"
                  autoComplete="current-password"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="w-full md:w-auto mt-1">
                  <a className="inline-block text-xs text-pink-500 hover:text-pink-600" href="">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button 
                type="submit"
                className="font-heading block py-2 px-5 text-sm sm:text-base rounded-full cursor-pointer hover:ring-2 ring-2 ring-gray-700 hover:ring-gray-500 text-center mx-auto mb-4 w-2/3" 
              >
                Sign In
              </button>
              
              <p className="text-center">
                <span className="text-xs">Don't have an account?</span>
                <a className="inline-block text-xs text-pink-500 hover:text-pink-600 hover:underline" href="">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <img 
        className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover hidden md:block" 
        src="https://myroomdesigner.ai/_next/image?url=https%3A%2F%2Fstatic.shuffle.dev%2Fuploads%2Ffiles%2F68%2F685cdf6531559900d35917105bd95b994e60c466%2F1707239043111990.jpg&w=3840&q=75" 
        alt="Interior design inspiration"
      />
    </section>
  );
}`
    },
    {
      id: 'pulsing-logo',
      title: 'Pulsing Logo',
      category: 'Loaders',
      project: 'therapy-app',
      component: <PulsingLogo />,
      code: `export default function PulsingLogo() {
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";
  
  return (
    <section className="bg-orange-50 min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="relative flex items-center justify-center h-screen">
          <img 
            src={placeholder} 
            alt="Logo" 
            className="animate-pulse w-44"
          />
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'footer-comprehensive',
      title: 'Footer Comprehensive',
      category: 'Footers',
      project: 'therapy-app',
      component: <FooterComprehensive />,
      code: `'use client';

import { useState } from 'react';

export default function FooterComprehensive() {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:mt-6">
        <div className="flex flex-wrap -m-6 border-t border-gray-200 md:pt-8">
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-5/12 p-6">
            <div className="flex flex-col justify-between h-full">
              <div>
                <img className="mb-12" src={placeholder} alt="Logo"/>
              </div>
              
              {/* Social Media Buttons */}
              <div className="mb-8">
                <h3 className="mb-4 font-heading font-semibold text-xs uppercase tracking-px text-gray-900">Follow Us</h3>
                <div className="flex space-x-5 text-gray-900">
                  <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.05c0 4.017 2.926 7.347 6.75 7.951V10.38H4.72V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98H10.55c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25v5.625C13.074 15.397 16 12.067 16 8.049z"></path>
                    </svg>
                  </a>
                  {/* Additional social icons */}
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-sm">© 2026. All Rights Reserved</p>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6">
            <div className="h-full">
              <button 
                onClick={() => setCompanyOpen(!companyOpen)}
                className="flex lg:hidden justify-between w-full tracking-wide text-xs focus:outline-none font-heading text-gray-500 border-t border-gray-200 py-4"
              >
                Company
                <span className={\`transform transition-transform text-gray-500 \${companyOpen ? 'rotate-180' : ''}\`}>
                  +
                </span>
              </button>
              <h3 className="mb-9 hidden lg:block font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                Company
              </h3>
              <ul className={\`pl-4 lg:pl-0 mt-2 lg:mt-0 space-y-2 lg:space-y-4 mb-4 \${companyOpen ? 'block' : 'hidden lg:block'}\`}>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">Features</a></li>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">About Us</a></li>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">Pricing</a></li>
              </ul>
            </div>
          </div>
          {/* Support and Legals sections... */}
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'nav-orange',
      title: 'Navigation Orange',
      category: 'Navigation',
      project: 'therapy-app',
      component: <NavOrange />,
      code: `'use client';

import { useState } from 'react';

export default function NavOrange() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  return (
    <section className="bg-orange-50">
      <div className="container mx-auto px-4">
        {/* Navigation content */}
      </div>
    </section>
  );
}`
    },
    {
      id: 'hero-video',
      title: 'Hero Video',
      category: 'Heroes',
      project: 'therapy-app',
      component: <HeroVideo />,
      code: `export default function HeroVideo() {
  return (
    <section className="bg-orange-50">
      <div className="container mx-auto py-12 px-4 relative">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Track. Reflect. Grow.
        </h2>
      </div>
    </section>
  );
}`
    },
    {
      id: 'hero-therapist',
      title: 'Hero Therapist',
      category: 'Heroes',
      project: 'therapy-app',
      component: <HeroTherapist />,
      code: `export default function HeroTherapist() {
  return (
    <section className="bg-orange-50">
      <div className="container mx-auto p-4 mt-8 pb-12">
        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl">
          Turn Client Journaling into Deeper Insights
        </h1>
      </div>
    </section>
  );
}`
    },
    {
      id: 'hero-before-after',
      title: 'Hero Recent Work',
      category: 'Heroes',
      project: 'therapy-app',
      component: <HeroBeforeAfter />,
      code: `'use client';

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
    <section className="relative">
      <div className="container-fluid relative">
        <div className="flex flex-col max-w-[2500px] px-0">
          
          {/* Main Image Slider */}
          <div className="flex-1 min-w-0 mb-4 relative">
            <div className="relative w-full aspect-[15/8] max-h-[1300px] overflow-hidden">
              <div className="relative h-full w-full">
                {/* Single Image with fade-in */}
                <div key={activeSlide} className="absolute inset-0">
                  <Image
                    src={slides[activeSlide].image}
                    alt={slides[activeSlide].alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    width={2560}
                    height={1600}
                    priority
                  />
                </div>

                {/* Overlay gradient */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Header content */}
                <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-[5] p-8">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading leading-[1.1] tracking-[-0.02em] mb-4 text-white">
                      See Your Room Transform
                    </h2>
                    <p className="text-lg text-white/90 font-light max-w-2xl mx-auto mb-6">
                      Upload a photo and get instant redesigns, virtual staging, or fresh inspiration with MyRoom Designer.AI.
                    </p>
                    <button className="py-3 px-8 bg-white hover:bg-gray-100 text-black rounded-full font-heading text-base hover:shadow-lg transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="w-full relative z-[5] mb-4">
              <div className="mx-auto max-w-[1400px] px-4">
                <div className="flex gap-3 pt-1 pb-2 items-center justify-center overflow-x-auto">
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className="group flex-shrink-0"
                    >
                      <div className={\`relative w-[180px] h-[135px] rounded-lg overflow-hidden \${index === activeSlide ? 'ring-1 ring-gray-700' : ''}\`}>
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          width={220}
                          height={165}
                        />
                        <div className={\`absolute inset-0 bg-black transition-all \${index === activeSlide ? 'bg-opacity-0' : 'bg-opacity-20 group-hover:bg-opacity-10'}\`} />
                        <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-[2px] py-1.5 px-2">
                          <p className="text-sm font-medium text-center text-gray-900">{slide.label}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden bg-gradient-to-t from-[#f7f6f4] via-[#f7f6f4]/95 to-transparent pt-3 pb-6">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-[2rem] md:text-4xl font-heading leading-[1.1] tracking-[-0.02em] mb-2">
                    See Your Room Transform
                  </h2>
                  <p className="text-sm text-gray-600 font-light max-w-2xl mx-auto mb-4 px-4">
                    Upload a photo and get instant redesigns, virtual staging, or fresh inspiration with MyRoom Designer.AI.
                  </p>
                  <button className="w-full sm:w-auto py-2 px-6 bg-[#2C2C2C] hover:bg-black text-white rounded-full font-heading text-sm sm:text-base hover:shadow-lg transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'social-proof',
      title: 'Social Proof',
      category: 'Features',
      project: 'design-app',
      component: <SocialProof />,
      code: `import Image from 'next/image';

const socialProof = [
  {
    image: "https://moodboardai.com/assets/logos/producthunt-official.svg",
    alt: "Product Hunt Logo",
    className: "lg:w-full w-full [filter:grayscale(100%)_contrast(1000%)]"
  },
  {
    image: "https://static.shuffle.dev/uploads/files/4c/4c980fffbebd7485321e59965426e442ac7319a7/Reddit-Logo-Black.png",
    alt: "Reddit Logo",
    className: "w-2/3 lg:w-full"
  },
  {
    image: "https://static.shuffle.dev/uploads/files/4c/4c980fffbebd7485321e59965426e442ac7319a7/Medium-website-Logo-wine.png",
    alt: "Medium Logo",
    className: "w-2/3 lg:w-full"
  },
  {
    image: "https://static.shuffle.dev/uploads/files/4c/4c980fffbebd7485321e59965426e442ac7319a7/Black-YouTube-logo.png",
    alt: "YouTube Logo",
    className: "w-2/3 lg:w-full"
  }
];

export default function SocialProof() {
  return (
    <section className="relative pt-24">
      <div className="relative z-10 container px-4 mx-auto">
        <p className="text-gray-600 text-center uppercase tracking-px mb-6 text-xs">
          AS SEEN ON
        </p>
        <div className="sm:flex grid grid-cols-2 flex-wrap max-w-5xl mx-auto -m-3">
          {socialProof.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="flex items-center justify-center sm:px-9 h-full rounded-3xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={2000}
                  height={2000}
                  className={item.className}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'restyle-your-space',
      title: 'Restyle Your Space',
      category: 'Features',
      project: 'design-app',
      component: <RestyleYourSpace />,
      code: `import Image from 'next/image';

export default function RestyleYourSpace() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Video Container */}
            <div className="w-full lg:w-3/5">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.08)]">
                <video className="w-full aspect-video object-cover" autoPlay loop muted playsInline>
                  <source src="/assets/restyling-bedroom-with-ai.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/5 space-y-10">
              <div className="space-y-6">
                <p className="text-gray-500 uppercase tracking-wider text-sm">RESTYLE YOUR SPACE</p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
                  Effortless Room Design with AI
                </h1>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <span className="font-heading text-gray-400 text-2xl">01</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Upload and analyze</h3>
                    <p className="text-gray-600">Upload a photo, and our AI will instantly analyze your room's layout.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="font-heading text-gray-400 text-2xl">02</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Choose your style</h3>
                    <p className="text-gray-600">Select from curated design styles or customize details.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="font-heading text-gray-400 text-2xl">03</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Chat with AI</h3>
                    <p className="text-gray-600">Refine your design by chatting with AI.</p>
                  </div>
                </div>
              </div>

              <button className="py-3 px-8 bg-[#2C2C2C] hover:bg-black text-white rounded-full">Try it now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'our-tips',
      title: 'Our Tips (Did You Know)',
      category: 'Features',
      project: 'design-app',
      component: <OurTips />,
      code: `import Image from 'next/image';

export default function OurTips() {
  return (
    <section className="relative overflow-hidden pb-44 pt-20">
      <div className="relative z-10 container mx-auto px-4">
        <p className="mb-5 font-heading font-medium text-xs uppercase text-center">OUR TIPS</p>
        <h2 className="mb-24 text-center font-heading text-4xl md:text-5xl text-gray-800">Did You Know?</h2>
        
        <div className="md:mx-auto md:max-w-6xl">
          <div className="flex flex-wrap -m-5">
            {/* Tip cards with videos and images */}
            <div className="w-full md:w-1/2 p-5">
              <div className="p-9 rounded-2xl bg-[#f7f6f4]">
                <video className="w-full" loop muted autoPlay playsInline>
                  <source src="/assets/did-you-know/Upscale.mp4" type="video/mp4" />
                </video>
                <h3 className="font-heading text-3xl mt-6">Easy Upscale and more</h3>
                <p className="font-heading text-base mt-2">You can upscale your photo for high-resolution results.</p>
              </div>
            </div>
            {/* More tips... */}
          </div>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'comparison-table',
      title: 'Comparison Table',
      category: 'Features',
      project: 'design-app',
      component: <ComparisonTable />,
      code: `export default function ComparisonTable() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-32 pb-44 pt-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="mb-5 font-heading text-xs uppercase text-center">WHY CHOOSE US?</p>
        <h2 className="mb-12 sm:mb-24 text-center font-heading text-3xl sm:text-4xl md:text-5xl text-gray-800">
          How We Compare to Other Tools
        </h2>
        
        <div className="rounded-xl bg-[#f7f6f4] p-4 sm:p-8 lg:p-14">
          <div className="relative overflow-x-auto mb-6 sm:mb-8">
            <table className="w-full text-sm text-left text-gray-600 min-w-[800px]">
              <thead>
                <tr className="border-b">
                  <th className="py-3 sm:py-4 px-3 sm:px-6"></th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">Your Product</th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6">Competitor A</th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold">Speed</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <span className="text-pink-600 font-bold">✅</span> Under 4 Seconds
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <span className="text-red-500 font-bold">❌</span> 10+ Seconds
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <span className="text-orange-500 font-bold">❌</span> 6-8 Seconds
                  </td>
                </tr>
                {/* More rows... */}
              </tbody>
            </table>
          </div>
          <button className="w-full py-3 sm:py-4 bg-black text-white rounded-full">Start Now</button>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'three-in-one',
      title: '3 in 1',
      category: 'Features',
      project: 'design-app',
      component: <ThreeInOne />,
      code: `import Image from 'next/image';

export default function ThreeInOne() {
  const products = [
    {
      title: "Product One",
      description: "Description for product one",
      image: "/assets/product1.png",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    },
    // More products...
  ];

  return (
    <section className="relative overflow-hidden py-44 pb-12 bg-[#f7f6f4] p-6 mb-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 font-heading text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-gray-200 to-blue-400">
          3 in 1
        </h2>
        <h2 className="mb-5 font-heading text-center text-gray-900 text-5xl sm:text-7xl">
          Instead of one you actually buy three
        </h2>
        
        <div className="flex flex-wrap justify-center divide-y md:divide-y-0 md:divide-x">
          {products.map((product, index) => (
            <div key={index} className="w-full lg:w-1/3 p-6 md:p-16">
              <h3 className="font-heading text-center text-2xl lg:text-3xl">{product.title}</h3>
              <p className="text-center text-gray-600">{product.description}</p>
              <Image src={product.image} alt={product.title} width={2000} height={2000} className="rounded-2xl mb-8" />
              <ul>
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-3">✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'benefits-stats',
      title: 'Benefits Stats',
      category: 'Features',
      project: 'therapy-app',
      component: <BenefitsStats />,
      code: `export default function BenefitsStats() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-20">
          Why Emotional Tracking Matters
        </h2>
      </div>
    </section>
  );
}`
    },
    {
      id: 'video-testimonial',
      title: 'Video Testimonial',
      category: 'Video',
      project: 'therapy-app',
      component: <VideoTestimonial />,
      code: `'use client';

import { useState } from 'react';

export default function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);
  
  return (
    <section className="relative overflow-hidden bg-orange-50 py-36">
      {/* Video testimonial content */}
    </section>
  );
}`
    },
    {
      id: 'core-features',
      title: 'Core Features',
      category: 'Features',
      project: 'therapy-app',
      component: <CoreFeatures />,
      code: `export default function CoreFeatures() {
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-6">
          See How YourLogo Helps You To...
        </h2>
      </div>
    </section>
  );
}`
    },
    {
      id: 'therapist-benefits',
      title: 'Therapist Benefits',
      category: 'Features',
      project: 'therapy-app',
      component: <TherapistBenefits />,
      code: `export default function TherapistBenefits() {
  return (
    <section className="py-12 bg-orange-50 lg:py-44">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-20">
          Sharing your emotional tracking with your therapist...
        </h2>
      </div>
    </section>
  );
}`
    },
    {
      id: 'testimonials-cards',
      title: 'Testimonials Cards',
      category: 'Testimonials',
      project: 'therapy-app',
      component: <TestimonialsCards />,
      code: `export default function TestimonialsCards() {
  return (
    <section className="py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl">
          What our customers say
        </h1>
      </div>
    </section>
  );
}`
    },
    {
      id: 'faq-accordion',
      title: 'FAQ Accordion',
      category: 'FAQ',
      project: 'therapy-app',
      component: <FAQAccordion />,
      code: `'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [selected, setSelected] = useState<number | null>(null);
  
  return (
    <section className="relative py-20 md:py-40">
      <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl">
        Frequently Asked Questions
      </h1>
    </section>
  );
}`
    },
    {
      id: 'cta-highlighted',
      title: 'CTA Highlighted',
      category: 'CTA',
      project: 'therapy-app',
      component: <CTAHighlighted />,
      code: `export default function CTAHighlighted() {
  return (
    <section className="relative overflow-hidden pb-40 px-6 xl:px-32">
      <div className="container mx-auto bg-gradient-to-r from-red-100 via-yellow-50 to-purple-100 py-36 px-6 rounded-xl">
        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-8">
          Find the Right Therapist for Your Needs
        </h1>
      </div>
    </section>
  );
}`
    },
    {
      id: 'cta-with-images',
      title: 'CTA With Images',
      category: 'CTA',
      project: 'therapy-app',
      component: <CTAWithImages />,
      code: `export default function CTAWithImages() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-28 bg-orange-50">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-4">
          Start Your Emotional Journey Today
        </h2>
      </div>
    </section>
  );
}`
    },
    {
      id: 'cta-elevate',
      title: 'CTA Elevate',
      category: 'CTA',
      project: 'therapy-app',
      component: <CTAElevate />,
      code: `export default function CTAElevate() {
  return (
    <section className="py-20 relative overflow-hidden bg-orange-50">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-6">
          Ready to Elevate Your Practice?
        </h1>
      </div>
    </section>
  );
}`
    },
    {
      id: 'bridge-gap-cta',
      title: 'Bridge Gap CTA',
      category: 'About',
      project: 'therapy-app',
      component: <BridgeGapCTA />,
      code: `export default function BridgeGapCTA() {
  return (
    <section className="relative overflow-hidden bg-orange-50 py-32">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-8">
          Bridge the Gap Between Therapy Sessions
        </h1>
      </div>
    </section>
  );
}`
    },
    {
      id: 'pricing-cards',
      title: 'Pricing Cards',
      category: 'Pricing',
      project: 'therapy-app',
      component: <PricingCards />,
      code: `'use client';

import { useState } from 'react';

export default function PricingCards() {
  const [yearly, setYearly] = useState(false);
  
  return (
    <section className="py-24 bg-orange-50 lg:pb-34">
      <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-4">
        Simple, Transparent Pricing
      </h2>
    </section>
  );
}`
    },
    {
      id: 'terms-of-use',
      title: 'Terms of Use',
      category: 'Legal',
      project: 'therapy-app',
      component: <TermsOfUse />,
      code: `export default function TermsOfUse() {
  return (
    <section className="py-24 lg:py-32 bg-orange-50">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-5xl sm:text-6xl text-gray-900">
          Terms of Use
        </h2>
      </div>
    </section>
  );
}`
    }
  ];

  const currentTemplate = templates.find(t => t.id === activeTemplate);

  return (
    <div className="relative w-full bg-white">
      {/* 1. Hero Section */}
      <div className="pt-24 pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-serif italic text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.01em] text-black/95 font-light">
              My UI kits. Live previews.
              <br />
              Built from real SaaS work.
            </h1>
            <p className="text-sm sm:text-base text-black/60 font-light max-w-xl leading-relaxed">
              These UI decisions doubled revenue in a real SaaS product. Now you can preview, buy and use them too.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <a
                href="#ui-templates"
                className="inline-flex items-center gap-2 text-sm text-black hover:text-black/60 transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('ui-templates')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <span>View all templates</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <a 
                href="https://buy.stripe.com/test_28E4gy5Wf2i37Ri4QJ4ko02"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
              >
                Buy the code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Proof / Credibility Quote */}
      <div className="pt-20 sm:pt-24 md:pt-28 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-16 lg:px-32">
          {/* Small headline above quote */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-12">
            Design that moves real metrics
          </p>

          {/* Photo */}
          <div className="mb-8">
            <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden ring-1 ring-black/10">
              <img 
                src="/images/marta.png" 
                alt="Marta" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="italic text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-6 text-black/90">
            "We had a SaaS product that worked — but the UI felt off. I redesigned the interface without changing the code or the users. Revenue doubled."
          </blockquote>

          {/* Attribution */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-black/50 mb-4">
            — Marta
          </p>

          {/* Context */}
          <p className="text-sm sm:text-base text-black/60 max-w-2xl mx-auto">
            These UI kits are built from those same design decisions: calm UX, clear hierarchy, and trust-first layouts.
          </p>
        </div>
      </div>

      {/* 3. What these kits are - Short Explainer */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="pt-20 sm:pt-24 md:pt-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-6">
              Calm, conversion-ready UI components
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-black/80">
              Production-ready Tailwind components from real SaaS products. See them running live in your browser before you buy the code.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Who these kits are for */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="pt-20 sm:pt-24 md:pt-28">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-8 text-center">
              Made for
            </h2>
            
            <div className="space-y-3 text-base sm:text-lg text-black/70 leading-relaxed">
              <p>• Developers who want polished UI without hiring a designer</p>
              <p>• Indie founders building a SaaS or landing page</p>
              <p>• Small teams who care about clarity, UX, and conversion—not flashy visuals</p>
            </div>

            <p className="mt-8 text-sm text-black/40 italic text-center">
              Not ideal for marketing-heavy websites or one-off visual concepts.
            </p>
          </div>
        </div>
      </div>

      {/* 5. What's inside each kit */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="pt-20 sm:pt-24 md:pt-28">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-8 text-center">
              What you get
            </h2>
            
            <div className="space-y-3 text-base sm:text-lg text-black/70 leading-relaxed">
              <p>• Full TypeScript + Tailwind code</p>
              <p>• Responsive layouts</p>
              <p>• Dark mode support</p>
              <p>• Clean, readable structure</p>
              <p>• Commercial license</p>
              <p>• AI prompt suggestions for implementation & extension</p>
              <p>• Updates for each kit</p>
            </div>

            <p className="mt-8 text-sm text-black/40 italic text-center">
              No design tools, no screenshots—just real code.
            </p>
          </div>
        </div>
      </div>

      {/* 6. UI Templates / Live Previews */}
      <div id="ui-templates" className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 scroll-mt-20">
        <div className="pt-28 sm:pt-32 md:pt-40">
          <div className="max-w-7xl">
            {/* Title and Intro */}
            <div className="mb-12">
              <h2 className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-6">
                Explore the UI kits
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed text-black/90 max-w-2xl">
                Ready-to-use sections and flows from real SaaS products.
              </p>
              <p className="text-sm sm:text-base text-black/60 font-light max-w-2xl leading-relaxed mt-4">
                Preview them live, then buy the code. Easy.
              </p>
            </div>

            {/* Project Switcher - Minimal Navigation */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-1 p-1 bg-black/5 rounded-full">
                <button
                  onClick={() => {
                    setActiveProject('design-app');
                    setActiveTemplate(templates.find(t => t.project === 'design-app')?.id || 'sign-in-split');
                  }}
                  className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-full ${
                    activeProject === 'design-app'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-black/50 hover:text-black/70'
                  }`}
                >
                  Design App
                </button>
                <button
                  onClick={() => {
                    setActiveProject('therapy-app');
                    setActiveTemplate(templates.find(t => t.project === 'therapy-app')?.id || 'pulsing-logo');
                  }}
                  className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-full ${
                    activeProject === 'therapy-app'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-black/50 hover:text-black/70'
                  }`}
                >
                  Therapy App
                </button>
              </div>
            </div>

            {/* Template Switcher Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {templates.filter(t => t.project === activeProject).map((template) => (
                <button
                  key={template.id}
                  onClick={() => setActiveTemplate(template.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTemplate === template.id
                      ? 'bg-black text-white'
                      : 'border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50'
                  }`}
                >
                  {template.title}
                </button>
              ))}
            </div>

            {/* Active Template Display */}
            {currentTemplate && (
              <div className="rounded-2xl overflow-hidden">
                <TemplatePreview
                  title={currentTemplate.title}
                  description=""
                  category={currentTemplate.category}
                  isPremium
                  price={49}
                  code={currentTemplate.code}
                  project={currentTemplate.project}
                >
                  {currentTemplate.component}
                </TemplatePreview>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 7. How it works */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div id="how" className="pt-28 sm:pt-32 md:pt-40">
          <div className="max-w-4xl">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-12">
              How it works
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <div className="text-5xl font-light text-black/20 mb-4">01</div>
                <h3 className="text-lg font-medium text-black mb-3">Preview</h3>
                <p className="text-black/60 leading-relaxed">
                  Explore the UI live in your browser. Scroll, resize, and click through the components.
                </p>
              </div>

              <div>
                <div className="text-5xl font-light text-black/20 mb-4">02</div>
                <h3 className="text-lg font-medium text-black mb-3">Buy</h3>
                <p className="text-black/60 leading-relaxed">
                  Purchase the kit once. Instant access after checkout.
                </p>
              </div>

              <div>
                <div className="text-5xl font-light text-black/20 mb-4">03</div>
                <h3 className="text-lg font-medium text-black mb-3">Download</h3>
                <p className="text-black/60 leading-relaxed">
                  Get the full React + Tailwind code as a downloadable package.
                </p>
              </div>

              <div>
                <div className="text-5xl font-light text-black/20 mb-4">04</div>
                <h3 className="text-lg font-medium text-black mb-3">Use & adapt</h3>
                <p className="text-black/60 leading-relaxed">
                  Drop the components into your product and customize as needed.
                </p>
              </div>
            </div>

            <p className="mt-12 text-sm text-black/40 italic">
              Built to be understandable, flexible, and production-ready.
            </p>
          </div>
        </div>
      </div>

      {/* 8. Designed by a founder (short) */}
      <div className="pt-28 sm:pt-32 md:pt-40 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl leading-relaxed text-black/70">
            Built at the intersection of product psychology, design, and software. Shaped by real experience shipping and iterating SaaS products end-to-end.
          </p>
        </div>
      </div>

      {/* 9. Recent work (limited to 2 projects) */}
      <div className="relative w-full overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-8">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-black/40">
            Recent work
          </h2>
        </div>
        
        <div 
          className="flex gap-20 lg:gap-28 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${(currentCardIndex * 100) / carouselCards.length}%)`
          }}
        >
          {/* Show only first 2 cards, duplicated for smooth scroll */}
          {[...carouselCards.slice(0, 2), ...carouselCards.slice(0, 2)].map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[38vw] relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 38vw"
                />
                
                <div 
                  className="absolute bottom-0 left-0 right-0 backdrop-blur-[1px] pt-20 pb-6 px-6"
                  style={{
                    background: 'linear-gradient(to top, rgb(255 255 255 / 1) 0%, rgb(255 255 255 / 0.85) 30%, rgb(255 255 255 / 0.5) 60%, rgb(255 255 255 / 0.15) 85%, transparent 100%)'
                  }}
                >
                  <p className="text-gray-900 font-heading text-base font-medium tracking-wide">{card.title}</p>
                </div>
              </div>
              
              {index < 3 && (
                <div className="absolute right-[-40px] lg:right-[-56px] top-[3%] bottom-[3%] w-[1px] bg-gradient-to-b from-transparent via-gray-300/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 10. Soft consulting CTA (quiet) */}
      <section id="need-a-second-brain" className="pt-20 sm:pt-24 md:pt-28 pb-12 px-6 md:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-6">
              Need a second brain?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-black/60">
              I also offer a small amount of product & UX advisory for SaaS founders—usually around clarity, UI decisions, positioning, or conversion.
            </p>

            <div className="mt-6">
              <a 
                href="https://app.cal.eu/itsmarta/50min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors group"
              >
                <span>Work with me</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <p className="mt-3 text-xs text-black/30 italic">
              Limited availability.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Final CTA repeat */}
      <div className="pt-20 sm:pt-24 md:pt-28 pb-28 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-8">
            Ready to use this in your product?
          </h2>
          
          <a
            href="#ui-templates"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('ui-templates')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            View UI kits
          </a>
        </div>
      </div>
    </div>
  );
}

