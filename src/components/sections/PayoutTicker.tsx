"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TICKER_DATA = [
  { type: "image", src: "/images/backgrounds/image-animation.png" },
  { type: "payout", amount: "$4,659.58", location: "Toronto, Canada" },
  { type: "divider" },
  { type: "stat", value: "5,863", label: "Traders" },
  { type: "divider" },
  { type: "image", src: "/images/backgrounds/image-animation.png" },
  { type: "payout", amount: "$2,119.48", location: "Sydney, Australia" },
  { type: "divider" },
  { type: "stat", value: "180+", label: "Countries" },
  { type: "divider" },
  { type: "image", src: "/images/backgrounds/image-animation.png" },
  { type: "payout", amount: "$8,273.75", location: "Chennai, India" },
  { type: "divider" },
  { type: "stat", value: "$2.7M", label: "Payouts" },
  { type: "divider" },
];

export const PayoutTicker = () => {
  const duplicatedData = [...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA];

  return (
    <div className="w-full bg-[#050D08] overflow-hidden border-y border-[#365943]/20 h-[80px] lg:h-[105px] flex items-center">
      <motion.div 
        className="flex items-center whitespace-nowrap"
        animate={{ x: [0, -1800] }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedData.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.type === "image" && (
              <div className="relative w-10 h-14 lg:w-[38px] lg:h-[58px] shrink-0 ml-4 lg:ml-10">
                <Image 
                  src={item.src} 
                  alt="Payout Icon" 
                  fill 
                  className="object-contain"
                />
              </div>
            )}

            {item.type === "payout" && (
              <div className="flex flex-col items-center lg:items-start ml-2 lg:ml-4 mr-6 lg:mr-10">
                <span className="text-[#59D28F] font-dmsans font-semibold text-xl lg:text-[28px] leading-tight">
                  {item.amount}
                </span>
                <span className="text-white font-dmsans font-normal text-xs lg:text-[16px] leading-tight opacity-80">
                  {item.location}
                </span>
              </div>
            )}

            {item.type === "stat" && (
              <div className="flex flex-col items-center mx-6 lg:mx-10">
                <span className="text-white font-dmsans font-semibold text-lg lg:text-[22px] leading-tight">
                  {item.value}
                </span>
                <span className="text-white font-dmsans font-normal text-xs lg:text-[16px] leading-tight opacity-80">
                  {item.label}
                </span>
              </div>
            )}

            {item.type === "divider" && (
              <div className="relative w-[1px] h-8 lg:h-[42px] opacity-40">
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
    </div>
  );
};
