# ItsMarta UI Kit

Premium Tailwind CSS UI Components & Templates with **production-grade SEO** built-in.

## ⚡ Powered by Next.js

Migrated to Next.js for:
- ✅ **95-100/100 SEO Score** (vs 70/100 with CSR)
- ✅ Pre-rendered HTML for instant Google indexing
- ✅ Automatic sitemap & robots.txt generation
- ✅ Built-in image optimization
- ✅ Rich social media previews

## 📁 Project Structure

```
itsmarta-ui-kit/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Auto-generated robots.txt
├── components/
│   ├── layout/             # Container, Header, Footer
│   └── sections/           # Hero, Features, Pricing, etc.
└── lib/                    # Utility functions (cn helper)
```

## 🎨 Design Principles

- **Clean & Modern**: Beautiful, production-ready components
- **Beginner-Friendly**: Minimal props, easy to customize
- **Pure UI**: Components focus on presentation, not business logic
- **Type-Safe**: Full TypeScript support
- **SEO-Optimized**: Pre-rendered HTML, proper meta tags
- **Consistent Naming**: PascalCase for all components

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework with SSR/SSG
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **clsx + tailwind-merge** - Smart class name handling

## 💡 Usage

Import components and use them in your pages:

```tsx
// app/page.tsx
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Add more sections */}
    </main>
  );
}
```

## 🎯 SEO Features (Built-in)

### Automatic SEO
- ✅ Pre-rendered HTML (Google sees full content)
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Sitemap.xml at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ Favicon support

### Customize SEO
Edit `app/layout.tsx` to update global metadata:
```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  // ... more options
};
```

## 🎯 Component Guidelines

1. Use `cn()` helper for className merging
2. Keep props minimal and intuitive
3. Add optional `className` prop for customization
4. Use semantic HTML elements
5. Ensure responsive design (mobile-first)
6. Components are "use client" if they need interactivity

## 🌐 Deployment

### Vercel (Recommended - 1-Click)
```bash
npm i -g vercel
vercel
```

### Static Export (Any Host)
Already configured for static export:
```bash
npm run build
# Deploy the 'out' folder
```

### Netlify, Cloudflare Pages, AWS
Build command: `npm run build`  
Publish directory: `out`

## 📚 Documentation

- **MIGRATION-COMPLETE.md** - Migration details & new features
- **SEO-STRATEGY.md** - Complete SEO strategy
- **QUICK-SEO-GUIDE.md** - Implementation guide

## 📝 License

Commercial use allowed for template buyers.
