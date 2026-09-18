"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, Download, Sparkles, Heart } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const DribbbleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
    <path d="M8.5 2.5c4.78 5.75 6.78 12.5 6.78 19"></path>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-[#111111] text-white overflow-hidden pt-24 pb-12 mt-24 rounded-t-[3rem] md:rounded-t-[4rem]">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-b from-[#BEF264]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Massive Dribbble-Style Callout Header */}
        <div className="flex flex-col items-center text-center mb-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#BEF264] text-xs font-bold mb-6 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#BEF264] animate-pulse" />
            <span>Open for internship & junior UI/UX roles</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.05] mb-6">
            Let's build something <span className="font-playfair italic text-[#BEF264] font-normal">extraordinary</span> together.
          </h2>

          <p className="text-zinc-400 text-base md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
            Have a project in mind, an internship opportunity, or just want to connect? My inbox is always open.
          </p>

          {/* Big Interactive Email Pill Button */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:rkyan22@gmail.com"
              className="inline-flex items-center gap-3 bg-[#BEF264] text-[#111111] hover:bg-white px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 shadow-[0_0_30px_rgba(190,242,100,0.3)] group"
            >
              <Mail className="w-5 h-5" /> rkyan22@gmail.com
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/15 px-7 py-4 rounded-full font-bold text-base transition-all hover:scale-105 backdrop-blur-md"
            >
              <Download className="w-5 h-5 text-[#BEF264]" /> Download CV (PDF)
            </a>
          </div>
        </div>

        {/* Middle Navigation & Socials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-y border-white/10 items-center justify-between">
          
          {/* Brand & Identity */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <Link href="/" className="font-bold text-3xl tracking-tighter text-white hover:text-[#BEF264] transition-colors">
              Rakyan<span className="text-[#BEF264]">.</span>
            </Link>
            <p className="text-zinc-400 text-sm font-medium">
              UI/UX Designer • Information Systems Student
            </p>
            <p className="text-xs text-zinc-500">
              Telkom University Purwokerto • Indonesia
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4 flex flex-wrap items-center justify-start md:justify-center gap-6 text-sm font-semibold text-zinc-300">
            <a href="#featured-work" className="hover:text-[#BEF264] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#BEF264] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#BEF264] transition-colors">Experience</a>
            <a href="#process" className="hover:text-[#BEF264] transition-colors">Process</a>
            <a href="#skills" className="hover:text-[#BEF264] transition-colors">Skills</a>
          </div>

          {/* Social Icons Strip */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-3">
            <a
              href="https://www.linkedin.com/in/rakyan-sakuntala-9a9841219/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#BEF264] hover:text-[#111111] text-white flex items-center justify-center transition-all hover:scale-110 border border-white/10"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/rakyann"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#BEF264] hover:text-[#111111] text-white flex items-center justify-center transition-all hover:scale-110 border border-white/10"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#BEF264] hover:text-[#111111] text-white flex items-center justify-center transition-all hover:scale-110 border border-white/10"
              aria-label="Dribbble"
            >
              <DribbbleIcon className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#BEF264] hover:text-[#111111] text-white flex items-center justify-center transition-all hover:scale-110 border border-white/10"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} Rakyan Jenar Sakuntala. Designed & crafted with care.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#BEF264] group-hover:text-black transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
