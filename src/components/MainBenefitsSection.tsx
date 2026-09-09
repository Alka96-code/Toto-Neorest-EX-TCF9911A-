import { productImages } from "../assets/images";

interface BenefitItem {
  id: string;
  number: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  tag: string;
}

export default function MainBenefitsSection() {
  const benefits: BenefitItem[] = [
    {
      id: "benefit-smart-cleansing",
      number: "01",
      tag: "Smart Cleansing",
      title: "Pembersihan ",
      copy: "Pembersihan Rear, Soft Rear, dan Front Cleansing dengan pengaturan tekanan air serta posisi wand sesuai preferensi personal.",
      image: productImages.cleansingWand,
      alt: "Detail Nozzle Smart Cleansing TOTO NEOREST",
    },
    {
      id: "benefit-automatic-comfort",
      number: "02",
      tag: "Bebas Sentuhan",
      title: "Kenyamanan Otomatis",
      copy: "Sensor cerdas mendeteksi keberadaan pengguna untuk membuka dan menutup penutup toilet secara otomatis, serta mengaktifkan pembilasan dan penghilang bau otomatis",
      image: productImages.heatedSeat,
      alt: "Heated Seat dan Kontur Ergonomis TOTO NEOREST",
    },
    {
      id: "benefit-warm-air-freshness",
      number: "03",
      tag: "HANGAT & BEBAS BAU",
      title: "Kehangatan Suhu dan Menghilangkan Bau",
      copy: "Nikmati kemewahan dudukan hangat yang nyaman, hembusan pengering udara yang hangat dan lembut, serta deodorizer otomatis yang membantu menghilangkan bau.",
      image: productImages.warmAir,
      alt: "Warm Air Dryer dan Automatic Deodorizer TOTO NEOREST",
    },
    {
      id: "benefit-remote-control",
      number: "04",
      tag: "Panel Kendali",
      title: "Kemudahan Kendali dalam 1 panel",
      copy: "Panel kendali di dinding untuk mengatur kekuatan semprotan, suhu air, pengering, pembilasan dan masih banyak lagi.",
      image: productImages.remoteWall,
      alt: "Remote Control Wall Mount TOTO NEOREST EX",
    },
  ];

  return (
    <section
      id="benefits"
      className="w-full bg-[#FFFFFF] border-t border-[#E8EAEC] py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 box-border">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-16">
          <span className="block text-xs font-semibold tracking-[0.25em] text-[#A7ADB2] uppercase mb-3">
            KENYAMANAN PREMIUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight leading-tight mb-4">
            Kenyamanan yang Terasa di Setiap Fitur
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B] font-light leading-relaxed">
            Rasakan pengalaman smart toilet premium seperti di hotel bintang
            lima, kini hadir untuk kenyamanan di rumah Anda.
          </p>
        </div>

        {/* 2x2 Refined Editorial Grid (compact aspect ratio, not oversized) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              id={benefit.id}
              className="group flex flex-col bg-white border border-[#E8EAEC] hover:border-[#111111] transition-colors duration-300 rounded-xl"
            >
              {/* Product Photography */}
              <div className="relative w-full aspect-[16/10] bg-[#E8EAEC]/30 overflow-hidden rounded-t-xl">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium tracking-widest text-[#2B2B2B] uppercase border border-[#E8EAEC]">
                  {benefit.tag}
                </div>
              </div>

              {/* Editorial Text Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-medium text-[#A7ADB2] tracking-wider">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-[#111111] tracking-tight mb-2.5">
                    {benefit.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#2B2B2B] font-light leading-relaxed">
                    {benefit.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
