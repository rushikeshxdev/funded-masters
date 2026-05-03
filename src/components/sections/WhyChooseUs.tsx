"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Lower Spreads",
    description: "Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep interbank liquidity.",
    icon: "/images/5thpage/frame1-icon.png",
  },
  {
    title: "$0 Minimum Acc Size",
    description: "We don't believe in teasing you with lower costs and then making you pay extra for it. With Global Prime, you can start with as little or as much as you like.",
    icon: "/images/5thpage/frame2-icon.png",
  },
  {
    title: "Range of Markets",
    description: "Trade our 150+ range of global markets covering FX, Indices, Commodities, Cryptocurrency, and more.",
    icon: "/images/5thpage/frame3-icon.png",
  },
  {
    title: "No Fees to Deposit",
    description: "We cover all your deposit fees on all 20+ funding methods. Fund with Visa, MasterCard, PayPal, Neteller, Skrill and more.",
    icon: "/images/5thpage/frame4-icon.png",
  },
  {
    title: "24/7 Support",
    description: "The market never sleeps, so neither does our team. The Empire is here to help you on your trading journey all day, every day.",
    icon: "/images/5thpage/frame5-icon.png",
  },
  {
    title: "Low Latency",
    description: "X-Connected low latency servers within the NY4 datacentre execute your trades with fast execution speeds from as low as 5ms.",
    icon: "/images/5thpage/frame6-icon.png",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-16 lg:py-32 bg-black overflow-hidden font-figtree">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-white text-4xl lg:text-[72px] font-normal leading-tight tracking-tight mb-4 lg:mb-6">
            Why We&apos;re <span className="font-semibold text-brand">Top Rated PropFirm</span>
          </h2>
        </div>

        {/* Features Grid - Reverted to 530px cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="relative group bg-[#030C07] w-full max-w-[530.13px] h-[399.79px] rounded-[26.77px] overflow-hidden transition-all hover:bg-[#041209] border border-white/5"
              style={{
                borderWidth: "0.89px",
                borderImageSource: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), radial-gradient(44.12% 54.98% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              {/* Topmost Eclipse */}
              <div 
                className="absolute pointer-events-none z-10"
                style={{
                  width: "378px",
                  height: "264px",
                  top: "-174px",
                  left: "-113px",
                  background: "#00FF90",
                  filter: "blur(287.24px)", 
                  opacity: 1,
                }}
              />

              {/* Vector.svg Watermark */}
              <div 
                className="absolute pointer-events-none z-0"
                style={{
                  width: "248px",
                  height: "266px",
                  top: "-18px",
                  right: "0px", 
                  opacity: 1,
                }}
              >
                <div className="relative w-full h-full">
                  <Image src="/images/5thpage/Vector.svg" alt="watermark" fill className="object-contain" />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, rgba(3, 29, 17, 0) -18.75%, #052718 100%)",
                      mixBlendMode: "screen",
                    }}
                  />
                </div>
              </div>

              {/* Icon Module */}
              <div className="relative z-20 mt-[29px] ml-[39px]">
                <div className="relative w-[118px] h-[118px] bg-[#002512] rounded-full flex items-center justify-center transition-all group-hover:scale-105">
                  <div className="relative w-[56px] h-[56px] mix-blend-screen">
                    <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
                  </div>
                </div>

                <div 
                  className="absolute pointer-events-none"
                  style={{
                    width: "70.47px",
                    height: "29.36px",
                    top: "100.5px",
                    left: "23.35px",
                    background: "#05FF5966",
                    mixBlendMode: "plus-lighter",
                    filter: "blur(29.36px)",
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="relative z-20 px-[49px] pt-[53px]">
                <h3 className="text-white text-[40px] font-medium leading-none mb-4 tracking-tight group-hover:text-brand transition-colors font-figtree">
                  {feature.title}
                </h3>
                <p className="text-[#909AAA] text-[22px] font-normal leading-tight tracking-tight opacity-90 font-figtree">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
