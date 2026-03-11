"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';

export const Quote = () => {
  return (
    <section className="relative py-24 md:py-48 px-6 overflow-hidden">
  
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
        <QuoteIcon size={400} className="text-white" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
        
          <div className="mb-10 text-blue-500/50">
            <QuoteIcon size={40} fill="currentColor" />
          </div>

          <h2 className="text-2xl sm:text-2xl md:text-4xl font-medium text-slate-200 leading-[1.3] md:leading-[1.4] tracking-tight italic">
            "The engineering culture here is built on autonomy and precision. We don't just write code; we solve <span className="text-white font-semibold not-italic border-b-2 border-blue-500/30">regional commerce bottlenecks</span>."
          </h2>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
         
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-blue-500/10">
              KO
            </div>
            
            <div className="text-center sm:text-left">
              <p className="text-white font-black text-base md:text-lg tracking-tight">
                Kelechi Okpani
              </p>
              <p className="text-slate-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em] mt-1">
                Engineering Lead <span className="hidden sm:inline mx-2 text-slate-800">•</span> <br className="sm:hidden" /> Rudratek Systems
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};