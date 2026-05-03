"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TICKER_DATA = [
  { amount: "$4,659.58", label: "Toronto, Canada", hasImage: true },
  { amount: "5,863", label: "Traders", hasImage: false },
  { amount: "$2,119.48", label: "Sydney, Australia", hasImage: true },
  { amount: "180+", label: "Countries", hasImage: false },
  { amount: "$8,273.75", label: "Chennai, India", hasImage: true },
  { amount: "$2.7M", label: "Payouts", hasImage: false },
  { amount: "$4,659.58", label: "Virginia, USA", hasImage: true },
  { amount: "5,863", label: "Traders", hasImage: false },
];

export const PayoutTicker = () => {
  // Triple the data to ensure seamless infinite loop
  const displayData = [...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA];

  return (
    <div className="w-full bg-[#050D08] border-y border-white/5 overflow-hidden py-3">
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap"
        animate={{ x: [0, -1500] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {displayData.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 min-w-fit group">
            
            {/* Conditional Certificate Image (img2.png) - Reduced size for clarity */}
            {item.hasImage ? (
              <div className="relative w-[45px] h-[62px] rounded-[4px] overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src="/images/A/img2.png"
                  alt="Payout Certificate"
                  fill
                  className="object-contain"
                />
              </div>
            ) : null}

            {/* Text Content - Scaled down */}
            <div className="flex flex-col justify-center">
              <span className="font-dmsans font-semibold text-[24px] leading-[1.1] text-[#59D28F]">
                {item.amount}
              </span>
              <span className="font-dmsans font-normal text-[14px] leading-tight text-white/80">
                {item.label}
              </span>
            </div>

            {/* Vertical Line Separator (Scaled to 50px) */}
            <div className="h-[50px] w-[1px] bg-white/10 mx-6" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
