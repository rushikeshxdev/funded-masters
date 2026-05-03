"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Industry Standard: Data-Driven Configuration with Fluid Typography (clamp)
const TESTIMONIALS_CONFIG = {
  colors: {
    tagline: "#40FF95",
    starBg: "#219653",
    cardBg: "#05120B",
    cardBorder: "#244D37",
    textMuted: "#BEBEC2",
    textContent: "#D1D1D1",
    scrollHandle: "#378058",
    scrollBg: "#191919",
    glowPrimary: "#04472C",
    glowSecondary: "#00B36B",
  },
  typography: {
    // Using clamp for smooth fluid scaling across all devices
    tagline: "text-[clamp(16px,2vw,20px)] font-medium tracking-normal",
    headline: "text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-2px]",
    ratingText: "text-[clamp(18px,3vw,24px)] font-medium",
    cardName: "text-[14px] font-semibold leading-tight",
    cardTime: "text-[14px] font-normal leading-tight",
    cardHeadline: "text-[clamp(18px,2.5vw,20px)] font-semibold leading-tight",
    cardContent: "text-[clamp(14px,1.8vw,16px)] font-light leading-relaxed tracking-tight",
  }
};

interface Testimonial {
  id: number;
  name: string;
  timeAgo: string;
  headline: string;
  content: string;
  rating: number;
}

// Simulated data - in production this would come from a CMS or API
import { siteConfig } from "@/config/site";

export const Testimonials = () => {
  const { headline, items } = siteConfig.testimonials;
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-performance scroll tracking
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Smooth handle mapping with robust percentage calculation
  const handleY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-black overflow-hidden font-figtree">
      
      {/* Responsive Background Decor - Eclipses adapt to screen size */}
      <div 
        className="absolute z-0 pointer-events-none opacity-50 lg:opacity-70"
        style={{
          width: "min(771px, 80vw)",
          height: "min(512px, 60vw)",
          top: "0%",
          left: "-15%",
          background: TESTIMONIALS_CONFIG.colors.glowPrimary,
          filter: "blur(clamp(100px, 15vw, 180px))",
          transform: "rotate(-126.45deg)",
          borderRadius: "100%",
        }}
      />
      
      <div 
        className="absolute z-0 pointer-events-none opacity-60 lg:opacity-90"
        style={{
          width: "min(392px, 50vw)",
          height: "min(143px, 20vw)",
          top: "12%",
          left: "-5%",
          background: TESTIMONIALS_CONFIG.colors.glowSecondary,
          filter: "blur(clamp(60px, 10vw, 100px))",
          transform: "rotate(-126.45deg)",
          borderRadius: "100%",
        }}
      />

      {/* Header Section - Fully Fluid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-12 lg:mb-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 lg:space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`${TESTIMONIALS_CONFIG.typography.tagline} text-brand`}
          >
            TESTIMONIALS
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-5xl lg:text-[65px] font-normal leading-tight tracking-tight max-w-[900px]"
          >
            <span className="font-semibold">{headline.split("-")[0]} - </span>
            <span>{headline.split("-")[1]}</span>
          </motion.h2>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <span className={`${TESTIMONIALS_CONFIG.typography.ratingText} text-white`}>Excellent</span>
              <div className="flex gap-1 lg:gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="p-1 lg:p-1.5 bg-[#219653] rounded-[3px]">
                      <Image src="/images/icons/star.png" alt="star" width={20} height={20} className="w-4 lg:w-5 h-4 lg:h-5" />
                   </div>
                ))}
                <div className="p-1 lg:p-1.5 bg-[#219653]/30 relative rounded-[3px] overflow-hidden">
                   <div className="absolute inset-0 bg-[#219653] w-[60%] h-full" />
                   <Image src="/images/icons/star.png" alt="star" width={20} height={20} className="relative z-10 w-4 lg:w-5 h-4 lg:h-5" />
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base lg:text-[20px] font-light text-[#D1D1D1]">
              Rated <span className="font-normal text-white">4.8 / 5</span> based on <span className="underline cursor-pointer">4,258 reviews</span> on
            </p>
          </div>
        </div>
      </div>

      {/* Optimized Grid Container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative flex z-10">
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-h-[500px] lg:max-h-[750px] overflow-y-auto custom-scrollbar-testimonials pr-2 lg:pr-12 w-full touch-pan-y"
        >
          {items.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.05 }}
              className="bg-[#05120B] border-2 border-[#244D37] rounded-[12px] p-5 lg:p-7 space-y-4 hover:border-brand/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                   <div key={i} className="p-1 bg-[#219653] rounded-[2px]">
                      <Image src="/images/icons/star.png" alt="star" width={14} height={14} />
                   </div>
                ))}
              </div>
              
              <div className="space-y-0.5">
                <p className={`${TESTIMONIALS_CONFIG.typography.cardName} text-white`}>
                  {testimonial.name}, <span className="font-normal text-[#BEBEC2]">{testimonial.role}</span>
                </p>
              </div>

              <h4 className={`${TESTIMONIALS_CONFIG.typography.cardHeadline} text-white`}>
                {testimonial.name}
              </h4>

              <p className={`${TESTIMONIALS_CONFIG.typography.cardContent} text-[#D1D1D1]/80`}>
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Responsive Custom Scrollbar - Only visible on desktop where needed */}
        <div className="hidden lg:block absolute right-0 top-0 w-[11px] h-full bg-[#191919] rounded-full overflow-hidden">
            <motion.div 
              className="w-full h-[150px] bg-[#378058] rounded-full absolute shadow-[0_0_15px_rgba(55,128,88,0.4)]" 
              style={{ y: handleY }}
              whileHover={{ backgroundColor: "#40FF95" }}
            />
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar-testimonials::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .custom-scrollbar-testimonials {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
};
