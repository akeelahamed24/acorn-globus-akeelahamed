import React from "react";
import { ChevronDown } from "lucide-react";

interface DashboardHeaderProps {
  onTimeframeChange?: (timeframe: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      {/* Title */}
      <h1 className="text-4xl font-medium text-zinc-800">
        New report
      </h1>

      <div className="flex items-center gap-4">
        {/* Timeframe Toggle */}
        <div className="flex items-center gap-2 bg-zinc-100 px-3 py-1.5 rounded-full">
          <div className="w-9 h-5 bg-zinc-800 rounded-full relative cursor-pointer">
            <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
          </div>
          <span className="text-sm font-medium text-zinc-500">
            Timeframe
          </span>
        </div>

        {/* Date Selector */}
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:border-zinc-300 transition">
          Sep 1 – Nov 30, 2023
          <ChevronDown size={16} className="text-zinc-500" />
        </button>
      </div>
    </section>
  );
};

export default DashboardHeader;
