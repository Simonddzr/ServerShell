import { Server, Radio, Search, ArrowLeft } from 'lucide-react';

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  showSearch?: boolean;
}

export function TopBar({ title = "ServerShell", showBack = false, showSearch = false }: TopBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between px-6 h-16 w-full">
        <div className="flex items-center gap-3">
          {showBack && (
            <button className="text-on-surface-variant hover:bg-slate-800/50 p-2 rounded-xl transition-colors active:scale-95 duration-200">
              <ArrowLeft size={20} />
            </button>
          )}
          <div className="flex items-center gap-2">
            <Server className="text-primary" size={24} />
            <h1 className="text-xl font-bold bg-gradient-to-br from-primary to-primary-dim bg-clip-text text-transparent font-sans tracking-tight">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {showSearch && (
            <button className="text-slate-400 hover:bg-slate-800/50 p-2 rounded-xl transition-colors active:scale-95 duration-200">
              <Search size={20} />
            </button>
          )}
          <button className="text-slate-400 hover:bg-slate-800/50 p-2 rounded-xl transition-colors active:scale-95 duration-200">
            <Radio size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
}
