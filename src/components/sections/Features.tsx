"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSETS = [
  {
    title: "Up to 100% Profit Splits",
    description: "Keep every dollar you earn - Our funding model lets you keep up to 100% of your profits.",
    icon: "/images/icons/feat-2.png",
  },
  {
    title: "1-Step Challenge",
    description: "One clear target, one easy step-prove your skills and unlock funding with no extra steps.",
    icon: "/images/icons/feat-3.png",
  },
  {
    title: "Lightning Fast Payouts",
    description: "Trade hard today, spend tomorrow - experience truly lightning fast payouts.",
    icon: "/images/icons/feat-4.png",
  },
  {
    title: "Trade News Freely",
    description: "Earn your share of the profits and receive your payout within 24 hrs.",
    icon: "/images/icons/feat-5.png",
  },
  {
    title: "6% Profit Target",
    description: "Hit your mark effortlessly with our Ultra-low 6% profit target. Less stress, more trading.",
    icon: "/images/icons/feat-2.png",
  },
];

export const Features = () => {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-white text-[85px] font-normal tracking-tight">
            Multiple Trading <span className="font-semibold text-brand">Assets</span>
          </h2>
          <p className="text-[#909AAA] text-[28px] font-light opacity-80 mt-4">
            Trade in the following markets:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="grid grid-cols-3 gap-10 w-full">
            {ASSETS.slice(0, 3).map((asset, idx) => (
              <div key={idx} className="bg-[#030C07] w-[466px] h-[350px] rounded-[32px] p-10 border border-white/5 flex flex-col items-center text-center group shadow-2xl">
                <div className="relative w-24 h-24 mb-8">
                  <Image src={asset.icon} alt={asset.title} fill className="object-contain" />
                </div>
                <h3 className="text-white text-3xl font-semibold mb-4">{asset.title}</h3>
                <p className="text-[#909AAA] text-xl opacity-80">{asset.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-10 w-full">
            {ASSETS.slice(3, 5).map((asset, idx) => (
              <div key={idx} className="bg-[#030C07] w-[466px] h-[350px] rounded-[32px] p-10 border border-white/5 flex flex-col items-center text-center group shadow-2xl">
                <div className="relative w-24 h-24 mb-8">
                  <Image src={asset.icon} alt={asset.title} fill className="object-contain" />
                </div>
                <h3 className="text-white text-3xl font-semibold mb-4">{asset.title}</h3>
                <p className="text-[#909AAA] text-xl opacity-80">{asset.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
