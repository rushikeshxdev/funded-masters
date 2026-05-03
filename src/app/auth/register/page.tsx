"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Lock, User, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { signup } from "./actions";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await signup(formData);

    setIsLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/auth/login?message=Account created! Please log in.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#030704] flex items-center justify-center p-6 relative overflow-hidden font-figtree">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[540px] z-10"
      >
        {/* Logo & Header */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-110 duration-500">
              <Image 
                src="/images/logos/Navbar-logo.png" 
                alt="Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-adamina text-white text-2xl lg:text-[28px]">
              {siteConfig.name}
            </span>
          </Link>
          <h1 className="text-white text-3xl lg:text-4xl font-semibold mb-3 tracking-tight text-center">{siteConfig.auth.register.headline}</h1>
          <p className="text-white/60 text-base lg:text-lg text-center max-w-[360px]">
            {siteConfig.auth.register.subheadline}
          </p>
        </div>

        {/* Register Form */}
        <div className="bg-[#060D08] rounded-[32px] border border-white/5 p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl text-sm text-center">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium ml-1">Full Name</label>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/input:text-brand transition-colors">
                  <User size={20} />
                </div>
                <input 
                  name="name"
                  type="text" 
                  placeholder="John Doe"
                  required
                  className="w-full h-14 bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-all"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium ml-1">Email Address</label>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/input:text-brand transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  name="email"
                  type="email" 
                  placeholder="name@company.com"
                  required
                  className="w-full h-14 bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium ml-1">Password</label>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/input:text-brand transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  name="password"
                  type="password" 
                  placeholder="••••••••"
                  required
                  className="w-full h-14 bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-all"
                />
              </div>
            </div>

            {/* Terms Check */}
            <div className="flex items-center gap-3 pt-2">
              <input type="checkbox" id="terms" required className="accent-brand w-4 h-4 rounded" />
              <label htmlFor="terms" className="text-white/40 text-sm">
                I agree to the <Link href="#" className="text-brand/80 hover:underline">Terms of Service</Link> and <Link href="#" className="text-brand/80 hover:underline">Privacy Policy</Link>
              </label>
            </div>

            {/* Register Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-brand text-[#001B0C] rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-brand/20 hover:scale-[1.02] active:scale-95 transition-all mt-4"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-[#001B0C]/30 border-t-[#001B0C] rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          {/* Features Checklist */}
          <div className="mt-8 grid grid-cols-2 gap-y-3 relative z-10 border-t border-white/5 pt-6">
            {[
              "Instant Account Setup",
              "90% Profit Share",
              "14-Day Payout Cycle",
              "24/7 Priority Support"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand" />
                <span className="text-white/60 text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-white/40 text-base">
          Already a Master? <Link href="/auth/login" className="text-brand font-medium hover:underline">Log in to Dashboard</Link>
        </p>
      </motion.div>
    </div>
  );
}
