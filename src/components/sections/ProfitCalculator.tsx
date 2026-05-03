"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const ACCOUNT_SIZES = [
  { label: "$10K", value: 10000 },
  { label: "$25K", value: 25000 },
  { label: "$50K", value: 50000 },
  { label: "$100K", value: 100000 },
  { label: "$200K", value: 200000 },
];

export const ProfitCalculator = () => {
  const [sizeIndex, setSizeIndex] = useState(3); // Default to $100K
  const [profitRate, setProfitRate] = useState(18); // Default to 18%

  const totalProfit = useMemo(() => {
    const size = ACCOUNT_SIZES[sizeIndex].value;
    const profit = size * (profitRate / 100) * 0.95; // 95% Profit Split
    return Math.round(profit).toLocaleString();
  }, [sizeIndex, profitRate]);

  return (
    <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl lg:text-[60px] font-normal leading-tight tracking-tight mb-6"
          >
            How much can you <span className="font-semibold text-[#59D28F]">Earn with Us?</span>
          </motion.h2>
          <p className="text-[#D1D1D1] text-base md:text-lg lg:text-[20px] font-light max-w-[750px] mx-auto opacity-70 leading-relaxed tracking-tight">
            Discover the potential to earn your desired income through trading without risking your own capital:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Controls Side */}
          <div className="w-full lg:max-w-[580px] space-y-10 lg:space-y-14">
            
            {/* Account Size Slider */}
            <div className="space-y-6">
              <h3 className="text-white text-lg lg:text-[28px] font-medium tracking-tight">Account Size</h3>
              <div className="relative pt-3">
                <div className="h-[8px] w-full bg-[#052718] rounded-full relative">
                  <motion.div 
                    className="absolute h-full rounded-full bg-gradient-to-r from-[#027F49] to-[#59D28F]"
                    animate={{ width: `${(sizeIndex / (ACCOUNT_SIZES.length - 1)) * 100}%` }}
                  />
                  <input 
                    type="range" 
                    min="0" 
                    max={ACCOUNT_SIZES.length - 1} 
                    step="1"
                    value={sizeIndex}
                    onChange={(e) => setSizeIndex(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#59D28F] rounded-full shadow-[0_0_12px_rgba(89,210,143,0.5)] z-10"
                    animate={{ left: `calc(${(sizeIndex / (ACCOUNT_SIZES.length - 1)) * 100}% - 10px)` }}
                  />
                </div>
                <div className="flex justify-between mt-5">
                  {ACCOUNT_SIZES.map((size, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSizeIndex(idx)}
                      className={`text-xs md:text-base lg:text-[20px] font-bold transition-all duration-300 ${
                        idx === sizeIndex ? "text-[#59D28F] scale-110" : "text-[#0A3D25]"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Monthly Profit Rate Slider */}
            <div className="space-y-6">
              <h3 className="text-white text-lg lg:text-[28px] font-medium tracking-tight">Monthly Profit Rate</h3>
              <div className="relative pt-3 pb-10">
                <div className="h-[8px] w-full bg-[#052718] rounded-full relative">
                  <motion.div 
                    className="absolute h-full rounded-full bg-gradient-to-r from-[#027F49] to-[#59D28F]"
                    animate={{ width: `${(profitRate / 30) * 100}%` }}
                  />
                  <input 
                    type="range" 
                    min="0" 
                    max="30" 
                    step="1"
                    value={profitRate}
                    onChange={(e) => setProfitRate(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#59D28F] rounded-full shadow-[0_0_12px_rgba(89,210,143,0.5)] z-10"
                    animate={{ left: `calc(${(profitRate / 30) * 100}% - 10px)` }}
                  />
                </div>
                <motion.div 
                  className="absolute top-[35px] bg-[#59D28F] text-[#001B0C] px-4 py-1 rounded-md text-sm font-bold shadow-lg"
                  animate={{ left: `calc(${(profitRate / 30) * 100}% - 25px)` }}
                >
                  {profitRate}%
                </motion.div>
              </div>
            </div>
          </div>

          {/* Results Card - Eclipses centered behind the card */}
          <div className="relative w-full lg:w-[480px] xl:w-[560px] flex justify-center">
            
            {/* Card Background Eclipses */}
            <div 
              className="absolute w-[373px] h-[285px] bg-[#00E24B] opacity-30 pointer-events-none z-0"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-60%, -40%) rotate(-10.85deg)",
                filter: "blur(100px)",
                boxShadow: "0 0 300px 100px rgba(0, 226, 75, 0.3)",
              }}
            />
            <div 
              className="absolute w-[367px] h-[315px] bg-[#024D16] opacity-40 pointer-events-none z-0"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-40%, -60%) rotate(-10.85deg)",
                filter: "blur(100px)",
                boxShadow: "0 0 300px 100px rgba(2, 77, 22, 0.4)",
              }}
            />

            <div 
              className="relative w-full aspect-[1.7] rounded-[28px] bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-6 md:p-10 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden group"
              style={{
                borderWidth: "1px",
                borderColor: "rgba(255, 255, 255, 0.12)",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="relative z-10 space-y-4 md:space-y-6 w-full">
                <p className="text-white text-base md:text-xl lg:text-[26px] font-bold leading-tight">
                  Your total profit with <br />
                  <span className="text-[#59D28F]">95% Profit Split.</span>
                </p>
                <div className="w-[75%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mx-auto" />
                <div className="flex items-baseline justify-center gap-2 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-white text-4xl md:text-6xl lg:text-[80px] font-bold leading-none tracking-tighter">
                    ${totalProfit}
                  </span>
                  <span className="text-white/60 text-sm md:text-lg lg:text-[28px] font-medium">
                    /month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 lg:mt-16 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 lg:px-16 py-4 lg:py-5 bg-[#59D28F] text-[#001B0C] rounded-full text-base lg:text-[20px] font-bold transition-all shadow-[0_8px_25px_rgba(89,210,143,0.2)] hover:shadow-[0_12px_35px_rgba(89,210,143,0.4)]"
          >
            Get Funded
          </motion.button>
        </div>
      </div>
    </section>
  );
};
