import { Filter, MoreHorizontal } from "lucide-react";

const ReferrerChart = () => {
  const referrers = [
    { name: "Dribbble", icon: "🏀", value: "$227,459", percentage: 43, color: "bg-primary" },
    { name: "Instagram", icon: "📷", value: "$142,823", percentage: 27, color: "bg-pink-400" },
    { name: "Behance", icon: "Bē", value: "$89,935", percentage: 11, color: "bg-blue-500" },
    { name: "Google", icon: "G", value: "$37,028", percentage: 9, color: "bg-amber-400" },
  ];

  return (
    <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in" style={{ animationDelay: "0.25s" }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-muted transition-colors">
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      <div className="flex gap-6">
        {/* Referrer List */}
        <div className="flex-1 space-y-3">
          {referrers.map((referrer, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm">
                {referrer.icon}
              </div>
              <span className="text-sm font-medium">{referrer.name}</span>
              <span className="text-sm text-muted-foreground ml-auto">{referrer.value}</span>
              <span className="text-xs text-muted-foreground w-8">{referrer.percentage}%</span>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="16"
              strokeDasharray="108 252"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ec4899"
              strokeWidth="16"
              strokeDasharray="68 252"
              strokeDashoffset="-108"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="16"
              strokeDasharray="28 252"
              strokeDashoffset="-176"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="16"
              strokeDasharray="23 252"
              strokeDashoffset="-204"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
              Bē
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 text-xs text-muted-foreground">
        Deals amount<br />
        by referrer category ▾
      </div>
    </div>
  );
};

export default ReferrerChart;
