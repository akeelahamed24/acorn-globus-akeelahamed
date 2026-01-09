import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { PLATFORMS } from './constants';

interface PlatformFiltersProps {
  onPlatformClick?: (platform: string) => void;
}

const PlatformFilters: React.FC<PlatformFiltersProps> = ({ onPlatformClick }) => {
  return (
    <div className="xl:col-span-3">
      <div className="bg-white border border-zinc-100 rounded-[28px] shadow-sm h-[520px] w-full overflow-hidden">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6 shrink-0">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-zinc-50 rounded-xl">
                <Filter size={18} className="text-zinc-400" />
              </div>
              <span className="text-sm font-bold text-zinc-700">Filters</span>
            </div>
            <button className="flex items-center gap-1 text-zinc-400 text-xs font-semibold hover:text-zinc-600">
              More <ChevronDown size={12} />
            </button>
          </div>
          
          {/* Platforms list with exact height to match PerformanceTable */}
          <div className="flex-1 min-h-0 flex flex-col justify-center">
            <div className="space-y-4">
              {PLATFORMS.map((platform, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-3 rounded-2xl hover:bg-zinc-50 transition-colors cursor-pointer group"
                  onClick={() => onPlatformClick?.(platform.name)}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm shrink-0" 
                       style={{ backgroundColor: platform.color + '15', color: platform.color }}>
                    {platform.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-zinc-700 truncate">{platform.name}</p>
                    <p className="text-xs font-medium text-zinc-400">{platform.percentage}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-zinc-900">{platform.value}</p>
                    <div className="w-16 h-1.5 bg-zinc-100 rounded-full overflow-hidden mt-1">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: platform.percentage.replace('%', '') + '%',
                          backgroundColor: platform.color 
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Matching footer */}
          <div className="pt-4 border-t border-zinc-100 mt-4 shrink-0">
            <p className="text-sm font-bold text-zinc-700">Platform performance</p>
            <button className="flex items-center gap-1 text-zinc-400 text-xs font-semibold hover:text-zinc-600">
              by engagement <ChevronDown size={10} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformFilters;