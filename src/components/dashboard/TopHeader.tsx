import React from "react";
import { SlidersHorizontal, Download, Share2, Plus } from "lucide-react";

const users = [
  { name: "Armin A.", img: "https://i.pravatar.cc/40?img=11" },
  { name: "Eren Y.", img: "https://i.pravatar.cc/40?img=12" },
  { name: "Mikasa A.", img: "https://i.pravatar.cc/40?img=13" },
];

const TopHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3 bg-transparent border-0 rounded-full px-1 sm:px-2 py-1 flex-wrap">
        {/* Plus Button */}
        <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100">
          <Plus size={14} />
        </button>

        {/* User Pills - hide some on mobile */}
        {users.map((user, index) => (
          <div
            key={index}
            className={`flex items-center gap-1.5 sm:gap-2 pl-1.5 sm:pl-2 pr-2 sm:pr-3 py-1.5 sm:py-2 rounded-full bg-zinc-50 border border-zinc-200 ${index > 0 ? 'hidden sm:flex' : 'flex'}`}
          >
            <img
              src={user.img}
              alt={user.name}
              className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
            />
            <span className="text-[10px] sm:text-xs font-medium text-zinc-700">
              {user.name}
            </span>
          </div>
        ))}

        {/* Single Letter Avatar */}
        <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-zinc-900 text-white text-xs sm:text-sm flex items-center justify-center font-semibold">
          C
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100">
          <SlidersHorizontal size={14} className="sm:w-4 sm:h-4" />
        </button>
        <button className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100">
          <Download size={14} className="sm:w-4 sm:h-4" />
        </button>
        <button className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100">
          <Share2 size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
