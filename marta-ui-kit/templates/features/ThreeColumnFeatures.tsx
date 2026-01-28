export default function ThreeColumnFeatures() {
  const features = [
    {
      number: "01",
      label: "PERFORMANCE",
      title: "Fast & Efficient",
      description: "Built for speed and performance. Get things done faster with streamlined workflows and intelligent automation."
    },
    {
      number: "02",
      label: "SECURITY",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime. Your data is encrypted and protected with industry-leading standards."
    },
    {
      number: "03",
      label: "INTEGRATION",
      title: "Easy Integration",
      description: "Connect with your favorite tools seamlessly. Works with all major platforms and services right out of the box."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-4">
            FEATURES
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-6">
            Everything you need to succeed
          </h2>
          <p className="font-heading text-base md:text-lg text-gray-600 leading-relaxed">
            Powerful features designed to help you work smarter, not harder.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group">
              {/* Number & Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-heading text-4xl md:text-5xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">
                  {feature.number}
                </span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
              
              <p className="font-heading text-xs uppercase tracking-widest text-gray-500 mb-3">
                {feature.label}
              </p>
              
              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl font-light text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="font-heading text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
