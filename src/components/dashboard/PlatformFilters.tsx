import React from "react";
import { PLATFORMS } from "./constants";

interface PlatformFiltersProps {
  onPlatformClick?: (platform: string) => void;
}

const PlatformFilters: React.FC<PlatformFiltersProps> = ({ onPlatformClick }) => {
  return (
    <div className="xl:col-span-3">
      <div className="bg-zinc-100 border border-zinc-200 rounded-[20px] sm:rounded-[28px] shadow-sm h-[420px] sm:h-[520px] w-full overflow-hidden">
        
        {/* Inner layout MUST stay the same */}
        <div className="p-6 h-full flex flex-col">
          
          {/* Header (fixed height) */}
          <div className="flex items-center justify-between mb-6 shrink-0">
            <button className="flex items-center gap-1 text-zinc-600 hover:text-zinc-900">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg">
              Filters
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* List area (flex-1 like old component) */}
          <div className="flex-1 min-h-0 flex flex-col justify-center">
            <div className="space-y-4">
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.name}
                  onClick={() => onPlatformClick?.(platform.name)}
                  className="flex items-center justify-between px-5 py-4 bg-white rounded-2xl hover:bg-zinc-50 cursor-pointer transition shadow-sm border border-zinc-100"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4 min-w-0">
                    {/* BRAND ICONS — BIGGER */}
                    <div className="w-12 h-12 flex items-center justify-center shrink-0">
                      <img
                        src={platform.icon}
                        alt={platform.name}
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="text-base font-medium text-zinc-700 truncate">
                      {platform.name}
                    </span>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-base font-bold text-zinc-900">
                      {platform.value}
                    </span>
                    <span className="text-sm font-semibold text-zinc-500 min-w-[45px] text-right">
                      {platform.percentage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer (fixed like old component) */}
          <div className="pt-4 border-t border-zinc-100 mt-4 shrink-0">
            <p className="text-sm font-bold text-zinc-700">
              Platform performance
            </p>
            <p className="text-xs font-semibold text-zinc-400">
              by engagement
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlatformFilters;