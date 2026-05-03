"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PATHS = ["Instant", "1-Step", "2-Step", "Sparatn"];
const SIZES = ["$25K", "$50K", "$100K"];

const RULES_1 = [
  { label: "Max Daily Drawdown", value: "2%", icon: "/images/icons/trending_down.png" },
  { label: "Max Overall Drawdown", value: "10%", icon: "/images/icons/trending_down.png", showWarn: true },
  { label: "Minimum Profitable Days", value: "3 Days", icon: "/images/icons/why-4.png", showWarn: true },
  { label: "Sim Trading Leverage", value: "30:1", icon: "/images/icons/scale.png" },
];

const RULES_2 = [
  { label: "Payout Share", value: "90%", icon: "/images/icons/split.png", showWarn: true },
  { label: "Max Daily Drawdown", value: "4%", icon: "/images/icons/trending_down.png" },
  { label: "Max Overall Drawdown", value: "6%", icon: "/images/icons/trending_down.png", showWarn: true },
  { label: "Payout Frequency", value: "14 days", icon: "/images/icons/why-4.png" },
  { label: "Trading Period", value: "Unlimited", icon: "/images/icons/why-4.png" },
];

export const TradingPlans = () => {
  const [activePath, setActivePath] = useState("Instant");
  const [activeSize, setActiveSize] = useState("$50K");

  return (
    <section className="relative w-full py-16 lg:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-white font-normal mb-4 tracking-tight leading-tight text-4xl md:text-5xl lg:text-6xl">
            Become an <span className="font-semibold text-[#59D28F]">Master Trader</span>
          </h2>
          <p className="text-[#D1D1D1] font-light opacity-80 mb-12 lg:mb-16 tracking-tight leading-relaxed text-base md:text-lg lg:text-xl max-w-2xl">
            Choose the evaluation based on your preference to become an Empire Trader.
          </p>

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
            
            {/* Left side: Selectors */}
            <div className="w-full lg:flex-1 space-y-10 lg:space-y-14 flex flex-col justify-center">
              {/* Path Selector */}
              <div className="space-y-5">
                <p className="text-white font-medium leading-tight text-xl md:text-2xl">Choose your Trading Path</p>
                <div className="flex flex-wrap p-1.5 bg-[#020B06] rounded-2xl border border-[#28533B] w-full max-w-[846px] items-center gap-2">
                  {PATHS.map((path) => (
                    <button
                      key={path}
                      onClick={() => setActivePath(path)}
                      className={`flex-1 min-w-[110px] py-3.5 px-5 rounded-xl transition-all duration-300 font-bold text-base md:text-lg lg:text-xl leading-none flex items-center justify-center border ${
                        activePath === path 
                          ? "bg-[#59D28F] text-[#001B0C] border-[#59D28F] shadow-lg" 
                          : "text-white/60 border-white/5 hover:border-[#59D28F]/30 hover:text-white"
                      }`}
                    >
                      {path}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-5">
                <p className="text-white font-medium leading-tight text-xl md:text-2xl">Select Account Size</p>
                <div className="flex flex-wrap p-1.5 bg-[#020B06] rounded-2xl border border-[#28533B] w-full max-w-[500px] items-center gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`flex-1 min-w-[90px] py-3.5 px-5 rounded-xl transition-all duration-300 font-medium text-base md:text-lg lg:text-xl leading-none flex items-center justify-center border ${
                        activeSize === size 
                          ? "bg-[#59D28F] text-[#001B0C] border-[#59D28F] shadow-lg" 
                          : "text-white/60 border-white/5 hover:border-[#59D28F]/30 hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Pricing Card */}
            <div className="w-full lg:w-[400px] bg-[#020B06] rounded-[25px] border border-[#28533B] p-10 relative overflow-visible flex flex-col items-center justify-center text-center shadow-2xl group">
              
              {/* Decorative Eclipse Glow */}
              <div className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] bg-[#59D28F]/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#59D28F]/30 transition-colors duration-700" />
              
              {/* Most Popular Badge - Positioned on the border */}
              <div className="absolute -top-[23px] left-1/2 -translate-x-1/2 z-10 px-6 py-2 rounded-full bg-gradient-to-r from-[#06130C] to-[#2FD476]/80 border border-[#2FD476]/50 flex items-center gap-2 shadow-[0_0_20px_rgba(47,212,118,0.3)] min-w-[200px] justify-center">
                 <div className="relative w-4 h-4"><Image src="/images/icons/fire.png" alt="hot" fill className="object-contain" /></div>
                 <span className="text-white text-sm font-semibold uppercase tracking-wider">Most Popular</span>
              </div>

              <div className="space-y-2 mb-8 mt-8">
                <p className="text-white font-medium uppercase tracking-widest text-lg md:text-xl lg:text-[22px]">Start now at only</p>
                <div className="text-white text-7xl md:text-8xl lg:text-[110px] font-bold tracking-tighter leading-[0.9]">$897</div>
              </div>

              <button className="w-full max-w-[280px] py-6 bg-[#59D28F] text-[#001B0C] rounded-[15px] text-xl md:text-2xl font-bold shadow-lg shadow-[#59D28F]/20 transition-all hover:scale-[1.02] active:scale-95">
                Get Funded
              </button>
            </div>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 md:mt-16">
          <RuleCard 
            title="1. VERIFICATION"
            description="Choose a simulated account size and try to reach the minimum simulated gains target. Trade all available instruments. Subject to certain rules and objectives, your trading style is completely up to you!"
            rules={RULES_1}
          />
          <RuleCard 
            title="2. LIVE SIMULATED TRADER"
            description="You can now start trading on a simulated basis in the EmpireTrading program without simulated gain targets as long as you won’t reach max simulated loss or daily simulated loss limits."
            rules={RULES_2}
          />
        </div>

      </div>
    </section>
  );
};

interface Rule {
  label: string;
  value: string;
  icon: string;
  showWarn?: boolean;
}

const RuleCard = ({ title, description, rules }: { title: string; description: string; rules: Rule[] }) => (
  <div className="bg-[#020B06] rounded-3xl border border-white/5 p-8 md:p-9 shadow-2xl flex flex-col h-full relative overflow-hidden">
    <h3 className="text-white font-medium mb-6 leading-tight text-xl md:text-2xl uppercase tracking-wider">{title}</h3>
    <p className="text-[#8F8F8F] mb-8 lg:mb-10 font-normal leading-relaxed text-sm md:text-base lg:text-[17px] opacity-90">{description}</p>
    
    <div className="space-y-3.5">
      {rules.map((rule, idx) => (
        <div key={idx} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-[#2C8B57]/50 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="relative w-5 h-5 opacity-70">
              <Image src={rule.icon} alt={rule.label} fill className="object-contain" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#8F8F8F] font-semibold text-sm md:text-base lg:text-[17px]">{rule.label}</span>
              {rule.showWarn && (
                <div className="relative w-4 h-4 opacity-40">
                  <Image src="/images/icons/warn.png" alt="info" fill className="object-contain" />
                </div>
              )}
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl transition-all duration-300 group-hover:bg-[#2C8B57] min-w-[70px] flex items-center justify-center bg-transparent border border-transparent">
            <span className="text-white font-medium text-base md:text-lg">{rule.value}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
