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

  // Improved lazy loading with fallback
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Fallback: Force load after 3 seconds if observer doesn't trigger
    const fallbackTimer = setTimeout(() => {
      setShouldLoad(true);
    }, 3000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Load when element is about to enter viewport (more aggressive)
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setShouldLoad(true);
            clearTimeout(fallbackTimer);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '800px', // Start loading 800px before entering viewport (very aggressive)
        threshold: 0,
      }
    );

    observer.observe(container);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
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
              } catch (e) {
                // Silent fail
              }
            }, 500);
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
        // Enhanced loading placeholder
        <div 
          className="flex items-center justify-center bg-gray-50/50"
          style={{
            width: fit ? '100%' : `${width}px`,
            height: fixedViewport ? `${height}px` : `${iframeHeight}px`,
          }}
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-400">
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading preview...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

