"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export const HowItWorks = () => {
  const { tagline, headline, description, cta, steps } = siteConfig.howItWorks;

  return (
    <section id="how-it-works" className="w-full py-16 lg:py-24 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Frame Container */}
        <div className="w-full bg-[#01110B]/80 border border-white/5 rounded-[30px] p-6 lg:p-12 relative overflow-hidden">
          
          {/* Content Layout: Top Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12 lg:mb-16">
            
            <div className="max-w-[850px] space-y-4">
              <span className="font-figtree font-medium text-sm lg:text-base text-brand tracking-widest uppercase">
                {tagline}
              </span>
              <h2 className="font-figtree text-[32px] md:text-[45px] lg:text-[65px] leading-[1.1] text-white tracking-tight">
                {headline.split("&")[0]} & <br className="hidden lg:block" /> 
                <span className="font-semibold text-brand">{headline.split("&")[1]}</span>
              </h2>
              <p className="font-figtree font-light text-lg lg:text-[24px] text-[#D1D1D1] max-w-[450px] opacity-70">
                {description}
              </p>
              
              <Link href="/auth/register">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-[52px] lg:h-[58px] px-8 lg:px-10 bg-brand rounded-full font-figtree font-semibold text-base lg:text-[20px] text-[#001B0C] transition-shadow hover:shadow-[0_0_30px_rgba(89,210,143,0.3)] mt-2"
                >
                  {cta}
                </motion.button>
              </Link>
            </div>

            {/* 3D Glass Icon (The Plus/Cross) */}
            <div className="hidden lg:block absolute -top-[120px] -right-[180px] w-[600px] xl:w-[850px] h-[450px] xl:h-[600px] pointer-events-none">
              <Image 
                src="/images/icons/3dicon.png" 
                alt="Decorative 3D Icon" 
                fill 
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-brand/10 blur-[100px] rounded-full -z-10" />
            </div>
          </div>

          {/* Cards Grid: Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const StepCard = ({ title, description, icon, index }: { title: string; description: string; icon: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative p-[1px] rounded-[30px] overflow-hidden group"
      style={{
        background: `radial-gradient(44.12% 54.98% at 50% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)`,
      }}
    >
      <div className="bg-[#00150D] h-full rounded-[30px] p-6 lg:p-10 space-y-6 relative overflow-hidden transition-colors group-hover:bg-[#001B11]">

        {/* Icon Circle Section */}
        <div className="relative">
          <div className="relative w-[80px] h-[80px] rounded-full flex items-center justify-center z-10 bg-[#000704] border border-white/5">
            <div className={`relative ${index === 0 ? "w-[44px] h-[44px]" : "w-[56px] h-[56px]"}`}>
              <Image
                src={icon}
                alt={title}
                fill
                className="object-contain transition-transform group-hover:scale-110"
              />
            </div>
          </div>
          <div className="absolute top-[65px] left-[15px] w-[50px] h-[25px] bg-[#00FF8B] blur-[20px] opacity-40 rounded-full" />
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="font-figtree font-semibold text-lg lg:text-[24px] xl:text-[28px] text-white leading-tight">
            {title}
          </h3>
          <p className="font-figtree font-light text-sm lg:text-base xl:text-[18px] text-[#D1D1D1] leading-tight tracking-[-1%] opacity-80">
            {description}
          </p>
        </div>

      </div>
    </motion.div>
  );
};
