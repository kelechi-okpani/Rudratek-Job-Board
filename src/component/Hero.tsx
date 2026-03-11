"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';


export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
} as const; 



  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
  
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

   
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center"
      >
      
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Hiring for 2026
          </span>
        </motion.div>

     
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tighter"
        >
          Build the future <br className="hidden sm:block" />
          <span className="bg-gradient-to-b from-slate-200 to-slate-500 bg-clip-text text-transparent">
            of social commerce.
          </span>
        </motion.h1>

   
        <motion.p 
          variants={itemVariants}
          className="mt-8 text-slate-400 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Join RUDRATEK in building high-availability infrastructure for the next generation of digital entrepreneurs.
        </motion.p>

   
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-black text-sm transition-all hover:bg-blue-500 hover:text-white">
            View Openings
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black text-sm transition-all hover:bg-white/10 hover:border-white/20">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Play size={10} className="text-blue-400 fill-blue-400" />
            </div>
            Our Culture
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};