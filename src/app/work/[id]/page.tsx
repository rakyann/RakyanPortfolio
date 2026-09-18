import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  User, 
  Wrench, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await params;
  const idOrSlug = resolvedParams.id;

  const project = getProjectBySlug(idOrSlug);

  if (!project) {
    return notFound();
  }

  // Find previous and next project for navigation
  const currentIndex = PROJECTS.findIndex(p => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-[#BEF264] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 md:pt-40 pb-24">
        
        {/* Prominent Back Button */}
        <div className="mb-12">
          <Link
            href="/#selected-works"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-black/10 bg-white hover:bg-[#111111] hover:text-white transition-all text-xs font-bold shadow-2xs group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
        </div>

        {/* Case Study Editorial Header */}
        <header className="mb-16 border-b border-black/10 pb-16">
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="px-3.5 py-1 rounded-full border border-black/10 bg-white text-xs font-bold tracking-wide uppercase text-zinc-800 shadow-2xs">
              {project.category}
            </span>
            {project.isPersonalProject && (
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#111111] text-white flex items-center gap-1.5 shadow-2xs">
                ✦ Self-Initiated Project
              </span>
            )}
            {project.isOngoing && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active Development
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.05] mb-8">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-600 font-medium leading-relaxed max-w-3xl mb-12">
            {project.shortDescription}
          </p>

          {/* Quick Metadata Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-black/10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Role</p>
              <p className="font-bold text-base text-zinc-900">{project.overview.role}</p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Timeline</p>
              <p className="font-semibold text-base text-zinc-800">{project.overview.timeline}</p>
            </div>

            <div className="col-span-2 md:col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Tools & Stack</p>
              <p className="font-medium text-sm text-zinc-700">{project.overview.tools.join(" • ")}</p>
            </div>
          </div>
        </header>

        {/* Hero Visual Display */}
        {project.heroImage && (
          <div className="w-full rounded-[2.5rem] overflow-hidden bg-zinc-200 mb-20 shadow-2xl border border-black/5">
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-auto block"
            />
          </div>
        )}

        {/* Editorial Story Layout */}
        <div className="flex flex-col divide-y divide-black/10">
          
          {/* 1. Problem & Context */}
          <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                01 / Problem & Context
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                {project.problem.title}
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-medium">
                {project.problem.context}
              </p>
              <blockquote className="p-6 rounded-2xl bg-zinc-100/80 border-l-4 border-[#111111] text-base md:text-lg font-semibold text-zinc-900 italic leading-relaxed">
                "{project.problem.coreChallenge}"
              </blockquote>
            </div>
          </section>

          {/* 2. My Role & Contributions */}
          <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                02 / My Role
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                Responsibilities & Execution
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                {project.myRole.description}
              </p>
              <ul className="flex flex-col gap-3.5">
                {project.myRole.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-base text-zinc-700 font-medium leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#111111] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Research & Insights (If Available) */}
          {project.research && (
            <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                  03 / Discovery
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                  User & Workflow Insights
                </h2>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                  {project.research.approach}
                </p>
                <div className="flex flex-col gap-3">
                  {project.research.insights.map((insight, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white border border-black/10 text-base text-zinc-800 font-medium flex items-start gap-3 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-[#BEF264] border border-black/20 mt-2 shrink-0" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 4. Information Architecture (If Available) */}
          {project.informationArchitecture && (
            <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                  04 / Structure
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                  Information Architecture
                </h2>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                  {project.informationArchitecture.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {project.informationArchitecture.keyDecisions.map((decision, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-base text-zinc-700 font-medium leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2.5 shrink-0" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* 5. Wireframing & Decisions (If Available) */}
          {project.wireframing && (
            <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                  05 / Wireframing
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                  Layout Exploration
                </h2>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                  {project.wireframing.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {project.wireframing.decisions.map((dec, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-base text-zinc-700 font-medium leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2.5 shrink-0" />
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* 6. Visual Design Direction */}
          <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                06 / Visual System
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                Interface & Visual Direction
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                {project.visualDesign.description}
              </p>
              <ul className="flex flex-col gap-3">
                {project.visualDesign.principles.map((pr, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-base text-zinc-700 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2.5 shrink-0" />
                    <span>{pr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Gallery Showcase */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div className="py-16 flex flex-col gap-8">
              {project.galleryImages.slice(1).map((img, idx) => (
                <div key={idx} className="w-full rounded-[2.5rem] overflow-hidden bg-zinc-200 shadow-xl border border-black/5">
                  <img src={img} alt={`${project.title} Preview ${idx + 2}`} className="w-full h-auto block" />
                </div>
              ))}
            </div>
          )}

          {/* 7. Final UI Highlights */}
          <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                07 / Final Interface
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                Delivered UI Screens
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                {project.finalUi.description}
              </p>
              <ul className="flex flex-col gap-3">
                {project.finalUi.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-base text-zinc-700 font-medium leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#BEF264] border border-black/20 mt-2 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Developer Collaboration (If Available) */}
          {project.testingAndHandoff && (
            <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                  08 / Collaboration
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                  Developer Handoff
                </h2>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                  {project.testingAndHandoff.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {project.testingAndHandoff.collaborationDetails.map((collab, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-base text-zinc-700 font-medium leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2.5 shrink-0" />
                      <span>{collab}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* 9. Reflection & Learnings */}
          <section className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                09 / Reflection
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                Key Learnings
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-4">
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-medium">
                {project.reflection.learnings}
              </p>
              {project.reflection.nextSteps && (
                <p className="text-sm font-mono text-zinc-500">
                  Next Step: {project.reflection.nextSteps}
                </p>
              )}
            </div>
          </section>

        </div>

        {/* Live Site Demonstration Callout */}
        {project.link && (
          <div className="mt-16 p-8 md:p-12 bg-[#111111] text-white rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BEF264]">Live Demonstration</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">Experience the live project</h3>
              <p className="text-zinc-400 text-sm mt-1">Interact with the deployed application directly in your browser.</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#BEF264] text-[#111111] px-8 py-4 rounded-full font-bold text-sm hover:bg-white transition-all whitespace-nowrap shadow-lg hover:scale-105"
            >
              Launch Live Site <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Previous / Next Case Study Navigation */}
        <div className="mt-24 border-t border-black/10 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-8 rounded-3xl bg-white border border-black/10 hover:border-black/30 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-4 h-4" /> Previous Project
              </span>
              <div className="mt-4">
                <h4 className="font-bold text-xl md:text-2xl text-zinc-900 group-hover:text-black transition-colors">{prevProject.title}</h4>
                <p className="text-xs text-zinc-500 mt-1">{prevProject.category}</p>
              </div>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="p-8 rounded-3xl bg-white border border-black/10 hover:border-black/30 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-right group"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                Next Project <ArrowRight className="w-4 h-4" />
              </span>
              <div className="mt-4">
                <h4 className="font-bold text-xl md:text-2xl text-zinc-900 group-hover:text-black transition-colors">{nextProject.title}</h4>
                <p className="text-xs text-zinc-500 mt-1">{nextProject.category}</p>
              </div>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
