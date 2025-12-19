import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'table' | 'schema' | 'node' | 'elephant';
}

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const nodes: Node[] = [
    { id: 1, x: 10, y: 15, size: 60, type: 'table' },
    { id: 2, x: 85, y: 25, size: 50, type: 'schema' },
    { id: 3, x: 20, y: 60, size: 45, type: 'node' },
    { id: 4, x: 75, y: 70, size: 55, type: 'table' },
    { id: 5, x: 50, y: 40, size: 70, type: 'elephant' },
    { id: 6, x: 35, y: 85, size: 40, type: 'node' },
    { id: 7, x: 90, y: 50, size: 35, type: 'schema' },
    { id: 8, x: 5, y: 45, size: 30, type: 'node' },
  ];

  const connections = [
    { from: 1, to: 5 },
    { from: 2, to: 5 },
    { from: 3, to: 5 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 5, to: 7 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
  ];

  const getNodePosition = (id: number) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  const TableIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="opacity-30">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      <line x1="9" y1="9" x2="9" y2="21" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    </svg>
  );

  const SchemaIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="opacity-25">
      <rect x="2" y="4" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      <rect x="14" y="4" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      <rect x="8" y="14" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      <path d="M6 10V12H12V14" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      <path d="M18 10V12H12V14" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    </svg>
  );

  const NodeIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="opacity-20">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      <circle cx="12" cy="12" r="3" fill="currentColor" className="text-primary opacity-50" />
    </svg>
  );

  const ElephantIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="opacity-15">
      <path 
        d="M70 30C70 30 85 35 85 55C85 75 70 80 50 80C30 80 15 75 15 55C15 35 30 25 50 25C50 25 45 15 55 15C65 15 70 30 70 30Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="text-primary"
      />
      <circle cx="35" cy="45" r="4" fill="currentColor" className="text-primary opacity-60" />
      <path d="M25 55C25 55 15 60 15 75" stroke="currentColor" strokeWidth="2" className="text-primary" />
    </svg>
  );

  const renderNode = (node: Node) => {
    const icons = {
      table: TableIcon,
      schema: SchemaIcon,
      node: NodeIcon,
      elephant: ElephantIcon,
    };
    const Icon = icons[node.type];
    return <Icon size={node.size} />;
  };

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, i) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.line
              key={i}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="hsl(var(--line-color))"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Floating nodes with parallax */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute animate-float"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            y: i % 3 === 0 ? y1 : i % 3 === 1 ? y2 : y3,
            animationDelay: `${i * 0.5}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
        >
          {renderNode(node)}
        </motion.div>
      ))}

      {/* Additional floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
