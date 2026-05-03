import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00EDA1",
          500: "#00EDA1",
          muted: "#ADADAD",
          dark: "#005238",
        },
        dark: {
          DEFAULT: "#050d05",
          // ... rest remains same
          50: "#0a1a0a",
          100: "#0d1f0d",
          200: "#111f11",
          300: "#142814",
          400: "#1a2e1a",
          500: "#1f3a1f",
          600: "#2a4a2a",
          700: "#3a5a3a",
          800: "#4a6a4a",
          900: "#5a7a5a",
        },
        surface: {
          DEFAULT: "#0a1a0a",
          card: "#0d1a0d",
          elevated: "#111f11",
          border: "#1a2e1a",
          "border-light": "#2a4a2a",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#8a9e8a",
          muted: "#5a7a5a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        dmsans: ["var(--font-dm-sans)", "sans-serif"],
        adamina: ["var(--font-adamina)", "serif"],
        figtree: ["var(--font-figtree)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.3" }],
        "heading": ["1.5rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "login": "20.19px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 136, 0.15)",
        "glow-md": "0 0 40px rgba(0, 255, 136, 0.2)",
        "glow-lg": "0 0 60px rgba(0, 255, 136, 0.25)",
        "glow-xl": "0 0 80px rgba(0, 255, 136, 0.3)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #00EDA1 0%, #005238 100%)",
        "gradient-login": "linear-gradient(119.33deg, #00EDA1 -5.78%, #005238 84.93%)",
        "gradient-dark": "linear-gradient(180deg, #050d05 0%, #0a1a0a 100%)",
        "gradient-card": "linear-gradient(180deg, rgba(10,26,10,0.8) 0%, rgba(5,13,5,0.9) 100%)",
        "glow-top": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,255,136,0.15), transparent)",
        "glow-center": "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,255,136,0.1), transparent)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 136, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 136, 0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      screens: {
        xs: "475px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
