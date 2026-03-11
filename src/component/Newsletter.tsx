// Newsletter

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export const Newsletter = () => {

    return(
      <section className="py-20 md:py-32 bg-slate-900/50 border-y border-white/5">
          <div className="max-w-xl mx-auto text-center px-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">Stay in the loop</h3>
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 border border-white/10 rounded-2xl sm:rounded-full">
              <input 
                type="email" 
                placeholder="email@company.com" 
                className="bg-transparent flex-1 px-6 py-3 outline-none text-white text-sm" 
              />
              <button className="bg-white text-black px-8 py-3 rounded-xl sm:rounded-full text-sm font-black hover:bg-blue-400 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </section>
    )


}