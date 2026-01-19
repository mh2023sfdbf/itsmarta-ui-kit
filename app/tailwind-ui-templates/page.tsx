import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tailwind UI Templates – Complete Page Layouts Ready to Ship",
  description: "Production-ready Tailwind page templates for SaaS, marketing, and web apps. Copy, customize, launch faster.",
  keywords: [
    "tailwind templates",
    "tailwind ui templates",
    "tailwind page templates",
    "tailwind layouts",
    "tailwind starter",
  ],
  alternates: {
    canonical: "https://yourdomain.com/tailwind-ui-templates",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/tailwind-ui-templates",
    title: "Tailwind UI Templates – Complete Page Layouts Ready to Ship",
    description: "Production-ready Tailwind page templates for SaaS, marketing, and web apps.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: "https://yourdomain.com/og-tailwind-templates.png",
        width: 1200,
        height: 630,
        alt: "Tailwind UI templates preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind UI Templates – Complete Page Layouts Ready to Ship",
    description: "Production-ready Tailwind page templates for SaaS, marketing, and web apps.",
    images: ["https://yourdomain.com/og-tailwind-templates.png"],
  },
};

export default function TailwindUITemplates() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/tailwind-ui-templates",
        "url": "https://yourdomain.com/tailwind-ui-templates",
        "name": "Tailwind UI Templates – Complete Page Layouts Ready to Ship",
        "description": "Production-ready Tailwind page templates for SaaS, marketing, and web apps.",
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
            "name": "Tailwind UI Templates",
            "item": "https://yourdomain.com/tailwind-ui-templates"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are these full page templates or just components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Full page templates. Complete layouts with navigation, content sections, and footers—ready to customize and deploy."
            }
          },
          {
            "@type": "Question",
            "name": "Can I mix and match sections from different templates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All templates use consistent Tailwind patterns. Easy to combine sections across templates."
            }
          },
          {
            "@type": "Question",
            "name": "Do these work with Next.js, Remix, or other frameworks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Templates are built with React but Tailwind markup adapts to any framework easily."
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
              Complete Tailwind page templates
            </h1>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 font-light">
              Stop designing pages from scratch. Full-page Tailwind templates for landing pages, dashboards, authentication, and more—ready to ship.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get Templates
              </a>
              <Link
                href="/tailwind-landing-page-components"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                View Landing Components
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Assembling layouts takes too long
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                You have individual components—buttons, cards, forms. But every new page means figuring out layout structure, responsive breakpoints, section spacing, and visual hierarchy.
              </p>
              <p>
                Starting with a blank canvas slows you down. You waste time on decisions that have already been solved: how to structure a pricing page, what makes a good dashboard layout, how to organize settings panels.
              </p>
              <p>
                You need complete page templates, not just isolated components.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Full pages, ready to customize
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                These templates give you complete page layouts: navigation to footer, with all sections in between. Thoughtfully structured, fully responsive, production-tested.
              </p>
              <p>
                Start with a working page, customize the content and styling, and ship. No need to wire up sections or debug layout issues from scratch.
              </p>
              <p>
                Built with clean Tailwind code—easy to understand, modify, and maintain.
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
                <p>Multiple landing page templates: product launch, SaaS homepage, waitlist, coming soon, feature showcase.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Pricing Pages</h3>
                <p>Different pricing layouts: simple tiers, feature comparison, enterprise add-ons, usage-based pricing.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Authentication Pages</h3>
                <p>Sign in, sign up, password reset, email verification, two-factor auth, magic link flows.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Dashboard Templates</h3>
                <p>Analytics dashboard, project dashboard, admin panel, user portal—with sidebar and top navigation options.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Settings Pages</h3>
                <p>Account settings, billing settings, team management, integrations, API configuration.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Marketing Pages</h3>
                <p>About, contact, blog listing, blog post, case studies, changelog, documentation.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Legal Pages</h3>
                <p>Terms of service, privacy policy, cookie policy—clean, readable layouts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              When to use templates
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Launching quickly:</strong> Get a complete site or app UI live in hours, not weeks.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Validating ideas:</strong> Build high-quality prototypes fast to test with users.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Redesigning existing pages:</strong> Replace outdated layouts with modern, tested patterns.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Maintaining consistency:</strong> Use templates as a foundation to keep design consistent across your product.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Why these templates work
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Complete layouts:</strong> Not just sections—full page structures with navigation, content, and footers.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Responsive by default:</strong> Mobile-first design. Looks great on all devices without extra work.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Semantic HTML:</strong> Proper heading hierarchy, ARIA attributes, accessible markup.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Modular sections:</strong> Easy to swap, reorder, or remove sections without breaking layouts.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Performance-optimized:</strong> Clean markup, no bloat. Fast load times out of the box.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Framework-flexible:</strong> Built with React but patterns work in Next.js, Remix, Astro, or any framework.
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
                <strong className="text-black/90 font-medium">Developers</strong> who want to ship pages fast without designing layouts from scratch.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Founders</strong> launching products or MVPs with limited time and resources.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Agencies</strong> delivering client projects on tight deadlines.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Designers</strong> who want high-quality starting points instead of blank Figma files.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-black/50 mb-4">Not for you if:</h3>
              <div className="space-y-3 text-sm leading-relaxed text-black/60">
                <p>• You need highly custom, art-directed layouts for every page</p>
                <p>• You prefer no-code page builders</p>
                <p>• You're not using Tailwind CSS</p>
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
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Are these full page templates or just components?</h3>
                <p>Full page templates. Complete layouts with navigation, content sections, and footers—ready to customize and deploy.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I mix and match sections from different templates?</h3>
                <p>Yes. All templates use consistent Tailwind patterns. Easy to combine sections across templates.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Do these work with Next.js, Remix, or other frameworks?</h3>
                <p>Yes. Templates are built with React but Tailwind markup adapts to any framework easily.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">How much customization is required?</h3>
                <p>Replace content and adjust colors/spacing to match your brand. Structure and responsive behavior work out of the box.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Are these just static HTML or do they include interactivity?</h3>
                <p>Interactive where needed (modals, dropdowns, tabs). React components with state management included.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I use these for client projects?</h3>
                <p>Yes. Unlimited use in personal and client projects. No attribution required.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="pt-20 sm:pt-28 md:pt-32 pb-24 px-6 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-serif leading-[1.1] mb-10 text-black/90 tracking-tight">
              Ship pages faster
            </h2>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 mb-12 font-light">
              Get complete page templates ready to customize and deploy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get All Templates
              </a>
              <Link
                href="/saas-ui-kit"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                View SaaS UI Kit
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
