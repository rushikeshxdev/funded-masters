"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[121px] flex items-center ${
      scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 lg:w-[46px] lg:h-[46px]">
            <Image 
              src="/images/logos/Navbar-logo.png" 
              alt="Logo" 
              fill 
              className="object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <span className="font-adamina text-white text-lg lg:text-[28px] leading-none">
            Funded Master
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {siteConfig.mainNav.map((link) => (
            <Link 
              key={link.title} 
              href={link.href}
              className={`font-dmsans text-lg lg:text-[20px] transition-all relative group ${
                link.isSpecial ? "text-brand" : "text-[#ADADAD] hover:text-white"
              }`}
            >
              <span className="group-hover:text-brand transition-colors">
                {link.title}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full ${
                link.isSpecial ? "w-full" : ""
              }`} />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex relative items-center justify-center w-[120px] lg:w-[190px] h-10 lg:h-[62px] bg-gradient-to-br from-[#00EDA1] to-[#005238] rounded-[15px] text-white font-semibold group overflow-hidden"
          >
            <span className="relative z-10 font-dmsans text-base lg:text-[22px]">Log in</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 lg:hidden"
          >
            {siteConfig.mainNav.map((link) => (
              <Link 
                key={link.title} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-dmsans text-white hover:text-brand"
              >
                {link.title}
              </Link>
            ))}
            <button className="w-full h-12 bg-brand text-black rounded-lg font-bold text-lg mt-2">
              Log in
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
