import prisma from "@/lib/prisma";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ExternalLink, Calendar, User, Wrench, Layers, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await params;
  const idOrSlug = resolvedParams.id;

  let allDbProjects: any[] = [];
  try {
    allDbProjects = await prisma.project.findMany({
      orderBy: { createdAt: "asc" },
    });
  } catch (error) {
    console.warn("Prisma fetch failed in ProjectDetailPage:", error);
  }

  let project: any = null;
  const projectId = parseInt(idOrSlug, 10);

  if (!isNaN(projectId)) {
    project = allDbProjects.find(p => p.id === projectId);
  }

  // Fallback to static project data by slug if DB query yields no results or if non-numeric slug is used
  if (!project) {
    const staticProject = getProjectBySlug(idOrSlug);
    if (staticProject) {
      let fullImage = "/gani_hero.png";
      if (staticProject.slug === "mdmedia-portal") fullImage = "/mdmedia_figma.png";
      if (staticProject.slug === "olivia-ralph-wedding") fullImage = "/wedding_invitation.png";
      if (staticProject.slug === "dam-studio-3d") fullImage = "/dam_studio.png";

      project = {
        id: staticProject.slug,
        title: staticProject.title,
        description: staticProject.description,
        image: fullImage,
        link: "http://127.0.0.1:8000",
        createdAt: new Date(),
        content: `
# ${staticProject.title}

> **${staticProject.description}**

---

### 📌 Overview & Scope
* **Role:** ${staticProject.overview.role}
* **Timeline:** ${staticProject.overview.timeline}
* **Team:** ${staticProject.overview.team}
* **Tools:** ${staticProject.overview.tools.join(", ")}
* **Deliverables:** ${staticProject.overview.deliverables.join(", ")}

---

### 💡 Background & Core Challenge
${staticProject.background.why}

### 🎯 Key Goals & Success Metrics
* **Business Goals:** ${staticProject.goals.business.join("; ")}
* **User Goals:** ${staticProject.goals.user.join("; ")}
* **Metrics Tracked:** ${staticProject.goals.metrics.join(", ")}

---

### 🛠️ Problem Statement & UX Strategy
> **"${staticProject.problemStatement}"**

#### Key Insights
${staticProject.research.insights.map(item => `- ${item}`).join("\n")}

---

### 🚀 High-Complexity Core Features & Architecture

#### 1. Real-Time Client-to-Psychologist Live Chat
- **Sub-50ms Latency:** Built using WebSockets and Pusher integration for real-time messaging, typing indicators, and presence detection.
- **HIPAA-Compliant Privacy & Encryption:** Implemented end-to-end session encryption and automatic log anonymization to protect sensitive psychological conversations.
- **Session Control & Queuing:** Integrated real-time session timers, auto-extension prompts, and direct consultation queue management for psychologists.

#### 2. AI-Powered Consultation Summary Engine
- **Automated Context Analysis:** Once a chat consultation session ends, the system safely processes the anonymized message flow.
- **Structured Clinical Summary:** The AI model automatically generates a structured report containing Primary Concerns, Behavioral Indicators, and Psychologist Recommendations.
- **Psychologist Review & One-Click Handoff:** The generated summary is pushed directly to the Psychologist's Filament admin panel.

---

### 📈 Results & Measured Impact
* **Outcome:** ${staticProject.result.outcome}
* **Business Impact:** ${staticProject.result.businessImpact}
* **User Impact:** ${staticProject.result.userImpact}
* **Reflection:** ${staticProject.result.reflection}
`
      };
    }
  }

  if (!project) return notFound();

  // Compute Next & Previous project for seamless navigation
  let prevProject: any = null;
  let nextProject: any = null;
  if (allDbProjects.length > 1) {
    const currentIndex = allDbProjects.findIndex(p => p.id === project.id);
    if (currentIndex !== -1) {
      const prevIdx = (currentIndex - 1 + allDbProjects.length) % allDbProjects.length;
      const nextIdx = (currentIndex + 1) % allDbProjects.length;
      prevProject = allDbProjects[prevIdx];
      nextProject = allDbProjects[nextIdx];
    }
  }

  const isOngoing = project.title.toLowerCase().includes("ongoing") || project.description?.toLowerCase().includes("ongoing");

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-[#BEF264] selection:text-black">
      {/* Sticky Minimal Navbar */}
      <nav className="h-20 border-b border-black/5 flex items-center justify-between px-6 md:px-12 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-[#88c226] transition-colors font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        
        <div className="flex items-center gap-3">
          {isOngoing && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Ongoing Project
            </span>
          )}
          <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-zinc-400">
            Case Study
          </span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Case Study Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-xs font-bold tracking-wider uppercase shadow-sm">
              Featured Case Study
            </span>
            <span className="text-xs font-semibold text-zinc-400">
              {new Date(project.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.08] mb-6">
            {project.title}
          </h1>

          {project.description && (
            <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed italic font-playfair max-w-3xl mb-8">
              {project.description}
            </p>
          )}

          {/* Quick Overview Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-black/5 shadow-sm mt-8">
            <div>
              <p className="text-xs font-bold uppercase text-zinc-400 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Timeline
              </p>
              <p className="font-semibold text-sm">{isOngoing ? "Ongoing (Active)" : "3 Months"}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-zinc-400 mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> Role
              </p>
              <p className="font-semibold text-sm">Fullstack & UI/UX</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-zinc-400 mb-1 flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5" /> Core Tech
              </p>
              <p className="font-semibold text-sm truncate">Laravel / Next.js / AI</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-zinc-400 mb-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Architecture
              </p>
              <p className="font-semibold text-sm">WebSockets & LLM</p>
            </div>
          </div>
        </header>

        {/* Hero Banner / Cover Display (Full Uncropped Height) */}
        {project.image && (
          <div className="w-full rounded-[2.5rem] overflow-hidden bg-zinc-100 mb-16 shadow-2xl border border-black/5">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto block"
            />
          </div>
        )}

        {/* Story Body (Markdown Content) */}
        <article className="prose prose-lg md:prose-xl max-w-none text-zinc-800 font-medium prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#88c226] hover:prose-a:underline prose-img:rounded-3xl prose-img:w-full prose-img:h-auto prose-img:max-h-none prose-img:border prose-img:border-black/5 prose-img:shadow-xl prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-[#BEF264] prose-blockquote:bg-zinc-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl font-sans">
          {project.content ? (
            <ReactMarkdown>{project.content}</ReactMarkdown>
          ) : (
            <p className="text-zinc-500 italic">No detailed story provided for this project.</p>
          )}
        </article>

        {/* Live Demo Action Bar */}
        {project.link && (
          <div className="mt-16 p-8 bg-[#111111] text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#BEF264]">Live Demo Available</span>
              <h3 className="text-2xl font-bold text-white mt-1">Experience the Live Application</h3>
              <p className="text-zinc-400 text-sm mt-1">Explore the interactive features directly in your browser.</p>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#BEF264] text-[#111111] px-8 py-4 rounded-full font-bold shadow-xl hover:bg-white hover:scale-105 transition-all whitespace-nowrap text-sm"
            >
              Launch Live Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Next & Previous Project Navigation */}
        {(prevProject || nextProject) && (
          <div className="mt-24 border-t border-black/10 pt-16">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 text-center mb-8">
              Explore More Case Studies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject && (
                <Link 
                  href={`/work/${prevProject.id}`}
                  className="group p-6 bg-white rounded-3xl border border-black/5 hover:border-black/20 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between min-h-[160px]"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous Project
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 group-hover:text-[#88c226] transition-colors mt-2">
                      {prevProject.title}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{prevProject.description}</p>
                  </div>
                </Link>
              )}

              {nextProject && (
                <Link 
                  href={`/work/${nextProject.id}`}
                  className="group p-6 bg-white rounded-3xl border border-black/5 hover:border-black/20 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between min-h-[160px] text-right"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                    Next Project <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 group-hover:text-[#88c226] transition-colors mt-2">
                      {nextProject.title}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{nextProject.description}</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Let's Work Together Callout Box */}
        <div className="mt-16 bg-[#BEF264] rounded-3xl p-8 md:p-12 text-center text-black relative overflow-hidden shadow-xl">
          <div className="max-w-xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#BEF264]" /> Ready to Collaborate?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Have a project in mind?
            </h2>
            <p className="text-zinc-800 font-medium mb-8 text-base">
              Let's create intuitive digital experiences and high-impact web applications that solve real problems.
            </p>
            <Link 
              href="/#footer"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform text-sm"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Dedicated Brand Footer */}
      <footer className="w-full bg-white border-t border-black/5 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-bold text-2xl tracking-tighter">Rakyan.</div>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="https://github.com/rakyann" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
            <a href="mailto:rkyan22@gmail.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/rakyan-sakuntala-9a9841219/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs text-zinc-400">© 2026 Rakyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
