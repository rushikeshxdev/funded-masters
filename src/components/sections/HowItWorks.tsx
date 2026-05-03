"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Challenge Phase",
    description: "Choose a Challenge account and showcase your skills.",
    icon: "/images/3rdpage/trophy.png",
  },
  {
    title: "Get Funded Account",
    description: "Pass your challenge and get a simulated funded account.",
    icon: "/images/3rdpage/bank.png",
  },
  {
    title: "Get Rewarded",
    description: "Earn your share of the profits and receive your payout within 24 hrs.",
    icon: "/images/3rdpage/dollar.png",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="relative w-[1196px] h-[550px] bg-[#030C07] rounded-[40px] p-20 overflow-hidden border border-white/5 mb-24 mx-auto shadow-2xl">
           <div className="absolute top-1/2 right-[50px] -translate-y-1/2 w-[600px] h-[500px] pointer-events-none">
             <Image 
               src="/images/3rdpage/s1.png" 
               alt="3D Cross" 
               fill 
               className="object-contain"
             />
           </div>

           <div className="relative z-10 space-y-10">
             <span className="text-brand text-xl font-medium tracking-widest uppercase">How It Works</span>
             <h2 className="text-white text-[85px] font-normal leading-[1.1] tracking-tight">
               Maximum Profit & <br />
               Secure <span className="font-semibold text-brand">Trading Platform</span>
             </h2>
             <p className="text-[#909AAA] text-[28px] font-light opacity-80 leading-relaxed">
               Choose the evaluation based on your preference <br />
               to become an Empire Trader.
             </p>
             <button className="px-12 py-5 bg-brand text-[#001B0C] rounded-full text-2xl font-bold shadow-lg">
               Get Funded
             </button>
           </div>
        </div>

        <div className="grid grid-cols-3 gap-8 w-[1196px] mx-auto">
          {STEPS.map((step, idx) => (
            <div key={idx} className="bg-[#030C07] h-[350px] rounded-[32px] p-10 border border-white/5 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#002512] flex items-center justify-center mb-8">
                <div className="relative w-8 h-8"><Image src={step.icon} alt={step.title} fill /></div>
              </div>
              <h3 className="text-white text-3xl font-semibold mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#909AAA] text-xl font-normal leading-relaxed opacity-80">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
