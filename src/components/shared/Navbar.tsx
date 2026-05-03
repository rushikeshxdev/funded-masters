"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[64px] lg:h-[80px] flex items-center ${
      scrolled ? "bg-[#060907]/90 backdrop-blur-md shadow-lg" : "bg-[#060907]"
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 group shrink-0">
          <div className="relative w-7 h-7 lg:w-[38px] lg:h-[40px]">
            <Image 
              src="/images/logos/Navbar-logo.png" 
              alt="Funded Master Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="font-adamina text-white text-base lg:text-[22px] xl:text-[26px] leading-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation & Action Group (Pushed to Right) */}
        <div className="ml-auto flex items-center gap-4 lg:gap-14">
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {siteConfig.mainNav.map((link) => (
              <Link 
                key={link.title} 
                href={link.href}
                className="relative group py-2"
              >
                <span className="font-dmsans text-[15px] xl:text-[18px] text-[#ADADAD] transition-colors group-hover:text-brand whitespace-nowrap">
                  {link.title}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Button */}
          {user ? (
            <Link href="/dashboard">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center justify-center gap-2 px-6 lg:w-[130px] xl:w-[150px] h-[40px] lg:h-[48px] bg-brand/10 border border-brand/20 rounded-[12px] text-brand shrink-0 group"
              >
                <span className="font-dmsans font-medium text-sm lg:text-base xl:text-[18px] whitespace-nowrap">
                  Dashboard
                </span>
              </motion.button>
            </Link>
          ) : (
            <Link href="/auth/login">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center justify-center gap-2 px-6 lg:w-[130px] xl:w-[150px] h-[40px] lg:h-[48px] bg-gradient-login rounded-[12px] text-white shrink-0 group"
              >
                <span className="font-dmsans font-medium text-sm lg:text-base xl:text-[18px] whitespace-nowrap">
                  Log in
                </span>
                <div className="relative w-4 h-4">
                  <Image src="/images/icons/person.png" alt="Login" fill className="object-contain" />
                </div>
              </motion.button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-brand transition-colors shrink-0"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[64px] w-full bg-[#060907] z-40 p-6 flex flex-col gap-6 lg:hidden overflow-y-auto"
          >
            {siteConfig.mainNav.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-dmsans text-[#ADADAD] hover:text-brand"
              >
                {link.title}
              </Link>
            ))}
            {user ? (
              <Link href="/dashboard" onClick={() => setIsOpen(false)} className="w-full">
                <button className="w-full h-12 bg-brand/10 border border-brand/20 text-brand rounded-xl font-bold text-lg flex items-center justify-center gap-3 mb-10">
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link href="/auth/login" onClick={() => setIsOpen(false)} className="w-full">
                <button className="w-full h-12 bg-gradient-login text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 mb-10">
                  Log in
                  <Image src="/images/icons/person.png" alt="Login" width={20} height={20} />
                </button>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
