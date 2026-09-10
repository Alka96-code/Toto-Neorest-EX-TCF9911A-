// 👇 1. IMPORT IKON DI SINI (Memastikan Vercel dapat membaca file gambar dengan benar)
import WhatsAppIcon from "../assets/images/whatsappblack.svg";
import TokopediaIcon from "../assets/images/tokopedia.svg";
import ShopeeIcon from "../assets/images/shopee.svg";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/6285892713270?text=Halo,%20saya%20tertarik%20dengan%20unit%20TOTO%20NEOREST%20EX%20TCF9911A."; // Ganti nomor sesuai kebutuhan

  const tokopediaUrl = "https://www.tokopedia.com";
  const shopeeUrl = "https://shopee.co.id";

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#E8EAEC] py-10 sm:py-12 text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 box-border">
        {/* Top: Model Name, Navigation & Channels */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#E8EAEC]">
          {/* Model Name */}
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-[#111111] uppercase block">
              TOTO NEOREST EX TCF9911A
            </span>
            <span className="text-xs text-[#A7ADB2] font-light">
              Unit Second / Copotan
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#2B2B2B]">
            <a
              href="#benefits"
              className="hover:text-[#111111] transition-colors"
            >
              Fitur
            </a>
            <a
              href="#kondisi-unit"
              className="hover:text-[#111111] transition-colors"
            >
              Kondisi Unit
            </a>
            <a href="#harga" className="hover:text-[#111111] transition-colors">
              Harga
            </a>
            <a href="#faq" className="hover:text-[#111111] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Purchase Channels */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#111111]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src={WhatsAppIcon}
                alt="WhatsApp"
                className="w-4 h-4 object-contain"
              />
            </a>
            <span className="text-[#E8EAEC]">•</span>
            <a
              href={tokopediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src={TokopediaIcon}
                alt="Tokopedia"
                className="w-4 h-4 object-contain"
              />
            </a>
            <span className="text-[#E8EAEC]">•</span>
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img
                src={ShopeeIcon}
                alt="Shopee"
                className="w-4 h-4 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Bottom: Single Required Disclaimer */}
        <div className="pt-6 text-center md:text-left">
          <p className="text-[11px] text-[#A7ADB2] font-light leading-relaxed max-w-3xl">
            Produk yang ditawarkan merupakan unit second yang berfungsi dengan
            baik.
          </p>
        </div>
      </div>
    </footer>
  );
}
