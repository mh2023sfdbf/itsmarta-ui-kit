export default function CoreFeatures() {
  return (
    <section id="how-it-works" className="relative py-16 lg:py-28 overflow-hidden bg-white">
      {/* Large Yellow Blob - Bottom Right */}
      <div className="absolute bottom-[-50px] right-[-150px] w-[600px] h-[600px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(300,300)">
            <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#fef3c7"></path>
          </g>
        </svg>
      </div>

      {/* Medium Yellow Blob - Top Right */}
      <div className="absolute top-40 right-[-150px] w-[450px] h-[450px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(300,300)">
            <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#E9D8FD"></path>
          </g>
        </svg>
      </div>

      {/* Purple Blob - Top Center Left */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[700px] h-[700px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(300,300)">
            <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#fef3c7"></path>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-xl mb-24">
          <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-6">
            See How <span className="font-sego">YourLogo</span> Helps You To...
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Make meaningful connections in your life through simple, consistent journaling. Your entries help you join the dots and see what&apos;s really going on beneath the surface.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-12 md:space-y-32">
          {/* Feature 1 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-4xl xl:text-5xl mb-6 w-2/3">Track Your Emotions</h3>
              <p className="text-lg mb-6">
                <span className="italic font-black">Record your thoughts</span>, <span className="italic font-black">emotions</span>, and{' '}
                <span className="italic font-black">experiences</span> regularly <span className="italic font-black">using text</span>,{' '}
                <span className="italic font-black">audio</span>, or <span className="italic font-black">video</span>. A clear emotional history helps you see the full picture.
              </p>
              <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">
                Start Tracking
              </a>
            </div>
            <div className="lg:w-1/2">
              <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-14-58-44.png" alt="" className="w-full object-cover" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="overflow-hidden w-3/4 flex justify-center">
                <video autoPlay loop muted playsInline className="mx-auto">
                  <source src="https://res.cloudinary.com/dkkckyvg6/video/upload/v1743690615/Beige_and_White_Aesthetic_Minimalist_Modern_Typography_Beauty_Brand_Logo_wib8us.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-4xl xl:text-5xl mb-6 w-3/4">Reflect and Discover Patterns</h3>
              <p className="text-lg mb-6">
                Identify recurring triggers and patterns. <span className="font-sego">YourLogo</span>&apos;s emograph helps you chart your progress and gain deeper awareness of your emotional journey.
              </p>
              <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">
                Start Reflecting
              </a>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-4xl xl:text-5xl mb-6 w-3/4">Share with Your Therapist</h3>
              <p className="text-lg mb-6">
                If you&apos;re working with a therapist, you have the option to share your entries—so your sessions can be even more focused, personal, and impactful.
              </p>
              <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">
                Share Insights
              </a>
            </div>
            <div className="lg:w-1/2">
              <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-14-47-08.png" alt="" className="w-full object-cover" />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-16-12-41.png" alt="" className="w-full object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-4xl xl:text-5xl mb-6 w-3/4">Improve Emotional Well-Being</h3>
              <p className="text-lg mb-6">
                Gain clarity over your inner world and learn how to make better decisions for your emotional health and the data you track.
              </p>
              <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

