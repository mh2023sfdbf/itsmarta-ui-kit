import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Magazine – Design Insights & SaaS Thoughts",
  description: "Thoughts on UI design, SaaS product decisions, and what actually works in production. Written by a founder who ships.",
  keywords: [
    "ui design insights",
    "saas product design",
    "design magazine",
    "product thoughts",
    "ui patterns",
  ],
  alternates: {
    canonical: `${SITE_URL}/magazine`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/magazine`,
    title: "Magazine – Design Insights & SaaS Thoughts",
    description: "Thoughts on UI design, SaaS product decisions, and what actually works in production.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: `${SITE_URL}/og-magazine.png",
        width: 1200,
        height: 630,
        alt: "ItsMarta Magazine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine – Design Insights & SaaS Thoughts",
    description: "Thoughts on UI design, SaaS product decisions, and what actually works in production.",
    images: [`${SITE_URL}/og-magazine.png"],
  },
};

// Sample articles - replace with your actual content/CMS data
const articles = [
  {
    slug: "why-ui-decisions-doubled-revenue",
    title: "Why UI decisions doubled our SaaS revenue",
    excerpt: "The interface redesign that changed everything without touching a single line of backend code.",
    category: "Case Study",
    date: "2026-01-15",
    readTime: "8 min read",
  },
  {
    slug: "calm-ui-for-complex-products",
    title: "Building calm UI for complex products",
    excerpt: "How to make software feel simple even when it's technically sophisticated.",
    category: "Design",
    date: "2026-01-10",
    readTime: "6 min read",
  },
  {
    slug: "conversion-without-dark-patterns",
    title: "Conversion without dark patterns",
    excerpt: "Psychology-informed design that respects users and drives results.",
    category: "Strategy",
    date: "2026-01-05",
    readTime: "7 min read",
  },
  {
    slug: "when-to-use-tailwind-components",
    title: "When to use UI kits vs custom design",
    excerpt: "Strategic decisions about building, buying, or adapting components.",
    category: "Product",
    date: "2025-12-28",
    readTime: "5 min read",
  },
];

export default function Magazine() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/magazine",
        "url": `${SITE_URL}/magazine",
        "name": "Magazine – Design Insights & SaaS Thoughts",
        "description": "Thoughts on UI design, SaaS product decisions, and what actually works in production.",
        "isPartOf": {
          "@id": `${SITE_URL}/#website"
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Magazine",
            "item": `${SITE_URL}/magazine"
          }
        ]
      },
      {
        "@type": "Blog",
        "name": "ItsMarta Magazine",
        "description": "Insights on UI design, SaaS, and product decisions",
        "url": `${SITE_URL}/magazine"
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization",
        "name": "ItsMarta UI Kit",
        "url": `${SITE_URL}`
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

        {/* Hero / Magazine Header */}
        <section className="pt-20 sm:pt-24 md:pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="max-w-4xl">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-black/40 mb-6">Magazine</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic leading-[1.05] mb-10 text-black/90 tracking-tight">
                Thoughts on UI, SaaS, and what actually works
              </h1>
              <div className="w-16 h-px bg-black/10 mb-10"></div>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl text-black/70 font-light">
                Written from experience shipping real products. No theory—just what worked, what didn't, and why.
              </p>

              {/* CTA Section - Matches Homepage */}
              <div className="mt-12 pt-8 border-t border-black/5">
                <p className="text-sm sm:text-base text-black/60 font-light max-w-xl leading-relaxed mb-6">
                  These UI decisions doubled revenue in a real SaaS product. Now you can preview, buy and use them too.
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <a
                    href="/#ui-templates"
                    className="inline-flex items-center gap-2 text-sm text-black hover:text-black/60 transition-colors group"
                  >
                    <span>View all templates</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  
                  <a 
                    href="https://buy.stripe.com/test_28E4gy5Wf2i37Ri4QJ4ko02"
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
                  >
                    Buy the code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pt-12 pb-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid gap-16 md:gap-20">
              {articles.map((article, index) => (
                <article key={article.slug} className="group">
                  <Link href={`/magazine/${article.slug}`} className="block">
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs uppercase tracking-widest text-black/40">
                        {article.category}
                      </span>
                      <span className="text-xs text-black/20">•</span>
                      <time className="text-xs text-black/40" dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-[1.2] mb-4 text-black/90 group-hover:text-black transition-colors">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-base sm:text-lg leading-relaxed text-black/60 mb-5 font-light max-w-2xl">
                      {article.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="inline-flex items-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                      <span>{article.readTime}</span>
                      <span>→</span>
                    </div>
                  </Link>

                  {/* Divider after each article except last */}
                  {index < articles.length - 1 && (
                    <div className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
                  )}
                </article>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-20 pt-16 border-t border-black/5 text-center">
              <p className="text-sm text-black/40 italic">
                More insights coming soon. Building in public, shipping real products.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
