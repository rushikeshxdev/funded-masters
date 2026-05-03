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
  JoinCTA,
  Footer
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
        <Footer />
      </div>
    </main>
  );
}
