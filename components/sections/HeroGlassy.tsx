'use client';

import { useState, useEffect } from 'react';
import TemplatePreview from '@/components/showcase/TemplatePreview';
import HeroModern from '@/marta-ui-kit/templates/heroes/HeroModern';
import HeroMinimal from '@/marta-ui-kit/templates/heroes/HeroMinimal';
import FeaturesGlass from '@/marta-ui-kit/templates/features/FeaturesGlass';
import CTAGradient from '@/marta-ui-kit/templates/cta/CTAGradient';
import PulsingLogo from '@/marta-ui-kit/templates/loaders/PulsingLogo';
import SignInSplit from '@/marta-ui-kit/templates/auth/SignInSplit';
import FooterComprehensive from '@/marta-ui-kit/templates/footers/FooterComprehensive';

export default function HeroGlassy() {
  const [activeTemplate, setActiveTemplate] = useState('hero-modern');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Card carousel data
  const carouselCards = [
    {
      title: "Hero Modern",
      category: "Hero",
      gradient: "from-indigo-500/90 to-purple-600/90",
      preview: (
        <div className="relative h-full p-10 md:p-16 flex items-center justify-center">
          <div className="text-center space-y-5">
            <div className="text-sm font-medium text-white/60 uppercase tracking-wider">New Release</div>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Beautiful UI</h3>
            <p className="text-lg text-white/80">Hand-crafted components</p>
            <button className="mt-6 px-8 py-3 bg-white text-black rounded-full text-base font-medium">
              Get Started
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Pricing Table",
      category: "Pricing",
      gradient: "from-orange-500/90 to-pink-600/90",
      preview: (
        <div className="relative h-full p-10 md:p-16 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 w-full max-w-sm">
            <div className="text-white/60 text-sm uppercase tracking-wider mb-3">Pro</div>
            <div className="text-5xl font-bold text-white mb-2">$29</div>
            <div className="text-white/70 text-base mb-6">per month</div>
            <div className="space-y-3 text-base text-white/80">
              <div>✓ All features</div>
              <div>✓ Priority support</div>
              <div>✓ Updates included</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Feature Grid",
      category: "Features",
      gradient: "from-emerald-500/90 to-teal-600/90",
      preview: (
        <div className="relative h-full p-10 md:p-16 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {['⚡', '🎨', '📱', '🔒'].map((emoji, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                <div className="text-4xl">{emoji}</div>
                <div className="text-sm text-white/80">Feature {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Sign In Form",
      category: "Auth",
      gradient: "from-rose-500/90 to-pink-600/90",
      preview: (
        <div className="relative h-full p-10 md:p-16 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 w-full max-w-sm space-y-4">
            <h3 className="text-3xl font-bold text-white mb-6">Sign in</h3>
            <div className="space-y-3">
              <div className="h-12 bg-white/20 rounded-xl"></div>
              <div className="h-12 bg-white/20 rounded-xl"></div>
              <button className="w-full h-12 bg-white text-black rounded-xl font-medium mt-4">
                Continue
              </button>
            </div>
          </div>
        </div>
      )
    },
  ];

  // Auto-scroll conveyor belt
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % carouselCards.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [carouselCards.length]);

  const templates = [
    {
      id: 'hero-modern',
      title: 'Hero Modern',
      category: 'Heroes',
      component: <HeroModern />,
      code: `export default function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 
          bg-gradient-to-br from-purple-400/30 to-pink-400/30 
          rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <h1 className="text-8xl font-bold">
          <span className="bg-gradient-to-r from-indigo-600 
            to-purple-600 bg-clip-text text-transparent">
            Beautiful UI
          </span>
        </h1>
      </div>
    </section>
  );
}`
    },
    {
      id: 'hero-minimal',
      title: 'Hero Minimal',
      category: 'Heroes',
      component: <HeroMinimal />,
      code: `export default function HeroMinimal() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-9xl font-bold tracking-tighter">
          <span className="text-gray-900">Design</span>
          <br />
          <span className="text-gray-300">Simplified</span>
        </h1>
      </div>
    </section>
  );
}`
    },
    {
      id: 'features-glass',
      title: 'Features Glass',
      category: 'Features',
      component: <FeaturesGlass />,
      code: `export default function FeaturesGlass() {
  const features = [
    { icon: "⚡", title: "Lightning Fast" },
    { icon: "🎨", title: "Fully Customizable" },
  ];
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div className="backdrop-blur-xl bg-white/40 rounded-3xl p-8">
              {feature.icon} {feature.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`
    },
    {
      id: 'cta-gradient',
      title: 'CTA Gradient',
      category: 'CTA',
      component: <CTAGradient />,
      code: `export default function CTAGradient() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br 
        from-indigo-600 via-purple-600 to-pink-600" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12">
          <h2 className="text-6xl font-bold text-white mb-6">
            Ready to build something amazing?
          </h2>
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
      id: 'sign-in-split',
      title: 'Sign In Split',
      category: 'Auth',
      component: <SignInSplit />,
      code: `export default function SignInSplit() {
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
              <a 
                href="" 
                className="font-heading text-sm sm:text-base rounded-full cursor-pointer hover:ring-2 ring-2 ring-gray-700 hover:ring-gray-500 mx-auto mb-4 flex items-center justify-center p-2 md:w-2/3"
              >
                <img className="w-5 h-5 mr-3" src={placeholder} alt="Google logo"/>
                <span>Sign in with Google</span>
              </a>

              <div className="flex items-center justify-center mb-6">
                <div className="border-t border-coolGray-300 flex-grow mr-4"></div>
                <span className="text-gray-400 text-xs">or</span>
                <div className="border-t border-coolGray-300 flex-grow ml-4"></div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="email">
                  Email
                </label>
                <input 
                  id="email" 
                  className="block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-50" 
                  type="email" 
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="password">
                  Password
                </label>
                <input 
                  id="password" 
                  className="block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-50" 
                  type="password" 
                  placeholder="************"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="w-full md:w-auto mt-1">
                  <a className="inline-block text-xs text-pink-500 hover:text-pink-600" href="">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <a 
                className="font-heading block py-2 px-5 text-sm sm:text-base rounded-full cursor-pointer font-heading hover:ring-2 ring-2 ring-gray-700 hover:ring-gray-500 text-center mx-auto mb-4 w-2/3" 
                href=""
              >
                Sign In
              </a>
              
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
          </div>
        </div>
      </div>

      {/* Full Width Conveyor Belt - No Padding */}
      <div className="relative w-full overflow-hidden py-8">
        <div 
          className="flex gap-6 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${(currentCardIndex * 100) / carouselCards.length}%)`
          }}
        >
          {/* Cards - duplicate for infinite loop */}
          {[...carouselCards, ...carouselCards].map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[38vw]"
            >
              <div className="relative aspect-[4/5] rounded-none overflow-hidden bg-gray-50 border border-black/5">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}>
                  {card.preview}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs with Padding */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-12">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href=""
            className="inline-flex items-center gap-2 text-sm text-black hover:text-black/60 transition-colors group"
          >
            <span>View all templates</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <button className="inline-flex items-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors">
            Buy the code
          </button>
        </div>
      </div>

      {/* Trust Section - Founder Note */}
      <div className="pt-12 sm:pt-16 md:pt-20 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
             <div className="max-w-4xl mx-auto text-center px-6 md:px-16 lg:px-32">
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

      {/* Editorial Opening Statement */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="pt-20 sm:pt-28 md:pt-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Large statement */}
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-black/90 tracking-tight">
                  Calm, conversion-ready Tailwind components I use in real SaaS products.
                </p>
              </div>
              
              {/* Right: Supporting text */}
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-black/70">
                  See the UI running in your browser before you buy the code.
                </p>
                
                <p className="text-base leading-relaxed text-black/60">
                  For developers, indie founders, and small SaaS teams who want design taste without the design process.
                </p>

                <div className="flex flex-col gap-3 pt-4">
                  <a
                    href=""
                    className="inline-flex items-center text-base font-medium text-black hover:text-black/70 transition-colors"
                  >
                    Make a stunning first impression →
                  </a>

                  <a
                    href=""
                    className="inline-flex items-center text-base font-medium text-black/50 hover:text-black transition-colors"
                  >
                    Get All Templates
                  </a>
                </div>

                <p className="text-xs text-black/40 pt-2">
                  React · Tailwind · TypeScript · Instant download
                </p>
              </div>
            </div>
        </div>
      </div>

      {/* For Who + What's Included - Combined Editorial Section */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="pt-28 sm:pt-32 md:pt-40">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-24">
              {/* Left Column: For You If */}
              <div>
                <h2 className="text-xl font-medium tracking-tight text-black/90 mb-8">
                  These UI kits are for you if…
                </h2>

                <div className="space-y-4 text-black/70 leading-relaxed">
                  <p>You're a developer who wants polished UI without hiring a designer</p>
                  <p>You're an indie founder building a SaaS or landing page</p>
                  <p>You care about clarity, UX, and conversion, not flashy visuals</p>
                </div>

                <p className="mt-8 text-sm text-black/40 italic">
                  Not ideal for marketing-heavy websites or one-off visual concepts.
                </p>
              </div>

              {/* Right Column: What's Included */}
              <div>
                <h2 className="text-xl font-medium tracking-tight text-black/90 mb-8">
                  Each kit includes:
                </h2>

                <div className="space-y-4 text-black/70 leading-relaxed">
                  <p>Real React + Tailwind components</p>
                  <p>A live preview environment</p>
                  <p>Clean, readable code structure</p>
                  <p>Notes on usage and customization</p>
                </div>

                <p className="mt-8 text-sm text-black/40 italic">
                  No design tools, no screenshots — just real code.
                </p>
              </div>
            </div>
        </div>
      </div>

      {/* How It Works - Minimal Editorial */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div id="how" className="pt-28 sm:pt-32 md:pt-40">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-black/90 mb-12">
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

      {/* Template Showcase with Switcher */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="pt-20 sm:pt-24 md:pt-28">
            <div className="max-w-7xl">
              {/* Title and Intro */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed mb-6 text-black/90">
                  UI Templates
                </h2>
                <p className="text-sm sm:text-base text-black/60 font-light max-w-2xl leading-relaxed">
                  Ready-to-use sections and flows from real SaaS products.
                  <br />
                  Preview them live, then download the code.
                </p>
              </div>

              {/* Template Switcher Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {templates.map((template) => (
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
                    price={29}
                    code={currentTemplate.code}
                  >
                    {currentTemplate.component}
                  </TemplatePreview>
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

