import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SaaS UI Kit – Production-Ready Tailwind Components",
  description: "Ship faster with conversion-focused UI components built for real SaaS products. Tailwind CSS, React, production-tested.",
  keywords: [
    "saas ui kit",
    "saas components",
    "tailwind saas",
    "react ui kit",
    "production ui components",
  ],
  alternates: {
    canonical: "https://yourdomain.com/saas-ui-kit",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/saas-ui-kit",
    title: "SaaS UI Kit – Production-Ready Tailwind Components",
    description: "Ship faster with conversion-focused UI components built for real SaaS products.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: "https://yourdomain.com/og-saas-ui-kit.png",
        width: 1200,
        height: 630,
        alt: "SaaS UI Kit components preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS UI Kit – Production-Ready Tailwind Components",
    description: "Ship faster with conversion-focused UI components built for real SaaS products.",
    images: ["https://yourdomain.com/og-saas-ui-kit.png"],
  },
};

export default function SaaSUIKit() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/saas-ui-kit",
        "url": "https://yourdomain.com/saas-ui-kit",
        "name": "SaaS UI Kit – Production-Ready Tailwind Components",
        "description": "Ship faster with conversion-focused UI components built for real SaaS products.",
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
            "name": "SaaS UI Kit",
            "item": "https://yourdomain.com/saas-ui-kit"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "SaaS UI Kit",
        "description": "Production-ready Tailwind CSS components for SaaS applications",
        "image": "https://yourdomain.com/og-saas-ui-kit.png",
        "brand": {
          "@type": "Brand",
          "name": "ItsMarta UI Kit"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "url": "https://yourdomain.com/saas-ui-kit"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this production-ready or just demo UI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every component is built for production use. Fully accessible, responsive, and tested in real SaaS environments."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need design skills to use this?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Copy, paste, customize. Built for developers who want great UI without starting from scratch."
            }
          },
          {
            "@type": "Question",
            "name": "Is this just landing pages or full SaaS UI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Full SaaS coverage: authentication flows, dashboards, settings, billing, onboarding, and conversion-focused landing pages."
            }
          },
          {
            "@type": "Question",
            "name": "What if I need to customize heavily?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That's the point. Clean Tailwind code, no proprietary CSS. Full control over every component."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://yourdomain.com/#organization",
        "name": "ItsMarta UI Kit",
        "url": "https://yourdomain.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/logo.png"
        }
      }
    ]
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero / H1 */}
        <section className="pt-20 sm:pt-24 md:pt-32 pb-12 px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic leading-[1.05] mb-8 text-black/90 tracking-tight">
              SaaS UI Kit for founders who ship
            </h1>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 font-light">
              Stop designing from scratch. Use production-ready Tailwind components built for real SaaS products—conversion-focused, maintainable, and ready to scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full font-medium"
              >
                Get the UI Kit
              </a>
              <Link
                href="/tailwind-ui-kit"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                Browse Components
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Building UI shouldn't slow you down
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                You're a founder or developer shipping a SaaS product. You know what needs to be built. But every new page means choosing layouts, fixing spacing, making it responsive, and hoping it converts.
              </p>
              <p>
                Most UI kits are either too basic (just buttons and cards) or too opinionated (locked into someone else's design system). You end up spending more time adapting than building.
              </p>
              <p>
                You need UI that works out of the box but doesn't lock you in.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Components built for real SaaS
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                This UI kit focuses on what SaaS products actually need: clear onboarding flows, conversion-focused landing pages, intuitive settings panels, and dashboard layouts that scale.
              </p>
              <p>
                Designed with product psychology in mind—components that reduce friction, guide users, and convert without manipulation.
              </p>
              <p>
                Clean Tailwind code. No dependencies. Full control. Copy, customize, ship.
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
            <div className="w-12 h-px bg-black/10 mb-8"></div>
            <div className="space-y-10 text-base sm:text-lg leading-relaxed text-black/70 font-light">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Landing Pages</h3>
                <p className="text-lg">Hero sections, feature showcases, pricing tables, testimonials, and CTAs that convert.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Authentication</h3>
                <p className="text-lg">Sign-in, sign-up, password reset, magic links—clean and conversion-focused.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Dashboard & App UI</h3>
                <p className="text-lg">Layouts, navigation, data tables, forms, modals, and settings panels.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Onboarding & Guides</h3>
                <p className="text-lg">Step-by-step flows, progress indicators, tooltips, and in-app guidance.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Billing & Upgrades</h3>
                <p className="text-lg">Upgrade prompts, plan comparisons, usage meters, and payment flows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Built for real scenarios
            </h2>
            <div className="w-12 h-px bg-black/10 mb-8"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70 font-light">
              <p>
                <strong className="text-black/90 font-medium">Launching a new SaaS product:</strong> Ship a polished marketing site and app UI without hiring a designer.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Rebuilding your landing page:</strong> Replace low-converting pages with battle-tested patterns.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Improving onboarding flow:</strong> Reduce drop-off with clear, guided UI components.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Scaling your product:</strong> Maintain design consistency as your team and features grow.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Why this works in production
            </h2>
            <div className="w-12 h-px bg-black/10 mb-8"></div>
            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90">No framework lock-in:</strong> Pure Tailwind CSS. Works with React, Next.js, or any other framework.
              </p>
              <p>
                <strong className="text-black/90">Accessible by default:</strong> Proper ARIA labels, keyboard navigation, and focus states.
              </p>
              <p>
                <strong className="text-black/90">Mobile-first responsive:</strong> Every component tested on real devices, not just browser windows.
              </p>
              <p>
                <strong className="text-black/90">Performance-aware:</strong> No heavy dependencies. Fast load times. Clean markup.
              </p>
              <p>
                <strong className="text-black/90">Maintainable:</strong> Clear structure. Easy to customize. Scales with your product.
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
            <div className="w-12 h-px bg-black/10 mb-8"></div>
            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90">SaaS founders</strong> who need to ship fast without sacrificing quality.
              </p>
              <p>
                <strong className="text-black/90">Full-stack developers</strong> building products end-to-end.
              </p>
              <p>
                <strong className="text-black/90">Small teams</strong> without dedicated designers but who care about UX.
              </p>
              <p>
                <strong className="text-black/90">Agencies</strong> shipping client projects with tight timelines.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-black/50 mb-4">Not for you if:</h3>
              <div className="space-y-3 text-sm leading-relaxed text-black/60">
                <p>• You need a fully custom design system from scratch</p>
                <p>• You prefer component libraries with JavaScript APIs (this is copy/paste)</p>
                <p>• You're looking for drag-and-drop page builders</p>
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
            <div className="w-12 h-px bg-black/10 mb-8"></div>
            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-black/70">
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Is this production-ready or just demo UI?</h3>
                <p>Every component is built for production use. Fully accessible, responsive, and tested in real SaaS environments.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Do I need design skills to use this?</h3>
                <p>No. Copy, paste, customize. Built for developers who want great UI without starting from scratch.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Is this just landing pages or full SaaS UI?</h3>
                <p>Full SaaS coverage: authentication flows, dashboards, settings, billing, onboarding, and conversion-focused landing pages.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">What if I need to customize heavily?</h3>
                <p>That's the point. Clean Tailwind code, no proprietary CSS. Full control over every component.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="pt-20 sm:pt-28 md:pt-32 pb-24 px-6 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-serif leading-[1.1] mb-10 text-black/90 tracking-tight">
              Ship faster with better UI
            </h2>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 mb-12 font-light">
              Get instant access to production-ready components built for SaaS.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full font-medium"
              >
                Download UI Kit
              </a>
              <Link
                href="/conversion-focused-ui"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                See conversion patterns
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
