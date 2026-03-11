"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Stats = () => {
  const stats = [
    { val: "120k+", label: "Active Users" },
    { val: "15+", label: "Countries" },
    { val: "$40M", label: "Series B" },
    { val: "99.9%", label: "Uptime" }
  ];

  return (
    <section className="relative py-16 md:py-24 border-y border-white/5 bg-slate-950/20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group flex flex-col items-center lg:items-start"
            >
           
              <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-0.5 h-10 bg-blue-500/20 group-hover:bg-blue-500 transition-colors" />
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                {stat.val}
              </div>
              
              <div className="mt-2 text-slate-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em] text-center lg:text-left">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};