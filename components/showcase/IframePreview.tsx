'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IframePreviewProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  fit?: boolean;
  fixedViewport?: boolean;
  project?: 'design-app' | 'therapy-app' | 'basics';
}

export default function IframePreview({
  children,
  width = 1200,
  height = 800,
  fit = false,
  fixedViewport = false,
  project = 'therapy-app',
}: IframePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [iframeHeight, setIframeHeight] = useState(800);
  const [isReady, setIsReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  
  // Font configuration based on project
  const fontConfig = project === 'design-app' 
    ? {
        headingFont: 'Lustria, serif',
        bodyFont: 'Inter, system-ui, sans-serif',
        headingClass: 'font-heading'
      }
    : project === 'basics'
    ? {
        headingFont: 'Lustria, serif',
        bodyFont: 'Inter, system-ui, sans-serif',
        headingClass: 'font-heading'
      }
    : {
        headingFont: 'Outfit, sans-serif',
        bodyFont: 'Hedvig Letters Serif, serif',
        headingClass: 'font-outfit'
      };

  // Intersection Observer for lazy loading
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Load when element is about to enter viewport (200px before)
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setShouldLoad(true);
            observer.disconnect(); // Stop observing once loaded
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !shouldLoad) return;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;

    // Create the document structure with project-specific fonts
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=${width}, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          ${project === 'design-app' 
            ? '<link href="https://fonts.googleapis.com/css2?family=Lustria&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">' 
            : '<link href="https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">'
          }
          <style>
            :root {
              --font-heading: ${fontConfig.headingFont};
              --font-body: ${fontConfig.bodyFont};
            }
            body {
              margin: 0;
              padding: 0;
              overflow: ${fixedViewport ? 'auto' : 'hidden'};
              font-family: var(--font-body);
              /* Disable text selection and copying */
              user-select: none;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
            }
            /* Disable right-click */
            * {
              -webkit-touch-callout: none;
            }
            .font-heading {
              font-family: var(--font-heading) !important;
            }
            .font-sans {
              font-family: var(--font-body) !important;
            }
            .font-outfit {
              font-family: var(--font-heading) !important;
            }
            .font-hedvig {
              font-family: var(--font-body) !important;
            }
            /* Keep full height behavior across all viewports for proper split screens */
          </style>
          <script>
            // Disable right-click
            document.addEventListener('contextmenu', (e) => e.preventDefault());
            
            // Disable keyboard shortcuts for DevTools and copy
            document.addEventListener('keydown', (e) => {
              if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.metaKey && e.altKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.metaKey && e.altKey && e.key === 'J') ||
                (e.ctrlKey && e.key === 'U') ||
                (e.metaKey && e.key === 'U') ||
                (e.ctrlKey && e.key === 'c') ||
                (e.metaKey && e.key === 'c') ||
                (e.ctrlKey && e.key === 'a') ||
                (e.metaKey && e.key === 'a')
              ) {
                e.preventDefault();
                return false;
              }
            });
            
            // Hash function for class obfuscation
            function hashClass(str) {
              let hash = 0;
              for (let i = 0; i < str.length; i++) {
                hash = ((hash << 5) - hash) + str.charCodeAt(i);
                hash = hash & hash;
              }
              return '_' + Math.abs(hash).toString(36).substring(0, 6);
            }
            
            // Obfuscate all classes after content loads
            function obfuscateClasses() {
              try {
                const classMap = new Map();
                
                // First pass: collect all unique classes
                document.querySelectorAll('*').forEach(el => {
                  const classes = el.className;
                  if (typeof classes === 'string' && classes) {
                    classes.split(/\\s+/).forEach(cls => {
                      if (cls && !classMap.has(cls)) {
                        classMap.set(cls, hashClass(cls));
                      }
                    });
                  }
                });
                
                // Second pass: replace classes in elements
                document.querySelectorAll('*').forEach(el => {
                  const classes = el.className;
                  if (typeof classes === 'string' && classes) {
                    const newClasses = classes.split(/\\s+/)
                      .filter(Boolean)
                      .map(cls => classMap.get(cls) || cls)
                      .join(' ');
                    el.className = newClasses;
                  }
                });
                
                // Third pass: update CSS rules
                Array.from(document.styleSheets).forEach(sheet => {
                  try {
                    const rules = Array.from(sheet.cssRules || []);
                    rules.forEach((rule, index) => {
                      if (rule.selectorText) {
                        let newSelector = rule.selectorText;
                        classMap.forEach((hash, original) => {
                          const pattern = '.' + original;
                          newSelector = newSelector.split(pattern).join('.' + hash);
                        });
                        if (newSelector !== rule.selectorText) {
                          const cssText = rule.cssText.replace(rule.selectorText, newSelector);
                          sheet.deleteRule(index);
                          sheet.insertRule(cssText, index);
                        }
                      }
                    });
                  } catch (e) {
                    // Skip CORS-protected stylesheets
                  }
                });
              } catch (e) {
                console.warn('Obfuscation error:', e);
              }
            }
            
            // Clean up React data attributes after render (non-blocking)
            setTimeout(() => {
              try {
                document.querySelectorAll('*').forEach(el => {
                  Array.from(el.attributes).forEach(attr => {
                    if (attr.name.startsWith('data-react') || attr.name.startsWith('data-__')) {
                      el.removeAttribute(attr.name);
                    }
                  });
                });
                
                // Obfuscate classes after cleanup
                obfuscateClasses();
              } catch (e) {
                // Silent fail
              }
            }, 500);
            
            // Continuous monitoring for dynamic content
            setInterval(() => {
              try {
                // Re-apply obfuscation for new elements
                const hasUnobfuscatedClasses = Array.from(document.querySelectorAll('*')).some(el => {
                  const classes = el.className;
                  return typeof classes === 'string' && classes && 
                         classes.split(/\\s+/).some(cls => cls && !cls.startsWith('_'));
                });
                
                if (hasUnobfuscatedClasses) {
                  obfuscateClasses();
                }
              } catch (e) {
                // Silent fail
              }
            }, 1000);
          </script>
        </head>
        <body>
          <div id="iframe-root"></div>
        </body>
      </html>
    `);
    iframeDoc.close();

    // Copy all styles from parent document
    const parentStyles = Array.from(document.styleSheets);
    parentStyles.forEach((styleSheet) => {
      try {
        if (styleSheet.href) {
          // External stylesheet
          const link = iframeDoc.createElement('link');
          link.rel = 'stylesheet';
          link.href = styleSheet.href;
          iframeDoc.head.appendChild(link);
        } else {
          // Inline styles
          const style = iframeDoc.createElement('style');
          const cssRules = Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
          style.textContent = cssRules;
          iframeDoc.head.appendChild(style);
        }
      } catch (e) {
        // CORS or other errors - skip
        console.warn('Could not copy stylesheet:', e);
      }
    });

    // Set mount node for portal
    const root = iframeDoc.getElementById('iframe-root');
    if (root) {
      setMountNode(root);
      
      // CRITICAL: Comprehensive loading strategy to prevent blank previews on first load
      // We must wait for: external stylesheets, fonts, and document to be fully ready
      
      // 1. Wait for all external stylesheets to load
      const stylesheetPromises = Array.from(iframeDoc.querySelectorAll('link[rel="stylesheet"]'))
        .map(link => {
          return new Promise((resolve) => {
            if ((link as HTMLLinkElement).sheet) {
              resolve(true);
            } else {
              link.addEventListener('load', () => resolve(true), { once: true });
              link.addEventListener('error', () => resolve(true), { once: true });
              // Timeout fallback in case event doesn't fire
              setTimeout(() => resolve(true), 2000);
            }
          });
        });
      
      // 2. Wait for iframe document to be complete
      const documentReadyPromise = new Promise(resolve => {
        if (iframeDoc.readyState === 'complete') {
          resolve(true);
        } else {
          iframe.contentWindow?.addEventListener('load', () => resolve(true), { once: true });
          // Timeout fallback
          setTimeout(() => resolve(true), 3000);
        }
      });
      
      // 3. Wait for fonts to be ready
      const fontsReadyPromise = Promise.race([
        iframeDoc.fonts.ready,
        new Promise(resolve => setTimeout(() => resolve(true), 2000)) // 2s timeout for fonts
      ]);
      
      // 4. Wait for ALL conditions + buffer time
      Promise.all([
        ...stylesheetPromises,
        documentReadyPromise,
        fontsReadyPromise
      ]).then(() => {
        // Critical buffer: ensure all styles are computed and applied
        setTimeout(() => setIsReady(true), 150);
      }).catch((error) => {
        console.warn('Preview loading warning:', error);
        // Fallback: show preview anyway after delay
        setTimeout(() => setIsReady(true), 500);
      });
    }

    if (fixedViewport) {
      return () => undefined;
    }

    // Observe content height changes
    const updateHeight = () => {
      if (iframeDoc.body) {
        const contentHeight = Math.max(
          iframeDoc.body.scrollHeight,
          iframeDoc.body.offsetHeight,
          iframeDoc.documentElement.scrollHeight,
          iframeDoc.documentElement.offsetHeight
        );
        setIframeHeight(Math.max(600, contentHeight + 20)); // Add padding
      }
    };

    // Initial height update
    setTimeout(updateHeight, 100);

    // Observe for changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (iframeDoc.body) {
      resizeObserver.observe(iframeDoc.body);
    }

    // Also listen for load events
    iframe.contentWindow?.addEventListener('load', updateHeight);
    
    return () => {
      resizeObserver.disconnect();
      iframe.contentWindow?.removeEventListener('load', updateHeight);
    };
  }, [project, fixedViewport, width, shouldLoad]);

  // Re-measure when children change
  useEffect(() => {
    if (fixedViewport) return;
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument) return;
    
    const updateHeight = () => {
      const iframeDoc = iframe.contentDocument;
      if (iframeDoc?.body) {
        const contentHeight = Math.max(
          iframeDoc.body.scrollHeight,
          iframeDoc.body.offsetHeight,
          iframeDoc.documentElement.scrollHeight,
          iframeDoc.documentElement.offsetHeight
        );
        setIframeHeight(Math.max(600, contentHeight + 20));
      }
    };

    setTimeout(updateHeight, 100);
  }, [children, fixedViewport, mountNode]);

  return (
    <div ref={containerRef} style={{ minHeight: fixedViewport ? height : iframeHeight }}>
      {shouldLoad ? (
        <>
          <iframe
            ref={iframeRef}
            className="transition-all duration-500"
            style={{
              width: fit ? '100%' : `${width}px`,
              height: fixedViewport ? `${height}px` : fit ? '100%' : `${iframeHeight}px`,
              border: 'none',
              opacity: isReady ? 1 : 0,
              transition: 'opacity 0.2s ease-in-out',
            }}
            title="Preview"
          />
          {mountNode && createPortal(children, mountNode)}
        </>
      ) : (
        // Placeholder while not in viewport
        <div 
          className="flex items-center justify-center bg-gray-50"
          style={{
            width: fit ? '100%' : `${width}px`,
            height: fixedViewport ? `${height}px` : `${iframeHeight}px`,
          }}
        >
          <div className="text-sm text-gray-400">Loading preview...</div>
        </div>
      )}
    </div>
  );
}

