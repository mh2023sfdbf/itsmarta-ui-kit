import React from 'react';
import Image from 'next/image';

export default function ThreeInOne() {
  const products = [
    {
      title: "MyRoomDesigner.AI",
      description: "A tool that simplifies interior design by detecting your room's layout. Interactively chat to add or swap furniture and materials.",
      image: "https://static.shuffle.dev/uploads/files/68/685cdf6531559900d35917105bd95b994e60c466/MyRoomDesigner.png",
      buttonText: "Design your room now",
      link: "",
      features: [
        "Room Design With One-Click",
        "Detects Room Layout",
        "Interactive Chat For Changes",
        "High-Resolution Upscale",
        "Easy Item Removal & Clean Up"
      ]
    },
    {
      title: "Mood Board AI",
      description: "Effortlessly create stunning mood boards and color palettes that capture the essence of your design vision in just a few clicks.",
      image: "https://static.shuffle.dev/uploads/files/68/685cdf6531559900d35917105bd95b994e60c466/Mood-Board-Generation-With-AI.png",
      buttonText: "Generate mood board",
      link: "",
      features: [
        "Mood Board Creation With One-Click",
        "For Interior Design, Fashion, and More",
        "Style and Color Selection",
        "Additional Customization",
        "Easy Item Removal & Clean Up"
      ]
    },
    {
      title: "Mood Board Editor",
      description: "Unleash your creativity with a powerful suite of tools, including a shopping list creator, background remover, and more.",
      image: "https://static.shuffle.dev/uploads/files/68/685cdf6531559900d35917105bd95b994e60c466/Mood-Board-Editor.png",
      buttonText: "Edit a mood board",
      link: "",
      features: [
        "Shopping List Creator",
        "Background Remover",
        "One-click Import of Favorites",
        "Crop, Flip, and Duplicate Items",
        "Find Similar Products"
      ]
    }
  ];

  const CheckIcon = () => (
    <svg className="mr-2.5" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );

  return (
    <section className="relative overflow-hidden py-44 pb-12 bg-[#f7f6f4] p-6 mb-24">
      <div className="hidden md:flex items-center mx-auto justify-center mb-6">
        <p className="font-heading max-w-max px-4 py-2.5 text-xs tracking-wider bg-gradient-to-r from-pink-100 to-gray-50 rounded-full text-gray-400">
          Mood Board AI
        </p>
        <p className="font-heading max-w-max px-4 py-2.5 text-xs tracking-wider bg-gradient-to-r to-gray-50 rounded-full from-gray-100 text-gray-400">
          Board Editor
        </p>
        <p className="font-heading max-w-max px-4 py-2.5 text-xs tracking-wider bg-gradient-to-r from-blue-100 to-gray-50 rounded-full font-bold">
          MyRoomDesigner.AI
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20">
          <h2 className="mb-3 font-heading font-bold text-12xl sm:text-13xl md:text-14xl xl:text-15xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-gray-200 to-blue-400">
            3 in 1
          </h2>
          <h2 className="mb-5 font-heading text-center text-gray-900 text-5xl sm:text-7xl md:text-9xl xl:text-10xl">
            Instead of one you actually buy three
          </h2>
          <p className="text-base text-center mx-auto md:w-2/3 text-gray-600 mb-28">
            <span style={{ fontFamily: 'Lustria, serif', fontSize: 'medium' }}>
              Three essential tools come together to create the ultimate toolkit for your home design journey.
            </span>
          </p>
          
          <div className="mx-auto">
            <div className="flex flex-wrap justify-center -m-6 md:-m-16 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {products.map((product, index) => (
                <div key={index} className="w-full lg:w-1/3 p-6 md:p-16">
                  <h3 className="font-heading text-center text-gray-900 mb-5 text-2xl lg:text-3xl">
                    {product.title}
                  </h3>
                  <p className="text-center mx-auto md:w-2/3 lg:w-full text-gray-600 font-heading mt-6 mb-6">
                    {product.description}
                  </p>
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    width={2000}
                    height={2000}
                    className="w-full h-auto rounded-2xl mb-8 transform ease-out hover:translate-y-3 duration-1000 transition"
                  />
                  <a href={product.link}>
                    <button className="group relative flex items-center justify-center font-heading block py-2 px-5 text-sm sm:text-base rounded-full cursor-pointer font-heading hover:ring-1 ring-1 ring-gray-800 hover:ring-gray-500 mx-auto">
                      <p className="relative">{product.buttonText}</p>
                    </button>
                  </a>
                  
                  <div className="text-center">
                    <ul className="inline-block mb-6 mt-10 max-w-sm text-left">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-start mb-3 font-heading font-medium text-base text-gray-900">
                          <CheckIcon />
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
