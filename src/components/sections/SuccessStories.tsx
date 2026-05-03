"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STORIES = [
  { name: "Alex Rivera", amount: "$12,450", date: "April 2024", image: "/images/backgrounds/story1.png" },
  { name: "Samantha Lee", amount: "$28,900", date: "March 2024", image: "/images/backgrounds/story1.png" },
  { name: "Michael Chen", amount: "$45,200", date: "Feb 2024", image: "/images/backgrounds/story1.png" },
  { name: "Elena Petrova", amount: "$18,700", date: "Jan 2024", image: "/images/backgrounds/story1.png" },
  { name: "David Miller", amount: "$35,000", date: "Dec 2023", image: "/images/backgrounds/story1.png" },
];

export const SuccessStories = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 mb-20 md:mb-28">
        
        {/* Header Section */}
        <div className="text-center max-w-[1100px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-6xl lg:text-[85px] font-normal leading-[1.2] lg:leading-[121px] tracking-tight mb-6"
          >
            Traders <span className="font-semibold text-[#59D28F]">Success Stories</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#D1D1D1] font-light text-lg md:text-2xl lg:text-[28px] leading-relaxed tracking-tight max-w-[900px] mx-auto opacity-80"
          >
            Discover the potential to earn your desired income through trading without risking your own capital:
          </motion.p>
        </div>
      </div>

      {/* Infinite Horizontal Scroller */}
      <div className="relative w-full overflow-hidden py-10 select-none">
        <motion.div 
          className="flex gap-6 md:gap-8 w-fit px-4"
          animate={{
            x: [0, -1500],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...STORIES, ...STORIES, ...STORIES].map((story, idx) => (
            <SuccessCard key={idx} story={story} />
          ))}
        </motion.div>

        {/* Side Fades */}
        <div className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-[200px] bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

const SuccessCard = ({ story }: { story: typeof STORIES[0] }) => (
  <div className="relative w-[280px] md:w-[340px] aspect-[3/4] bg-[#020B06] rounded-[30px] border border-white/10 overflow-hidden group hover:border-[#59D28F]/40 transition-all duration-700 shadow-2xl flex flex-col">
    
    {/* Image Container - Improved Alignment & Radius */}
    <div className="relative w-full h-[65%] overflow-hidden rounded-t-[30px]">
      <Image 
        src={story.image} 
        alt={story.name} 
        fill 
        className="object-cover object-center transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1 opacity-70 group-hover:opacity-100" 
      />
      
      {/* Premium Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020B06] via-[#020B06]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Payout Verified Tag */}
      <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#001B0C]/80 border border-[#59D28F]/30 backdrop-blur-md shadow-xl group-hover:border-[#59D28F] transition-colors duration-500">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#59D28F] animate-pulse" />
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.15em]">Payout Verified</span>
        </div>
      </div>
    </div>

    {/* Content Area - Premium Spacing */}
    <div className="p-7 md:p-9 flex flex-col justify-end flex-grow relative z-10 bg-gradient-to-b from-[#020B06] to-[#010603]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#59D28F]/20 to-transparent" />
      
      <h4 className="text-[#8F8F8F] text-[11px] font-semibold uppercase tracking-[0.25em] mb-3 opacity-80 group-hover:text-[#59D28F] transition-colors duration-500">
        {story.date}
      </h4>
      
      <div className="space-y-1.5">
        <p className="text-white text-3xl md:text-[40px] font-bold tracking-tighter leading-none mb-1">
          {story.amount}
        </p>
        <p className="text-[#D1D1D1] text-lg font-light tracking-tight opacity-70 group-hover:opacity-100 transition-opacity duration-500">
          {story.name}
        </p>
      </div>

      {/* Interactive Detail */}
      <div className="mt-6 flex items-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[#59D28F] text-[13px] font-bold tracking-wide uppercase">View Case Study</span>
        <div className="w-5 h-5 rounded-full bg-[#59D28F]/10 flex items-center justify-center border border-[#59D28F]/20">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#59D28F]">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>

    {/* Dynamic Background Glow */}
    <div className="absolute -bottom-[60px] -right-[60px] w-[180px] h-[180px] bg-[#59D28F]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none" />
  </div>
);
