"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, Send } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden flex flex-col lg:flex-row items-stretch gap-0 rounded-[2.5rem] bg-slate-900 border border-white/5 shadow-2xl shadow-blue-500/5"
        >
        
          <div className="flex-[1.2] p-8 md:p-16 lg:p-20 z-10 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles size={12} /> General Talent Pool
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
                Not seeing your <br className="hidden md:block" /> perfect role?
              </h2>
              <p className="text-slate-400 text-base md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                We’re scaling fast and always looking for exceptional engineers, designers, and researchers to join our mission.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <button className="group relative flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-black text-sm transition-all shadow-lg shadow-blue-600/20">
                Send an open application
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <a href="mailto:careers@rudratek.com" className="text-slate-500 hover:text-white text-sm font-bold transition-colors underline underline-offset-8">
                careers@rudratek.com
              </a>
            </div>
          </div>

      
          <div className="flex-1 min-h-[200px] lg:min-h-full bg-gradient-to-br from-blue-600 to-cyan-500 relative flex items-center justify-center overflow-hidden">
         
            <div className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
            />
            
       
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl"
            >
              <Users size={60} className="text-white mb-4" />
              <div className="space-y-2">
                <div className="h-2 w-24 bg-white/40 rounded-full" />
                <div className="h-2 w-16 bg-white/20 rounded-full" />
              </div>
            </motion.div>

       
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 blur-[80px] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};