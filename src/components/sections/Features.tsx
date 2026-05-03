"use client";

import { siteConfig } from "@/config/site";
import { FeatureItemCard } from "./FeatureItemCard";

export const Features = () => {
  const { headline, subheadline, items } = siteConfig.features;

  return (
    <section id="programs" className="relative w-full py-16 lg:py-24 bg-black overflow-hidden">
      
      {/* Decorative Eclipse Glow */}
      <div
        aria-hidden="true"
        className="absolute -right-[20%] bottom-0 w-[600px] lg:w-[800px] h-[400px] lg:h-[600px] bg-[#04472C] opacity-60 pointer-events-none rounded-full filter blur-[200px] lg:blur-[300px] rotate-[53.55deg] z-0"
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-28 space-y-3">
          <h2 className="font-figtree text-[32px] md:text-[50px] lg:text-[65px] leading-tight text-white tracking-tight">
            Multiple Trading <span className="font-semibold text-brand">{headline.split(" ").pop()}</span>
          </h2>
          <p className="font-figtree font-light text-lg md:text-xl lg:text-[24px] text-[#D1D1D1] opacity-60">
            {subheadline}
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col gap-24 lg:gap-20">
          
          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24">
            {items.slice(0, 3).map((feature, index) => (
              <FeatureItemCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Row 2: 2 Cards (Centered) */}
          <div className="flex flex-col lg:flex-row lg:justify-center gap-x-6 gap-y-24">
            {items.slice(3).map((feature, index) => (
              <div key={index} className="lg:w-[450px]">
                <FeatureItemCard {...feature} index={index + 3} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
