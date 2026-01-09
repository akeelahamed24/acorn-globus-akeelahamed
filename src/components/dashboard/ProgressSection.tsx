import React from 'react';
import { USERS } from './constants';

interface ProgressSectionProps {
  onDetailsClick?: () => void;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ onDetailsClick }) => {
  return (
    <section className="bg-white border border-zinc-100 rounded-3xl p-3 flex items-center justify-between shadow-sm overflow-x-auto">
      <div className="flex items-center gap-8 min-w-max px-4 w-full">
        <div className="flex items-center gap-12 flex-1">
          <div className="flex items-center gap-3">
            <img src={USERS[0].avatar} alt={USERS[0].name} className="w-6 h-6 rounded-full" />
            <span className="text-sm font-bold">$209,633</span>
            <div className="w-32 h-1.5 bg-zinc-100 rounded-full relative">
               <div className="absolute left-0 top-0 h-full bg-zinc-900 rounded-full" style={{width: '39%'}}></div>
            </div>
            <span className="text-xs font-medium text-zinc-400">39.63%</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={USERS[2].avatar} alt={USERS[2].name} className="w-6 h-6 rounded-full" />
            <span className="text-sm font-bold">$156,841</span>
            <div className="w-24 h-1.5 bg-zinc-100 rounded-full relative">
               <div className="absolute left-0 top-0 h-full bg-blue-500 rounded-full" style={{width: '29%'}}></div>
            </div>
            <span className="text-xs font-medium text-zinc-400">29.65%</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={USERS[1].avatar} alt={USERS[1].name} className="w-6 h-6 rounded-full" />
            <span className="text-sm font-bold">$117,115</span>
            <div className="w-20 h-1.5 bg-zinc-100 rounded-full relative">
               <div className="absolute left-0 top-0 h-full bg-orange-500 rounded-full" style={{width: '22%'}}></div>
            </div>
            <span className="text-xs font-medium text-zinc-400">22.14%</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">C</div>
            <span className="text-sm font-bold">$45,386</span>
            <div className="w-12 h-1.5 bg-zinc-100 rounded-full relative">
               <div className="absolute left-0 top-0 h-full bg-zinc-400 rounded-full" style={{width: '8%'}}></div>
            </div>
            <span className="text-xs font-medium text-zinc-400">8.58%</span>
          </div>
        </div>
        <button 
          className="bg-zinc-900 text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-md hover:bg-zinc-800 transition-colors"
          onClick={onDetailsClick}
        >
          Details
        </button>
      </div>
    </section>
  );
};

export default ProgressSection;
