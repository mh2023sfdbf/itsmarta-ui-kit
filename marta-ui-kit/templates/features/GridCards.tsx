import Image from 'next/image';

export default function GridCards() {
  return (
    <section className="relative overflow-hidden pb-44 pt-20 bs-section-dragged">
      <div className="relative z-10 container mx-auto px-4">
        <p className="mb-5 font-heading font-medium text-xs tracking-wider text-transparent bg-clip-text bg-gradient-cyan uppercase text-center">
          FEATURED
        </p>
        <h2 className="mb-24 text-center font-heading text-4xl md:text-5xl text-gray-800">
          Discover What's Possible
        </h2>
        <div className="md:mx-auto md:max-w-6xl">
          <div className="flex flex-wrap -m-3">
            {/* Card 1: Feature Highlight */}
            <div className="w-full md:w-1/2 p-3 md:p-0 md:pr-1.5 md:pb-0.5 md:mt-auto">
              <div className="p-9 transform hover:-translate-y-3 rounded-2xl transition ease-out duration-1000 bg-[#f7f6f4]">
                <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                  <video className="absolute inset-0 w-full h-full object-cover rounded-lg" loop muted autoPlay playsInline>
                    <source src="/videos/template-video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div></div>
                <h3 className="font-heading text-3xl mt-6 pl-6 mb-4">
                  <span style={{ fontSize: '1.75rem', fontWeight: 'inherit', backgroundColor: 'rgb(247 246 244 / var(--tw-bg-opacity))', color: 'rgba(0,0,0,var(--tw-text-opacity))' }}>
                    Enhanced Quality & More
                  </span>
                </h3>
                <p className="font-heading text-base text-opacity-70 pl-6">
                  Upgrade your results with high-resolution outputs and advanced refinement tools.
                </p>
              </div>
            </div>

            {/* Card 2: Pro Tip */}
            <div className="w-full md:w-1/2 p-3 md:p-0 md:pl-1.5 md:pb-0.5">
              <div className="flex flex-col justify-between transform hover:-translate-y-3 overflow-hidden rounded-2xl transition ease-out duration-1000 bg-[#f7f6f4] p-9">
                <div className="pb-0 mb-4 p-0">
                  <p className="mb-4 font-heading text-base text-opacity-70 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-lightbulb mr-4 animate-pulse flex-shrink-0" viewBox="0 0 16 16">
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                    </svg>
                    Pro Tip
                  </p>
                  <h3 className="font-heading text-3xl mb-6 w-3/4">
                    Customize With Precision
                  </h3>
                  <div className="mb-5">
                    <Image 
                      src="/images/flower4.png" 
                      alt="Feature example" 
                      width={800} 
                      height={600} 
                    />
                  </div>
                  <p className="mt-6 font-heading mb-4">
                    Take full control with advanced customization options. Simply describe what you want, and watch your vision come to life with precision and style.
                  </p>
                  <div className="flex space-x-4 mt-6">
                    <button
                      className="inline-flex py-2.5 px-5 text-sm font-medium text-white bg-black border border-gray-900 rounded-full transition duration-300 hover:bg-gray-800"
                    >
                      Try It Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Additional Feature */}
            <div className="w-full md:w-1/2 p-3 md:p-0 md:pr-1.5 md:pt-0.5">
              <div className="flex flex-col justify-between transform hover:-translate-y-3 overflow-hidden rounded-2xl transition ease-out duration-1000 bg-[#f7f6f4] p-9">
                <div className="pb-0 mb-4">
                  <h3 className="mb-5 font-heading text-3xl">
                    Explore More Options
                  </h3>
                  <p className="mt-6 font-heading mb-6">
                    Find similar items and related content with ease. Simply select what interests you and discover recommendations tailored to your preferences.
                  </p>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                  <video className="absolute inset-0 w-full h-full object-cover rounded-lg" loop muted autoPlay playsInline>
                    <source src="/videos/template-video4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Card 4: Tools & Features */}
            <div className="w-full md:w-1/2 p-3 md:pl-1.5 md:pt-1.5">
              <div className="p-9 transform hover:-translate-y-3 rounded-2xl transition ease-out duration-1000 bg-[#f7f6f4]">
                <Image 
                  src="/images/flower5.png" 
                  alt="Advanced tools" 
                  width={800} 
                  height={600} 
                />
                <div className="pb-0 p-6 mb-2">
                  <h3 className="py-4 font-heading text-3xl">Powerful Tools Included</h3>
                  <p className="mb-2 font-heading text-base text-opacity-70">
                    Access a comprehensive suite of tools designed to enhance your workflow. Explore features like:
                  </p>
                </div>
                <ul className="inline-block max-w-sm justify-center text-center ml-6">
                  <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>List & Organization</p>
                  </li>
                  <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>Smart Removal</p>
                  </li>
                  <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>One-Click Import</p>
                  </li>
                  <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>Edit & Transform</p>
                  </li>
                  <li className="flex items-center font-heading font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-4 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>Find Similar Items</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
