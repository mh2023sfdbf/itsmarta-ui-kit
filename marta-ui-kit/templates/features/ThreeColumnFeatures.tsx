import React from 'react';
import Image from 'next/image';

export default function ThreeColumnFeatures() {
  const features = [
    {
      title: "Core Feature",
      description: "A comprehensive solution that streamlines your workflow with intelligent tools and seamless integration.",
      image: "https://static.shuffle.dev/uploads/files/68/685cdf6531559900d35917105bd95b994e60c466/MyRoomDesigner.png",
      buttonText: "Explore Now",
      link: "",
      highlights: [
        "One-Click Setup",
        "Smart Detection",
        "Interactive Controls",
        "High-Quality Output",
        "Easy Customization"
      ]
    },
    {
      title: "Creative Tools",
      description: "Effortlessly create stunning visual content that captures the essence of your vision in just a few clicks.",
      image: "https://static.shuffle.dev/uploads/files/68/685cdf6531559900d35917105bd95b994e60c466/Mood-Board-Generation-With-AI.png",
      buttonText: "Create Now",
      link: "",
      highlights: [
        "Instant Creation",
        "Multiple Use Cases",
        "Style Customization",
        "Advanced Options",
        "Quick Refinement"
      ]
    },
    {
      title: "Advanced Editor",
      description: "Unleash your creativity with a powerful suite of tools, including organization features, smart removal, and more.",
      image: "https://static.shuffle.dev/uploads/files/68/685cdf6531559900d35917105bd95b994e60c466/Mood-Board-Editor.png",
      buttonText: "Start Editing",
      link: "",
      highlights: [
        "List & Organization",
        "Smart Removal",
        "One-Click Import",
        "Transform & Edit",
        "Find Similar Items"
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
          Creative Tools
        </p>
        <p className="font-heading max-w-max px-4 py-2.5 text-xs tracking-wider bg-gradient-to-r to-gray-50 rounded-full from-gray-100 text-gray-400">
          Advanced Editor
        </p>
        <p className="font-heading max-w-max px-4 py-2.5 text-xs tracking-wider bg-gradient-to-r from-blue-100 to-gray-50 rounded-full font-bold">
          Core Feature
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20">
          <h2 className="mb-3 font-heading font-bold text-12xl sm:text-13xl md:text-14xl xl:text-15xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-gray-200 to-blue-400">
            All in One
          </h2>
          <h2 className="mb-5 font-heading text-center text-gray-900 text-5xl sm:text-7xl md:text-9xl xl:text-10xl">
            Everything You Need in One Place
          </h2>
          <p className="text-base text-center mx-auto md:w-2/3 text-gray-600 mb-28">
            <span style={{ fontFamily: 'Lustria, serif', fontSize: 'medium' }}>
              Three powerful features work together to create the ultimate toolkit for your creative workflow.
            </span>
          </p>
          
          <div className="mx-auto">
            <div className="flex flex-wrap justify-center -m-6 md:-m-16 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {features.map((feature, index) => (
                <div key={index} className="w-full lg:w-1/3 p-6 md:p-16">
                  <h3 className="font-heading text-center text-gray-900 mb-5 text-2xl lg:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-center mx-auto md:w-2/3 lg:w-full text-gray-600 font-heading mt-6 mb-6">
                    {feature.description}
                  </p>
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    width={2000}
                    height={2000}
                    className="w-full h-auto rounded-2xl mb-8 transform ease-out hover:translate-y-3 duration-1000 transition"
                  />
                  <a href={feature.link}>
                    <button className="inline-flex py-2.5 px-5 text-sm font-medium text-black border border-gray-900 rounded-full transition duration-300 hover:bg-white/60 mx-auto">
                      {feature.buttonText}
                    </button>
                  </a>
                  
                  <div className="text-center">
                    <ul className="inline-block mb-6 mt-10 max-w-sm text-left">
                      {feature.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center justify-start mb-3 font-heading font-medium text-base text-gray-900">
                          <CheckIcon />
                          <p>{highlight}</p>
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
