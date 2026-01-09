const WorkWithPlatforms = () => {
  const platforms = [
    { name: "Dribbble", icon: "🏀", percentage: "45.3%", value: "$71,048" },
    { name: "Instagram", icon: "📷", percentage: "", value: "$44,072", extra: "9.4%", extraValue: "$8,408" },
    { name: "Google", icon: "G", percentage: "", value: "", extra: "7.1%", extraValue: "$11,312" },
    { name: "Other", icon: "○", percentage: "", value: "", extra: "", extraValue: "" },
  ];

  return (
    <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="text-sm text-muted-foreground mb-3">Work with platforms</div>
      
      <div className="flex items-center gap-4 mb-4">
        {platforms.map((platform, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded flex items-center justify-center text-xs">
              {platform.icon}
            </div>
            <span className="text-xs text-muted-foreground">{platform.name}</span>
          </div>
        ))}
      </div>

      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-2xl font-bold">45.3%</span>
        <span className="text-lg text-muted-foreground">$71,048</span>
      </div>

      {/* Platform breakdown */}
      <div className="flex gap-4 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-pink-400" />
          <span className="text-muted-foreground">Instagram</span>
          <span>$44,072</span>
          <span className="text-emerald-500">9.4%</span>
          <span className="text-muted-foreground">$8,408</span>
        </div>
      </div>
    </div>
  );
};

export default WorkWithPlatforms;
