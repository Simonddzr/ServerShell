import { Database, Activity, Terminal, Code, Settings } from 'lucide-react';

export type Tab = 'servers' | 'monitor' | 'terminal' | 'snippets' | 'settings';

interface BottomNavProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onChange }: BottomNavProps) {
  const navItems = [
    { id: 'servers', icon: Database, label: 'Servers' },
    { id: 'monitor', icon: Activity, label: 'Monitor' },
    { id: 'terminal', icon: Terminal, label: 'Terminal' },
    { id: 'snippets', icon: Code, label: 'Snippets' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ] as const;

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-slate-950/80 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      <div className="flex justify-around items-center h-20 px-4 w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`flex flex-col items-center justify-center transition-transform active:scale-90 ${
                isActive 
                  ? 'bg-primary/10 text-primary rounded-xl px-3 py-1' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon size={24} className="mb-1" />
              <span className="font-mono text-[10px] uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
