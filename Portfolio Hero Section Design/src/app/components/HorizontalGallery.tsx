import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Play, Layers } from 'lucide-react';

const FEATURED_WORKS = [
  {
    id: 1,
    title: "Eats Delivery",
    category: "Product",
    image: "https://images.unsplash.com/photo-1542009494867-78f53eb3577a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: 2,
    title: "Vortex DeFi",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

export const HorizontalGallery = ({ onViewCaseStudy }: { onViewCaseStudy: () => void }) => {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* Header */}
      <header className="px-6 md:px-12 py-8 flex justify-between items-end mb-12">
        <div>
           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-2">
             Sarah<br/>Jenkins.
           </h1>
           <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-4">
             Senior Product Designer
           </p>
        </div>
        <div className="hidden md:block text-right">
           <p className="font-bold text-xl">Based in SF</p>
           <p className="text-gray-500">Open for opportunities</p>
        </div>
      </header>

      {/* Main Horizontal Scroll Container Idea */}
      <div className="px-6 md:px-12 pb-20">
        
        {/* TOP SECTION: Featured Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
           {FEATURED_WORKS.map((work) => (
             <motion.div 
               key={work.id}
               className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 cursor-pointer"
               whileHover={{ scale: 0.98 }}
               transition={{ duration: 0.4 }}
             >
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white z-20">
                   <p className="text-xs uppercase font-bold tracking-widest mb-2 opacity-80">{work.category}</p>
                   <h3 className="text-3xl md:text-4xl font-bold">{work.title}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                   <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
             </motion.div>
           ))}
        </div>

        {/* BOTTOM SECTION: The Case Study (The "Different" Part) */}
        <div className="relative rounded-3xl bg-black text-white overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full opacity-30">
              <img 
                 src="https://images.unsplash.com/photo-1624154670578-42532d763bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                 alt="User Testing"
                 className="w-full h-full object-cover grayscale"
              />
           </div>
           
           <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div className="max-w-xl">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-3 w-3 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Featured Case Study</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    The Nexus Dashboard <br/>
                    <span className="text-gray-500">Retrospective</span>
                 </h2>
                 <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    An honest breakdown of a past project. I analyze my previous design decisions and demonstrate how I would solve the same business problems today with improved UX maturity.
                 </p>
                 
                 <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/10">Design Critique</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/10">Growth Mindset</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/10">Business Strategy</span>
                 </div>
              </div>

              <motion.button 
                onClick={onViewCaseStudy}
                className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors duration-300 shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                 Read Case Study
                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                 </div>
              </motion.button>
           </div>
        </div>

      </div>

      {/* Simple Footer */}
      <footer className="px-6 md:px-12 py-8 flex justify-between items-center text-xs text-gray-400 font-mono uppercase border-t border-gray-300 mx-6 md:mx-12">
         <span>© 2024 Sarah Jenkins</span>
         <span>Made with React & Motion</span>
      </footer>

    </div>
  );
};
