"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Programs", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Trading Rules", href: "#", isSpecial: true },
  { name: "FAQ", href: "#" },
  { name: "Affiliates", href: "#" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-6"
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 lg:w-10 lg:h-10">
            <Image 
              src="/images/Navbar-logo.png" 
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
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-dmsans text-lg lg:text-[20px] transition-all relative group text-[#ADADAD] hover:text-white`}
            >
              <span className="group-hover:text-brand transition-colors">
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex relative items-center justify-center w-[120px] lg:w-[150px] h-10 lg:h-[50px] bg-gradient-to-br from-[#00EDA1] to-[#005238] rounded-[15px] text-white font-semibold group overflow-hidden"
          >
            <span className="relative z-10 font-dmsans text-base lg:text-[18px]">Log in</span>
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
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-dmsans text-white hover:text-brand"
              >
                {link.name}
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
