export default function BridgeGapCTA() {
  return (
    <section className="relative overflow-hidden bg-orange-50 py-32">
      {/* Decorative Blob */}
      <div className="absolute bottom-[-50px] right-[-150px] w-[600px] h-[600px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(300,300)">
            <path d="M138.6,-155.1C173.2,-120.6,182.4,-60.3,175.1,-7.4C167.7,45.6,143.9,91.3,109.3,126.8C74.6,162.3,29.1,187.7,-18.8,199.2C-66.7,210.8,-117,208.4,-156.8,179.1C-196.5,149.9,-225.8,93.9,-227.7,39.4C-229.6,-15.2,-204.2,-68.2,-167.3,-106.2C-130.3,-144.3,-81.8,-167.3,-27.4,-179.6C27.1,-191.9,81.1,-193.6,138.6,-155.1Z" fill="#fef3c7"></path>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-8">
            Bridge the Gap Between Therapy Sessions
          </h1>
          <p className="text-2xl text-black font-medium mb-10">
            How do you maintain that connection with your client between sessions?{' '}
            <span className="inline-flex items-center mx-1">
              With <span className="font-sego ml-2">YourLogo</span>,
            </span>{' '}
            clients can track their thoughts and moods daily, giving you a clearer, more comprehensive picture of their emotional state. This continuous emotional record enhances patient engagement and leads to more productive, focused sessions.
          </p>
          <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}

