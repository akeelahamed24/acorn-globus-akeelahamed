import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Info } from "lucide-react";

const BestDealCard = () => {
  return (
    <div className="bg-card rounded-xl p-4 card-shadow animate-fade-in" style={{ animationDelay: "0.15s" }}>
      <div className="flex items-center gap-1">
        <span className="text-sm text-muted-foreground">Best deal</span>
      </div>
      <div className="flex items-center gap-3 mt-2">
        <span className="text-3xl font-bold">$42,300</span>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-rose-100 text-rose-700 text-xs font-medium">R</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">Rolf Inc.</span>
          <Info className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default BestDealCard;
