import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { EXPERIENCES, EDUCATIONS, SKILL_CATEGORIES } from "@/data/experience";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-[#BEF264] selection:text-black">
      {/* Universal Top Navigation */}
      <Navbar />

      <main className="flex-grow container mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 max-w-4xl">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
            About Me
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Designing intuitive experiences by connecting user needs, visual design, and technology.
          </h1>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111111] text-white hover:bg-black px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-sm"
            >
              <Download className="w-4 h-4" /> Download CV (PDF) ↗
            </a>
            <a
              href="mailto:rkyan22@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-zinc-800 border border-black/10 hover:border-black/30 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-2xs"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
          </div>
        </header>

        {/* Story Section */}
        <section className="mb-16 bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden bg-zinc-200 border border-black/5 shadow-sm">
              <img
                src="/rakyan_new_profile.jpeg"
                alt="Rakyan Jenar Sakuntala"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-8 flex flex-col gap-4 text-base md:text-lg text-zinc-700 font-medium leading-relaxed">
              <p>
                Hi, I'm <strong className="text-black">Rakyan Jenar Sakuntala</strong>. I am an Information Systems student and UI/UX Designer based in Indonesia with a strong interest in the relationship between users, interfaces, and technology.
              </p>
              <p>
                I enjoy exploring how structure, visual design, interaction, and user needs can come together to create useful digital products.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-base md:text-lg text-zinc-700 font-medium leading-relaxed border-t border-black/5 pt-6">
            <p>
              My design journey started with learning fundamental visual and interface styling through design studio internships. Over time, I grew into working on real digital products, translating business requirements into intuitive UI flows and collaborating directly with developers and DevOps teams.
            </p>
            <p>
              My background in Information Systems and Software Engineering gives me strong technical empathy—enabling me to understand frontend constraints, speak the language of engineers, and ensure designs can be realistically and cleanly implemented.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6">
            <GraduationCap className="w-4 h-4 text-zinc-800" /> Education Background
          </div>
          <div className="flex flex-col gap-6">
            {EDUCATIONS.map((edu) => (
              <div key={edu.id} className="border-b border-black/5 last:border-0 pb-5 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
                  <span className="text-xs font-mono font-semibold text-zinc-500">{edu.period}</span>
                </div>
                <p className="text-sm font-semibold text-zinc-700">{edu.institution}</p>
                {edu.details && (
                  <p className="text-xs text-zinc-600 mt-1 font-mono">{edu.details}</p>
                )}
                {edu.achievement && (
                  <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit mt-2 font-medium">
                    ★ {edu.achievement}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              Work History
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#111111]">
              Experience & Progression
            </h2>
          </div>
          <ExperienceTimeline />
        </section>

        {/* Skills Section */}
        <section className="mb-16 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-2xs">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              Skillset
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#111111]">
              Skills & Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="p-5 rounded-2xl bg-[#FAFAFA] border border-black/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-black mb-3 pb-1.5 border-b border-black/10">
                  {cat.category}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-xs text-zinc-700 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] border border-black/20 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
