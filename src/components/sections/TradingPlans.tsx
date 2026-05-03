"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export const TradingPlans = () => {
  const { headline, description, pricing, paths, sizes, evaluation } = siteConfig.tradingPlans;
  const [activePath, setActivePath] = useState(paths[0]);
  const [activeSize, setActiveSize] = useState(sizes[1]);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-white font-normal mb-4 tracking-tight leading-tight text-3xl md:text-5xl lg:text-[65px]">
            {headline.split("Master")[0]} <span className="font-semibold text-brand">Master {headline.split("Master")[1]}</span>
          </h2>
          <p className="text-[#D1D1D1] font-light opacity-80 mb-12 lg:mb-16 tracking-tight leading-relaxed text-base md:text-lg lg:text-[22px] max-w-2xl">
            {description}
          </p>

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-16">
            
            {/* Left side: Selectors */}
            <div className="w-full lg:flex-1 space-y-12 lg:space-y-16 flex flex-col justify-center">
              {/* Path Selector */}
              <div className="space-y-6">
                <p className="text-white font-medium leading-tight text-lg md:text-xl lg:text-[24px]">Choose your Trading Path</p>
                <div className="flex flex-wrap p-2 bg-[#020B06] rounded-2xl border border-[#28533B] w-full max-w-[846px] items-center gap-3">
                  {paths.map((path) => (
                    <button
                      key={path}
                      onClick={() => setActivePath(path)}
                      className={`flex-1 min-w-[110px] py-4 px-6 rounded-xl transition-all duration-300 font-bold text-sm md:text-base lg:text-lg leading-none flex items-center justify-center border ${
                        activePath === path 
                          ? "bg-brand text-[#001B0C] border-brand shadow-lg" 
                          : "text-white/60 border-white/5 hover:border-brand/30 hover:text-white"
                      }`}
                    >
                      {path}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-6">
                <p className="text-white font-medium leading-tight text-lg md:text-xl lg:text-[24px]">Select Account Size</p>
                <div className="flex flex-wrap p-2 bg-[#020B06] rounded-2xl border border-[#28533B] w-full max-w-[500px] items-center gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`flex-1 min-w-[90px] py-4 px-6 rounded-xl transition-all duration-300 font-medium text-sm md:text-base lg:text-lg leading-none flex items-center justify-center border ${
                        activeSize === size 
                          ? "bg-brand text-[#001B0C] border-brand shadow-lg" 
                          : "text-white/60 border-white/5 hover:border-brand/30 hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Pricing Card */}
            <div className="w-full lg:w-[400px] bg-[#020B06] rounded-[32px] border border-[#28533B] p-8 lg:p-10 relative overflow-visible flex flex-col items-center justify-center text-center shadow-2xl group">
              
              {/* Decorative Eclipse Glow */}
              <div className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] bg-brand/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand/20 transition-colors duration-700" />
              
              {/* Most Popular Badge */}
              <div className="absolute -top-[23px] left-1/2 -translate-x-1/2 z-10 px-6 py-2 rounded-full bg-gradient-to-r from-[#06130C] to-[#2FD476]/80 border border-[#2FD476]/50 flex items-center gap-2 shadow-[0_0_20px_rgba(47,212,118,0.3)] min-w-[200px] justify-center">
                 <div className="relative w-4 h-4"><Image src="/images/icons/fire.png" alt="hot" fill className="object-contain" /></div>
                 <span className="text-white text-xs font-semibold uppercase tracking-wider">Most Popular</span>
              </div>

              <div className="space-y-2 mb-8 mt-4">
                <p className="text-white/60 font-medium uppercase tracking-widest text-base lg:text-lg">{pricing.tagline}</p>
                <div className="text-white text-6xl md:text-7xl lg:text-[90px] font-bold tracking-tighter leading-[0.9]">{pricing.amount}</div>
              </div>

              <button className="w-full max-w-[280px] py-5 lg:py-6 bg-brand text-[#001B0C] rounded-[15px] text-lg lg:text-xl font-bold shadow-lg shadow-brand/20 transition-all hover:scale-[1.02] active:scale-95">
                {pricing.cta}
              </button>
            </div>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 md:mt-16">
          <RuleCard 
            title={evaluation.phase1.title}
            description={evaluation.phase1.description}
            rules={evaluation.phase1.rules}
          />
          <RuleCard 
            title={evaluation.phase2.title}
            description={evaluation.phase2.description}
            rules={evaluation.phase2.rules}
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
  <div className="bg-[#020B06] rounded-3xl border border-white/5 p-4 lg:p-5 shadow-2xl flex flex-col h-full relative overflow-hidden">
    <h3 className="text-white font-medium mb-2.5 leading-tight text-sm lg:text-base uppercase tracking-wider">{title}</h3>
    <p className="text-[#8F8F8F] mb-4 lg:mb-5 font-normal leading-relaxed text-[11px] lg:text-[13px] opacity-80">{description}</p>
    
    <div className="space-y-2">
      {rules.map((rule, idx) => (
        <div key={idx} className="flex items-center justify-between p-2 lg:p-2.5 bg-black/40 rounded-xl border border-white/5 group hover:border-brand/50 transition-all duration-300">
          <div className="flex items-center gap-2">
            <div className="relative w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-70">
              <Image src={rule.icon} alt={rule.label} fill className="object-contain" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#8F8F8F] font-semibold text-[10px] lg:text-[12px]">{rule.label}</span>
              {rule.showWarn && (
                <div className="relative w-2.5 h-2.5 opacity-40">
                  <Image src="/images/icons/warn.png" alt="info" fill className="object-contain" />
                </div>
              )}
            </div>
          </div>
          <div className="px-2 py-0.5 rounded-lg transition-all duration-300 group-hover:bg-[#2C8B57] min-w-[45px] flex items-center justify-center bg-transparent border border-transparent">
            <span className="text-white font-medium text-[11px] lg:text-[13px]">{rule.value}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
