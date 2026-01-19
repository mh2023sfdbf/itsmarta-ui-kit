export default function ComparisonTable() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-32 pb-44 pt-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="mb-5 font-heading font-medium text-xs tracking-wider text-transparent bg-clip-text bg-gradient-cyan uppercase text-center">
          WHY CHOOSE MYROOMDESIGNER.AI?
        </p>
        <h2 className="mb-12 sm:mb-24 text-center font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-800">
          How We Compare to Other Tools
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
                    MyRoomDesigner.AI
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-black text-xs sm:text-sm">
                    ChatGPT
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-black text-xs sm:text-sm">
                    Other Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Photo Generation Speed */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Photo Generation Speed
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Under 4 Seconds</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">More than 10 Seconds</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">6-8 Seconds</span>
                    </div>
                  </td>
                </tr>

                {/* Row 2: Room Layout */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Room Layout
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Keeps Original Layout</div>
                        <div className="text-xs text-gray-600">Preserves walls & doors</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Layout Is Often Altered</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Partial Layout Preservation</span>
                    </div>
                  </td>
                </tr>

                {/* Row 3: Image Resolution */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Image Resolution
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">High-Resolution Upscaling</div>
                        <div className="text-xs text-gray-600">Crystal clear results</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Resolution Can Be Limited</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Standard Resolution Only - 4K renders at extra cost</span>
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
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Full Interaction Suite</div>
                        <div className="text-xs text-gray-600">Chat with photo, swap/remove parts & colors</div>
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
                      <span className="text-gray-600 text-xs sm:text-sm">Basic Editing Tools Only</span>
                    </div>
                  </td>
                </tr>

                {/* Row 5: Photo Analysis */}
                <tr className="border-b">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-800 text-xs sm:text-sm">
                    Photo Analysis
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 bg-pink-50 border-l-4 border-pink-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-600 font-bold text-sm sm:text-lg">✅</span>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">AI Photo Analysis</div>
                        <div className="text-xs text-gray-600">Upload a photo, and our AI will instantly analyze photo quality, layout, and angle</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">No Quality Feedback for User</span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-500 font-bold text-sm sm:text-lg">❌</span>
                      <span className="text-gray-600 text-xs sm:text-sm">No Quality Feedback for User</span>
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
              Start Designing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
