import React from 'react';
import { ArrowUp } from 'lucide-react';

interface RevenueHeroProps {
  revenue: string;
  percentage: string;
  amount: string;
  previousPeriod: string;
}

const RevenueHero: React.FC<RevenueHeroProps> = ({ 
  revenue, 
  percentage, 
  amount, 
  previousPeriod 
}) => {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between p-2">
      <div>
        <p className="text-zinc-500 font-medium mb-1">Revenue</p>
        <div className="flex items-baseline gap-4">
          <h2 className="text-5xl font-bold tracking-tight">{revenue}</h2>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-bold">
            <ArrowUp size={14} fill="currentColor" />
            {percentage}
          </div>
          <div className="px-3 py-1 bg-rose-500 text-white rounded-full text-sm font-bold">
            {amount}
          </div>
        </div>
        <div className="flex items-center gap-2 text-zinc-400 text-sm mt-3 font-medium">
          vs prev. {previousPeriod} <ArrowUp size={14} />
        </div>
      </div>
    </div>
  );
};

export default RevenueHero;