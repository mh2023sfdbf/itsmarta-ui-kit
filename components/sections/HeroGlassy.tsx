'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import TemplatePreview from '@/components/showcase/TemplatePreview';
import PulsingLogo from '@/marta-ui-kit/templates/loaders/PulsingLogo';

// Dynamic import with SSR disabled to avoid hydration issues from browser extensions
const SignInSplit = dynamic(
  () => import('@/marta-ui-kit/templates/auth/SignInSplit'),
  { ssr: false }
);
import FooterComprehensive from '@/marta-ui-kit/templates/footers/FooterComprehensive';
import NavOrange from '@/marta-ui-kit/templates/navigation/NavOrange';
import NavMenuMinimal from '@/marta-ui-kit/templates/navigation/NavMenuMinimal';
import HeroVideo from '@/marta-ui-kit/templates/heroes/HeroVideo';
import HeroTherapist from '@/marta-ui-kit/templates/heroes/HeroTherapist';
import HeroBeforeAfter from '@/marta-ui-kit/templates/heroes/HeroBeforeAfter';
import BenefitsStats from '@/marta-ui-kit/templates/features/BenefitsStats';
import SocialProof from '@/marta-ui-kit/templates/features/SocialProof';
import VideoContentLayout from '@/marta-ui-kit/templates/features/VideoContentLayout';
import GridCards from '@/marta-ui-kit/templates/features/GridCards';
import TableComparison from '@/marta-ui-kit/templates/features/TableComparison';
import ThreeColumnFeatures from '@/marta-ui-kit/templates/features/ThreeColumnFeatures';
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
  const [showAllTemplates, setShowAllTemplates] = useState(false);

  // Check URL for template parameter on mount (coming back from demo)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const templateParam = params.get('t');
      if (templateParam) {
        setActiveTemplate(templateParam);
        // Scroll to templates section after a brief delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById('ui-templates');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
        // Clean up URL without reload
        window.history.replaceState({}, '', window.location.pathname + window.location.hash);
      }
    }
  }, []);

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
  type TemplateProject = 'design-app' | 'therapy-app' | 'basics';
  
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
      className="relative min-h-screen bg-[#f7f6f4]" 
      style={{ backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: 'center' }}
    >
      <div className="min-h-screen flex items-center">
        <div className="w-full md:w-3/5 lg:w-1/2 flex items-center justify-center px-4 py-4">
          <div className="max-w-sm w-full mx-auto">
            <div className="mb-6 text-center">
              <h3 className="mb-4 text-xl md:text-2xl font-heading">Sign in to your account</h3>
            </div>
            
            <form action="" className="">
              <button 
                type="button"
                className="font-heading text-sm sm:text-base rounded-full cursor-pointer hover:ring-1 ring-1 ring-gray-700 hover:ring-gray-500 mx-auto mb-3 flex items-center justify-center p-2 w-2/3"
              >
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

              <div className="mb-3" suppressHydrationWarning>
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
                className="font-heading block py-2 px-5 text-sm sm:text-base rounded-full cursor-pointer hover:ring-1 ring-1 ring-gray-700 hover:ring-gray-500 text-center mx-auto mb-4 w-2/3" 
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
        src="/images/flower-close-up.jpg" 
        alt="Flower close-up"
      />
    </section>
  );
}`
    },
    {
      id: 'nav-minimal',
      title: 'Nav Menu & Sidebar',
      category: 'Navigation',
      project: 'design-app',
      component: <NavMenuMinimal />,
      code: `'use client';

import { useState } from "react";

export default function NavMenuMinimal() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="bg-[#f7f6f4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5 relative max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="inline-block text-xs xl:text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
              MINIMAL & CALM
            </a>
          </div>

          {/* Desktop Nav Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden xl:block">
            <ul className="flex items-center">
              <li className="mr-9 text-sm">
                <a
                  href="/"
                  className="nav-link relative px-1 transition duration-200 text-gray-700 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black/10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  About
                </a>
              </li>
              <li className="mr-9 text-sm">
                <a
                  href="#"
                  className="nav-link relative px-1 transition duration-200 text-gray-700 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black/10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  Templates
                </a>
              </li>
              <li className="mr-9 text-sm">
                <a
                  href="#how-it-works"
                  className="nav-link relative px-1 transition duration-200 text-gray-700 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black/10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  How it works
                </a>
              </li>
              <li className="mr-9 text-sm">
                <a
                  href="#pricing"
                  className="nav-link relative px-1 transition duration-200 text-gray-700 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black/10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Sign In/Register */}
          <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
            <a
              href="#"
              className="inline-flex py-2.5 px-6 text-sm font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-white/60 backdrop-blur-sm"
            >
              Sign In
            </a>
            <a
              href="#"
              className="inline-flex py-2.5 px-6 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800 shadow-sm"
            >
              Register
            </a>
          </div>

          {/* Hamburger Menu (Visible below xl) */}
          <div className="block xl:hidden">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="flex items-center justify-center w-10 h-10"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={\`\${mobileNavOpen ? "block" : "hidden"} fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50\`}>
        <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav className="relative z-10 bg-white h-full overflow-y-auto rounded-r-2xl shadow-xl">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <a href="#" className="block text-xs font-medium uppercase tracking-[0.2em] text-gray-900">
              MINIMAL & CALM
            </a>
            <button onClick={() => setMobileNavOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-black/5 rounded-lg transition-colors duration-200 hover:text-black font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-black/5 rounded-lg transition-colors duration-200 hover:text-black font-medium">
                  Templates
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="block py-2 px-4 text-gray-800 hover:bg-black/5 rounded-lg transition-colors duration-200 hover:text-black font-medium">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pricing" className="block py-2 px-4 text-gray-800 hover:bg-black/5 rounded-lg transition-colors duration-200 hover:text-black font-medium">
                  Pricing
                </a>
              </li>
            </ul>
            <div className="mt-8 space-y-3">
              <a href="#" className="block w-full py-3 px-4 text-center font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-black/5">
                Sign In
              </a>
              <a href="#" className="block w-full py-3 px-4 text-center font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800">
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}`
    },
    {
      id: 'hero-video',
      title: 'Hero Video',
      category: 'Heroes',
      project: 'design-app',
      component: <HeroVideo />,
      code: `"use client";

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
      id: 'video-content-layout',
      title: 'Video + Content Layout',
      category: 'Content',
      project: 'design-app',
      component: <VideoContentLayout />,
      code: `import Image from 'next/image';

export default function VideoContentLayout() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Video Container */}
            <div className="w-full lg:w-3/5">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.08)]">
                <video className="w-full aspect-video object-cover" autoPlay loop muted playsInline>
                  <source src="/assets/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/5 space-y-10">
              <div className="space-y-6">
                <p className="text-gray-500 uppercase tracking-wider text-sm">HOW IT WORKS</p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
                  Simple Process, Powerful Results
                </h1>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <span className="font-heading text-gray-400 text-2xl">01</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Start Your Journey</h3>
                    <p className="text-gray-600">Begin with a simple upload or entry for optimized results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="font-heading text-gray-400 text-2xl">02</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Customize Your Experience</h3>
                    <p className="text-gray-600">Choose from curated options or personalize details.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="font-heading text-gray-400 text-2xl">03</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Refine & Perfect</h3>
                    <p className="text-gray-600">Make adjustments until everything is exactly right.</p>
                  </div>
                </div>
              </div>

              <button className="inline-flex py-2.5 px-5 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'grid-cards',
      title: 'Grid Cards Layout',
      category: 'Content',
      project: 'design-app',
      component: <GridCards />,
      code: `import Image from 'next/image';

export default function GridCards() {
  return (
    <section className="relative overflow-hidden pb-44 pt-20">
      <div className="relative z-10 container mx-auto px-4">
        <p className="mb-5 font-heading font-medium text-xs uppercase text-center">FEATURED</p>
        <h2 className="mb-24 text-center font-heading text-4xl md:text-5xl text-gray-800">
          Discover What's Possible
        </h2>
        
        <div className="md:mx-auto md:max-w-6xl">
          <div className="flex flex-wrap -m-5">
            {/* Card 1 */}
            <div className="w-full md:w-1/2 p-5">
              <div className="p-9 rounded-2xl bg-[#f7f6f4]">
                <video className="w-full" loop muted autoPlay playsInline>
                  <source src="/assets/video.mp4" type="video/mp4" />
                </video>
                <h3 className="font-heading text-3xl mt-6">Enhanced Quality</h3>
                <p className="font-heading text-base mt-2">
                  Upgrade your results with high-resolution outputs.
                </p>
              </div>
            </div>
            {/* More cards... */}
          </div>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'table-comparison',
      title: 'Comparison Table',
      category: 'Content',
      project: 'design-app',
      component: <TableComparison />,
      code: `export default function TableComparison() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-32 pb-44 pt-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="mb-5 font-heading text-xs uppercase text-center">WHY CHOOSE US?</p>
        <h2 className="mb-12 sm:mb-24 text-center font-heading text-3xl sm:text-4xl md:text-5xl text-gray-800">
          How We Compare
        </h2>
        
        <div className="rounded-xl bg-[#f7f6f4] p-4 sm:p-8 lg:p-14">
          <div className="relative overflow-x-auto mb-6 sm:mb-8">
            <table className="w-full text-sm text-left text-gray-600 min-w-[800px]">
              <thead>
                <tr className="border-b">
                  <th className="py-3 sm:py-4 px-3 sm:px-6"></th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    Our Platform
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6">Alternative A</th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6">Alternative B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold">Speed</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <span className="text-pink-600 font-bold">✅</span> Lightning Fast
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <span className="text-red-500 font-bold">❌</span> Slower
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <span className="text-orange-500 font-bold">❌</span> Moderate
                  </td>
                </tr>
                {/* More rows... */}
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-center">
            <button className="inline-flex py-2.5 px-5 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'three-column-features',
      title: 'Three Column Features',
      category: 'Content',
      project: 'design-app',
      component: <ThreeColumnFeatures />,
      code: `import Image from 'next/image';

export default function ThreeColumnFeatures() {
  const features = [
    {
      title: "Core Feature",
      description: "A comprehensive solution that streamlines your workflow.",
      image: "/assets/feature1.png",
      highlights: ["One-Click Setup", "Smart Detection", "High-Quality Output"]
    },
    // More features...
  ];

  return (
    <section className="relative overflow-hidden py-44 pb-12 bg-[#f7f6f4] p-6 mb-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 font-heading text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-gray-200 to-blue-400">
          All in One
        </h2>
        <h2 className="mb-5 font-heading text-center text-gray-900 text-5xl sm:text-7xl">
          Everything You Need in One Place
        </h2>
        
        <div className="flex flex-wrap justify-center divide-y md:divide-y-0 md:divide-x">
          {features.map((feature, index) => (
            <div key={index} className="w-full lg:w-1/3 p-6 md:p-16">
              <h3 className="font-heading text-center text-2xl lg:text-3xl">{feature.title}</h3>
              <p className="text-center text-gray-600">{feature.description}</p>
              <Image src={feature.image} alt={feature.title} width={2000} height={2000} className="rounded-2xl mb-8" />
              <ul>
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center mb-3">✓ {highlight}</li>
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
    },
    
    // ============================================
    // COLORFUL UI - Add new templates below
    // ============================================
    {
      id: 'cta-therapist',
      title: 'Find Therapist CTA',
      category: 'CTA',
      project: 'basics',
      component: <CTAHighlighted />,
      code: `export default function CTAHighlighted() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 xl:px-32 py-20">
      {/* Decorative Blob */}
      <div className="absolute bottom-[-50px] right-[-150px] w-[600px] h-[600px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"></svg>
      </div>

      <div className="container mx-auto relative z-10 bg-gradient-to-r from-red-100 via-yellow-50 to-purple-100 py-36 px-6 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-8">
            Find the Right Therapist for Your Needs
          </h1>
          <p className="text-2xl text-black font-medium mb-10">
            Looking for professional mental health support?{' '}
            <span className="inline-flex items-center mx-1">
              With <span className="font-sego ml-2">YourLogo</span>,
            </span>{' '}
            you can easily connect with qualified therapists who match your specific needs. Browse our extensive database of professionals, read reviews, and schedule your first session - all in one place.
          </p>
          <a href="#" className="inline-flex py-2.5 px-5 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800">
            Find a Therapist
          </a>
        </div>
      </div>
    </section>
  );
}`
    }
  ];

  const currentTemplate = templates.find(t => t.id === activeTemplate);

  return (
    <div className="relative w-full bg-white">
      {/* Header with Padding */}
      <div className="pt-24 pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Main Headline */}
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

      {/* Recent Work Subtitle */}
      <div className="text-right mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-0">
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-black/30 font-medium">
          Recent work
        </p>
      </div>

      {/* Full Width Conveyor Belt - Minimal Pro Style */}
      <div className="relative w-full overflow-hidden pb-16 pt-4 mb-12">
        <div 
          className="flex gap-20 lg:gap-28 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${(currentCardIndex * 100) / carouselCards.length}%)`
          }}
        >
          {/* Cards - duplicate for infinite loop */}
          {[...carouselCards, ...carouselCards].map((card, index) => (
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
                
                {/* Smooth ombre gradient overlay - shorter with smooth fade */}
                <div 
                  className="absolute bottom-0 left-0 right-0 backdrop-blur-[1px] pt-20 pb-6 px-6"
                  style={{
                    background: 'linear-gradient(to top, rgb(255 255 255 / 1) 0%, rgb(255 255 255 / 0.85) 30%, rgb(255 255 255 / 0.5) 60%, rgb(255 255 255 / 0.15) 85%, transparent 100%)'
                  }}
                >
                  <p className="text-gray-900 text-base font-medium tracking-wide">{card.title}</p>
                </div>
              </div>
              
              {/* Elegant vertical divider matching horizontal divider */}
              {index < carouselCards.length * 2 - 1 && (
                <div className="absolute right-[-40px] lg:right-[-56px] top-[3%] bottom-[3%] w-[1px] bg-gradient-to-b from-transparent via-gray-300/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Designed by a Founder Section */}
      <div className="pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 md:pb-32 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
             <div className="max-w-4xl mx-auto text-center px-6 md:px-16 lg:px-32">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed mb-6 lg:mb-10 text-black/90">
            Designed by a founder
          </h2>

          {/* Attribution style separator */}
          <div className="w-12 h-px bg-black/10 mx-auto mb-8 lg:mb-12"></div>

          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-black/70">
            <p>
              Built at the intersection of product psychology, design, and software.
            </p>
            <p>
              These UI kits focus on making complex software calmer, clearer, and more human to use — without sacrificing structure or technical integrity.
            </p>
            <p>
              Shaped by real experience shipping and iterating SaaS products end-to-end.
            </p>
          </div>

          {/* Differentiator Note */}
          <p className="text-xs sm:text-sm italic text-black/40 max-w-xl mx-auto mt-10 lg:mt-12">
            Human-led design over generic AI output.
              </p>
            </div>
      </div>

      {/* Editorial Opening Statement - Magazine Style */}
      {/* Template Showcase with Switcher */}
      <div className="w-full">
        <div className="pt-32 sm:pt-40 md:pt-48">
          {/* Controls Container - Constrained Width */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Combined Title and Intro */}
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-[1.1] text-black/90 tracking-tight mb-4 sm:mb-6 md:mb-8">
                Calm, conversion-ready UI templates from real SaaS products.
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-black/60 font-light max-w-3xl mb-4 sm:mb-6">
                Preview live Tailwind components in your browser, then buy the code. Easy.
              </p>

              <p className="text-xs text-black/40 mb-16 sm:mb-24 md:mb-32 lg:mb-48">
                React · Tailwind · TypeScript · Instant download
              </p>

              {/* Purchase Subheading */}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed text-black/90 mb-3 sm:mb-4">
                One purchase includes all templates shown below
              </h3>
              
              <p className="text-sm sm:text-base text-black/50 font-light mb-6 sm:mb-8 md:mb-10 lg:mb-14">
                Everything you need for a calm, conversion-ready UI
                </p>
              </div>
              
            {/* Split Layout: Nav Left, Preview Right */}
            <div id="ui-templates" className="flex flex-col gap-6 scroll-mt-20">
              
              {/* TOP: Style Switcher - Full Width on Mobile */}
              <div className="w-full">
                <p className="text-xs uppercase tracking-widest text-black/40 mb-3 font-medium">Style</p>
                <div className="inline-flex items-center gap-1 p-1 bg-black/5 rounded-full">
                  <button
                    onClick={() => {
                      setActiveProject('design-app');
                      setActiveTemplate(templates.find(t => t.project === 'design-app')?.id || 'sign-in-split');
                    }}
                    className={`px-4 py-2 text-xs font-medium transition-all duration-300 rounded-full ${
                      activeProject === 'design-app'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-black/50 hover:text-black/70'
                    }`}
                  >
                    Minimal & Calm
                  </button>
                  <button
                    onClick={() => {
                      setActiveProject('basics');
                      setActiveTemplate(templates.find(t => t.project === 'basics')?.id || '');
                    }}
                    className={`px-4 py-2 text-xs font-medium transition-all duration-300 rounded-full ${
                      activeProject === 'basics'
                        ? 'bg-gradient-to-r from-red-100 via-yellow-50 to-purple-100 text-black shadow-sm'
                        : 'text-black/50 hover:text-black/70'
                    }`}
                  >
                    Colorful
                  </button>
                </div>
              </div>

              {/* Template Tabs - Horizontal Scroll on Mobile */}
              <div className="w-full">
                <p className="text-xs uppercase tracking-widest text-black/40 mb-3 font-medium">Templates</p>
                
                {/* Mobile: Horizontal scroll tabs */}
                <div className="lg:hidden">
                  <div className="overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
                    <div className="flex gap-2 min-w-max">
                      {templates.filter(t => t.project === activeProject).map((template) => (
                        <button
                          key={template.id}
                          onClick={() => setActiveTemplate(template.id)}
                          className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                            activeTemplate === template.id
                              ? 'bg-black text-white shadow-md'
                              : 'bg-black/5 text-black/70 hover:bg-black/10'
                          }`}
                        >
                          {template.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop: Vertical list with "See more" */}
                <div className="hidden lg:block">
                  <div className="space-y-2">
                    {/* First 5 templates - always visible */}
                    {templates.filter(t => t.project === activeProject).slice(0, 5).map((template) => (
                      <div key={template.id}>
                        <button
                          onClick={() => setActiveTemplate(template.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            activeTemplate === template.id
                              ? 'bg-black text-white'
                              : 'text-black/70 hover:bg-black/5 hover:text-black'
                          }`}
                        >
                          {template.title}
                        </button>
                        
                        {/* Auth states info below Sign In Split */}
                        {template.id === 'sign-in-split' && activeTemplate === 'sign-in-split' && (
                          <div className="mt-2 ml-4 pl-4 border-l border-black/10 py-2">
                            <p className="text-xs font-medium text-black/70 mb-1">
                              All auth states included
                            </p>
                            <p className="text-xs text-black/40 leading-relaxed">
                              Sign in, sign up, password reset, magic link, loading & error states.
                            </p>
                            <p className="text-xs text-black/40 mt-1 italic">
                              Prompt guidance included.
                </p>
              </div>
                        )}
                      </div>
                    ))}
                    
                    {/* See more dropdown */}
                    {templates.filter(t => t.project === activeProject).length > 5 && (
                      <div>
                        <button
                          onClick={() => setShowAllTemplates(!showAllTemplates)}
                          className="w-full text-left px-4 py-2 text-xs text-black/50 hover:text-black/70 transition-all flex items-center justify-between group"
                        >
                          <span>{showAllTemplates ? 'Show less' : 'See more templates'}</span>
                          <svg 
                            className={`w-3 h-3 transition-transform ${showAllTemplates ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Remaining templates with scroll */}
                        {showAllTemplates && (
                          <div className="max-h-[400px] overflow-y-auto space-y-2 mt-2 pr-2">
                            {templates.filter(t => t.project === activeProject).slice(5).map((template) => (
                              <button
                                key={template.id}
                                onClick={() => setActiveTemplate(template.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                  activeTemplate === template.id
                                    ? 'bg-black text-white'
                                    : 'text-black/70 hover:bg-black/5 hover:text-black'
                                }`}
                              >
                                {template.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Auth states info - Mobile only, below tabs */}
              {activeTemplate === 'sign-in-split' && (
                <div className="lg:hidden -mt-2 p-4 rounded-lg bg-black/[0.02] border border-black/5">
                  <p className="text-xs font-medium text-black/70 mb-1">
                    All auth states included
                  </p>
                  <p className="text-xs text-black/40 leading-relaxed">
                    Sign in, sign up, password reset, magic link, loading & error states. Prompt guidance included.
                  </p>
                </div>
              )}

              {/* Preview Panel */}
              {currentTemplate && (
                <div className="w-full">
                  <TemplatePreview
                    title={currentTemplate.title}
                    description=""
                    category={currentTemplate.category}
                    isPremium
                    price={49}
                code={currentTemplate.code}
                project={currentTemplate.project}
                templateId={currentTemplate.id}
              >
                    {currentTemplate.component}
                  </TemplatePreview>

                  {/* Full Demo Direct Link Button */}
                  <div className="mt-6 sm:mt-8">
                    <a
                      href={`/demo-minimal-calm?template=${activeTemplate}`}
                      className="group w-full relative overflow-hidden rounded-xl sm:rounded-2xl border border-black/10 bg-white p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 block"
                    >
                      {/* Animated gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/[0.02] to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative flex items-center justify-between gap-3 sm:gap-4">
                        {/* Left: Content */}
                        <div className="flex-1 text-left">
                          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-black/5 mb-2 sm:mb-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] sm:text-xs font-medium text-black/60 uppercase tracking-wider">Live Demo</span>
                          </div>
                          <h4 className="text-base sm:text-lg md:text-xl font-medium text-black/90 mb-0.5 sm:mb-1">
                            See all templates work together
                          </h4>
                          <p className="text-xs sm:text-sm text-black/50 font-light">
                            Experience the UI kit as a complete real page
                          </p>
                        </div>

                        {/* Right: Arrow Icon */}
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg 
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-0.5 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M14 5l7 7m0 0l-7 7m7-7H3" 
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            </div>
        </div>
      </div>

      {/* Two Column Info - Magazine Layout */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 md:pb-32">
          {/* Horizontal Divider */}
          <div className="w-16 h-px bg-black/10 mb-20 sm:mb-28 md:mb-32 mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-20 md:gap-24 lg:gap-32 max-w-6xl mx-auto">
              {/* Left Column: For You If */}
            <div className="space-y-8 text-center">
              <h3 className="text-2xl md:text-3xl italic font-serif text-black/90 mb-10">
                  These UI kits are for you if…
              </h3>

              <div className="space-y-6 text-base sm:text-lg text-black/70 leading-relaxed font-light">
                  <p>You're a developer who wants polished UI without hiring a designer</p>
                  <p>You're an indie founder building a SaaS or landing page</p>
                  <p>You care about clarity, UX, and conversion, not flashy visuals</p>
                </div>
              </div>

              {/* Right Column: What's Included */}
            <div className="space-y-8 text-center">
              <h3 className="text-2xl md:text-3xl italic font-serif text-black/90 mb-10">
                One purchase. All templates.
              </h3>

              <div className="space-y-6 text-base sm:text-lg text-black/70 leading-relaxed font-light">
                  <p>Real React + Tailwind components</p>
                  <p>Clean, readable code structure</p>
                  <p>Notes on usage and customization</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* How It Works - Dramatic & Artistic */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div id="how" className="pt-40 sm:pt-48 md:pt-56">
            <div className="max-w-5xl mx-auto">
              {/* Title - Centered */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed mb-8 text-black/90 text-center">
                How it works
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light text-center mb-20 sm:mb-28 md:mb-32 max-w-2xl mx-auto">
                Built to be understandable, flexible, and production-ready.
              </p>

              {/* Steps - Single Column with Dramatic Spacing */}
              <div className="space-y-20 sm:space-y-28 md:space-y-32">
                <div className="grid sm:grid-cols-[auto,1fr] gap-8 sm:gap-12 items-center">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-light text-black/10 leading-none">01</div>
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-medium text-black">Preview</h3>
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light max-w-xl">
                    Explore the UI live in your browser. Scroll, resize, and click through the components.
                  </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-[auto,1fr] gap-8 sm:gap-12 items-center">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-light text-black/10 leading-none">02</div>
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-medium text-black">Buy</h3>
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light max-w-xl">
                    Purchase the kit once. Instant access after checkout.
                  </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-[auto,1fr] gap-8 sm:gap-12 items-center">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-light text-black/10 leading-none">03</div>
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-medium text-black">Download</h3>
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light max-w-xl">
                    Get the full React + Tailwind code as a downloadable package.
                  </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-[auto,1fr] gap-8 sm:gap-12 items-center">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-light text-black/10 leading-none">04</div>
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-medium text-black">Use & adapt</h3>
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light max-w-xl">
                    Drop the components into your product and customize as needed.
                  </p>
                </div>
              </div>
              </div>
            </div>
        </div>
      </div>

      {/* CTA Section - Below How It Works */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-px bg-black/10 mb-12 sm:mb-14 mx-auto"></div>
            
            <p className="text-sm text-black/40 italic leading-relaxed mb-10">
              No design tools, no screenshots — just real code.
            </p>

            <a 
              href="https://buy.stripe.com/test_28E4gy5Wf2i37Ri4QJ4ko02"
              className="inline-block px-12 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Buy all templates — $49
            </a>
            
            <p className="text-xs text-black/40 mt-5">
              Instant download · Commercial license
            </p>
              </div>
        </div>
      </div>
    </div>
  );
}

