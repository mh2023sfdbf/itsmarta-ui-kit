/**
 * Class Name Obfuscation Utility
 * Protects UI kit from easy copying by hashing Tailwind class names
 */

// Simple hash function for class names
function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36).substring(0, 6);
}

// Cache for consistent hashing
const classNameCache = new Map<string, string>();

/**
 * Obfuscate a single class name
 */
export function obfuscateClassName(className: string): string {
  if (classNameCache.has(className)) {
    return classNameCache.get(className)!;
  }
  
  const obfuscated = `_${hashString(className)}`;
  classNameCache.set(className, obfuscated);
  return obfuscated;
}

/**
 * Obfuscate all class names in a string
 */
export function obfuscateClassNames(classString: string): string {
  if (!classString) return '';
  
  return classString
    .split(' ')
    .filter(Boolean)
    .map(cls => obfuscateClassName(cls))
    .join(' ');
}

/**
 * Convert Tailwind classes to inline styles (most secure)
 * This is a simplified version - full implementation would need a complete Tailwind parser
 */
export function tailwindToInlineStyles(classString: string): string {
  const styleMap: Record<string, string> = {
    // Common utility classes
    'flex': 'display: flex;',
    'flex-col': 'flex-direction: column;',
    'items-center': 'align-items: center;',
    'justify-center': 'justify-content: center;',
    'justify-between': 'justify-content: space-between;',
    'gap-4': 'gap: 1rem;',
    'gap-6': 'gap: 1.5rem;',
    'rounded-full': 'border-radius: 9999px;',
    'rounded-lg': 'border-radius: 0.5rem;',
    'shadow-lg': 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);',
    'text-center': 'text-align: center;',
    'font-medium': 'font-weight: 500;',
    'font-semibold': 'font-weight: 600;',
    // Add more as needed
  };

  return classString
    .split(' ')
    .filter(Boolean)
    .map(cls => styleMap[cls] || '')
    .filter(Boolean)
    .join(' ');
}

/**
 * Generate obfuscated CSS from Tailwind classes
 */
export function generateObfuscatedCSS(classNames: string[]): string {
  const uniqueClasses = [...new Set(classNames)];
  let css = '';
  
  uniqueClasses.forEach(className => {
    const obfuscated = obfuscateClassName(className);
    const styles = tailwindToInlineStyles(className);
    if (styles) {
      css += `.${obfuscated} { ${styles} }\n`;
    }
  });
  
  return css;
}

/**
 * Obfuscate HTML content
 */
export function obfuscateHTML(html: string): string {
  // Replace class attributes with obfuscated versions
  return html.replace(/class="([^"]*)"/g, (match, classes) => {
    const obfuscated = obfuscateClassNames(classes);
    return `class="${obfuscated}"`;
  });
}

/**
 * Create a watermark comment to embed in HTML
 */
export function createWatermark(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `<!-- ${timestamp}${random} -->`;
}
