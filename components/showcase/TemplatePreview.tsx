"use client";

import { useEffect, useRef, useState } from "react";
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
  project?: 'design-app' | 'therapy-app' | 'basics';
  templateId?: string;
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
  templateId,
}: TemplatePreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [viewport, setViewport] = useState<ViewportSize>('desktop');
  
  // Sanitize code and split into visible/blurred sections
  const sanitizedCode = sanitizeCode(code);
  const lines = sanitizedCode.split('\n');
  const visibleLines = Math.ceil(lines.length / 3); // Show 1/3 of code
  const visibleCode = lines.slice(0, visibleLines).join('\n');
  const blurredCode = lines.slice(visibleLines).join('\n');

  // Viewport configurations with accurate aspect ratios
  const viewportConfig = {
    // Phone: 20:9 portrait (most common modern smartphone ratio)
    mobile: { aspectRatio: 9 / 20, frameClass: 'max-w-[320px]', baseWidth: 360, baseHeight: 800 },
    // Tablet: 4:3
    tablet: { aspectRatio: 4 / 3, frameClass: 'max-w-[680px]', baseWidth: 1024, baseHeight: 768 },
    // Laptop: 16:10
    desktop: { aspectRatio: 16 / 10, frameClass: 'max-w-none', baseWidth: 1440, baseHeight: 900 },
  };

  const currentConfig = viewportConfig[viewport];
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [previewScale, setPreviewScale] = useState(1);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const updateScale = () => {
      const { width, height } = frame.getBoundingClientRect();
      const scale = Math.min(
        width / currentConfig.baseWidth,
        height / currentConfig.baseHeight
      );
      setPreviewScale(Number.isFinite(scale) ? Math.max(0.1, scale) : 1);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(frame);

    return () => observer.disconnect();
  }, [currentConfig.baseHeight, currentConfig.baseWidth, viewport]);

  return (
    <div className="group relative">
      {/* Controls Toolbar - Outside Preview Area */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="text-sm text-gray-500">
          {/* Placeholder for balance */}
        </div>
        
        <div className="flex gap-2 items-center">
          {/* Device Size Toggles */}
          {!showCode && (
            <div className="flex gap-1 bg-gray-100/80 border border-gray-200/60 rounded-lg p-1">
              {/* Mobile */}
              <button
                onClick={() => setViewport('mobile')}
                className={cn(
                  "p-1.5 rounded transition-all duration-200",
                  viewport === 'mobile'
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                )}
                title="Phone view"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Tablet */}
              <button
                onClick={() => setViewport('tablet')}
                className={cn(
                  "p-1.5 rounded transition-all duration-200",
                  viewport === 'tablet'
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                )}
                title="Tablet view"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Desktop */}
              <button
                onClick={() => setViewport('desktop')}
                className={cn(
                  "p-1.5 rounded transition-all duration-200",
                  viewport === 'desktop'
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                )}
                title="Desktop view"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          )}

          {/* Live Demo Button */}
          <a
            href={`/demo-minimal-calm${templateId ? `?template=${templateId}` : ''}#ui-templates`}
            className="px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-200 bg-gray-100/80 border border-gray-200/60 text-gray-700 hover:bg-gray-200/80"
          >
            Live Demo
          </a>

          {/* View Code Button */}
          <button
            onClick={() => setShowCode(!showCode)}
            className={cn(
              "px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-200",
              showCode
                ? "bg-gray-900 text-white"
                : "bg-gray-100/80 border border-gray-200/60 text-gray-700 hover:bg-gray-200/80"
            )}
          >
            {showCode ? "← Preview" : "View Code"}
          </button>
        </div>
      </div>

      {/* Preview Container */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Live Preview */}
        <div className="relative">

          {/* The actual component */}
          <div className={cn(
            "relative flex justify-center items-start bg-white",
            viewport === "desktop" ? "p-12" : "p-6"
          )}>
            <div
              ref={frameRef}
              className={cn(
                "relative w-full mx-auto transition-all duration-500 ease-in-out",
                currentConfig.frameClass
              )}
              style={{ aspectRatio: `${currentConfig.aspectRatio}` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  style={{
                    width: currentConfig.baseWidth * previewScale,
                    height: currentConfig.baseHeight * previewScale,
                  }}
                >
                  <div
                    className={cn(
                      "rounded-3xl overflow-hidden bg-white",
                      viewport === "desktop"
                        ? "shadow-[0_24px_80px_rgba(0,0,0,0.15)] ring-1 ring-black/10"
                        : "shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5"
                    )}
                    style={{
                      width: currentConfig.baseWidth,
                      height: currentConfig.baseHeight,
                      transform: `scale(${previewScale})`,
                      transformOrigin: "top left",
                    }}
                  >
                    <IframePreview
                      key={viewport}
                      width={currentConfig.baseWidth}
                      height={currentConfig.baseHeight}
                      fixedViewport
                      project={project}
                    >
                      {children}
                    </IframePreview>
                  </div>
                </div>
              </div>
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

              {/* Lock Overlay - Vibrant & Visible */}
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-gradient-to-br from-black/40 via-black/30 to-black/20">
                <div className="text-center bg-gradient-to-r from-red-100/95 via-yellow-50/95 to-purple-100/95 backdrop-blur-xl border-2 border-white/80 rounded-3xl p-10 shadow-2xl max-w-sm mx-4 ">
                  
                  <p className="text-sm text-black/60 mb-8 font-light">
                    One purchase unlocks everything
                  </p>

                  {/* Primary CTA Button */}
                  <a 
                    href="https://buy.stripe.com/test_28E4gy5Wf2i37Ri4QJ4ko02"
                    className="block w-full px-8 py-3.5 bg-black text-white rounded-full font-medium text-sm shadow-lg hover:bg-black/90 hover:shadow-xl hover:scale-105 transition-all duration-200 text-center mb-4"
                  >
                    Buy All Templates — ${price}
                  </a>

                  {/* Minimal Close Button */}
                  <button 
                    onClick={() => setShowCode(false)}
                    className="text-xs text-black/50 hover:text-black/70 font-light transition-colors underline decoration-1 underline-offset-2"
                  >
                    Close Preview
                  </button>

                  {/* Features - Airy spacing */}
                  <div className="pt-8 mt-8 border-t border-black/10 text-left">
                    <p className="text-xs font-medium text-black/50 uppercase tracking-wider mb-3">
                      What's Included
                    </p>
                    <ul className="space-y-2 text-xs text-black/70 leading-relaxed">
                      {[
                        "React + Tailwind + TypeScript",
                        "Clean component structure",
                        "Responsive layouts",
                        "Commercial license"
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-black/50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
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

      {/* Description - Minimal & Pro */}
      {description && (
        <div className="mt-6 mx-auto max-w-2xl px-4 sm:px-6 md:px-8 text-center">
          {description.split('\n').map((line, index) => {
            const isItalic = line.startsWith('*') && line.endsWith('*');
            const text = isItalic ? line.slice(1, -1) : line;
            
            return index === 0 ? (
              <p key={index} className="text-xs sm:text-sm font-medium text-black/90 mb-1">
                {text}
              </p>
            ) : (
              <p 
                key={index} 
                className={cn(
                  "text-xs sm:text-sm text-black/60 font-light",
                  isItalic && "italic"
                )}
              >
                {text}
              </p>
            );
          })}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="max-w-md mx-auto">
          <a 
            href="https://buy.stripe.com/test_28E4gy5Wf2i37Ri4QJ4ko02"
            className="block w-full px-10 py-3.5 bg-black text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-black/90 transition-all duration-200 text-center text-sm"
          >
            Buy All Templates — ${price}
          </a>
          <p className="text-center text-xs text-black/40 mt-4">
            Get all templates shown above · Instant download · Commercial license
          </p>
        </div>
      </div>
    </div>
  );
}

