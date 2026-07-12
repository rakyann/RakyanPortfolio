"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-24 lg:pt-32 flex flex-col items-start max-w-5xl">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]"
          >
            Hi, I'm Rakyan. <br className="hidden md:block" />
            <span className="text-muted-foreground">Designing thoughtful digital experiences.</span>
          </motion.h1>

          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance mt-4"
          >
            I'm a UI/UX Designer combining strategic thinking with high-craft execution to solve complex business problems.
          </motion.p>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <Link
              href="/work"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
                "bg-foreground text-background hover:bg-foreground/90"
              )}
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
                "bg-muted text-foreground hover:bg-muted-foreground/20"
              )}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="mailto:rkyan22@gmail.com"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
                "border border-border bg-transparent hover:bg-muted/50"
              )}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy/Approach Section */}
      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Design is not just what it looks like. It's how it works.
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              I believe in an end-to-end approach to product design. From generative research and framing the right problem, to pixel-perfect execution and collaborating closely with engineers.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4">
              More about my process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-muted/30 border border-border flex items-center justify-center">
            {/* Placeholder for an elegant 3D element, abstract visual, or professional photo */}
            <div className="text-muted-foreground font-mono text-sm">
              [Visual / 3D Abstract Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
          <Link href="/work" className="hidden md:inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="flex flex-col gap-12 md:gap-24">
          {/* Project 1 */}
          <div className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-full md:w-3/5 aspect-[4/3] rounded-2xl bg-muted overflow-hidden border border-border relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-sm group-hover:scale-105 transition-transform duration-500">
                [MDMedia Internal Portal Mockup]
              </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full border border-border text-xs font-medium bg-background/50">Dashboard</span>
                <span className="px-3 py-1 rounded-full border border-border text-xs font-medium bg-background/50">B2B</span>
              </div>
              <h3 className="text-2xl font-bold">MDMedia Internal Portal</h3>
              <p className="text-muted-foreground">
                Redesigning an enterprise portal to streamline workflows and improve operational efficiency for over 500+ employees.
              </p>
              <Link href="/work/mdmedia-portal" className="inline-flex items-center gap-2 mt-4 font-medium group-hover:gap-4 transition-all">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center">
            <div className="w-full md:w-3/5 aspect-[4/3] rounded-2xl bg-muted overflow-hidden border border-border relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-red-500/10" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-sm group-hover:scale-105 transition-transform duration-500">
                [SobatAhli Mockup]
              </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full border border-border text-xs font-medium bg-background/50">Mobile App</span>
                <span className="px-3 py-1 rounded-full border border-border text-xs font-medium bg-background/50">SaaS</span>
              </div>
              <h3 className="text-2xl font-bold">SobatAhli Platform</h3>
              <p className="text-muted-foreground">
                Creating an intuitive expert consultation platform connecting professionals with tailored advice efficiently.
              </p>
              <Link href="/work/sobatahli" className="inline-flex items-center gap-2 mt-4 font-medium group-hover:gap-4 transition-all">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/work" className="inline-flex items-center gap-2 text-foreground font-medium bg-muted px-6 py-3 rounded-full">
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
