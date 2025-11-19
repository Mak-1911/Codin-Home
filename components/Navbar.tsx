import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import { Logo } from './ui/Logo';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  
  // Transform range: 0 to 60px scroll
  const scrollRange = [0, 60];

  // Smoothly transition width from 100% to 95% (floating effect)
  const width = useTransform(scrollY, scrollRange, ["100%", "95%"]);
  
  // Move down from top
  const top = useTransform(scrollY, scrollRange, ["0px", "16px"]);
  
  // Round corners
  const borderRadius = useTransform(scrollY, scrollRange, ["0px", "16px"]);
  
  // Glassmorphism
  const bgOpacity = useTransform(scrollY, scrollRange, [0, 0.6]);
  const backgroundColor = useMotionTemplate`rgba(5, 5, 5, ${bgOpacity})`;
  
  const backdropBlur = useTransform(scrollY, scrollRange, [0, 12]);
  const backdropFilter = useMotionTemplate`blur(${backdropBlur}px)`;
  
  const borderOpacity = useTransform(scrollY, scrollRange, [0, 0.1]);
  const borderColor = useMotionTemplate`rgba(255, 255, 255, ${borderOpacity})`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav 
        style={{ 
          width,
          y: top,
          borderRadius,
          backgroundColor,
          backdropFilter,
          border: '1px solid',
          borderColor,
        }}
        className="pointer-events-auto relative px-6 h-16 flex items-center transition-shadow duration-300 will-change-[transform,width,background-color,backdrop-filter]"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
              <Logo className="w-8 h-8" />
              <span>Codin</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">Codin Engine</a>
              <a href="#integrations" className="hover:text-white transition-colors">Integrations</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Github size={16} />
                <span>Star on GitHub</span>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
               <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Sign In
               </button>
               <button className="px-4 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
                Get Started
               </button>
            </div>

            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 mx-2 bg-obsidian/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            <a href="#features" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Codin Engine</a>
            <button className="w-full py-3 mt-2 bg-white text-black rounded-lg font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;