export const siteConfig = {
  name: "Funded Master",
  description: "Join Funded Masters, the top-rated prop firm. Get funded, trade our capital, and keep up to 90% of your profits.",
  url: "https://fundedmasters.com",
  ogImage: "https://fundedmasters.com/og.jpg",
  links: {
    twitter: "https://twitter.com/fundedmaster",
    github: "https://github.com/rushikeshxdev/funded-masters",
  },
  mainNav: [
    { title: "Programs", href: "#programs" },
    { title: "Pricing", href: "#pricing" },
    { title: "Trading Rules", href: "#rules", isSpecial: true },
    { title: "FAQ", href: "#faq" },
    { title: "Affiliates", href: "#affiliates" },
  ],
  tickerData: [
    { type: "image", src: "/images/backgrounds/image-animation.png" },
    { type: "payout", amount: "$4,659.58", location: "Toronto, Canada" },
    { type: "divider" },
    { type: "stat", value: "5,863", label: "Traders" },
    { type: "divider" },
    { type: "image", src: "/images/backgrounds/image-animation.png" },
    { type: "payout", amount: "$2,119.48", location: "Sydney, Australia" },
    { type: "divider" },
    { type: "stat", value: "180+", label: "Countries" },
    { type: "divider" },
    { type: "image", src: "/images/backgrounds/image-animation.png" },
    { type: "payout", amount: "$8,273.75", location: "Chennai, India" },
    { type: "divider" },
    { type: "stat", value: "$2.7M", label: "Payouts" },
    { type: "divider" },
  ],
  features: {
    headline: "Multiple Trading Assets",
    subheadline: "Trade in the following markets:",
    items: [
      {
        title: "Up to 100% Profit Splits",
        description: "Keep every dollar you earn—Our funding model lets you keep up to 100% of your profits.",
        icon: "/images/icons/dollar.png",
        rotate: 0,
      },
      {
        title: "1-Step Challenge",
        description: "One clear target, one easy step—prove your skills and unlock funding with no extra steps.",
        icon: "/images/icons/feat-2.png",
        rotate: 0,
      },
      {
        title: "Lightning Fast Payouts",
        description: "Trade hard today, spend tomorrow—experience truly lightning fast payouts.",
        icon: "/images/icons/feat-3.png",
        rotate: -13.44,
      },
      {
        title: "Trade News Freely",
        description: "Earn your share of the profits and receive your payout within 24 hrs.",
        icon: "/images/icons/feat-4.png",
        rotate: 0,
      },
      {
        title: "6% Profit Target",
        description: "Hit your mark effortlessly with our Ultra-low 6% profit target. Less stress, more trading.",
        icon: "/images/icons/feat-5.png",
        rotate: 0,
      },
    ]
  },
  howItWorks: {
    tagline: "HOW IT WORKS",
    headline: "Maximum Profit & Secure Trading Platform",
    description: "Choose the evaluation based on your preference to become an Empire Trader.",
    cta: "Get Funded",
    steps: [
      {
        title: "Challenge Phase",
        description: "Choose a Challenge account and showcase your skills.",
        icon: "/images/icons/trophy.png",
      },
      {
        title: "Get Funded Account",
        description: "Pass your challenge and get a simulated funded account.",
        icon: "/images/icons/bank.png",
      },
      {
        title: "Get Rewarded",
        description: "Earn your share of the profits and receive your payout within 24 hrs.",
        icon: "/images/icons/dollar.png",
      },
    ]
  },
  tradingPlans: {
    headline: "Become an Master Trader",
    description: "Choose the evaluation based on your preference to become an Empire Trader.",
    pricing: {
      tagline: "Start now at only",
      amount: "$897",
      cta: "Get Funded"
    },
    paths: ["Instant", "1-Step", "2-Step", "Sparatn"],
    sizes: ["$25K", "$50K", "$100K"],
    evaluation: {
      phase1: {
        title: "1. VERIFICATION",
        description: "Choose a simulated account size and try to reach the minimum simulated gains target. Trade all available instruments. Subject to certain rules and objectives, your trading style is completely up to you!",
        rules: [
          { label: "Max Daily Drawdown", value: "2%", icon: "/images/icons/trending_down.png" },
          { label: "Max Overall Drawdown", value: "10%", icon: "/images/icons/trending_down.png", showWarn: true },
          { label: "Minimum Profitable Days", value: "3 Days", icon: "/images/icons/why-4.png", showWarn: true },
          { label: "Sim Trading Leverage", value: "30:1", icon: "/images/icons/scale.png" },
        ]
      },
      phase2: {
        title: "2. LIVE SIMULATED TRADER",
        description: "You can now start trading on a simulated basis in the EmpireTrading program without simulated gain targets as long as you won’t reach max simulated loss or daily simulated loss limits.",
        rules: [
          { label: "Payout Share", value: "90%", icon: "/images/icons/split.png", showWarn: true },
          { label: "Max Daily Drawdown", value: "4%", icon: "/images/icons/trending_down.png" },
          { label: "Max Overall Drawdown", value: "6%", icon: "/images/icons/trending_down.png", showWarn: true },
          { label: "Payout Frequency", value: "14 days", icon: "/images/icons/why-4.png" },
          { label: "Trading Period", value: "Unlimited", icon: "/images/icons/why-4.png" },
        ]
      }
    }
  },
  whyChooseUs: {
    headline: "Why We’re Top Rated PropFirm",
    items: [
      {
        title: "Lower Spreads",
        description: "Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep interbank liquidity.",
        icon: "/images/icons/why-1.png",
      },
      {
        title: "$0 Minimum Acc Size",
        description: "We don't believe in teasing you with lower costs and then making you pay extra for it. With Global Prime, you can start with as little or as much as you like.",
        icon: "/images/icons/why-2.png",
      },
      {
        title: "Range of Markets",
        description: "Trade our 150+ range of global markets covering FX, Indices, Commodities, Cryptocurrency, and more.",
        icon: "/images/icons/why-3.png",
      },
      {
        title: "No Fees to Deposit",
        description: "We cover all your deposit fees on all 20+ funding methods. Fund with Visa, MasterCard, PayPal, Neteller, Skrill and more.",
        icon: "/images/icons/why-4.png",
      },
      {
        title: "24/7 Support",
        description: "The market never sleeps, so neither does our team. The Empire is here to help you on your trading journey all day, every day.",
        icon: "/images/icons/why-5.png",
      },
      {
        title: "Low Latency",
        description: "X-Connected low latency servers within the NY4 datacentre execute your trades with fast execution speeds from as low as 5ms.",
        icon: "/images/icons/why-6.png",
      },
    ]
  },
  faq: {
    headline: "Frequently Asked Questions",
    subheadline: "I know... just like you many traders have these questions, so here are the answers!",
    items: [
      {
        id: 1,
        question: "What is Empire Trading?",
        answer: "To win the game, you need strong support and diligent preparation. Join For Traders Community."
      },
      {
        id: 2,
        question: "Who can apply?",
        answer: "Anyone with a passion for trading and a commitment to risk management can apply to our funded programs."
      },
      {
        id: 3,
        question: "How does funding work?",
        answer: "Our funding process is straightforward: pass the evaluation phase to prove your skills, and get access to a funded account with profit sharing."
      },
      {
        id: 4,
        question: "Which markets can I trade?",
        answer: "We support a wide range of markets including Forex, Commodities, Indices, and major Cryptocurrencies."
      },
      {
        id: 5,
        question: "How do you help manage risk?",
        answer: "We provide automated risk management tools, daily loss limits, and a professional dashboard to track your performance."
      },
      {
        id: 6,
        question: "Do you offer resources for new traders?",
        answer: "Yes, we offer educational webinars, a comprehensive trading guide, and a dedicated discord community for knowledge sharing."
      },
      {
        id: 7,
        question: "How fast are payouts?",
        answer: "Payouts are processed within 24-48 hours of request, ensuring you get your rewards quickly and efficiently."
      },
      {
        id: 8,
        question: "What trading platforms do you support?",
        answer: "We support MetaTrader 4, MetaTrader 5, and our own proprietary institutional-grade trading interface."
      }
    ]
  },
  footer: {
    tagline: "To win the game, you need strong support and diligent preparation, For Traders.",
    copyright: "© 2026 Funded Master Pvt.Ltd. All rights reserved.",
    sections: [
      {
        title: "Company",
        links: [
          { label: "Programs", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Trading Rules", href: "#" },
          { label: "FAQs", href: "#" },
          { label: "Affiliates", href: "#" },
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms & Conditions", href: "#" },
          { label: "Return & Refund Policy", href: "#" },
          { label: "Shipping Policy", href: "#" },
        ]
      }
    ],
    social: [
      { name: "Discord", icon: "/images/logos/discord.png", href: "#" },
      { name: "X.com", icon: "/images/logos/x.png", href: "#" },
      { name: "Telegram", icon: "/images/logos/telegram.png", href: "#" },
      { name: "Instagram", icon: "/images/logos/insta.png", href: "#" },
      { name: "Youtube", icon: "/images/logos/utube.png", href: "#" },
      { name: "Linkedin", icon: "/images/logos/linkedin.png", href: "#" },
    ],
    disclaimer: [
      "Funded Master is an education and evaluation company that does not collect customer deposits or offer financial services to customers. All accounts provided to customers are in a virtual environment with virtual money.",
      "All information provided on this website is for educational purposes only in the area of financial market trading and does not serve in anyway as specific investment recommendations, trading recommendations, analysis of investment opportunities or similar general recommendations regarding the trading of investment instruments...",
      "The technical solution offered in the form of platforms made available as part of the services offered by the Company (i.e. platforms for fictitious trading on demo accounts) uses third party services...",
    ],
    restrictedCountries: "Pakistan, Iran, Syria, Myanmar, Bangladesh, Vietnam, North Korea, the Russian Federation, the Republic of Belarus, Cuba, Lebanon, Libya, Sudan, Crimea, Donetsk and Luhansk regions of Ukraine, United Arab Emirates."
  },
  successStories: {
    headline: "Traders Success Stories",
    subheadline: "Discover the potential to earn your desired income through trading without risking your own capital:",
    items: [
      { name: "Alex Rivera", amount: "$12,450", date: "April 2024", image: "/images/backgrounds/story1.png" },
      { name: "Samantha Lee", amount: "$28,900", date: "March 2024", image: "/images/backgrounds/story1.png" },
      { name: "Michael Chen", amount: "$45,200", date: "Feb 2024", image: "/images/backgrounds/story1.png" },
      { name: "Elena Petrova", amount: "$18,700", date: "Jan 2024", image: "/images/backgrounds/story1.png" },
      { name: "David Miller", amount: "$35,000", date: "Dec 2023", image: "/images/backgrounds/story1.png" },
    ]
  },
  testimonials: {
    headline: "What Our Traders Say",
    items: [
      {
        name: "James Wilson",
        role: "Professional Trader",
        content: "The evaluation process was fair and transparent. I'm now trading a $100K account and the support has been phenomenal.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "Sarah Jenkins",
        role: "Swing Trader",
        content: "Finally a prop firm that actually cares about trader success. Low spreads and fast execution make all the difference.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "Robert Fox",
        role: "Intraday Trader",
        content: "Top-tier platform with institutional grade liquidity. Highly recommend Funded Masters for serious traders.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "Karan Gupta",
        role: "Scalper",
        content: "The dashboard is so intuitive. Payouts are fast and the community on Discord is very active.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "Elena Fischer",
        role: "Forex Trader",
        content: "Great experience so far. The 1-step challenge is a game changer for traders who know their edge.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "David Park",
        role: "Crypto Trader",
        content: "Funded Master has the best conditions for crypto trading I've found in the prop space.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "Michael Chen",
        role: "Systematic Trader",
        content: "Clear rules and no hidden agendas. It's refreshing to work with a firm that values transparency.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "Alex Rivera",
        role: "Technical Analyst",
        content: "The execution speed is top notch. I've never had issues with slippage even during high volatility.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "Samantha Lee",
        role: "Day Trader",
        content: "Love the payout structure. Getting rewarded every 14 days keeps me motivated and disciplined.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "John Bartlett",
        role: "Portfolio Manager",
        content: "Professional-grade platform. The risk management tools help me stay within my limits effortlessly.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "Thomas Vargas",
        role: "Price Action Trader",
        content: "Highly recommend for anyone serious about professional trading. The support team is always there.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      },
      {
        name: "James Colon",
        role: "Macro Trader",
        content: "Fair targets and generous drawdown limits. One of the best prop firms in the industry today.",
        rating: 5,
        image: "/images/backgrounds/story1.png"
      }
    ]
  },
  bestTraders: {
    headline: "Rewarding Our Best Traders",
    subheadline: "Choose the evaluation based on your preference to become an Master Trader.",
    stats: [
      { label: "Total Payouts", value: "$2.7M+" },
      { label: "Total Traders", value: "$5K+" },
      { label: "Avg.Payout time", value: "5hrs" },
    ],
    items: [
      { name: "John Bartlett", country: "Poland", amount: "$3,423.39", time: "1 Hours", logo: "/images/logos/T-logo.png" },
      { name: "Thomas Vargas", country: "Austria", amount: "$9,423.39", time: "4 Hours", logo: "/images/logos/T-logo.png" },
      { name: "James Colon", country: "Norway", amount: "$14,291.76", time: "8 Hours", logo: "/images/logos/T-logo.png" },
      { name: "Joseph Hurst", country: "Poland", amount: "$1,117.97", time: "6 Hours", logo: "/images/logos/ethereum.png" },
      { name: "Richard Miles", country: "Iraq", amount: "$6,142.12", time: "20 Hours", logo: "/images/logos/T-logo.png" },
    ]
  }
};

export type SiteConfig = typeof siteConfig;
