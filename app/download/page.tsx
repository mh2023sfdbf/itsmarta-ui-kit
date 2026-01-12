'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// Force dynamic rendering - this page needs query params at runtime
export const dynamic = 'force-dynamic';

type DownloadState = 'loading' | 'success' | 'error';

export default function DownloadPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [state, setState] = useState<DownloadState>('loading');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (!sessionId) {
      setState('error');
      setErrorMessage('Missing payment session. Please contact support.');
      return;
    }

    // Fetch the signed download URL from our API
    const fetchDownloadLink = async () => {
      try {
        const response = await fetch(
          `/api/download-link?session_id=${encodeURIComponent(sessionId)}`
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to generate download link');
        }

        const { url } = await response.json();
        setDownloadUrl(url);
        setState('success');

        // Auto-start download by redirecting to the signed URL
        window.location.href = url;
      } catch (error) {
        console.error('Download link error:', error);
        setState('error');
        setErrorMessage(
          error instanceof Error 
            ? error.message 
            : 'Unable to prepare your download. Please try again or contact support.'
        );
      }
    };

    fetchDownloadLink();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {state === 'loading' && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-black mx-auto mb-6"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Preparing Your Download...
            </h1>
            <p className="text-gray-600">
              Verifying your payment and generating secure download link.
            </p>
          </>
        )}

        {state === 'success' && downloadUrl && (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-8 h-8 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Download Starting...
            </h1>
            <p className="text-gray-600 mb-6">
              Your download should start automatically.
            </p>
            <a
              href={downloadUrl}
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Click here if download doesn&apos;t start
            </a>
            <p className="text-xs text-gray-400 mt-6">
              For security, this link expires in 10 minutes.
            </p>
          </>
        )}

        {state === 'error' && (
          <>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-8 h-8 text-red-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Download Failed
            </h1>
            <p className="text-red-600 mb-6">
              {errorMessage}
            </p>
            <a
              href="/"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Return Home
            </a>
          </>
        )}
      </div>
    </div>
  );
}

