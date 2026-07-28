"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu, X, User } from "lucide-react";
import { FadeIn, RevealText } from "@/components/ui/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { InvestmentPlans } from "@/components/investment-plans";

export default function HomeClient({ 
  profile,
  projects = [], 
  testimonials = [], 
  contacts = [] 
}: {
  profile?: any;
  projects: any[];
  testimonials: any[];
  contacts: any[];
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

  return (
    <div className="flex flex-col bg-[#FAFAFA] text-[#111111] min-h-screen font-sans selection:bg-[#BEF264] selection:text-black">
      
      {/* Custom Navbar for this specific design (overriding default layout navbar) */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isNavHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none"
      >
        <div className="font-bold text-2xl tracking-tighter pointer-events-auto">Rakyan.</div>
        
        {/* Dummy Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/50 backdrop-blur-md pointer-events-auto">
          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-[10px]">W</div>
          <span className="text-xs font-bold tracking-tight">Website Of The Day 2026</span>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center pointer-events-auto hover:bg-black hover:text-white transition-colors relative z-[101]"
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
            className="fixed top-24 right-6 md:right-12 z-[100] bg-white/95 backdrop-blur-xl border border-black/5 rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-6 pointer-events-auto min-w-[200px]"
          >
            <div className="flex flex-col gap-4 text-lg font-medium">
              <Link href="#recent-works" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#b3ff3b] hover:translate-x-1 transition-all">Recent Works</Link>
              <div className="w-full h-px bg-black/5" />
              <Link href="#process" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#b3ff3b] hover:translate-x-1 transition-all">Process</Link>
              <div className="w-full h-px bg-black/5" />
              <Link href="#selected-works" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#b3ff3b] hover:translate-x-1 transition-all">Selected Works</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative z-0 w-full min-h-[90vh] md:min-h-[110vh] flex flex-col items-center pt-32 overflow-hidden">
        {/* Lime Green Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-[#b3ff3b] via-[#d6ff79] to-[#FAFAFA] -z-10 opacity-100" />
        
        <div className="relative z-10 text-center w-full max-w-6xl px-4 mt-8 md:mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-[12vw] md:text-[8rem] font-medium leading-[0.9] tracking-tighter"
          >
            Hi I'm {profile?.name || "Rakyan"}
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-[12vw] md:text-[9rem] font-playfair italic leading-[0.9] tracking-tight relative z-30 mix-blend-overlay text-black/80 mt-2 md:mt-0"
          >
            {profile?.role || "Product Designer"}
          </motion.h1>
        </div>

        {/* Central Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-12 md:bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[400px] md:h-[700px] z-20 pointer-events-none"
        >
          {/* User Portrait Image */}
          <div className="w-full h-full relative overflow-hidden flex items-end justify-center pointer-events-auto pb-8">
            <img 
              src={profile?.imageUrl || "/rakyan_new_profile.jpeg"} 
              className="w-[280px] md:w-[350px] h-[350px] md:h-[450px] object-cover rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white/50" 
              alt={profile?.name || "Rakyan"} 
            />
          </div>
        </motion.div>

        {/* Floating Elements (Z-index above image) */}
        <div className="absolute top-[25%] md:top-[60%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-24 z-30 w-max max-w-[90vw]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 md:bg-white backdrop-blur-md md:backdrop-blur-none rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5"
          >
            <span className="w-3 h-3 rounded-full bg-[#BEF264] animate-pulse shadow-[0_0_10px_#BEF264]" />
            <span className="text-sm font-semibold">Available for new opportunities</span>
          </motion.div>
        </div>

        <div className="absolute bottom-6 md:bottom-20 left-4 md:left-24 z-30 flex items-center gap-4 scale-75 md:scale-100 origin-bottom-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center bg-white/80 md:bg-transparent p-2 md:p-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none"
          >
            {/* Avatar group */}
            <div className="flex -space-x-3">
              {[1, 2].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center border-2 border-white shadow-sm">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
              ))}
              <img 
                src="/mdmedia_logo.svg" 
                alt="Client Logo" 
                className="w-10 h-10 rounded-full bg-white object-cover border-2 border-white shadow-sm" 
              />
            </div>
            <div className="ml-2 md:ml-4 text-xs font-medium text-zinc-600 md:text-zinc-500 max-w-[140px] md:max-w-[160px] leading-tight md:leading-normal pr-2 md:pr-0">
              Trusted by <strong className="text-black">select brands & clients</strong> for high-impact digital solutions.
            </div>
          </motion.div>
        </div>

        <div className="absolute top-[45%] md:top-[55%] right-4 md:right-24 z-30 hidden md:block">
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="text-right text-lg font-medium max-w-[200px]"
          >
            {profile?.heroDescription || "passionate about creating intuitive digital experiences that connect users with value."}
          </motion.p>
        </div>

        <div className="absolute bottom-6 md:bottom-32 right-4 md:right-24 z-30 scale-75 md:scale-100 origin-bottom-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
          >
            <MagneticButton className="bg-[#111111] text-white px-8 py-4 rounded-full flex items-center gap-2 text-sm font-bold shadow-2xl hover:scale-105 transition-transform" onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}>
              <ArrowRight className="w-4 h-4" /> Get in Touch
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack / Skills Strip */}
      <section className="w-full py-8 md:py-12 border-b border-black/5 overflow-hidden bg-white z-20 relative">
        <div className="flex items-center justify-center md:justify-around flex-wrap gap-4 md:gap-8 px-4 md:px-8 opacity-60">
          <span className="text-base md:text-xl font-bold font-serif text-black">Figma</span>
          <span className="text-base md:text-xl font-bold tracking-tight text-black">Framer</span>
          <span className="text-base md:text-xl font-bold text-black">UI/UX Design</span>
          <span className="text-base md:text-xl font-bold font-serif text-black">User Research</span>
          <span className="text-base md:text-xl font-bold tracking-tighter text-black">Product Strategy</span>
        </div>
      </section>

      {/* Seen Recent Works (Bento Layout - CV Gani Showcase) */}
      {(() => {
        const ganiFeatured = projects.find(p => p.title.toLowerCase().includes("gani")) || projects[0];
        return (
          <section id="recent-works" className="container mx-auto px-4 md:px-8 py-24">
            <div className="w-full bg-[#BEF264] rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 relative">
              <Link 
                href={ganiFeatured?.id ? `/work/${ganiFeatured.id}` : "/work/1"}
                className="block group relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Top Left Large Image */}
                  <div className="md:col-span-7 bg-black/10 rounded-2xl md:rounded-[2rem] min-h-[200px] md:min-h-[400px] flex overflow-hidden relative">
                    <img 
                      src="/gani_header.png" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                      alt={ganiFeatured?.title || "CV Gani Pranata Consulting"} 
                    />
                  </div>
                  {/* Top Right Grid */}
                  <div className="md:col-span-5 grid grid-rows-2 gap-4">
                    <div className="bg-black/10 rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex items-end">
                      <h3 className="text-xl md:text-3xl font-playfair italic font-medium leading-tight text-[#111111] group-hover:underline">
                        {ganiFeatured?.title || "CV Gani Pranata - Smart Psychology & HR Platform"}
                      </h3>
                    </div>
                    <div className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#88c226] mb-1">Featured Case Study</span>
                      <h3 className="text-xl font-bold text-[#111111] line-clamp-2">
                        {ganiFeatured?.description || "Smart Tele-Psychology & Real-Time Consultation Engine"}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link 
                href={ganiFeatured?.id ? `/work/${ganiFeatured.id}` : "/work/1"} 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black text-white px-8 py-3.5 rounded-full shadow-2xl font-bold text-sm whitespace-nowrap hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer border border-white/20"
              >
                Read Case Study <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        );
      })()}

      {/* Floating Badges & Strategy Text */}
      <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col justify-center items-center relative md:min-h-[60vh]">
        <div className="max-w-4xl text-center z-10 relative">
          <p className="font-playfair text-2xl md:text-3xl italic text-zinc-400 mb-4 md:mb-6">Hello!</p>
          <h2 className="text-3xl md:text-6xl font-medium leading-snug md:leading-tight tracking-tight px-2 md:px-0">
            focus is on blending clear strategy, thoughtful design, and user empathy to <span className="text-zinc-400">craft experiences that solve real problems</span>
          </h2>
        </div>

        {/* Floating Pills - Flex on Mobile, Absolute on Desktop */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 md:mt-0 md:absolute md:top-0 md:left-0 md:w-full md:h-full pointer-events-none">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative md:absolute md:top-20 md:left-[10%] pointer-events-auto bg-white border border-black/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500" /> Product Design
          </motion.div>
          
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="relative md:absolute md:top-40 md:right-[15%] pointer-events-auto bg-white border border-black/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400" /> Design Systems
          </motion.div>

          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="relative md:absolute md:bottom-32 md:left-[15%] pointer-events-auto bg-white border border-black/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" /> UX Design
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="relative md:absolute md:bottom-20 md:right-[20%] pointer-events-auto bg-white border border-black/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" /> Brand Identity
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side: Heading */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold text-zinc-500">(About Me)</span>
            <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.05] tracking-tighter max-w-xl">
              {profile?.aboutHeader || "A Deep Dive into My Life's Experiences and Lessons Learned"}
            </h2>
          </div>

          {/* Right Side: Image and Text */}
          <div className="flex flex-col gap-8">
            <div className="w-full aspect-[4/3] bg-zinc-200 rounded-[2rem] overflow-hidden">
              <img 
                src={profile?.imageUrl || "/rakyan_new_profile.jpeg"} 
                alt={`${profile?.name || "Rakyan"} - About Me`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-6 text-zinc-600 text-lg leading-relaxed font-medium">
              <p>{profile?.aboutText1 || "Hello, I'm Rakyan, a passionate designer based in Indonesia. With a keen eye for aesthetics and a love for creativity, I strive to bring innovative ideas to life through my designs."}</p>
              <p>{profile?.aboutText2 || "Each experience has not only honed my skills but also deepened my understanding of the impact design can have on people's lives."}</p>
            </div>
          </div>
        </div>
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
            <p className="text-zinc-500 text-sm leading-relaxed">Understanding your goals, users, and challenges.</p>
          </div>

          {/* Step 2 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/90 backdrop-blur-sm border border-black/5 shadow-lg rounded-[2rem] p-8 relative z-10 md:-translate-y-4 snap-center">
            <div className="text-4xl font-playfair italic mb-8">02</div>
            <h3 className="text-xl font-bold mb-3">Research</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Diving deep into the market and finding the right opportunities.</p>
          </div>

          {/* Step 3 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/80 backdrop-blur-sm border border-black/5 rounded-[2rem] p-8 relative z-10 md:rotate-1 hover:rotate-0 transition-transform snap-center">
            <div className="text-4xl font-playfair italic mb-8">03</div>
            <h3 className="text-xl font-bold mb-3">Design</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Transforming insights into beautiful, functional experiences.</p>
          </div>
          
          {/* Step 4 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/70 backdrop-blur-sm border border-black/5 rounded-[2rem] p-8 relative z-10 md:translate-y-4 snap-center">
            <div className="text-4xl font-playfair italic mb-8">04</div>
            <h3 className="text-xl font-bold mb-3">Test</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Validating designs with real users to ensure it works flawlessly.</p>
          </div>

          {/* Step 5 */}
          <div className="w-full md:min-w-[280px] md:flex-1 bg-white/60 backdrop-blur-sm border border-black/5 rounded-[2rem] p-8 relative z-10 md:-rotate-2 hover:rotate-0 transition-transform snap-center">
            <div className="text-4xl font-playfair italic mb-8">05</div>
            <h3 className="text-xl font-bold mb-3">Deliver</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Launching the final product with precision and care.</p>
          </div>

          {/* Connecting SVG Line (Visible on Desktop) */}
          <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 -z-10 hidden md:block" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M 0 50 Q 250 100 500 50 T 1000 50" fill="none" stroke="#BEF264" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.length > 0 ? (
            testimonials.map((t, idx) => (
              <div key={t.id} className={`flex flex-col gap-6 ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}>
                <p className="text-lg font-medium leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  {t.imageUrl && !t.imageUrl.includes("unsplash.com") ? (
                    <img src={t.imageUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center border border-black/10">
                      <User className="w-5 h-5 text-zinc-400" />
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-zinc-500">No testimonials yet.</p>
          )}
        </div>
      </section>

      {/* Selected Works Grid */}
      <section id="selected-works" className="container mx-auto px-4 md:px-8 py-24">
        <div className="text-center mb-16">
          <p className="font-playfair italic text-zinc-500 mb-2">/ Best Projects</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.length > 0 ? (
            projects.map((p, idx) => (
              <Link href={`/work/${p.id}`} key={p.id} className={`group ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}>
                <div className="bg-zinc-100 rounded-3xl p-6 aspect-[4/3] mb-4 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5">
                  <img src={p.image || "/gani_header.png"} className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500" alt={p.title} />
                </div>
                <div className="flex items-center justify-between px-2">
                  <h3 className="font-bold text-xl tracking-tight">{p.title}</h3>
                  <div className="flex gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full border border-black/10 bg-white shadow-sm">Project</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-zinc-500">No projects yet.</p>
          )}
        </div>
      </section>

      {/* Investment Plans Section */}
      {/* <InvestmentPlans /> */}

      {/* Simple Footer */}
      <footer id="footer" className="w-full bg-white border-t border-black/5 py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-bold text-2xl tracking-tighter">{profile?.name || "Rakyan"}.</div>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            {contacts.map((c) => (
              <a key={c.id} href={c.url} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                {c.platform}
              </a>
            ))}
          </div>
          <p className="text-xs text-zinc-400">© 2026 {profile?.name || "Rakyan"}. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
