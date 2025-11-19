import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Database, Cloud, Zap, Lock } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, className }: { title: string, description: string, icon: any, className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`group p-8 rounded-3xl bg-[#080808] border border-white/[0.05] hover:border-primary/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col gap-4 relative overflow-hidden ${className}`}
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <Icon size={120} />
    </div>

    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white group-hover:text-primary group-hover:scale-110 transition-all duration-300 z-10">
      <Icon size={24} />
    </div>
    <div className="z-10">
      <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed font-light">{description}</p>
    </div>
  </motion.div>
);

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Batteries Included</h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl">Everything you need to scale your AI engineering workflow, built for enterprise security and individual speed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          <FeatureCard 
            title="Deep Context Awareness"
            description="Codin indexes your entire repository (Git) to understand architecture, variable names, and styling patterns. It feels like it's been on the team for years."
            icon={Brain}
            className="md:col-span-2"
          />
          <FeatureCard 
            title="Self-Healing Code"
            description="Runtime errors are fed back into the agent loop for instant automatic remediation without human intervention."
            icon={Shield}
          />
          <FeatureCard 
            title="Local LLM Support"
            description="Run Llama 3 or Mistral locally on your M3 Max for total privacy. No data leaves your machine."
            icon={Database}
          />
          <FeatureCard 
            title="Multi-Cloud Deploy"
            description="Direct integrations with Vercel, AWS, and Cloudflare Workers."
            icon={Cloud}
          />
          <FeatureCard 
            title="Enterprise Security"
            description="SOC2 Compliant. Audit logs, RBAC, and on-premise options available for large teams."
            icon={Lock}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;