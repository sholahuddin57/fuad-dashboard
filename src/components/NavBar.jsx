import { useDashboardStore } from '../store/useDashboardStore';

function Navbar() {
  // Kita tarik state dari gudang Zustand
  const pinnedActivities = useDashboardStore((state) => state.pinnedActivities);

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex justify-between items-center transition-all">
      <div className="text-amber-500 font-bold tracking-widest text-lg">
        FUAD<span className="text-neutral-200">.DEV</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm font-mono text-neutral-400">
        <span>📌 Pinned Moments:</span>
        <span className="bg-amber-500 text-neutral-900 px-2 py-0.5 rounded font-bold">
          {pinnedActivities.length}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;