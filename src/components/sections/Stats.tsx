import { Globe, Clock, Headphones, ShieldCheck, Trophy } from "lucide-react";

const STATS_DATA = [
  {
    icon: Globe,
    label: "Global Reach",
    value: "150+",
    sublabel: "Countries Supported",
  },
  {
    icon: Clock,
    label: "Payout Time",
    value: "24h",
    sublabel: "Average Processing",
  },
  {
    icon: Headphones,
    label: "Support",
    value: "24/7",
    sublabel: "Live Assistance",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    value: "100%",
    sublabel: "Fund Protection",
  },
  {
    icon: Trophy,
    label: "Success Rate",
    value: "15%",
    sublabel: "Traders Funded",
  },
];

export const Stats = () => {
  return (
    <section className="py-12 bg-surface-card border-y border-surface-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STATS_DATA.map((stat, index) => (
            <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold font-heading mb-1">{stat.value}</p>
                <p className="text-xs text-text-muted font-bold uppercase tracking-widest">{stat.label}</p>
                <p className="text-[10px] text-text-muted mt-1">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
