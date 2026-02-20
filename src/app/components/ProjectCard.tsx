import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  className?: string;
}

export const ProjectCard = ({ title, category, image, className = "" }: ProjectCardProps) => {
  return (
    <motion.div 
      className={`group relative overflow-hidden rounded-3xl bg-gray-100 ${className}`}
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-300 mb-1">{category}</p>
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};
