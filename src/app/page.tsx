import { Navbar } from "@/components/layout/Navbar";
import { Hero, Stats, Features, HowItWorks, TradingPlans, PayerBanner, WhyChooseUs, SuccessStories, ProfitCalculator } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TradingPlans />
      <PayerBanner />
      <WhyChooseUs />
      <SuccessStories />
      <ProfitCalculator />
      
      {/* Footer Placeholder */}
      <footer className="py-20 text-center opacity-20 border-t border-white/5">
        <p className="font-figtree text-sm">© 2026 Funded Masters. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
