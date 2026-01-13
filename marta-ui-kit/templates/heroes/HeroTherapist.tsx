export default function HeroTherapist() {
  return (
    <section className="bg-orange-50">
      {/* CTA Section */}
      <div className="container mx-auto p-4 mt-8 pb-12">
        <div className="flex flex-wrap items-center -m-4 mb-12">
          {/* Image First */}
          <div className="lg:w-1/2 p-4 w-full">
            <img src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/Clamalo-Images-1.png" alt="" className="w-full" />
          </div>
          {/* Text Second */}
          <div className="w-full lg:w-1/2 p-4 lg:pl-20">
            <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl font-bold mb-5 max-w-md md:max-w-xl">
              Turn Client Journaling into Deeper Insights and More Effective Therapy
            </h1>
            <p className="text-gray-600 mb-6 max-w-lg">
              Empower your practice with real-time emotional tracking from your clients. <span className="font-sego">YourLogo</span> helps you understand emotional patterns, improve communication, and increase client engagement between sessions.
            </p>
            <div className="flex flex-wrap -m-2">
              <div className="w-full sm:w-auto p-2">
                <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black bg-purple-200 hover:bg-purple-100 rounded-full transition duration-300">
                  Register as a Therapist
                </a>
              </div>
              <div className="xl:flex items-center space-x-2 p-2 xl:hidden">
                <a href="#" className="inline-flex px-6 text-lg font-medium text-black transition duration-300 border border-gray-900 rounded-full py-4 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100 xl:hidden">
                  Sign In
                </a>
              </div>
              <div className="p-2 w-full sm:w-auto hidden md:block">
                <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black bg-[#fbf9bf] hover:bg-yellow-100 rounded-full transition duration-300 hidden xl:block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

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

