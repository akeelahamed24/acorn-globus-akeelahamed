import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Filter, ChevronUp, Flame, Star } from "lucide-react";

const SalesTable = () => {
  const salesData = [
    {
      name: "Armin A.",
      avatar: "AA",
      color: "bg-amber-100 text-amber-700",
      sales: "$209,633",
      salesCount: 41,
      revenue: 118,
      leads: 0.84,
      kpi: "31%",
      wl: "12",
      wlExtra: "29",
    },
    {
      name: "Mikaso A.",
      avatar: "MA",
      color: "bg-rose-100 text-rose-700",
      sales: "$156,841",
      salesCount: 54,
      revenue: 103,
      leads: 0.69,
      kpi: "39%",
      wl: "21",
      wlExtra: "33",
      badges: ["Top sales", "Sales streak 🔥", "Top review ⭐"],
    },
  ];

  return (
    <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-muted-foreground rounded" />
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-muted transition-colors">
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-xs text-muted-foreground">
            <th className="text-left pb-3 font-medium">Sales</th>
            <th className="text-left pb-3 font-medium">Revenue</th>
            <th className="text-left pb-3 font-medium">Leads</th>
            <th className="text-left pb-3 font-medium">KPI</th>
            <th className="text-left pb-3 font-medium">W/L</th>
            <th className="pb-3"></th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {salesData.map((person, index) => (
            <tr key={index} className="border-t border-border">
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className={`text-xs font-medium ${person.color}`}>
                      {person.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{person.name}</span>
                  <span className="text-muted-foreground">{person.sales}</span>
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">
                    {person.salesCount}
                  </span>
                </div>
              </td>
              <td className="py-3">{person.revenue}</td>
              <td className="py-3">{person.leads}</td>
              <td className="py-3">{person.kpi}</td>
              <td className="py-3">
                <span className="text-primary font-medium">{person.wl}</span>
                <span className="text-muted-foreground ml-1">{person.wlExtra}</span>
              </td>
              <td className="py-3">
                <button className="p-1 hover:bg-muted rounded transition-colors">
                  <ChevronUp className="w-4 h-4 text-muted-foreground rotate-90" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full flex items-center gap-1">
          Top sales
        </span>
        <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full flex items-center gap-1">
          Sales streak <Flame className="w-3 h-3" />
        </span>
        <span className="px-2 py-1 bg-violet-50 text-violet-600 text-xs rounded-full flex items-center gap-1">
          Top review <Star className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};

export default SalesTable;
