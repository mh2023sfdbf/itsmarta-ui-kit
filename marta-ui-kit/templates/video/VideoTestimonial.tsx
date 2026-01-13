'use client';

import { useState, useRef } from 'react';

export default function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };
  
  return (
    <section className="relative overflow-hidden bg-orange-50 py-36">
      {/* Decorative Blob Background */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-70">
          <g transform="translate(300,300)">
            <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#FEF3C7"></path>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        {/* Heading */}
        <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-4">
          <span className="font-sego">YourLogo</span> - The Everyday Journaler&apos;s Friend
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Co-Founder & Therapist <span className="font-semibold text-gray-900">Claire Linley</span> shares how{' '}
          <span className="font-sego">YourLogo</span> makes it easy for everyone to enjoy the powerful benefits of journaling.
        </p>

        {/* Video Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-black/10">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover rounded-3xl" 
            playsInline
            onClick={handleVideoClick}
          >
            <source src="https://app.clamalo.com/videos/Clamalo%20-%20Client%20Introduction%20SITE%20II.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center hover:bg-opacity-40 transition cursor-pointer" onClick={handleVideoClick}>
              <div className="w-10 h-10 md:w-20 md:h-20 bg-white shadow-md rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <div className="w-2 h-2 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-yellow-500 ml-1.5"></div>
              </div>
            </div>
          )}
          {playing && (
            <div className="absolute inset-0 flex items-center justify-center transition cursor-pointer" onClick={handleVideoClick}>
              <div className="w-10 h-10 md:w-20 md:h-20 bg-white shadow-md rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-yellow-500 rounded-sm"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

