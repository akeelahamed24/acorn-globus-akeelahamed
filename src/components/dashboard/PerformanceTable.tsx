import React from 'react';
import { ChevronDown, ChevronUp, Users, Download, Star, ArrowUp, ArrowDown } from 'lucide-react';
import { SALES_DATA } from './constants';
import SalesPersonDetail from './SalesPersonDetail';

interface PerformanceTableProps {
  expandedSalesId: number | null;
  onSalesRowClick: (index: number) => void;
}

const PerformanceTable: React.FC<PerformanceTableProps> = ({ 
  expandedSalesId, 
  onSalesRowClick 
}) => {
  return (
    <div className="xl:col-span-6">
      <div className="bg-white border border-zinc-100 rounded-[28px] p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 rounded-xl">
              <Users size={18} className="text-purple-500" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-700">Sales Team Performance</h3>
              <p className="text-xs text-zinc-400">Q4 2023 Overview</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 rounded-lg text-xs font-semibold text-zinc-600 transition-colors">
            Export <Download size={12} />
          </button>
        </div>

        <div className="mb-4 grid grid-cols-12 text-zinc-400 text-[10px] font-bold uppercase tracking-widest px-2">
           <div className="col-span-4">Sales</div>
           <div className="col-span-2 text-right">Revenue</div>
           <div className="col-span-2 text-center">Leads</div>
           <div className="col-span-2 text-center">KPI</div>
           <div className="col-span-2 text-center">W/L</div>
        </div>

        <div className="space-y-4">
          {SALES_DATA.map((sale, i) => (
            <div key={i} className="relative">
              {/* CLICKABLE ROW - FIXED with items-start */}
              <div 
                onClick={() => onSalesRowClick(i)}
                className={`grid grid-cols-12 items-start p-3 rounded-2xl cursor-pointer transition-all ${
                  expandedSalesId === i 
                    ? 'bg-gradient-to-r from-purple-50/50 to-rose-50/50 border border-purple-100' 
                    : 'hover:bg-zinc-50'
                } ${i === 1 ? 'border border-purple-100' : ''}`}
              >
                <div className="col-span-4 flex items-center gap-3">
                  <div className="relative">
                    <img src={sale.avatar} alt={sale.name} className="w-8 h-8 rounded-full" />
                    {i === 0 && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center">
                        <Star size={8} className="text-white" fill="white" />
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-bold text-zinc-700">{sale.name}</span>
                  <button className="text-zinc-400 ml-auto">
                    {expandedSalesId === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>
                <div className="col-span-2 text-right">
                  <span className="text-sm font-bold text-zinc-900">{sale.amount}</span>
                </div>
                <div className="col-span-2 flex justify-center">
                  <span className="bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded-full min-w-6 h-6 flex items-center justify-center">
                    {sale.leads}
                  </span>
                </div>
                <div className="col-span-2 text-center">
                  <div className="inline-flex items-center gap-1">
                    <span className="text-sm font-bold text-zinc-900">{sale.kpi}</span>
                    {parseFloat(sale.kpi) > 4.5 ? (
                      <ArrowUp size={12} className="text-green-500" />
                    ) : (
                      <ArrowDown size={12} className="text-rose-500" />
                    )}
                  </div>
                </div>
                <div className="col-span-2 flex justify-center gap-1.5">
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-lg">
                    {sale.win}W
                  </span>
                  <span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-1 rounded-lg">
                    {sale.loss}L
                  </span>
                </div>
              </div>
              
              {/* EXPANDED CONTENT (SEPARATE BLOCK) - FIXED */}
              {expandedSalesId === i && (
                <div className="w-full mt-4">
                  <SalesPersonDetail sale={sale} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-6 pt-6 border-t border-zinc-100">
          <div className="flex items-center justify-between text-sm">
            <div className="text-zinc-600">
              <span className="font-bold">{SALES_DATA.length}</span> sales representatives
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-zinc-400">Total Revenue</div>
                <div className="text-sm font-bold text-zinc-900">$528,976.82</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-zinc-400">Avg. KPI</div>
                <div className="text-sm font-bold text-zinc-900">4.2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTable;