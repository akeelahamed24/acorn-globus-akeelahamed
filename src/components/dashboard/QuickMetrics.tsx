import React from 'react';
import { ChevronRight, Star, ArrowDown, ArrowUp } from 'lucide-react';
import { USERS } from './constants';

interface QuickMetricsProps {
  topSalesCount: number;
  bestDeal: string;
  bestDealCompany: string;
  dealsCount: number;
  value: string;
}

const QuickMetrics: React.FC<QuickMetricsProps> = ({ 
  topSalesCount, 
  bestDeal, 
  bestDealCompany, 
  dealsCount, 
  value 
}) => {
  return (
    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white border border-zinc-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
         <p className="text-sm font-medium text-zinc-400 mb-2">Top sales</p>
         <h3 className="text-2xl font-bold mb-3">{topSalesCount}</h3>
         <div className="flex items-center gap-2">
           <img src={USERS[2].avatar} alt={USERS[2].name} className="w-6 h-6 rounded-full" />
           <span className="text-xs font-semibold text-zinc-700">Mikasa</span>
           <ChevronRight size={14} className="ml-auto text-zinc-300" />
         </div>
      </div>

      <div className="bg-zinc-900 p-5 rounded-2xl shadow-lg relative overflow-hidden text-white group">
         <div className="absolute top-2 right-2 text-zinc-600 group-hover:text-yellow-400 transition-colors">
           <Star size={14} />
         </div>
         <p className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Best deal</p>
         <h3 className="text-2xl font-bold mb-1">{bestDeal}</h3>
         <p className="text-xs text-zinc-400 mb-4">{bestDealCompany}</p>
         <div className="flex justify-end">
           <button className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors">
             <ChevronRight size={18} />
           </button>
         </div>
      </div>

      <div className="bg-white border border-zinc-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
         <div>
           <p className="text-sm font-medium text-zinc-400 mb-1">Deals</p>
           <div className="bg-zinc-50 w-full rounded-lg py-2 text-center text-lg font-bold">{dealsCount}</div>
         </div>
         <div className="flex items-center justify-center gap-1 text-zinc-500 text-xs font-bold mt-2">
           <ArrowDown size={12} fill="currentColor" /> 5
         </div>
      </div>

      <div className="bg-white border-2 border-rose-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
         <div className="flex flex-col items-center">
           <p className="text-sm font-medium text-zinc-400 mb-2">Value</p>
           <div className="bg-rose-500 text-white w-full rounded-lg py-2 text-center text-lg font-bold shadow-inner">{value}</div>
         </div>
         <div className="flex items-center justify-center gap-1 text-rose-500 text-xs font-bold mt-2">
           <ArrowUp size={12} fill="currentColor" /> 7.9%
         </div>
      </div>
    </div>
  );
};

export default QuickMetrics;