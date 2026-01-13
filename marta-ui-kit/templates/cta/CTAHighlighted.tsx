export default function CTAHighlighted() {
  return (
    <section className="relative overflow-hidden pb-40 px-6 xl:px-32">
      {/* Decorative Blob */}
      <div className="absolute bottom-[-50px] right-[-150px] w-[600px] h-[600px] z-0 pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"></svg>
      </div>

      <div className="container mx-auto relative z-10 bg-gradient-to-r from-red-100 via-yellow-50 to-purple-100 py-36 px-6 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-8">
            Find the Right Therapist for Your Needs
          </h1>
          <p className="text-2xl text-black font-medium mb-10">
            Looking for professional mental health support?{' '}
            <span className="inline-flex items-center mx-1">
              With <span className="font-sego ml-2">YourLogo</span>,
            </span>{' '}
            you can easily connect with qualified therapists who match your specific needs. Browse our extensive database of professionals, read reviews, and schedule your first session - all in one place.
          </p>
          <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100">
            Find a Therapist
          </a>
        </div>
      </div>
    </section>
  );
}
