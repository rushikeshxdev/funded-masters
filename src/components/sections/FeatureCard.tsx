// src/components/sections/FeatureCard.tsx
"use client";

import Image from "next/image";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => (
  <article
    className="relative group bg-[#030C07] w-full max-w-[340px] aspect-[4/3] rounded-[26.77px] overflow-hidden transition-all hover:bg-[#041209] border border-white/5"
    style={{
      borderWidth: "0.89px",
      borderImageSource:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), radial-gradient(44.12% 54.98% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
    }}
  >
    {/* Topmost Eclipse */}
    <div className="absolute -top-[174px] -left-[113px] w-[378px] h-[264px] bg-[#00FF90] filter blur-[287.24px] opacity-100 pointer-events-none z-10" />

    {/* Vector.svg Watermark */}
    <div className="absolute -top-[18px] right-0 w-[248px] h-[266px] opacity-100 pointer-events-none z-0">
      <div className="relative w-full h-full">
        <Image src="/images/icons/check.svg" alt="watermark" fill className="object-contain" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,29,17,0)-18.75%,#052718_100%)] mix-blend-screen" />
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
  </article>
);
