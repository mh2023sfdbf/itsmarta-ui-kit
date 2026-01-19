import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tailwind SaaS Components – Ready-to-Use UI Library",
  description: "Complete library of Tailwind components built specifically for SaaS products. Dashboards, billing, auth, onboarding, and more.",
  keywords: [
    "tailwind saas components",
    "saas ui library",
    "tailwind dashboard",
    "saas components",
    "tailwind react",
  ],
  alternates: {
    canonical: "https://yourdomain.com/tailwind-saas-components",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com/tailwind-saas-components",
    title: "Tailwind SaaS Components – Ready-to-Use UI Library",
    description: "Complete library of Tailwind components built specifically for SaaS products.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: "https://yourdomain.com/og-tailwind-saas.png",
        width: 1200,
        height: 630,
        alt: "Tailwind SaaS components preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind SaaS Components – Ready-to-Use UI Library",
    description: "Complete library of Tailwind components built specifically for SaaS products.",
    images: ["https://yourdomain.com/og-tailwind-saas.png"],
  },
};

export default function TailwindSaaSComponents() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/tailwind-saas-components",
        "url": "https://yourdomain.com/tailwind-saas-components",
        "name": "Tailwind SaaS Components – Ready-to-Use UI Library",
        "description": "Complete library of Tailwind components built specifically for SaaS products.",
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
            "name": "Tailwind SaaS Components",
            "item": "https://yourdomain.com/tailwind-saas-components"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes these SaaS-specific?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Built for real SaaS needs: billing UI, plan upgrades, usage meters, team management, onboarding flows, settings panels—not just generic components."
            }
          },
          {
            "@type": "Question",
            "name": "Will these work with my SaaS tech stack?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Pure Tailwind markup—works with any backend. Built with React but patterns adapt to any framework."
            }
          },
          {
            "@type": "Question",
            "name": "Are these dashboard components or landing page components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both. Full coverage: marketing pages, authentication, app UI, dashboards, and settings."
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
              Tailwind components built for SaaS
            </h1>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 font-light">
              Stop building SaaS UI from scratch. Complete component library covering dashboards, billing, auth, onboarding, and everything your product needs.
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
                View Full Kit
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Generic UI kits don't understand SaaS
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                Most component libraries give you buttons, forms, and cards. But SaaS products need billing tables, upgrade prompts, usage meters, team management interfaces, onboarding checklists.
              </p>
              <p>
                You end up building all the SaaS-specific UI yourself, or cobbling together patterns from different sources—inconsistent, unpolished, time-consuming.
              </p>
              <p>
                You need components that understand what SaaS products actually require.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Components that speak SaaS
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl text-black/70 font-light">
              <p>
                This library includes all the UI patterns SaaS products need: subscription management, feature gating, usage tracking, team collaboration, customer onboarding, and settings organization.
              </p>
              <p>
                Built with Tailwind CSS—fully customizable, no framework lock-in, works with any backend or payment provider.
              </p>
              <p>
                Used in real SaaS products, not just design showcases.
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
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Dashboard Layouts</h3>
                <p>Sidebar navigation, top bars, stats overviews, activity feeds, quick actions.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Billing & Subscriptions</h3>
                <p>Pricing tables, plan comparison, upgrade prompts, usage meters, invoice history.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Authentication & Onboarding</h3>
                <p>Sign-in/up flows, email verification, password reset, multi-step onboarding, progress tracking.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Settings & Preferences</h3>
                <p>Account settings, team management, API keys, integrations, notification preferences.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Data & Analytics</h3>
                <p>Charts, tables, export options, filters, date pickers, search interfaces.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">User Management</h3>
                <p>User lists, roles and permissions, invitations, team directories.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-black/50 mb-4 font-medium">Feature Adoption</h3>
                <p>Feature announcements, tooltips, guided tours, empty states, upgrade gates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Built for real SaaS scenarios
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">Building a new SaaS MVP:</strong> Get all the core UI shipped fast so you can focus on your unique features.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Adding billing to your app:</strong> Use tested pricing and subscription UI patterns that convert.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Improving onboarding:</strong> Replace generic forms with guided flows that reduce drop-off.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Scaling team features:</strong> Add collaboration UI without reinventing permission systems and invite flows.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="pt-20 sm:pt-28 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-[1.15] mb-8 text-black/90 tracking-tight">
              Why SaaS founders use this
            </h2>
            <div className="w-16 h-px bg-black/10 mb-10"></div>
            <div className="space-y-7 text-base sm:text-lg lg:text-xl leading-relaxed text-black/70">
              <p>
                <strong className="text-black/90 font-medium">SaaS-specific patterns:</strong> Not generic UI—components designed for subscription business models.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Backend-agnostic:</strong> Pure frontend code. Works with Stripe, Paddle, or your own billing system.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Conversion-focused:</strong> Upgrade prompts, feature gates, and pricing displays designed to drive revenue.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Scales with your product:</strong> From MVP to enterprise—components handle complexity gracefully.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Mobile-responsive:</strong> Every component works on phones and tablets, not just desktop.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Copy/paste ready:</strong> No npm packages. No complex setup. Just grab the code and ship.
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
                <strong className="text-black/90 font-medium">SaaS founders</strong> building subscription products from scratch or redesigning existing ones.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Full-stack developers</strong> who handle both frontend and backend but want better UI.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Product teams</strong> shipping features fast without compromising on polish.
              </p>
              <p>
                <strong className="text-black/90 font-medium">Agencies</strong> building SaaS products for clients and need reliable patterns.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-black/50 mb-4">Not for you if:</h3>
              <div className="space-y-3 text-sm leading-relaxed text-black/60">
                <p>• You're building e-commerce, blogs, or non-SaaS products</p>
                <p>• You don't use Tailwind CSS</p>
                <p>• You need fully coded backend logic (this is UI only)</p>
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
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">What makes these "SaaS-specific"?</h3>
                <p>Built for real SaaS needs: billing UI, plan upgrades, usage meters, team management, onboarding flows, settings panels—not just generic components.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Will these work with my SaaS tech stack?</h3>
                <p>Yes. Pure Tailwind markup—works with any backend. Built with React but patterns adapt to any framework.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Are these dashboard components or landing page components?</h3>
                <p>Both. Full coverage: marketing pages, authentication, app UI, dashboards, and settings.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Do these include Stripe or payment integration code?</h3>
                <p>No. This is UI only—works with any payment provider. You handle the backend logic.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Can I customize for my brand?</h3>
                <p>Yes. Standard Tailwind classes make it easy to adjust colors, spacing, and styling.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-black/90 mb-2">Will this work for B2B SaaS?</h3>
                <p>Absolutely. Includes enterprise features like team management, roles, permissions, and admin interfaces.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="pt-20 sm:pt-28 md:pt-32 pb-24 px-6 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-serif leading-[1.1] mb-10 text-black/90 tracking-tight">
              Build your SaaS UI faster
            </h2>
            <div className="w-16 h-px bg-black/10 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-black/70 mb-12 font-light">
              Get every component your SaaS product needs—from landing pages to billing UI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm text-white bg-black hover:bg-black/80 transition-colors rounded-full"
              >
                Get SaaS Components
              </a>
              <Link
                href="/tailwind-ui-templates"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
              >
                See full templates
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
