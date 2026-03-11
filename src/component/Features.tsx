"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, ArrowUpRight } from 'lucide-react';

export const Features = () => {
  const featureList = [
    { 
      Icon: Globe, 
      t: "Global Scale", 
      d: "Deploy code that reaches millions across developing markets with zero-latency overhead." 
    },
    { 
      Icon: Zap, 
      t: "Modern Stack", 
      d: "Ship with Next.js 15, TypeScript 5, and high-availability Node.js clusters." 
    },
    { 
      Icon: Shield, 
      t: "Security First", 
      d: "Enterprise-grade protection and encryption for every social commerce transaction." 
    }
  ];

  return (
    <section id="features" className="relative py-24 md:py-40 px-6">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[12vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        INFRASTRUCTURE
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featureList.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-400 border border-white/5 group-hover:border-blue-500/50 group-hover:text-white group-hover:bg-blue-600 transition-all duration-500 shadow-xl">
                  <f.Icon size={32} strokeWidth={1.5} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">{f.t}</h4>
                    <ArrowUpRight size={20} className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base group-hover:text-slate-300 transition-colors">
                    {f.d}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};