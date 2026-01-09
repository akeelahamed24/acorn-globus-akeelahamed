import {
  Star,
  RotateCcw,
  ChevronDown,
  MessageCircle,
  Settings,
  Folder,
  Plus,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState({
    shared: true,
    reportsShared: true,
    myReports: true,
  });

  const toggle = (key: keyof typeof open) =>
    setOpen((p) => ({ ...p, [key]: !p[key] }));

  // Base item (now medium weight)
  const item =
    "flex items-center gap-2 h-8 px-2 rounded-md text-[12px] font-medium text-neutral-700 hover:bg-neutral-100 transition";

  // Section headers
  const strongItem = `${item} text-neutral-900 font-semibold`;

  // Active item
  const activeStrong = "bg-neutral-100 text-neutral-900 font-semibold";

  // Tree styles
  const treeGroup = "ml-3 space-y-0.5 border-l border-neutral-300";
  const treeItem =
    "relative pl-7 font-medium before:absolute before:left-3 before:top-1/2 before:w-2 before:h-px before:bg-neutral-400";

  return (
    <aside className="flex h-screen w-[320px] bg-transparent">
      {/* ICON BAR */}
      <div className="w-14 flex flex-col items-center py-4">
        <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-semibold mb-6">
          C
        </div>

        <div className="flex flex-col gap-3">
          {[
            "/icon-1.png",
            "/icon-2.png",
            "/icon-3.png",
            "/icon-4.png",
            "/icon-5.png",
          ].map((src, i) => (
            <button
              key={i}
              className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ${
                i === 1 ? "ring-2 ring-rose-500/40" : "hover:bg-black/5"
              }`}
            >
              <img
                src={src}
                alt={`icon-${i}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="mt-auto flex flex-col items-center gap-3 pb-2">
          <button className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5">
            <MessageCircle className="w-4 h-4 text-neutral-500" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />

          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5">
            <Settings className="w-4 h-4 text-neutral-500" />
          </button>
        </div>
      </div>

      {/* MAIN SIDEBAR */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="h-12 px-4 flex items-center gap-2">
          <span className="text-[15px] font-bold text-neutral-900">
            Codename.com
          </span>
          <ChevronDown className="w-4 h-4 text-neutral-500" />
        </div>

        <nav className="flex-1 px-3 py-2 overflow-y-auto scrollbar-hide">
          {/* TOP */}
          <div className="space-y-1">
            <div className={`${item} text-gray-500`}>
              <Star className="w-3.5 h-3.5" /> Starred
            </div>

            <div className={`${item} text-gray-500`}>
              <RotateCcw className="w-3.5 h-3.5" /> Recent
            </div>

            <div className={strongItem}>Sales list</div>
            <div className={strongItem}>Goals</div>

            <div className={`${item} ${activeStrong}`}>
              Dashboard
              <Plus className="ml-auto w-3.5 h-3.5 text-neutral-500" />
            </div>
          </div>

          {/* DASHBOARD TREE */}
          <div className={treeGroup}>
            <div className={`${item} font-semibold`}>Codename</div>

            <button onClick={() => toggle("shared")} className={`${item} font-semibold`}>
              Shared with me
              <ChevronDown
                className={`ml-auto w-3.5 h-3.5 transition ${
                  open.shared ? "rotate-180" : ""
                }`}
              />
            </button>

            {open.shared && (
              <div className={treeGroup}>
                <div className={`${item} ${treeItem}`}>Cargo2go</div>

                <div className={`${item} ${treeItem}`}>
                  Cloudz3r
                  <span className="ml-auto min-w-[18px] h-[18px] rounded-md bg-rose-500 text-white text-[9px] flex items-center justify-center font-semibold">
                    2
                  </span>
                </div>

                <div className={`${item} ${treeItem}`}>Idioma</div>
                <div className={`${item} ${treeItem}`}>Syllabites</div>
                <div className={`${item} ${treeItem}`}>x-0b</div>
              </div>
            )}
          </div>

          {/* REPORTS */}
          <div className={strongItem}>
            Reports
            <Plus className="ml-auto w-3.5 h-3.5 text-neutral-500" />
          </div>

          <div className={treeGroup}>
            <button
              onClick={() => toggle("reportsShared")}
              className={`${item} font-semibold`}
            >
              Share with me
              <ChevronDown
                className={`ml-auto w-3.5 h-3.5 transition ${
                  open.reportsShared ? "rotate-180" : ""
                }`}
              />
            </button>

            {open.reportsShared && (
              <div className={treeGroup}>
                <div className={`${item} ${treeItem}`}>Deals by user</div>
                <div className={`${item} ${treeItem}`}>Deal duration</div>
              </div>
            )}

            <button
              onClick={() => toggle("myReports")}
              className={`${item} font-semibold`}
            >
              My reports
              <ChevronDown
                className={`ml-auto w-3.5 h-3.5 transition ${
                  open.myReports ? "rotate-180" : ""
                }`}
              />
            </button>

            {open.myReports && (
              <div className={treeGroup}>
                <div className={`${item} ${treeItem}`}>Emails received</div>
                <div className={`${item} ${treeItem}`}>Deal duration</div>

                <div className={`${item} ${treeItem} text-rose-600 font-semibold`}>
                  New report
                </div>

                <div className={`${item} ${treeItem}`}>
                  Analytics
                  <span className="ml-auto min-w-[20px] h-[20px] rounded-md bg-rose-500 text-white text-[9px] flex items-center justify-center font-semibold">
                    7
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4">
            <div className={`${item} font-semibold`}>
              <Folder className="w-3.5 h-3.5 text-neutral-500" />
              Manage folders
            </div>
          </div>
        </nav>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
