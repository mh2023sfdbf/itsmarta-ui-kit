'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 md:py-40">
      <div className="container mx-auto px-4">
        <div className="pt-14">
          <div className="max-w-sm sm:max-w-md md:max-w-none mb-20">
            <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl">Frequently Asked Questions</h1>
          </div>
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {/* Question 1 */}
              <div className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => setSelected(selected === 1 ? null : 1)}
                  className={`flex items-start md:items-center justify-between w-full text-lg focus:outline-none text-left ${
                    selected === 1 ? 'font-bold text-gray-700' : 'text-gray-900'
                  }`}
                >
                  <span className="font-heading pr-4">What is <span className="font-sego">YourLogo</span>?</span>
                  <span className="text-gray-500">{selected === 1 ? '-' : '+'}</span>
                </button>
                {selected === 1 && (
                  <div className="pt-4 text-gray-700 text-base max-w-screen-md">
                    <span className="font-sego">YourLogo</span> is a digital journaling platform designed to help people track emotions, reflect on moods, and record thoughts and experiences. It&apos;s a personal space, but you can also choose to share your journal entries with your therapist to support emotional well-being and improve outcomes.
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => setSelected(selected === 2 ? null : 2)}
                  className={`flex items-start md:items-center justify-between w-full text-lg focus:outline-none text-left ${
                    selected === 2 ? 'font-bold text-gray-700' : 'text-gray-900'
                  }`}
                >
                  <span className="font-heading pr-4">Is <span className="font-sego">YourLogo</span> free to use?</span>
                  <span className="text-gray-500">{selected === 2 ? '-' : '+'}</span>
                </button>
                {selected === 2 && (
                  <div className="pt-4 text-gray-700 text-base max-w-screen-md">
                    Absolutely. Journaling is free for individuals who want a safe, private space to explore their emotions. Only therapists pay to use <span className="font-sego">YourLogo</span>&apos;s advanced features and client tools.
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => setSelected(selected === 3 ? null : 3)}
                  className={`flex items-start md:items-center justify-between w-full text-lg focus:outline-none text-left ${
                    selected === 3 ? 'font-bold text-gray-700' : 'text-gray-900'
                  }`}
                >
                  <span className="font-heading pr-4">How does <span className="font-sego">YourLogo</span> work?</span>
                  <span className="text-gray-500">{selected === 3 ? '-' : '+'}</span>
                </button>
                {selected === 3 && (
                  <div className="pt-4 text-gray-700 text-base max-w-screen-md">
                    <ul className="list-disc space-y-2 pl-5">
                      <li>Journaling anytime, anywhere: Use text, audio, or video to capture how you&apos;re feeling, whenever it suits you.</li>
                      <li>Optional sharing: You control whether your entries are shared with a connected therapist.</li>
                      <li>Privacy-first: Therapists can&apos;t browse or search for users — your identity stays protected. However, you can explore and connect with therapists freely.</li>
                      <li>Mobile friendly: Works on any browser, whether you&apos;re on a phone, tablet or computer.</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => setSelected(selected === 4 ? null : 4)}
                  className={`flex items-start md:items-center justify-between w-full text-lg focus:outline-none text-left ${
                    selected === 4 ? 'font-bold text-gray-700' : 'text-gray-900'
                  }`}
                >
                  <span className="font-heading pr-4">How do I get started?</span>
                  <span className="text-gray-500">{selected === 4 ? '-' : '+'}</span>
                </button>
                {selected === 4 && (
                  <div className="pt-4 text-gray-700 text-base max-w-screen-md">
                    Visit your website, sign up, and start journaling. No payment. No pressure.
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => setSelected(selected === 5 ? null : 5)}
                  className={`flex items-start md:items-center justify-between w-full text-lg focus:outline-none text-left ${
                    selected === 5 ? 'font-bold text-gray-700' : 'text-gray-900'
                  }`}
                >
                  <span className="font-heading pr-4">Do I need a therapist to use <span className="font-sego">YourLogo</span>?</span>
                  <span className="text-gray-500">{selected === 5 ? '-' : '+'}</span>
                </button>
                {selected === 5 && (
                  <div className="pt-4 text-gray-700 text-base max-w-screen-md">
                    Nope. You can use <span className="font-sego">YourLogo</span> purely for personal reflection. If you want to share with a therapist later, you can do that anytime.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

