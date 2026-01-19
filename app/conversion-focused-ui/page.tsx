import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conversion-Focused UI Components for SaaS Products",
  description: "UI components designed to convert. Built on user psychology, tested in production, ready for your SaaS. Tailwind CSS + React.",
  keywords: [
    "conversion focused ui",
    "saas conversion",
    "ui components",
    "conversion optimization",
    "tailwind ui",
  ],
  alternates: {
    canonical: "https://yourdomain.com/conversion-focused-ui",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/conversion-focused-ui",
    title: "Conversion-Focused UI Components for SaaS Products",
    description: "UI components designed to convert. Built on user psychology, tested in production.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: "https://yourdomain.com/og-conversion-ui.png",
        width: 1200,
        height: 630,
        alt: "Conversion-focused UI components preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion-Focused UI Components for SaaS Products",
    description: "UI components designed to convert. Built on user psychology, tested in production.",
    images: ["https://yourdomain.com/og-conversion-ui.png"],
  },
};

export default function ConversionFocusedUI() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/conversion-focused-ui",
        "url": "https://yourdomain.com/conversion-focused-ui",
        "name": "Conversion-Focused UI Components for SaaS Products",
        "description": "UI components designed to convert. Built on user psychology, tested in production.",
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
            "name": "Conversion-Focused UI",
            "item": "https://yourdomain.com/conversion-focused-ui"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes UI 'conversion-focused'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It reduces friction, guides decisions, and builds trust—without manipulation. Clear CTAs, logical hierarchy, and psychological safety built into every component."
            }
          },
          {
            "@type": "Question",
            "name": "Will this feel manipulative or pushy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Conversion-focused doesn't mean dark patterns. These components respect users while optimizing for clarity and action."
            }
          },
          {
            "@type": "Question",
            "name": "Can I A/B test with these components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Clean code makes it easy to test variations. Many components include alternative layouts for testing."
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
              UI designed to convert
            </h1>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 font-light">
              Reduce friction. Guide decisions. Build trust. Components built on user psychology and tested in real SaaS products.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get Components
              </a>
              <Link
                href="/saas-ui-kit"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                View Full UI Kit
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Good UI doesn't automatically convert
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                Your landing page looks clean. Your app is functional. But users drop off at key moments—sign-up, upgrade, feature adoption.
              </p>
              <p>
                Most UI components are designed to look good in screenshots, not to guide real users through real decisions. They're missing the psychological structure that reduces hesitation and builds confidence.
              </p>
              <p>
                You end up with beautiful pages that don't move the metrics that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Psychology meets production code
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                These components are designed around how users actually make decisions: clear value propositions, visible trust signals, logical information hierarchy, and frictionless paths to action.
              </p>
              <p>
                No dark patterns. No manipulation. Just thoughtful structure that respects users while optimizing for conversion.
              </p>
              <p>
                Built by a founder who understands both user psychology and shipping real products.
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
                <p>Value-first headlines, benefit-driven copy hierarchy, clear primary CTAs with low-friction secondary options.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Pricing Tables</h3>
                <p>Strategic plan positioning, feature comparison clarity, upgrade nudges that don't feel pushy.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Sign-up Flows</h3>
                <p>Minimal friction, progressive disclosure, trust signals at decision points.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Feature Showcases</h3>
                <p>Outcome-focused layouts, visual proof, clear use case messaging.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">CTAs & Prompts</h3>
                <p>Action-oriented microcopy, contextual upgrade prompts, exit-intent patterns that work.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Social Proof</h3>
                <p>Testimonial layouts, customer logos, usage stats—displayed with editorial restraint.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Where this makes a difference
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Low sign-up conversion:</strong> Replace generic forms with flows that reduce hesitation and build trust.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Weak upgrade rates:</strong> Use strategic pricing layouts and contextual prompts that guide without pressuring.
              </p>
              <p>
                <strong className="text-black/90 font-medium">High landing page bounce:</strong> Deploy hero sections that immediately clarify value and guide next steps.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Low feature adoption:</strong> Showcase benefits with outcome-focused layouts that connect features to real user goals.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Built on principles, not tricks
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Reduces cognitive load:</strong> Clear hierarchy, minimal options at key moments, logical flow.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Builds trust visually:</strong> Professional polish, consistent structure, visible proof points.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Guides without forcing:</strong> Strong CTAs with low-friction alternatives. No dark patterns.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Respects user agency:</strong> Clear information, honest positioning, no hidden costs or surprise steps.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Tested in production:</strong> These patterns have converted in real SaaS products with real users.
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
                <strong className="text-black/90 font-medium">Founders</strong> optimizing conversion at every stage of the funnel.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Growth teams</strong> running experiments and improving metrics.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Product designers</strong> who understand psychology matters as much as aesthetics.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Developers</strong> implementing conversion improvements without starting from scratch.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-black/50 mb-4">Not for you if:</h3>
              <div className="space-y-3 text-sm leading-relaxed text-black/60">
                <p>• You only care about aesthetics, not metrics</p>
                <p>• You're comfortable with dark patterns and manipulation</p>
                <p>• You need purely experimental or artistic UI</p>
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
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">What makes UI "conversion-focused"?</h3>
                <p>It reduces friction, guides decisions, and builds trust—without manipulation. Clear CTAs, logical hierarchy, and psychological safety built into every component.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Will this feel manipulative or pushy?</h3>
                <p>No. Conversion-focused doesn't mean dark patterns. These components respect users while optimizing for clarity and action.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I A/B test with these components?</h3>
                <p>Yes. Clean code makes it easy to test variations. Many components include alternative layouts for testing.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Do I need copywriting skills?</h3>
                <p>The structure does most of the work. Copy placeholders follow conversion principles—you just adapt to your product.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Will this work for B2B SaaS?</h3>
                <p>Yes. Built for both B2B and B2C contexts. Longer sales cycles just need different trust signals—these components accommodate both.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="pt-20 sm:pt-28 md:pt-32 pb-24 px-6 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-serif leading-[1.1] mb-10 text-black/90 tracking-tight">
              Start converting better
            </h2>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 mb-12 font-light">
              Get UI components designed around how users actually make decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get UI Components
              </a>
              <Link
                href="/tailwind-saas-components"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                Browse all components
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
