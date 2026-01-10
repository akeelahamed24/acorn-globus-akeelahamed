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
        <div className="flex flex-wrap items-end gap-2 sm:gap-4">
          {/* Revenue Number */}
          <h2 className="flex items-end font-bold tracking-tight text-zinc-900">
            <span className="text-3xl sm:text-4xl lg:text-5xl">{mainAmount}</span>
            {decimal && (
              <span className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 ml-0.5">
                .{decimal}
              </span>
            )}
          </h2>

          {/* Badges container */}
          <div className="flex flex-wrap gap-2">
            {/* Percentage Badge */}
            <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-xs sm:text-sm font-semibold">
              <ArrowUp size={14} className="fill-rose-600" />
              {percentage}
            </div>

            {/* Amount Badge */}
            <div className="px-2 sm:px-3 py-1 bg-rose-500 text-white rounded-full text-xs sm:text-sm font-semibold">
              {amount}
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="flex items-center gap-1.5 text-zinc-400 text-xs sm:text-sm mt-3 font-medium">
          vs prev. {previousPeriod}
        </div>
      </div>
    </div>
  );
};

export default RevenueHero;
