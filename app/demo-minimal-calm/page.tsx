'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import NavMenuMinimal from '@/marta-ui-kit/templates/navigation/NavMenuMinimal';
import HeroVideo from '@/marta-ui-kit/templates/heroes/HeroVideo';
import BenefitsStats from '@/marta-ui-kit/templates/features/BenefitsStats';
import SocialProof from '@/marta-ui-kit/templates/features/SocialProof';
import TestimonialsCards from '@/marta-ui-kit/templates/testimonials/TestimonialsCards';
import FAQAccordion from '@/marta-ui-kit/templates/faq/FAQAccordion';
import CTAHighlighted from '@/marta-ui-kit/templates/cta/CTAHighlighted';
import FooterComprehensive from '@/marta-ui-kit/templates/footers/FooterComprehensive';
import Link from 'next/link';

function DemoContent() {
  const searchParams = useSearchParams();
  const template = searchParams.get('template') || '';
  
  return (
    <>
      {/* Fixed Back Button - Top Left */}
      <Link
        href={template ? `/?t=${template}#ui-templates` : '/#ui-templates'}
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md text-black/60 text-sm font-medium hover:bg-white/60 hover:text-black transition-all duration-200 shadow-md hover:shadow-lg border border-black/10"
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Back to templates
      </Link>

      {/* Full Page Demo - Real UI Experience */}
      <NavMenuMinimal />
      <HeroVideo />
      <BenefitsStats />
      <SocialProof />
      <TestimonialsCards />
      <FAQAccordion />
      <CTAHighlighted />
      <FooterComprehensive />
    </>
  );
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-black/20 border-t-black/60 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm text-black/50">Loading demo...</p>
          </div>
        </div>
      }>
        <DemoContent />
      </Suspense>
    </div>
  );
}
