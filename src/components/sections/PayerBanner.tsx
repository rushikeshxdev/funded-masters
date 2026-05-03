"use client";

import { motion } from "framer-motion";

// Configuration for decorative checkerboard squares to avoid repetition and hardcoding in the JSX
const SQUARE_POSITIONS = [
  // Top Row (y=0)
  { x: 0, y: 0 },
  { x: 130, y: 0 },
  { x: 260, y: 0 },
  // Bottom Row (y=65)
  { x: 65, y: 65 },
  { x: 195, y: 65 },
];

export const PayerBanner = () => {
  return (
    <section className="relative w-full pt-4 pb-16 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full p-[1px] rounded-[25px] overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(64.67deg, rgba(48, 189, 111, 0) 33.58%, #30BD6F 66.42%)",
          }}
        >
          {/* Internal Content Box */}
          <div className="relative w-full min-h-[117px] bg-[#001108] rounded-[24px] overflow-hidden flex items-center justify-center px-4 py-8 md:py-0 md:px-12">
            
            {/* Checkerboard Pattern - Left Side */}
            <div className="absolute left-[-1px] top-[-6px] h-full w-[325px] pointer-events-none opacity-40 hidden md:block">
              {SQUARE_POSITIONS.map((pos, idx) => (
                <Square key={`left-${idx}`} x={pos.x} y={pos.y} rotate />
              ))}
            </div>

            {/* Checkerboard Pattern - Right Side */}
            <div className="absolute right-[-1px] top-[-6px] h-full w-[325px] pointer-events-none opacity-40 hidden md:block">
              {SQUARE_POSITIONS.map((pos, idx) => (
                <Square key={`right-${idx}`} x={pos.x} y={pos.y} right />
              ))}
            </div>

            {/* Large Atmospheric Vector Glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               <div className="w-full max-w-[1200px] aspect-square rotate-[-3.87deg] opacity-30 blur-[200px]"
                    style={{ background: "linear-gradient(180deg, rgba(0, 255, 166, 0.2) 0%, rgba(0, 109, 71, 0.2) 91.67%)" }} />
            </div>

            {/* Central Text Content */}
            <div className="relative z-10 text-center">
              <h2 className="font-sans font-semibold tracking-tight leading-tight text-xl md:text-3xl lg:text-4xl xl:text-[42px] bg-gradient-to-r from-[#027F49] via-[#4BFFC6] to-[#027F49] bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Get Paid in 48 Hours or Get $2000!
              </h2>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Extracted atomic component for squares to ensure "No Repetitive Code"
const Square = ({ x, y, rotate = false, right = false }: { x: number; y: number; rotate?: boolean; right?: boolean }) => (
  <div 
    className="absolute w-[65px] h-[65px] rounded-sm"
    style={{
      top: `${y}px`,
      [right ? "right" : "left"]: `${x}px`,
      background: "linear-gradient(212.82deg, rgba(255, 255, 255, 0.1) -5.68%, rgba(255, 255, 255, 0) 80.4%)",
      transform: rotate ? "rotate(180deg)" : "none"
    }}
  />
);
