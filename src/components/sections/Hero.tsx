"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
      
      {/* 2px gap placeholder (matches the navbar fixed positioning) */}
      <div className="h-[62px] lg:h-[92px] w-full shrink-0 bg-black" />

      {/* Hero Image - Starts exactly 2px below the Navbar */}
      <div className="relative flex-grow w-full overflow-hidden">
        <Image 
          src="/images/backgrounds/BackgroundImage.png" 
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

    </section>
  );
};
