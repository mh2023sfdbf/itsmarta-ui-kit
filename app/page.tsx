import Navigation from "@/components/layout/Navigation";
import HeroGlassy from "@/components/sections/HeroGlassy";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Footer from "@/components/sections/Footer";
import ScrollLink from "@/components/ui/ScrollLink";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <HeroGlassy />
      
      {/* Designed by a Founder Section */}
      <section id="work" className="pt-20 sm:pt-24 md:pt-28 lg:pt-40 xl:pt-48 pb-20 sm:pb-24 md:pb-28 lg:pb-40 xl:pb-48 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[200px,1fr] lg:grid-cols-[240px,1fr] gap-12 md:gap-16 lg:gap-20 items-start">
              {/* Photo - Left */}
              <div className="mx-auto md:mx-0">
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-1 ring-black/5 shadow-sm">
                  <img 
                    src="/images/marta.png" 
                    alt="Marta" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content - Right */}
              <div className="text-center md:text-left">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-serif leading-relaxed mb-6 lg:mb-8 text-black/90">
                  Designed by a founder
                </h2>

                {/* Attribution style separator */}
                <div className="w-12 h-px bg-black/10 md:mx-0 mx-auto mb-6 lg:mb-8"></div>

                {/* Content */}
                <div className="space-y-5 lg:space-y-6 text-sm sm:text-base leading-relaxed text-black/70 font-light">
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
          </div>
        </div>
      </section>
      
      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Advisory Section */}
      <section id="need-a-second-brain" className="pt-20 sm:pt-24 md:pt-28 pb-20 px-6 md:px-8 scroll-mt-20">
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
