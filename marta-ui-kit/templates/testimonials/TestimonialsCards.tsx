export default function TestimonialsCards() {
  return (
    <section className="py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-sm sm:max-w-md md:max-w-none mb-20">
          <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl">What our customers say</h1>
        </div>
        <div className="flex flex-nowrap overflow-x-auto xl:flex-wrap -mx-4 pb-16">
          <div className="flex-shrink-0 w-full sm:w-100 xl:w-1/3 px-4">
            <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
              <p className="text-2xl font-medium mb-10">
                &quot;Journaling helped me process difficult emotions and understand why I was feeling overwhelmed. My therapist was able to give me better advice because they could see what I was feeling between sessions.&quot;
              </p>
              <div className="mt-auto flex items-center">
                <img className="block w-14 h-14 rounded-full" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw5fHx3b21hbnxlbnwwfDJ8fHwxNzQzNjA3MzQ3fDA&ixlib=rb-4.0.3&q=85&w=1920" alt="" />
                <div className="ml-6">
                  <span className="block text-xl font-medium">Emma R., 27</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full sm:w-100 xl:w-1/3 px-4">
            <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
              <p className="text-2xl font-medium mb-10">
                &quot;I struggled with anxiety for years. <span className="font-sego">YourLogo</span> helped me identify my triggers, and once my therapist saw the patterns, we found solutions that actually worked.&quot;
              </p>
              <div className="mt-auto flex items-center">
                <img className="block w-14 h-14 rounded-full" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxOXx8bWFufGVufDB8Mnx8fDE3NDM2MDczNzd8MA&ixlib=rb-4.0.3&q=85&w=1920" alt="" />
                <div className="ml-6">
                  <span className="block text-xl font-medium">James T., 35</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full sm:w-100 xl:w-1/3 px-4">
            <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
              <p className="text-2xl font-medium mb-10">
                &quot;Honestly it&apos;s so clever! Because most of the time I&apos;ve forgotten to tell my therapist how the last week has been.&quot;
              </p>
              <div className="mt-auto flex items-center">
                <img className="block w-14 h-14 rounded-full" src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/michelle.jpeg" alt="" />
                <div className="ml-6">
                  <span className="block text-xl font-medium">Michelle E., 35</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

