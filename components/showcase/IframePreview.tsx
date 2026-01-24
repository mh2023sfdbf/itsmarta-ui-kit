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
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [iframeHeight, setIframeHeight] = useState(800);
  const [isReady, setIsReady] = useState(false);
  
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

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;

    // Create the document structure with project-specific fonts
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="/globals.css">
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
            /* Override min-h-screen for showcase - use padding instead */
            .min-h-screen {
              min-height: auto !important;
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }
            /* Keep h-screen as full height for components that need it (like auth pages) */
            .h-screen {
              height: 100vh !important;
            }
            /* For mobile/tablet preview, adjust min-h-screen spacing */
            @media (max-width: 768px) {
              .min-h-screen {
                padding-top: 3rem !important;
                padding-bottom: 3rem !important;
              }
            }
          </style>
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
      // Mark as ready once mount node is set
      setTimeout(() => setIsReady(true), 50);
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
  }, []);

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
  );
}

