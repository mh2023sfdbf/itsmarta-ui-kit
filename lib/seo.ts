/**
 * SEO Utilities
 * Helper functions for structured data and SEO optimization
 */

export interface StructuredDataProduct {
  name: string;
  description: string;
  price: string;
  currency: string;
  image: string;
  url: string;
}

/**
 * Generate JSON-LD structured data for a product
 */
export function generateProductSchema(product: StructuredDataProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "description": product.description,
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": "https://schema.org/InStock",
    },
    "image": product.image,
    "url": product.url,
  };
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema(
  name: string,
  url: string,
  logo: string,
  socialLinks: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "sameAs": socialLinks,
  };
}

/**
 * Insert structured data into the page
 */
export function injectStructuredData(data: object) {
  if (typeof window === "undefined") return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

/**
 * Generate sitemap XML (server-side)
 */
export function generateSitemap(urls: string[], baseUrl: string) {
  const urlset = urls.map(
    (url) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlset.join("")}
</urlset>`;
}

