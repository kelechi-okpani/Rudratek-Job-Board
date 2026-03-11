import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Briefcase, ArrowRight, 
  Globe, Zap, Shield, Users, ChevronRight 
} from 'lucide-react';
import { DEPARTMENTS, MOCK_JOBS, TYPES } from './data/data';

export const JobBoard = () => {
  const [activeDept, setActiveDept] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(j => 
      (activeDept === "All" || j.dept === activeDept) && 
      (activeType === "All" || j.type === activeType)
    );
  }, [activeDept, activeType]);

  return (
    <section id="jobs" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Open Opportunities</h2>
          <p className="text-slate-500 mt-4 text-sm md:text-base">Filter by department or role type to find your fit in our growing ecosystem.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 w-full lg:w-auto">
          <select 
            onChange={(e) => setActiveDept(e.target.value)}
            className="flex-1 lg:flex-none bg-slate-900 border border-white/10 text-xs md:text-sm p-3 rounded-xl outline-none focus:border-blue-500 transition-all text-white min-w-[140px]"
          >
            {DEPARTMENTS.map(d => <option key={d} value={d}>{d} Dept</option>)}
          </select>
          <select 
            onChange={(e) => setActiveType(e.target.value)}
            className="flex-1 lg:flex-none bg-slate-900 border border-white/10 text-xs md:text-sm p-3 rounded-xl outline-none focus:border-blue-500 transition-all text-white min-w-[140px]"
          >
            {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AnimatePresence mode='popLayout'>
          {filteredJobs.map((job) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={job.id}
              className="group p-5 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-500"/> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-blue-500"/> {job.dept}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto">
                  <div className="text-[10px] md:text-xs font-black px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-tighter">
                    {job.type}
                  </div>
                  <ChevronRight className="sm:hidden text-slate-600" size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};