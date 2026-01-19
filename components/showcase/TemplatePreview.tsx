"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import IframePreview from "./IframePreview";

interface TemplatePreviewProps {
  title: string;
  description: string;
  category: string;
  isPremium?: boolean;
  price?: number;
  children: React.ReactNode;
  code: string;
  project?: 'design-app' | 'therapy-app';
}

/**
 * Sanitize code to remove real links
 * Replace actual URLs with href="" or href="#" placeholders
 */
function sanitizeCode(code: string): string {
  return code
    // Remove actual URLs in href attributes
    .replace(/href=["'](https?:\/\/[^"']+)["']/gi, 'href=""')
    .replace(/href=["'](\/[^"']+)["']/gi, 'href=""')
    // Remove actual URLs in src attributes for external resources
    .replace(/src=["'](https?:\/\/(?!static\.shuffle\.dev)[^"']+)["']/gi, 'src=""')
    // Keep placeholder hrefs as is
    .replace(/href=["']["']/g, 'href=""');
}

type ViewportSize = 'mobile' | 'tablet' | 'desktop';

export default function TemplatePreview({
  title,
  description,
  category,
  isPremium = true,
  price = 49,
  children,
  code,
  project = 'therapy-app',
}: TemplatePreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [viewport, setViewport] = useState<ViewportSize>('desktop');
  
  // Sanitize code and split into visible/blurred sections
  const sanitizedCode = sanitizeCode(code);
  const lines = sanitizedCode.split('\n');
  const visibleLines = Math.ceil(lines.length / 3); // Show 1/3 of code
  const visibleCode = lines.slice(0, visibleLines).join('\n');
  const blurredCode = lines.slice(visibleLines).join('\n');

  // Viewport configurations with scale
  const viewportConfig = {
    mobile: { width: 375, containerWidth: 1200, scale: 0.8 },
    tablet: { width: 768, containerWidth: 1200, scale: 0.9 },
    desktop: { width: '100%', containerWidth: '100%', scale: 1 },
  };

  const currentConfig = viewportConfig[viewport];

  return (
    <div className="group relative">

      {/* Preview Container */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Live Preview */}
        <div className="relative">
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            {/* Device Size Toggles */}
            {!showCode && (
              <div className="flex gap-1 backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-1 shadow-lg">
                {/* Mobile */}
                <button
                  onClick={() => setViewport('mobile')}
                  className={cn(
                    "p-2 rounded-lg transition-all duration-200",
                    viewport === 'mobile'
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  title="Mobile view (375px)"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>

                {/* Tablet */}
                <button
                  onClick={() => setViewport('tablet')}
                  className={cn(
                    "p-2 rounded-lg transition-all duration-200",
                    viewport === 'tablet'
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  title="Tablet view (768px)"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>

                {/* Desktop */}
                <button
                  onClick={() => setViewport('desktop')}
                  className={cn(
                    "p-2 rounded-lg transition-all duration-200",
                    viewport === 'desktop'
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  title="Desktop view (full width)"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            )}

            {/* View Code Button */}
            <button
              onClick={() => setShowCode(!showCode)}
              className={cn(
                "px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg",
                showCode
                  ? "bg-white text-gray-900 border-2 border-gray-200"
                  : "backdrop-blur-md bg-white/40 border border-white/60 text-gray-700 hover:bg-white/60"
              )}
            >
              {showCode ? "← Live Preview" : "View Code"}
            </button>
          </div>

          {/* The actual component */}
          <div className="relative min-h-[600px] flex justify-center items-start bg-white">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{
                width: viewport === 'desktop' ? '100%' : `${typeof currentConfig.width === 'number' ? currentConfig.width : 1200}px`,
                minHeight: '600px',
              }}
            >
              {viewport === 'desktop' ? (
                // Desktop: render directly
                <div className="w-full min-h-[600px]">
                  {children}
                </div>
              ) : (
                // Mobile/Tablet: render in iframe with proper viewport
                <IframePreview 
                  key={viewport}
                  width={typeof currentConfig.width === 'number' ? currentConfig.width : 1200}
                  project={project}
                >
                  {children}
                </IframePreview>
              )}
            </div>
          </div>
        </div>

        {/* Code Overlay - 1/3 Visible, 2/3 Blurred */}
        {showCode && (
          <div className="absolute inset-0 z-10 bg-gray-900/95 backdrop-blur-sm">
            <div className="relative h-full overflow-hidden">
              {/* Code Container */}
              <div className="absolute inset-0 overflow-auto p-8">
                <pre className="text-sm text-gray-300 font-mono">
                  {/* First 1/3 - Clear and visible */}
                  <code className="block">{visibleCode}</code>
                  
                  {/* Remaining 2/3 - Heavily blurred */}
                  <code className="block blur-md opacity-30 select-none pointer-events-none">
                    {blurredCode}
                  </code>
                </pre>
              </div>

              {/* Lock Overlay - Minimal & Elegant */}
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/5">
                <div className="text-center backdrop-blur-2xl bg-white/90 border border-black/5 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-w-md mx-4">
                  <div className="w-12 h-12 mx-auto mb-5 bg-black/5 rounded-2xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-medium text-black/90 mb-2">
                    Unlock Full Code
                  </h3>
                  <p className="text-sm text-black/50 mb-6 font-light">
                    Get instant access to production-ready code.
                  </p>

                  <div className="space-y-2 mb-6">
                    <a 
                      href="https://buy.stripe.com/test_28E4gy5Wf2i37Ri4QJ4ko02"
                      className="block w-full px-8 py-3 bg-black text-white rounded-full font-medium text-sm shadow-sm hover:bg-black/90 transition-all duration-200 text-center"
                    >
                      Buy for ${price}
                    </a>
                    <button 
                      onClick={() => setShowCode(false)}
                      className="w-full px-8 py-3 bg-white/50 border border-black/10 text-black/70 rounded-full font-medium text-sm hover:bg-white/80 transition-all"
                    >
                      Close Preview
                    </button>
                  </div>

                  {/* Features - Compact List */}
                  <div className="pt-6 border-t border-black/5 text-left">
                    <p className="text-xs font-medium text-black/40 uppercase tracking-wider mb-3">
                      What's Included
                    </p>
                    <ul className="space-y-1.5 text-xs text-black/60">
                      {[
                        "Full React + Tailwind + TypeScript code",
                        "Clean, readable component structure",
                        "Responsive layouts",
                        "AI prompt suggestions",
                        "README with setup notes",
                        "Commercial license",
                        "Updates for this kit"
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-black/50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <a 
          href="https://buy.stripe.com/test_28E4gy5Wf2i37Ri4QJ4ko02"
          className="block w-full px-6 py-3 bg-black text-white rounded-xl font-medium shadow-sm hover:bg-black/80 transition-colors text-center"
        >
          Buy Template - ${price}
        </a>
      </div>
    </div>
  );
}

