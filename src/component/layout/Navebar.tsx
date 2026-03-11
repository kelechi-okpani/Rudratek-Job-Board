"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Platform", href: "#home" },
    { name: "Jobs", href: "#jobs" },
    { name: "Features", href: "#features" },
  ];

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/5 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
  
        <div className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tighter">
          RUDRATEK
        </div>

      
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

    
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap">
            Get Started
          </button>
          
     
          <button 
            className="md:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#020617]/95 backdrop-blur-xl border-t border-white/5 absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-6 gap-6 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-center">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};