import { MessageCircle } from "lucide-react";
// 👇 1. IMPORT IKON DI SINI (Memastikan Vercel dapat membaca file gambar dengan benar)
import TokopediaIcon from "../assets/images/tokopedia.svg";
import ShopeeIcon from "../assets/images/shopee.svg";

export default function PricingSection() {
  // 👇 Silakan isi nomor WhatsApp Anda di sini, contoh: "https://wa.me..."
  const whatsappUrl = "https://wa.me?";
  const tokopediaUrl = "https://tokopedia.com";
  const shopeeUrl = "https://shopee.co.id";

  return (
    <section
      id="harga"
      className="w-full bg-[#FAFAFA] border-t border-[#E8EAEC] py-16 sm:py-20 lg:py-28"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 box-border">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-2">
          <span className="block text-xs font-semibold tracking-[0.25em] text-[#A7ADB2] uppercase mb-3">
            Penawaran Terbatas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#111111] tracking-tight leading-tight">
            Miliki Toto Neorest dengan Harga Lebih Terjangkau
          </h2>
        </div>

        {/* Mobile Full-Width Responsive Pricing Card */}
        <div className="w-full max-w-2xl mx-auto bg-[#FFFFFF] border border-[#E8EAEC] px-5 py-8 sm:px-10 sm:py-12 lg:p-14 text-center shadow-xs box-border">
          {/* 1. Product Name */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#111111] tracking-tight mb-3">
            TOTO NEOREST EX TCF9911A
          </h3>

          {/* 2. Condition Badge */}
          <div className="mb-7">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-[#2B2B2B] bg-[#E8EAEC]">
              SECOND / COPOTAN HOTEL
            </span>
          </div>

          {/* BAGIAN HARGA YANG SUDAH DISARANKAN & DISAMAKAN UKURANNYA */}
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            {/* Harga Promo Label */}
            <span className="text-lg sm:text-xl lg:text-2xl font-medium uppercase tracking-widest text-[#111111]">
              Harga Promo
            </span>

            {/* Harga Coret */}
            <span className="text-2xl sm:text-3xl lg:text-4xl text-[#A7ADB2] line-through font-light">
              Rp15.000.000
            </span>

            {/* Harga Utama (Ditawarkan) */}
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111] tracking-tight">
              Rp9.900.000
            </span>
          </div>

          {/* 6. Savings Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-[#F0F2F4] text-[#2B2B2B] text-xs sm:text-sm font-medium tracking-wide">
              Harga sewaktu-waktu bisa berubah.
            </span>
          </div>

          {/* 7. Microcopy */}
          <p className="text-xs sm:text-sm text-[#2B2B2B] font-light mb-6 pb-6 border-b border-[#E8EAEC]"></p>

          {/* 8. Action CTAs */}
          <div className="w-full flex flex-col items-stretch">
            {/* Primary CTA: Chat WhatsApp */}
            <a
              id="pricing-primary-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-[#111111] text-white hover:bg-[#2B2B2B] transition-colors duration-200 text-sm font-medium tracking-wide shadow-sm mb-3"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat WhatsApp</span>
            </a>

            {/* Microcopy note */}
            <p className="text-xs text-[#A7ADB2] tracking-wide mb-3">
              Pilih metode transaksi yang paling nyaman untuk Anda.
            </p>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 mb-4">
              {/* Tombol Tokopedia */}
              <a
                id="pricing-secondary-tokopedia-cta"
                href={tokopediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] inline-flex items-center justify-center space-x-2.5 px-5 py-3 border border-[#C7C9CC] text-[#111111] hover:border-[#111111] hover:bg-[#FAFAFA] transition-colors duration-200 text-xs font-medium tracking-wider uppercase"
              >
                {/* 👇 MENGGUNAKAN VARIABEL IMPORT YANG SUDAH JELAS PATH-NYA */}
                <img
                  src={TokopediaIcon}
                  alt="Tokopedia"
                  className="w-4 h-4 object-contain"
                />
                <span>Tokopedia</span>
              </a>

              {/* Tombol Shopee */}
              <a
                id="pricing-secondary-shopee-cta"
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] inline-flex items-center justify-center space-x-2.5 px-5 py-3 border border-[#C7C9CC] text-[#111111] hover:border-[#111111] hover:bg-[#FAFAFA] transition-colors duration-200 text-xs font-medium tracking-wider uppercase"
              >
                {/* 👇 MENGGUNAKAN VARIABEL IMPORT YANG SUDAH JELAS PATH-NYA */}
                <img
                  src={ShopeeIcon}
                  alt="Shopee"
                  className="w-4 h-4 object-contain"
                />
                <span>Shopee</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
