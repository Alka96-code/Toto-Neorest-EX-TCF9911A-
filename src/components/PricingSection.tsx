import { MessageCircle } from "lucide-react";
// 👇 1. IMPORT IKON DI SINI (Memastikan Vercel dapat membaca file gambar dengan benar)
import TokopediaIcon from "../assets/images/tokopedia.svg";
import kontraktor from "../assets/images/kontraktor.jpg"; // Ganti dengan path gambar yang sesuai

export default function PricingSection() {
  // 👇 Silakan isi nomor WhatsApp Anda di sini, contoh: "https://wa.me..."
  const whatsappUrl =
    "https://wa.me/6285892713270?text=Halo,%20saya%20tertarik%20dengan%20unit%20TOTO%20NEOREST%20EX%20TCF9911A."; // Ganti nomor sesuai kebutuhan

  const tokopediaUrl = "https://tk.tokopedia.com/ZSqUm9qD7/";

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
            <span className="text-xl sm:text-3xl lg:text-4xl text-[#A7ADB2] line-through font-light">
              Rp15.000.000
            </span>

            {/* Harga Utama (Ditawarkan) */}
            <span className="text-4xl sm:text-4xl lg:text-4xl font-semibold text-[#111111] tracking-tight">
              Rp9.900.000
            </span>
          </div>

          {/* 6. Savings Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-[#F0F2F4] text-[#2B2B2B] text-xs sm:text-sm font-medium tracking-wide">
              Harga sewaktu-waktu bisa berubah.
            </span>
          </div>

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
              Chat WhatsApp untuk tanya-tanya & nego harga.
            </p>

            {/* Secondary CTAs */}
            <div className="flex flex-col gap-3 mb-4">
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
            </div>
          </div>
        </div>
      </div>

      {/* B2B / Contractor Banner Section */}
      <div className="w-full mt-6 border border-[#E2E4E6] bg-[#FAFAFA] p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Kolom Kiri: Gambar Proyek/Toilet */}
        <div className="w-full aspect-[4/3] md:aspect-square bg-[#E2E4E6] overflow-hidden rounded-sm relative">
          <img
            src={kontraktor} // 💡 Ganti dengan variabel/path gambar Anda
            alt="Stok Toilet Second Berkualitas untuk Proyek"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Kolom Kanan: Copywriting & CTA */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#00AA5B]">
              Kemitraan Kontraktor & B2B
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#111111] leading-snug uppercase tracking-wide">
              Pangkas Anggaran Proyek Tanpa Kompromi Kualitas
            </h3>
            <p className="text-xs sm:text-sm text-[#52575C] leading-relaxed">
              Sedang memimpin proyek konstruksi dan butuh toilet dalam jumlah
              besar? Kami siap memasok **toilet second berkualitas tinggi
              standar proyek** dengan harga yang jauh lebih efisien. Siap kirim
              partai besar untuk mes karyawan, direksi keet, maupun fasilitas
              proyek Anda.
            </p>
          </div>

          {/* CTA Khusus Proyek */}
          <a
            id="pricing-b2b-project-cta"
            href={
              whatsappUrl +
              "?text=Halo%20saya%20ingin%20tanya%20stok%20toilet%20second%20untuk%20kebutuhan%20proyek"
            } // Otomatis isi pesan WA jika mendukung
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[44px] inline-flex items-center justify-center space-x-2 border-2 border-[#111111] bg-[#111111] text-white hover:bg-transparent hover:text-[#111111] transition-all duration-200 text-xs font-semibold tracking-wider uppercase px-4"
          >
            <span>Hubungi Tim Fleet & Proyek Kami</span>
          </a>
        </div>
      </div>
    </section>
  );
}
