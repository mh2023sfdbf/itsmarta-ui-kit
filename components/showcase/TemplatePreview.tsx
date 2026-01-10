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
  price = 29,
  children,
  code,
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
          <div className="relative min-h-[600px] flex justify-center items-start">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{
                width: viewport === 'desktop' ? '100%' : `${typeof currentConfig.width === 'number' ? currentConfig.width : 1200}px`,
              }}
            >
              {viewport === 'desktop' ? (
                // Desktop: render directly
                <div className="w-full">
                  {children}
                </div>
              ) : (
                // Mobile/Tablet: render in iframe with proper viewport
                <IframePreview width={typeof currentConfig.width === 'number' ? currentConfig.width : 1200}>
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

              {/* Lock Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl max-w-md mx-4">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Unlock Full Code
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Get instant access to production-ready code, 
                    detailed documentation, and lifetime updates.
                  </p>

                  <div className="space-y-3">
                    <button className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      Buy for ${price}
                    </button>
                    <button 
                      onClick={() => setShowCode(false)}
                      className="w-full px-8 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all"
                    >
                      Close Preview
                    </button>
                  </div>

                  {/* Features */}
                  <div className="mt-8 pt-8 border-t border-white/10 text-left">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      What's Included
                    </p>
                    <ul className="space-y-3 text-sm text-gray-300">
                      {[
                        "Full TypeScript code",
                        "Responsive design",
                        "Dark mode support",
                        "Lifetime updates",
                        "Commercial license"
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
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
      <div className="mt-4 flex gap-4">
        <button className="flex-1 px-6 py-3 bg-black text-white rounded-xl font-medium shadow-sm hover:bg-black/80 transition-colors">
          Buy Template - ${price}
        </button>
        <button className="px-6 py-3 bg-white/80 border border-black/10 text-black rounded-xl font-medium hover:bg-white transition-colors">
          Live Demo →
        </button>
      </div>
    </div>
  );
}

