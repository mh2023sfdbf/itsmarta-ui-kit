# Template Guidelines

## 📋 Adding New Templates

### 1. **Create Template File**

Location: `marta-ui-kit/templates/[category]/[TemplateName].tsx`

**Template Structure:**
```tsx
// Always use ES modules (export default)
export default function TemplateName() {
  return (
    <section className="...">
      {/* Your template code */}
    </section>
  );
}
```

### 2. **Link Guidelines** ⚠️

**IMPORTANT:** All links in templates are automatically sanitized when displayed in code preview.

**What to do:**
- Use `href=""` for placeholder links
- Use `href="#"` for demo purposes
- Real URLs will be automatically removed from code preview

**Example:**
```tsx
// Good - Will display as is
<a href="" className="...">Click me</a>
<a href="#features" className="...">Learn More</a>

// Avoid - Will be converted to href="" in preview
<a href="https://example.com" className="...">Click me</a>
<a href="/pricing" className="...">Pricing</a>
```

### 3. **Code Preview Behavior**

When users click "View Code":
- ✅ **First 1/3 of code** - Clear and readable
- 🔒 **Remaining 2/3** - Heavily blurred
- 🛡️ **All real links** - Automatically sanitized to `href=""`

### 4. **Add to Homepage**

**File:** `app/page.tsx`

```tsx
// 1. Import your template
import YourTemplate from "@/marta-ui-kit/templates/category/YourTemplate";

// 2. Add to the page with TemplatePreview wrapper
<TemplatePreview
  title="Your Template Name"
  description="Brief description of what it does"
  category="Category Name"
  isPremium={true}
  price={29}
  code={`// Paste your template code here
export default function YourTemplate() {
  return (
    <section>
      {/* Template JSX */}
    </section>
  );
}`}
>
  <YourTemplate />
</TemplatePreview>
```

## 🗂️ Folder Structure

```
marta-ui-kit/
├── templates/
│   ├── heroes/        # Hero sections
│   ├── features/      # Feature sections
│   ├── cta/          # Call-to-action sections
│   ├── pricing/      # Pricing tables
│   ├── testimonials/ # Testimonial sections
│   ├── loaders/      # Loading screens
│   └── footers/      # Footer sections
└── types.ts          # TypeScript definitions
```

## ✅ Checklist for New Templates

- [ ] Created template file in appropriate category folder
- [ ] Used ES module export (`export default function`)
- [ ] Used placeholder links (`href=""` or `href="#"`)
- [ ] No external links in code
- [ ] Responsive design (mobile-first)
- [ ] Proper TypeScript types (if using props)
- [ ] Added to homepage with TemplatePreview
- [ ] Set appropriate price
- [ ] Added clear description
- [ ] Tested live preview
- [ ] Tested code preview (1/3 visible, 2/3 blurred)

## 💡 Best Practices

### **Naming Conventions**
- **Files:** PascalCase (e.g., `HeroModern.tsx`)
- **Functions:** PascalCase (e.g., `export default function HeroModern()`)
- **Props:** camelCase (e.g., `backgroundColor`)

### **Component Structure**
```tsx
export default function ComponentName() {
  // Optional: Local state or data
  const items = [...];
  
  return (
    <section className="...">
      {/* Template content */}
    </section>
  );
}
```

### **Styling**
- Use Tailwind utility classes
- Glassmorphism: `backdrop-blur-xl bg-white/40 border border-white/60`
- Gradients: `bg-gradient-to-r from-indigo-600 to-purple-600`
- Hover effects: `hover:scale-105 transition-all duration-300`

### **Images**
- Use placeholder images or external CDN
- Always include `alt` text
- Responsive: `w-full sm:w-1/2 lg:w-1/3`

## 🎨 Design Standards

### **Colors**
- Primary: Indigo (`indigo-600`)
- Secondary: Purple (`purple-600`)
- Accent: Pink (`pink-600`)
- Background: White with blur effects

### **Typography**
- Headings: `text-4xl font-bold` to `text-8xl font-bold`
- Body: `text-base` to `text-xl`
- Font: Inter (already loaded)

### **Spacing**
- Section padding: `py-20` or `py-32`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Gap between elements: `gap-4`, `gap-6`, `gap-8`

## 🚀 Quick Start

### Create a new Hero template:

```bash
# 1. Create file
touch marta-ui-kit/templates/heroes/HeroAwesome.tsx
```

```tsx
// 2. Add template code
export default function HeroAwesome() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-7xl font-bold mb-6">
          Amazing Hero Section
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Beautiful and modern design
        </p>
        <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl">
          Get Started
        </button>
      </div>
    </section>
  );
}
```

```tsx
// 3. Add to app/page.tsx
import HeroAwesome from "@/marta-ui-kit/templates/heroes/HeroAwesome";

<TemplatePreview
  title="Awesome Hero"
  description="Modern hero with gradient background"
  category="Hero"
  price={29}
  code={`export default function HeroAwesome() { ... }`}
>
  <HeroAwesome />
</TemplatePreview>
```

## 🔐 Security

- ✅ **Automatic link sanitization** in code preview
- ✅ **No executable code** in preview
- ✅ **Read-only code display**
- ✅ **Blur protection** for premium code

## 📝 Notes

- Templates are showcased on the homepage
- Each template can be purchased individually
- Code is automatically formatted and sanitized
- Links are removed for security
- 1/3 of code is visible as preview
- Full code access after purchase

---

**Happy Template Creating!** 🎨✨

