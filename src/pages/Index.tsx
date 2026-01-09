import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import RevenueCard from "@/components/dashboard/RevenueCard";
import TopSalesCard from "@/components/dashboard/TopSalesCard";
import BestDealCard from "@/components/dashboard/BestDealCard";
import ValueMetricsCard from "@/components/dashboard/ValueMetricsCard";
import ReferrerChart from "@/components/dashboard/ReferrerChart";
import SalesTable from "@/components/dashboard/SalesTable";
import PlatformChart from "@/components/dashboard/PlatformChart";
import WorkWithPlatforms from "@/components/dashboard/WorkWithPlatforms";
import SalesDynamicChart from "@/components/dashboard/SalesDynamicChart";
import PlatformBadges from "@/components/dashboard/PlatformBadges";
import { Download, Share } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen dashboard-gradient">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Top Action Bar */}
          <div className="flex items-center justify-end gap-2 mb-4">
            <button className="p-2 hover:bg-card rounded-lg transition-colors">
              <Share className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-card rounded-lg transition-colors">
              <Download className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-4">
            {/* Revenue Card - Full width */}
            <div className="col-span-12 lg:col-span-7">
              <RevenueCard />
            </div>

            {/* Right Cards */}
            <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
              <TopSalesCard />
              <BestDealCard />
              <div className="col-span-2">
                <ValueMetricsCard />
              </div>
            </div>

            {/* Second Row */}
            <div className="col-span-12 lg:col-span-4">
              <ReferrerChart />
            </div>
            <div className="col-span-12 lg:col-span-5">
              <SalesTable />
            </div>
            <div className="col-span-12 lg:col-span-3 space-y-4">
              <WorkWithPlatforms />
              <PlatformBadges />
            </div>

            {/* Third Row */}
            <div className="col-span-12 lg:col-span-4">
              <PlatformChart />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <SalesDynamicChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
