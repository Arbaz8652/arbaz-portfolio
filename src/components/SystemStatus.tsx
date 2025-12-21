import { getSystemStatus } from '@/lib/data';
import { motion } from 'framer-motion';
import { Activity, Database, Server } from 'lucide-react';

const SystemStatus = () => {
  const SystemStatus = getSystemStatus()
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40 hidden lg:flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
        </span>
        <span className="text-xs text-muted-foreground font-mono">System Status</span>
      </div>
      
      <div className="h-4 w-px bg-border" />
      
      <div className="flex items-center gap-3 text-xs font-mono">
        <div className="flex items-center gap-1 text-success">
          <Server size={12} />
          <span>APIs</span>
        </div>
        <div className="flex items-center gap-1 text-success">
          <Database size={12} />
          <span>DB</span>
        </div>
        <div className="flex items-center gap-1 text-success">
          <Activity size={12} />
          <span>99.9%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemStatus;
