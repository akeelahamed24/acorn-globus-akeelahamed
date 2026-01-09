import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  onTimeframeChange?: (timeframe: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onTimeframeChange }) => {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <h1 className="text-4xl font-semibold text-zinc-900">New report</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-zinc-100 p-1 rounded-full">
           <div className="w-10 h-5 bg-zinc-900 rounded-full relative cursor-pointer">
             <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
           </div>
           <span className="text-sm font-medium text-zinc-500">Timeframe</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium shadow-sm hover:border-zinc-300 transition-all">
          Sep 1 – Nov 30, 2023
          <ChevronDown size={16} />
        </button>
      </div>
    </section>
  );
};

export default DashboardHeader;