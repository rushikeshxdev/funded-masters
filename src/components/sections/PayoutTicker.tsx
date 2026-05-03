"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

export const PayoutTicker = () => {
  const duplicatedData = [...siteConfig.tickerData, ...siteConfig.tickerData, ...siteConfig.tickerData];

  return (
    <section className="w-full bg-[#050D08] overflow-hidden border-y border-[#365943]/20 h-[64px] lg:h-[80px] flex items-center">
      <motion.div 
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedData.map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            {item.type === "image" && item.src && (
              <div className="relative w-8 h-10 lg:w-[32px] lg:h-[48px] shrink-0 ml-4 lg:ml-8">
                <Image 
                  src={item.src} 
                  alt="Payout Icon" 
                  fill 
                  className="object-contain"
                />
              </div>
            )}

            {item.type === "payout" && (
              <div className="flex flex-col items-start ml-2 lg:ml-4 mr-6 lg:mr-8">
                <span className="text-[#59D28F] font-dmsans font-semibold text-lg lg:text-[22px] xl:text-[24px] leading-tight">
                  {item.amount}
                </span>
                <span className="text-white/60 font-dmsans font-normal text-[10px] lg:text-[14px] leading-tight">
                  {item.location}
                </span>
              </div>
            )}

            {item.type === "stat" && (
              <div className="flex flex-col items-center mx-6 lg:mx-8">
                <span className="text-white font-dmsans font-semibold text-base lg:text-[18px] xl:text-[20px] leading-tight">
                  {item.value}
                </span>
                <span className="text-white/60 font-dmsans font-normal text-[10px] lg:text-[14px] leading-tight">
                  {item.label}
                </span>
              </div>
            )}

            {item.type === "divider" && (
              <div className="relative w-[1px] h-6 lg:h-[32px] opacity-30">
                <Image 
                  src="/images/backgrounds/Vertical-line.png" 
                  alt="Divider" 
                  fill 
                  className="object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
