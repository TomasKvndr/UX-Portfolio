import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Globe, Layout, Smartphone } from 'lucide-react';

// Using the Unsplash images from previous context for the projects
const PROJECTS = [
  {
    id: "01",
    title: "FINTECH DASHBOARD",
    category: "WEB APPLICATION",
    details: "REACT / TAILWIND",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "02",
    title: "CRYPTO WALLET",
    category: "MOBILE INTERFACE",
    details: "IOS / SWIFTUI",
    image: "https://images.unsplash.com/photo-1663153203139-40c3caf54a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "03",
    title: "ECO COMMERCE",
    category: "PLATFORM DESIGN",
    details: "SHOPIFY / LIQUID",
    image: "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1770031079091-c6356e82ea9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"; // The chrome shape

export const BrutalistHero = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#E5E5E5] text-black overflow-hidden selection:bg-lime-400 selection:text-black">
      
      {/* Top Section - 65% Height */}
      <div className="relative flex-grow flex flex-col border-b-2 border-black">
        
        {/* Header Bar */}
        <header className="flex justify-between items-start p-6 border-b border-black/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-4 h-0.5 bg-black rotate-45"></div>
              <div className="w-4 h-0.5 bg-black -rotate-45 absolute"></div>
            </div>
            <div className="leading-none">
              <h2 className="text-xs font-bold uppercase tracking-widest">Sarah Jenkins</h2>
              <p className="text-[10px] font-mono text-gray-500">PORTFOLIO 2024</p>
            </div>
          </div>

          <div className="font-mono text-xs tracking-widest text-right hidden sm:block">
            <p>BASED IN SAN FRANCISCO</p>
            <p>AVAILABLE FOR FREELANCE</p>
          </div>

          <div className="text-xl font-black">
             RCP/05
          </div>
        </header>

        {/* Main Content Area */}
        <div className="relative flex-grow flex items-center justify-center overflow-hidden">
          
          {/* Giant Typography Layer (Behind Image) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none">
            <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center uppercase">
              Product<br/>
              Designer
            </h1>
          </div>

          {/* Floating Image Layer (Center) */}
          <div className="relative z-10 w-[40vh] h-[40vh] md:w-[50vh] md:h-[50vh] rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeProject !== null ? PROJECTS[activeProject].image : 'default'}
                src={activeProject !== null ? PROJECTS[activeProject].image : DEFAULT_IMAGE}
                alt="Featured Work"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Overlay Ring */}
            <div className="absolute inset-0 rounded-full border-[1px] border-white/20 pointer-events-none"></div>
          </div>

          {/* Technical Metadata Floating Labels */}
          <div className="absolute bottom-8 left-8 hidden md:block">
            <p className="font-mono text-xs text-gray-500 mb-1">CORE DISCIPLINE</p>
            <p className="font-bold text-xl uppercase">UX/UI Systems</p>
            <p className="font-mono text-xs text-black mt-1">#FIGMA #REACT</p>
          </div>

           <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden md:block text-right">
             <div className="mb-8">
                <p className="font-mono text-xs text-gray-500">EXP</p>
                <p className="font-bold text-3xl">5+</p>
                <p className="font-mono text-xs">YEARS</p>
             </div>
             <div>
                <p className="font-mono text-xs text-gray-500">PROJECTS</p>
                <p className="font-bold text-3xl">42</p>
                <p className="font-mono text-xs">DELIVERED</p>
             </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Works List - 35% Height */}
      {/* Inspired by the Yellow section in the reference */}
      <div className="bg-[#D9FF00] text-black p-0 min-h-[35vh] flex flex-col">
        <div className="flex-grow flex flex-col">
          
          {/* List Header */}
          <div className="grid grid-cols-12 px-6 py-4 border-b border-black font-mono text-xs uppercase tracking-wider opacity-60">
            <div className="col-span-1">No.</div>
            <div className="col-span-6 md:col-span-5">Project Name</div>
            <div className="col-span-3 hidden md:block">Category</div>
            <div className="col-span-5 md:col-span-3 text-right">Tech Spec</div>
          </div>

          {/* Project Items */}
          <div className="flex-grow">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
                className="group grid grid-cols-12 px-6 py-6 md:py-8 border-b border-black cursor-pointer hover:bg-black hover:text-[#D9FF00] transition-colors duration-200 items-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="col-span-1 font-mono text-sm group-hover:text-[#D9FF00]">{project.id}</div>
                <div className="col-span-6 md:col-span-5 text-xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <div className="col-span-3 hidden md:flex font-medium text-sm tracking-wide items-center gap-2">
                   <div className="w-2 h-2 bg-black rounded-full group-hover:bg-[#D9FF00]"></div>
                   {project.category}
                </div>
                <div className="col-span-5 md:col-span-3 text-right font-mono text-xs uppercase group-hover:text-[#D9FF00]/80">
                  {project.details}
                </div>
              </motion.div>
            ))}
             
             {/* View All Row */}
             <a href="#all-works" className="grid grid-cols-12 px-6 py-4 hover:bg-black hover:text-white transition-colors duration-300 mt-auto">
                <div className="col-span-12 flex justify-between items-center font-bold uppercase tracking-widest text-sm">
                   <span>View All Archives</span>
                   <span>(12)</span>
                </div>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};
