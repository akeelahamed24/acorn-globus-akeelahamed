import { Search, Menu, Plus } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-14 bg-transparent flex items-center justify-between px-3 sm:px-6 gap-3">
      
      {/* Mobile menu button */}
      <button 
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-full hover:bg-white/50"
      >
        <Menu className="w-5 h-5 text-gray-800" />
      </button>
      
      <div className="flex-1 max-w-xl">
        <div className="flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-2 shadow-sm">
          <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder='Try searching "insights"'
            className="bg-transparent text-sm text-gray-700 outline-none w-full placeholder:text-gray-400 min-w-0"
          />
        </div>
      </div>


      {/* Right actions */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        
        {/* Curved container for Menu + Profile - hide menu on mobile since we have sidebar toggle */}
        <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-full px-2 sm:px-3 py-1.5 shadow-sm">
          <button className="p-1 hidden sm:block">
            <Menu className="w-5 h-5 text-gray-800" />
          </button>

          {/* Profile image */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Plus button (separate) */}
        <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f43f5e] flex items-center justify-center flex-shrink-0">
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
