"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  rotate: number;
  index: number;
}

export const FeatureItemCard = ({ title, description, icon, rotate, index }: FeatureItem) => (
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
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[25px]"
      style={{
        boxShadow: "inset 0px -50px 120px 0px #003D1B4D",
      }}
    />
  </motion.div>
);
