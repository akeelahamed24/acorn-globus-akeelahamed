import React from 'react';
import { ChevronDown, Activity } from 'lucide-react';

interface DeepDiveAnalyticsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const DeepDiveAnalytics: React.FC<DeepDiveAnalyticsProps> = ({ 
  activeTab, 
  onTabChange 
}) => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
       {/* Platform Detailed Metric - Fixed Height */}
       <div className="xl:col-span-6">
         <div className="bg-white border border-zinc-100 rounded-[28px] shadow-sm h-[320px] w-full overflow-hidden">
            <div className="p-6 h-full flex flex-col">
               <div className="flex items-center justify-between mb-6 shrink-0">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white font-bold text-xs">🏀</div>
                     <div>
                        <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Platform value</p>
                        <button className="flex items-center gap-1 text-sm font-bold text-zinc-700">Dribbble <ChevronDown size={14} /></button>
                     </div>
                  </div>
                  <div className="flex bg-zinc-100 p-1 rounded-xl">
                     {['Revenue', 'Leads', 'W/L'].map((tab) => (
                        <button 
                           key={tab}
                           onClick={() => onTabChange(tab)}
                           className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
                        >
                           {tab}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="flex-1 min-h-0">
                 <div className="grid grid-cols-3 gap-6 h-full">
                    <div className="space-y-4">
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Revenue</p>
                          <h4 className="text-xl font-bold">$18,552</h4>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Leads</p>
                          <h4 className="text-xl font-bold">373 <span className="text-sm text-zinc-300 font-medium">97/276</span></h4>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Win/loss</p>
                          <h4 className="text-xl font-bold">16% <span className="text-sm text-zinc-300 font-medium">51/318</span></h4>
                       </div>
                    </div>

                    <div className="col-span-2 flex items-end justify-between h-full px-2">
                       {/* Simplified Custom Bar/Label Viz */}
                       <div className="flex-1 flex flex-col items-center h-full">
                          <div className="px-2 py-1 bg-rose-500 text-white text-[10px] font-bold rounded-lg mb-2">$6,901</div>
                          <div className="w-full flex-1 flex flex-col justify-end">
                            <div className="w-full bg-zinc-50 rounded-t-xl h-3/5 relative overflow-hidden">
                               <div className="absolute bottom-0 w-full bg-zinc-200 h-4/5 opacity-50"></div>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-zinc-300 mt-2">Sep</span>
                       </div>
                       <div className="flex-1 flex flex-col items-center h-full">
                          <div className="px-2 py-1 bg-rose-500 text-white text-[10px] font-bold rounded-lg mb-2">$11,035</div>
                          <div className="w-full flex-1 flex flex-col justify-end">
                            <div className="w-full bg-zinc-50 rounded-t-xl h-4/5 relative overflow-hidden">
                               <div className="absolute bottom-0 w-full bg-zinc-200 h-4/5 opacity-50"></div>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-zinc-300 mt-2">Oct</span>
                       </div>
                       <div className="flex-1 flex flex-col items-center h-full">
                          <div className="px-2 py-1 bg-rose-500 text-white text-[10px] font-bold rounded-lg mb-2">$9,288</div>
                          <div className="w-full flex-1 flex flex-col justify-end">
                            <div className="w-full bg-zinc-50 rounded-t-xl h-2/5 relative overflow-hidden">
                               <div className="absolute bottom-0 w-full bg-zinc-200 h-4/5 opacity-50"></div>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-zinc-300 mt-2">Nov</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
         </div>
       </div>

      
    </section>
  );
};

export default DeepDiveAnalytics;