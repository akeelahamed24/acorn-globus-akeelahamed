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
import TopHeader from "@/components/dashboard/TopHeader";



const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Revenue');
  const [expandedSalesId, setExpandedSalesId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSalesRowClick = (name: string) => {
    setExpandedSalesId(expandedSalesId === name ? null : name);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="flex h-screen relative">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`
          fixed lg:relative inset-y-0 left-0 z-50
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
          transition-transform duration-300 ease-in-out
        `}>
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          {/* Header */}
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          
          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-8">
            <div className="max-w-[1600px] mx-auto">
              {/* White bordered container */}
              <div className="bg-white border border-zinc-200 rounded-[20px] sm:rounded-[28px] lg:rounded-[36px] shadow-sm p-4 sm:p-6 lg:p-8">
                <div className="space-y-6 lg:space-y-8">
                  <TopHeader />

                  {/* Title and Controls */}
                  <DashboardHeader />

                  {/* Top Stats and Hero Row */}
                  <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
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

                  {/* Segmented Progress Row - Hidden on mobile, scrollable on tablet */}
                  <div className="hidden sm:block overflow-x-auto">
                    <ProgressSection onDetailsClick={() => console.log('Details clicked')} />
                  </div>

                  {/* Middle Content Grid - Equal sizing layout */}
                  <section className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
                    {/* Left Container */}
                    <div className="xl:col-span-7 space-y-4 sm:space-y-6">
                      {/* PlatformFilters and BarChartSection side by side - equal size */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {/* PlatformFilters - equal width */}
                        <div className="w-full">
                          <PlatformFilters onPlatformClick={(platform) => console.log('Platform clicked:', platform)} />
                        </div>
                        
                        {/* BarChartSection - equal width */}
                        <div className="w-full">
                          <BarChartSection onFilterChange={(filter) => console.log('Filter changed:', filter)} />
                        </div>
                      </div>
                      
                      {/* DeepDiveAnalytics below them - full width */}
                      <div className="w-full overflow-x-auto">
                        <DeepDiveAnalytics 
                          activeTab={activeTab}
                          onTabChange={handleTabChange}
                        />
                      </div>
                    </div>
                    
                    {/* Right Container - PerformanceTable */}
                    <div className="xl:col-span-5">
                      <PerformanceTable 
                        expandedSalesId={expandedSalesId}
                        onSalesRowClick={handleSalesRowClick}
                      />
                    </div>
                  </section>
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