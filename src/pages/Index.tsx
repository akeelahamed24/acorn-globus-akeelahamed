import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import RevenueHero from '@/components/dashboard/RevenueHero';
import QuickMetrics from '@/components/dashboard/QuickMetrics';
import ProgressSection from '@/components/dashboard/ProgressSection';
import PlatformFilters from '@/components/dashboard/PlatformFilters';
import BarChartSection from '@/components/dashboard/BarChartSection';
import PerformanceTable from '@/components/dashboard/PerformanceTable';
import DeepDiveAnalytics from '@/components/dashboard/DeepDiveAnalytics';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Revenue');
  const [expandedSalesId, setExpandedSalesId] = useState<number | null>(null);

  const handleSalesRowClick = (index: number) => {
    setExpandedSalesId(expandedSalesId === index ? null : index);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header />
          
          {/* Dashboard Content - White container with subtle shadow */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-8">
            <div className="max-w-[1600px] mx-auto">
              {/* White bordered container */}
              <div className="bg-white border border-zinc-200 rounded-[28px] lg:rounded-[36px] shadow-sm p-6 lg:p-8">
                <div className="space-y-8">
                  
                  {/* Title and Controls */}
                  <DashboardHeader />

                  {/* Top Stats and Hero Row */}
                  <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <RevenueHero 
                      revenue="$528,976.82"
                      percentage="7.9%"
                      amount="$27,335.09"
                      previousPeriod="501,841.73 Jun 1 – Aug 31, 2023"
                    />
                    <QuickMetrics 
                      topSalesCount={72}
                      bestDeal="$42,300"
                      bestDealCompany="Rolf Inc."
                      dealsCount={256}
                      value="528k"
                    />
                  </section>

                  {/* Segmented Progress Row */}
                  <ProgressSection onDetailsClick={() => console.log('Details clicked')} />

                  {/* Middle Content Grid */}
                  <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    <PlatformFilters onPlatformClick={(platform) => console.log('Platform clicked:', platform)} />
                    <BarChartSection onFilterChange={(filter) => console.log('Filter changed:', filter)} />
                    <PerformanceTable 
                      expandedSalesId={expandedSalesId}
                      onSalesRowClick={handleSalesRowClick}
                    />
                  </section>

                  {/* Bottom Section: Deep Dive Analytics */}
                  <DeepDiveAnalytics 
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;