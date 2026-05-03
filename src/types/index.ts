export interface NavItem {
  name: string;
  href: string;
  isSpecial?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  icon?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
