import React from "react";
import { ChevronDown } from "lucide-react";

interface DeepDiveAnalyticsProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const DeepDiveAnalytics: React.FC<DeepDiveAnalyticsProps> = ({
  activeTab = "Revenue",
  onTabChange = () => {},
}) => {
  // Stripe pattern for the tallest bar in each group
  const stripePattern = {
    backgroundImage: `repeating-linear-gradient(
      -45deg,
      #E5E7EB,
      #E5E7EB 4px,
      #FFFFFF 4px,
      #FFFFFF 8px
    )`,
  };

  // Brand pink color
  const brandPink = "#D31F5C";

  const chartData = [
    { 
      month: "Sep", 
      value: "$6,901", 
      bars: [48, 32, 18],
      avatars: [33, 12, 59]
    },
    { 
      month: "Oct", 
      value: "$11,035", 
      bars: [95, 65, 38],
      avatars: [68, 8, 11]
    },
    { 
      month: "Nov", 
      value: "$9,288", 
      bars: [72, 45, 55],
      avatars: [53, 4, 3]
    },
  ];

  const yAxisLabels = ["$14,500", "$11,000", "$7,500", "$4,000"];

  return (
    <div className="flex justify-center bg-white py-4 sm:py-6 font-sans">
      {/* Main Card Container */}
      <div className="w-full max-w-[900px] min-w-[600px] bg-[#F4F4F5] rounded-[24px] sm:rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">
        
        <div className="flex h-[320px]">
          
          {/* LEFT PINK PANEL - rounded on right side only */}
          <div 
            className="w-[180px] flex-shrink-0 p-5 flex relative overflow-hidden rounded-r-[24px]"
            style={{ backgroundColor: brandPink }}
          >
            {/* Subtle decorative curves */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            {/* Vertical "Average monthly" text */}
            <div className="h-full flex items-center border-r border-white/20 pr-3 mr-4">
              <span
                className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60 whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Average monthly
              </span>
            </div>

            {/* Metrics */}
            <div className="flex flex-col justify-center gap-5 text-white flex-1">
              <div>
                <p className="text-[11px] font-medium text-white/60 mb-0.5">Revenue</p>
                <p className="text-[26px] font-bold leading-none tracking-tight">$18,552</p>
              </div>

              <div>
                <p className="text-[11px] font-medium text-white/60 mb-0.5">Leads</p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-[22px] font-bold leading-none">373</p>
                  <span className="text-white/40 text-[11px] font-medium">97/276</span>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-medium text-white/60 mb-0.5">Win/lose</p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-[22px] font-bold leading-none">16%</p>
                  <span className="text-white/40 text-[11px] font-medium">51/318</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="flex-1 p-5 pl-6 flex flex-col">
            
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                {/* Dribbble Icon */}
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={brandPink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-5.38c-3.72-1.1-7.2-2.11-10.45-3.03"></path>
                    <path d="M2.54 11.58c3.72 1.1 7.2 2.11 10.45 3.03"></path>
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                    Platform value
                  </p>
                  <button className="flex items-center gap-0.5 text-[15px] font-bold text-gray-900">
                    Dribbble
                    <ChevronDown className="w-4 h-4 text-gray-400 stroke-[2.5px]" />
                  </button>
                </div>
              </div>

              {/* Toggle Pills */}
              <div className="flex items-center gap-0.5 bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
                {["Revenue", "Leads", "W/L"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-4 py-1.5 text-[13px] font-bold rounded-lg transition-all ${
                      activeTab === tab
                        ? "bg-[#1F2937] text-white shadow"
                        : "text-gray-400 hover:text-gray-700 bg-transparent"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* CHART AREA */}
            <div className="flex-1 flex relative">
              
              {/* BARS SECTION */}
              <div className="flex-1 flex items-end justify-around pb-1 pr-12">
                {chartData.map((data, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Value label */}
                    <div 
                      className="px-2.5 py-1 rounded-lg text-white text-[12px] font-bold shadow-md mb-2"
                      style={{ backgroundColor: brandPink }}
                    >
                      {data.value}
                    </div>
                    
                    {/* Bars group */}
                    <div className="flex items-end gap-1 h-[140px]">
                      {data.bars.map((height, barIdx) => (
                        <div
                          key={barIdx}
                          className={`w-7 rounded-t-xl border border-gray-200 ${
                            barIdx === 0 ? '' : 'bg-gray-200/80'
                          }`}
                          style={{
                            height: `${height}%`,
                            ...(barIdx === 0 ? stripePattern : {}),
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Avatars */}
                    <div className="flex -space-x-1.5 mt-2">
                      {data.avatars.map((avatarId, aIdx) => (
                        <img 
                          key={aIdx}
                          src={`https://i.pravatar.cc/100?img=${avatarId}`} 
                          alt="" 
                          className="w-6 h-6 rounded-full border-2 border-[#F4F4F5]" 
                        />
                      ))}
                    </div>
                    
                    {/* Month label */}
                    <span className="text-gray-500 font-semibold text-[13px] mt-1.5">{data.month}</span>
                  </div>
                ))}
              </div>

              {/* Y-AXIS LABELS */}
              <div className="absolute right-0 top-0 bottom-8 flex flex-col justify-between items-end text-[11px] font-semibold text-gray-400 pr-1">
                {yAxisLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>

              {/* Horizontal dashed grid lines */}
              <div className="absolute inset-0 right-12 bottom-8 flex flex-col justify-between pointer-events-none">
                {yAxisLabels.map((_, idx) => (
                  <div key={idx} className="border-t border-dashed border-gray-300/50 w-full" />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepDiveAnalytics;
