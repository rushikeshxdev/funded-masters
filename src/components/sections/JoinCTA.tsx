"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Industry Standard: Data-Driven Configuration
const JOIN_CTA_CONFIG = {
  colors: {
    bgStart: "#060807",
    btnPrimaryStart: "#00B258",
    btnPrimaryEnd: "#6AF4B3",
    btnSecondaryBg: "rgba(92, 92, 92, 0.1)",
    textWhite: "#FFFFFF",
    textBlack: "#000000",
  },
  typography: {
    headline: "text-[clamp(32px,5vw,64px)] leading-[1.1] tracking-[-3%]",
    button: "text-[clamp(16px,1.5vw,20px)] font-semibold leading-[1.4] tracking-[-2%]",
  }
};

export const JoinCTA = () => {
  return (
    <section className="relative w-full py-12 lg:py-24 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main CTA Frame */}
        <div 
          className="relative w-full min-h-[400px] lg:min-h-[550px] rounded-[32px] lg:rounded-[48px] overflow-hidden flex flex-col items-center justify-center text-center p-8 lg:p-16"
          style={{
            background: `radial-gradient(97.26% 97.26% at 50% 100%, ${JOIN_CTA_CONFIG.colors.bgStart} 79.77%, rgba(5, 0, 36, 0) 100%)`,
          }}
        >
          {/* Noise Overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-40 mix-blend-soft-light pointer-events-none"
            style={{
              backgroundImage: 'url("/images/sections/noise.png")',
              backgroundRepeat: "repeat",
            }}
          />

          {/* Asset/Atmospheric Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <Image 
              src="/images/sections/assests.png" 
              alt="Background Atmosphere" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 space-y-8 lg:space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${JOIN_CTA_CONFIG.typography.headline} text-white max-w-[900px]`}
            >
              Let’s join with millions of <br className="hidden md:block" />
              <span className="font-semibold text-[#40FF95]">Traders in the world</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6"
            >
              {/* Primary Button: Get Funded */}
              <button 
                className={`
                  ${JOIN_CTA_CONFIG.typography.button}
                  px-10 lg:px-14 py-4 lg:py-5
                  rounded-full
                  bg-gradient-to-r from-[#00B258] to-[#6AF4B3]
                  text-black
                  hover:scale-105 transition-transform duration-300
                  shadow-[0_0_20px_rgba(0,178,88,0.3)]
                `}
              >
                Get Funded
              </button>

              {/* Secondary Button: Try Demo */}
              <button 
                className={`
                  ${JOIN_CTA_CONFIG.typography.button}
                  px-10 lg:px-14 py-4 lg:py-5
                  rounded-full
                  bg-[rgba(92,92,92,0.1)]
                  text-white
                  backdrop-blur-[12.33px]
                  border-[0.94px] border-white/20
                  shadow-[inset_0px_3.76px_24.56px_0px_rgba(114,114,114,0.25)]
                  hover:bg-white/10 transition-all duration-300
                `}
              >
                Try Demo
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
