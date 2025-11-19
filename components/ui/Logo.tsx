import React from 'react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logo-gradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6"/>
        <stop offset="1" stopColor="#8B5CF6"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    
    {/* Hexagonal Container / Node Structure */}
    <path 
      d="M20 4L34 12V28L20 36L6 28V12L20 4Z" 
      stroke="url(#logo-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="opacity-50"
    />
    
    {/* Internal Agents / Nodes */}
    <circle cx="20" cy="10" r="2" fill="#3B82F6" className="animate-pulse"/>
    <circle cx="28" cy="26" r="2" fill="#8B5CF6" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
    <circle cx="12" cy="26" r="2" fill="#3B82F6" className="animate-pulse" style={{ animationDelay: '1s' }}/>
    
    {/* Central CLI Prompt >_ */}
    <path 
      d="M16 16L20 20L16 24" 
      stroke="white" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="22" y1="24" x2="26" y2="24" 
      stroke="white" 
      strokeWidth="2.5" 
      strokeLinecap="round"
      className="animate-[pulse_1s_ease-in-out_infinite]"
    />
    
    {/* Connecting Data Streams (Subtle) */}
    <path d="M20 10L20 14" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5"/>
    <path d="M28 26L24 22" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.5"/>
    <path d="M12 26L16 22" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5"/>
  </svg>
);