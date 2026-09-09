import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainBenefitsSection from "./components/MainBenefitsSection";
import RemoteControlSection from "./components/RemoteControlSection";
import WhyBuyThisSection from "./components/WhyBuyThisSection";
import ActualUnitProofSection from "./components/ActualUnitProofSection";
import PricingSection from "./components/PricingSection";
import WhatIsIncludedSection from "./components/WhatIsIncludedSection";
import FaqFinalCtaSection from "./components/FaqFinalCtaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] text-[#111111] flex flex-col antialiased selection:bg-[#E8EAEC] selection:text-[#111111]">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero */}
        <HeroSection />

        {/* 3. Main Benefits */}
        <MainBenefitsSection />

        {/* 4. Remote Control (Main functionality section) */}
        <RemoteControlSection />

        {/* 5. Why Buy This */}
        <WhyBuyThisSection />

        {/* 6. Actual Unit Proof + Buyer Assurance */}
        <ActualUnitProofSection />

        {/* 7. Pricing */}
        <PricingSection />

        {/* 8. Kelengkapan Unit (What Is Included) */}
        <WhatIsIncludedSection />

        {/* 9. FAQ & 10. Urgency + Final CTA */}
        <FaqFinalCtaSection />
      </main>
      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
