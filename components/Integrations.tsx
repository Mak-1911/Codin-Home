import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Cloud, MessageSquare, Terminal, Triangle, Box, Database } from 'lucide-react';
import clsx from 'clsx';

// Define the ecosystem nodes with brand colors
const nodes = [
  { id: 'github', icon: Github, label: 'GitHub', x: 20, y: 25, color: '#ffffff' },
  { id: 'aws', icon: Cloud, label: 'AWS', x: 80, y: 20, color: '#FF9900' },
  { id: 'vercel', icon: Triangle, label: 'Vercel', x: 75, y: 80, color: '#000000', iconColor: '#ffffff' }, // Vercel black bg, white icon
  { id: 'slack', icon: MessageSquare, label: 'Slack', x: 25, y: 75, color: '#E01E5A' },
  { id: 'linear', icon: Box, label: 'Linear', x: 50, y: 15, color: '#5E6AD2' },
  { id: 'supabase', icon: Database, label: 'Supabase', x: 85, y: 50, color: '#3ECF8E' },
];

const Integrations: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="integrations" className="relative py-32 overflow-hidden min-h-[800px] bg-obsidian flex items-center justify-center">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

      <div className="relative w-full max-w-6xl h-[600px] z-10 px-4">

        {/* SVG Layer for Connections & Particles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {nodes.map((node, i) => {
                 const isHovered = hoveredNode === node.id;
                 return (
                    <g key={node.id}>
                        {/* Base Static Line */}
                        <line
                            x1="50%" y1="50%"
                            x2={`${node.x}%`} y2={`${node.y}%`}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />

                        {/* Active Hover Line - Brand Colored Beam */}
                        <motion.line
                            x1="50%" y1="50%"
                            x2={`${node.x}%`} y2={`${node.y}%`}
                            stroke={node.color}
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                                pathLength: isHovered ? 1 : 0, 
                                opacity: isHovered ? 0.6 : 0 
                            }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                        />

                        {/* Constant Background Traffic - Optimized SVG Particles */}
                        <motion.circle
                            r="2"
                            fill="#3B82F6"
                            style={{ filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.8))' }}
                            initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                            animate={{ 
                                cx: ["50%", `${node.x}%`], 
                                cy: ["50%", `${node.y}%`],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Active High-Speed Packets on Hover - Optimized SVG Particles */}
                        {isHovered && (
                            <>
                                <motion.circle
                                    r="3"
                                    fill={node.color}
                                    initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                                    animate={{ 
                                        cx: ["50%", `${node.x}%`], 
                                        cy: ["50%", `${node.y}%`],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.circle
                                    r="3"
                                    fill={node.color}
                                    initial={{ cx: `${node.x}%`, cy: `${node.y}%`, opacity: 0 }}
                                    animate={{ 
                                        cx: [`${node.x}%`, "50%"], 
                                        cy: [`${node.y}%`, "50%"],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 0.8, delay: 0.4, repeat: Infinity, ease: "linear" }}
                                />
                            </>
                        )}
                    </g>
                 )
            })}
        </svg>
        
        {/* Central Hub (Codin Core) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
             <motion.div 
               className="relative w-24 h-24 flex items-center justify-center will-change-transform"
               whileHover={{ scale: 1.05 }}
             >
                {/* Reactor Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-slow will-change-[opacity]" />
                
                {/* Spinning Rings - Outer */}
                <motion.div 
                    className="absolute inset-[-16px] border border-white/5 border-t-primary/30 rounded-full will-change-transform"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                 {/* Spinning Rings - Inner */}
                 <motion.div 
                    className="absolute inset-[-8px] border border-white/5 border-b-primary/50 rounded-full will-change-transform"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Core Hub Body */}
                <div className="w-full h-full bg-[#050505] rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                    
                    {/* Inner Pulse */}
                    <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping" style={{ animationDuration: '3s' }} />

                    <Terminal className="text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" size={32} />
                </div>
             </motion.div>

             {/* Hub Label */}
             <div className="absolute top-full mt-8 left-1/2 -translate-x-1/2 w-48 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                    </span>
                    <span className="text-[10px] font-bold text-primary tracking-wider uppercase">Codin Core</span>
                </div>
            </div>
        </div>

        {/* Integration Nodes */}
        {nodes.map((node) => (
            <div
                key={node.id}
                className="absolute z-20"
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
            >
                 <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={clsx(
                        "relative group cursor-pointer flex flex-col items-center will-change-transform",
                        hoveredNode && hoveredNode !== node.id && "opacity-30 blur-[1px] transition-all duration-300"
                    )}
                 >
                    {/* Icon Container */}
                    <div 
                        className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-xl relative overflow-hidden transition-all duration-300"
                        style={{ 
                            borderColor: hoveredNode === node.id ? node.color : 'rgba(255,255,255,0.1)',
                            boxShadow: hoveredNode === node.id ? `0 0 30px -5px ${node.color}40` : 'none'
                        }}
                    >
                        {/* Hover Background Glow */}
                        <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                            style={{ backgroundColor: node.color }} 
                        />
                        
                        <node.icon 
                            size={28} 
                            className="transition-colors duration-300 relative z-10"
                            style={{ color: hoveredNode === node.id ? (node.iconColor || node.color) : '#9ca3af' }}
                        />
                    </div>
                    
                    {/* Label */}
                    <motion.div 
                        className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        initial={{ y: -5 }}
                        whileInView={{ y: 0 }}
                    >
                        <span className="px-3 py-1 text-xs font-semibold bg-white/10 border border-white/10 rounded-full text-white backdrop-blur-md whitespace-nowrap">
                        {node.label}
                        </span>
                    </motion.div>
                 </motion.div>
            </div>
        ))}

      </div>
    </section>
  );
};

export default Integrations;