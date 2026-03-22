import { X, Plus, ChevronUp, ChevronDown } from 'lucide-react';

export function TerminalView() {
  return (
    <main className="flex flex-col h-full bg-surface pt-16 pb-20">
      {/* Session Tabs */}
      <div className="flex items-center px-4 pt-4 gap-2 overflow-x-auto no-scrollbar bg-surface-container-low/40 shrink-0">
        {/* Active Tab */}
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-t-xl border-b-2 border-primary min-w-max">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface">Web-Prod-01</span>
          <X size={14} className="text-on-surface-variant ml-2 cursor-pointer" />
        </div>
        {/* Inactive Tab */}
        <div className="flex items-center gap-2 px-4 py-2 hover:bg-surface-container transition-colors rounded-t-xl min-w-max cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-outline"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">DB-Main</span>
          <X size={14} className="text-on-surface-variant ml-2" />
        </div>
        {/* Add Session */}
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
          <Plus size={18} />
        </button>
      </div>

      {/* Terminal Workspace */}
      <div className="flex-1 bg-surface-container-lowest p-6 font-mono text-sm leading-relaxed overflow-y-auto overflow-x-hidden selection:bg-primary/30">
        <div className="space-y-1">
          <p className="text-secondary opacity-80">Last login: Tue May 23 14:22:01 2024 from 192.168.1.45</p>
          <p className="text-on-surface-variant mt-2">admin@web-prod-01:~$ <span className="text-on-surface">uptime</span></p>
          <p className="text-on-surface"> 14:23:45 up 142 days, 14:21,  1 user,  load average: 0.08, 0.03, 0.01</p>
          
          <p className="text-on-surface-variant mt-4">admin@web-prod-01:~$ <span className="text-on-surface">tail -f /var/log/nginx/access.log</span></p>
          <div className="text-on-surface-variant space-y-0.5 mt-1">
            <p>172.67.141.22 - - [23/May/2024:14:23:48 +0000] "GET /api/v1/health HTTP/1.1" 200 45 "-" "UptimeRobot/2.0"</p>
            <p>104.21.23.211 - - [23/May/2024:14:23:51 +0000] "POST /webhook/stripe HTTP/1.1" 201 12 "-" "Stripe/1.0"</p>
            <p className="text-primary">172.67.141.22 - - [23/May/2024:14:23:55 +0000] "GET /static/css/main.css HTTP/1.1" 304 0 "-" "Mozilla/5.0"</p>
            <p>192.168.1.102 - - [23/May/2024:14:23:56 +0000] "GET /favicon.ico HTTP/1.1" 200 1150 "https://shell.internal/" "Mozilla/5.0"</p>
          </div>

          <p className="text-on-surface-variant mt-4">admin@web-prod-01:~$ <span className="text-on-surface">ls -la</span></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 text-on-surface-variant mt-1">
            <p>drwxr-xr-x  5 admin admin  4096 May 21 09:12 <span className="text-primary">.</span></p>
            <p>drwxr-xr-x 22 root  root   4096 Apr 12 11:30 <span className="text-primary">..</span></p>
            <p>-rw-------  1 admin admin 12455 May 23 14:22 <span className="text-secondary">.bash_history</span></p>
            <p>-rw-r--r--  1 admin admin   220 Apr 12 11:30 .bash_logout</p>
            <p>drwxr-xr-x  3 admin admin  4096 May 15 10:45 <span className="text-primary">src</span></p>
            <p>drwxr-xr-x  2 admin admin  4096 May 15 10:45 <span className="text-primary">configs</span></p>
          </div>

          <div className="mt-4 flex items-center">
            <span className="text-on-surface-variant">admin@web-prod-01:~$ </span>
            <span className="text-on-surface ml-2">sudo systemctl restart nginx</span>
            <span className="terminal-cursor"></span>
          </div>
        </div>
      </div>

      {/* Quick Commands Bar */}
      <div className="w-full px-4 py-2 bg-surface-container-lowest shrink-0 border-t border-outline-variant/10">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {['sudo systemctl', 'tail -f log', 'docker ps', 'htop', 'nano config'].map((cmd) => (
            <button key={cmd} className="bg-surface-bright text-primary text-xs font-mono px-3 py-1.5 rounded-lg whitespace-nowrap active:scale-95 transition-transform">
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Technical Keyboard Extension */}
      <div className="w-full bg-surface-container-highest border-t border-outline-variant/20 shrink-0">
        <div className="grid grid-cols-7 gap-1.5 p-2 h-14 max-w-2xl mx-auto">
          {['ESC', 'TAB', 'CTRL', 'ALT'].map((key) => (
            <button key={key} className="bg-surface-bright rounded-lg flex items-center justify-center text-on-surface font-mono text-xs shadow-sm active:bg-primary/20">
              {key}
            </button>
          ))}
          <div className="col-span-2 grid grid-cols-2 gap-1">
            <button className="bg-surface-bright rounded-lg flex items-center justify-center text-on-surface active:bg-primary/20">
              <ChevronUp size={16} />
            </button>
            <button className="bg-surface-bright rounded-lg flex items-center justify-center text-on-surface active:bg-primary/20">
              <ChevronDown size={16} />
            </button>
          </div>
          <button className="bg-primary/20 text-primary rounded-lg flex items-center justify-center font-mono text-xs font-bold active:scale-95 transition-transform">
            RUN
          </button>
        </div>
      </div>
    </main>
  );
}
