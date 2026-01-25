'use client';

export default function SignInSplit() {
  // Transparent 1x1 pixel placeholder
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";
  
  return (
    <section 
      className="relative min-h-screen bg-[#f7f6f4]" 
      style={{ backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: 'center' }}
      suppressHydrationWarning
    >
      <div className="min-h-screen flex items-center py-8" suppressHydrationWarning>
        <div className="w-full md:w-3/5 lg:w-1/2 flex items-center justify-center px-4">
          <div className="max-w-sm w-full mx-auto">
            <div className="mb-6 text-center">
              <a className="inline-block mb-6" href="#">
                <img className="h-16" src={placeholder} alt="Logo"/>
              </a>
              <h3 className="mb-4 text-xl md:text-2xl font-heading">Sign in to your account</h3>
            </div>
            
            <form action="#" onSubmit={(e) => e.preventDefault()} suppressHydrationWarning>
              <button 
                type="button"
                className="font-heading text-sm sm:text-base rounded-full cursor-pointer hover:ring-1 ring-1 ring-gray-700 hover:ring-gray-500 mx-auto mb-3 flex items-center justify-center p-2 w-2/3"
              >
                <span>Sign in with Google</span>
              </button>

              <div className="flex items-center justify-center mb-6">
                <div className="border-t border-coolGray-300 flex-grow mr-4"></div>
                <span className="text-gray-400 text-xs">or</span>
                <div className="border-t border-coolGray-300 flex-grow ml-4"></div>
              </div>

              <div className="mb-6" suppressHydrationWarning>
                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="email">
                  Email
                </label>
                <input 
                  id="email" 
                  className="block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-50" 
                  type="email" 
                  placeholder="you@example.com"
                  autoComplete="email"
                  suppressHydrationWarning
                />
              </div>

              <div className="mb-3" suppressHydrationWarning>
                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="password">
                  Password
                </label>
                <input 
                  id="password" 
                  className="block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-50" 
                  type="password" 
                  placeholder="************"
                  autoComplete="current-password"
                  suppressHydrationWarning
                />
              </div>

              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="w-full md:w-auto mt-1">
                  <a className="inline-block text-xs text-pink-500 hover:text-pink-600" href="#">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button 
                type="submit"
                className="font-heading block py-2 px-5 text-sm sm:text-base rounded-full cursor-pointer hover:ring-1 ring-1 ring-gray-700 hover:ring-gray-500 text-center mx-auto mb-4 w-2/3" 
              >
                Sign In
              </button>
              
              <p className="text-center">
                <span className="text-xs">Don&apos;t have an account? </span>
                <a className="inline-block text-xs text-pink-500 hover:text-pink-600 hover:underline" href="#">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <img 
        className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover hidden md:block" 
        src="/images/flower-close-up.jpg" 
        alt="Flower close-up"
      />
    </section>
  );
}

