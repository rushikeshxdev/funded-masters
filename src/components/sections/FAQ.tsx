"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Industry Standard: Data-Driven Configuration
const FAQ_CONFIG = {
  colors: {
    headerGreen: "#5ECF90",
    questionGreen: "#5ECF90",
    iconGreen: "#64C08D",
    bgDefault: "#020B06",
    bgActive: "#092616",
    textWhite: "#FFFFFF",
    textMuted: "#D1D1D1",
  },
  typography: {
    headline: "text-3xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-3%]",
    subheadline: "text-xs md:text-sm lg:text-[16px] font-light leading-relaxed opacity-60",
    question: "text-base md:text-lg lg:text-[20px] font-medium leading-tight tracking-tight",
    answer: "text-xs md:text-sm lg:text-[15px] font-normal leading-relaxed opacity-70",
    icon: "text-xl md:text-2xl lg:text-[28px] font-semibold font-manrope",
  }
};

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "What is Empire Trading?",
    answer: "To win the game, you need strong support and diligent preparation. Join For Traders Community."
  },
  {
    id: 2,
    question: "Who can apply?",
    answer: "Anyone with a passion for trading and a commitment to risk management can apply to our funded programs."
  },
  {
    id: 3,
    question: "How does funding work?",
    answer: "Our funding process is straightforward: pass the evaluation phase to prove your skills, and get access to a funded account with profit sharing."
  },
  {
    id: 4,
    question: "Which markets can I trade?",
    answer: "We support a wide range of markets including Forex, Commodities, Indices, and major Cryptocurrencies."
  },
  {
    id: 5,
    question: "How do you help manage risk?",
    answer: "We provide automated risk management tools, daily loss limits, and a professional dashboard to track your performance."
  },
  {
    id: 6,
    question: "Do you offer resources for new traders?",
    answer: "Yes, we offer educational webinars, a comprehensive trading guide, and a dedicated discord community for knowledge sharing."
  },
  {
    id: 7,
    question: "How fast are payouts?",
    answer: "Payouts are processed within 24-48 hours of request, ensuring you get your rewards quickly and efficiently."
  },
  {
    id: 8,
    question: "What trading platforms do you support?",
    answer: "We support MetaTrader 4, MetaTrader 5, and our own proprietary institutional-grade trading interface."
  }
];

export const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <section className="relative w-full py-12 lg:py-20 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Section - Further Scaled Down */}
        <div className="flex flex-col items-center text-center space-y-3 lg:space-y-4 mb-10 lg:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`${FAQ_CONFIG.typography.headline} text-white max-w-[700px]`}
          >
            Frequently Asked <span className="text-[#5ECF90] font-medium">Questions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${FAQ_CONFIG.typography.subheadline} text-white max-w-[800px]`}
          >
            I know... just like you many traders have these questions, <br className="hidden md:block" />
            so here are the answers!
          </motion.p>
        </div>

        {/* FAQ Accordion List - High-Density Frames */}
        <div className="max-w-[900px] mx-auto flex flex-col gap-3">
          {FAQ_DATA.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`w-full relative ${activeId === item.id ? "bg-[#092616]" : "bg-[#020B06]"} rounded-[12px] transition-colors duration-300 cursor-pointer overflow-hidden border border-white/5`}
              onClick={() => setActiveId(activeId === item.id ? null : item.id)}
            >
              <div className="p-5 lg:p-6 flex items-start justify-between gap-4">
                <div className="space-y-2 pr-8">
                  <h3 className={`${FAQ_CONFIG.typography.question} text-[#5ECF90]`}>
                    {item.question}
                  </h3>
                  
                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <p className={`${FAQ_CONFIG.typography.answer} text-white/90 pt-1 max-w-[650px]`}>
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Fixed Icon Position at top-right corner of padding */}
                <motion.div 
                  className={`${FAQ_CONFIG.typography.icon} text-[#64C08D] shrink-0 pt-0.5`}
                  animate={{ rotate: activeId === item.id ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  +
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
