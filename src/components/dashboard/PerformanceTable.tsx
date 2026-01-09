import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  ShoppingBag,
  Star,
  Dribbble // Using Dribbble icon as a proxy for the basketball
} from 'lucide-react';
import { SALES_DATA } from './constants';

// --- Sub-components ---

const SalesChart = () => (
  // Container with pink gradient background and increased height for bottom bars
  <div className="relative h-64 w-full mt-4 bg-gradient-to-b from-rose-50/80 via-rose-50/20 to-white/10 rounded-[24px] p-4 overflow-hidden">
    
    {/* 1. Background Grid & X-Axis Labels */}
    <div className="absolute inset-0 flex justify-between px-6 pt-4 pb-20 pointer-events-none z-0">
       {['W 1', 'W 3', 'W 5', 'W 7', 'W 9', 'W 11'].map((label, i) => (
         <div key={i} className="h-full flex flex-col justify-end items-center relative">
           {/* Subtle solid vertical grid line */}
           <div className="h-full border-r border-zinc-100 w-px absolute top-0"></div>
           {/* Label positioned below the chart area */}
           <span className="text-[10px] text-zinc-400 font-medium absolute -bottom-6 whitespace-nowrap">{label}</span>
         </div>
       ))}
    </div>
    
    {/* Chart Area Container (for lines and markers) */}
    <div className="relative h-full w-full z-10 mb-12">
        <svg className="w-full h-[75%]" viewBox="0 0 100 50" preserveAspectRatio="none" shapeRendering="geometricPrecision">
        
        {/* Secondary Line (Thin, lighter pink, in background) */}
        <path
            d="M0,34
               L10,30
               L20,22
               L30,26
               L40,20
               L50,18
               L60,26
               L70,24
               L80,28
               L90,26
               L100,24"
            fill="none"
            stroke="#fda4af" // Light pink
            strokeWidth="0.8"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            opacity="0.45"
        />
        
        {/* Main Line (Thick, vibrant pink, in foreground) */}
        <path
            d="M0,36
               L10,32
               L20,26
               L30,30
               L40,18
               L50,22
               L60,34
               L70,30
               L80,24
               L90,16
               L100,18"
            fill="none"
            stroke="#ec4899" // Vibrant Pink
            strokeWidth="0.8"
            strokeLinecap="butt"
            strokeLinejoin="miter"
        />
        </svg>
    </div>


    {/* 3. Bottom Progress Bars Section */}
    <div className="absolute bottom-4 left-6 right-6 h-3 flex items-center gap-6 z-20">
        
        {/* Left Progress Bar */}
        <div className="relative h-1.5 flex-1 rounded-full" style={{ background: 'linear-gradient(to right, #f43f5e, #fbbf24, #a3e635)' }}>
            {/* 'Be' Icon at end of bar */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-[#0057ff] rounded-md flex items-center justify-center border border-white shadow-sm">
                <span className="text-[8px] text-white font-extrabold">Be</span>
            </div>
        </div>

        {/* Right Progress Bar */}
        <div className="relative h-1.5 flex-[1.5] rounded-full" style={{ background: 'linear-gradient(to right, #f43f5e, #fbbf24, #a3e635)' }}>
            {/* Basketball Icon at start */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center border border-white shadow-sm">
                 <Dribbble size={10} className="text-white" />
            </div>
            {/* Avatar Icon at end */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eren" className="w-5 h-5 rounded-full border border-white shadow-sm" alt="" />
            </div>
        </div>

    </div>

  </div>
);

// --- Main Component ---

interface PerformanceTableProps {
  expandedSalesId?: string | null;
  onSalesRowClick?: (name: string) => void;
}

const PerformanceTable: React.FC<PerformanceTableProps> = ({ expandedSalesId, onSalesRowClick }) => {

  return (
    <div className="w-full max-w-4xl mx-auto p-8 font-sans bg-white min-h-screen"> {/* Changed from bg-zinc-50 to bg-white */}
      
      {/* Header Row */}
      <div className="grid grid-cols-12 gap-4 px-6 mb-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wide">
        <div className="col-span-3">Sales</div>
        <div className="col-span-2">Revenue</div>
        <div className="col-span-2 text-center">Leads</div>
        <div className="col-span-1 text-center">KPI</div>
        <div className="col-span-3 text-right pr-12">W/L</div>
        <div className="col-span-1"></div>
      </div>

      <div className="space-y-4">
        {SALES_DATA.map((person) => {
          const isExpanded = expandedSalesId === person.name; // Using name as identifier

          return (
            <div 
              key={person.name}
              onClick={() => onSalesRowClick?.(person.name)}
              className={`relative rounded-[32px] transition-all duration-300 cursor-pointer overflow-hidden ${
                isExpanded 
                  ? 'bg-gradient-to-br from-white via-[#fff9fc] to-[#fceef5] shadow-lg ring-1 ring-pink-50/50 p-6' 
                  : 'bg-white hover:bg-zinc-50 shadow-sm p-4 px-6'
              }`}
            >
              {/* Row Content */}
              <div className="grid grid-cols-12 gap-4 items-center">
                
                {/* 1. Name & Avatar */}
                <div className="col-span-3 flex items-center gap-3">
                  <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full bg-zinc-100 object-cover" />
                  <span className="font-bold text-zinc-700">{person.name}</span>
                </div>

                {/* 2. Revenue */}
                <div className="col-span-2 font-bold text-zinc-800">
                  {person.amount}
                </div>

                {/* 3. Leads (Split Pills) */}
                <div className="col-span-2 flex justify-center gap-1.5">
                   <span className="bg-zinc-800 text-white text-xs font-bold px-3 py-1.5 rounded-full min-w-[36px] text-center">
                     {person.leads}
                   </span>
                   <span className="bg-zinc-200/80 text-zinc-600 text-xs font-bold px-3 py-1.5 rounded-full min-w-[36px] text-center">
                     {person.leads}
                   </span>
                </div>

                {/* 4. KPI */}
                <div className="col-span-1 text-center text-sm font-semibold text-zinc-600">
                  {person.kpi}
                </div>

                {/* 5. W/L (Complex Layout) */}
                <div className="col-span-3 flex items-center justify-end gap-3">
                  <span className="text-zinc-500 font-medium text-sm">32%</span>
                  <div className="flex gap-1">
                    <span className="bg-zinc-900 text-white text-xs font-bold w-8 h-7 flex items-center justify-center rounded-lg">
                      {person.win}
                    </span>
                    <span className="bg-zinc-200 text-zinc-600 text-xs font-bold w-8 h-7 flex items-center justify-center rounded-lg">
                      {person.loss}
                    </span>
                  </div>
                </div>

                {/* 6. Expand Button */}
                <div className="col-span-1 flex justify-end">
                   <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-rose-500 text-white rotate-180' : 'bg-transparent text-zinc-400'}`}>
                      <ChevronDown size={18} strokeWidth={2.5} />
                   </button>
                </div>
              </div>

              {/* EXPANDED CONTENT AREA */}
              {isExpanded && (
                <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
                  
                  {/* Badges Row */}
                  <div className="flex gap-3 mb-8">
                    <div className="bg-white px-4 py-2 rounded-xl shadow-sm text-sm font-bold text-zinc-700 flex items-center gap-2">
                      Top sales <span>💪</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl shadow-sm text-sm font-bold text-zinc-700 flex items-center gap-2">
                      Sales streak <span>🔥</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl shadow-sm text-sm font-bold text-zinc-700 flex items-center gap-2">
                      Top review <span>👍</span>
                    </div>
                  </div>

                  {/* Header for Detail Section */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-zinc-600 font-bold text-sm">Work with platforms</h4>
                    <div className="flex gap-2">
                      <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                        <ArrowUpRight size={12} /> 3
                      </span>
                      <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        $156,841
                      </span>
                    </div>
                  </div>

                  {/* Grid Layout for Cards */}
                  <div className="grid grid-cols-12 gap-4 h-[180px]">
                    {/* Dribbble (Large) */}
                    <div className="col-span-5 bg-white rounded-[24px] p-5 shadow-sm flex flex-col justify-between">
                       <div className="flex items-center gap-2">
                          <img
                            src="/dribbble.png"
                            alt="Dribbble"
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="font-bold text-zinc-700">Dribbble</span>
                       </div>
                       <div>
                         <div className="text-4xl font-bold text-zinc-900 mb-1">45.3% <span className="text-xl text-zinc-300">$71,048</span></div>
                       </div>
                    </div>

                    {/* Middle Column */}
                    <div className="col-span-3 flex flex-col gap-4">
                       <div className="bg-white rounded-[24px] p-4 shadow-sm">
                         <div className="flex items-center gap-2 mb-2">
                           <img
                             src="/instagram.png"
                             alt="Instagram"
                             className="w-5 h-5"
                           />
                           <span className="font-bold text-sm text-zinc-700">Instagram</span>
                         </div>
                         <div className="flex items-baseline gap-2">
                           <span className="text-lg font-bold text-zinc-900">28.1%</span>
                           <span className="text-[10px] text-zinc-400">$44,072</span>
                         </div>
                       </div>
                       
                    </div>

                    {/* Right Column */}
                    <div className="col-span-4 flex flex-col gap-4">
                        <div className="bg-white rounded-[24px] p-4 flex-1 shadow-sm relative overflow-hidden">
                           {/* Stripes */}
                           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '10px 10px' }} />
                           
                           <div className="relative z-10">
                              <div className="flex items-center gap-2 mb-2">
                                <img
                                  src="/google.png"
                                  alt="Google"
                                  className="w-5 h-5"
                                />
                                <span className="font-bold text-sm text-zinc-700">Google</span>
                              </div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-lg font-bold">14.1%</span>
                                <span className="text-[10px] text-zinc-300">$22,114</span>
                              </div>
                           </div>
                        </div>

                         <div className="bg-white rounded-[24px] p-4 h-12 shadow-sm flex items-center justify-between px-4">
                          <div className="flex items-center gap-2">
                             <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                               <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                             </div>
                             <span className="font-bold text-sm">5.4%</span>
                             <span className="text-[10px] text-zinc-300">$8,469</span>
                          </div>
                        </div>
                    </div>
                  </div>

                  {/* "Other" Card - Full Width */}
                  <div className="col-span-12 mt-4">
                    <div className="bg-white rounded-[24px] p-4 h-14 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShoppingBag size={14} className="text-zinc-700" />
                        <span className="font-bold text-sm text-zinc-700">Other</span>
                      </div>

                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-zinc-900">7.1%</span>
                        <span className="text-[10px] text-zinc-400">$11,135</span>
                      </div>
                    </div>
                  </div>

                  {/* Chart Section */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between px-2">
                      <h4 className="text-zinc-700 font-bold text-sm">Sales dynamic</h4>
                      <ArrowUpRight size={14} className="text-zinc-400" />
                    </div>
                    <SalesChart />
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PerformanceTable;