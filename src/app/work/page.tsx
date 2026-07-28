import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { InvestmentPlans } from "@/components/investment-plans";

export const dynamic = "force-dynamic";

export default async function WorkPage() {
  let dbProjects: any[] = [];
  try {
    dbProjects = await prisma.project.findMany({
      orderBy: { createdAt: "asc" },
    });
  } catch (error) {
    console.warn("Prisma fetch failed in WorkPage:", error);
  }

  const displayProjects = dbProjects.length > 0 ? dbProjects : PROJECTS.map((p, i) => ({
    id: p.slug,
    title: p.title,
    description: p.description,
    image: p.heroImage || "/gani_header.png",
    link: "http://127.0.0.1:8000",
  }));

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-[#BEF264] selection:text-black">
      {/* Header Nav */}
      <nav className="h-20 border-b border-black/5 flex items-center justify-between px-6 md:px-12 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-[#88c226] transition-colors font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="font-bold text-xl tracking-tighter">Rakyan.</div>
      </nav>

      <main className="flex-grow container mx-auto px-6 md:px-12 py-12 md:py-20 max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#88c226] mb-2 block">
            Portfolio Archive
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Selected Case Studies
          </h1>
          <p className="text-xl text-zinc-500 font-medium max-w-2xl">
            A showcase of digital products, tele-health platforms, and enterprise workspaces built with strategy and user empathy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {displayProjects.map((project: any) => (
            <div key={project.id} className="group flex flex-col gap-4">
              <Link 
                href={`/work/${project.id}`} 
                className="block relative rounded-3xl bg-zinc-100 overflow-hidden border border-black/5 shadow-md hover:shadow-2xl transition-all aspect-[16/10]"
              >
                <img 
                  src={project.image || "/gani_header.png"} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full border border-black/10 text-[10px] uppercase font-bold tracking-wider bg-white shadow-sm">
                    {project.title.toLowerCase().includes("ongoing") ? "🟢 Ongoing" : "Case Study"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                  <Link href={`/work/${project.id}`} className="hover:text-[#88c226] transition-colors">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-zinc-600 text-sm font-medium mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <Link 
                  href={`/work/${project.id}`} 
                  className="inline-flex items-center gap-2 text-sm font-bold group-hover:text-[#88c226] transition-all"
                >
                  Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Investment Plans Section */}
      <InvestmentPlans />

      {/* Full Dedicated Footer */}
      <footer className="w-full bg-white border-t border-black/5 py-12 mt-24">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
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
