import { TrendingUp, ChevronDown } from "lucide-react";

const RevenueCard = () => {
  return (
    <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">New report</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-muted transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Timeframe
          </button>
          <span className="text-sm text-muted-foreground">Sep 1 - Nov 30, 2023</span>
        </div>
      </div>

      <div className="mb-6">
        <span className="text-sm text-muted-foreground">Revenue</span>
        <div className="flex items-baseline gap-3 mt-1">
          <span className="text-4xl font-bold">$528,976.82</span>
          <span className="metric-badge metric-badge-success">
            <TrendingUp className="w-3 h-3" />
            7.9%
          </span>
          <span className="metric-badge metric-badge-primary">$27,335.06</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <span>vs prev. $501,641.73</span>
          <span>Jun 1 - Aug 31, 2023</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-8 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sidebar" />
          <span className="text-sm font-medium">$205,633</span>
          <span className="text-sm text-muted-foreground">39.63%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm font-medium">$156,841</span>
          <span className="text-sm text-muted-foreground">28.65%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary/50" />
          <span className="text-sm font-medium">$117,115</span>
          <span className="text-sm text-muted-foreground">22.14%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted" />
          <span className="text-sm font-medium">$45,306</span>
          <span className="text-sm text-muted-foreground">8.58%</span>
        </div>
        <button className="ml-auto px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          Details
        </button>
      </div>
    </div>
  );
};

export default RevenueCard;
