export interface Template {
  id: string;
  name: string;
  category: "hero" | "features" | "cta" | "pricing" | "testimonials";
  description: string;
  isPremium: boolean;
  price?: number;
  previewImage?: string;
  component: React.ComponentType;
  code: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

