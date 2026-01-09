const PlatformBadges = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center gap-1.5 px-2 py-1 bg-card rounded-full card-shadow">
        <span className="text-sm">🏀</span>
        <span className="text-xs font-medium text-rose-500">+3</span>
        <span className="text-xs font-medium">$156,841</span>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 bg-card rounded-full card-shadow">
        <span className="text-sm">📷</span>
        <span className="text-xs text-muted-foreground">14.2%</span>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 bg-card rounded-full card-shadow">
        <span className="text-sm">G</span>
        <span className="text-xs text-muted-foreground">5.4%</span>
        <span className="text-xs text-muted-foreground">$8,408</span>
      </div>
    </div>
  );
};

export default PlatformBadges;
