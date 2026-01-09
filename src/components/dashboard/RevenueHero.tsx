import React from "react";
import { ArrowUp } from "lucide-react";

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
  previousPeriod,
}) => {
  const [mainAmount, decimal] = revenue.split(".");

  return (
    <div className="lg:col-span-5 flex flex-col justify-between p-2">
      <div>
        {/* Title */}
<p className="text-zinc-700 font-semibold text-sm mb-0.5">
  Revenue
</p>

        {/* Revenue Row */}
        <div className="flex items-end gap-4">
          {/* Revenue Number */}
          <h2 className="flex items-end font-bold tracking-tight text-zinc-900">
            <span className="text-5xl">{mainAmount}</span>
            {decimal && (
              <span className="text-3xl text-zinc-300 ml-0.5">
                .{decimal}
              </span>
            )}
          </h2>

          {/* Percentage Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold">
            <ArrowUp size={14} className="fill-rose-600" />
            {percentage}
          </div>

          {/* Amount Badge */}
          <div className="px-3 py-1 bg-rose-500 text-white rounded-full text-sm font-semibold">
            {amount}
          </div>
        </div>

        {/* Comparison */}
        <div className="flex items-center gap-1.5 text-zinc-400 text-sm mt-3 font-medium">
          vs prev. {previousPeriod}
        </div>
      </div>
    </div>
  );
};

export default RevenueHero;
