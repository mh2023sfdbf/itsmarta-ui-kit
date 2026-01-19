import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tailwind Landing Page Components – Convert More Visitors",
  description: "Conversion-optimized Tailwind landing page components. Hero sections, pricing, testimonials, CTAs. Built for SaaS and marketing.",
  keywords: [
    "tailwind landing page",
    "landing page components",
    "tailwind hero section",
    "tailwind pricing",
    "conversion components",
  ],
  alternates: {
    canonical: "https://yourdomain.com/tailwind-landing-page-components",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/tailwind-landing-page-components",
    title: "Tailwind Landing Page Components – Convert More Visitors",
    description: "Conversion-optimized Tailwind landing page components for SaaS and marketing.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: "https://yourdomain.com/og-landing-components.png",
        width: 1200,
        height: 630,
        alt: "Tailwind landing page components preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind Landing Page Components – Convert More Visitors",
    description: "Conversion-optimized Tailwind landing page components for SaaS and marketing.",
    images: ["https://yourdomain.com/og-landing-components.png"],
  },
};

export default function TailwindLandingPageComponents() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/tailwind-landing-page-components",
        "url": "https://yourdomain.com/tailwind-landing-page-components",
        "name": "Tailwind Landing Page Components – Convert More Visitors",
        "description": "Conversion-optimized Tailwind landing page components for SaaS and marketing.",
        "isPartOf": {
          "@id": "https://yourdomain.com/#website"
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yourdomain.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Landing Page Components",
            "item": "https://yourdomain.com/tailwind-landing-page-components"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What's different about these vs generic components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Built specifically for conversion. Clear CTAs, benefit-focused copy structure, trust signals, logical flow—optimized for landing pages, not just looking good."
            }
          },
          {
            "@type": "Question",
            "name": "Can I build a complete landing page with these?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Includes everything: navigation, heroes, features, pricing, testimonials, CTAs, footers. Mix and match to build complete pages."
            }
          },
          {
            "@type": "Question",
            "name": "Do these work for both SaaS and product launches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Flexible components work for SaaS products, digital products, agencies, or any conversion-focused landing page."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://yourdomain.com/#organization",
        "name": "ItsMarta UI Kit",
        "url": "https://yourdomain.com"
      }
    ]
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero */}
        <section className="pt-20 sm:pt-24 md:pt-32 pb-12 px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic leading-[1.05] mb-8 text-black/90">
              Landing page components that convert
            </h1>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 font-light">
              Build high-converting landing pages with Tailwind components optimized for clarity, trust, and action. No more guessing at what works.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get Components
              </a>
              <Link
                href="/conversion-focused-ui"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                Learn about conversion UI
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Most landing pages don't convert
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                You build a landing page. It looks fine. But visitors bounce without signing up, buying, or even scrolling down. The design isn't the problem—it's the structure.
              </p>
              <p>
                Generic UI components don't guide visitors toward decisions. They're designed to look good in isolation, not to build trust, reduce friction, or clarify value.
              </p>
              <p>
                You need components built specifically for conversion, not just aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Conversion-first landing page sections
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                These components are designed around how visitors make decisions: clear value propositions, visible trust signals, benefit-focused messaging, and frictionless CTAs.
              </p>
              <p>
                Every section has a purpose: capture attention, build trust, answer objections, guide to action. No filler. No decoration for decoration's sake.
              </p>
              <p>
                Built for SaaS, product launches, and high-stakes marketing pages where conversion matters.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              What's included
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-10 text-base sm:text-lg leading-relaxed text-black/70">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Hero Sections</h3>
                <p>Multiple hero layouts: minimal, video background, with screenshots, split layout. Value-first headlines and clear primary CTAs.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Feature Showcases</h3>
                <p>Benefit-focused feature displays, before/after comparisons, visual proof, use case layouts.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Pricing Sections</h3>
                <p>Simple tiers, feature comparison tables, FAQ integration, strategic plan positioning.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Social Proof</h3>
                <p>Testimonial layouts, customer logos, case study previews, usage stats—displayed with editorial restraint.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">CTAs & Conversion Points</h3>
                <p>Primary CTAs, secondary options, exit-intent patterns, waitlist forms, demo request sections.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Trust Builders</h3>
                <p>Security badges, guarantees, certifications, press mentions—positioned where doubt appears.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">FAQ Sections</h3>
                <p>Accordion layouts, objection-handling structure, pre-sales answers.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Navigation & Footers</h3>
                <p>Clean navigation bars, minimal footers, sticky CTAs—supporting conversion without distraction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              When to use these
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Launching a product:</strong> Build a high-converting landing page fast without hiring a designer or conversion expert.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Improving conversion rates:</strong> Replace underperforming sections with patterns proven to work.
              </p>
              <p>
                <strong className="text-black/90 font-medium">A/B testing:</strong> Test different hero styles, pricing layouts, or CTA approaches with clean, modular components.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Client work:</strong> Ship polished landing pages for clients without reinventing conversion patterns.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Why these components convert
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Clarity over cleverness:</strong> Straightforward value propositions. No vague marketing copy.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Visible trust signals:</strong> Proof points placed where visitors hesitate—near CTAs, pricing, and forms.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Logical hierarchy:</strong> Information flows naturally. Visitors know what to read, what matters, and what to do next.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Low-friction CTAs:</strong> Primary actions are obvious. Secondary options reduce abandonment.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Mobile-first:</strong> Conversion matters on mobile too. Every component is fully responsive.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Performance-optimized:</strong> Fast load times. No heavy images or animations that slow pages down.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Who this is for
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">SaaS founders</strong> launching or improving marketing sites.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Product marketers</strong> optimizing conversion funnels.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Developers</strong> building landing pages without deep design or copywriting skills.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Agencies</strong> shipping client landing pages on tight timelines.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-black/50 mb-4">Not for you if:</h3>
              <div className="space-y-3 text-sm leading-relaxed text-black/60">
                <p>• You need heavily branded, art-directed one-off designs</p>
                <p>• You prefer page builders with drag-and-drop</p>
                <p>• You're building content sites, not conversion-focused landing pages</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Common questions
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-10 text-base sm:text-lg leading-relaxed text-black/70">
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">What's different about these vs generic components?</h3>
                <p>Built specifically for conversion. Clear CTAs, benefit-focused copy structure, trust signals, logical flow—optimized for landing pages, not just looking good.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I build a complete landing page with these?</h3>
                <p>Yes. Includes everything: navigation, heroes, features, pricing, testimonials, CTAs, footers. Mix and match to build complete pages.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Do these work for both SaaS and product launches?</h3>
                <p>Yes. Flexible components work for SaaS products, digital products, agencies, or any conversion-focused landing page.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Do I need to write my own copy?</h3>
                <p>Yes, but the structure does most of the work. Copy placeholders follow conversion principles—adapt to your product.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I A/B test different component variations?</h3>
                <p>Yes. Multiple variations included (hero styles, pricing layouts, CTA patterns). Easy to swap and test.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Will these work with my analytics and conversion tracking?</h3>
                <p>Yes. Standard HTML structure. Easy to add tracking to buttons, forms, and sections.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="pt-20 sm:pt-28 md:pt-32 pb-24 px-6 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-serif leading-[1.1] mb-10 text-black/90 tracking-tight">
              Start converting more visitors
            </h2>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 mb-12 font-light">
              Get landing page components optimized for trust, clarity, and action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get Landing Components
              </a>
              <Link
                href="/tailwind-ui-templates"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                View full page templates
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
