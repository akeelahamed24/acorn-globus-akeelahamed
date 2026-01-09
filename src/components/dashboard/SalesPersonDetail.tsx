import React from 'react';
import { 
  Share2, 
  MoreHorizontal, 
  Star, 
  TrendingUp, 
  Target 
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { DYNAMIC_CHART_DATA } from './constants';

interface SalesPersonDetailProps {
  sale: {
    name: string;
    avatar: string;
    win: string;
    loss: string;
    leads: string;
    kpi: string;
  };
}

const SalesPersonDetail: React.FC<SalesPersonDetailProps> = ({ sale }) => {
  return (
    <div className="mt-4 p-6 bg-white border border-zinc-100 rounded-[28px] shadow-lg animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-zinc-700">Sales dynamic - {sale.name}</h4>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-zinc-50 rounded-xl text-zinc-400 hover:bg-zinc-100 transition-colors">
            <Share2 size={16} />
          </button>
          <button className="p-2 bg-zinc-50 rounded-xl text-zinc-400 hover:bg-zinc-100 transition-colors">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="h-48 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={DYNAMIC_CHART_DATA}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="week" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fontWeight: 700, fill: '#cbd5e1' }}
              dy={10}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                background: 'white'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#f43f5e" 
              strokeWidth={2} 
              dot={(props: any) => {
                const { cx, cy, payload } = props;
                if (payload.platform === 'Google') return (
                  <foreignObject x={cx-10} y={cy-10} width={20} height={20}>
                    <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px] border-2 border-white shadow-sm">🔍</div>
                  </foreignObject>
                );
                if (payload.platform === 'Instagram') return (
                  <foreignObject x={cx-10} y={cy-10} width={20} height={20}>
                    <div className="bg-rose-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px] border-2 border-white shadow-sm">📸</div>
                  </foreignObject>
                );
                if (payload.platform === 'Dribbble') return (
                  <foreignObject x={cx-10} y={cy-10} width={20} height={20}>
                    <div className="bg-zinc-900 rounded-full w-5 h-5 flex items-center justify-center text-[10px] border-2 border-white shadow-sm">🏀</div>
                  </foreignObject>
                );
                return null;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Badges and Stats */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-yellow-50 text-yellow-600 rounded-full text-[10px] font-bold">
            <Star size={10} /> Top sales 💪
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full text-[10px] font-bold">
            <TrendingUp size={10} /> Sales streak 🔥
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-bold">
            <Target size={10} /> Top review 👍
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-bold text-zinc-400 uppercase">Conversion</p>
            <p className="text-sm font-bold text-zinc-700">32.4%</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-zinc-400 uppercase">Avg. Deal</p>
            <p className="text-sm font-bold text-zinc-700">$8,240</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-zinc-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={sale.avatar} alt={sale.name} className="w-10 h-10 rounded-full" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-700">{sale.name}</h4>
              <p className="text-xs text-zinc-400">Senior Sales Executive</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-xs text-zinc-400 mb-1">Win Rate</div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-zinc-700">{sale.win}</span>
                <span className="text-xs text-zinc-400">/</span>
                <span className="text-sm font-bold text-zinc-400">{sale.loss}</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-zinc-400 mb-1">Leads</div>
              <div className="text-sm font-bold text-zinc-700">{sale.leads}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-zinc-400 mb-1">KPI</div>
              <div className="text-sm font-bold text-zinc-700">{sale.kpi}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPersonDetail;
