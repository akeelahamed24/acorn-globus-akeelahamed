import { Search, Menu, Plus, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="h-14 bg-card/80 backdrop-blur-sm flex items-center justify-between px-6 border-b border-border/50">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
          <span className="text-background font-bold text-sm">C</span>
        </div>
        <span className="text-foreground font-medium text-sm">Codename.com</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Center - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder='Try searching "insights"'
            className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Menu className="w-5 h-5 text-muted-foreground" />
        </button>
        
        {/* Gradient Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400" />
        
        {/* Add Button */}
        <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
          <Plus className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
