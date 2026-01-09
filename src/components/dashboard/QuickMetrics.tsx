import React from "react";
import { ChevronRight, Star, ArrowDown, ArrowUp } from "lucide-react";
import { USERS } from "./constants";

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
  value,
}) => {
  return (
    <div className="lg:col-span-7 grid grid-cols-[1.3fr_1.3fr_1fr_1fr_1fr] gap-3">
      
      {/* Top sales */}
      <div className="bg-white border border-zinc-200 rounded-xl px-4 py-4 flex flex-col">
        <p className="text-sm font-medium text-zinc-400 mb-2">
          Top sales
        </p>

        <div className="text-[26px] font-semibold text-zinc-900 mb-3">
          {topSalesCount}
        </div>

        <div className="mt-auto flex items-center">
          <img
            src={USERS[2].avatar}
            alt={USERS[2].name}
            className="w-5 h-5 rounded-full"
          />
          <span className="ml-2 text-sm font-medium text-zinc-700">
            Mikasa
          </span>
          <ChevronRight size={16} className="ml-auto text-zinc-300" />
        </div>
      </div>

      {/* Best deal */}
      <div className="bg-zinc-900 rounded-xl px-4 py-4 text-white relative flex flex-col">
        <Star
          size={14}
          className="absolute top-3 right-3 text-zinc-500"
        />

        <p className="text-xs font-medium text-zinc-400 mb-2">
          Best deal
        </p>

        <div className="text-[22px] font-semibold mb-2">
          {bestDeal}
        </div>

        <p className="text-xs font-medium text-zinc-400 mb-4">
          {bestDealCompany}
        </p>

        <div className="mt-auto flex justify-end">
          <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
            <ChevronRight size={14} className="text-zinc-900" />
          </div>
        </div>
      </div>

      {/* Deals */}
      <div className="bg-white border border-zinc-200 rounded-2xl px-4 py-4 flex flex-col items-center">
        <p className="text-sm font-medium text-zinc-600 mb-2.5">
          Deals
        </p>

        <div className="bg-zinc-200 text-zinc-600 rounded-full px-3 py-1 text-sm font-semibold mb-3">
          {dealsCount}
        </div>

        <div className="mt-auto flex items-center gap-1 text-sm font-medium text-zinc-500">
          <ArrowDown size={14} strokeWidth={2.5} />
          <span>5</span>
        </div>
      </div>

      {/* Value */}
      <div className="bg-white border border-rose-300 rounded-2xl px-4 py-4 flex flex-col items-center">
        <p className="text-sm font-medium text-zinc-600 mb-2.5">
          Value
        </p>

        <div className="bg-rose-500 text-white rounded-full px-3 py-1 text-sm font-semibold mb-3">
          {value}
        </div>

        <div className="mt-auto flex items-center gap-1 text-sm font-medium text-rose-500">
          <ArrowUp size={14} strokeWidth={2.5} />
          <span>7.9%</span>
        </div>
      </div>

      {/* Win rate */}
      <div className="bg-white border border-zinc-200 rounded-2xl px-4 py-4 flex flex-col items-center">
        <p className="text-sm font-medium text-zinc-600 mb-2.5">
          Win rate
        </p>

        <div className="bg-zinc-100 text-zinc-600 rounded-full px-3 py-1 text-sm font-semibold mb-3">
          44%
        </div>

        <div className="mt-auto flex items-center gap-1 text-sm font-medium text-zinc-500">
          <ArrowUp size={14} strokeWidth={2.5} />
          <span>1.2%</span>
        </div>
      </div>
    </div>
  );
};

export default QuickMetrics;
