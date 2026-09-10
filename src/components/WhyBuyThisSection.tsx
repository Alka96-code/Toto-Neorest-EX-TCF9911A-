import { productImages } from "../assets/images";

export default function WhyBuyThisSection() {
  const valuePoints = [
    {
      number: "01",
      title: "Premium Experience, Better Value",
      copy: "Kelas premium dengan biaya yang lebih efisien dibanding membeli smart toilet premium baru.",
    },
    {
      number: "02",
      title: "Fitur Lengkap",
      copy: "Cleansing, heated seat, warm air dryer, automatic flush, deodorizer, dan remote control hadir dalam satu sistem terintegrasi.",
    },
    {
      number: "03",
      title: "Garansi",
      copy: "Jaminan kualitas dengan garansi fungsi penuh selama 1 bulan.",
    },
  ];

  return (
    <section
      id="why-buy-this"
      className="w-full bg-[#FFFFFF] border-t border-[#E8EAEC] py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 box-border">
        {/* Section Intro */}
        <div className="max-w-3xl mb-10 sm:mb-16 lg:mb-20">
          <span className="block text-xs font-semibold tracking-[0.25em] text-[#A7ADB2] uppercase mb-3">
            Kenapa Perlu Beli Toto Neorest ini?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-light text-[#111111] tracking-tight leading-tight mb-4">
            Pilihan Cerdas untuk Kenyamanan Premium
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B] font-light leading-relaxed">
            Dapatkan fitur lengkap dan pengalaman nilai yang lebih efisien
            dibanding membeli unit premium baru.
          </p>
        </div>

        {/* Editorial Asymmetric Value Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side: Atmosphere Visual & Value Statement */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="relative aspect-[4/3] bg-[#E8EAEC]/40 overflow-hidden border border-[#E8EAEC] rounded-xl">
              <img
                src={productImages.hotelSuite}
                alt="Interior kamar mandi bernuansa suite hotel mewah"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Side: 3 Clear Editorial Value Points */}
          <div className="lg:col-span-7 divide-y divide-[#E8EAEC]">
            {valuePoints.map((point) => (
              <div key={point.number} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-start space-x-6">
                  <span className="text-xs font-mono font-medium text-[#A7ADB2] tracking-wider pt-1 flex-shrink-0">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#111111] tracking-tight mb-3">
                      {point.title}
                    </h3>
                    <p className="text-base text-[#2B2B2B] font-light leading-relaxed">
                      {point.copy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
