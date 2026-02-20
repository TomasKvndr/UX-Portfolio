import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

// Using the images found via Unsplash
const PROJECTS = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "col-span-1 md:col-span-2 row-span-2" 
  },
  {
    id: 2,
    title: "Crypto Wallet",
    category: "Mobile UI",
    image: "https://images.unsplash.com/photo-1663153203139-40c3caf54a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "col-span-1 row-span-2"
  },
  {
    id: 3,
    title: "Eco Commerce",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "col-span-1 row-span-1"
  },
  {
    id: 4,
    title: "Banking App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1614787296891-d1b2b1aced36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "col-span-1 row-span-1"
  }
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Intro */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Available for work</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
              Designing <br/>
              <span className="text-gray-400">digital</span> <br/>
              products that <br/>
              <span className="text-blue-600">perform.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-sm leading-relaxed">
              I'm Sarah, a Product Designer focusing on clean UI, robust design systems, and intuitive user experiences.
            </p>

            <div className="flex gap-4 mb-12">
              <button className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                <Dribbble className="w-5 h-5" />
              </button>
              <button className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hidden lg:flex items-center gap-3 text-sm font-medium text-gray-400"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Scroll to explore
          </motion.div>
        </div>

        {/* Right Column: Bento Grid of Projects */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full min-h-[600px]">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className={`${project.size}`}
              >
                <ProjectCard 
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  className="h-full w-full min-h-[240px]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
