# ItsMarta UI Kit

Premium Tailwind CSS UI Components & Templates for modern web applications.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/     # Shared layout components (Header, Footer, Container)
│   └── sections/   # Page sections (Hero, Features, Pricing, FAQ, CTA)
└── lib/            # Utility functions and helpers
```

## 🎨 Design Principles

- **Clean & Modern**: Beautiful, production-ready components
- **Beginner-Friendly**: Minimal props, easy to customize
- **Pure UI**: Components focus on presentation, not business logic
- **Type-Safe**: Full TypeScript support
- **Consistent Naming**: PascalCase for all components

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **clsx + tailwind-merge** - Smart class name handling

## 💡 Usage

Import components and use them in your projects:

```tsx
import Hero from "./components/sections/Hero";
import Container from "./components/layout/Container";

function App() {
  return (
    <main>
      <Hero />
      {/* Add more sections */}
    </main>
  );
}
```

## 🎯 Component Guidelines

1. Use `cn()` helper for className merging
2. Keep props minimal and intuitive
3. Add optional `className` prop for customization
4. Use semantic HTML elements
5. Ensure responsive design (mobile-first)

## 📝 License

Commercial use allowed for template buyers.
