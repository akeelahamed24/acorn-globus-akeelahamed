import React from 'react';
import { Settings2, ChevronDown } from 'lucide-react';

interface BarChartSectionProps {
  onFilterChange?: (filter: string) => void;
}

const BarChartSection: React.FC<BarChartSectionProps> = ({ onFilterChange }) => {
  const bars = [
    { height: 45, label: 'Bē', color: 'bg-blue-500' },
    { height: 100, label: '', color: 'bg-zinc-900' },
    { height: 60, label: '🔍', color: 'bg-rose-500' },
    { height: 30, label: '📸', color: 'bg-purple-500' }
  ];

  const labels = ['Direct', 'Referral', 'Organic', 'Social'];

  return (
    <div className="xl:col-span-3">
      {/* Fixed size container matching PerformanceTable height */}
      <div className="bg-white border border-zinc-100 rounded-[28px] shadow-sm h-[520px] w-full overflow-hidden">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6 shrink-0">
            <div className="flex items-center gap-2">
              <Settings2 size={18} className="text-zinc-400" />
              <span className="text-sm font-bold text-zinc-700">Filters</span>
            </div>
            <button className="flex items-center gap-1 text-zinc-400 text-xs font-semibold">
              More <ChevronDown size={12} />
            </button>
          </div>
          
          {/* Chart area with exact height to match PerformanceTable */}
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="flex items-end gap-4 h-48 flex-1">
              {bars.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center h-full">
                  <div className="w-full relative flex-1 flex flex-col justify-end overflow-hidden">
                    <div 
                      className={`w-full ${bar.color} rounded-t-xl transition-all duration-500 relative`}
                      style={{ height: `${bar.height}%` }}
                    >
                      {bar.label && (
                        <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                          {bar.label}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </div>
                  <div className="h-8 flex items-center shrink-0">
                    <span className="text-[10px] font-bold text-zinc-400 mt-2">
                      {labels[i]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Matching footer */}
            <div className="pt-4 border-t border-zinc-100 mt-4 shrink-0">
              <p className="text-sm font-bold text-zinc-700">Deals amount</p>
              <button className="flex items-center gap-1 text-zinc-400 text-xs font-semibold hover:text-zinc-600">
                by referrer category <ChevronDown size={10} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChartSection;