"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>("freelance-uiux");

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Sleek Editorial Timeline List */}
      <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
        
        {EXPERIENCES.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          const isLatest = index === 0;

          return (
            <div
              key={exp.id}
              className={cn(
                "group py-8 md:py-10 transition-all duration-300 cursor-pointer",
                isExpanded ? "bg-black/[0.015]" : "hover:bg-black/[0.01]"
              )}
              onClick={() => setExpandedId(isExpanded ? null : exp.id)}
            >
              {/* Main Row */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 px-2">
                
                {/* Period & Status */}
                <div className="w-full md:w-56 shrink-0 flex items-center gap-2">
                  <span className="font-mono text-xs md:text-sm font-semibold text-zinc-400">
                    {exp.period}
                  </span>
                  {isLatest && (
                    <span className="w-2 h-2 rounded-full bg-[#BEF264] border border-black/30 animate-pulse" />
                  )}
                </div>

                {/* Role & Company */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111] group-hover:text-black transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xl md:text-2xl font-playfair italic text-zinc-500">
                      — {exp.company}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-zinc-600 font-medium mt-2 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>

                {/* Minimalist Toggle Indicator */}
                <div className="shrink-0 self-start md:self-center">
                  <div className={cn(
                    "w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300",
                    isExpanded 
                      ? "bg-[#111111] text-white rotate-180" 
                      : "bg-white text-zinc-500 group-hover:border-black/30 group-hover:text-black"
                  )}>
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

              </div>

              {/* Smooth Expanded Details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pb-2 md:pl-64 px-2">
                      <div className="p-6 md:p-8 rounded-3xl bg-white border border-black/10 shadow-sm">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">
                          Key Contributions & Learnings
                        </p>
                        <ul className="flex flex-col gap-3">
                          {exp.keyPoints.map((point, i) => (
                            <li key={i} className="text-sm md:text-[15px] text-zinc-700 leading-relaxed font-medium flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}

      </div>
    </div>
  );
}
