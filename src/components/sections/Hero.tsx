"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 bg-black overflow-hidden font-figtree">
      {/* Background Spartan Warrior */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute bottom-0 right-0 w-[846px] h-[121px] pointer-events-none">
          <Image 
            src="/images/backgrounds/BackgroundImage.png" 
            alt="Hero Warrior"
            fill
            className="object-contain object-right-bottom opacity-70"
            priority
          />
        </div>
        {/* Glowing Effects */}
        <div className="absolute top-[20%] left-[-10%] w-[60%] aspect-square bg-brand/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20 flex flex-col items-start text-left">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h1 className="text-white text-[100px] font-normal leading-[1.05] tracking-tight">
            Empowering <span className="font-semibold text-brand">Masters</span> <br />
            of the <span className="font-semibold text-brand italic">Financial Markets</span>
          </h1>
          
          <p className="text-[#D1D1D1] text-[28px] font-light max-w-[906px] opacity-80 leading-relaxed tracking-tight">
            Unlock your trading potential with our professional-grade funding. <br className="hidden md:block" />
            Trade with confidence using our capital and keep up to 95% of the profits.
          </p>

          <div className="flex items-center gap-10 pt-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-brand text-[#001B0C] rounded-full text-2xl font-bold shadow-lg shadow-brand/20 transition-all"
            >
              Start Trading Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white/5 text-white border border-white/10 rounded-full text-2xl font-semibold hover:bg-white/10 transition-all"
            >
              View Trading Plans
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Stats Ticker */}
      <div className="w-full mt-auto py-8 bg-black/80 backdrop-blur-md border-t border-white/5 relative z-30">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-brand text-3xl font-bold">$4,659.58</span>
            <span className="text-[#909AAA] text-base">Toronto, Canada</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-3xl font-bold">5,863</span>
            <span className="text-[#909AAA] text-base">Traders</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand text-3xl font-bold">$2,119.48</span>
            <span className="text-[#909AAA] text-base">Sydney, Australia</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-3xl font-bold">180+</span>
            <span className="text-[#909AAA] text-base">Countries</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand text-3xl font-bold">$8,273.75</span>
            <span className="text-[#909AAA] text-base">Chennai, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
