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
  // Custom stripe pattern for the main bars (Gray/White diagonal)
  const stripePattern = {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      #F3F4F6,
      #F3F4F6 5px,
      #FFFFFF 5px,
      #FFFFFF 10px
    )`,
  };

  // Exact Brand Pink from image
  const brandPink = "#D31F5C";

  return (
    // Outer container: White
    <div className="flex justify-center bg-white py-4 sm:py-8 font-sans">
      
      {/* Main Component Card: Grey #F4F4F5 */}
      <div className="w-full max-w-[900px] min-w-[600px] bg-[#F4F4F5] rounded-[20px] sm:rounded-[32px] border border-gray-200 shadow-sm px-4 sm:px-8 py-4 sm:py-6 relative">
        
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Dribbble Logo Icon - wrapper bg changed to white to pop against grey card */}
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
               <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke={brandPink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-5.38c-3.72-1.1-7.2-2.11-10.45-3.03"></path>
                  <path d="M2.54 11.58c3.72 1.1 7.2 2.11 10.45 3.03"></path>
                  <path d="M12 12a10 10 0 0 0 7.8 4.6"></path>
               </svg>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                Platform value
              </p>
              <button className="flex items-center gap-1 text-[18px] font-bold text-gray-900 mt-0.5">
                Dribbble
                <ChevronDown className="w-5 h-5 text-gray-400 stroke-[3px]" />
              </button>
            </div>
          </div>

          {/* Toggle Pills - bg changed to white for contrast */}
          <div className="flex items-center gap-1 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm">
            {["Revenue", "Leads", "W/L"].map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-5 py-2 text-sm font-bold rounded-[10px] transition-all ${
                  activeTab === tab
                    ? "bg-[#111827] text-white shadow-md"
                    : "text-gray-500 hover:text-gray-900 bg-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-12 gap-8 h-[310px] relative">

          {/* LEFT PANEL (PINK) - Absolute positioned to touch left corner */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-[calc(33.333% - 16px)] rounded-[0_28px_28px_0] p-6 flex overflow-hidden shadow-sm ml-0"
            style={{ backgroundColor: brandPink }}
          >
             {/* Background Curves Decoration (Subtle) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            {/* Vertical Text Label */}
            <div className="h-full flex items-center border-r border-white/20 pr-4 mr-6">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Average monthly
              </span>
            </div>

            {/* Metrics */}
            <div className="flex flex-col justify-center gap-6 text-white flex-1 py-2">
              <div>
                <p className="text-xs font-medium text-white/70 mb-1">Revenue</p>
                <p className="text-[32px] font-bold leading-none tracking-tight">$18,552</p>
              </div>

              <div>
                <p className="text-xs font-medium text-white/70 mb-1">Leads</p>
                <div className="flex items-baseline gap-2">
                    <p className="text-[26px] font-bold leading-none">373</p>
                    <span className="text-white/40 text-sm font-medium">97/276</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-white/70 mb-1">Win/lose</p>
                <div className="flex items-baseline gap-2">
                    <p className="text-[26px] font-bold leading-none">16%</p>
                    <span className="text-white/40 text-sm font-medium">51/318</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CHART AREA - Offset to accommodate pink box */}
          <div className="col-span-8 col-start-5 relative pt-6 pb-2">
            
            {/* Y-AXIS LABELS & GRID LINES */}
            <div className="absolute inset-0 flex flex-col justify-between text-right text-xs font-semibold text-gray-400 pointer-events-none pr-14 pt-10 pb-14">
              {["$14,500", "$11,000", "$7,500", "$4,000"].map((val) => (
                <div key={val} className="relative w-full flex items-center justify-end">
                   {/* Dashed Line - slightly darker gray to see on F4F4F5 */}
                   <div className="absolute left-0 right-[60px] border-t-2 border-dashed border-gray-300/60"></div>
                   {/* Label - bg changed to F4F4F5 to mask the line */}
                   <span className="bg-[#F4F4F5] pl-3 z-10 relative">{val}</span>
                </div>
              ))}
            </div>

            {/* BARS CONTAINER */}
            <div className="relative z-10 h-full flex items-end justify-between px-2 pb-4 mr-14">
                
                {/* SEPTEMBER GROUP */}
                <div className="flex flex-col items-center gap-3 w-1/3">
                    <div 
                        className="px-3 py-1.5 rounded-[10px] text-white text-[13px] font-bold shadow-lg mb-[-10px] z-20"
                        style={{ backgroundColor: brandPink }}
                    >
                        $6,901
                    </div>
                    <div className="flex items-end gap-1.5 h-[170px] w-full justify-center">
                        <div className="w-10 rounded-t-[14px] h-[50%] border border-gray-200" style={stripePattern}></div>
                        {/* Solid bars changed to slightly darker gray for contrast */}
                        <div className="w-10 rounded-t-[14px] h-[35%] bg-gray-300/70"></div>
                        <div className="w-10 rounded-t-[14px] h-[20%] bg-gray-300/70"></div>
                    </div>
                    <div className="flex -space-x-2">
                         <img src="https://i.pravatar.cc/100?img=33" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                         <img src="https://i.pravatar.cc/100?img=12" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                         <img src="https://i.pravatar.cc/100?img=59" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                    </div>
                    <span className="text-gray-500 font-bold text-sm">Sep</span>
                </div>

                {/* OCTOBER GROUP */}
                <div className="flex flex-col items-center gap-3 w-1/3">
                    <div 
                        className="px-3 py-1.5 rounded-[10px] text-white text-[13px] font-bold shadow-lg mb-[-10px] z-20"
                        style={{ backgroundColor: brandPink }}
                    >
                        $11,035
                    </div>
                    <div className="flex items-end gap-1.5 h-[170px] w-full justify-center">
                        <div className="w-10 rounded-t-[14px] h-[95%] border border-gray-200" style={stripePattern}></div>
                        <div className="w-10 rounded-t-[14px] h-[65%] bg-gray-300/70"></div>
                        <div className="w-10 rounded-t-[14px] h-[40%] bg-gray-300/70"></div>
                    </div>
                    <div className="flex -space-x-2">
                         <img src="https://i.pravatar.cc/100?img=68" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                         <img src="https://i.pravatar.cc/100?img=8" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                         <img src="https://i.pravatar.cc/100?img=11" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                    </div>
                    <span className="text-gray-500 font-bold text-sm">Oct</span>
                </div>

                {/* NOVEMBER GROUP */}
                <div className="flex flex-col items-center gap-3 w-1/3">
                    <div 
                        className="px-3 py-1.5 rounded-[10px] text-white text-[13px] font-bold shadow-lg mb-[-10px] z-20"
                        style={{ backgroundColor: brandPink }}
                    >
                        $9,288
                    </div>
                    <div className="flex items-end gap-1.5 h-[170px] w-full justify-center">
                        <div className="w-10 rounded-t-[14px] h-[75%] border border-gray-200" style={stripePattern}></div>
                        <div className="w-10 rounded-t-[14px] h-[45%] bg-gray-300/70"></div>
                        <div className="w-10 rounded-t-[14px] h-[78%] bg-gray-300/70"></div>
                    </div>
                    <div className="flex -space-x-2">
                         <img src="https://i.pravatar.cc/100?img=53" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                         <img src="https://i.pravatar.cc/100?img=4" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                         <img src="https://i.pravatar.cc/100?img=3" alt="" className="w-7 h-7 rounded-full border-[2px] border-[#F4F4F5]" />
                    </div>
                    <span className="text-gray-500 font-bold text-sm">Nov</span>
                </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepDiveAnalytics;