export default function TermsOfUse() {
  return (
    <section className="py-24 lg:py-32 bg-orange-50">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {/* Section Header */}
          <div className="grid gap-12">
            <div>
              <h2 className="font-heading text-5xl sm:text-6xl text-gray-900 leading-tight">Terms of Use</h2>
            </div>
          </div>

          {/* Term Blocks */}
          <div className="space-y-24">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="font-heading text-4xl text-gray-900 w-4/5">
                  Last Updated and Effective Date: April 15, 2025
                </div>
                <div className="text-base text-gray-700 leading-relaxed">
                  <p>
                    Welcome to <span className="font-sego">YourLogo</span>.com (&quot;Website&quot; or &quot;Platform&quot;), owned and operated by Your Company (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using <span className="font-sego">YourLogo</span>.com, you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree with these Terms, please do not use the Website.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-gray-200 pt-20">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="font-heading text-4xl text-gray-900">1. Overview</div>
                <div className="text-base text-gray-700 leading-relaxed">
                  <p>
                    <span className="font-sego">YourLogo</span>.com is a platform that connects clients (&quot;Clients&quot;) with independent therapists (&quot;Therapists&quot;). We do not provide therapy services ourselves, and all therapy sessions and advice are the sole responsibility of the participating Therapists.
                  </p>
                  <p className="mt-4">
                    Clients may also use <span className="font-sego">YourLogo</span>.com to keep personal journals and recordings. While we store these entries, we do not guarantee their preservation. In the event of a server malfunction, natural disaster, cyberattack, or any other unforeseen issue, we are not responsible for any loss, corruption, or deletion of journal or recording entries. Clients should always maintain their own backups of any important text, audio, or recordings.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-gray-200 pt-20">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="font-heading text-4xl text-gray-900">2. Acceptance of Terms</div>
                <div className="text-base text-gray-700 leading-relaxed">
                  <p>
                    By using <span className="font-sego">YourLogo</span>.com, you confirm that you are at least 18 years old and legally capable of entering into a binding agreement. If you use the Website on behalf of an entity, you represent that you have the authority to bind that entity to these Terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-gray-200 pt-20">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="font-heading text-4xl text-gray-900">3. No Therapist-Client Relationship</div>
                <div className="text-base text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    <span className="font-sego">YourLogo</span>.com facilitates connections between Therapists and Clients but does not provide, control, or supervise any therapy services. Your engagement with any Therapist through the Website is solely between you and that Therapist. We do not endorse, warrant, or guarantee the qualifications, effectiveness, or suitability of any Therapist.
                  </p>
                  <p className="mb-4">
                    While we ask Therapists for their credentials, we cannot be held responsible for any fraudulent activities by the Therapists. Users are responsible for conducting their own due diligence before engaging with a Therapist.
                  </p>
                  <p>
                    Additionally, we are not responsible for any bios or profile information listed by any Client, Therapist, or other user. The accuracy, completeness, and truthfulness of all user-provided content are the sole responsibility of the individual users.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-gray-200 pt-20">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="font-heading text-4xl text-gray-900">4. GDPR Compliance & Data Privacy</div>
                <div className="text-base text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    <span className="font-sego">YourLogo</span>.com is committed to complying with the General Data Protection Regulation (GDPR) and ensuring that user data is handled securely and transparently.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Users have the right to request access to, correction of, or deletion of their personal data.</li>
                    <li><span className="font-sego">YourLogo</span>.com does not sell or share personal data with third parties without user consent, except as required by law.</li>
                    <li>While we take reasonable measures to secure user data, we do not guarantee absolute security and are not liable for any data breaches or unauthorised access beyond our reasonable control.</li>
                    <li>Users should not store highly sensitive personal data (e.g., medical records) on the platform, as we are not a regulated healthcare provider.</li>
                  </ul>
                  <p className="mt-4">
                    For full details on how we collect, use, and store personal data, please review our{' '}
                    <a href="#" className="underline bg-purple-200">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-gray-200 pt-20">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="font-heading text-4xl text-gray-900">5. Contact Information</div>
                <div className="text-base text-gray-700 leading-relaxed">
                  <p>
                    For questions, email us at{' '}
                    <a href="mailto:hello@yourlogo.com" className="underline bg-purple-200">
                      hello@yourlogo.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

