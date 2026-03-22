import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { BottomNav, Tab } from './components/BottomNav';
import { MonitorView } from './views/MonitorView';
import { SnippetsView } from './views/SnippetsView';
import { ServersView } from './views/ServersView';
import { TerminalView } from './views/TerminalView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('monitor');

  const renderView = () => {
    switch (activeTab) {
      case 'monitor':
        return <MonitorView />;
      case 'snippets':
        return <SnippetsView />;
      case 'servers':
        return <ServersView />;
      case 'terminal':
        return <TerminalView />;
      default:
        return (
          <div className="flex items-center justify-center h-full pt-24">
            <p className="text-on-surface-variant">View under construction</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary/30 flex flex-col">
      <TopBar showSearch={activeTab === 'snippets' || activeTab === 'servers'} />
      
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full overflow-y-auto"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>

      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
