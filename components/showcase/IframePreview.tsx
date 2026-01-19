'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IframePreviewProps {
  children: React.ReactNode;
  width: number;
}

export default function IframePreview({ children, width }: IframePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [iframeHeight, setIframeHeight] = useState(800);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;

    // Create the document structure
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="/globals.css">
          <style>
            body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }
            /* Override min-h-screen and h-screen for showcase - use padding instead */
            .min-h-screen {
              min-height: auto !important;
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }
            .h-screen {
              height: auto !important;
              padding-top: 4rem !important;
              padding-bottom: 4rem !important;
            }
            /* For mobile/tablet preview, ensure reasonable spacing */
            @media (max-width: 768px) {
              .min-h-screen,
              .h-screen {
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
  }, [children, mountNode]);

  return (
    <>
      <iframe
        ref={iframeRef}
        className="transition-all duration-500"
        style={{
          width: `${width}px`,
          height: `${iframeHeight}px`,
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

