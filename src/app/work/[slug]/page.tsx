import { getProjectBySlug, PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} - Rakyan's Portfolio`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudy({ params }: Props) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <header className={`w-full py-24 md:py-32 bg-gradient-to-tr ${project.color} border-b border-border relative overflow-hidden`}>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link href="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to work
          </Link>
          <div className="inline-block px-3 py-1 rounded-full border border-border text-xs font-medium bg-background/50 backdrop-blur-md mb-4">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-balance">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance">
            {project.description}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-8 mt-16 max-w-5xl">
        
        {/* 1. Overview */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-muted-foreground/50 font-mono text-lg">01</span> Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {project.overview.what}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Role</h4>
                  <p className="font-medium">{project.overview.role}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Timeline</h4>
                  <p className="font-medium">{project.overview.timeline}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Team</h4>
                  <p className="font-medium">{project.overview.team}</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 p-6 rounded-2xl border border-border">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tools</h4>
              <ul className="flex flex-wrap gap-2 mb-8">
                {project.overview.tools.map((tool) => (
                  <li key={tool} className="px-3 py-1 bg-background rounded-full border border-border text-sm font-medium">
                    {tool}
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Deliverables</h4>
              <ul className="flex flex-col gap-2">
                {project.overview.deliverables.map((del) => (
                  <li key={del} className="flex items-start gap-2 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {del}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Background */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-muted-foreground/50 font-mono text-lg">02</span> Background
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/20 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">The "Why"</h3>
              <p className="text-foreground/80 leading-relaxed">{project.background.why}</p>
            </div>
            <div className="bg-muted/20 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Opportunity</h3>
              <p className="text-foreground/80 leading-relaxed">{project.background.opportunity}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="border-l-4 border-destructive pl-6">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Business Problem</h4>
              <p className="font-medium text-lg">{project.background.businessProblem}</p>
            </div>
            <div className="border-l-4 border-destructive pl-6">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">User Problem</h4>
              <p className="font-medium text-lg">{project.background.userProblem}</p>
            </div>
          </div>
        </section>

        {/* 3. Goals */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-muted-foreground/50 font-mono text-lg">03</span> Goals & Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted/20 p-6 rounded-2xl border border-border">
              <h3 className="text-lg font-semibold mb-4">Business Goals</h3>
              <ul className="flex flex-col gap-3 list-disc pl-4 marker:text-muted-foreground">
                {project.goals.business.map((goal, i) => <li key={i} className="text-foreground/80">{goal}</li>)}
              </ul>
            </div>
            <div className="bg-muted/20 p-6 rounded-2xl border border-border">
              <h3 className="text-lg font-semibold mb-4">User Goals</h3>
              <ul className="flex flex-col gap-3 list-disc pl-4 marker:text-muted-foreground">
                {project.goals.user.map((goal, i) => <li key={i} className="text-foreground/80">{goal}</li>)}
              </ul>
            </div>
            <div className="bg-muted/20 p-6 rounded-2xl border border-border">
              <h3 className="text-lg font-semibold mb-4">Success Metrics</h3>
              <ul className="flex flex-col gap-3">
                {project.goals.metrics.map((metric, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {metric}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Research */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-muted-foreground/50 font-mono text-lg">04</span> Research
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
            <strong className="text-foreground">Methodology:</strong> {project.research.methodology}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-destructive">Pain Points</h3>
              <ul className="flex flex-col gap-3">
                {project.research.painPoints.map((point, i) => (
                  <li key={i} className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-foreground/90">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-500">Key Insights</h3>
              <ul className="flex flex-col gap-3">
                {project.research.insights.map((insight, i) => (
                  <li key={i} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-foreground/90">
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-2xl">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Opportunity Mapping</h4>
            <p className="font-medium text-lg">{project.research.opportunityMapping}</p>
          </div>
        </section>

        {/* 5. Persona */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-muted-foreground/50 font-mono text-lg">05</span> Persona
          </h2>
          <div className="bg-muted/20 p-8 rounded-3xl border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center shrink-0 border border-border">
                <span className="text-2xl font-bold text-muted-foreground">{project.persona.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{project.persona.name}</h3>
                <p className="text-xl text-muted-foreground italic">"{project.persona.quote}"</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Goals</h4>
                <ul className="flex flex-col gap-2 list-disc pl-4 marker:text-green-500">
                  {project.persona.goals.map((g, i) => <li key={i} className="text-foreground/80">{g}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Frustrations</h4>
                <ul className="flex flex-col gap-2 list-disc pl-4 marker:text-destructive">
                  {project.persona.frustrations.map((f, i) => <li key={i} className="text-foreground/80">{f}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Needs</h4>
                <ul className="flex flex-col gap-2 list-disc pl-4 marker:text-primary">
                  {project.persona.needs.map((n, i) => <li key={i} className="text-foreground/80">{n}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Behavior</h4>
                <p className="text-foreground/80 leading-relaxed">{project.persona.behavior}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Problem Statement */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-muted-foreground/50 font-mono text-lg">07</span> Problem Statement
          </h2>
          <div className="p-8 md:p-12 bg-foreground text-background rounded-3xl">
            <p className="text-2xl md:text-4xl font-bold leading-snug">
              {project.problemStatement}
            </p>
          </div>
        </section>

        {/* (Placeholders for sections 6, 8-17) */}
        <section className="mb-20">
          <div className="p-12 border border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-center">
            <p className="text-muted-foreground mb-2">Design Process Iterations</p>
            <p className="text-sm text-muted-foreground/70 max-w-md">
              (Ideation, Information Architecture, Wireframes, UI Design, Prototype, and Testing phases will be inserted here based on JSON data expansion)
            </p>
          </div>
        </section>

        {/* 18. Result */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-muted-foreground/50 font-mono text-lg">18</span> Results & Reflection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8">
              <div className="p-6 bg-muted/20 border border-border rounded-2xl">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Business Impact</h4>
                <p className="text-xl font-medium">{project.result.businessImpact}</p>
              </div>
              <div className="p-6 bg-muted/20 border border-border rounded-2xl">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">User Impact</h4>
                <p className="text-xl font-medium">{project.result.userImpact}</p>
              </div>
            </div>
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl">
              <h3 className="text-xl font-semibold mb-4">Overall Outcome</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">{project.result.outcome}</p>
              
              <h3 className="text-xl font-semibold mb-4">Lessons Learned</h3>
              <p className="text-foreground/80 leading-relaxed italic border-l-4 border-primary pl-4">
                "{project.result.reflection}"
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
