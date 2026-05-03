"use client";

import { motion } from "framer-motion";

export const PayerBanner = () => {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        
        <div 
          className="relative w-[1196px] h-[160px] bg-gradient-to-r from-[#031D11] via-[#052718] to-[#031D11] rounded-full flex items-center justify-center mx-auto overflow-hidden border border-brand/20 shadow-2xl"
        >
          <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-10 h-full opacity-20">
            {[...Array(10)].map((_, idx) => (
              <div key={idx} className="h-full border-r border-brand/10 bg-gradient-to-b from-white/5 to-transparent" />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-white text-[48px] font-normal leading-tight tracking-tight">
              Get Paid in <span className="font-semibold text-brand italic">48 Hours</span> or Get <span className="font-semibold text-brand italic">$2,000!</span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};
