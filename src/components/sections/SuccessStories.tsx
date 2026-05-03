"use client";

import { motion } from "framer-motion";

export const SuccessStories = () => {
  return (
    <section className="relative w-full py-16 lg:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Content - Dynamic Proportions */}
        <div className="text-center max-w-[1100px] mx-auto">
          <h2 className="text-white text-4xl md:text-6xl lg:text-[72px] font-normal leading-tight tracking-tight mb-6 lg:mb-8">
            Traders <span className="font-semibold text-brand">Success Stories</span>
          </h2>
          
          <p className="text-[#D1D1D1] text-lg md:text-xl lg:text-[28px] font-light leading-relaxed lg:leading-[1.4] tracking-tight max-w-[906px] mx-auto opacity-90">
            Discover the potential to earn your desired income through trading without risking your own capital:
          </p>
        </div>

        {/* Placeholder for future testimonials grid */}
        <div className="mt-20 opacity-10 border-t border-white/5 pt-20 text-center text-white italic">
          Testimonials section coming soon...
        </div>
      </div>
    </section>
  );
};
