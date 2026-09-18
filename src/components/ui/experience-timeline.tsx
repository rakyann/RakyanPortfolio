"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCES, ExperienceItem } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  // Default to keeping the top recent experiences expanded
  const [expandedIds, setExpandedIds] = useState<string[]>(["freelance-uiux", "mdmedia"]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      {EXPERIENCES.map((exp, index) => {
        const isExpanded = expandedIds.includes(exp.id);
        const isCurrent = exp.period.toLowerCase().includes("present") || exp.period.toLowerCase().includes("now");
        const isMDMedia = exp.id === "mdmedia";

        return (
          <div
            key={exp.id}
            className={cn(
              "rounded-2xl border transition-all duration-300 bg-white overflow-hidden",
              isCurrent || isMDMedia
                ? "border-black/15 shadow-sm hover:border-black/30"
                : "border-black/5 hover:border-black/20"
            )}
          >
            {/* Header / Clickable Card summary */}
            <button
              onClick={() => toggleExpand(exp.id)}
              className="w-full text-left p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer focus:outline-none"
              aria-expanded={isExpanded}
            >
              <div className="flex flex-col gap-1.5 flex-grow">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-semibold text-zinc-500 flex items-center gap-1.5 bg-zinc-100 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.period}
                  </span>
                  {isCurrent && (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active Role
                    </span>
                  )}
                  {exp.location && (
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#111111] group-hover:text-black transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-base md:text-lg font-medium text-zinc-500">
                    — {exp.company}
                  </span>
                </div>

                <p className="text-sm text-zinc-600 font-normal mt-1 line-clamp-1">
                  {exp.description}
                </p>
              </div>

              {/* Chevron Toggle */}
              <div className="shrink-0 self-end md:self-center">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-transform duration-300",
                    isExpanded ? "rotate-180 bg-[#111111] text-white" : "bg-zinc-50 text-zinc-600 group-hover:bg-zinc-100"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {/* Expanded Key Points */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-7 md:pb-7 pt-2 border-t border-black/5 bg-zinc-50/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                      Key Responsibilities & Learnings
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {exp.keyPoints.map((point, i) => (
                        <li key={i} className="text-sm md:text-[15px] text-zinc-700 leading-relaxed flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
