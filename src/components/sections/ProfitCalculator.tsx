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
  const [profitRate, setProfitRate] = useState(10); // Default to 10%

  const totalProfit = useMemo(() => {
    const size = ACCOUNT_SIZES[sizeIndex].value;
    const profit = size * (profitRate / 100) * 0.95; // 95% Profit Split
    return Math.round(profit).toLocaleString();
  }, [sizeIndex, profitRate]);

  return (
    <section className="relative w-full py-16 lg:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-white text-4xl lg:text-[85px] font-normal leading-tight tracking-tight mb-6">
            How much can you <span className="font-semibold text-brand">Earn with Us?</span>
          </h2>
          <p className="text-[#D1D1D1] text-lg lg:text-[28px] font-light max-w-[906px] mx-auto opacity-80 leading-relaxed">
            Discover the potential to earn your desired income through trading without risking your own capital:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Controls Side */}
          <div className="w-full lg:max-w-[800px] space-y-16 lg:space-y-24">
            
            {/* Account Size Slider */}
            <div className="space-y-8 lg:space-y-12">
              <h3 className="text-white text-2xl lg:text-[41px] font-medium tracking-tight">Account Size</h3>
              <div className="relative pt-4">
                <div className="h-[11.27px] w-full bg-[#2A4D42] rounded-full relative">
                  <motion.div 
                    className="absolute h-full rounded-full bg-gradient-to-r from-[#027F49] to-[#4BFFC6]"
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
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-brand rounded-full shadow-[0_0_20px_#4BFFC6] z-10"
                    animate={{ left: `calc(${(sizeIndex / (ACCOUNT_SIZES.length - 1)) * 100}% - 16px)` }}
                  />
                </div>
                <div className="flex justify-between mt-8">
                  {ACCOUNT_SIZES.map((size, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSizeIndex(idx)}
                      className={`text-lg lg:text-[29.36px] font-medium transition-colors ${
                        idx === sizeIndex ? "text-[#4BFFC6]" : "text-[#2A4D42]"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Monthly Profit Rate Slider */}
            <div className="space-y-8 lg:space-y-12">
              <h3 className="text-white text-2xl lg:text-[41px] font-medium tracking-tight">Monthly Profit Rate</h3>
              <div className="relative pt-4 pb-12">
                <div className="h-[11.27px] w-full bg-[#2A4D42] rounded-full relative">
                  <motion.div 
                    className="absolute h-full rounded-full bg-gradient-to-r from-[#027F49] to-[#4BFFC6]"
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
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-brand rounded-full shadow-[0_0_20px_#4BFFC6] z-10"
                    animate={{ left: `calc(${(profitRate / 30) * 100}% - 16px)` }}
                  />
                </div>
                <motion.div 
                  className="absolute top-[50px] bg-brand text-[#070016] px-5 py-2 rounded-[10px] text-lg md:text-[29.36px] font-medium"
                  animate={{ left: `calc(${(profitRate / 30) * 100}% - 40px)` }}
                >
                  {profitRate}%
                </motion.div>
              </div>
            </div>
          </div>

          {/* Results Card - Reverted to 784x401 Layout */}
          <div className="relative w-full max-w-[784px]">
            <div 
              className="relative w-full aspect-[784/401] rounded-[40px] bg-[#FFFFFF17] backdrop-blur-xl border border-white/20 p-10 lg:p-14 overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl"
              style={{
                borderWidth: "1.54px",
                borderImageSource: "linear-gradient(63.73deg, #7750A0 2.34%, rgba(102, 102, 102, 0) 81.02%)",
              }}
            >
              <div className="absolute top-[20%] left-[10%] w-[370px] h-[280px] bg-[#00E24B] opacity-15 blur-[150px] -rotate-12 pointer-events-none" />
              <div className="absolute bottom-[10%] right-[-10%] w-[360px] h-[310px] bg-[#024D16] opacity-25 blur-[150px] -rotate-12 pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[#FEFEFE] text-xl lg:text-[40.97px] font-bold leading-tight mb-8">
                  Your total profit with <br />
                  <span className="text-brand">95% Profit Split.</span>
                </p>
                <div className="w-[80%] h-[2px] bg-[#7751A0] mx-auto mb-10 opacity-40" />
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-[#FEFEFE] text-6xl lg:text-[132px] font-bold leading-none tracking-tighter">
                    ${totalProfit}
                  </span>
                  <span className="text-[#FEFEFE] text-xl md:text-[40.97px] font-bold opacity-80">
                    /month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20 lg:mt-32 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 lg:px-24 py-5 lg:py-8 bg-brand text-[#001B0C] rounded-full text-xl lg:text-[29.36px] font-semibold transition-all shadow-lg"
          >
            Get Funded
          </motion.button>
        </div>
      </div>
    </section>
  );
};
