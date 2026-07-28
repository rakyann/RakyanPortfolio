import prisma from "@/lib/prisma";
import HomeClient from "@/components/home-client";
import { PROJECTS } from "@/data/projects";

export const dynamic = "force-dynamic";

export default async function Page() {
  let profile = null;
  let projects: any[] = [];
  let testimonials: any[] = [];
  let contacts: any[] = [];

  try {
    profile = await prisma.profile.findUnique({ where: { id: 1 } });
    projects = await prisma.project.findMany({ orderBy: { createdAt: "asc" } });
    testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "asc" } });
    contacts = await prisma.contact.findMany({ orderBy: { createdAt: "asc" } });
  } catch (error) {
    console.warn("Prisma fetch failed, falling back to static dataset:", error);
  }

  // Fallback to static projects if database is empty or disconnected on Vercel
  if (!projects || projects.length === 0) {
    projects = PROJECTS.map((p, idx) => ({
      id: idx + 1,
      title: p.title,
      description: p.description,
      image: p.heroImage || "/gani_header.png",
      content: p.problemStatement,
      createdAt: new Date(),
    }));
  }

  return (
    <HomeClient 
      profile={profile}
      projects={projects} 
      testimonials={testimonials} 
      contacts={contacts} 
    />
  );
}
