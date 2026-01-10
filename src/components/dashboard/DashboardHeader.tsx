import React from "react";
import { ChevronDown } from "lucide-react";

interface DashboardHeaderProps {
  onTimeframeChange?: (timeframe: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-zinc-800">
        New report
      </h1>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        {/* Timeframe Toggle */}
        <div className="flex items-center gap-2 bg-zinc-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
          <div className="w-8 sm:w-9 h-4 sm:h-5 bg-zinc-800 rounded-full relative cursor-pointer">
            <div className="absolute right-0.5 top-0.5 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-zinc-500">
            Timeframe
          </span>
        </div>

        {/* Date Selector */}
        <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-white border border-zinc-200 rounded-lg text-xs sm:text-sm font-medium text-zinc-700 hover:border-zinc-300 transition">
          <span className="hidden sm:inline">Sep 1 – Nov 30, 2023</span>
          <span className="sm:hidden">Sep 1 – Nov 30</span>
          <ChevronDown size={14} className="text-zinc-500 sm:w-4 sm:h-4" />
        </button>
      </div>
    </section>
  );
};

export default DashboardHeader;
