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
  CheckCircle2, 
  Sparkles, 
  Layout, 
  Search, 
  Compass, 
  Palette, 
  Cpu, 
  Lightbulb, 
  Download 
} from "lucide-react";
import { PROJECTS, getProjectBySlug, Project } from "@/data/projects";
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

      <main className="max-w-4xl mx-auto px-6 pt-32 md:pt-40 pb-20">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Selected Work
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="px-3 py-1 rounded-full border border-black/10 bg-white text-xs font-bold tracking-wide uppercase shadow-2xs">
              {project.category}
            </span>
            {project.isOngoing && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active Development
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 font-medium leading-relaxed max-w-3xl mb-10">
            {project.shortDescription}
          </p>

          {/* Quick Overview Metadata Card */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-black/5 shadow-sm">
            <div>
              <p className="text-[11px] font-bold uppercase text-zinc-400 mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-zinc-700" /> My Role
              </p>
              <p className="font-bold text-sm text-zinc-900">{project.overview.role}</p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase text-zinc-400 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-700" /> Timeline
              </p>
              <p className="font-semibold text-sm text-zinc-800">{project.overview.timeline}</p>
            </div>

            <div className="col-span-2 md:col-span-2">
              <p className="text-[11px] font-bold uppercase text-zinc-400 mb-1 flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5 text-zinc-700" /> Tools Used
              </p>
              <p className="font-medium text-xs sm:text-sm text-zinc-700">{project.overview.tools.join(" • ")}</p>
            </div>

            <div className="col-span-2 md:col-span-4 pt-3 border-t border-black/5">
              <p className="text-[11px] font-bold uppercase text-zinc-400 mb-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-zinc-700" /> Key Deliverables
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.overview.deliverables.map((d, i) => (
                  <span key={i} className="text-xs bg-zinc-100 text-zinc-800 font-medium px-2.5 py-1 rounded-md">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Visual Preview */}
        {project.heroImage && (
          <div className="w-full rounded-3xl overflow-hidden bg-zinc-200 mb-16 shadow-xl border border-black/5">
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-auto block"
            />
          </div>
        )}

        {/* Structured Case Study Sections */}
        <div className="flex flex-col gap-14 text-zinc-800 font-normal">
          
          {/* 1. Problem & Context */}
          <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              <Compass className="w-4 h-4 text-zinc-700" /> Problem & Context
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
              {project.problem.title}
            </h2>
            <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
              {project.problem.context}
            </p>
            <div className="p-5 rounded-2xl bg-zinc-50 border-l-4 border-[#111111]">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Core UX Challenge</p>
              <p className="text-base font-semibold text-zinc-900 italic">
                "{project.problem.coreChallenge}"
              </p>
            </div>
          </section>

          {/* 2. My Role & Personal Contribution */}
          <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              <User className="w-4 h-4 text-zinc-700" /> My Role & Contribution
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
              Personal Contribution
            </h2>
            <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
              {project.myRole.description}
            </p>
            <ul className="flex flex-col gap-3">
              {project.myRole.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Research / Discovery (If Available) */}
          {project.research && (
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                <Search className="w-4 h-4 text-zinc-700" /> Discovery & Insights
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
                Understanding User & Workflow Needs
              </h2>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
                {project.research.approach}
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Key Takeaways</p>
                {project.research.insights.map((insight, i) => (
                  <div key={i} className="p-4 rounded-xl bg-zinc-50 border border-black/5 text-sm md:text-base text-zinc-800 font-medium flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#111111] mt-2 shrink-0" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Information Architecture & User Flow */}
          {project.informationArchitecture && (
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                <Layout className="w-4 h-4 text-zinc-700" /> Structure & Hierarchy
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
                Information Architecture & Flow
              </h2>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
                {project.informationArchitecture.description}
              </p>
              <ul className="flex flex-col gap-3">
                {project.informationArchitecture.keyDecisions.map((decision, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 5. Wireframing & Layout Rationale */}
          {project.wireframing && (
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                <Layers className="w-4 h-4 text-zinc-700" /> Wireframing
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
                Layout Exploration & Wireframes
              </h2>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
                {project.wireframing.description}
              </p>
              <ul className="flex flex-col gap-3">
                {project.wireframing.decisions.map((dec, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 6. Visual Design Direction */}
          <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              <Palette className="w-4 h-4 text-zinc-700" /> Visual System
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
              Visual Design Direction
            </h2>
            <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
              {project.visualDesign.description}
            </p>
            <ul className="flex flex-col gap-3">
              {project.visualDesign.principles.map((pr, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-zinc-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                  <span>{pr}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7. Design System / Reusable Components (If Available) */}
          {project.designSystem && (
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                <Cpu className="w-4 h-4 text-zinc-700" /> Component Library
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
                Design System & Reusable UI
              </h2>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
                {project.designSystem.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {project.designSystem.components.map((comp, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-zinc-50 border border-black/5 text-xs sm:text-sm font-medium text-zinc-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 8. Additional Gallery Images (e.g. Figma screenshots) */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div className="flex flex-col gap-6">
              {project.galleryImages.slice(1).map((img, idx) => (
                <div key={idx} className="w-full rounded-3xl overflow-hidden bg-zinc-200 shadow-lg border border-black/5">
                  <img src={img} alt={`${project.title} Preview ${idx + 2}`} className="w-full h-auto block" />
                </div>
              ))}
            </div>
          )}

          {/* 9. Final UI Highlights */}
          <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              <Sparkles className="w-4 h-4 text-zinc-700" /> Final UI
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
              Interface Highlights
            </h2>
            <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
              {project.finalUi.description}
            </p>
            <ul className="flex flex-col gap-3">
              {project.finalUi.highlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-zinc-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 10. Developer Collaboration & Handoff (If Available) */}
          {project.testingAndHandoff && (
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                <Cpu className="w-4 h-4 text-zinc-700" /> Developer Handoff
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
                Bridging Design & Development
              </h2>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
                {project.testingAndHandoff.description}
              </p>
              <ul className="flex flex-col gap-3">
                {project.testingAndHandoff.collaborationDetails.map((collab, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                    <span>{collab}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 11. Reflection & Learnings */}
          <section className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              <Lightbulb className="w-4 h-4 text-zinc-700" /> Reflection
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
              Key Learnings & Takeaways
            </h2>
            <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-4 font-medium">
              {project.reflection.learnings}
            </p>
            {project.reflection.nextSteps && (
              <p className="text-zinc-500 text-sm italic">
                Next exploration: {project.reflection.nextSteps}
              </p>
            )}
          </section>

        </div>

        {/* Live Demo Callout (If Available) */}
        {project.link && (
          <div className="mt-14 p-8 bg-[#111111] text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#BEF264]">Live Demonstration</span>
              <h3 className="text-xl font-bold text-white mt-1">Explore the interactive application</h3>
              <p className="text-zinc-400 text-sm mt-1">Experience the live web platform directly in your browser.</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#BEF264] text-[#111111] px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-all whitespace-nowrap"
            >
              Launch Live Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Next / Previous Project Navigation */}
        <div className="mt-20 border-t border-black/10 pt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 text-center mb-6">
            Explore Other Case Studies
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <span className="text-xs font-bold uppercase text-zinc-400 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Case Study
              </span>
              <div className="mt-2">
                <h4 className="font-bold text-lg text-zinc-900">{prevProject.title}</h4>
                <p className="text-xs text-zinc-500 mt-1 line-clamp-1">{prevProject.category}</p>
              </div>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-right"
            >
              <span className="text-xs font-bold uppercase text-zinc-400 flex items-center justify-end gap-1">
                Next Case Study <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <div className="mt-2">
                <h4 className="font-bold text-lg text-zinc-900">{nextProject.title}</h4>
                <p className="text-xs text-zinc-500 mt-1 line-clamp-1">{nextProject.category}</p>
              </div>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
