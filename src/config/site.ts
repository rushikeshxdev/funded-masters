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
};

export type SiteConfig = typeof siteConfig;
