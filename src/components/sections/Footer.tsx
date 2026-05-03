"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Industry Standard: Data-Driven Configuration
const FOOTER_CONFIG = {
  colors: {
    taglineGreen: "#A8FFD6",
    linkMuted: "rgba(255, 255, 255, 0.7)",
    divider: "rgba(255, 255, 255, 0.1)",
    eclipse: "#06955C4A",
  },
  typography: {
    logoName: "font-abhaya text-[22px] font-extrabold leading-tight",
    tagline: "text-sm lg:text-[16px] font-normal leading-relaxed tracking-tight",
    columnHeader: "text-base lg:text-[18px] font-medium leading-tight",
    link: "text-[14px] font-light leading-[24px]",
    bottomText: "text-[14px] font-medium leading-[20px]",
    legal: "text-[12px] lg:text-[13px] font-normal leading-[1.6] opacity-50",
  }
};

import { siteConfig } from "@/config/site";

export const Footer = () => {
  const { tagline, copyright, sections, social, disclaimer, restrictedCountries } = siteConfig.footer;

  return (
    <footer className="relative w-full pt-16 pb-8 bg-black overflow-hidden font-figtree">
      
      {/* Background Decor - Large Eclipse at Left Bottom */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          width: "1200px",
          height: "1200px",
          bottom: "-30%",
          left: "-30%",
          background: FOOTER_CONFIG.colors.eclipse,
          filter: "blur(300px)",
          opacity: 0.25,
          borderRadius: "100%",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: Logo & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 lg:mb-16">
          
          {/* Brand Identity */}
          <div className="space-y-4 lg:space-y-6 max-w-[350px]">
            <div className="flex items-center gap-3">
              <Image src="/images/logos/Navbar-logo.png" alt="Logo" width={32} height={32} />
              <span className={`${FOOTER_CONFIG.typography.logoName} text-white`}>
                {siteConfig.name}
              </span>
            </div>
            <p className={`${FOOTER_CONFIG.typography.tagline} text-brand/80`}>
              {tagline}
            </p>
          </div>

          {/* Dynamic Columns */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-4 lg:space-y-5">
              <h4 className={`${FOOTER_CONFIG.typography.columnHeader} text-white`}>{section.title}</h4>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={`${FOOTER_CONFIG.typography.link} text-white/60 hover:text-brand transition-colors`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect Column */}
          <div className="space-y-4 lg:space-y-5">
            <h4 className={`${FOOTER_CONFIG.typography.columnHeader} text-white`}>Let&apos;s Connect</h4>
            <ul className="space-y-2.5">
              {social.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 relative opacity-60 group-hover:opacity-100 transition-opacity">
                      <Image src={item.icon} alt={item.name} fill className="object-contain" />
                    </div>
                    <span className={`${FOOTER_CONFIG.typography.link} text-white/60 group-hover:text-white transition-colors`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Bottom Bar: Copyright & Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <p className={`${FOOTER_CONFIG.typography.bottomText} text-white/60`}>
            {copyright}
          </p>
          <div className="flex items-center gap-6 lg:gap-10">
            <Link href="#" className={`${FOOTER_CONFIG.typography.bottomText} text-white underline underline-offset-4 hover:text-brand transition-colors`}>
              Terms & Conditions
            </Link>
            <Link href="#" className={`${FOOTER_CONFIG.typography.bottomText} text-white underline underline-offset-4 hover:text-brand transition-colors`}>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Extensive Legal Disclosure */}
        <div className="space-y-6 max-w-[1650px] border-t border-white/5 pt-8">
          {disclaimer.map((text, idx) => (
            <p key={idx} className={FOOTER_CONFIG.typography.legal}>
              {text}
            </p>
          ))}
          
          <p className={FOOTER_CONFIG.typography.legal}>
            <span className="text-white opacity-80 font-semibold">Restricted countries:</span> {restrictedCountries}
          </p>
        </div>
      </div>
    </footer>
  );
};
