"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { siteConfig } from "@/config/site";
import { login } from "./actions";

function LoginContent() {
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

    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      // Success - handled by server action redirect
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full opacity-30" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[480px] relative z-10"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-8">
            <Image 
              src="/images/logos/Navbar-logo.png" 
              alt="Logo" 
              width={180} 
              height={40} 
              className="h-10 w-auto mx-auto"
            />
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Welcome Back</h1>
          <p className="text-white/60 text-lg">Log in to manage your funded accounts and track your progress.</p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-2xl">
          {message && (
            <div className="mb-8 p-4 bg-brand/10 border border-brand/20 rounded-2xl text-brand text-center font-medium">
              {message}
            </div>
          )}
          
          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-14 pr-5 focus:outline-none focus:border-brand/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-medium text-white/60">Password</label>
                <Link href="/auth/forgot-password" title="Forgot password?" className="text-xs text-brand hover:underline">Forgot password?</Link>
              </div>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-14 pr-14 focus:outline-none focus:border-brand/50 focus:bg-white/[0.08] transition-all text-white placeholder:text-white/20"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-14 bg-brand hover:bg-brand-hover text-black font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 mt-8"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
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

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand/30 border-t-brand rounded-full animate-spin" />
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
