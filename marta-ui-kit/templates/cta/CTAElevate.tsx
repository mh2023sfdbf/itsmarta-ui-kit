export default function CTAElevate() {
  return (
    <section className="py-20 relative overflow-hidden bg-orange-50">
      {/* Centered Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(300,300)">
            <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#fef3c7"></path>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-6">Ready to Elevate Your Practice?</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Help your clients feel seen, supported, and understood — even between sessions. Use <span className="font-sego">YourLogo</span> to increase client engagement, deepen emotional insights, and drive better therapy results.
            </p>
            <div>
              <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 bg-white hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">
                Register as a Therapist
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Photo 1 */}
            <a href="#" className="w-full aspect-square rounded-xl overflow-hidden shadow-lg duration-300">
              <img className="w-full h-full object-cover" src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-14-50-32.png" alt="" />
            </a>

            {/* Photo 2 */}
            <a href="#" className="w-full aspect-square rounded-xl overflow-hidden shadow-lg transition">
              <img className="w-full h-full object-cover" src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-15-13-52.png" alt="" />
            </a>

            {/* Video Placement */}
            <div className="col-span-2 w-full aspect-square rounded-xl overflow-hidden shadow-lg duration-300">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="https://app.clamalo.com/videos/typing2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

