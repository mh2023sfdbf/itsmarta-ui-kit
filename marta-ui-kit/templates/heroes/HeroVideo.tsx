export default function HeroVideo() {
  return (
    <section className="bg-orange-50">
      <div className="container mx-auto py-12 px-4 relative">
        {/* Hero Content with Video Taking Center Stage */}
        <div className="flex flex-col items-center text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto mb-4">
            <span className="block sm:inline">Track.</span>
            <span className="">Reflect.</span>
            <span className="">Grow.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            It&apos;s journaling made simple! Capture your thoughts, feelings, and reflections—just for you, or shared with your therapist if you choose. Your journal, your way.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#" className="py-4 px-8 text-lg font-medium text-black bg-purple-200 hover:bg-purple-100 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Track Your Mood
            </a>
            <a href="#" className="py-4 px-8 text-lg font-medium text-black bg-[#fbf9bf] hover:bg-yellow-100 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Learn More
            </a>
          </div>

          {/* Video in Spotlight */}
          <div className="relative w-full max-w-4xl mx-auto mb-8">
            <div className="absolute rounded-2xl blur-sm"></div>
            <div className="relative p-2 rounded-2xl">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl shadow-2xl">
                  <source src="https://app.clamalo.com/videos/clamalo-main.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <a className="text-center inline-block" href="#">
            <div className="inline-block text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 16.2929L16.1464 13.1464C16.3417 12.9512 16.6583 12.9512 16.8536 13.1464C17.0488 13.3417 17.0488 13.6583 16.8536 13.8536L12.8536 17.8536C12.6583 18.0488 12.3417 18.0488 12.1464 17.8536L8.14645 13.8536C7.95118 13.6583 7.95118 13.3417 8.14645 13.1464C8.34171 12.9512 8.65829 12.9512 8.85355 13.1464L12 16.2929V6.5C12 6.22386 12.2239 6 12.5 6C12.7761 6 13 6.22386 13 6.5V16.2929Z" fill="black"></path>
              </svg>
            </div>
            <p className="text-sm">Scroll to see benefits</p>
          </a>
        </div>
      </div>
    </section>
  );
}

