"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { FeatureCard } from "./FeatureCard";

export const WhyChooseUs = () => {
  const { headline, items } = siteConfig.whyChooseUs;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white text-3xl md:text-5xl lg:text-[65px] font-normal leading-tight tracking-tight"
          >
            {headline.split("Top")[0]} <span className="font-semibold text-brand">Top {headline.split("Top")[1]}</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 justify-items-center">
          {items.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
