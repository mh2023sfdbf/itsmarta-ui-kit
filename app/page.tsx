import Navigation from "@/components/layout/Navigation";
import HeroGlassy from "@/components/sections/HeroGlassy";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* All content now in HeroGlassy component for better organization */}
        <HeroGlassy />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
