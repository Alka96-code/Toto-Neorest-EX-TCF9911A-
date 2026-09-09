import { motion } from "motion/react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { productImages } from "../assets/images";

export default function HeroSection() {
  const whatsappUrl =
    "https://wa.me/?text=Halo,%20saya%20tertarik%20dengan%20unit%20TOTO%20NEOREST%20EX%20TCF9911A.";

  const handleScrollToDetail = () => {
    const el = document.getElementById("benefits");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#FFFFFF] pt-16 pb-14 md:pt-20 md:pb-18 lg:pt-28 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 box-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Text & Conversion Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Eyebrow & Status */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#A7ADB2] uppercase">
                TOTO NEOREST EX • TCF9911A
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] leading-[1.15] font-light text-[#111111] tracking-tight mb-5 sm:mb-6">
              Smart Toilet Premium, <br className="hidden sm:inline" />
              <span className="font-normal">Lebih Terjangkau</span>
            </h1>

            {/* Supporting copy */}
            <p className="text-base sm:text-lg text-[#2B2B2B] font-light leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Nikmati pengalaman smart toilet premium dengan fitur cleansing,
              heated seat, warm air dryer, dan fungsi otomatis dalam satu unit.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
              <a
                id="hero-primary-whatsapp-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-2.5 px-6 sm:px-8 py-3.5 bg-[#111111] text-white hover:bg-[#2B2B2B] transition-colors duration-200 text-sm font-medium tracking-wide shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </a>

              <button
                id="hero-secondary-detail-cta"
                type="button"
                onClick={handleScrollToDetail}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 border border-[#C7C9CC] text-[#111111] hover:border-[#111111] hover:bg-[#E8EAEC]/40 transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                <span>Lihat Detail Produk</span>
                <ChevronDown className="w-4 h-4 text-[#A7ADB2]" />
              </button>
            </div>
          </motion.div>

          {/* Product Photography Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] bg-[#E8EAEC]/50 overflow-hidden group rounded-xl">
              <img
                src={productImages.hero}
                alt="TOTO NEOREST EX TCF9911A Smart Toilet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
