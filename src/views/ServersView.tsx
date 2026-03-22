import { Search, Terminal, Database, Code, GripHorizontal, ChevronRight, Cpu, Wifi, Plus } from 'lucide-react';

export function ServersView() {
  return (
    <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto relative min-h-full">
      {/* Search Bar */}
      <div className="mb-6 relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="text-on-surface-variant" size={18} />
        </div>
        <input 
          type="text" 
          placeholder="Search IP, name, or tags..." 
          className="w-full bg-surface-container-highest border-none rounded-xl py-3 pl-11 pr-4 text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/30 transition-all outline-none font-sans text-sm"
        />
      </div>

      {/* Section: Production */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-3 px-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">Production</h2>
          <span className="bg-secondary/20 text-secondary text-[10px] px-2 py-0.5 rounded-full font-mono">3 ACTIVE</span>
        </div>
        <div className="space-y-2">
          {/* Server Item 1 */}
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-200 cursor-pointer">
            <div className="flex items-center p-4 gap-4">
              <div className="flex flex-col items-center gap-1">
                <Terminal className="text-secondary" size={24} />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(105,246,184,0.6)]"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-on-surface">Web-Prod-01</h3>
                  <span className="font-mono text-xs text-on-surface-variant opacity-60">Ubuntu 22.04</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-xs text-primary">192.168.1.1</span>
                  <span className="text-outline text-[10px]">•</span>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant uppercase tracking-tighter">API</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant uppercase tracking-tighter">AWS</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-outline group-hover:translate-x-1 transition-transform" size={20} />
            </div>
          </div>

          {/* Server Item 2 */}
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-200 cursor-pointer border-l-2 border-transparent hover:border-primary/20">
            <div className="flex items-center p-4 gap-4">
              <div className="flex flex-col items-center gap-1">
                <Database className="text-secondary" size={24} />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(105,246,184,0.6)]"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-on-surface">DB-Cluster-Main</h3>
                  <span className="font-mono text-xs text-on-surface-variant opacity-60">Debian 12</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-xs text-primary">10.0.0.42</span>
                  <span className="text-outline text-[10px]">•</span>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant uppercase tracking-tighter">SQL</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant uppercase tracking-tighter">PRIMARY</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-outline" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Development */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-3 px-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">Development</h2>
          <span className="bg-surface-container-highest text-on-surface-variant text-[10px] px-2 py-0.5 rounded-full font-mono">1 STANDBY</span>
        </div>
        <div className="space-y-2">
          {/* Server Item 3 (Dev) */}
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-200 cursor-pointer">
            <div className="flex items-center p-4 gap-4">
              <div className="flex flex-col items-center gap-1">
                <Code className="text-tertiary" size={24} />
                <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-on-surface">Dev-Sandbox-01</h3>
                  <span className="font-mono text-xs text-on-surface-variant opacity-60">Alpine</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-xs text-primary">172.16.4.12</span>
                  <span className="text-outline text-[10px]">•</span>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant uppercase tracking-tighter">DOCKER</span>
                  </div>
                </div>
              </div>
              <GripHorizontal className="text-outline" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* System Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-surface-container-low p-4 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <Cpu size={80} />
          </div>
          <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-1">Global CPU</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-on-surface">14%</span>
            <span className="text-[10px] text-secondary mb-1">Normal</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-4 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <Wifi size={80} />
          </div>
          <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-1">Uptime</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-on-surface">99.9%</span>
            <span className="text-[10px] text-primary mb-1">Safe</span>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed right-6 bottom-24 z-40 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dim text-on-primary shadow-[0_10px_30px_rgba(100,94,251,0.4)] flex items-center justify-center active:scale-90 transition-transform duration-200">
        <Plus size={28} className="font-bold" />
      </button>
    </main>
  );
}
