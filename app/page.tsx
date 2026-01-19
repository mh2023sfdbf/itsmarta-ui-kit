import Navigation from "@/components/layout/Navigation";
import HeroGlassy from "@/components/sections/HeroGlassy";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <HeroGlassy />
      
      {/* Designed by a Founder Section */}
      <section id="work" className="pt-20 sm:pt-24 md:pt-28 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center px-6 md:px-16 lg:px-32">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed mb-6 text-black/90">
              Designed by a founder
            </h2>

            {/* Attribution style separator */}
            <div className="w-12 h-px bg-black/10 mx-auto mb-8"></div>

            {/* Content */}
            <div className="space-y-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-black/70">
              <p>
                Built at the intersection of product psychology, design, and software.
              </p>
              <p>
                These UI kits focus on making complex software calmer, clearer, and more human to use — without sacrificing structure or technical integrity.
              </p>
              <p>
                Shaped by real experience shipping and iterating SaaS products end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Advisory Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center px-6 md:px-16 lg:px-32">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed mb-6 text-black/90">
              Need a second brain?
            </h2>

            {/* Attribution style separator */}
            <div className="w-12 h-px bg-black/10 mx-auto mb-8"></div>

            {/* Content */}
            <div className="space-y-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-black/70">
              <p>
                I also offer a small amount of product & UX advisory for SaaS founders — usually around clarity, UI decisions, positioning, or conversion.
              </p>
            </div>

            {/* CTA Link */}
            <div className="mt-8">
              <a 
                href="https://app.cal.eu/itsmarta/50min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-black hover:text-black/60 transition-colors group"
              >
                <span>Work with me</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Availability Notice */}
            <p className="mt-4 text-xs text-black/40 italic">
              Limited availability.
            </p>
          </div>
        </div>
      </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
