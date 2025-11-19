import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowRight } from 'lucide-react';
import TerminalWindow from './ui/TerminalWindow';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g codin');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 md:pt-48 pb-20 px-6 flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-5xl mx-auto mb-16 z-20 relative"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-primary mb-8 backdrop-blur-sm shadow-xl shadow-primary/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="tracking-wide">POWERED BY CODIN ENGINE</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
          Your Engineering Team <br />
          lives in your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Terminal</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Orchestrate <strong>Codin™</strong> autonomous agents to architect, code, and deploy.
          <br className="hidden md:block" /> No context switching. Just pure shipping.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <button 
            onClick={handleCopy}
            className="group relative flex items-center justify-between px-6 py-4 bg-obsidian/50 hover:bg-white/[0.03] border border-white/10 hover:border-primary/30 rounded-xl transition-all duration-300 font-mono text-sm text-gray-300 w-full backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="text-primary">$</span> 
              npm install -g codin
            </div>
            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
          </button>
          
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98] w-full flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
            Start Building
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      {/* 3D Perspective Terminal */}
      <div className="relative w-full max-w-4xl perspective-1000 group z-10">
        <motion.div
          initial={{ rotateX: 15, opacity: 0, scale: 0.9, y: 50 }}
          animate={{ rotateX: 5, opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full transform-style-3d relative will-change-transform"
        >
           <TerminalWindow className="h-[400px] md:h-[480px] w-full shadow-[0_20px_80px_-20px_rgba(59,130,246,0.15)] bg-[#050505]/80 backdrop-blur-md border border-white/[0.08] group-hover:border-primary/20 transition-colors duration-500">
              <div className="flex flex-col gap-3 font-mono text-sm md:text-base p-2">
                <div className="flex items-center gap-2 text-gray-400 pb-4">
                  <span className="text-green-500">➜</span>
                  <span className="text-blue-400">~</span>
                  <span>codin architect "Create a SaaS dashboard with Next.js"</span>
                </div>
                
                <div className="space-y-1">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-3 text-blue-300/90"
                  >
                    <span className="text-blue-500 font-bold">[Codin Architect]</span> 
                    <span>Analyzing requirements & generating system blueprint...</span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 1.5 }}
                    className="pl-4 py-2 border-l border-white/10 ml-1.5 text-xs text-gray-500"
                  >
                     ⠋ Parsing context from 14 files...
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3 }}
                    className="flex gap-3 text-green-300/90 mt-4"
                  >
                    <span className="text-green-500 font-bold">[Codin Builder]</span> 
                    <span>Scaffolding Next.js 14 App Router structure...</span>
                  </motion.div>
                  
                   <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2 }}
                    className="pl-4 text-gray-400 text-xs ml-1.5 grid grid-cols-1 md:grid-cols-2 gap-2 opacity-80"
                  >
                    <span className="text-green-400/60">+ create src/app/layout.tsx</span>
                    <span className="text-green-400/60">+ create src/components/Sidebar.tsx</span>
                    <span className="text-green-400/60">+ create src/lib/supabase.ts</span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 5 }}
                    className="flex gap-3 text-purple-300/90 mt-4"
                  >
                    <span className="text-purple-500 font-bold">[Codin QA]</span> 
                    <span>Fixing 2 security vulnerabilities in middleware.ts</span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 6.5 }}
                    className="mt-6 flex items-center gap-2"
                  >
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>_</span>
                  </motion.div>
                </div>
              </div>
           </TerminalWindow>
           
           {/* Reflection/Glow Effect */}
           <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-xl blur-2xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;