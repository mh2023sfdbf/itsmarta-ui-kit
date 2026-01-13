export default function CTAWithImages() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-28 bg-orange-50">
      {/* Decorative Purple Blob */}
      <div className="absolute -bottom-36 -right-36 w-[500px] h-[500px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(300,300)">
            <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#E9D8FD"></path>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-4">
            Start Your Emotional Journey Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Take control of your emotional well-being. Start tracking your emotions and reflecting on your mental health today.
          </p>
          <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 bg-white hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">
            Track Your Mood
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Image 1 */}
          <div className="rounded-xl overflow-hidden aspect-square shadow">
            <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Clamalo-mental-health-tracking.png" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Image 2 */}
          <div className="rounded-xl overflow-hidden aspect-square shadow">
            <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Screenshot-2025-04-02-at-16-26-17.png" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Video */}
          <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden aspect-square shadow">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src="https://app.clamalo.com/videos/typing1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

