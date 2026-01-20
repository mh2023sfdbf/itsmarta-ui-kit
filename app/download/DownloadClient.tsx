"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type DownloadState = "loading" | "success" | "error";

function DownloadContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  
  const [state, setState] = useState<DownloadState>("loading");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!sessionId) {
      setState("error");
      setErrorMessage("Missing payment session. Please contact support.");
      return;
    }

    const fetchDownloadLink = async () => {
      try {
        const response = await fetch(
          `/api/download-link?session_id=${encodeURIComponent(sessionId)}`
        );

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || "Failed to generate download link");
        }

        const { url } = await response.json();
        setDownloadUrl(url);
        setState("success");

        // Auto-start download by redirecting to the signed URL
        window.location.href = url;
      } catch (error) {
        console.error("Download link error:", error);
        setState("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Unable to prepare your download. Please try again or contact support."
        );
      }
    };

    fetchDownloadLink();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-100 via-yellow-50 to-purple-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full text-center">
        {state === "loading" && (
          <div className="space-y-8">
            {/* Minimal spinner */}
            <div className="w-12 h-12 border-2 border-black/10 border-t-black/30 rounded-full animate-spin mx-auto"></div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-tight text-black/90">
                Preparing your download
              </h1>
              
              <div className="w-12 h-px bg-black/10 mx-auto my-6"></div>
              
              <p className="text-sm sm:text-base text-black/60 font-light leading-relaxed max-w-md mx-auto">
                Thank you for your purchase and support. ♡
              </p>
            </div>
          </div>
        )}

        {state === "success" && downloadUrl && (
          <div className="space-y-8">
            {/* Minimal success icon */}
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mx-auto">
              <svg 
                className="w-7 h-7 text-black/70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-tight text-black/90">
                Thank you ♡
              </h1>
              
              <div className="w-12 h-px bg-black/10 mx-auto"></div>
              
              <p className="text-sm sm:text-base text-black/60 font-light leading-relaxed max-w-md mx-auto">
                Your download should start automatically.
              </p>
              
              <div className="pt-4">
                <a
                  href={downloadUrl}
                  className="inline-block px-10 py-3.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition-all duration-200"
                >
                  Click here if download doesn&apos;t start
                </a>
              </div>
              
              <p className="text-sm sm:text-base text-black/40 font-light pt-4">
                For security, this link expires in 10 minutes.
              </p>
            </div>
          </div>
        )}

        {state === "error" && (
          <div className="space-y-8">
            {/* Minimal error icon */}
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto">
              <svg 
                className="w-7 h-7 text-black/70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-tight text-black/90">
                Something went wrong
              </h1>
              
              <div className="w-12 h-px bg-black/10 mx-auto"></div>
              
              <p className="text-sm sm:text-base text-black/60 font-light leading-relaxed max-w-md mx-auto">
                {errorMessage}
              </p>
              
              <div className="pt-4">
                <a
                  href="/"
                  className="inline-block px-10 py-3.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition-all duration-200"
                >
                  Return home
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DownloadClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-r from-red-100 via-yellow-50 to-purple-100 flex items-center justify-center px-6 py-24">
          <div className="max-w-2xl w-full text-center space-y-8">
            <div className="w-12 h-12 border-2 border-black/10 border-t-black/30 rounded-full animate-spin mx-auto"></div>
            <h1 className="text-3xl md:text-4xl italic font-serif leading-tight text-black/90">
              Loading...
            </h1>
          </div>
        </div>
      }
    >
      <DownloadContent />
    </Suspense>
  );
}
