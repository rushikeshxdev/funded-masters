"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[calc(100vh-80px)] min-h-[450px] md:min-h-[600px] bg-black overflow-hidden mt-[64px] lg:mt-[80px]">
      
      {/* Hero Image - Subject-Focused Responsiveness */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/backgrounds/BackgroundImage.png"
          alt="Hero Background Warrior"
          fill
          className="object-cover object-[80%_center] md:object-[75%_center] lg:object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={95}
          priority
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>

    </section>
  );
};
