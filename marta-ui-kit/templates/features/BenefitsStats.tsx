export default function BenefitsStats() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="border-t pt-16">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-20">Why Emotional Tracking Matters</h2>
          </div>
          <div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="h-full py-10 px-5 xs:px-10 bg-orange-50 rounded-2xl">
                  <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">📈</h5>
                  <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">+ 24%</h5>
                  <span className="block mb-6 text-base lg:text-xl font-medium">
                    Studies show that people who journal experience a 24% improvement in psychological well-being.
                  </span>
                  <p className="text-gray-700 italic">
                    &quot;Journaling gave me the clarity I needed to understand my emotions and feel more connected to myself.&quot; - John M
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="flex flex-col h-full">
                  <div className="flex flex-col justify-center h-full mb-8 py-8 px-5 xs:px-8 bg-orange-50 rounded-2xl">
                    <div className="flex">
                      <div className="ml-7">
                        <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">+ 15%–30%</h5>
                        <span className="block text-base lg:text-xl font-medium">
                          Regular journaling can reduce anxiety symptoms by 15%–30% within 4 to 12 weeks.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center h-full py-8 px-5 xs:px-8 bg-orange-50 rounded-2xl">
                    <div className="flex">
                      <div className="ml-7">
                        <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">+ 6%</h5>
                        <span className="block text-base lg:text-xl font-medium">
                          Studies show that journaling reduces PTSD symptoms by up to 6% compared to non-journaling clients.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
