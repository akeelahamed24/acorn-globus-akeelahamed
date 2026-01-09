import { Search, Menu, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const users = [
    { name: "Armin A.", image: "", initials: "AA", color: "bg-amber-100 text-amber-700" },
    { name: "Eren Y.", image: "", initials: "EY", color: "bg-emerald-100 text-emerald-700" },
    { name: "Mikasa A.", image: "", initials: "MA", color: "bg-rose-100 text-rose-700" },
  ];

  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4 card-shadow">
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 w-64">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder='Try searching "insights"'
            className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* User Avatars */}
        <div className="flex items-center gap-2 bg-muted rounded-full px-2 py-1">
          {users.map((user, index) => (
            <div key={index} className="flex items-center gap-1.5 bg-card rounded-full px-2 py-1">
              <Avatar className="w-6 h-6">
                <AvatarImage src={user.image} />
                <AvatarFallback className={`text-xs font-medium ${user.color}`}>
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium">{user.name}</span>
            </div>
          ))}
          <Avatar className="w-6 h-6 bg-muted-foreground/20">
            <AvatarFallback className="text-xs text-muted-foreground">+3</AvatarFallback>
          </Avatar>
        </div>

        {/* Actions */}
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Menu className="w-5 h-5 text-muted-foreground" />
        </button>
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-amber-100 text-amber-700 text-sm font-medium">U</AvatarFallback>
        </Avatar>
        <button className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
          <Plus className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
