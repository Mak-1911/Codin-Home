import React from 'react';
import clsx from 'clsx';

interface TerminalWindowProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  isAnimated?: boolean;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children, className, title = "codin-cli", isAnimated = false }) => {
  return (
    <div 
      className={clsx(
        "relative bg-[#0A0A0A] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-sm",
        className
      )}
    >
      {/* Title Bar */}
      <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-500 font-medium flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          {title}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-6 text-gray-300 leading-relaxed">
        {children}
      </div>

      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/10" />
    </div>
  );
};

export default TerminalWindow;