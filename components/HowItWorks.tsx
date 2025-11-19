import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { FileJson, Layers, Database, Globe, Server, ShieldCheck, Zap, Bug } from 'lucide-react';

// --- Improved Illustrations ---

const ArchitectIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center bg-[#080808] border border-white/10 rounded-3xl overflow-hidden shadow-2xl group transform-gpu">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"></div>
      
      {/* Central Architect Core */}
      <div className="relative z-10">
         <motion.div 
           className="relative w-16 h-16 bg-black border border-blue-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] z-20 will-change-transform"
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           transition={{ type: "spring", duration: 0.8 }}
         >
            <Layers className="text-blue-400" size={32} />
            {/* Core Pulse */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl animate-ping"></div>
         </motion.div>
         
         {/* Floating Label */}
         <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: -50 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-500/10 border border-blue-500/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono text-blue-300 z-30 will-change-transform"
         >
            System_Architect.ai
         </motion.div>

         {/* Connection Lines and Nodes */}
         <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none overflow-visible z-10">
            <defs>
               <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
               </linearGradient>
            </defs>

            {/* Node 1: Database (Bottom Left) */}
            <g>
               <motion.path 
                 d="M200 150 L 80 220" 
                 stroke="url(#lineGrad)" strokeWidth="2" fill="none"
                 initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
               />
               <foreignObject x="40" y="200" width="80" height="80">
                  <motion.div 
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }}
                    className="w-12 h-12 mx-auto bg-black/80 border border-white/10 rounded-lg flex items-center justify-center will-change-transform"
                  >
                     <Database size={20} className="text-green-400" />
                  </motion.div>
               </foreignObject>
            </g>

             {/* Node 2: Frontend (Top Right) */}
             <g>
               <motion.path 
                 d="M200 150 L 320 80" 
                 stroke="url(#lineGrad)" strokeWidth="2" fill="none"
                 initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
               />
               <foreignObject x="280" y="40" width="80" height="80">
                  <motion.div 
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }}
                    className="w-12 h-12 mx-auto bg-black/80 border border-white/10 rounded-lg flex items-center justify-center will-change-transform"
                  >
                     <Globe size={20} className="text-purple-400" />
                  </motion.div>
               </foreignObject>
            </g>

            {/* Node 3: API (Right Middle) */}
            <g>
               <motion.path 
                 d="M200 150 L 300 180" 
                 stroke="url(#lineGrad)" strokeWidth="2" fill="none"
                 initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
               />
               <foreignObject x="260" y="160" width="80" height="80">
                  <motion.div 
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2 }}
                    className="w-12 h-12 mx-auto bg-black/80 border border-white/10 rounded-lg flex items-center justify-center will-change-transform"
                  >
                     <Server size={20} className="text-yellow-400" />
                  </motion.div>
               </foreignObject>
            </g>
            
             {/* Node 4: Config (Top Left) */}
             <g>
               <motion.path 
                 d="M200 150 L 100 100" 
                 stroke="url(#lineGrad)" strokeWidth="2" fill="none"
                 initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
               />
               <foreignObject x="60" y="60" width="80" height="80">
                  <motion.div 
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9 }}
                    className="w-12 h-12 mx-auto bg-black/80 border border-white/10 rounded-lg flex items-center justify-center will-change-transform"
                  >
                     <FileJson size={20} className="text-gray-400" />
                  </motion.div>
               </foreignObject>
            </g>
         </svg>
      </div>
    </div>
  );
};

const BuilderIllustration = () => (
  <div className="relative w-full h-full min-h-[320px] flex items-center justify-center bg-[#080808] border border-white/10 rounded-3xl overflow-hidden shadow-2xl group transform-gpu">
     
     <div className="absolute inset-0 flex flex-col font-mono text-xs p-8 opacity-90">
        {/* Fake Code Scrolling */}
        <motion.div 
            className="w-full will-change-transform"
            animate={{ y: [0, -400] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
            {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="flex gap-4 mb-2">
                    <span className="text-gray-800 w-6 text-right select-none">{i + 1}</span>
                    <span className={clsx(
                        "truncate font-medium",
                        i % 3 === 0 ? "text-purple-400/90" : 
                        i % 4 === 0 ? "text-blue-400/90" : 
                        i % 5 === 0 ? "text-emerald-400/90" : "text-gray-500"
                    )}>
                        {i % 3 === 0 ? `import { createClient } from '@supabase/supabase-js'` : 
                         i % 4 === 0 ? `export const dynamic = 'force-dynamic'` : 
                         i % 5 === 0 ? `  const { data, error } = await supabase` :
                         `// Initializing autonomous agent sequence ${i}...`}
                    </span>
                </div>
            ))}
            {/* Duplicate for seamless loop */}
            {Array.from({ length: 40 }).map((_, i) => (
                <div key={`dup-${i}`} className="flex gap-4 mb-2">
                    <span className="text-gray-800 w-6 text-right select-none">{i + 41}</span>
                    <span className={clsx(
                        "truncate font-medium",
                        i % 3 === 0 ? "text-purple-400/90" : 
                        i % 4 === 0 ? "text-blue-400/90" : 
                        i % 5 === 0 ? "text-emerald-400/90" : "text-gray-500"
                    )}>
                         {i % 3 === 0 ? `import { createClient } from '@supabase/supabase-js'` : 
                         i % 4 === 0 ? `export const dynamic = 'force-dynamic'` : 
                         i % 5 === 0 ? `  const { data, error } = await supabase` :
                         `// Initializing autonomous agent sequence ${i}...`}
                    </span>
                </div>
            ))}
        </motion.div>
     </div>

     {/* Vignette & Gradient Overlay */}
     <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] pointer-events-none z-10"></div>
     
     {/* Active Worker Indicator */}
     <motion.div 
        className="absolute bottom-6 right-6 bg-[#111] border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md z-20 flex items-center gap-4 will-change-transform"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
     >
         <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
                <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-white">High-Speed Generation</span>
            </div>
            <span className="text-[10px] text-gray-500 font-mono">src/app/api/route.ts • 142ms</span>
         </div>
         <div className="h-8 w-8 rounded-full border-2 border-green-500/30 border-t-green-500 animate-spin"></div>
     </motion.div>
  </div>
);

const ReviewerIllustration = () => (
  <div className="relative w-full h-full min-h-[320px] flex items-center justify-center bg-[#080808] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform-gpu">
     {/* Background Radar Effect */}
     <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%)]"></div>
        
        {/* Rings */}
        {[1, 2, 3].map((i) => (
           <motion.div
             key={i}
             className="absolute border border-purple-500/10 rounded-full will-change-transform"
             style={{ width: `${i * 30}%`, height: `${i * 30}%` }}
             animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
             transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
           />
        ))}
        
        {/* Scanning Line */}
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent animate-[spin_4s_linear_infinite] origin-bottom-right rounded-tl-full z-0"></div>
     </div>

     {/* Glass Card */}
     <div className="relative z-10 w-72 bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl">
         <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-400" size={18} />
                <span className="text-sm font-bold text-gray-200">Code Quality Gate</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded border border-green-500/20 font-mono">PASS</span>
         </div>
         
         <div className="space-y-4">
            {[
                { label: 'Type Safety Check', status: '0 errors', icon: Bug, color: 'text-blue-400' },
                { label: 'Security Vulnerabilities', status: 'Clean', icon: ShieldCheck, color: 'text-purple-400' },
                { label: 'Performance Score', status: '98/100', icon: Zap, color: 'text-yellow-400' }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    className="flex items-center justify-between group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${item.color}`}>
                             <item.icon size={14} />
                        </div>
                        <span className="text-xs text-gray-400 font-medium">{item.label}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">{item.status}</span>
                </motion.div>
            ))}
         </div>
         
         {/* Progress Bar */}
         <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
             <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.5 }}
             />
         </div>
     </div>
  </div>
);

interface WorkflowStepProps {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
    isLast?: boolean;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ 
    number, 
    title, 
    description, 
    children, 
    isLast 
}) => {
    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 min-h-[80vh] py-12 group">
            
            {/* Timeline (Desktop) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-12 flex-col items-center h-full">
                <div className="w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500 z-20 relative">
                    <div className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100"></div>
                </div>
                {!isLast && (
                    <div className="w-px h-full bg-white/5 group-hover:bg-gradient-to-b group-hover:from-primary group-hover:via-primary/50 group-hover:to-transparent transition-all duration-1000 delay-100"></div>
                )}
            </div>

            {/* Text Section */}
            <div className={clsx(
                "flex flex-col justify-center transition-all duration-500",
                parseInt(number) % 2 === 0 ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16 text-right items-end"
            )}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={clsx(
                        "flex items-center gap-4 mb-6",
                        parseInt(number) % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    )}>
                        <span className="text-6xl font-bold text-white/5 font-mono select-none">0{number}</span>
                        <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent opacity-50"></div>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        {title}
                    </h3>
                    <p className={clsx(
                        "text-lg text-gray-400 leading-relaxed font-light max-w-md",
                        parseInt(number) % 2 !== 0 && "ml-auto"
                    )}>
                        {description}
                    </p>
                </motion.div>
            </div>

            {/* Graphic Section */}
            <div className={clsx(
                "relative h-[360px] md:h-[440px]",
                parseInt(number) % 2 === 0 ? "lg:order-1" : "lg:order-2"
            )}>
                <motion.div
                   className="w-full h-full will-change-transform"
                   initial={{ opacity: 0, scale: 0.9, rotateY: parseInt(number) % 2 === 0 ? -5 : 5 }}
                   whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};


const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-primary font-medium backdrop-blur-sm"
          >
            Workflow
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">The Codin Engine</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Three specialized autonomous agents working in perfect synchronization to deliver production-ready code.
          </p>
        </div>

        <div className="relative space-y-12 lg:space-y-0">
            <WorkflowStep 
                number="1"
                title="Codin Architect"
                description="Takes your rough prompt and creates a comprehensive technical specification. It browses your existing codebase to ensure new features match your architectural patterns."
            >
                <ArchitectIllustration />
            </WorkflowStep>

            <WorkflowStep 
                number="2"
                title="Codin Builder"
                description="Executing the plan in parallel. The Builder writes code at superhuman speed, creating multiple files simultaneously while managing dependencies and imports."
            >
                <BuilderIllustration />
            </WorkflowStep>

            <WorkflowStep 
                number="3"
                title="Codin QA"
                description="The gatekeeper. Before any code is presented, Codin QA runs linting, type checking, and security scans. It attempts to build the project and automatically fixes errors."
                isLast={true}
            >
                <ReviewerIllustration />
            </WorkflowStep>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;