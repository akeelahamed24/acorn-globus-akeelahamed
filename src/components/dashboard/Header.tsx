import { Search, Menu, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="h-14 bg-transparent flex items-center justify-between px-6">
      
      <div className="w-full max-w-xl">
  <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
    <Search className="w-4 h-4 text-gray-400" />
    <input
      type="text"
      placeholder='Try searching "insights"'
      className="bg-transparent text-sm text-gray-700 outline-none w-full placeholder:text-gray-400"
    />
  </div>
</div>


      {/* Right actions */}
      <div className="flex items-center gap-3">
        
        {/* Curved container for Menu + Profile */}
        <div className="flex items-center gap-3 bg-white rounded-full px-3 py-1.5 shadow-sm">
          <button className="p-1">
            <Menu className="w-5 h-5 text-gray-800" />
          </button>

          {/* Profile image */}
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Plus button (separate) */}
        <button className="w-8 h-8 rounded-full bg-[#f43f5e] flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
