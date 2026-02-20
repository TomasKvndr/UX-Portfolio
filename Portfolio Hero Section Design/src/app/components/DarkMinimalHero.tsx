import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'motion/react';
import { ArrowRight, Box, TrendingUp, Users, Clock, ArrowUpRight, Globe, Lock } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "Nexus Finance",
    role: "Lead Product Designer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Data Vis
    tags: ["Fintech", "SaaS", "React"]
  },
  {
    id: 2,
    title: "Aura Mobile",
    role: "UI/UX Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1592323401640-9c24ed330baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Mobile", "iOS", "Dark Mode"]
  },
  {
    id: 3,
    title: "Carbon OS",
    role: "Design System",
    year: "2023",
    image: "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["System", "Figma", "Design Ops"]
  }
];

// Featured Case Study Data
const FEATURED_CASE = {
  title: "Vortex Analytics",
  subtitle: "Enterprise Data Platform Redesign",
  image: "https://images.unsplash.com/photo-1581404999056-8a2f9f24baad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  metrics: [
    { label: "Conversion Rate", value: "+142%", icon: TrendingUp, color: "text-green-400" },
    { label: "User Retention", value: "94%", icon: Lock, color: "text-blue-400" },
    { label: "Task Velocity", value: "2.5x", icon: Clock, color: "text-purple-400" }
  ]
};

const MetricCard = ({ label, value, icon: Icon, color, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.5 + (index * 0.1), duration: 0.5, type: "spring" }}
      className="backdrop-blur-xl bg-black/40 border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-2xl hover:bg-white/5 transition-colors cursor-default"
      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
    >
      <div className={`p-2 rounded-lg bg-white/5 ${color}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{label}</p>
        <p className="text-xl font-bold text-white font-mono">{value}</p>
      </div>
    </motion.div>
  );
};

export const DarkMinimalHero = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Mouse movement logic for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const moveX = useTransform(x, [-500, 500], [-15, 15]);
  const moveY = useTransform(y, [-500, 500], [-15, 15]);
  const moveXReverse = useTransform(x, [-500, 500], [15, -15]);
  const moveYReverse = useTransform(y, [-500, 500], [15, -15]);

  return (
    <div 
      className="min-h-screen bg-[#030303] text-white flex flex-col md:flex-row overflow-hidden font-sans selection:bg-indigo-500/30 selection:text-indigo-200"
      onMouseMove={handleMouseMove}
    >
      
      {/* LEFT PANEL - DYNAMIC VISUAL */}
      <div className="relative w-full md:w-[60%] lg:w-[65%] h-[50vh] md:h-screen overflow-hidden bg-[#0a0a0a] group">
        
        {/* Background Image Layer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredProject ? `project-${hoveredProject}` : 'featured'}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
            
            <motion.img 
              style={{ x: moveXReverse, y: moveYReverse }}
              src={hoveredProject ? PROJECTS.find(p => p.id === hoveredProject)?.image : FEATURED_CASE.image} 
              alt="Project Visual" 
              className="w-full h-full object-cover opacity-60 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </AnimatePresence>

        {/* FEATURED CASE STUDY CONTENT (Only visible when no project hovered) */}
        <AnimatePresence>
          {!hoveredProject && (
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl"
              >
                {/* Floating Metrics - Business Impact */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 perspective-1000">
                  {FEATURED_CASE.metrics.map((metric, idx) => (
                    <motion.div style={{ x: moveX, y: moveY }}>
                         <MetricCard key={idx} {...metric} index={idx} />
                    </motion.div>
                  ))}
                </div>

                {/* Badge */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6 overflow-hidden whitespace-nowrap"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-indigo-300 tracking-wider">FEATURED CASE STUDY</span>
                </motion.div>

                {/* Title */}
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                  {FEATURED_CASE.title}
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                  {FEATURED_CASE.subtitle}. Redefining enterprise complexity with data-driven UX strategies that scale.
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm tracking-wide uppercase overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-indigo-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                </motion.button>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Project Specific Overlay (Visible when hovered) */}
         <AnimatePresence>
            {hoveredProject && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-12 left-12 z-20"
                >
                    <div className="bg-black/80 backdrop-blur-md p-6 border-l-4 border-white">
                         <p className="text-xs text-gray-400 uppercase mb-1">Previewing</p>
                         <h3 className="text-3xl font-bold">{PROJECTS.find(p => p.id === hoveredProject)?.title}</h3>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

      </div>

      {/* RIGHT PANEL - NAVIGATION & LIST */}
      <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col justify-between p-8 md:p-12 bg-[#050505] border-l border-white/5 relative z-30">
        
        {/* Header */}
        <div className="flex justify-between items-start">
           <div>
              <h1 className="text-xl font-bold tracking-tighter">Sarah Jenkins.</h1>
              <div className="flex items-center gap-2 mt-2">
                  <div className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-[10px] font-mono border border-green-500/20">
                      ROI FOCUSED
                  </div>
                  <div className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[10px] font-mono border border-blue-500/20">
                      PRODUCT STRATEGY
                  </div>
              </div>
           </div>
        </div>

        {/* Scrollable Project List */}
        <div className="flex-grow flex flex-col justify-center py-12">
            <div className="flex items-center justify-between mb-8 px-2">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Recent Work</p>
                <div className="h-px bg-white/10 flex-grow mx-4"></div>
            </div>

            <div className="space-y-1">
                {PROJECTS.map((project) => (
                    <motion.div
                        key={project.id}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group relative p-4 cursor-pointer rounded-lg hover:bg-white/5 transition-colors duration-300"
                    >
                        <div className="flex justify-between items-center relative z-10">
                            <h3 className="text-2xl md:text-3xl font-light text-gray-400 group-hover:text-white transition-colors duration-300">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-white transition-all duration-300" />
                        </div>
                        <div className="flex gap-3 mt-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                             <span className="text-xs font-mono text-gray-500">{project.role}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl relative overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-colors">
                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <TrendingUp className="w-12 h-12 text-indigo-500" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Business Impact</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                    I don't just design screens. I solve business problems. My designs have generated over <span className="text-white font-bold">$4M</span> in added revenue for clients.
                </p>
            </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs font-mono text-gray-600 uppercase tracking-widest">
            <span>SF, CA</span>
            <span className="hover:text-white cursor-pointer transition-colors">Scroll for more</span>
        </div>

      </div>

    </div>
  );
};
