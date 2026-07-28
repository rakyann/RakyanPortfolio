"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    year: "2023 - Present",
    role: "Senior Product Designer",
    company: "TechNova",
    description: "Leading the design system team and overhauling the core SaaS product experience, resulting in a 40% increase in user retention."
  },
  {
    id: "2",
    year: "2021 - 2023",
    role: "UI/UX Designer",
    company: "Creative Labs",
    description: "Designed end-to-end mobile applications for fintech clients. Collaborated closely with engineering to ensure pixel-perfect implementation."
  },
  {
    id: "3",
    year: "2019 - 2021",
    role: "Visual Designer",
    company: "Studio 42",
    description: "Created brand identities, marketing websites, and digital campaigns for various startups in the e-commerce space."
  }
];

export function ExperienceTimeline() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <div className="w-full flex flex-col gap-4">
      {timelineData.map((item) => (
        <div key={item.id} className="border-b border-border/50 last:border-0 pb-6">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between py-4 group text-left"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 w-full">
              <span className="text-sm font-mono text-muted-foreground w-32">{item.year}</span>
              <span className="text-2xl md:text-3xl font-bold group-hover:text-rose-500 transition-colors">
                {item.role}
              </span>
              <span className="text-xl text-muted-foreground md:ml-auto">{item.company}</span>
            </div>
            <div className="ml-4 shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
              {openId === item.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </div>
          </button>
          
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-6 md:pl-[11rem] max-w-4xl text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
