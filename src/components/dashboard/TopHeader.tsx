import React from "react";
import { SlidersHorizontal, Download, Share2, Plus } from "lucide-react";

const users = [
  { name: "Armin A.", img: "https://i.pravatar.cc/40?img=11" },
  { name: "Eren Y.", img: "https://i.pravatar.cc/40?img=12" },
  { name: "Mikasa A.", img: "https://i.pravatar.cc/40?img=13" },
];

const TopHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-3 bg-transparent border-0 rounded-full px-2 py-1">
        {/* Plus Button */}
        <button className="h-8 w-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100">
          <Plus size={14} />
        </button>

        {/* User Pills */}
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center gap-2 pl-2 pr-3 py-2 rounded-full bg-zinc-50 border border-zinc-200"
          >
            <img
              src={user.img}
              alt={user.name}
              className="h-6 w-6 rounded-full"
            />
            <span className="text-xs font-medium text-zinc-700">
              {user.name}
            </span>
          </div>
        ))}

        {/* Single Letter Avatar */}
        <div className="h-7 w-7 rounded-full bg-zinc-900 text-white text-sm flex items-center justify-center font-semibold">
          C
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2">
        <button className="h-9 w-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100">
          <SlidersHorizontal size={16} />
        </button>
        <button className="h-9 w-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100">
          <Download size={16} />
        </button>
        <button className="h-9 w-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100">
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
