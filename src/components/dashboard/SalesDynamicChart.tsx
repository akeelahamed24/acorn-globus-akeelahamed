import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const SalesDynamicChart = () => {
  // Mock line chart data points
  const linePoints = "M10,60 L30,55 L50,50 L70,45 L90,42 L110,48 L130,40 L150,35 L170,30 L190,38 L210,42 L230,35 L250,30";
  const fillPoints = "M10,60 L30,55 L50,50 L70,45 L90,42 L110,48 L130,40 L150,35 L170,30 L190,38 L210,42 L230,35 L250,30 L250,80 L10,80 Z";

  return (
    <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in" style={{ animationDelay: "0.45s" }}>
      <div className="text-sm font-medium mb-3">Sales dynamic</div>

      {/* X-axis labels */}
      <div className="flex justify-between text-[10px] text-muted-foreground mb-2">
        <span>Y</span>
        <span>M</span>
        <span>W</span>
        <span>D</span>
        <span>5</span>
        <span>15</span>
        <span>19</span>
        <span>Y</span>
        <span>M</span>
      </div>

      {/* Chart Area */}
      <div className="relative h-20 mb-4">
        <svg className="w-full h-full" viewBox="0 0 260 80" preserveAspectRatio="none">
          {/* Gradient fill */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={fillPoints} fill="url(#lineGradient)" />
          <path d={linePoints} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
        </svg>
      </div>

      {/* Bottom stats row */}
      <div className="flex items-center justify-between border-t border-border pt-3">
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-medium">E</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Eren Y.</span>
          <span className="text-xs text-muted-foreground">$117,115</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded">84</span>
          <span>0.9</span>
          <span>32%</span>
          <span className="text-primary">7</span>
          <span className="text-muted-foreground">15</span>
        </div>
      </div>
    </div>
  );
};

export default SalesDynamicChart;
