export default function FeaturesGlass() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized components that load instantly"
    },
    {
      icon: "🎨",
      title: "Fully Customizable",
      description: "Easily adapt to your brand and style"
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Looks perfect on all devices"
    },
    {
      icon: "🔒",
      title: "Type Safe",
      description: "Built with TypeScript for reliability"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Everything you need to build faster
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional components with modern design patterns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

