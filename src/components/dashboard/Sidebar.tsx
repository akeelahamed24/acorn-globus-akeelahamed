import { Home, Star, Clock, List, Target, LayoutDashboard, Users, Box, Hash, Type, FlaskConical, ChevronDown, Share2, FileText, BarChart3, Mail, Plus, Settings, Folder, ChevronRight } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["codename", "reports", "myReports"]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  return (
    <aside className="w-64 bg-sidebar h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">C</span>
        </div>
        <span className="text-sidebar-foreground font-semibold">Codename.com</span>
        <ChevronDown className="w-4 h-4 text-sidebar-muted ml-auto" />
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        <div className="nav-item">
          <Star className="w-4 h-4" />
          <span className="text-sm">Starred</span>
        </div>
        <div className="nav-item">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Recent</span>
        </div>
        <div className="nav-item">
          <List className="w-4 h-4" />
          <span className="text-sm">Sales list</span>
        </div>
        <div className="nav-item">
          <Target className="w-4 h-4" />
          <span className="text-sm">Goals</span>
        </div>
        <div className="nav-item nav-item-active">
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-sm">Dashboard</span>
        </div>

        {/* Codename Section */}
        <div className="pt-4">
          <button
            onClick={() => toggleSection("codename")}
            className="flex items-center gap-2 px-3 py-1.5 w-full text-sidebar-muted hover:text-sidebar-foreground transition-colors"
          >
            <ChevronRight className={`w-3 h-3 transition-transform ${expandedSections.includes("codename") ? "rotate-90" : ""}`} />
            <span className="text-xs font-medium uppercase tracking-wider">Codename</span>
          </button>
          {expandedSections.includes("codename") && (
            <div className="ml-3 space-y-0.5">
              <div className="nav-item">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Shared with me</span>
              </div>
              <div className="nav-item pl-8">
                <Box className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Cargo2go</span>
              </div>
              <div className="nav-item pl-8">
                <div className="w-4 h-4 rounded bg-primary flex items-center justify-center">
                  <span className="text-[8px] text-primary-foreground font-bold">C3</span>
                </div>
                <span className="text-sm">Cloudz3r</span>
                <span className="ml-auto w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">2</span>
              </div>
              <div className="nav-item pl-8">
                <Type className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Idioma</span>
              </div>
              <div className="nav-item pl-8">
                <Hash className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Syllabites</span>
              </div>
              <div className="nav-item pl-8">
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
            className="flex items-center gap-2 px-3 py-1.5 w-full text-sidebar-muted hover:text-sidebar-foreground transition-colors"
          >
            <ChevronRight className={`w-3 h-3 transition-transform ${expandedSections.includes("reports") ? "rotate-90" : ""}`} />
            <span className="text-xs font-medium uppercase tracking-wider">Reports</span>
          </button>
          {expandedSections.includes("reports") && (
            <div className="ml-3 space-y-0.5">
              <div className="nav-item">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share with me</span>
                <ChevronDown className="w-3 h-3 ml-auto" />
              </div>
              <div className="nav-item pl-8">
                <Users className="w-4 h-4" />
                <span className="text-sm">Deals by user</span>
              </div>
              <div className="nav-item pl-8">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Deal duration</span>
              </div>
              
              <button
                onClick={() => toggleSection("myReports")}
                className="nav-item"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">My reports</span>
                <ChevronDown className={`w-3 h-3 ml-auto transition-transform ${expandedSections.includes("myReports") ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.includes("myReports") && (
                <div className="space-y-0.5">
                  <div className="nav-item pl-8">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Emails received</span>
                  </div>
                  <div className="nav-item pl-8">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Deal duration</span>
                  </div>
                  <div className="nav-item pl-8 text-primary">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">New report</span>
                  </div>
                  <div className="nav-item pl-8">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm">Analytics</span>
                    <span className="ml-auto w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">7</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Manage Folders */}
        <div className="nav-item mt-4">
          <Folder className="w-4 h-4" />
          <span className="text-sm">Manage folders</span>
          <Plus className="w-4 h-4 ml-auto" />
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-sidebar-border">
        <div className="nav-item">
          <Settings className="w-4 h-4" />
        </div>
        <div className="nav-item">
          <Settings className="w-4 h-4" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
