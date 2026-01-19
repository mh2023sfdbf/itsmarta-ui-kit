import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample article data - replace with your CMS or markdown files
const articles: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}> = {
  "why-ui-decisions-doubled-revenue": {
    title: "Why UI decisions doubled our SaaS revenue",
    excerpt: "The interface redesign that changed everything without touching a single line of backend code.",
    category: "Case Study",
    date: "2026-01-15",
    readTime: "8 min read",
    content: `
We had a SaaS product that worked — but the UI felt off. Conversion was stagnant. Churn was creeping up. Users completed tasks, but the experience felt effortful.

The product team wanted to rebuild everything. I suggested we redesign the interface first.

## What we changed

We didn't touch the backend. We didn't add features. We focused on three interface decisions:

**1. Calm navigation over feature showcase**

Before: Dense sidebar with 20+ menu items fighting for attention.

After: Clean hierarchy with 5 core sections. Secondary features moved to contextual menus.

Result: Task completion time dropped 40%. Support tickets about "where do I find X" went to near-zero.

**2. Progressive disclosure over everything-at-once**

Before: Dashboard showing every metric, alert, and option immediately.

After: Smart defaults with expandable sections. Show what matters, hide the rest until needed.

Result: New users completed onboarding 2.3x faster. Experienced users could still access everything in one click.

**3. Trust signals at decision points**

Before: Generic CTAs with no context or proof.

After: Social proof near upgrade buttons. Usage stats before commitments. Clear "what happens next" messaging.

Result: Trial-to-paid conversion increased 85%.

## What actually happened

Revenue doubled in 4 months. Not from new features. Not from marketing spend. From making the existing product feel better to use.

The interesting part: we didn't lose a single power user. The interface was clearer for beginners and faster for experts.

## Why it worked

Good UI isn't about looking pretty. It's about reducing cognitive load, building trust, and guiding decisions.

Most SaaS products are harder to use than they need to be. Not because the features are complex, but because the interface doesn't help users think.

Clear UI is a competitive advantage.
    `
  },
  "calm-ui-for-complex-products": {
    title: "Building calm UI for complex products",
    excerpt: "How to make software feel simple even when it's technically sophisticated.",
    category: "Design",
    date: "2026-01-10",
    readTime: "6 min read",
    content: `
Complex products don't need complex interfaces. They need calm ones.

## The problem with complexity

When you build technical products, there's a temptation to expose everything. Every setting, every option, every metric. You assume users want control.

But control isn't the same as clarity. More options create decision paralysis. More data creates confusion.

The goal isn't to show everything — it's to show the right thing at the right time.

## Principles for calm UI

**1. Hide sophistication behind simplicity**

Your product might have 50 features. Your interface should show 5 at a time.

Use progressive disclosure. Start with the essentials. Let users dive deeper when needed.

**2. Use hierarchy, not density**

Don't make everything equal. Some actions are primary. Some are secondary. Some are rare.

Reflect that in your UI. Bold what matters. Dim what doesn't. Hide what's rarely used.

**3. Guide, don't overwhelm**

Every screen should have a clear purpose. What is the user trying to accomplish here?

Make that path obvious. Everything else is secondary.

## In practice

Complex products often try to show everything at once. Every step, every log, every metric.

A better approach: Show status (working/done/error) by default. Let users dive deeper if needed.

This pattern works: Most users never need detailed views. Those who do can access them exactly when needed.

## The paradox

Calm UI takes more work than chaotic UI. You have to decide what matters. You have to organize information. You have to test and refine.

But the result is software that feels effortless — even when it's doing hard things behind the scenes.

That's the goal.
    `
  },
  "conversion-without-dark-patterns": {
    title: "Conversion without dark patterns",
    excerpt: "Psychology-informed design that respects users and drives results.",
    category: "Strategy",
    date: "2026-01-05",
    readTime: "7 min read",
    content: `
You can optimize for conversion without manipulating users.

## The problem with dark patterns

Subscription traps. Hidden costs. Fake urgency. Deliberately confusing cancellation flows.

They work in the short term. They destroy trust in the long term.

And honestly? You don't need them.

## Psychology that respects users

Good conversion design reduces friction and builds confidence. It doesn't trick people into decisions they'll regret.

**1. Reduce cognitive load**

Bad: "Choose from 47 pricing plans!"
Good: "Pick the plan that fits your team size."

Clear categories. Obvious differences. Easy decisions.

**2. Build trust at decision points**

Bad: "Sign up now!" (no context, no proof)
Good: "Join 5,000+ teams using this to..." (social proof + clear value)

Show testimonials near upgrade buttons. Display usage stats before commitments. Make "what happens next" explicit.

**3. Make backing out easy**

Bad: "Are you SURE you want to leave? You'll lose EVERYTHING!"
Good: "Pause your subscription anytime. Your data stays safe."

Confidence comes from knowing you can change your mind. Ironclad cancellation policies increase conversions.

## What works

Pricing pages that follow these principles typically see improvements:

- Simplify plan options (fewer choices, clearer differences)
- Add social proof near decision points
- Make cancellation policy visible and easy
- Remove artificial urgency

Why it works: People feel safe making decisions. No tricks. No pressure. Just clarity.

## The long game

Dark patterns optimize for one-time conversions. Respectful design optimizes for lifetime value.

Treat users like intelligent adults making informed decisions. They'll reward you with trust, referrals, and retention.

That's how you build a sustainable business.
    `
  },
  "when-to-use-tailwind-components": {
    title: "When to use UI kits vs custom design",
    excerpt: "Strategic decisions about building, buying, or adapting components.",
    category: "Product",
    date: "2025-12-28",
    readTime: "5 min read",
    content: `
Should you build UI from scratch, use a component library, or adapt a UI kit?

The answer depends on what you're optimizing for.

## When to build from scratch

**You have a distinctive brand** that requires custom visual design.

**You have specific interactions** that don't exist in standard components.

**You have design resources** and time to maintain a custom system.

Best for: Consumer apps with strong brand identity. Design tools. Visual-first products.

## When to use component libraries

**You need interactive components** with built-in state management.

**You want automatic updates** and bug fixes from maintainers.

**You're building internal tools** where polish isn't the priority.

Best for: Admin panels. Internal dashboards. Rapid prototypes.

## When to use UI kits (copy/paste components)

**You want production-ready UI** without the framework lock-in.

**You need specific patterns** (SaaS onboarding, pricing pages, etc.) not full control over everything.

**You're a solo founder or small team** shipping fast.

Best for: Early-stage SaaS. Marketing sites. Products where UI quality matters but design isn't your core competency.

## The hybrid approach

Most successful products use a mix:

- **UI kit for standard pages** (landing, pricing, auth, settings)
- **Custom design for core features** (your unique value proposition)
- **Component library for complex widgets** (date pickers, rich text editors)

## A practical approach

Many successful products start with a UI kit to get to market fast with polished UI.

Then customize the parts that differentiate the product. Keep the foundation, evolve what matters.

This approach gives speed to launch + flexibility to grow.

## The real decision

It's not about what's "best" — it's about what fits your constraints.

Time? Budget? Design skills? Brand requirements?

Choose the approach that gets you to shipped product fastest, then iterate from there.
    `
  }
};

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} – Magazine`,
    description: article.excerpt,
    keywords: ["ui design", "saas", "product design", article.category.toLowerCase()],
    alternates: {
      canonical: `https://yourdomain.com/magazine/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://yourdomain.com/magazine/${slug}`,
      title: article.title,
      description: article.excerpt,
      siteName: "ItsMarta UI Kit",
      publishedTime: article.date,
      images: [
        {
          url: `https://yourdomain.com/og-${slug}.png`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`https://yourdomain.com/og-${slug}.png`],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt,
        "datePublished": article.date,
        "author": {
          "@type": "Person",
          "name": "Marta"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ItsMarta UI Kit",
          "url": "https://yourdomain.com"
        }
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
            "name": "Magazine",
            "item": "https://yourdomain.com/magazine"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://yourdomain.com/magazine/${slug}`
          }
        ]
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

        {/* Article Header */}
        <article className="pt-20 sm:pt-24 md:pt-32 pb-24 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to Magazine */}
            <Link 
              href="/magazine"
              className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors mb-8"
            >
              <span>←</span>
              <span>Magazine</span>
            </Link>

            {/* Category & Date */}
            <div className="flex items-center gap-3 mb-6">
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
              <span className="text-xs text-black/20">•</span>
              <span className="text-xs text-black/40">{article.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-12 text-black/90 tracking-tight">
              {article.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-black/70 font-light">
                {article.content.split('\n\n').map((paragraph, index) => {
                  // Handle headings
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-serif italic leading-tight mt-12 mb-6 text-black/90">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  // Handle bold text
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-medium text-black/80">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  // Regular paragraphs
                  return paragraph.trim() ? (
                    <p key={index} dangerouslySetInnerHTML={{ 
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-black/90">$1</strong>')
                        .replace(/__(.*?)__/g, '<em>$1</em>')
                    }} />
                  ) : null;
                })}
              </div>
            </div>

            {/* CTA Section - Matches Homepage */}
            <div className="mt-16 pt-12 border-t border-black/10">
              <div className="mb-8">
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

              <Link 
                href="/magazine"
                className="inline-flex items-center gap-2 text-sm text-black/40 hover:text-black/60 transition-colors mt-8"
              >
                <span>←</span>
                <span>More articles</span>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }));
}
