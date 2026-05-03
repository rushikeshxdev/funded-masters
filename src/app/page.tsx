"use client";

import { Navbar } from "@/components/shared";
import { 
  Hero, 
  PayoutTicker,
  Features, 
  HowItWorks, 
  TradingPlans, 
  PayerBanner, 
  WhyChooseUs, 
  SuccessStories, 
  ProfitCalculator,
  BestTraders,
  Testimonials,
  FAQ,
  JoinCTA
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black min-h-screen">
      <Navbar />
      
      {/* Scrollable Content Sections */}
      <div className="flex flex-col w-full">
        <Hero />
        <PayoutTicker />
        <Features />
        <HowItWorks />
        <TradingPlans />
        <PayerBanner />
        <WhyChooseUs />
        <SuccessStories />
        <ProfitCalculator />
        <BestTraders />
        <Testimonials />
        <FAQ />
        <JoinCTA />
      </div>

      {/* Footer */}
      <footer className="py-20 bg-black text-center border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="font-figtree text-[#909AAA] text-sm tracking-widest uppercase">
            © 2026 <span className="text-white font-semibold">Funded Masters</span>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
