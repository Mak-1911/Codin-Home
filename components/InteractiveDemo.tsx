import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Maximize2, Loader2, Check } from 'lucide-react';
import TerminalWindow from './ui/TerminalWindow';

const demoScript = [
  { text: "codin init --template next-ecommerce", color: "text-white", delay: 500 },
  { text: "[System] Initializing environment...", color: "text-gray-400", delay: 800 },
  { text: "[Architect] Analyzed market requirements.", color: "text-blue-400", delay: 1500 },
  { text: "[Coder] Generating src/app/products/page.tsx...", color: "text-green-400", delay: 2000 },
  { text: "[Coder] Generating src/components/Cart.tsx...", color: "text-green-400", delay: 2200 },
  { text: "[Reviewer] Verified accessibility compliance (100%).", color: "text-purple-400", delay: 3000 },
  { text: "[System] Building production bundle...", color: "text-gray-400", delay: 3500 },
  { text: "✓ Deployment Successful: https://codin-shop.vercel.app", color: "text-green-500 font-bold", delay: 4500 }
];

const InteractiveDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lines, setLines] = useState<{text: string, color: string}[]>([]);
  
  const runDemo = () => {
    setIsRunning(true);
    setLines([]);
    
    let currentTime = 0;
    
    demoScript.forEach((line) => {
      setTimeout(() => {
        setLines(prev => [...prev, { text: line.text, color: line.color }]);
        // Auto scroll to bottom
        const el = document.getElementById('demo-terminal-content');
        if(el) el.scrollTop = el.scrollHeight;
      }, line.delay);
      currentTime = Math.max(currentTime, line.delay);
    });

    setTimeout(() => {
      setIsRunning(false);
    }, currentTime + 1000);
  };

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">See it in Action</h2>
        <p className="text-gray-400 mb-8">No GUI. No drag-and-drop. Just power.</p>
        
        {!isExpanded && (
          <button 
            onClick={() => { setIsExpanded(true); setTimeout(runDemo, 500); }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-all"
          >
            <Play size={18} fill="currentColor" />
            Run Live Demo
          </button>
        )}
      </div>

      <AnimatePresence>
        {isExpanded ? (
          <motion.div 
            layoutId="demo-terminal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full max-w-6xl h-[80vh] relative">
              <TerminalWindow className="w-full h-full flex flex-col bg-obsidian border-primary/20" title="codin-live-demo">
                <div id="demo-terminal-content" className="flex-1 overflow-y-auto font-mono text-sm md:text-lg p-4 space-y-2">
                   {lines.map((line, idx) => (
                     <motion.div 
                       key={idx}
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       className={line.color}
                     >
                       <span className="opacity-50 mr-4 text-xs">{new Date().toLocaleTimeString()}</span>
                       {line.text}
                     </motion.div>
                   ))}
                   {isRunning && (
                     <div className="animate-pulse text-primary">_</div>
                   )}
                </div>
              </TerminalWindow>
              
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 px-4 py-2 bg-white/10 rounded-md text-sm hover:bg-white/20 transition-colors text-white z-50"
              >
                Close Demo
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="flex justify-center">
            <motion.div 
              layoutId="demo-terminal"
              className="w-full max-w-3xl h-64 relative cursor-pointer group"
              onClick={() => { setIsExpanded(true); setTimeout(runDemo, 500); }}
            >
               <TerminalWindow className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity border-white/5 group-hover:border-primary/30">
                  <div className="flex items-center justify-center h-full text-gray-500 gap-2">
                    <Maximize2 size={20} />
                    <span>Click to expand terminal</span>
                  </div>
               </TerminalWindow>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveDemo;