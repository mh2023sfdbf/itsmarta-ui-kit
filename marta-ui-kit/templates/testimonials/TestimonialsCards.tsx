export default function TestimonialsCards() {
  return (
    <section className="py-20 md:py-40 overflow-hidden bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="font-heading text-center mx-auto md:text-left text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900">
            What our customers say
          </h2>
        </div>
        <div className="flex flex-nowrap overflow-x-auto xl:flex-wrap -mx-4 pb-8 scrollbar-hide">
          <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
              <p className="text-2xl font-normal mb-10 leading-relaxed">
                &quot;This platform transformed how we work. The intuitive design and powerful features helped us achieve results we didn&apos;t think were possible. It&apos;s become essential to our daily workflow.&quot;
              </p>
              <div className="mt-auto flex items-center gap-6">
                <img className="block w-14 h-14 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw5fHx3b21hbnxlbnwwfDJ8fHwxNzQzNjA3MzQ3fDA&ixlib=rb-4.0.3&q=85&w=1920" alt="" />
                <div>
                  <span className="block text-xl font-medium">Sarah M., Product Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
              <p className="text-2xl font-normal mb-10 leading-relaxed">
                &quot;After trying multiple solutions, this one finally delivered. The attention to detail and user experience is exceptional. Our team&apos;s productivity increased significantly within the first month.&quot;
              </p>
              <div className="mt-auto flex items-center gap-6">
                <img className="block w-14 h-14 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxOXx8bWFufGVufDB8Mnx8fDE3NDM2MDczNzd8MA&ixlib=rb-4.0.3&q=85&w=1920" alt="" />
                <div>
                  <span className="block text-xl font-medium">Michael Chen, Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full p-10 shadow-md rounded-2xl">
              <p className="text-2xl font-normal mb-10 leading-relaxed">
                &quot;Simple, elegant, and incredibly effective. It solves a problem I didn&apos;t even realize I had. The interface is so intuitive that our entire team was up and running in minutes.&quot;
              </p>
              <div className="mt-auto flex items-center gap-6">
                <img className="block w-14 h-14 rounded-full flex-shrink-0" src="https://static.shuffle.dev/uploads/files/53/531ff9bb8642803b20f95b82b6df96f0f1130836/michelle.jpeg" alt="" />
                <div>
                  <span className="block text-xl font-medium">Jessica Torres, Design Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

