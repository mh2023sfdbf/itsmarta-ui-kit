import Image from 'next/image';

export default function OurTips() {
  return (
    <section className="relative overflow-hidden pb-44 pt-20 bs-section-dragged">
      <div className="relative z-10 container mx-auto px-4">
        <p className="mb-5 font-heading font-medium text-xs tracking-wider text-transparent bg-clip-text bg-gradient-cyan uppercase text-center">
          OUR TIPS
        </p>
        <h2 className="mb-24 text-center font-heading text-4xl md:text-5xl text-gray-800">
          Did You Know?
        </h2>
        <div className="md:mx-auto md:max-w-6xl">
          <div className="flex flex-wrap -m-5">
            {/* Tip 1: Easy Upscale */}
            <div className="w-full md:w-1/2 p-5 md:mt-auto">
              <div className="p-9 transform hover:-translate-y-3 rounded-2xl transition ease-out duration-1000 bg-[#f7f6f4]">
                <video className="mx-auto w-full h-full object-cover" loop muted autoPlay playsInline>
                  <source src="https://moodboardai.com/assets/did-you-know/Upscale.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div></div>
                <h3 className="font-heading text-3xl mt-6 pl-6 mb-4">
                  <span style={{ fontSize: '1.75rem', fontWeight: 'inherit', backgroundColor: 'rgb(247 246 244 / var(--tw-bg-opacity))', color: 'rgba(0,0,0,var(--tw-text-opacity))' }}>
                    Easy Upscale and more
                  </span>
                </h3>
                <p className="font-heading text-base text-opacity-70 pl-6">
                  You can upscale your photo for high-resolution results, or remove unwanted items.
                </p>
              </div>
            </div>

            {/* Tip 2: Integrate Designer Styles */}
            <div className="w-full md:w-1/2 p-5">
              <div className="flex flex-col justify-between transform hover:-translate-y-3 overflow-hidden rounded-2xl transition ease-out duration-1000 bg-[#f7f6f4] p-9">
                <div className="pb-0 mb-4 p-0">
                  <p className="mb-4 font-heading text-base text-opacity-70 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb mr-2 text-yellow-500 animate-pulse" viewBox="0 0 16 16">
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                    </svg>
                    Pro Tip
                  </p>
                  <h3 className="font-heading text-3xl mb-6 w-3/4">
                    You Can Integrate Top Designer Styles
                  </h3>
                  <div className="mb-5">
                    <Image 
                      src="/assets/did-you-know/MyRoomDesignerAI-result1.jpg" 
                      alt="MyRoomDesigner AI result example" 
                      width={800} 
                      height={600} 
                    />
                  </div>
                  <p className="mt-6 font-heading mb-4">
                    Dreaming of a room styled like Magnolia, Becki Owens, or Studio McGee? Simply enter your favorite designer's name in the chat, and the AI will craft a stunning space tailored to your aesthetic.
                  </p>
                  <div className="flex space-x-4 mt-6">
                    <button
                      className="w-[200px] sm:w-[200px] py-3 px-8 bg-[#2C2C2C] hover:bg-black text-white rounded-full font-heading text-base hover:shadow-lg transition-all duration-300 shadow-sm"
                    >
                      Design your room
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 3: Find Similar Products */}
            <div className="w-full md:w-1/2 p-5">
              <div className="flex flex-col justify-between transform hover:-translate-y-3 overflow-hidden rounded-2xl transition ease-out duration-1000 bg-[#f7f6f4] p-4 p-9">
                <div className="pb-0 p-9 mb-4">
                  <h3 className="mb-5 font-heading text-3xl">
                    Explore Real-Life Products
                  </h3>
                  <p className="mt-6 font-heading mb-2">
                    You can find similar products based on what's in your photo with ease. Simply click on the <strong>"Find Similar"</strong> button, then select the item in your photo that you want to match.
                  </p>
                </div>
                <video className="mx-auto w-full h-full object-cover px-4 pb-6" loop muted autoPlay playsInline>
                  <source src="/assets/did-you-know/Find-Similar-Products-MyRoomDesigner-AI.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Tip 4: Customize Freely */}
            <div className="w-full md:w-1/2 p-5">
              <div className="p-9 transform hover:-translate-y-3 rounded-2xl transition ease-out duration-1000 bg-[#f7f6f4]">
                <Image 
                  src="/assets/did-you-know/Mood-Board-Editor-with-Shopping-List-Creator.png" 
                  alt="Mood Board Editor with Shopping List Creator" 
                  width={800} 
                  height={600} 
                />
                <div className="pb-0 p-6 mb-6">
                  <h3 className="mb-5 font-heading text-3xl">Customize freely</h3>
                  <p className="mb-4 font-heading text-base text-opacity-70">
                    You can import your AI-generated photos into the Mood Board Editor for further customization. Explore powerful features like:
                  </p>
                </div>
                <ul className="inline-block max-w-sm justify-center text-center ml-6">
                  <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-2.5 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>Shopping List Creator</p>
                  </li>
                  <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-2.5 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>Background Remover</p>
                  </li>
                  <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-2.5 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>One-click Import of Favorites</p>
                  </li>
                  <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-2.5 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>Crop, Flip, and Duplicate Items</p>
                  </li>
                  <li className="flex items-center font-heading font-medium text-base text-gray-900 text-center md:text-left">
                    <svg className="mr-2.5 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082" />
                    </svg>
                    <p>Find Similar Products</p>
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
