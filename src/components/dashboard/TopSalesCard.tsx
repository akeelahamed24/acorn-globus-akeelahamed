import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TopSalesCard = () => {
  return (
    <div className="bg-card rounded-xl p-4 card-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <span className="text-sm text-muted-foreground">Top sales</span>
      <div className="flex items-center gap-3 mt-2">
        <span className="text-3xl font-bold">72</span>
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-amber-100 text-amber-700 text-xs font-medium">M</AvatarFallback>
        </Avatar>
        <span className="text-sm text-muted-foreground">Mikass</span>
      </div>
    </div>
  );
};

export default TopSalesCard;
