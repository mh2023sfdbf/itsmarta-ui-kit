import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8 border-t border-black/10 pt-8">
          {/* Left: Copyright */}
          <div className="w-full md:w-auto">
            <p className="text-sm text-black/60 font-light">
              © 2026 - itsMarta. All Rights Reserved
            </p>
          </div>

          {/* Right: Links */}
          <div className="w-full md:w-auto">
            <nav className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/marta-herget/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black/60 hover:text-black transition-colors font-light"
              >
                LinkedIn
              </a>
              <span className="text-xs text-black/20">•</span>
              <Link
                href="/magazine"
                className="text-sm text-black/60 hover:text-black transition-colors font-light"
              >
                Magazine
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

