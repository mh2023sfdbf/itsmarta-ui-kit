'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Photo */}
          <a 
            href="/" 
            className="flex items-center hover:opacity-70 transition-opacity"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-black/10">
              <img 
                src="/images/marta.png" 
                alt="Marta" 
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#work" 
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              Work
            </a>
            <a 
              href="https://buy.stripe.com/test_28E4gy5Wf2i37Ri4QJ4ko02"
              className="inline-flex items-center px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
            >
              Buy UI Kit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

