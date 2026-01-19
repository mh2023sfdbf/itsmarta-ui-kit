import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beautiful SaaS UI That Works – Tailwind Components",
  description: "Beautiful doesn't mean fragile. Production-ready SaaS UI that's polished, maintainable, and built for scale. Tailwind CSS.",
  keywords: [
    "beautiful saas ui",
    "saas design",
    "tailwind components",
    "modern ui design",
    "saas interface",
  ],
  alternates: {
    canonical: "https://yourdomain.com/beautiful-saas-ui",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/beautiful-saas-ui",
    title: "Beautiful SaaS UI That Works – Tailwind Components",
    description: "Beautiful doesn't mean fragile. Production-ready SaaS UI that's polished, maintainable, and built for scale.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: "https://yourdomain.com/og-beautiful-saas.png",
        width: 1200,
        height: 630,
        alt: "Beautiful SaaS UI components preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beautiful SaaS UI That Works – Tailwind Components",
    description: "Beautiful doesn't mean fragile. Production-ready SaaS UI that's polished, maintainable, and built for scale.",
    images: ["https://yourdomain.com/og-beautiful-saas.png"],
  },
};

export default function BeautifulSaaSUI() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/beautiful-saas-ui",
        "url": "https://yourdomain.com/beautiful-saas-ui",
        "name": "Beautiful SaaS UI That Works – Tailwind Components",
        "description": "Beautiful doesn't mean fragile. Production-ready SaaS UI that's polished, maintainable, and built for scale.",
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
            "name": "Beautiful SaaS UI",
            "item": "https://yourdomain.com/beautiful-saas-ui"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this just design inspiration or actual code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Actual production code. Copy, paste, customize. Not screenshots—real Tailwind components you can use immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Will beautiful UI slow down my site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. These components are performance-aware—no heavy animations or unnecessary dependencies. Beautiful and fast."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize the aesthetic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Clean Tailwind utilities make it easy to adjust colors, spacing, and typography while keeping the structural quality."
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
              Beautiful SaaS UI that actually ships
            </h1>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 font-light">
              Polished, professional, production-ready. UI that looks as good in your product as it does in screenshots—without the fragility.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get the Components
              </a>
              <Link
                href="/tailwind-ui-kit"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                Preview UI Kit
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Beautiful UI is hard to maintain
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                You've seen gorgeous UI in Dribbble shots and design showcases. But when you try to build it in your SaaS, it either breaks on mobile, becomes unmaintainable, or just doesn't feel right in production.
              </p>
              <p>
                Most "beautiful" UI is designed for screenshots, not real products. It's not responsive, not accessible, and not built to scale as your product grows.
              </p>
              <p>
                You want UI that looks professional without the maintenance burden.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Polish with purpose
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                This UI kit prioritizes calm, editorial aesthetics—the kind that feels premium without being loud. Generous white space, thoughtful typography, subtle hierarchy.
              </p>
              <p>
                Every component is designed to be beautiful *and* functional. No over-engineered animations. No fragile layouts. No dependencies that break six months later.
              </p>
              <p>
                Built to look polished on day one and stay that way as your product evolves.
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
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Landing Pages</h3>
                <p>Editorial hero sections, minimal feature showcases, elegant testimonial layouts—designed with magazine-quality polish.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Dashboard Layouts</h3>
                <p>Clean navigation, spacious content areas, professional data displays—functional and refined.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Forms & Inputs</h3>
                <p>Polished form fields, clear validation states, smart focus treatments—usable and beautiful.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Modals & Dialogs</h3>
                <p>Tasteful overlays, calm animations, clear hierarchy—professional without distraction.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Empty States & Errors</h3>
                <p>Thoughtful messaging, elegant illustrations, helpful guidance—graceful even when things go wrong.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              When this matters
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Premium positioning:</strong> Your product targets users who expect quality and polish at every touchpoint.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Competitive differentiation:</strong> Stand out in crowded markets with UI that feels more considered than competitors.
              </p>
              <p>
                <strong className="text-black/90 font-medium">First impressions:</strong> Make a strong impression with prospects evaluating your product against alternatives.
              </p>
              <p>
                <strong className="text-black/90 font-medium">User retention:</strong> Beautiful, calm UI reduces cognitive load and makes your product more pleasant to use daily.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Design principles that scale
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Calm over flashy:</strong> Subtle sophistication instead of loud gradients and aggressive animations.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Space over density:</strong> Generous whitespace and breathing room—like editorial design, not cluttered dashboards.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Hierarchy over decoration:</strong> Typography and layout do the heavy lifting, not unnecessary visual elements.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Performance-aware:</strong> Beautiful doesn't mean heavy. Fast load times, minimal dependencies, clean code.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Mobile-first responsive:</strong> Looks great on every device, not just retina laptops.
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
                <strong className="text-black/90 font-medium">Founders</strong> who care about craft and want their product to feel premium.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Teams</strong> without dedicated designers but who refuse to ship ugly software.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Designers</strong> who want a high-quality foundation to build on instead of starting from scratch.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Product builders</strong> who understand aesthetics matter for trust and retention.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-black/50 mb-4">Not for you if:</h3>
              <div className="space-y-3 text-sm leading-relaxed text-black/60">
                <p>• You prefer loud, trendy design over timeless polish</p>
                <p>• You need heavily branded, maximalist aesthetics</p>
                <p>• You're building internal tools where UI doesn't matter</p>
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
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Is this just design inspiration or actual code?</h3>
                <p>Actual production code. Copy, paste, customize. Not screenshots—real Tailwind components you can use immediately.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Will beautiful UI slow down my site?</h3>
                <p>No. These components are performance-aware—no heavy animations or unnecessary dependencies. Beautiful and fast.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I customize the aesthetic?</h3>
                <p>Absolutely. Clean Tailwind utilities make it easy to adjust colors, spacing, and typography while keeping the structural quality.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Is this trendy design that will look dated quickly?</h3>
                <p>No. The aesthetic is inspired by editorial and magazine design—timeless principles, not fleeting trends.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Will this work for technical/B2B products?</h3>
                <p>Yes. Clean, professional UI works across contexts. You can make it more or less formal with simple adjustments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="pt-20 sm:pt-28 md:pt-32 pb-24 px-6 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-serif leading-[1.1] mb-10 text-black/90 tracking-tight">
              Ship beautiful UI today
            </h2>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 mb-12 font-light">
              Get production-ready components that look polished and stay maintainable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Download UI Kit
              </a>
              <Link
                href="/saas-ui-kit"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                View SaaS components
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
