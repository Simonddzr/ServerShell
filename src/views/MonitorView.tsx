import { RefreshCw, Terminal, Copy, ArrowDownLeft, ArrowUpRight, X } from 'lucide-react';

const CircularGauge = ({ value, max, colorClass, size = 192, strokeWidth = 12, label, sublabel }: any) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / max) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90 transform">
        <circle
          className="text-surface-container-highest"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={colorClass}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-bold font-sans text-on-surface">{label}</span>
        {sublabel && <span className="text-[10px] font-mono uppercase text-on-surface-variant tracking-widest mt-1">{sublabel}</span>}
      </div>
    </div>
  );
};

const Sparkline = ({ data, colorClass }: { data: number[], colorClass: string }) => (
  <div className="w-24 h-8 flex items-end gap-0.5">
    {data.map((val, i) => (
      <div key={i} className={`flex-1 ${colorClass} rounded-t-sm`} style={{ height: `${val}%` }}></div>
    ))}
  </div>
);

export function MonitorView() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto space-y-6 pb-32">
      {/* Server Context Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_12px_rgba(105,246,184,0.5)]"></span>
            <h1 className="text-2xl font-bold tracking-tight text-on-surface font-sans">Web-Prod-01</h1>
          </div>
          <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest">Instance ID: i-0f822a199b7c845</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-highest px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-surface-bright transition-colors">
            <RefreshCw size={16} />
            RESTART
          </button>
          <button className="bg-gradient-to-br from-primary to-primary-dim px-4 py-2 rounded-xl text-on-primary text-sm font-bold flex items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-primary/20">
            <Terminal size={16} />
            OPEN SHELL
          </button>
        </div>
      </section>

      {/* Bento Grid: Overview & Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Overview Info (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-surface-container-low p-6 rounded-2xl">
            <h3 className="text-on-surface-variant font-mono text-[10px] uppercase tracking-wider mb-4">System Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Uptime</span>
                <span className="font-mono text-sm font-bold text-secondary">24d 14h 02m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">OS Version</span>
                <span className="font-mono text-sm text-on-surface">Ubuntu 22.04.3 LTS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Public IP</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-on-surface">192.168.1.104</span>
                  <Copy size={14} className="text-outline cursor-pointer hover:text-on-surface" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Region</span>
                <span className="font-mono text-sm text-on-surface">us-east-1a</span>
              </div>
            </div>
          </div>

          {/* Disk Usage */}
          <div className="bg-surface-container-low p-6 rounded-2xl">
            <h3 className="text-on-surface-variant font-mono text-[10px] uppercase tracking-wider mb-4">Storage Mounts</h3>
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-on-surface">/ (root)</span>
                  <span className="text-on-surface-variant">45% of 500GB</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[45%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-on-surface">/mnt/data</span>
                  <span className="text-on-surface-variant">82% of 2TB</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[82%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CPU Circular Gauge (4 cols) */}
        <div className="md:col-span-4 bg-surface-container-low p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
          <h3 className="text-on-surface-variant font-mono text-[10px] uppercase tracking-wider mb-6 self-start">Global CPU Load</h3>
          <CircularGauge value={38.4} max={100} colorClass="text-primary" label="38.4%" sublabel="ACTIVE" />
          
          <div className="mt-8 grid grid-cols-4 gap-2 w-full">
            <div className="h-12 bg-surface-container-highest rounded-md flex items-end p-1">
              <div className="w-full bg-primary/40 rounded-sm" style={{ height: '60%' }}></div>
            </div>
            <div className="h-12 bg-surface-container-highest rounded-md flex items-end p-1">
              <div className="w-full bg-primary/40 rounded-sm" style={{ height: '30%' }}></div>
            </div>
            <div className="h-12 bg-surface-container-highest rounded-md flex items-end p-1">
              <div className="w-full bg-primary/40 rounded-sm" style={{ height: '85%' }}></div>
            </div>
            <div className="h-12 bg-surface-container-highest rounded-md flex items-end p-1">
              <div className="w-full bg-primary/40 rounded-sm" style={{ height: '45%' }}></div>
            </div>
          </div>
          <div className="w-full mt-2 flex justify-between text-[8px] font-mono text-outline uppercase tracking-tighter">
            <span>Core 0</span>
            <span>Core 1</span>
            <span>Core 2</span>
            <span>Core 3</span>
          </div>
        </div>

        {/* Memory & Network (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          {/* Memory Ring */}
          <div className="bg-surface-container-low p-6 rounded-2xl flex items-center gap-6">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full -rotate-90">
                <circle className="text-surface-container-highest" cx="40" cy="40" fill="transparent" r="32" strokeWidth="8"></circle>
                <circle className="text-secondary" cx="40" cy="40" fill="transparent" r="32" strokeWidth="8" strokeDasharray="201" strokeDashoffset="180" strokeLinecap="round" stroke="currentColor"></circle>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold font-mono">8%</span>
            </div>
            <div>
              <h3 className="text-on-surface-variant font-mono text-[10px] uppercase tracking-wider mb-1">Memory Usage</h3>
              <p className="text-lg font-bold font-sans text-on-surface">17.2<span className="text-xs text-on-surface-variant"> / 200 GB</span></p>
              <p className="text-[10px] text-secondary font-mono mt-1">SWAP: 1.2 GB utilized</p>
            </div>
          </div>

          {/* Network Sparklines */}
          <div className="bg-surface-container-low p-6 rounded-2xl">
            <h3 className="text-on-surface-variant font-mono text-[10px] uppercase tracking-wider mb-4">Network Throughput</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-[10px] text-on-surface-variant uppercase font-mono">
                    <ArrowDownLeft size={12} className="text-secondary" /> Download
                  </div>
                  <div className="text-lg font-bold font-mono">412 <span className="text-[10px] font-normal text-outline">Mbps</span></div>
                </div>
                <Sparkline data={[30, 50, 40, 70, 90, 60]} colorClass="bg-secondary/40" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-[10px] text-on-surface-variant uppercase font-mono">
                    <ArrowUpRight size={12} className="text-primary" /> Upload
                  </div>
                  <div className="text-lg font-bold font-mono">84.2 <span className="text-[10px] font-normal text-outline">Mbps</span></div>
                </div>
                <Sparkline data={[20, 25, 22, 18, 30, 24]} colorClass="bg-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Density Process List */}
      <section className="bg-surface-container-low rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-outline-variant/15 flex items-center justify-between">
          <h3 className="text-on-surface-variant font-mono text-[10px] uppercase tracking-wider">Top Processes</h3>
          <div className="flex gap-4">
            <span className="text-[10px] font-mono text-outline flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> CPU</span>
            <span className="text-[10px] font-mono text-outline flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> MEM</span>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-high/50">
              <tr>
                <th className="px-6 py-3 text-[10px] font-mono text-outline uppercase">PID</th>
                <th className="px-6 py-3 text-[10px] font-mono text-outline uppercase">Process Name</th>
                <th className="px-6 py-3 text-[10px] font-mono text-outline uppercase">User</th>
                <th className="px-6 py-3 text-[10px] font-mono text-outline uppercase text-right">CPU %</th>
                <th className="px-6 py-3 text-[10px] font-mono text-outline uppercase text-right">MEM %</th>
                <th className="px-6 py-3 text-[10px] font-mono text-outline uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15">
              {[
                { pid: '12482', name: 'nginx: worker process', user: 'www-data', cpu: '12.4%', mem: '4.2%' },
                { pid: '8921', name: 'node server.js', user: 'root', cpu: '8.1%', mem: '1.8%' },
                { pid: '1503', name: 'postgres: writer', user: 'postgres', cpu: '4.0%', mem: '12.9%' },
                { pid: '22104', name: 'redis-server *:6379', user: 'redis', cpu: '1.2%', mem: '6.4%' },
                { pid: '31122', name: '/usr/bin/python3', user: 'admin', cpu: '0.8%', mem: '0.4%' },
              ].map((proc, i) => (
                <tr key={proc.pid} className={`hover:bg-surface-container-highest/30 transition-colors ${i % 2 !== 0 ? 'bg-surface-container-highest/10' : ''}`}>
                  <td className="px-6 py-4 font-mono text-sm text-primary">{proc.pid}</td>
                  <td className="px-6 py-4 font-sans text-sm font-semibold">{proc.name}</td>
                  <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">{proc.user}</td>
                  <td className="px-6 py-4 font-mono text-sm text-right text-on-surface">{proc.cpu}</td>
                  <td className="px-6 py-4 font-mono text-sm text-right text-on-surface">{proc.mem}</td>
                  <td className="px-6 py-4 text-right">
                    <X size={16} className="text-outline cursor-pointer hover:text-error transition-colors ml-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
