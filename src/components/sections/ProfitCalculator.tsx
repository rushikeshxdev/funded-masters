"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

// Industry Standard: Centralized Configuration for Design Tokens
const CALCULATOR_CONFIG = {
  accountSizes: [
    { label: "$10K", value: 10000 },
    { label: "$25K", value: 25000 },
    { label: "$50K", value: 50000 },
    { label: "$100K", value: 100000 },
    { label: "$200K", value: 200000 },
  ],
  colors: {
    primary: "#59D28F",
    secondary: "#027F49",
    background: "#052718",
    eclipse1: "#00E24B",
    eclipse2: "#024D16",
    textMuted: "#D1D1D1",
  },
  card: {
    aspect: "aspect-[1.7]",
    maxWidth: "max-w-[560px]",
    borderRadius: "rounded-[28px]",
  },
  eclipses: [
    { 
      id: "eclipse-bright",
      size: "w-[370px] h-[280px]", 
      color: "bg-[#00E24B]", 
      opacity: "opacity-30",
      offset: "translate(-60%, -40%)",
      blur: "blur-[100px]",
      shadow: "0 0 300px 100px rgba(0, 226, 75, 0.3)"
    },
    { 
      id: "eclipse-dark",
      size: "w-[360px] h-[310px]", 
      color: "bg-[#024D16]", 
      opacity: "opacity-40",
      offset: "translate(-40%, -60%)",
      blur: "blur-[100px]",
      shadow: "0 0 300px 100px rgba(2, 77, 22, 0.4)"
    }
  ]
};

export const ProfitCalculator = () => {
  const [sizeIndex, setSizeIndex] = useState(3); // Default to $100K
  const [profitRate, setProfitRate] = useState(18); // Default to 18%

  const totalProfit = useMemo(() => {
    const size = CALCULATOR_CONFIG.accountSizes[sizeIndex].value;
    const profit = size * (profitRate / 100) * 0.95; // 95% Profit Split
    return Math.round(profit).toLocaleString();
  }, [sizeIndex, profitRate]);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section - Fluid Typography */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl lg:text-[60px] font-normal leading-tight tracking-tight mb-6"
          >
            How much can you <span className="font-semibold text-[#59D28F]">Earn with Us?</span>
          </motion.h2>
          <p className="text-[#D1D1D1] text-base md:text-lg lg:text-[20px] font-light max-w-[800px] mx-auto opacity-70 leading-relaxed tracking-tight">
            Discover the potential to earn your desired income through trading without risking your own capital:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Controls Side */}
          <div className="w-full lg:flex-1 space-y-12 lg:space-y-16 lg:max-w-[600px]">
            
            {/* Account Size Slider */}
            <div className="space-y-8">
              <h3 className="text-white text-xl md:text-2xl lg:text-[28px] font-medium tracking-tight">Account Size</h3>
              <div className="relative pt-4">
                <div className="h-[10px] w-full bg-[#052718] rounded-full relative">
                  <motion.div 
                    className="absolute h-full rounded-full bg-gradient-to-r from-[#027F49] to-[#59D28F]"
                    animate={{ width: `${(sizeIndex / (CALCULATOR_CONFIG.accountSizes.length - 1)) * 100}%` }}
                  />
                  <input 
                    type="range" 
                    min="0" 
                    max={CALCULATOR_CONFIG.accountSizes.length - 1} 
                    step="1"
                    value={sizeIndex}
                    onChange={(e) => setSizeIndex(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#59D28F] rounded-full shadow-[0_0_15px_rgba(89,210,143,0.5)] z-10"
                    animate={{ left: `calc(${(sizeIndex / (CALCULATOR_CONFIG.accountSizes.length - 1)) * 100}% - 12px)` }}
                  />
                </div>
                <div className="flex justify-between mt-6">
                  {CALCULATOR_CONFIG.accountSizes.map((size, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSizeIndex(idx)}
                      className={`text-sm md:text-lg lg:text-[22px] font-bold transition-all duration-300 ${
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
            <div className="space-y-8">
              <h3 className="text-white text-xl md:text-2xl lg:text-[28px] font-medium tracking-tight">Monthly Profit Rate</h3>
              <div className="relative pt-4 pb-12">
                <div className="h-[10px] w-full bg-[#052718] rounded-full relative">
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
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#59D28F] rounded-full shadow-[0_0_15px_rgba(89,210,143,0.5)] z-10"
                    animate={{ left: `calc(${(profitRate / 30) * 100}% - 12px)` }}
                  />
                </div>
                <motion.div 
                  className="absolute top-[45px] bg-[#59D28F] text-[#001B0C] px-5 py-1.5 rounded-lg text-base font-bold shadow-lg"
                  animate={{ left: `calc(${(profitRate / 30) * 100}% - 30px)` }}
                >
                  {profitRate}%
                </motion.div>
              </div>
            </div>
          </div>

          {/* Results Card - Fully Responsive Dashboard */}
          <div className="relative w-full lg:w-[500px] xl:w-[560px] flex justify-center mt-12 lg:mt-0">
            
            {/* Config-Driven Background Eclipses */}
            {CALCULATOR_CONFIG.eclipses.map((eclipse) => (
              <div 
                key={eclipse.id}
                className={`absolute ${eclipse.size} ${eclipse.color} ${eclipse.opacity} ${eclipse.blur} pointer-events-none z-0`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `${eclipse.offset} rotate(-10.85deg)`,
                  boxShadow: eclipse.shadow,
                }}
              />
            ))}

            <div 
              className={`relative w-full ${CALCULATOR_CONFIG.card.aspect} ${CALCULATOR_CONFIG.card.borderRadius} bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 lg:p-12 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden group`}
              style={{
                borderWidth: "1px",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="relative z-10 space-y-4 lg:space-y-6 w-full">
                <p className="text-white text-lg md:text-xl lg:text-[28px] font-bold leading-tight">
                  Your total profit with <br />
                  <span className="text-[#59D28F]">95% Profit Split.</span>
                </p>
                <div className="w-[75%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mx-auto" />
                <div className="flex items-baseline justify-center gap-2 group-hover:scale-105 transition-all duration-500">
                  <span className="text-white text-5xl md:text-7xl lg:text-[90px] font-bold leading-none tracking-tighter">
                    ${totalProfit}
                  </span>
                  <span className="text-white/60 text-base md:text-xl lg:text-[30px] font-medium">
                    /month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Compact & Balanced */}
        <div className="mt-16 lg:mt-24 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 lg:px-20 py-5 lg:py-6 bg-[#59D28F] text-[#001B0C] rounded-full text-lg lg:text-[22px] font-bold transition-all shadow-[0_10px_30px_rgba(89,210,143,0.3)] hover:shadow-[0_15px_40px_rgba(89,210,143,0.5)]"
          >
            Get Funded
          </motion.button>
        </div>
      </div>
    </section>
  );
};
