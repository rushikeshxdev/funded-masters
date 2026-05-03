"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Industry Standard: Centralized Design System Configuration
const TRADERS_CONFIG = {
  container: {
    maxWidth: "max-w-[1440px]",
    bg: "bg-black",
    height: "lg:h-[700px]",
  },
  leftPane: {
    width: "lg:w-[750px]",
    contentWidth: "max-w-[531px]",
    statsValue: "text-2xl md:text-4xl lg:text-[48px] font-semibold leading-none tracking-tight",
    statsLabel: "text-sm md:text-base lg:text-[22px] font-medium opacity-100",
  },
  rightPane: {
    width: "lg:w-[600px]",
    cardHeight: "lg:h-[110px]",
    cardBg: "bg-[#05120B]",
    cardBorder: "border-[#244D37]",
    cardRadius: "rounded-[20px]",
  },
  typography: {
    headline: "text-3xl md:text-5xl lg:text-[64px] leading-[1.1] tracking-[-2px]",
    subheadline: "text-base md:text-lg lg:text-[24px] font-light leading-relaxed tracking-tight",
    name: "text-base md:text-lg lg:text-[24px] font-semibold tracking-tight",
    country: "text-xs md:text-sm lg:text-[16px] font-medium opacity-70",
    amount: "font-dm-sans text-xl md:text-2xl lg:text-[30px] font-semibold tracking-tight",
    time: "text-xs md:text-sm lg:text-[16px] font-semibold",
  },
  colors: {
    payout: "#69FFB2",
    amount: "#A2FFCC",
    timeBg: "#136036",
    muted: "#D1D1D1",
  }
};

const STATS_DATA = [
  { label: "Total Payouts", value: "$2.7M+" },
  { label: "Total Traders", value: "$5K+" },
  { label: "Avg.Payout time", value: "5hrs" },
];

const TRADERS_DATA = [
  { name: "John Bartlett", country: "Poland", amount: "$3,423.39", time: "1 Hours", logo: "/images/logos/T-logo.png" },
  { name: "Thomas Vargas", country: "Austria", amount: "$9,423.39", time: "4 Hours", logo: "/images/logos/T-logo.png" },
  { name: "James Colon", country: "Norway", amount: "$14,291.76", time: "8 Hours", logo: "/images/logos/T-logo.png" },
  { name: "Joseph Hurst", country: "Poland", amount: "$1,117.97", time: "6 Hours", logo: "/images/logos/ethereum.png" },
  { name: "Richard Miles", country: "Iraq", amount: "$6,142.12", time: "20 Hours", logo: "/images/logos/T-logo.png" },
];

const ANIMATED_TRADERS = [...TRADERS_DATA, ...TRADERS_DATA, ...TRADERS_DATA];

export const BestTraders = () => {
  return (
    <section className="relative w-full py-12 lg:py-20 bg-black overflow-hidden font-figtree">
      
      {/* Background Decor - Subtle Bottom Glow */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[400px] bg-[#00E24B] opacity-10 blur-[150px] pointer-events-none z-0" />

      <div className={`${TRADERS_CONFIG.container.maxWidth} mx-auto px-6 lg:px-12 relative z-10`}>
        
        {/* Simplified Frame */}
        <div 
          className={`relative w-full flex flex-col lg:flex-row ${TRADERS_CONFIG.container.height} overflow-hidden`}
        >
          {/* Sub-frame 1: Left Pane - Slightly increased scale for impact */}
          <div className={`${TRADERS_CONFIG.leftPane.width} p-4 lg:p-12 flex flex-col justify-center gap-12 lg:gap-14`}>
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={TRADERS_CONFIG.typography.headline}
              >
                <span className="text-white font-normal">Rewarding Our</span> <br />
                <span className="text-white font-semibold">Best Traders</span>
              </motion.h2>
              <p className={`${TRADERS_CONFIG.typography.subheadline} text-[#D1D1D1] ${TRADERS_CONFIG.leftPane.contentWidth} opacity-70`}>
                Choose the evaluation based on your preference to become an Master Trader.
              </p>
            </div>

            {/* Stats Block */}
            <div className="flex flex-wrap gap-10 lg:gap-14">
              {STATS_DATA.map((stat, idx) => (
                <div key={idx} className="space-y-3">
                  <p className={TRADERS_CONFIG.leftPane.statsValue} style={{ color: TRADERS_CONFIG.colors.payout }}>
                    {stat.value}
                  </p>
                  <p className={`${TRADERS_CONFIG.leftPane.statsLabel} text-white/90`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-frame 2: Right Pane Dashboard */}
          <div className="flex-1 bg-black/40 relative overflow-hidden">
            
            {/* Top Fade Gradient */}
            <div 
              className="absolute top-0 left-0 w-full h-[150px] z-20 pointer-events-none"
              style={{ background: "linear-gradient(180deg, #000000 15%, rgba(0, 0, 0, 0) 100%)" }}
            />
            
            {/* Continuous Vertical Scroller */}
            <div className="h-full relative py-6">
              <motion.div 
                className="flex flex-col gap-3 px-6 lg:px-8"
                animate={{ 
                  y: [0, -122 * TRADERS_DATA.length] // 110px card + 12px gap = 122px
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {ANIMATED_TRADERS.map((trader, idx) => (
                  <div 
                    key={idx}
                    className={`w-full ${TRADERS_CONFIG.rightPane.cardHeight} ${TRADERS_CONFIG.rightPane.cardRadius} ${TRADERS_CONFIG.rightPane.cardBg} border ${TRADERS_CONFIG.rightPane.cardBorder} p-4 lg:px-7 flex items-center justify-between group hover:border-[#59D28F]/30 transition-all duration-300 shrink-0 shadow-lg`}
                  >
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="relative w-12 h-12 lg:w-[65px] lg:h-[65px] bg-[#111] rounded-full flex items-center justify-center p-3 lg:p-4 shadow-inner border border-white/5">
                        <Image 
                          src={trader.logo} 
                          alt={trader.name} 
                          width={65} 
                          height={65} 
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className={`${TRADERS_CONFIG.typography.name} text-white`}>
                          {trader.name}
                        </h4>
                        <p className={`${TRADERS_CONFIG.typography.country} text-white/60`}>
                          {trader.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 lg:gap-2">
                      <p className={`${TRADERS_CONFIG.typography.amount} text-[#A2FFCC]`}>
                        {trader.amount}
                      </p>
                      <div className={`px-3 lg:px-4 py-1 lg:py-1.5 bg-[#136036] rounded-[6px]`}>
                        <span className={`${TRADERS_CONFIG.typography.time} text-white`}>
                          {trader.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Fade Gradient */}
            <div 
              className="absolute bottom-0 left-0 w-full h-[150px] z-20 pointer-events-none"
              style={{ background: "linear-gradient(0deg, #000000 15%, rgba(0, 0, 0, 0) 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
