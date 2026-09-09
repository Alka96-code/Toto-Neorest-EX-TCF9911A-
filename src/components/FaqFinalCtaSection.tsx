import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { productImages } from "../assets/images";

export default function FaqFinalCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const whatsappUrl =
    "https://wa.me/?text=Halo,%20saya%20tertarik%20dengan%20TOTO%20NEOREST%20EX%20TCF9911A%20seharga%20Rp15.000.000.%20Boleh%20minta%20info%20detail%20kondisi%20dan%20video%20demonstrasinya?";
  const tokopediaUrl = "https://www.tokopedia.com";
  const shopeeUrl = "https://shopee.co.id";

  // Exactly 6 important questions with merged context and minimal accordion
  const faqs = [
    {
      q: "Apakah unit ini baru?",
      a: "Tidak. TOTO NEOREST EX TCF9911A yang ditawarkan merupakan unit second / copotan hotel.",
    },
    {
      q: "Apakah semua fitur masih berfungsi?",
      a: "Fungsi operasional seperti pembersihan (cleansing), heated seat, warm air dryer, deodorizer, dan automatic flush masih berfungsi dengan baik. Unit telah diuji dan diverifikasi kondisinya.",
    },
    {
      q: "Apakah harga masih bisa nego?",
      a: "Ya. Silakan diskusikan langsung penawaran terbaik Anda melalui WhatsApp.",
    },
    {
      q: "Apakah bisa membeli melalui marketplace?",
      a: "Bisa. Transaksi dapat dilakukan dengan aman melalui Tokopedia atau Shopee.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-[#FFFFFF] border-t border-[#E8EAEC]">
      {/* 1. FAQ ACCORDION: 6 Questions, Minimal with thin dividers & generous spacing */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 box-border">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="block text-xs font-semibold tracking-[0.25em] text-[#A7ADB2] uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight leading-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <div className="border-t border-[#E8EAEC] divide-y divide-[#E8EAEC]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-normal text-[#111111] group-hover:text-[#2B2B2B] pr-6">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "border-[#111111] rotate-180 bg-[#111111] text-white"
                        : "border-[#E8EAEC] text-[#A7ADB2] group-hover:border-[#111111] group-hover:text-[#111111]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="pb-7 pr-6 sm:pr-10 text-sm sm:text-base text-[#2B2B2B] font-light leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
