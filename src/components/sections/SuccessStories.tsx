"use client";

import { motion } from "framer-motion";

export const SuccessStories = () => {
  return (
    <section className="relative w-full py-16 lg:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Content - Pixel-Perfect Typography */}
        <div className="text-center mx-auto" style={{ maxWidth: '1100px' }}>
          <h2 className="text-white font-normal leading-[121px] tracking-[-3px] mb-6 lg:mb-8"
            style={{ fontSize: 'clamp(40px, 6vw, 85px)' }}>
            Traders <span className="font-semibold" style={{ fontWeight: 600 }}>Success Stories</span>
          </h2>
          
          <p className="text-[#D1D1D1] font-light tracking-[-3%] mx-auto opacity-90"
            style={{ 
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              lineHeight: '100%',
              maxWidth: '906px'
            }}>
            Discover the potential to earn your desired income through trading without risking your own capital:
          </p>
        </div>

        {/* Dynamic Placeholder Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-40">
           {[1, 2, 3].map((i) => (
             <div key={i} className="aspect-[400/500] rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
               <p className="text-white/20 italic">Success Story Card {i}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
