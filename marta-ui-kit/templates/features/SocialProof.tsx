import Image from 'next/image';

const socialProof = [
  {
    image: "https://moodboardai.com/assets/logos/producthunt-official.svg",
    alt: "Product Hunt Logo",
    className: "lg:w-full w-full [filter:grayscale(100%)_contrast(1000%)]"
  },
  {
    image: "https://static.shuffle.dev/uploads/files/4c/4c980fffbebd7485321e59965426e442ac7319a7/Reddit-Logo-Black.png",
    alt: "Reddit Logo",
    className: "w-2/3 lg:w-full"
  },
  {
    image: "https://static.shuffle.dev/uploads/files/4c/4c980fffbebd7485321e59965426e442ac7319a7/Medium-website-Logo-wine.png",
    alt: "Medium Logo",
    className: "w-2/3 lg:w-full"
  },
  {
    image: "https://static.shuffle.dev/uploads/files/4c/4c980fffbebd7485321e59965426e442ac7319a7/Black-YouTube-logo.png",
    alt: "YouTube Logo",
    className: "w-2/3 lg:w-full"
  }
];

export default function SocialProof() {
  return (
    <section className="relative pt-24">
      <div className="relative z-10 container px-4 mx-auto">
        <p className="font-heading text-xs uppercase tracking-widest text-gray-500 text-center mb-6">
          AS SEEN ON
        </p>
        <div className="sm:flex grid grid-cols-2 flex-wrap max-w-5xl mx-auto -m-3">
          {socialProof.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="flex items-center justify-center sm:px-9 h-full rounded-3xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={2000}
                  height={2000}
                  className={item.className}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
