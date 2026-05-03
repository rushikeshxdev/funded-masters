import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Sans, Adamina, Figtree } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const adamina = Adamina({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-adamina",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Funded Masters | Premium Proprietary Trading Firm",
  description: "Join Funded Masters, the top-rated prop firm. Get funded, trade our capital, and keep up to 90% of your profits. Professional trading platform with state-of-the-art infrastructure.",
  keywords: ["prop firm", "funded accounts", "trading", "forex", "crypto trading", "funded masters"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${adamina.variable} ${figtree.variable} font-sans antialiased bg-dark text-text-primary`}>
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Global Background Glows */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-glow-top" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-glow-bottom" />
          </div>
          
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
