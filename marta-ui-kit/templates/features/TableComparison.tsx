export default function TableComparison() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-32 pb-44 pt-20 bg-[#f7f6f4]">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="mb-8 font-heading text-xs uppercase tracking-widest text-gray-500 text-center">
          WHY CHOOSE US?
        </p>
        <h2 className="mb-16 sm:mb-32 text-center font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900">
          How We Compare
        </h2>
        
        {/* Comparison Table Container */}
        <div className="rounded-2xl bg-white p-8 sm:p-12 lg:p-20 shadow-sm">
          {/* Scrollable Table Area */}
          <div className="relative overflow-x-auto mb-12 sm:mb-16">
            <table className="w-full text-sm text-left text-gray-600 min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-6 sm:py-8 px-6 sm:px-8 font-medium text-gray-700 text-xs sm:text-sm"></th>
                  <th className="py-6 sm:py-8 px-6 sm:px-8 text-gray-900 font-black bg-gray-50 border-l-4 border-gray-900 text-xs sm:text-sm">
                    Our Platform
                  </th>
                  <th className="py-6 sm:py-8 px-6 sm:px-8 text-gray-700 font-black text-xs sm:text-sm">
                    Alternative A
                  </th>
                  <th className="py-6 sm:py-8 px-6 sm:px-8 text-gray-700 font-black text-xs sm:text-sm">
                    Alternative B
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Processing Speed */}
                <tr className="border-b border-gray-200">
                  <td className="py-6 sm:py-8 px-6 sm:px-8 font-semibold text-gray-800 text-xs sm:text-sm">
                    Processing Speed
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8 bg-gray-50 border-l-4 border-gray-900">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#000000" />
                      </svg>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Lightning Fast</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">Slower Performance</span>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">Moderate Speed</span>
                    </div>
                  </td>
                </tr>

                {/* Row 2: Quality */}
                <tr className="border-b">
                  <td className="py-6 sm:py-8 px-6 sm:px-8 font-semibold text-gray-800 text-xs sm:text-sm">
                    Output Quality
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8 bg-gray-50 border-l-4 border-gray-900">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#000000" />
                      </svg>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Premium Quality</div>
                        <div className="text-xs text-gray-600">Consistent results</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">Variable Quality</span>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">Standard Quality</span>
                    </div>
                  </td>
                </tr>

                {/* Row 3: Resolution */}
                <tr className="border-b">
                  <td className="py-6 sm:py-8 px-6 sm:px-8 font-semibold text-gray-800 text-xs sm:text-sm">
                    Resolution Options
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8 bg-gray-50 border-l-4 border-gray-900">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#000000" />
                      </svg>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">High-Resolution Output</div>
                        <div className="text-xs text-gray-600">Crystal clear results</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">Limited Resolution</span>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">Standard Resolution Only</span>
                    </div>
                  </td>
                </tr>

                {/* Row 4: Interactive Features */}
                <tr className="border-b">
                  <td className="py-6 sm:py-8 px-6 sm:px-8 font-semibold text-gray-800 text-xs sm:text-sm">
                    Interactive Features
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8 bg-gray-50 border-l-4 border-gray-900">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#000000" />
                      </svg>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">Full Feature Suite</div>
                        <div className="text-xs text-gray-600">Complete customization tools</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">Limited Interaction</span>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">Basic Tools Only</span>
                    </div>
                  </td>
                </tr>

                {/* Row 5: Analysis */}
                <tr className="border-b">
                  <td className="py-6 sm:py-8 px-6 sm:px-8 font-semibold text-gray-800 text-xs sm:text-sm">
                    Smart Analysis
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8 bg-gray-50 border-l-4 border-gray-900">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#000000" />
                      </svg>
                      <div className="text-left">
                        <div className="font-medium text-gray-800 text-xs sm:text-sm">AI-Powered Analysis</div>
                        <div className="text-xs text-gray-600">Instant insights and recommendations</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
                      <span className="text-gray-600 text-xs sm:text-sm">No Smart Analysis</span>
                    </div>
                  </td>
                  <td className="py-6 sm:py-8 px-6 sm:px-8">
                    <div className="flex items-center space-x-4">
                      <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#9CA3AF" />
                      </svg>
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
              className="w-full py-5 px-10 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
