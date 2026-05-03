"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        className="absolute -right-[20%] bottom-[0%] w-[600px] lg:w-[800px] h-[400px] lg:h-[600px] bg-[#04472C] opacity-100 pointer-events-none rounded-full"
        style={{ 
          filter: "blur(454.8px)",
          transform: "rotate(53.55deg)",
          zIndex: 0
        }}
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
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Row 2: 2 Cards (Centered) */}
          <div className="flex flex-col lg:flex-row lg:justify-center gap-x-6 gap-y-24">
            {FEATURES_DATA.slice(3).map((feature, index) => (
              <div key={index} className="lg:w-[450px]">
                <FeatureCard {...feature} index={index + 3} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, icon, index, rotate }: { title: string; description: string; icon: string; index: number; rotate: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group h-[240px] lg:h-[260px] w-full rounded-[25px] border border-white/10 bg-[#050D08] px-6 lg:px-8 flex flex-col items-center text-center justify-start pt-16 lg:pt-20"
      style={{
        boxShadow: "inset 0px -40px 100px 0px rgba(0, 61, 27, 0.25)",
      }}
    >
      {/* Overlapping Icon Layer */}
      <div className="absolute -top-10 lg:-top-16 inset-x-0 flex justify-center pointer-events-none">
        {/* Rotation Wrapper */}
        <div 
          className="relative w-20 h-20 lg:w-[125px] lg:h-[125px]"
          style={{ transform: `rotate(${rotate}deg)` }}
        >
          {/* Hover Scale Layer */}
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
            <Image 
              src={icon} 
              alt={title} 
              fill 
              className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-1 lg:space-y-2 z-10">
        <h3 className="font-figtree font-semibold text-xl lg:text-[30px] text-white leading-tight">
          {title}
        </h3>
        <p className="font-figtree font-light text-[14px] lg:text-[20px] text-[#D1D1D1] leading-tight max-w-[380px] mx-auto opacity-70">
          {description}
        </p>
      </div>

      {/* Hover State: Enhanced Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[25px]"
        style={{
          boxShadow: "inset 0px -50px 120px 0px #003D1B4D",
        }}
      />
    </motion.div>
  );
};
