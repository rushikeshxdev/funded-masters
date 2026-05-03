"use client";

import { FeatureItemCard } from "./FeatureItemCard";

const FEATURES_DATA = [
  {
    title: "Up to 100% Profit Splits",
    description: "Keep every dollar you earn—Our funding model lets you keep up to 100% of your profits.",
    icon: "/images/icons/dollar.png",
    rotate: 0,
  },
  {
    title: "1-Step Challenge",
    description: "One clear target, one easy step—prove your skills and unlock funding with no extra steps.",
    icon: "/images/icons/feat-2.png",
    rotate: 0,
  },
  {
    title: "Lightning Fast Payouts",
    description: "Trade hard today, spend tomorrow—experience truly lightning fast payouts.",
    icon: "/images/icons/feat-3.png",
    rotate: -13.44, // Exact Figma tilt
  },
  {
    title: "Trade News Freely",
    description: "Earn your share of the profits and receive your payout within 24 hrs.",
    icon: "/images/icons/feat-4.png",
    rotate: 0,
  },
  {
    title: "6% Profit Target",
    description: "Hit your mark effortlessly with our Ultra-low 6% profit target. Less stress, more trading.",
    icon: "/images/icons/feat-5.png",
    rotate: 0,
  },
];

export const Features = () => {
  return (
    <section id="programs" className="relative w-full py-24 bg-black overflow-hidden">
      
      {/* Decorative Eclipse Glow */}
      <div
        aria-hidden="true"
        className="absolute -right-[20%] bottom-0 w-[600px] lg:w-[800px] h-[400px] lg:h-[600px] bg-[#04472C] opacity-100 pointer-events-none rounded-full filter blur-[454.8px] rotate-[53.55deg] z-0"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="text-center mb-28 space-y-3">
          <h2 className="font-figtree text-[36px] md:text-[50px] lg:text-[70px] leading-tight text-white tracking-tight lg:tracking-[-2px]">
            Multiple Trading <span className="font-semibold text-[#59D28F]">Assets</span>
          </h2>
          <p className="font-figtree font-light text-base md:text-xl lg:text-[24px] text-[#D1D1D1] opacity-60 tracking-tight">
            Trade in the following markets:
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col gap-12 lg:gap-20">
          
          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24">
            {FEATURES_DATA.slice(0, 3).map((feature, index) => (
              <FeatureItemCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Row 2: 2 Cards (Centered) */}
          <div className="flex flex-col lg:flex-row lg:justify-center gap-x-6 gap-y-24">
            {FEATURES_DATA.slice(3).map((feature, index) => (
              <div key={index} className="lg:w-[450px]">
                <FeatureItemCard {...feature} index={index + 3} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
