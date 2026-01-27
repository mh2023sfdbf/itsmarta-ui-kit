export default function ThreeColumnFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast & Efficient",
      description: "Built for speed and performance. Get things done faster with streamlined workflows and intelligent automation."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime. Your data is encrypted and protected with industry-leading standards."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Easy Integration",
      description: "Connect with your favorite tools seamlessly. Works with all major platforms and services right out of the box."
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Powerful features designed to help you work smarter, not harder.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-gray-900">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl font-light text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
