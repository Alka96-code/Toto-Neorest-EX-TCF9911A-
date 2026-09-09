import { Check, Package } from "lucide-react";

export default function WhatIsIncludedSection() {
  const confirmedItems = [
    {
      title: "TOTO NEOREST EX TCF9911A",
      desc: "Unit keramik premium CeFiONtect lengkap terintegrasi",
    },

    {
      title: "Remote Control",
      desc: "Unit remote wall-mount orisinal untuk kendali penuh fitur",
    },
    {
      title: "TOTO Drain Socket / Flange",
      desc: "Unit drain socket orisinal untuk pemasangan ke pipa pembuangan",
    },
  ];

  return (
    <section
      id="kelengkapan-unit"
      className="w-full bg-[#FFFFFF] border-t border-[#E8EAEC] py-14 sm:py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 box-border">
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="block text-xs font-semibold tracking-[0.25em] text-[#A7ADB2] uppercase mb-3">
            Kelengkapan Unit
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#111111] tracking-tight leading-tight mb-3">
            Apa Saja yang Termasuk dalam Penawaran Unit?
          </h2>
        </div>

        {/* 3 Clean Minimal Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {confirmedItems.map((item, idx) => (
            <div
              key={item.title}
              className="p-5 sm:p-6 bg-[#FAFAFA] border border-[#E8EAEC] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-7 h-7 rounded-full bg-white border border-[#E8EAEC] flex items-center justify-center text-xs font-mono text-[#111111]">
                    0{idx + 1}
                  </span>
                  <Check className="w-4 h-4 text-[#111111]" />
                </div>
                <h3 className="text-base font-medium text-[#111111] tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#2B2B2B] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
