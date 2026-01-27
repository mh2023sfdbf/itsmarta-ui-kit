'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Navigation
import NavMenuMinimal from '@/marta-ui-kit/templates/navigation/NavMenuMinimal';

// Heroes
import HeroVideo from '@/marta-ui-kit/templates/heroes/HeroVideo';

// Features
import SocialProof from '@/marta-ui-kit/templates/features/SocialProof';
import ThreeColumnFeatures from '@/marta-ui-kit/templates/features/ThreeColumnFeatures';
import GridCards from '@/marta-ui-kit/templates/features/GridCards';

// Content
import VideoContentLayout from '@/marta-ui-kit/templates/features/VideoContentLayout';
import TableComparison from '@/marta-ui-kit/templates/features/TableComparison';

// Social Proof
import TestimonialsCards from '@/marta-ui-kit/templates/testimonials/TestimonialsCards';

// Pricing
import PricingCards from '@/marta-ui-kit/templates/pricing/PricingCards';

// Dashboard
import StatsCards from '@/marta-ui-kit/templates/dashboard/StatsCards';
import DashboardOverview from '@/marta-ui-kit/templates/dashboard/DashboardOverview';

// Support
import FAQAccordion from '@/marta-ui-kit/templates/faq/FAQAccordion';

// Footer
import FooterComprehensive from '@/marta-ui-kit/templates/footers/FooterComprehensive';

export default function DemoMinimalCalmClient() {
  const searchParams = useSearchParams();
  const template = searchParams.get('template') || '';
  
  return (
    <>
      {/* Fixed Back Button - Top Left */}
      <Link
        href={template ? `/?t=${template}#ui-templates` : '/#ui-templates'}
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-black/70 text-sm font-medium hover:bg-white hover:text-black transition-all duration-200 shadow-lg hover:shadow-xl border border-black/5"
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

      {/* Full Page Demo - All Minimal & Calm Templates */}
      <NavMenuMinimal />
      <HeroVideo />
      <SocialProof />
      <ThreeColumnFeatures />
      <VideoContentLayout />
      <GridCards />
      <TableComparison />
      <TestimonialsCards />
      <StatsCards />
      <DashboardOverview />
      <PricingCards />
      <FAQAccordion />
      <FooterComprehensive />
    </>
  );
}
