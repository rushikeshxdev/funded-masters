"use client";

import { motion } from "framer-motion";
import { FeatureCard, Feature } from "./FeatureCard";

const FEATURES: Feature[] = [
  {
    title: "Lower Spreads",
    description: "Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep interbank liquidity.",
    icon: "/images/icons/why-1.png",
  },
  {
    title: "$0 Minimum Acc Size",
    description: "We don't believe in teasing you with lower costs and then making you pay extra for it. With Global Prime, you can start with as little or as much as you like.",
    icon: "/images/icons/why-2.png",
  },
  {
    title: "Range of Markets",
    description: "Trade our 150+ range of global markets covering FX, Indices, Commodities, Cryptocurrency, and more.",
    icon: "/images/icons/why-3.png",
  },
  {
    title: "No Fees to Deposit",
    description: "We cover all your deposit fees on all 20+ funding methods. Fund with Visa, MasterCard, PayPal, Neteller, Skrill and more.",
    icon: "/images/icons/why-4.png",
  },
  {
    title: "24/7 Support",
    description: "The market never sleeps, so neither does our team. The Empire is here to help you on your trading journey all day, every day.",
    icon: "/images/icons/why-5.png",
  },
  {
    title: "Low Latency",
    description: "X-Connected low latency servers within the NY4 datacentre execute your trades with fast execution speeds from as low as 5ms.",
    icon: "/images/icons/why-6.png",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-6xl lg:text-[85px] font-normal leading-[1.2] lg:leading-[121px] tracking-tight"
          >
            Why We’re <span className="font-semibold text-[#59D28F]">Top Rated PropFirm</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
