# Recent Work Slider - Backup Documentation

**Status:** Removed from `/` page on 2026-01-25  
**Location:** Was in `components/sections/HeroGlassy.tsx`  
**Reason:** Temporarily removed; may be restored later

---

## Overview

A minimal, professional auto-scrolling carousel showcasing recent project work. Features smooth transitions, elegant design, and responsive layout.

## Visual Design

- **Style:** Minimal pro, clean white background
- **Layout:** Full-width horizontal scroll
- **Cards:** Portrait aspect ratio (4:5)
- **Spacing:** 20px (mobile) / 28px (desktop) gap between cards
- **Animation:** Auto-scrolls every 3 seconds with smooth 700ms transitions

## State Variables

```typescript
const [currentCardIndex, setCurrentCardIndex] = useState(0);

const carouselCards = [
  {
    title: "Clamalo",
    image: "/project-screenshots/clamalo_concept_preview.jpeg",
    alt: "Clamalo Concept Preview"
  },
  {
    title: "DreamHouse AI",
    image: "/project-screenshots/dreamhouseai1_cover.png",
    alt: "DreamHouse AI Cover"
  },
  {
    title: "MyRoom Designer AI",
    image: "/project-screenshots/myroomdesignerai_cover.png",
    alt: "MyRoom Designer AI Cover"
  },
  {
    title: "MySkin Routine",
    image: "/project-screenshots/myskinroutine_cover.png",
    alt: "MySkin Routine Cover"
  },
];
```

## Auto-Scroll Logic

```typescript
// Auto-scroll conveyor belt
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentCardIndex((prev) => (prev + 1) % carouselCards.length);
  }, 3000); // Scroll every 3 seconds

  return () => clearInterval(interval);
}, [carouselCards.length]);
```

## JSX Structure

```tsx
{/* Recent Work Subtitle */}
<div className="text-right mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-0 pt-8">
  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-black/30 font-medium">
    Recent work
  </p>
</div>

{/* Full Width Conveyor Belt - Minimal Pro Style */}
<div className="relative w-full overflow-hidden pb-16 pt-4 mb-12">
  <div 
    className="flex gap-20 lg:gap-28 transition-transform duration-700 ease-out"
    style={{
      transform: `translateX(-${(currentCardIndex * 100) / carouselCards.length}%)`
    }}
  >
    {/* Cards - duplicate for infinite loop */}
    {[...carouselCards, ...carouselCards].map((card, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[38vw] relative"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
          <Image
            src={card.image}
            alt={card.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 38vw"
          />
          
          {/* Smooth ombre gradient overlay - shorter with smooth fade */}
          <div 
            className="absolute bottom-0 left-0 right-0 backdrop-blur-[1px] pt-20 pb-6 px-6"
            style={{
              background: 'linear-gradient(to top, rgb(255 255 255 / 1) 0%, rgb(255 255 255 / 0.85) 30%, rgb(255 255 255 / 0.5) 60%, rgb(255 255 255 / 0.15) 85%, transparent 100%)'
            }}
          >
            <p className="text-gray-900 text-base font-medium tracking-wide">{card.title}</p>
          </div>
        </div>
        
        {/* Elegant vertical divider matching horizontal divider */}
        {index < carouselCards.length * 2 - 1 && (
          <div className="absolute right-[-40px] lg:right-[-56px] top-[3%] bottom-[3%] w-[1px] bg-gradient-to-b from-transparent via-gray-300/40 to-transparent" />
        )}
      </div>
    ))}
  </div>
</div>
```

## Key Features

1. **Infinite Loop:** Cards are duplicated to create seamless infinite scrolling
2. **Smooth Gradient Overlay:** White gradient from bottom with smooth fade at 85%
3. **Responsive Card Sizes:**
   - Mobile: 85vw
   - Tablet: 70vw
   - Medium: 50vw
   - Large: 38vw
4. **Elegant Dividers:** Vertical gradient lines between cards (top to bottom fade)
5. **Auto-Advance:** Every 3 seconds, smooth 700ms ease-out transition

## Design Details

- **Border:** `border-white/10` - subtle separation
- **Shadow:** `shadow-[0_8px_32px_rgba(0,0,0,0.06)]` - soft, professional
- **Backdrop Blur:** `backdrop-blur-sm` on card, `backdrop-blur-[1px]` on overlay
- **Typography:** Base font, medium weight, wide tracking for project titles
- **Gradient:** Multi-stop linear gradient for smooth, professional fade

## Dependencies

- `next/image` for optimized image loading
- React `useState` for card index tracking
- React `useEffect` for auto-scroll interval

## How to Restore

1. Add back the `currentCardIndex` state variable
2. Add back the `carouselCards` array
3. Add back the `useEffect` for auto-scrolling
4. Insert the JSX structure after the "Recent Work Subtitle" section
5. Ensure `import Image from 'next/image'` is present

## Notes

- Cards duplicate themselves for seamless infinite loop
- Transform uses percentage-based translation for smooth animation
- Portrait aspect ratio (4:5) works well for project showcases
- White gradient overlay ensures text readability
- Auto-scroll can be paused by adding hover state if needed
