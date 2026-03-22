import { Search, Filter, Box, RotateCcw, Zap, Cpu, BarChart2, Copy, Play, Plus } from 'lucide-react';

export function SnippetsView() {
  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Action Header */}
      <section className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-sans tracking-tight text-on-surface">Command Snippets</h2>
          <p className="text-on-surface-variant text-sm mt-1">Execute pre-configured terminal sequences across your cluster.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
          <Plus size={20} />
          <span>New Snippet</span>
        </button>
      </section>

      {/* Search & Quick Filters */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-3 bg-surface-container-high rounded-xl flex items-center px-4 py-3 group focus-within:ring-2 focus-within:ring-primary/30 transition-all">
          <Search className="text-outline mr-3" size={20} />
          <input 
            type="text" 
            placeholder="Search commands or categories..." 
            className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline font-sans text-sm outline-none"
          />
        </div>
        <div className="bg-surface-container-high rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-surface-bright transition-colors group">
          <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">Filter By Date</span>
          <Filter className="text-outline" size={20} />
        </div>
      </section>

      {/* Category: Docker */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-2 w-2 rounded-full bg-secondary"></div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">Docker</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-low rounded-xl p-5 group hover:bg-surface-container transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <Box className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-on-surface">Prune Unused Images</h4>
                  <p className="text-[10px] font-mono text-outline uppercase tracking-wider">docker-core</p>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90 shadow-lg shadow-primary/5">
                <Play size={20} className="fill-current" />
              </button>
            </div>
            <div className="bg-surface-container-highest rounded-lg p-3 font-mono text-xs text-primary overflow-x-auto whitespace-nowrap">
              docker image prune -a --force --filter "until=24h"
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-5 group hover:bg-surface-container transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <RotateCcw className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-on-surface">Restart Stack</h4>
                  <p className="text-[10px] font-mono text-outline uppercase tracking-wider">orchestration</p>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90 shadow-lg shadow-primary/5">
                <Play size={20} className="fill-current" />
              </button>
            </div>
            <div className="bg-surface-container-highest rounded-lg p-3 font-mono text-xs text-primary overflow-x-auto whitespace-nowrap">
              docker-compose down && docker-compose up -d
            </div>
          </div>
        </div>
      </section>

      {/* Category: System */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-2 w-2 rounded-full bg-tertiary"></div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">System</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-low rounded-xl p-5 group hover:bg-surface-container transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <Zap className="text-tertiary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-on-surface">Restart Nginx</h4>
                  <p className="text-[10px] font-mono text-outline uppercase tracking-wider">network-ops</p>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90 shadow-lg shadow-primary/5">
                <Play size={20} className="fill-current" />
              </button>
            </div>
            <div className="bg-surface-container-highest rounded-lg p-3 font-mono text-xs text-primary overflow-x-auto whitespace-nowrap">
              sudo systemctl restart nginx
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-5 group hover:bg-surface-container transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <Cpu className="text-tertiary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-on-surface">Clear Cache</h4>
                  <p className="text-[10px] font-mono text-outline uppercase tracking-wider">maintenance</p>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90 shadow-lg shadow-primary/5">
                <Play size={20} className="fill-current" />
              </button>
            </div>
            <div className="bg-surface-container-highest rounded-lg p-3 font-mono text-xs text-primary overflow-x-auto whitespace-nowrap">
              sync; echo 3 | sudo tee /proc/sys/vm/drop_caches
            </div>
          </div>
        </div>
      </section>

      {/* Category: Logs */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">Logs</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-surface-container-low rounded-xl p-5 group hover:bg-surface-container transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <BarChart2 className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-on-surface">Tail Auth Logs</h4>
                  <p className="text-[10px] font-mono text-outline uppercase tracking-wider">security</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-xl bg-surface-container-highest text-outline flex items-center justify-center hover:text-on-surface transition-all active:scale-95">
                  <Copy size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90 shadow-lg shadow-primary/5">
                  <Play size={20} className="fill-current" />
                </button>
              </div>
            </div>
            <div className="bg-surface-container-highest rounded-lg p-3 font-mono text-xs text-primary overflow-x-auto whitespace-nowrap">
              tail -f /var/log/auth.log | grep "Failed password"
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
