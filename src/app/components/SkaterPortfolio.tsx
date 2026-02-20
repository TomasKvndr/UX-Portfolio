import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Terminal, Activity, Globe, FileText } from 'lucide-react';

/* 
  =============================================================================
  ASSETS & DATA
  =============================================================================
*/

// NOTE: To use local assets, place the files in /src/assets/ and uncomment the imports below.
// Currently using remote URLs to prevent build errors since the local files don't exist yet.

import imgPrime from "../../assets/prime-clinic.png";
import imgRacesim from "../../assets/racesim.png";
import imgFarmavet from "../../assets/farmavet.png";
import imgKreslo from "../../assets/kreslo.png";

/*const imgPrime = "https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3IlMjBtaW5pbWFsJTIwZGVzaWdufGVufDF8fHx8MTc3MTU1MDU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRacesim = "https://images.unsplash.com/photo-1743649978995-c76212449e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBzaW11bGF0b3IlMjBjb2NrcGl0JTIwZjElMjBzY3JlZW58ZW58MXx8fHwxNzcxNTUwNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgFarmavet = "https://images.unsplash.com/photo-1598285385411-c5952310875e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwc3VwcGxpZXMlMjBwaGFybWFjeSUyMHNoZWxmJTIwbW9kZXJufGVufDF8fHx8MTc3MTU1MDU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgKreslo = "https://images.unsplash.com/photo-1670222061552-c273834aee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcm1jaGFpciUyMGZ1cm5pdHVyZSUyMGJyYW5kaW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc3MTU1MDU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
*/


const ASSETS = {
  hero: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const PROJECTS = [
  {
    id: "01",
    title: "PRIME CLINIC",
    role: "UX/UI DESIGN",
    tech: "DESIGN SYSTEM / VARIABLES",
    year: "2026",
    desc: "Comprehensive design system for medical clinics.",
    img: imgPrime,
    special: true
  },
  {
    id: "02",
    title: "RACESIM",
    role: "PRODUCT DESIGN",
    tech: "WEB APP / BOOKING FLOW",
    year: "2025",
    desc: "Booking system and simulator interface.",
    img: imgRacesim
  },
  {
    id: "03",
    title: "FARMAVET",
    role: "WEB ARCHITECTURE",
    tech: "UX/UI / PROTOTYPING",
    year: "2025",
    desc: "E-commerce platform for veterinary supplies.",
    img: imgFarmavet
  },
  {
    id: "04",
    title: "KRESLO",
    role: "BRAND IDENTITY",
    tech: "REBRANDING / LOGO",
    year: "2024",
    desc: "Rebranding and visual identity for Barber studio.",
    img: imgKreslo
  }
];

export const SkaterPortfolio = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  // Custom Cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="bg-[#050505] text-[#E0E0E0] font-sans min-h-screen cursor-none selection:bg-[#D9FF00] selection:text-black overflow-x-hidden border-[12px] border-[#050505]">
      
      {/* CUSTOM CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 bg-[#D9FF00] rounded-sm pointer-events-none z-[100] hidden md:block mix-blend-difference"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* ---------------------------------------------------------------------------
         TOP SECTION: HEADER & INTRO (Grid Layout)
      --------------------------------------------------------------------------- */}
      <header className="border-x border-t border-white/20 bg-[#0a0a0a]">
         <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] min-h-[400px]">
            
            {/* Left Col: Identity */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-between bg-[#D9FF00] text-black">
               <div>
                  <h2 className="text-xs font-mono font-bold tracking-widest mb-1">PORTFOLIO</h2>
                  <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                     TOMAS.K<br/>DESIGN
                  </h1>
                  <div className="w-12 h-1 bg-black mb-6"></div>
               </div>
               
               <div className="font-mono text-xs uppercase tracking-wide space-y-4">
                  <div className="space-y-1">
                     <p>UX/UI DESIGNER</p>
                     <p>BASED IN BRATISLAVA</p>
                     <p>OPEN FOR WORK</p>
                  </div>
                  <button className="bg-black text-[#D9FF00] px-4 py-2 font-bold hover:bg-opacity-80 transition-opacity">
                     READ MY CV ↗
                  </button>
               </div>
            </div>

            {/* Right Col: Intro Statement */}
            <div className="p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group">
               {/* Background Grid Texture */}
               <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
               
               <div className="relative z-10 max-w-2xl">
                  <p className="text-2xl md:text-3xl font-bold leading-tight uppercase mb-8">
                     Precision Product Design for <span className="text-[#D9FF00] bg-white/10 px-2">Complex Systems</span>.
                  </p>
                  <p className="text-gray-400 text-lg max-w-lg leading-relaxed mb-8">
                     I don't just design for looks—I design for structure and conversion. Transforming complex business requirements into intuitive, developer-ready user interfaces.
                  </p>
               </div>
               
               <div className="flex gap-4 flex-wrap">
                   <div className="px-4 py-2 border border-white/20 rounded-full text-xs font-mono uppercase hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-2">
                      <Terminal size={14} /> Design Systems
                   </div>
                   <div className="px-4 py-2 border border-white/20 rounded-full text-xs font-mono uppercase hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-2">
                      <Activity size={14} /> Prototyping
                   </div>
                   <div className="px-4 py-2 bg-[#D9FF00] text-black border border-[#D9FF00] rounded-full text-xs font-mono uppercase font-bold hover:bg-white hover:border-white transition-colors cursor-pointer flex items-center gap-2">
                      <FileText size={14} /> View Resume / CV
                   </div>
               </div>
            </div>
         </div>
      </header>


      {/* ---------------------------------------------------------------------------
         MAIN SECTION: THE "MENU" LIST
      --------------------------------------------------------------------------- */}
      <section className="border-x border-b border-white/20 bg-[#0a0a0a]">
         <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">
            
            {/* Left Col: Section Title (Sticky) */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/20 lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-between">
               <div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 text-[#D9FF00]">Selected<br/>Works</h3>
                  <p className="text-sm text-gray-400 max-w-[200px]">
                     3 Commercial Projects + 1 In-depth Case Study.
                  </p>
               </div>
               
               {/* Preview Image Area (Only visible on Desktop when hovering) */}
               <div className="mt-8 flex-1 relative hidden lg:block bg-[#111] border border-white/10 overflow-hidden grayscale">
                  <AnimatePresence mode="wait">
                     {activeProject ? (
                        <motion.img 
                           key={activeProject}
                           src={PROJECTS.find(p => p.id === activeProject)?.img}
                           initial={{ opacity: 0, scale: 1.1 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0 }}
                           className="absolute inset-0 w-full h-full object-cover"
                        />
                     ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-xs uppercase">
                           Select an item
                        </div>
                     )}
                  </AnimatePresence>
                  
                  {/* Overlay Grid */}
                  <div className="absolute inset-0 pointer-events-none border-t border-l border-white/5 grid grid-cols-3 grid-rows-3">
                     {[...Array(9)].map((_, i) => <div key={i} className="border-r border-b border-white/5"></div>)}
                  </div>
               </div>
            </div>

            {/* Right Col: The List (The "Dinner Service" Style) */}
            <div className="flex flex-col">
               {PROJECTS.map((project) => (
                  <div 
                     key={project.id}
                     className="group border-b border-white/20 last:border-b-0 relative overflow-hidden cursor-pointer"
                     onMouseEnter={() => setActiveProject(project.id)}
                  >
                     {/* Hover Background */}
                     <div className="absolute inset-0 bg-[#D9FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>

                     <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-baseline md:items-center justify-between gap-4 group-hover:text-black transition-colors duration-300">
                        
                        <div className="flex items-baseline gap-6 md:gap-12">
                           <span className="font-mono text-xs md:text-sm font-bold opacity-50">
                              {project.id}
                           </span>
                           <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tight flex items-center gap-4">
                              {project.title}
                              {project.special && (
                                 <span className="text-[10px] bg-white text-black px-2 py-1 rounded-full font-bold uppercase tracking-widest group-hover:bg-black group-hover:text-[#D9FF00]">
                                    Case Study
                                 </span>
                              )}
                           </h4>
                        </div>

                        <div className="flex items-center gap-8 md:gap-16 font-mono text-xs md:text-sm uppercase tracking-wide">
                           <span className="hidden md:block">{project.role}</span>
                           <span className="opacity-60">{project.tech} / {project.year}</span>
                           <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                        </div>
                     </div>
                  </div>
               ))}

               {/* Fill remaining space if list is short */}
               <div className="flex-1 min-h-[200px] bg-[#0a0a0a] p-12 flex items-center justify-center opacity-20 hover:opacity-100 transition-opacity">
                   <p className="font-mono text-xs uppercase text-center">More archives available upon request</p>
               </div>
            </div>

         </div>
      </section>

      {/* ---------------------------------------------------------------------------
         FOOTER: STATUS BAR (Mimicking the Bottom Bar of Image)
      --------------------------------------------------------------------------- */}
      <footer className="border-x border-b border-white/20 bg-[#D9FF00] text-black p-4 md:px-8">
         <div className="flex flex-wrap justify-between items-center gap-6 font-mono text-xs font-bold uppercase tracking-wider">
            
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>Based in EU</span>
               </div>
               <div className="flex items-center gap-2">
                  <Activity size={16} />
                  <span>System_Normal</span>
               </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 bg-black/10 rounded-full border border-black/20">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span>Open for New Roles</span>
            </div>

            <div className="hidden md:block">
               TOMAS.K — REV.2026
            </div>

         </div>
      </footer>

    </div>
  );
};
