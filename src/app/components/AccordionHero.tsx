import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'motion/react';
import { ArrowUpRight, Github, Twitter, Linkedin, Menu, FileText, Smartphone, Monitor } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    type: "work",
    title: "EATS",
    subtitle: "Global Food Delivery App",
    category: "Mobile Product",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1542009494867-78f53eb3577a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "text-orange-400",
    bgColor: "bg-orange-500",
    stats: "2M+ Active Users"
  },
  {
    id: 2,
    type: "work",
    title: "VORTEX",
    subtitle: "DeFi Trading Platform",
    category: "Web Application",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "text-blue-400",
    bgColor: "bg-blue-600",
    stats: "$500M Transaction Vol"
  },
  {
    id: 3,
    type: "study",
    title: "NEXUS UX",
    subtitle: "Enterprise Workflow Research",
    category: "UX Case Study",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1601950275442-51aadca7687c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Whiteboard/Sketches
    color: "text-emerald-400",
    bgColor: "bg-emerald-600",
    stats: "Reduced Friction by 40%"
  }
];

export const AccordionHero = () => {
  const [activeId, setActiveId] = useState(2); // Start with middle active
  const [isHovering, setIsHovering] = useState(false);
  
  // Custom Cursor Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#050505] overflow-hidden font-sans text-white relative">
      
      {/* Custom Cursor (Hidden on Touch) */}
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{ 
          scale: isHovering ? 4 : 1,
        }}
      />

      {/* LEFT SIDEBAR - STATIC NAV */}
      <div className="w-full md:w-24 lg:w-32 md:h-full bg-[#0a0a0a] border-r border-white/5 flex md:flex-col justify-between p-6 md:py-12 z-20 shrink-0">
        
        {/* Logo / Name */}
        <div className="flex md:flex-col items-center md:items-start justify-between w-full">
            <h1 className="text-2xl font-black tracking-tighter leading-none">
              SJ<span className="text-blue-500">.</span>
            </h1>
            <button className="md:hidden">
                <Menu />
            </button>
        </div>

        {/* Vertical Text */}
        <div className="hidden md:flex flex-grow items-center justify-center py-12">
           <div className="rotate-180 [writing-mode:vertical-rl] flex items-center gap-8 text-xs font-mono tracking-widest text-gray-500">
              <span className="text-white font-bold">SELECTED WORKS</span>
              <span className="w-12 h-px bg-gray-700"></span>
              <span>2023 — 2024</span>
           </div>
        </div>

        {/* Socials */}
        <div className="hidden md:flex flex-col gap-6 items-center">
            <Github className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>

      {/* RIGHT AREA - ACCORDION */}
      <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-80px)] md:h-full relative bg-[#050505]">
        
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            layout
            onMouseEnter={() => {
              setActiveId(project.id);
              setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setActiveId(project.id)}
            className="relative h-full border-b md:border-b-0 md:border-r border-white/5 cursor-pointer overflow-hidden group"
            initial={false}
            animate={{ 
              flex: activeId === project.id ? 2.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-900">
               <motion.img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale-[30%] group-hover:grayscale-0"
                 animate={{ scale: activeId === project.id ? 1.05 : 1.15 }}
                 transition={{ duration: 8, ease: "linear" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
               
               {/* Overlay for inactive state to push them back */}
               <motion.div 
                 className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
                 animate={{ opacity: activeId === project.id ? 0 : 1 }}
               />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              
              {/* Collapsed State Title (Vertical on Desktop) */}
              {activeId !== project.id && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <h2 className="text-4xl md:text-6xl font-bold text-white/10 uppercase md:-rotate-90 whitespace-nowrap tracking-tighter group-hover:text-white/30 transition-colors duration-500">
                     {project.title}
                   </h2>
                </div>
              )}

              {/* Expanded State Content */}
              <AnimatePresence>
                {activeId === project.id && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="relative z-10"
                  >
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`flex items-center justify-center h-8 w-8 rounded-full bg-white/10 backdrop-blur-md ${project.color}`}>
                        <project.icon size={14} />
                      </span>
                      <span className={`text-xs font-mono uppercase tracking-widest ${project.color}`}>
                        {project.category}
                      </span>
                      {project.type === 'study' && (
                         <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-white border border-white/10">
                           RESEARCH
                         </span>
                      )}
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-[0.9]">
                      {project.title}
                    </h2>
                    
                    <p className="text-lg md:text-2xl text-gray-300 font-light mb-10 max-w-lg leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 max-w-xl">
                        <div>
                             <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Key Metric</p>
                             <p className="text-2xl md:text-3xl font-mono text-white tracking-tight">{project.stats}</p>
                        </div>
                        
                        <div className="flex items-end justify-end">
                            <button className="group relative px-6 py-3 bg-white text-black font-bold text-sm tracking-wide uppercase overflow-hidden hover:bg-gray-200 transition-colors w-full md:w-auto text-center">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                  View Project <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Floating Header (Intro) */}
      <div className="absolute top-0 left-0 md:left-32 right-0 p-8 z-30 pointer-events-none flex justify-between items-start">
         <div className="pointer-events-auto">
             <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Available for hire</span>
             </div>
             <p className="text-white text-lg font-medium max-w-sm leading-tight">
               Crafting digital products that drive <span className="text-gray-400">real business growth</span>.
             </p>
         </div>
      </div>

    </div>
  );
};
