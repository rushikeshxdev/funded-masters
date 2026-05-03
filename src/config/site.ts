export const siteConfig = {
  name: "Funded Master",
  description: "Join Funded Masters, the top-rated prop firm. Get funded, trade our capital, and keep up to 90% of your profits. Professional trading platform with state-of-the-art infrastructure.",
  url: "https://fundedmaster.com",
  ogImage: "/images/og.jpg",
  mainNav: [
    { title: "Programs", href: "/programs" },
    { title: "Pricing", href: "/pricing" },
    { title: "Trading Rules", href: "/rules", isSpecial: true },
    { title: "FAQ", href: "/faq" },
    { title: "Affiliates", href: "/affiliates" },
  ],
  links: {
    twitter: "https://twitter.com/fundedmaster",
    discord: "https://discord.gg/fundedmaster",
  },
};

export type SiteConfig = typeof siteConfig;
