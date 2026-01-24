export default function TableComparison() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-32 pb-44 pt-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="mb-5 font-heading font-medium text-xs tracking-wider text-transparent bg-clip-text bg-gradient-cyan uppercase text-center">
          WHY CHOOSE US?
        </p>
        <h2 className="mb-12 sm:mb-24 text-center font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-800">
          How We Compare
        </h2>
        
        {/* Comparison Table Container */}
        <div className="rounded-xl bg-[#f7f6f4] p-4 sm:p-8 lg:p-14">
          {/* Scrollable Table Area */}
          <div className="relative overflow-x-auto mb-6 sm:mb-8">
            <table className="w-full text-sm text-left text-gray-600 min-w-[800px]">
              <thead>
                <tr className="border-b">
                  <th className="py-3 sm:py-4 px-3 sm:px-6 font-medium text-gray-700 text-xs sm:text-sm"></th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-black bg-pink-50 border-l-4 border-pink-400 text-xs sm:text-sm">
                    Our Platform
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-black text-xs sm:text-sm">
                    Alternative A
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-black text-xs sm:text-sm">
                    Alternative B
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Processing Speed */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Processing Speed
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Lightning Fast</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Slower Performance</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Moderate Speed</span>
                    </div>
                  </td>
                </tr>

                {/* Row 2: Quality */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Output Quality
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Premium Quality</div>
                        <div className="text-xs text-gray-600">Consistent results</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Variable Quality</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Standard Quality</span>
                    </div>
                  </td>
                </tr>

                {/* Row 3: Resolution */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Resolution Options
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">High-Resolution Output</div>
                        <div className="text-xs text-gray-600">Crystal clear results</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Limited Resolution</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Standard Resolution Only</span>
                    </div>
                  </td>
                </tr>

                {/* Row 4: Interactive Features */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Interactive Features
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Full Feature Suite</div>
                        <div className="text-xs text-gray-600">Complete customization tools</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Limited Interaction</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Basic Tools Only</span>
                    </div>
                  </td>
                </tr>

                {/* Row 5: Analysis */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Smart Analysis
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">AI-Powered Analysis</div>
                        <div className="text-xs text-gray-600">Instant insights and recommendations</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">No Smart Analysis</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Manual Processing Only</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Button Outside Scroll Area */}
          <div className="w-full">
            <button 
              className="w-full py-3 sm:py-4 bg-black text-white rounded-full hover:bg-gray-900 transition duration-300 ease-in-out shadow-lg text-sm sm:text-base"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
