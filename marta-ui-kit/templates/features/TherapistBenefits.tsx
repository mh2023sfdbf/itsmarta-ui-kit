export default function TherapistBenefits() {
  return (
    <section className="py-12 bg-orange-50 lg:py-44">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mb-20">
          <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl mb-20">
            Sharing your emotional tracking with your therapist allows them to...
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap -mx-4">
          {/* Block 1 */}
          <div className="w-full sm:w-1/3 lg:w-1/3 mb-10 lg:mb-0 px-4">
            <div className="pt-8">
              <h5 className="text-4xl xl:text-5xl mb-4">
                Gain insight into your emotional trends and triggers
              </h5>
              <span className="text-base lg:text-lg text-gray-700">
                Therapy outcomes improved by up to 30% when therapists had access to client emotional data.
              </span>
            </div>
          </div>

          {/* Mobile Horizontal Divider */}
          <div className="block sm:hidden w-full h-px bg-gray-300 mx-auto my-8"></div>

          {/* Vertical Divider for large screens */}
          <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>

          {/* Block 2 */}
          <div className="w-full sm:w-1/3 lg:w-1/3 px-4 mb-10 lg:mb-0">
            <div className="pt-8">
              <h5 className="text-4xl xl:text-5xl mb-4">
                Create more accurate and personalised treatment plans
              </h5>
              <span className="text-base lg:text-lg text-gray-700">
                Clients reported a 22% increase in therapy session efficiency when they shared emotional records with their therapist.
              </span>
            </div>
          </div>

          {/* Mobile Horizontal Divider */}
          <div className="block sm:hidden w-full h-px bg-gray-300 mx-auto my-8"></div>

          {/* Vertical Divider for large screens */}
          <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>

          {/* Block 3 */}
          <div className="w-full sm:w-1/3 lg:w-1/3 px-4 mb-10 lg:mb-0">
            <div className="pt-8">
              <h5 className="text-4xl xl:text-5xl mb-4">
                Greater awareness of your emotional state between sessions
              </h5>
              <span className="text-base lg:text-lg text-gray-700">
                &quot;Once my therapist could see my emotional patterns, she was able to tailor sessions to fit me better, and I made much faster progress.&quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

