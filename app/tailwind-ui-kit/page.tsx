import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tailwind UI Kit – Production-Ready React Components",
  description: "Complete Tailwind CSS UI kit for modern web apps. Copy, paste, ship. Built for React, Next.js, and production use.",
  keywords: [
    "tailwind ui kit",
    "tailwind components",
    "tailwind css",
    "react components",
    "ui kit tailwind",
  ],
  alternates: {
    canonical: "https://yourdomain.com/tailwind-ui-kit",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/tailwind-ui-kit",
    title: "Tailwind UI Kit – Production-Ready React Components",
    description: "Complete Tailwind CSS UI kit for modern web apps. Copy, paste, ship.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: "https://yourdomain.com/og-tailwind-ui-kit.png",
        width: 1200,
        height: 630,
        alt: "Tailwind UI Kit components preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind UI Kit – Production-Ready React Components",
    description: "Complete Tailwind CSS UI kit for modern web apps. Copy, paste, ship.",
    images: ["https://yourdomain.com/og-tailwind-ui-kit.png"],
  },
};

export default function TailwindUIKit() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/tailwind-ui-kit",
        "url": "https://yourdomain.com/tailwind-ui-kit",
        "name": "Tailwind UI Kit – Production-Ready React Components",
        "description": "Complete Tailwind CSS UI kit for modern web apps. Copy, paste, ship.",
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
            "name": "Tailwind UI Kit",
            "item": "https://yourdomain.com/tailwind-ui-kit"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Tailwind UI Kit",
        "description": "Production-ready Tailwind CSS components for modern web applications",
        "image": "https://yourdomain.com/og-tailwind-ui-kit.png",
        "brand": {
          "@type": "Brand",
          "name": "ItsMarta UI Kit"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "url": "https://yourdomain.com/tailwind-ui-kit"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this compatible with my Tailwind setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Standard Tailwind utilities—works with any Tailwind v3+ project. No custom plugins or configuration required."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use this with frameworks other than React?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The components are built with React but the Tailwind patterns work in any framework. Easy to adapt."
            }
          },
          {
            "@type": "Question",
            "name": "Do I get updates when you add new components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All updates and new components are included with your purchase."
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
              Tailwind UI kit for modern web apps
            </h1>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 font-light">
              Complete library of production-ready Tailwind CSS components. Built for React and Next.js. Copy, customize, ship.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get UI Kit
              </a>
              <Link
                href="/tailwind-saas-components"
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
              Building with Tailwind shouldn't mean starting from scratch
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                Tailwind is powerful, but every project starts with the same work: building navigation, forms, modals, tables, pricing sections, authentication flows.
              </p>
              <p>
                You either spend days building from scratch or use components from random GitHub repos—inconsistent quality, incomplete patterns, not tested in production.
              </p>
              <p>
                You need a complete, reliable foundation to build on.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              A complete Tailwind component library
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                This UI kit gives you everything you need: landing page sections, app UI components, authentication flows, dashboard layouts, and utility patterns.
              </p>
              <p>
                Built with standard Tailwind utilities—no proprietary systems, no weird abstractions. Works with any Tailwind v3+ setup.
              </p>
              <p>
                Copy the code, customize what you need, and ship. Simple as that.
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
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Marketing Components</h3>
                <p>Hero sections, feature grids, pricing tables, testimonials, CTAs, and footer variations.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Application UI</h3>
                <p>Navigation bars, sidebars, breadcrumbs, tabs, pagination, and layout patterns.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Forms & Inputs</h3>
                <p>Text inputs, selects, checkboxes, radio groups, file uploads, validation states.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Data Display</h3>
                <p>Tables, cards, lists, stats, badges, avatars, and data visualization components.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Overlays</h3>
                <p>Modals, slideovers, dropdowns, tooltips, popovers, and notification patterns.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Auth & Onboarding</h3>
                <p>Sign-in, sign-up, password reset, email verification, multi-step onboarding flows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Perfect for
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">New projects:</strong> Start with a complete component library instead of building basic UI from scratch.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Rapid prototyping:</strong> Move from idea to working prototype in hours, not days.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Consistency at scale:</strong> Maintain design consistency across teams and features as your product grows.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Client work:</strong> Ship polished projects faster with a reliable component foundation.
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
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Standard Tailwind:</strong> No custom plugins. Works with your existing setup.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Copy/paste simplicity:</strong> No npm installs. No version conflicts. Just code you own.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Fully responsive:</strong> Mobile-first design. Tested on real devices.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Accessible:</strong> Proper ARIA attributes, keyboard navigation, focus management.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Framework agnostic:</strong> Built with React, but patterns work in Vue, Svelte, or vanilla JS.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Maintainable:</strong> Clean code, clear structure, easy to customize without breaking things.
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
                <strong className="text-black/90 font-medium">Developers</strong> building web apps with Tailwind CSS.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Teams</strong> who need consistent UI components across projects.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Agencies</strong> shipping client work on tight timelines.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Solo founders</strong> who want professional UI without hiring a designer.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-black/50 mb-4">Not for you if:</h3>
              <div className="space-y-3 text-sm leading-relaxed text-black/60">
                <p>• You don't use Tailwind CSS (this is Tailwind-specific)</p>
                <p>• You prefer component libraries with JavaScript APIs</p>
                <p>• You need drag-and-drop page builders</p>
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
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Is this compatible with my Tailwind setup?</h3>
                <p>Yes. Standard Tailwind utilities—works with any Tailwind v3+ project. No custom plugins or configuration required.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I use this with frameworks other than React?</h3>
                <p>Yes. The components are built with React but the Tailwind patterns work in any framework. Easy to adapt.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Do I get updates when you add new components?</h3>
                <p>Yes. All updates and new components are included with your purchase.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I use this for client projects?</h3>
                <p>Yes. Use in unlimited personal and client projects. No attribution required.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">What if I need help customizing?</h3>
                <p>Clean Tailwind code is easy to customize. Each component is well-structured and documented.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="pt-20 sm:pt-28 md:pt-32 pb-24 px-6 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-serif leading-[1.1] mb-10 text-black/90 tracking-tight">
              Start building with Tailwind
            </h2>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 mb-12 font-light">
              Get instant access to production-ready Tailwind components.
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
                View SaaS version
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
