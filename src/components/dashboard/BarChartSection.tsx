import React from "react";

const CHART_HEIGHT = 300;

interface BarChartSectionProps {
  onFilterChange?: (filter: any) => void;
}

type BarVariant = "solid" | "half-dashed" | "full-dashed";

const BarChartSection: React.FC<BarChartSectionProps> = ({ onFilterChange }) => {
  const bars: {
    label: string;
    height: number;
    icon: string;
    variant: BarVariant;
  }[] = [
    { label: "Behance", height: 55, icon: "/behance.png", variant: "half-dashed" },
    { label: "Dribbble", height: 90, icon: "/dribbble.png", variant: "solid" },
    { label: "Google", height: 65, icon: "/google.png", variant: "solid" },
    { label: "Instagram", height: 40, icon: "/instagram.png", variant: "solid" },
    { label: "Social", height: 75, icon: "/shopping.png", variant: "full-dashed" },
  ];

  return (
    <div className="xl:col-span-3">
      <div className="bg-zinc-100 border border-zinc-200 rounded-[28px] h-[520px] shadow-sm">
        <div className="p-6 h-full flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center gap-1 text-zinc-600">
              <svg width="20" height="20" fill="none">
                <path d="M3 5h4M3 10h4M3 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M11 5h6M11 10h6M11 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg width="12" height="12" fill="none">
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-zinc-200 text-sm font-medium text-zinc-700"
              onClick={() => onFilterChange?.("filters")}
            >
              Filters
              <svg width="16" height="16" fill="none">
                <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Chart */}
          <div className="relative flex-1">
            <div
              className="flex items-end gap-4 pt-20"
              style={{ height: CHART_HEIGHT }}
            >
              {bars.map((bar, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center justify-end"
                >
                  {/* Bar */}
                  <div
                    className="w-full border border-zinc-200 rounded-t-2xl relative overflow-hidden shadow-sm bg-white"
                    style={{ height: `${(bar.height / 100) * CHART_HEIGHT}px` }}
                  >
                    {/* FULL DASHED */}
                    {bar.variant === "full-dashed" && (
                      <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(-45deg,#000 0,#000 2px,transparent 2px,transparent 8px)",
                        }}
                      />
                    )}

                    {/* HALF DASHED */}
                    {bar.variant === "half-dashed" && (
                      <>
                        <div className="absolute top-0 w-full h-1/2 opacity-[0.08]"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(-45deg,#000 0,#000 2px,transparent 2px,transparent 8px)",
                          }}
                        />
                        <div className="absolute bottom-0 w-full h-1/2 bg-white" />
                      </>
                    )}

                    {/* Icon */}
                    <div className="absolute top-3 inset-x-0 flex justify-center z-10">
                      <img
                        src={bar.icon}
                        alt={bar.label}
                        className="w-7 h-7"
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <span className="text-xs text-zinc-400 font-medium mt-3">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-zinc-200 mt-4">
            <p className="text-sm font-bold text-zinc-700">Deals amount</p>
            <button className="flex items-center gap-1 text-xs font-semibold text-zinc-400">
              by referrer category
              <svg width="12" height="12" fill="none">
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BarChartSection;
