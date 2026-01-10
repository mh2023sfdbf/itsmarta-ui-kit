import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  keywords?: string[];
}

/**
 * SEO Meta Tags Component
 * 
 * Usage:
 * <SEOHead 
 *   title="Premium Tailwind Components"
 *   description="Hand-crafted, production-ready UI components"
 *   image="https://yourdomain.com/og-image.png"
 * />
 */
export default function SEOHead({
  title,
  description,
  image = "/og-image.png",
  url = typeof window !== "undefined" ? window.location.href : "",
  type = "website",
  keywords = [],
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = `${title} | ItsMarta UI Kit`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    if (keywords.length > 0) {
      updateMetaTag("keywords", keywords.join(", "));
    }

    // Open Graph
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, image, url, type, keywords]);

  return null;
}

