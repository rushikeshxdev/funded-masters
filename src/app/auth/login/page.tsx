"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { siteConfig } from "@/config/site";
import { login } from "./actions";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check for message in URL (e.g., from registration)
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const msg = searchParams.get("message");
    if (msg) setMessage(msg);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    setIsLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/dashboard");
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
        className="w-full max-w-[500px] z-10"
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
          <h1 className="text-white text-3xl lg:text-4xl font-semibold mb-3 tracking-tight">{siteConfig.auth.login.headline}</h1>
          <p className="text-white/60 text-base lg:text-lg text-center max-w-[320px]">
            {siteConfig.auth.login.subheadline}
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-[#060D08] rounded-[32px] border border-white/5 p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl text-sm text-center">
                {error}
              </div>
            )}
            {message && (
              <div className="bg-brand/10 border border-brand/50 text-brand p-4 rounded-xl text-sm text-center">
                {message}
              </div>
            )}

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
              <div className="flex justify-between items-center ml-1">
                <label className="text-white/80 text-sm font-medium">Password</label>
                <Link href="#" className="text-brand text-xs hover:underline">Forgot password?</Link>
              </div>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/input:text-brand transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  name="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  required
                  className="w-full h-14 bg-black/40 border border-white/10 rounded-2xl pl-12 pr-12 text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-brand text-[#001B0C] rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-brand/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-[#001B0C]/30 border-t-[#001B0C] rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          {/* Social Auth (Optional/Visual) */}
          <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
            <p className="text-white/40 text-center text-xs uppercase tracking-widest mb-6">Or continue with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 h-12 bg-white/5 border border-white/5 rounded-xl text-white/80 hover:bg-white/10 transition-all">
                <Image src="/images/logos/google.png" alt="Google" width={20} height={20} className="opacity-80" />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 h-12 bg-white/5 border border-white/5 rounded-xl text-white/80 hover:bg-white/10 transition-all">
                <Image src="/images/logos/discord.png" alt="Discord" width={20} height={20} className="opacity-80" />
                <span className="text-sm font-medium">Discord</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-white/40 text-base">
          Don&apos;t have an account? <Link href="/auth/register" className="text-brand font-medium hover:underline">Start a Challenge</Link>
        </p>
      </motion.div>
    </div>
  );
}
