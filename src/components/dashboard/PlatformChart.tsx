import { ChevronDown } from "lucide-react";

const PlatformChart = () => {
  const data = [
    { month: "Revenue", value: 11035, height: 90 },
    { month: "$9,901", value: 9901, height: 75 },
    { month: "$9,288", value: 9288, height: 72 },
    { month: "", value: 6200, height: 50 },
    { month: "", value: 4500, height: 35 },
    { month: "", value: 3000, height: 24 },
    { month: "", value: 4800, height: 38 },
  ];

  return (
    <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in" style={{ animationDelay: "0.35s" }}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-muted-foreground">Platform value</span>
        <span className="font-medium">Dribbble</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-4">
        <button className="px-3 py-1.5 bg-foreground text-background rounded-lg text-xs font-medium">
          Revenue
        </button>
        <button className="px-3 py-1.5 text-muted-foreground text-xs">Leads</button>
        <button className="px-3 py-1.5 text-muted-foreground text-xs">W/L</button>
      </div>

      {/* Chart Legend */}
      <div className="flex flex-col gap-1 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-primary" />
          <span className="text-sm font-semibold">$18,562</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Average</span>
          <span className="font-medium text-emerald-500">373</span>
          <span>97/276</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Win/loss</span>
          <span className="font-medium text-emerald-500">16%</span>
          <span>51/318</span>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-2 h-28">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-1">
            {index === 0 && (
              <span className="text-[10px] text-muted-foreground mb-1">${(item.value / 1000).toFixed(0)}k</span>
            )}
            <div
              className={`w-full rounded-t ${index === 0 ? "bg-primary" : index < 3 ? "bg-primary/70" : "bg-primary/40"}`}
              style={{ height: `${item.height}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformChart;
