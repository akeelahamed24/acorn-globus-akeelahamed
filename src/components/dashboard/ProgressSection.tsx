import React from "react";
import { USERS } from "./constants";

interface ProgressSectionProps {
  onDetailsClick?: () => void;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ onDetailsClick }) => {
  return (
    <div className="flex items-center w-full gap-2 sm:gap-4 min-w-[600px]">
      {/* LEFT: PROGRESS ITEMS AS SEPARATE ROUNDED RECTANGLES */}
      <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-full px-2 sm:px-4 py-2 flex items-center gap-2 sm:gap-4">
        {/* ITEM 1 - 39.63% width */}
        <div className="bg-white border border-zinc-200 rounded-full px-2 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1 sm:gap-2 min-w-0" style={{ width: '39.63%' }}>
          <img
            src={USERS[0].avatar}
            alt={USERS[0].name}
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0"
          />
          <span className="text-xs sm:text-sm font-semibold text-zinc-900 truncate">$209,633</span>
          <span className="text-xs sm:text-sm text-zinc-400 font-medium flex-shrink-0 whitespace-nowrap hidden sm:inline">39.63%</span>
        </div>

        {/* ITEM 2 - 29.65% width */}
        <div className="bg-white border border-zinc-200 rounded-full px-2 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1 sm:gap-2 min-w-0" style={{ width: '29.65%' }}>
          <img
            src={USERS[2].avatar}
            alt={USERS[2].name}
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0"
          />
          <span className="text-xs sm:text-sm font-semibold text-zinc-900 truncate">$156,841</span>
          <span className="text-xs sm:text-sm text-zinc-400 font-medium flex-shrink-0 whitespace-nowrap hidden sm:inline">29.65%</span>
        </div>

        {/* ITEM 3 - 22.14% width */}
        <div className="bg-white border border-zinc-200 rounded-full px-2 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1 sm:gap-2 min-w-0" style={{ width: '22.14%' }}>
          <img
            src={USERS[1].avatar}
            alt={USERS[1].name}
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0"
          />
          <span className="text-xs sm:text-sm font-semibold text-zinc-900 truncate">$117,115</span>
          <span className="text-xs sm:text-sm text-zinc-400 font-medium flex-shrink-0 whitespace-nowrap hidden sm:inline">22.14%</span>
        </div>

        {/* ITEM 4 - 8.58% width */}
        <div className="bg-white border border-zinc-200 rounded-full px-2 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1 sm:gap-2 min-w-0" style={{ width: '8.58%' }}>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] sm:text-xs text-white font-bold flex-shrink-0">
            C
          </div>
          <span className="text-xs sm:text-sm font-semibold text-zinc-900 truncate">$45,386</span>
          <span className="text-xs sm:text-sm text-zinc-400 font-medium flex-shrink-0 whitespace-nowrap hidden lg:inline">8.58%</span>
        </div>
      </div>

      {/* RIGHT: DETAILS BUTTON */}
      <button
        onClick={onDetailsClick}
        className="bg-zinc-900 text-white px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium hover:bg-zinc-800 transition whitespace-nowrap flex-shrink-0"
      >
        Details
      </button>
    </div>
  );
};

export default ProgressSection;