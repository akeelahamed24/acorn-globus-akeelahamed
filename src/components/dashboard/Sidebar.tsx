import { Home, Star, Clock, List, Target, LayoutDashboard, Users, Box, Hash, Type, FlaskConical, ChevronDown, Share2, FileText, BarChart3, Mail, Plus, Settings, Folder, ChevronRight, Layers, Command, Grid3X3 } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["codename", "reports", "myReports"]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  return (
    <aside className="w-72 h-screen flex bg-gradient-to-b from-[hsl(350,40%,97%)] via-[hsl(340,25%,95%)] to-[hsl(330,20%,93%)]">
      {/* Icon Bar */}
      <div className="w-14 flex flex-col items-center py-4 bg-gradient-to-b from-[hsl(350,35%,96%)] to-[hsl(340,30%,94%)]">
        {/* Logo */}
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-6">
          <span className="text-primary-foreground font-bold text-lg">C</span>
        </div>

        {/* Icon Navigation */}
        <div className="flex flex-col items-center gap-3">
          <button className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-white/50 transition-colors">
            <Home className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-white/50 transition-colors">
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-white/50 transition-colors">
            <Command className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Icons */}
        <div className="mt-auto flex flex-col items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <button className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-white/50 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-white/50 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Sidebar Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 flex items-center gap-2">
          <span className="text-foreground font-semibold text-sm">Codename.com</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
          <div className="sidebar-nav-item">
            <Star className="w-4 h-4" />
            <span className="text-sm">Starred</span>
          </div>
          <div className="sidebar-nav-item">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Recent</span>
          </div>
          <div className="sidebar-nav-item">
            <List className="w-4 h-4" />
            <span className="text-sm">Sales list</span>
          </div>
          <div className="sidebar-nav-item">
            <Target className="w-4 h-4" />
            <span className="text-sm">Goals</span>
          </div>
          <div className="sidebar-nav-item sidebar-nav-item-active">
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-sm">Dashboard</span>
          </div>

          {/* Codename Section */}
          <div className="pt-4">
            <button
              onClick={() => toggleSection("codename")}
              className="flex items-center gap-2 px-2 py-1.5 w-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xs font-medium">Codename</span>
              <Plus className="w-3 h-3 ml-auto" />
            </button>
            {expandedSections.includes("codename") && (
              <div className="ml-2 space-y-0.5 mt-1">
                <div className="sidebar-nav-item">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Shared with me</span>
                  <ChevronDown className="w-3 h-3 ml-auto" />
                </div>
                <div className="sidebar-nav-item pl-6">
                  <Box className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Cargo2go</span>
                </div>
                <div className="sidebar-nav-item pl-6">
                  <div className="w-4 h-4 rounded bg-primary flex items-center justify-center">
                    <span className="text-[7px] text-primary-foreground font-bold">C3</span>
                  </div>
                  <span className="text-sm">Cloudz3r</span>
                  <span className="ml-auto w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-medium">2</span>
                </div>
                <div className="sidebar-nav-item pl-6">
                  <Type className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Idioma</span>
                </div>
                <div className="sidebar-nav-item pl-6">
                  <Hash className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Syllabites</span>
                </div>
                <div className="sidebar-nav-item pl-6">
                  <FlaskConical className="w-4 h-4 text-teal-400" />
                  <span className="text-sm">x-0b</span>
                </div>
              </div>
            )}
          </div>

          {/* Reports Section */}
          <div className="pt-2">
            <button
              onClick={() => toggleSection("reports")}
              className="flex items-center gap-2 px-2 py-1.5 w-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xs font-medium">Reports</span>
              <Plus className="w-3 h-3 ml-auto" />
            </button>
            {expandedSections.includes("reports") && (
              <div className="ml-2 space-y-0.5 mt-1">
                <div className="sidebar-nav-item">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share with me</span>
                  <ChevronDown className="w-3 h-3 ml-auto" />
                </div>
                <div className="sidebar-nav-item pl-6">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Deals by user</span>
                </div>
                <div className="sidebar-nav-item pl-6">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Deal duration</span>
                </div>
                
                <button
                  onClick={() => toggleSection("myReports")}
                  className="sidebar-nav-item w-full"
                >
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">My reports</span>
                  <ChevronDown className={`w-3 h-3 ml-auto transition-transform ${expandedSections.includes("myReports") ? "rotate-180" : ""}`} />
                </button>
                {expandedSections.includes("myReports") && (
                  <div className="space-y-0.5">
                    <div className="sidebar-nav-item pl-6">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Emails received</span>
                    </div>
                    <div className="sidebar-nav-item pl-6">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Deal duration</span>
                    </div>
                    <div className="sidebar-nav-item pl-6 text-primary">
                      <Plus className="w-4 h-4" />
                      <span className="text-sm font-medium">New report</span>
                    </div>
                    <div className="sidebar-nav-item pl-6">
                      <BarChart3 className="w-4 h-4" />
                      <span className="text-sm">Analytics</span>
                      <span className="ml-auto w-5 h-5 rounded-md bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-medium">7</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Manage Folders */}
          <div className="sidebar-nav-item mt-4">
            <Folder className="w-4 h-4" />
            <span className="text-sm">Manage folders</span>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
