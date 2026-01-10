'use client';

import { useState } from 'react';

export default function FooterComprehensive() {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  
  // Transparent 1x1 pixel placeholder
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:mt-6">
        <div className="flex flex-wrap -m-6 border-t border-gray-200 md:pt-8">
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-5/12 p-6">
            <div className="flex flex-col justify-between h-full">
              <div>
                <img className="mb-12" src={placeholder} alt="Logo"/>
              </div>
              
              {/* Social Media Buttons */}
              <div className="mb-8">
                <h3 className="mb-4 font-heading font-semibold text-xs uppercase tracking-px text-gray-900">Follow Us</h3>
                <div className="flex space-x-5 text-gray-900">
                  <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.05c0 4.017 2.926 7.347 6.75 7.951V10.38H4.72V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98H10.55c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25v5.625C13.074 15.397 16 12.067 16 8.049z"></path>
                    </svg>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.83 0 5.555.01 4.703.048 3.85.088 3.269.222 2.76.42A3.91 3.91 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.556 0 5.827 0 8c0 2.172.01 2.444.048 3.297.04.852.174 1.434.372 1.943.205.525.478.972.923 1.416a3.92 3.92 0 0 0 1.416.924c.51.197 1.09.332 1.942.371C5.556 15.99 5.827 16 8 16c2.173 0 2.444-.01 3.297-.049.852-.04 1.434-.174 1.943-.371a3.922 3.922 0 0 0 1.416-.924 3.93 3.93 0 0 0 .924-1.416c.197-.509.331-1.091.371-1.943.039-.853.049-1.125.049-3.297 0-2.173-.01-2.444-.049-3.297-.04-.852-.174-1.434-.371-1.943a3.93 3.93 0 0 0-.924-1.416 3.922 3.922 0 0 0-1.416-.924c-.509-.197-1.091-.332-1.943-.371C10.444.01 10.173 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231 0 2.136-.008 2.389-.047 3.232-.035.78-.166 1.204-.275 1.485a2.48 2.48 0 0 1-.598.92 2.48 2.48 0 0 1-.92.598c-.28.11-.704.24-1.485.275-.843.039-1.096.047-3.232.047-2.136 0-2.389-.008-3.232-.047-.78-.035-1.204-.165-1.485-.275a2.48 2.48 0 0 1-.92-.598 2.48 2.48 0 0 1-.599-.92c-.11-.28-.24-.704-.275-1.485C1.45 10.39 1.442 10.137 1.442 8c0-2.135.008-2.388.047-3.231.035-.78.165-1.204.275-1.485a2.48 2.48 0 0 1 .599-.92 2.48 2.48 0 0 1 .92-.599c.281-.109.705-.24 1.485-.275C5.611 1.45 5.864 1.442 8 1.442zM8 3.838a4.162 4.162 0 1 0 0 8.324 4.162 4.162 0 0 0 0-8.324zm0 1.44a2.721 2.721 0 1 1 0 5.442 2.721 2.721 0 0 1 0-5.442zM12.305 3.3a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"></path>
                    </svg>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-sm">© 2026. All Rights Reserved</p>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6">
            <div className="h-full">
              <button 
                onClick={() => setCompanyOpen(!companyOpen)}
                className="flex lg:hidden justify-between w-full tracking-wide text-xs focus:outline-none font-heading text-gray-500 border-t border-gray-200 py-4"
              >
                Company
                <span className={`transform transition-transform text-gray-500 ${companyOpen ? 'rotate-180' : ''}`}>
                  +
                </span>
              </button>
              <h3 className="mb-9 hidden lg:block font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                Company
              </h3>
              <ul className={`pl-4 lg:pl-0 mt-2 lg:mt-0 space-y-2 lg:space-y-4 mb-4 ${companyOpen ? 'block' : 'hidden lg:block'}`}>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">Features</a></li>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">About Us</a></li>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">Pricing</a></li>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">Pricing for Therapists</a></li>
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6">
            <div className="h-full">
              <button 
                onClick={() => setSupportOpen(!supportOpen)}
                className="flex lg:hidden justify-between w-full tracking-wide text-xs focus:outline-none font-heading text-gray-500 border-t border-gray-200 py-4"
              >
                Support
                <span className={`transform transition-transform text-gray-500 ${supportOpen ? 'rotate-180' : ''}`}>
                  +
                </span>
              </button>
              <h3 className="mb-9 hidden lg:block font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                Support
              </h3>
              <ul className={`pl-4 lg:pl-0 mt-2 lg:mt-0 space-y-2 lg:space-y-4 mb-4 ${supportOpen ? 'block' : 'hidden lg:block'}`}>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">Account</a></li>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Legals Section */}
          <div className="w-full md:w-1/2 lg:w-3/12 px-6">
            <div className="h-full">
              <button 
                onClick={() => setLegalOpen(!legalOpen)}
                className="flex lg:hidden justify-between w-full tracking-wide text-xs focus:outline-none font-heading text-gray-500 border-t border-gray-200 py-4"
              >
                Legals
                <span className={`transform transition-transform text-gray-500 ${legalOpen ? 'rotate-180' : ''}`}>
                  +
                </span>
              </button>
              <h3 className="mb-9 hidden lg:block font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                Legals
              </h3>
              <ul className={`pl-4 lg:pl-0 mt-2 lg:mt-0 space-y-2 lg:space-y-4 md:mr-14 ${legalOpen ? 'block' : 'hidden lg:block'}`}>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">Terms & Conditions</a></li>
                <li><a className="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="">Privacy Policy</a></li>
                <li className="md:pt-4">
                  <a className="font-heading font-medium text-base hover:text-purple-500 bg-pink-50 font-black text-purple-600" href="">
                    Save up to 25% with our Annual Plans.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

