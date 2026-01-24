import { useState } from "react";

export default function NavMenuMinimal() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="bg-[#f7f6f4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5 relative max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="inline-block text-xs xl:text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
              MINIMAL & CALM
            </a>
          </div>

          {/* Desktop Nav Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden xl:block">
            <ul className="flex items-center">
              <li className="mr-9 text-sm">
                <a
                  href="/"
                  className="nav-link relative px-1 transition duration-200 text-gray-700 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black/10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  About
                </a>
              </li>
              <li className="mr-9 text-sm">
                <a
                  href="#"
                  className="nav-link relative px-1 transition duration-200 text-gray-700 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black/10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  Templates
                </a>
              </li>
              <li className="mr-9 text-sm">
                <a
                  href="#how-it-works"
                  className="nav-link relative px-1 transition duration-200 text-gray-700 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black/10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  How it works
                </a>
              </li>
              <li className="mr-9 text-sm">
                <a
                  href="#pricing"
                  className="nav-link relative px-1 transition duration-200 text-gray-700 hover:text-black hover:font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black/10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Sign In/Register */}
          <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
            <a
              href="#"
              className="inline-flex py-2.5 px-6 text-sm font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-white/60 backdrop-blur-sm"
            >
              Sign In
            </a>
            <a
              href="#"
              className="inline-flex py-2.5 px-6 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800 shadow-sm"
            >
              Register
            </a>
          </div>

          {/* Hamburger Menu (Visible below xl) */}
          <div className="block xl:hidden">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="flex items-center justify-center w-10 h-10"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${mobileNavOpen ? "block" : "hidden"} fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
        <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav className="relative z-10 bg-white h-full overflow-y-auto rounded-r-2xl shadow-xl">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <a href="#" className="block text-xs font-medium uppercase tracking-[0.2em] text-gray-900">
              MINIMAL & CALM
            </a>
            <button onClick={() => setMobileNavOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-black/5 rounded-lg transition-colors duration-200 hover:text-black font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-black/5 rounded-lg transition-colors duration-200 hover:text-black font-medium">
                  Templates
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="block py-2 px-4 text-gray-800 hover:bg-black/5 rounded-lg transition-colors duration-200 hover:text-black font-medium">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pricing" className="block py-2 px-4 text-gray-800 hover:bg-black/5 rounded-lg transition-colors duration-200 hover:text-black font-medium">
                  Pricing
                </a>
              </li>
            </ul>
            <div className="mt-8 space-y-3">
              <a href="#" className="block w-full py-3 px-4 text-center font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-black/5">
                Sign In
              </a>
              <a href="#" className="block w-full py-3 px-4 text-center font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800">
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
