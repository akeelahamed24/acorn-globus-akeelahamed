import { TrendingUp, TrendingDown } from "lucide-react";

const ValueMetricsCard = () => {
  return (
    <div className="bg-card rounded-xl p-4 card-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="grid grid-cols-3 gap-4">
        {/* Deals */}
        <div className="text-center">
          <span className="text-xs text-muted-foreground">Deals</span>
          <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-lg font-semibold">256</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            <span>5</span>
          </div>
        </div>

        {/* Value */}
        <div className="text-center border-x border-border">
          <span className="text-xs text-muted-foreground">Value</span>
          <div className="mt-1">
            <span className="px-2 py-0.5 bg-primary text-primary-foreground rounded text-sm font-semibold">$28K</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs text-emerald-500 mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>7.9%</span>
          </div>
        </div>

        {/* Win rate */}
        <div className="text-center">
          <span className="text-xs text-muted-foreground">Win rate</span>
          <div className="mt-1">
            <div className="flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="65, 100"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            <span>1.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueMetricsCard;
