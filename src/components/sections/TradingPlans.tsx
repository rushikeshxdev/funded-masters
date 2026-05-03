"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PATHS = ["Instant", "1-Step", "2-Step", "Spartan"];
const SIZES = ["$25K", "$50K", "$100K"];

const RULES_1 = [
  { label: "Max Daily Drawdown", value: "2%", icon: "/images/4thPage/warn.png" },
  { label: "Max Overall Drawdown", value: "10%", icon: "/images/4thPage/warn.png" },
  { label: "Minimum Profitable Days", value: "3 Days", icon: "/images/4thPage/warn.png" },
  { label: "Sim Trading Leverage", value: "30:1", icon: "/images/4thPage/scale.png" },
];

const RULES_2 = [
  { label: "Payout Share", value: "90%", icon: "/images/4thPage/fire.png" },
  { label: "Max Daily Drawdown", value: "4%", icon: "/images/4thPage/warn.png" },
  { label: "Max Overall Drawdown", value: "6%", icon: "/images/4thPage/trending_down.png" },
  { label: "Payout Frequency", value: "14 days", icon: "/images/4thPage/calendar.png" },
  { label: "Trading Period", value: "Unlimited", icon: "/images/4thPage/scale.png" },
];

export const TradingPlans = () => {
  const [activePath, setActivePath] = useState("Instant");
  const [activeSize, setActiveSize] = useState("$50K");

  return (
    <section className="relative w-full py-16 lg:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-white text-5xl lg:text-[72px] font-normal mb-4 tracking-tight">
            Become an <span className="font-semibold text-brand">Master Trader</span>
          </h2>
          <p className="text-[#D1D1D1] text-xl font-light opacity-80 mb-16">
            Choose the evaluation based on your preference to become an Empire Trader.
          </p>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            
            {/* Left side: Selectors */}
            <div className="w-full lg:w-[846px] space-y-12">
              {/* Path Selector */}
              <div className="space-y-4">
                <p className="text-[#FEFEFE] text-xl font-medium mb-4">Choose your Trading Path</p>
                <div className="flex p-1.5 bg-[#030C07] rounded-[15px] border border-white/5 w-[560px]">
                  {PATHS.map((path) => (
                    <button
                      key={path}
                      onClick={() => setActivePath(path)}
                      className={`flex-1 py-4 px-6 rounded-[12px] text-lg font-medium transition-all ${
                        activePath === path ? "bg-brand text-[#001B0C] shadow-lg" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {path}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-4">
                <p className="text-[#FEFEFE] text-xl font-medium mb-4">Select Account Size</p>
                <div className="flex p-1.5 bg-[#030C07] rounded-[15px] border border-white/5 w-[420px]">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`flex-1 py-4 px-6 rounded-[12px] text-lg font-medium transition-all ${
                        activeSize === size ? "bg-brand text-[#001B0C] shadow-lg" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Pricing Card */}
            <div className="w-[378px] h-[264px] bg-[#020B06] rounded-[25px] border border-[#28533B] p-10 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">
              <div className="absolute top-4 right-4 bg-brand/10 px-4 py-1.5 rounded-full border border-brand/30 flex items-center gap-2">
                 <div className="relative w-4 h-4"><Image src="/images/4thPage/fire.png" alt="hot" fill /></div>
                 <span className="text-brand text-xs font-bold uppercase tracking-wider">Most Popular</span>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-[#909AAA] text-lg font-medium uppercase tracking-widest">Start now at only</p>
                <div className="text-white text-7xl font-bold tracking-tighter">$897</div>
              </div>
              <button className="w-full py-5 bg-brand text-[#001B0C] rounded-full text-2xl font-bold shadow-lg shadow-brand/20 transition-all hover:scale-[1.02]">
                Get Funded
              </button>
            </div>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-[#020B06] rounded-[25px] border border-white/5 p-8 md:p-12 shadow-2xl">
            <h3 className="text-white text-2xl font-semibold mb-8 uppercase tracking-widest">1. Verification</h3>
            <p className="text-[#909AAA] mb-8">Choose a simulated account size and try to reach the minimum simulated gains target.</p>
            <div className="space-y-4">
              {RULES_1.map((rule, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="relative w-5 h-5 opacity-40"><Image src={rule.icon} alt={rule.label} fill /></div>
                    <span className="text-[#909AAA] text-lg">{rule.label}</span>
                  </div>
                  <span className="text-white text-xl font-medium">{rule.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#020B06] rounded-[25px] border border-white/5 p-8 md:p-12 shadow-2xl">
            <h3 className="text-white text-2xl font-semibold mb-8 uppercase tracking-widest">2. Live Simulated Trader</h3>
            <p className="text-[#909AAA] mb-8">You can now start trading on a simulated basis in the EmpireTrading program without simulated gain targets.</p>
            <div className="space-y-4">
              {RULES_2.map((rule, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="relative w-5 h-5 opacity-40"><Image src={rule.icon} alt={rule.label} fill /></div>
                    <span className="text-[#909AAA] text-lg">{rule.label}</span>
                  </div>
                  <span className="text-white text-xl font-medium">{rule.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
