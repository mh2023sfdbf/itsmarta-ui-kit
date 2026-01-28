'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Auth
import SignInSplit from '@/marta-ui-kit/templates/auth/SignInSplit';

// Navigation
import NavMenuMinimal from '@/marta-ui-kit/templates/navigation/NavMenuMinimal';

// Heroes
import HeroVideo from '@/marta-ui-kit/templates/heroes/HeroVideo';

// Features
import SocialProof from '@/marta-ui-kit/templates/features/SocialProof';
import VideoContentLayout from '@/marta-ui-kit/templates/features/VideoContentLayout';
import ThreeColumnFeatures from '@/marta-ui-kit/templates/features/ThreeColumnFeatures';
import GridCards from '@/marta-ui-kit/templates/features/GridCards';

// Content
import TableComparison from '@/marta-ui-kit/templates/features/TableComparison';

// Social Proof
import TestimonialsCards from '@/marta-ui-kit/templates/testimonials/TestimonialsCards';

// Pricing
import PricingCards from '@/marta-ui-kit/templates/pricing/PricingCards';

// Dashboard
import StatsCards from '@/marta-ui-kit/templates/dashboard/StatsCards';
import DashboardOverview from '@/marta-ui-kit/templates/dashboard/DashboardOverview';
import EmptyState from '@/marta-ui-kit/templates/dashboard/EmptyState';
import LoadingState from '@/marta-ui-kit/templates/dashboard/LoadingState';
import ErrorState from '@/marta-ui-kit/templates/dashboard/ErrorState';

// Support
import FAQAccordion from '@/marta-ui-kit/templates/faq/FAQAccordion';

// Footer
import FooterComprehensive from '@/marta-ui-kit/templates/footers/FooterComprehensive';

export default function DemoMinimalCalmClient() {
  const searchParams = useSearchParams();
  const template = searchParams.get('template') || '';
  
  return (
    <>
      {/* Fixed Back Button - Minimal Icon Only */}
      <Link
        href={template ? `/?t=${template}#ui-templates` : '/#ui-templates'}
        className="fixed top-5 left-5 z-50 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-black/60 hover:bg-white hover:text-black transition-all duration-200 border border-black/[0.08] hover:border-black/[0.12] group"
        aria-label="Back to templates"
      >
        <svg 
          className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" 
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
      </Link>

      {/* Full Page Demo - All Minimal & Calm Templates */}
      {/* Marketing & Landing Page Section */}
      <NavMenuMinimal />
      <HeroVideo />
      <SocialProof />
      <VideoContentLayout />
      <ThreeColumnFeatures />
      <GridCards />
      <TestimonialsCards />
      <TableComparison />
      <PricingCards />
      <FAQAccordion />
      
      {/* Dashboard & Application Section */}
      <StatsCards />
      <DashboardOverview />
      <EmptyState />
      <LoadingState />
      <ErrorState />
      
      {/* Auth Section */}
      <SignInSplit />
      
      {/* Footer */}
      <FooterComprehensive />
    </>
  );
}
