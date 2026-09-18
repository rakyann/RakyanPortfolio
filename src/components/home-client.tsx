"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Menu, 
  X, 
  User, 
  Download, 
  Sparkles, 
  GraduationCap, 
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { EXPERIENCES, EDUCATIONS, SKILL_CATEGORIES, PROCESS_STEPS } from "@/data/experience";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function HomeClient({ 
  projects = PROJECTS,
}: {
  profile?: any;
  projects?: Project[];
  testimonials?: any[];
  contacts?: any[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  });

  const featuredProject = projects.find(p => p.slug === "mdmedia-portal") || projects[0];

  return (
    <div className="flex flex-col bg-[#FAFAFA] text-[#111111] min-h-screen font-sans selection:bg-[#BEF264] selection:text-black">
      
      {/* Signature Floating Top Navigation */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isNavHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none"
      >
        <Link href="/" className="font-bold text-2xl tracking-tighter pointer-events-auto text-[#111111] hover:opacity-80 transition-opacity">
          Rakyan.
        </Link>
        
        {/* Availability Pill & Quick CV Download */}
        <div className="hidden md:flex items-center gap-3 pointer-events-auto">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/70 backdrop-blur-md shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BEF264] animate-pulse shadow-[0_0_8px_#BEF264]" />
            <span className="text-xs font-bold tracking-tight text-zinc-800">UI/UX Designer • Available for Opportunities</span>
          </div>

          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-black hover:scale-105 transition-all shadow-sm"
          >
            Download CV <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center pointer-events-auto hover:bg-black hover:text-white transition-colors relative z-[101] shadow-sm cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Dropdown Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-24 right-6 md:right-12 z-[100] bg-white/95 backdrop-blur-xl border border-black/10 rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-6 pointer-events-auto min-w-[220px]"
          >
            <div className="flex flex-col gap-3 text-base font-semibold">
              <a href="#featured-work" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#88c226] hover:translate-x-1 transition-all">
                Featured Work
              </a>
              <div className="w-full h-px bg-black/5" />
              <a href="#selected-works" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#88c226] hover:translate-x-1 transition-all">
                All Projects
              </a>
              <div className="w-full h-px bg-black/5" />
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#88c226] hover:translate-x-1 transition-all">
                About Me
              </a>
              <div className="w-full h-px bg-black/5" />
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#88c226] hover:translate-x-1 transition-all">
                Experience
              </a>
              <div className="w-full h-px bg-black/5" />
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#88c226] hover:translate-x-1 transition-all">
                Design Process
              </a>
              <div className="w-full h-px bg-black/5" />
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#88c226] hover:translate-x-1 transition-all">
                Skills
              </a>
              <div className="pt-2 border-t border-black/10">
                <a 
                  href="/cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#111111] text-white rounded-xl text-xs font-bold shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download className="w-3.5 h-3.5" /> Download CV (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signature Hero Section */}
      <section className="relative z-0 w-full min-h-[90vh] md:min-h-[110vh] flex flex-col items-center pt-32 overflow-hidden">
        {/* Signature Lime Green Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-[#b3ff3b] via-[#d6ff79] to-[#FAFAFA] -z-10 opacity-100" />
        
        <div className="relative z-10 text-center w-full max-w-6xl px-4 mt-8 md:mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-[12vw] md:text-[8rem] font-medium leading-[0.9] tracking-tighter"
          >
            Hi I'm Rakyan
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-[12vw] md:text-[9rem] font-playfair italic leading-[0.9] tracking-tight relative z-30 mix-blend-overlay text-black/80 mt-2 md:mt-0"
          >
            UI/UX Designer
          </motion.h1>
        </div>

        {/* Central Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-28 md:bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[350px] md:h-[700px] z-20 pointer-events-none"
        >
          <div className="w-full h-full relative overflow-hidden flex items-end justify-center pointer-events-auto pb-8">
            <img 
              src="/rakyan_new_profile.jpeg" 
              className="w-[280px] md:w-[350px] h-[350px] md:h-[450px] object-cover rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white/50" 
              alt="Rakyan Jenar Sakuntala" 
            />
          </div>
        </motion.div>

        {/* Floating Left Tag */}
        <div className="absolute top-[25%] md:top-[60%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-24 z-30 w-max max-w-[90vw]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 md:bg-white backdrop-blur-md md:backdrop-blur-none rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5"
          >
            <span className="w-3 h-3 rounded-full bg-[#BEF264] animate-pulse shadow-[0_0_10px_#BEF264]" />
            <span className="text-xs md:text-sm font-semibold">Available for internship & junior roles</span>
          </motion.div>
        </div>

        {/* Floating Client Trust Tag */}
        <div className="absolute bottom-20 md:bottom-20 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 z-30 flex items-center gap-4 scale-90 md:scale-100 origin-bottom w-full justify-center md:justify-start md:w-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center bg-white/90 md:bg-transparent p-2 md:p-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none shadow-sm md:shadow-none"
          >
            <div className="flex -space-x-3">
              {[1, 2].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center border-2 border-white shadow-sm">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
              ))}
              <img 
                src="/mdmedia_logo.svg" 
                alt="MDMedia Logo" 
                className="w-10 h-10 rounded-full bg-white object-cover border-2 border-white shadow-sm" 
              />
            </div>
            <div className="ml-2 md:ml-4 text-xs font-medium text-zinc-600 md:text-zinc-500 max-w-[140px] md:max-w-[170px] leading-tight md:leading-normal pr-2 md:pr-0">
              Trusted for <strong className="text-black">real-world digital products</strong> & responsive interfaces.
            </div>
          </motion.div>
        </div>

        {/* Floating Right Supporting Statement */}
        <div className="absolute top-[45%] md:top-[55%] right-4 md:right-24 z-30 hidden md:block">
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="text-right text-base md:text-lg font-medium max-w-[220px] text-zinc-800"
          >
            Designing intuitive digital experiences by connecting user needs, visual design, and technology.
          </motion.p>
        </div>

        {/* Floating Action Button */}
        <div className="absolute bottom-4 md:bottom-32 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-24 z-30 scale-90 md:scale-100 origin-bottom w-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-3"
          >
            <MagneticButton 
              className="bg-[#111111] text-white px-7 py-3.5 rounded-full flex items-center gap-2 text-sm font-bold shadow-2xl hover:scale-105 transition-transform" 
              onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowRight className="w-4 h-4" /> Get in Touch
            </MagneticButton>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#111111] border border-black/10 px-6 py-3.5 rounded-full flex items-center gap-1.5 text-sm font-bold shadow-sm hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4 text-zinc-500" /> CV (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack / Skills Strip */}
      <section className="w-full py-8 md:py-12 border-b border-black/5 overflow-hidden bg-white z-20 relative">
        <div className="flex items-center justify-center md:justify-around flex-wrap gap-4 md:gap-8 px-4 md:px-8 opacity-60">
          <span className="text-base md:text-xl font-bold font-serif text-black">Figma</span>
          <span className="text-base md:text-xl font-bold tracking-tight text-black">UI/UX Design</span>
          <span className="text-base md:text-xl font-bold text-black">Design Systems</span>
          <span className="text-base md:text-xl font-bold font-serif text-black">Wireframing</span>
          <span className="text-base md:text-xl font-bold tracking-tighter text-black">Responsive HTML/CSS</span>
          <span className="text-base md:text-xl font-bold text-black">Developer Handoff</span>
        </div>
      </section>

      {/* Featured Bento Section (MDMedia Enterprise Portal) */}
      <section id="featured-work" className="container mx-auto px-4 md:px-8 py-24">
        <div className="w-full bg-[#BEF264] rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 relative shadow-lg">
          <Link 
            href={`/work/${featuredProject.slug}`}
            className="block group relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Top Left Large Image */}
              <div className="md:col-span-7 bg-black/10 rounded-2xl md:rounded-[2rem] min-h-[220px] md:min-h-[420px] flex overflow-hidden relative">
                <img 
                  src={featuredProject.heroImage} 
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700" 
                  alt={featuredProject.title} 
                />
              </div>
              {/* Top Right Grid */}
              <div className="md:col-span-5 grid grid-rows-2 gap-4">
                <div className="bg-black/10 rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex items-end">
                  <h3 className="text-2xl md:text-3xl font-playfair italic font-medium leading-tight text-[#111111] group-hover:underline">
                    {featuredProject.title}
                  </h3>
                </div>
                <div className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#88c226] mb-1">
                    Featured Case Study
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-[#111111] line-clamp-2">
                    {featuredProject.shortDescription}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-zinc-500">
                    <span>{featuredProject.overview.role}</span> • <span>{featuredProject.overview.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
          <Link 
            href={`/work/${featuredProject.slug}`} 
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black text-white px-8 py-3.5 rounded-full shadow-2xl font-bold text-sm whitespace-nowrap hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer border border-white/20"
          >
            Read Case Study <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Floating Badges & Strategy Text */}
      <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col justify-center items-center relative md:min-h-[60vh]">
        <div className="max-w-4xl text-center z-10 relative">
          <p className="font-playfair text-2xl md:text-3xl italic text-zinc-400 mb-4 md:mb-6">Hello!</p>
          <h2 className="text-3xl md:text-6xl font-medium leading-snug md:leading-tight tracking-tight px-2 md:px-0">
            I focus on blending clear strategy, thoughtful design, and user empathy to <span className="text-zinc-400">craft experiences that solve real problems</span>
          </h2>
        </div>

        {/* Floating Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 md:mt-0 md:absolute md:top-0 md:left-0 md:w-full md:h-full pointer-events-none">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative md:absolute md:top-20 md:left-[10%] pointer-events-auto bg-white border border-black/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500" /> UI/UX Design
          </motion.div>
          
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="relative md:absolute md:top-40 md:right-[15%] pointer-events-auto bg-white border border-black/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400" /> Design Systems
          </motion.div>

          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="relative md:absolute md:bottom-32 md:left-[15%] pointer-events-auto bg-white border border-black/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" /> Responsive Layouts
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="relative md:absolute md:bottom-20 md:right-[20%] pointer-events-auto bg-white border border-black/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" /> Frontend Empathy
          </motion.div>
        </div>
      </section>

      {/* Selected Works Grid */}
      <section id="selected-works" className="container mx-auto px-4 md:px-8 py-24">
        <div className="text-center mb-16">
          <p className="font-playfair italic text-zinc-500 mb-2">/ Portfolio Archive</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Selected Works</h2>
          <p className="text-zinc-600 text-sm mt-2 max-w-md mx-auto">
            A showcase of professional engagements, corporate portals, and self-initiated digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, idx) => (
            <Link 
              href={`/work/${p.slug}`} 
              key={p.slug} 
              className={`group ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div className="bg-zinc-100 rounded-3xl p-5 md:p-6 aspect-[16/11] mb-4 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5">
                <img 
                  src={p.heroImage} 
                  className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-104 transition-transform duration-500" 
                  alt={p.title} 
                />
              </div>
              <div className="flex flex-col gap-1.5 px-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-black/10 bg-white shadow-2xs">
                      {p.category}
                    </span>
                    {p.isPersonalProject && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                        ✦ Self-Initiated
                      </span>
                    )}
                    {p.isOngoing && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Ongoing
                      </span>
                    )}
                  </div>
                  {p.link && (
                    <span className="text-xs font-semibold text-zinc-400 group-hover:text-black flex items-center gap-1">
                      Live <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-xl md:text-2xl tracking-tight text-[#111111] group-hover:text-black mt-1">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-600 line-clamp-2 leading-relaxed font-medium">
                  {p.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 md:px-8 py-24 border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side: Heading */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold text-zinc-500">(About Me)</span>
            <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.05] tracking-tighter max-w-xl">
              Designing with purpose, informed by technology.
            </h2>
          </div>

          {/* Right Side: Image and Text */}
          <div className="flex flex-col gap-6">
            <div className="w-full aspect-[4/3] bg-zinc-200 rounded-[2rem] overflow-hidden shadow-md">
              <img 
                src="/rakyan_new_profile.jpeg" 
                alt="Rakyan Jenar Sakuntala" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-4 text-zinc-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Hello, I'm <strong className="text-black font-bold">Rakyan Jenar Sakuntala</strong>, an Information Systems student at Telkom University Purwokerto and UI/UX Designer based in Indonesia.
              </p>
              <p>
                I enjoy exploring how structure, visual design, interaction, and user needs can come together to create useful digital products. My background in Information Systems and Software Engineering also helps me communicate with developers and understand the technical side of digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="container mx-auto px-4 md:px-8 py-24 bg-white border-y border-black/5">
        <div className="text-center mb-16">
          <p className="font-playfair italic text-zinc-500 mb-2">/ Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Experience & Growth</h2>
          <p className="text-zinc-500 text-sm mt-2 max-w-md mx-auto">
            From foundational visual design studio internships to collaborating on real-world digital products.
          </p>
        </div>

        <ExperienceTimeline />
      </section>

      {/* Here's how it works (Process) */}
      <section id="process" className="container mx-auto px-4 md:px-8 py-24 bg-[#FAFAFA]">
        <div className="text-center mb-24">
          <p className="font-playfair italic text-zinc-500 mb-2">/ Our Process Explained</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Here's how it works</h2>
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 overflow-x-auto pb-8 snap-x">
          
          {/* Step 1 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white border border-black/5 shadow-xl shadow-black/5 rounded-[2rem] p-8 relative z-10 md:-rotate-2 hover:rotate-0 transition-transform snap-center">
            <div className="text-4xl font-playfair italic mb-8">01</div>
            <h3 className="text-xl font-bold mb-3">Discover</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Understanding the problem space, goals, and context.</p>
          </div>

          {/* Step 2 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/90 backdrop-blur-sm border border-black/5 shadow-lg rounded-[2rem] p-8 relative z-10 md:-translate-y-4 snap-center">
            <div className="text-4xl font-playfair italic mb-8">02</div>
            <h3 className="text-xl font-bold mb-3">Research</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Gathering insights through audits and context exploration.</p>
          </div>

          {/* Step 3 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/80 backdrop-blur-sm border border-black/5 rounded-[2rem] p-8 relative z-10 md:rotate-1 hover:rotate-0 transition-transform snap-center">
            <div className="text-4xl font-playfair italic mb-8">03</div>
            <h3 className="text-xl font-bold mb-3">Define</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Structuring information architecture and user requirements.</p>
          </div>
          
          {/* Step 4 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/70 backdrop-blur-sm border border-black/5 rounded-[2rem] p-8 relative z-10 md:translate-y-4 snap-center">
            <div className="text-4xl font-playfair italic mb-8">04</div>
            <h3 className="text-xl font-bold mb-3">Design</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Transforming wireframes into polished, responsive high-fidelity UI.</p>
          </div>

          {/* Step 5 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/60 backdrop-blur-sm border border-black/5 rounded-[2rem] p-8 relative z-10 md:-rotate-2 hover:rotate-0 transition-transform snap-center">
            <div className="text-4xl font-playfair italic mb-8">05</div>
            <h3 className="text-xl font-bold mb-3">Test</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Validating interfaces and refining solutions based on feedback.</p>
          </div>

          {/* Step 6 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/50 backdrop-blur-sm border border-black/5 rounded-[2rem] p-8 relative z-10 md:translate-y-2 hover:rotate-0 transition-transform snap-center">
            <div className="text-4xl font-playfair italic mb-8">06</div>
            <h3 className="text-xl font-bold mb-3">Deliver</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Preparing design handoff and collaborating with developers.</p>
          </div>

          {/* Connecting SVG Line (Visible on Desktop) */}
          <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 -z-10 hidden md:block" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M 0 50 Q 250 100 500 50 T 1000 50" fill="none" stroke="#BEF264" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 md:px-8 py-24 bg-white border-t border-black/5">
        <div className="text-center mb-16">
          <p className="font-playfair italic text-zinc-500 mb-2">/ Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Skills & Tools</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category} className="p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 shadow-2xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-black mb-4 pb-2 border-b border-black/10">
                {cat.category}
              </h3>
              <ul className="flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-xs md:text-sm text-zinc-700 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] border border-black/20 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Brand Footer */}
      <footer id="footer" className="w-full bg-white border-t border-black/5 py-14">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <div className="font-bold text-2xl tracking-tighter text-[#111111]">Rakyan.</div>
            <p className="text-xs text-zinc-500 font-medium">UI/UX Designer & Information Systems Student</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-600">
            <a href="https://github.com/rakyann" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rakyan-sakuntala-9a9841219/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="mailto:rkyan22@gmail.com" className="hover:text-black transition-colors">
              rkyan22@gmail.com
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="font-bold text-black hover:underline flex items-center gap-1">
              <Download className="w-3.5 h-3.5" /> CV (PDF)
            </a>
          </div>

          <p className="text-xs text-zinc-400">© 2026 Rakyan Jenar Sakuntala. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
