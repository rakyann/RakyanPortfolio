import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const dynamic = "force-dynamic";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-[#BEF264] selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-grow container mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 max-w-6xl">
        
        {/* Prominent Back Button */}
        <div className="mb-10">
          <Link
            href="/#selected-works"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 bg-white hover:bg-[#111111] hover:text-white transition-all text-xs font-bold shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
            Work Archive
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Case Studies & Projects
          </h1>
          <p className="text-lg text-zinc-600 font-medium max-w-2xl leading-relaxed">
            A showcase of enterprise portals, tele-consultation interfaces, and interactive digital products built with user empathy and technical awareness.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 shadow-2xs hover:shadow-xl hover:border-black/20 transition-all duration-300"
            >
              <div>
                {/* Thumbnail */}
                <Link 
                  href={`/work/${project.slug}`} 
                  className="block relative rounded-2xl bg-zinc-100 overflow-hidden border border-black/5 aspect-[16/10] mb-6"
                >
                  <img 
                    src={project.heroImage} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                </Link>

                {/* Category & Status */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full border border-black/10 text-xs font-bold bg-zinc-50 text-zinc-800">
                    {project.category}
                  </span>
                  {project.isPersonalProject && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                      ✦ Self-Initiated
                    </span>
                  )}
                  {project.isOngoing && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Ongoing
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  <Link href={`/work/${project.slug}`} className="hover:text-black transition-colors">
                    {project.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-zinc-600 text-sm font-medium mb-6 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 hover:text-black"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
