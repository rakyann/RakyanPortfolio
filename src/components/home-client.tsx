"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Download, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Code2, 
  Palette, 
  LayoutGrid, 
  ExternalLink 
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { EXPERIENCES, EDUCATIONS, SKILL_CATEGORIES, PROCESS_STEPS } from "@/data/experience";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomeClient({
  projects = PROJECTS,
}: {
  profile?: any;
  projects?: Project[];
  testimonials?: any[];
  contacts?: any[];
}) {
  return (
    <div className="flex flex-col bg-[#FAFAFA] text-[#111111] min-h-screen font-sans selection:bg-[#BEF264] selection:text-black">
      {/* Universal Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 w-full pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 overflow-hidden">
        {/* Subtle Lime Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#BEF264]/25 via-[#BEF264]/5 to-transparent -z-10 blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white shadow-sm text-xs font-semibold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Internship & Junior UI/UX Roles</span>
            </motion.div>

            {/* Main Hero Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#111111] leading-[1.05] mb-6">
                Hi, I'm Rakyan. <br />
                <span className="font-playfair italic font-normal text-zinc-600">UI/UX Designer</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                Designing intuitive digital experiences by connecting user needs, visual design, and technology.
              </p>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-[#111111] text-white hover:bg-black px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md"
              >
                Explore Work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#111111] border border-black/10 hover:border-black/30 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-sm"
              >
                <Download className="w-4 h-4 text-zinc-500" /> Download CV ↗
              </a>
            </motion.div>

            {/* Profile Avatar & Trust Strip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-3xl flex flex-col items-center"
            >
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-b from-[#BEF264] to-zinc-200 shadow-xl mb-6">
                <img
                  src="/rakyan_new_profile.jpeg"
                  alt="Rakyan Jenar Sakuntala"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Quick Tags Strip */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-semibold text-zinc-600">
                <span className="px-3.5 py-1.5 bg-white rounded-full border border-black/5 shadow-2xs">
                  Information Systems Student
                </span>
                <span className="px-3.5 py-1.5 bg-white rounded-full border border-black/5 shadow-2xs">
                  Telkom University Purwokerto
                </span>
                <span className="px-3.5 py-1.5 bg-white rounded-full border border-black/5 shadow-2xs">
                  Figma & Frontend Empathy
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-black/5">
        <div className="container mx-auto max-w-6xl">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
                Featured Case Studies
              </h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-base max-w-md font-medium">
              Real projects exploring user workflows, interface architectures, and collaborative development.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((project, index) => {
              const isFirst = index === 0; // MDMedia
              return (
                <div
                  key={project.slug}
                  className="group rounded-3xl border border-black/10 bg-[#FAFAFA] p-6 md:p-10 transition-all duration-300 hover:shadow-xl hover:border-black/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                    
                    {/* Visual Preview */}
                    <div className="lg:col-span-7 order-1 lg:order-1">
                      <Link
                        href={`/work/${project.slug}`}
                        className="block relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-200 border border-black/5 shadow-sm group-hover:shadow-md transition-shadow"
                      >
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                        />
                      </Link>
                    </div>

                    {/* Content / Info */}
                    <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col justify-between">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white border border-black/10 text-zinc-800">
                            {project.category}
                          </span>
                          {project.isPersonalProject && (
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1">
                              ✦ Self-Initiated Project
                            </span>
                          )}
                          {project.isOngoing && (
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Ongoing
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3 tracking-tight group-hover:text-black">
                          <Link href={`/work/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>

                        {/* Description */}
                        <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                          {project.shortDescription}
                        </p>

                        {/* Key Metadata Points */}
                        <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded-xl border border-black/5 mb-6 text-xs">
                          <div>
                            <span className="text-zinc-400 font-semibold block uppercase text-[10px] mb-0.5">Role</span>
                            <span className="font-bold text-zinc-800">{project.overview.role}</span>
                          </div>
                          <div>
                            <span className="text-zinc-400 font-semibold block uppercase text-[10px] mb-0.5">Timeline</span>
                            <span className="font-bold text-zinc-800">{project.overview.timeline}</span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-zinc-400 font-semibold block uppercase text-[10px] mb-0.5">Tools</span>
                            <span className="font-medium text-zinc-700">{project.overview.tools.join(" • ")}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 pt-2">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold bg-[#111111] text-white hover:bg-black px-5 py-2.5 rounded-full transition-all group-hover:scale-102"
                        >
                          View Case Study <ArrowRight className="w-4 h-4" />
                        </Link>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 hover:text-black px-3 py-2"
                          >
                            Live Demo <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Projects Button */}
          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-700 hover:text-black border border-black/10 hover:border-black/30 px-6 py-3 rounded-full bg-[#FAFAFA] transition-all"
            >
              Browse All Projects & Archive <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Image */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                  About Me
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                  Design with purpose, informed by technology.
                </h2>
              </div>

              <div className="rounded-3xl overflow-hidden bg-zinc-200 border border-black/5 aspect-[4/3] shadow-md">
                <img
                  src="/rakyan_new_profile.jpeg"
                  alt="Rakyan Jenar Sakuntala"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Narrative & Pillars */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-4 text-base md:text-lg text-zinc-700 leading-relaxed font-medium">
                <p>
                  I am an <strong className="text-black font-bold">Information Systems student</strong> and <strong className="text-black font-bold">UI/UX Designer</strong> interested in the relationship between users, interfaces, and technology.
                </p>
                <p>
                  I enjoy exploring how structure, visual design, interaction, and user needs can come together to create useful digital products. My journey began with foundational visual styling and interface exploration in design studio internships, steadily progressing toward designing real-world digital platforms.
                </p>
                <p>
                  With my background in Information Systems and Software Engineering, I understand technical feasibility, speak the language of developers, and translate Figma concepts into practical frontend implementations.
                </p>
              </div>

              {/* Core Strengths Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-2xs">
                  <Palette className="w-6 h-6 mb-2 text-[#111111]" />
                  <h4 className="font-bold text-sm mb-1 text-black">Interface & Visual Design</h4>
                  <p className="text-xs text-zinc-600 leading-normal">
                    Crafting clean, accessible, and structured interfaces with strong typographic and spacing hierarchy.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-2xs">
                  <Code2 className="w-6 h-6 mb-2 text-[#111111]" />
                  <h4 className="font-bold text-sm mb-1 text-black">Technical Empathy</h4>
                  <p className="text-xs text-zinc-600 leading-normal">
                    Understanding HTML, CSS, and Bootstrap to ensure designs translate smoothly into production code.
                  </p>
                </div>
              </div>

              {/* Education Snippet */}
              <div className="p-6 rounded-2xl bg-white border border-black/10 mt-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  <GraduationCap className="w-4 h-4 text-zinc-800" /> Education
                </div>
                {EDUCATIONS.map((edu) => (
                  <div key={edu.id} className="mb-3 last:mb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h4 className="font-bold text-sm text-black">{edu.degree}</h4>
                      <span className="text-xs font-mono text-zinc-500">{edu.period}</span>
                    </div>
                    <p className="text-xs text-zinc-600 font-medium">{edu.institution}</p>
                    {edu.details && (
                      <p className="text-xs text-zinc-500 mt-0.5 font-mono">{edu.details}</p>
                    )}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-black/5">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] mb-4">
              Experience & Growth
            </h2>
            <p className="text-zinc-600 text-sm md:text-base font-medium">
              From early design explorations in studio internships to leading interface design and developer collaboration for real digital products.
            </p>
          </div>

          {/* Interactive Timeline */}
          <ExperienceTimeline />

        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" className="py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] mb-4">
              Design Process
            </h2>
            <p className="text-zinc-600 text-sm md:text-base font-medium">
              A structured approach to solving problems, validated through real design projects and continuous iteration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-3xl bg-white border border-black/5 shadow-2xs hover:border-black/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-playfair italic text-3xl text-zinc-300 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-black/5">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              Toolbox & Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] mb-4">
              Skills & Tools
            </h2>
            <p className="text-zinc-600 text-sm md:text-base font-medium">
              Core competencies developed through practical project work, coursework, and self-directed learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.category}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 flex flex-col"
              >
                <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b border-black/10">
                  {cat.category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-sm text-zinc-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] border border-black/20 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Get In Touch Callout Box */}
      <section className="py-20 px-6 md:px-12 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-xl mx-auto relative z-10 flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#BEF264] text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Let's Connect
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Looking for a UI/UX intern or designer?
              </h2>
              <p className="text-zinc-300 text-sm md:text-base mb-8 leading-relaxed font-medium">
                I'm actively seeking internship and junior UI/UX design opportunities where I can contribute, learn, and create intuitive digital products.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:rkyan22@gmail.com"
                  className="inline-flex items-center gap-2 bg-[#BEF264] text-[#111111] hover:bg-white px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md"
                >
                  <Mail className="w-4 h-4" /> Send an Email
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 hover:border-white px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4" /> Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}
