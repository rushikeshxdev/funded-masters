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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[60px] lg:h-[90px] flex items-center ${
      scrolled ? "bg-[#060907]/90 backdrop-blur-md shadow-lg" : "bg-[#060907]"
    }`}>
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[80px] xl:px-[135px] w-full flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 lg:gap-4 group shrink-0">
          <div className="relative w-8 h-8 lg:w-[46px] lg:h-[49px]">
            <Image 
              src="/images/logos/Navbar-logo.png" 
              alt="Funded Master Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="font-adamina text-white text-lg lg:text-[28px] xl:text-[32px] leading-tight tracking-normal">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-[30px] xl:gap-[60px]">
          {siteConfig.mainNav.map((link) => (
            <Link 
              key={link.title} 
              href={link.href}
              className="relative group py-2"
            >
              <span className="font-dmsans text-lg xl:text-[20px] leading-none tracking-[-2%] text-[#ADADAD] transition-colors duration-300 group-hover:text-brand">
                {link.title}
              </span>
              
              {/* Animated Underline - Only appears on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4 lg:gap-6">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:flex relative items-center justify-center gap-2 lg:gap-3 px-6 lg:w-[150px] xl:w-[176px] h-[44px] lg:h-[54px] bg-gradient-login rounded-[15px] lg:rounded-[20.19px] text-white overflow-hidden group"
          >
            <div className="flex items-center gap-2 relative z-10">
              <span className="font-dmsans font-medium text-base lg:text-xl xl:text-[22px] leading-none tracking-tight">
                Log in
              </span>
              <div className="relative w-4 h-4 lg:w-[20px] lg:h-[20px]">
                <Image 
                  src="/images/icons/person.png" 
                  alt="Login" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white hover:text-brand transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[60px] w-full bg-[#060907] z-40 p-6 flex flex-col gap-6 lg:hidden"
          >
            {siteConfig.mainNav.map((link) => (
              <Link 
                key={link.title} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-dmsans text-[#ADADAD] transition-colors hover:text-white"
              >
                {link.title}
              </Link>
            ))}
            <button className="w-full h-12 bg-gradient-login text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 mt-2">
              Log in
              <Image src="/images/icons/person.png" alt="Login" width={20} height={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
