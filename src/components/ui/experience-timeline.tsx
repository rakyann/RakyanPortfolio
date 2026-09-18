"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Sparkles, Building2, Calendar, MapPin, Plus, Minus } from "lucide-react";
import { EXPERIENCES, ExperienceItem } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const [activeId, setActiveId] = useState<string | null>("freelance-uiux");

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Interactive Timeline List */}
      <div className="relative flex flex-col gap-6">
        
        {EXPERIENCES.map((exp, index) => {
          const isActive = activeId === exp.id;
          const isLatest = index === 0;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={cn(
                "group relative rounded-[2rem] p-6 md:p-8 transition-all duration-500 cursor-pointer overflow-hidden border",
                isActive 
                  ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-black/15 ring-1 ring-black/5" 
                  : "bg-white/60 hover:bg-white border-black/5 hover:border-black/15 hover:shadow-md"
              )}
              onClick={() => setActiveId(isActive ? null : exp.id)}
            >
              {/* Active Indicator Bar on Left */}
              <div 
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300",
                  isActive ? "bg-[#BEF264]" : "bg-transparent group-hover:bg-zinc-200"
                )} 
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Role & Company Header */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-zinc-400 px-3 py-1 bg-zinc-100 rounded-full">
                      {exp.period}
                    </span>
                    {exp.id === "mdmedia" && (
                      <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full">
                        Enterprise Portal
                      </span>
                    )}
                    {exp.id === "callour" && (
                      <span className="text-[11px] font-bold text-purple-800 bg-purple-50 border border-purple-200/60 px-2.5 py-0.5 rounded-full">
                        Foundation & Design Systems
                      </span>
                    )}
                    {isLatest && (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mt-1">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111] group-hover:text-black transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-lg md:text-xl font-playfair italic text-zinc-500">
                      @ {exp.company}
                    </span>
                  </div>
                </div>

                {/* Right Action Button */}
                <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border",
                    isActive 
                      ? "bg-[#111111] text-white border-black rotate-180" 
                      : "bg-zinc-50 text-zinc-500 border-black/10 group-hover:bg-[#BEF264] group-hover:text-black group-hover:border-black/20"
                  )}>
                    {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Sub-summary */}
              <p className="text-sm md:text-base text-zinc-600 mt-3 font-medium leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {/* Expanded Rich Details */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-black/5">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-4 flex flex-col gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                            Key Focus Areas
                          </span>
                          <p className="text-xs text-zinc-500 font-medium">
                            Practical responsibilities, design systems, and cross-functional team collaborations.
                          </p>
                        </div>
                        
                        <div className="md:col-span-8 flex flex-col gap-3">
                          {exp.keyPoints.map((point, i) => (
                            <div 
                              key={i} 
                              className="p-4 rounded-2xl bg-zinc-50 border border-black/5 flex items-start gap-3 text-sm text-zinc-800 font-medium"
                            >
                              <span className="w-2 h-2 rounded-full bg-[#BEF264] border border-black/20 mt-1.5 shrink-0" />
                              <span className="leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
