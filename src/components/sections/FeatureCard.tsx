"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const CARD_CONFIG = {
  eclipse: {
    // Large-scale atmospheric glow
    width: "w-[450px] md:w-[600px]", 
    height: "h-[350px] md:h-[450px]",
    top: "-top-[200px] md:-top-[280px]",
    left: "-left-[150px] md:-left-[220px]",
    blur: "blur-[100px] md:blur-[180px]",
    color: "bg-[#00FF90]",
  },
  watermark: {
    width: "w-[220px] md:w-[280px]",
    height: "h-[240px] md:h-[300px]",
    top: "-top-4 md:-top-6",
    right: "-right-8 md:-right-12",
    opacity: {
      default: "opacity-[0.12]",
      hover: "group-hover:opacity-[0.25]"
    }
  },
  icon: {
    size: "w-[80px] h-[80px] md:w-[90px] md:h-[90px]",
    vectorSize: "w-[40px] h-[40px] md:w-[45px] md:h-[45px]",
    glowColor: "bg-[#05FF59]/30",
  }
};

export const FeatureCard = ({ feature, index }: FeatureCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group bg-[#030C07] w-full max-w-[420px] aspect-auto md:aspect-[1.3] min-h-[320px] rounded-[24px] overflow-hidden transition-all duration-700 hover:bg-[#041209] border border-transparent shadow-2xl flex flex-col justify-end p-6 md:p-8"
    style={{
      borderWidth: "0.89px",
      borderImageSource: "radial-gradient(44.12% 54.98% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
      borderImageSlice: 1,
    }}
  >
    {/* Decorative Glow - Large Atmospheric Eclipse */}
    <div 
      className={`absolute ${CARD_CONFIG.eclipse.width} ${CARD_CONFIG.eclipse.height} ${CARD_CONFIG.eclipse.top} ${CARD_CONFIG.eclipse.left} pointer-events-none z-10`} 
      style={{
        background: "radial-gradient(circle, rgba(0, 255, 144, 0.5) 0%, rgba(0, 255, 144, 0) 70%)",
        filter: "blur(120px)",
      }}
    />

    {/* Pillar Watermark Logo */}
    <div className={`absolute ${CARD_CONFIG.watermark.top} ${CARD_CONFIG.watermark.right} ${CARD_CONFIG.watermark.width} ${CARD_CONFIG.watermark.height} ${CARD_CONFIG.watermark.opacity.default} ${CARD_CONFIG.watermark.opacity.hover} transition-all duration-700 pointer-events-none select-none z-0`}>
      <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-1000">
        <Image 
          src="/images/logos/Navbar-logo.png" 
          alt="watermark" 
          fill 
          className="object-contain object-right-top grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#031D11]/0 via-[#052718]/50 to-[#052718]" />
      </div>
    </div>

    {/* Icon Module */}
    <div className="absolute top-6 left-6 z-20">
      <div className={`relative ${CARD_CONFIG.icon.size} bg-[#002512] rounded-full flex items-center justify-center border border-white/5 shadow-inner group-hover:border-white/10 transition-all duration-500`}>
        <div className={`relative ${CARD_CONFIG.icon.vectorSize} filter brightness-110 group-hover:scale-110 transition-transform duration-500`}>
          <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
        </div>
        <div className={`absolute -bottom-1 w-[60px] h-[25px] ${CARD_CONFIG.icon.glowColor} blur-[25px] mix-blend-plus-lighter pointer-events-none`} />
      </div>
    </div>

    {/* Text Content */}
    <div className="relative z-20 space-y-3 mt-24 md:mt-0">
      <h3 className="text-white text-xl md:text-[22px] lg:text-[26px] font-medium leading-tight font-figtree group-hover:text-[#59D28F] transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-[#909AAA] text-xs md:text-sm lg:text-[17px] font-normal leading-relaxed font-figtree tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
        {feature.description}
      </p>
    </div>

  </motion.article>
);
