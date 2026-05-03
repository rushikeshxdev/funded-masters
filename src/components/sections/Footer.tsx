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

const FOOTER_LINKS = {
  company: ["Programs", "Pricing", "Trading Rules", "FAQs", "Affiliates"],
  legal: ["Privacy Policy", "Terms & Conditions", "Return & Refund Policy", "Shipping Policy"],
  social: [
    { name: "Discord", icon: "/images/logos/discord.png" },
    { name: "X.com", icon: "/images/logos/x.png" },
    { name: "Telegram", icon: "/images/logos/telegram.png" },
    { name: "Instagram", icon: "/images/logos/insta.png" },
    { name: "Youtube", icon: "/images/logos/utube.png" },
    { name: "Linkedin", icon: "/images/logos/linkedin.png" },
  ]
};

export const Footer = () => {
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
                Funded Master
              </span>
            </div>
            <p className={`${FOOTER_CONFIG.typography.tagline} text-[#A8FFD6]`}>
              To win the game, you need strong support and diligent preparation, For Traders.
            </p>
          </div>

          {/* Company Column */}
          <div className="space-y-4 lg:space-y-5">
            <h4 className={`${FOOTER_CONFIG.typography.columnHeader} text-white`}>Company</h4>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link}>
                  <Link href="#" className={`${FOOTER_CONFIG.typography.link} text-white/60 hover:text-[#40FF95] transition-colors`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4 lg:space-y-5">
            <h4 className={`${FOOTER_CONFIG.typography.columnHeader} text-white`}>Legal</h4>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link}>
                  <Link href="#" className={`${FOOTER_CONFIG.typography.link} text-white/60 hover:text-[#40FF95] transition-colors`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4 lg:space-y-5">
            <h4 className={`${FOOTER_CONFIG.typography.columnHeader} text-white`}>Let&apos;s Connect</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.social.map((social) => (
                <li key={social.name}>
                  <Link href="#" className="flex items-center gap-3 group">
                    <div className="w-5 h-5 relative opacity-60 group-hover:opacity-100 transition-opacity">
                      <Image src={social.icon} alt={social.name} fill className="object-contain" />
                    </div>
                    <span className={`${FOOTER_CONFIG.typography.link} text-white/60 group-hover:text-white transition-colors`}>
                      {social.name}
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
            © 2025 Funded Master Pvt.Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 lg:gap-10">
            <Link href="#" className={`${FOOTER_CONFIG.typography.bottomText} text-white underline underline-offset-4 hover:text-[#40FF95] transition-colors`}>
              Terms & Conditions
            </Link>
            <Link href="#" className={`${FOOTER_CONFIG.typography.bottomText} text-white underline underline-offset-4 hover:text-[#40FF95] transition-colors`}>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Extensive Legal Disclosure */}
        <div className="space-y-6 max-w-[1650px] border-t border-white/5 pt-8">
          <p className={FOOTER_CONFIG.typography.legal}>
            Funded Master is an education and evaluation company that does not collect customer deposits or offer financial services to customers. All accounts provided to customers are in a virtual environment with virtual money.
          </p>
          
          <p className={FOOTER_CONFIG.typography.legal}>
            All information provided on this website is for educational purposes only in the area of financial market trading and does not serve in anyway as specific investment recommendations, trading recommendations, analysis of investment opportunities or similar general recommendations regarding the trading of investment instruments. The Company does not provide investment services within the meaning of MIFID II. The Company is not a licensed investment services provider (securities broker-dealer) within the meaning of MIFID II. All trading on the platform made available as part of the services provided by the Company, although it may be based on real trading data and simulates real trading, is only notional trading on a demo account. In this sense, i.e. that it is fictitious trading on fictitious accounts, terms such as “trading” or “trader” should also be understood and should not be given the meanings they have in the context of real trading.
          </p>

          <p className={FOOTER_CONFIG.typography.legal}>
            The technical solution offered in the form of platforms made available as part of the services offered by the Company (i.e. platforms for fictitious trading on demo accounts) uses third party services. The website is operated and owned by the Company and all content is copyrighted by the Company.
          </p>

          <p className={FOOTER_CONFIG.typography.legal}>
            <span className="text-white opacity-80 font-semibold">Restricted countries:</span> Pakistan, Iran, Syria, Myanmar, Bangladesh, Vietnam, North Korea, the Russian Federation, the Republic of Belarus, Cuba, Lebanon, Libya, Sudan, Crimea, Donetsk and Luhansk regions of Ukraine, United Arab Emirates.
          </p>
        </div>
      </div>
    </footer>
  );
};
