"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function Work() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Selected Work
        </h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          A collection of projects showcasing my approach to problem-solving, user research, and interface design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col gap-4"
            >
              <Link href={`/work/${project.slug}`} className="block relative aspect-video rounded-2xl bg-muted overflow-hidden border border-border">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color}`} />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-sm group-hover:scale-105 transition-transform duration-500">
                  [{project.title} Mockup]
                </div>
              </Link>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full border border-border text-xs font-medium bg-muted/50">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  <Link href={`/work/${project.slug}`} className="hover:underline underline-offset-4">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 font-medium group-hover:gap-4 transition-all">
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
