import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import InteractiveDemo from './components/InteractiveDemo';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

export default function App() {
  // Smooth scroll reset on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian selection:bg-primary/30 selection:text-white overflow-x-hidden">
      {/* Optimized Background Blobs - Hardware Accelerated */}
      <div className="fixed inset-0 z-0 pointer-events-none transform-gpu overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[80px] mix-blend-screen opacity-40 animate-pulse-slow will-change-[opacity,transform]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[80px] mix-blend-screen opacity-40 animate-pulse-slow will-change-[opacity,transform]" style={{ animationDelay: '2s' }} />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex flex-col gap-24 md:gap-40">
          <Hero />
          <Integrations />
          <HowItWorks />
          <FeaturesGrid />
          <InteractiveDemo />
        </main>

        <Footer />
      </div>
    </div>
  );
}