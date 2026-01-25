import { Suspense } from 'react';
import { Metadata } from 'next';
import DemoMinimalCalmClient from './DemoMinimalCalmClient';

export const metadata: Metadata = {
  title: 'Live Demo - Minimal & Calm UI Kit | ItsMarta',
  description: 'Experience all our minimal, conversion-ready UI templates working together as a complete page. See how navigation, hero, features, testimonials, and CTA sections flow seamlessly.',
  alternates: {
    canonical: 'https://itsmarta.co/demo-minimal-calm',
  },
  openGraph: {
    title: 'Live Demo - Minimal & Calm UI Kit',
    description: 'Experience all our minimal, conversion-ready UI templates working together as a complete page.',
    url: 'https://itsmarta.co/demo-minimal-calm',
    siteName: 'ItsMarta UI Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Demo - Minimal & Calm UI Kit',
    description: 'Experience all our minimal, conversion-ready UI templates working together as a complete page.',
  },
};

export default function DemoMinimalCalmPage() {
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
        <DemoMinimalCalmClient />
      </Suspense>
    </div>
  );
}
