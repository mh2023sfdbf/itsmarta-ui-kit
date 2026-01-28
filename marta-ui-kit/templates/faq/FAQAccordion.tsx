'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 md:py-40 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-heading text-base md:text-lg text-gray-600 leading-relaxed">Everything you need to know about our product and services.</p>
        </div>
          <div className="space-y-1">
              {/* Question 1 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 1 ? null : 1)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    What features are included in your product?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 1 ? '−' : '+'}
                  </span>
                </button>
                {selected === 1 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    Our product includes a comprehensive suite of tools designed to streamline your workflow. You get access to advanced analytics, real-time collaboration features, customizable templates, automated workflows, and priority customer support. All features are regularly updated based on user feedback.
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 2 ? null : 2)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    How much does it cost?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 2 ? '−' : '+'}
                  </span>
                </button>
                {selected === 2 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    We offer flexible pricing plans to suit different needs. Our starter plan begins at $29/month, with professional and enterprise options available. All plans include a 14-day free trial, and you can cancel anytime. Annual subscriptions save up to 25% compared to monthly billing.
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 3 ? null : 3)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    How do I get started?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 3 ? '−' : '+'}
                  </span>
                </button>
                {selected === 3 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    Getting started is simple. Sign up for a free account, complete the onboarding tour, and start using the platform immediately. Our setup wizard will guide you through the key features, and you can access our comprehensive knowledge base and video tutorials anytime.
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 4 ? null : 4)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    Can I cancel my subscription anytime?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 4 ? '−' : '+'}
                  </span>
                </button>
                {selected === 4 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    Yes, absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll retain access to your account until the end of your current billing period.
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 5 ? null : 5)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    What payment methods do you accept?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 5 ? '−' : '+'}
                  </span>
                </button>
                {selected === 5 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise plans. All payments are processed securely through industry-standard encryption.
                  </div>
                )}
              </div>

              {/* Question 6 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 6 ? null : 6)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    Is my data secure?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 6 ? '−' : '+'}
                  </span>
                </button>
                {selected === 6 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    Security is our top priority. We use bank-level 256-bit encryption, regular security audits, and comply with GDPR and SOC 2 standards. Your data is backed up daily and stored in secure, redundant data centers.
                  </div>
                )}
              </div>

              {/* Question 7 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 7 ? null : 7)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    Do you offer customer support?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 7 ? '−' : '+'}
                  </span>
                </button>
                {selected === 7 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    Yes! We provide 24/7 email support for all users. Professional and Enterprise plan members also get priority support with live chat and phone assistance. Our average response time is under 2 hours.
                  </div>
                )}
              </div>

              {/* Question 8 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 8 ? null : 8)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    Can I integrate with other tools?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 8 ? '−' : '+'}
                  </span>
                </button>
                {selected === 8 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    Absolutely. We offer integrations with popular tools like Slack, Google Workspace, Microsoft Teams, Zapier, and many others. Our API also allows you to build custom integrations tailored to your workflow.
                  </div>
                )}
              </div>

              {/* Question 9 */}
              <div className="border-b border-gray-200 py-6">
                <button
                  onClick={() => setSelected(selected === 9 ? null : 9)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    Do you offer team or enterprise plans?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 9 ? '−' : '+'}
                  </span>
                </button>
                {selected === 9 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    Yes, we offer specialized team and enterprise plans with advanced features like user management, SSO, custom training, dedicated account managers, and volume discounts. Contact our sales team for a customized quote.
                  </div>
                )}
              </div>

              {/* Question 10 */}
              <div className="py-6">
                <button
                  onClick={() => setSelected(selected === 10 ? null : 10)}
                  className="flex items-start md:items-center justify-between w-full focus:outline-none text-left group"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-gray-900 pr-4">
                    How often do you release updates?
                  </span>
                  <span className="text-gray-400 text-2xl font-light flex-shrink-0 group-hover:text-gray-600 transition-colors">
                    {selected === 10 ? '−' : '+'}
                  </span>
                </button>
                {selected === 10 && (
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    We release product updates every two weeks, with major feature releases quarterly. All updates are automatic and free for existing customers. We also maintain a public roadmap so you can see what's coming next.
                  </div>
                )}
              </div>
          </div>
      </div>
    </section>
  );
}

