import prisma from "@/lib/prisma";
import HomeClient from "@/components/home-client";

export const revalidate = 0; // Disable caching so it always gets the latest DB data

export default async function Page() {
  const profile = await prisma.profile.findUnique({ where: { id: 1 } });
  
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });
  
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <HomeClient 
      profile={profile}
      projects={projects} 
      testimonials={testimonials} 
      contacts={contacts} 
    />
  );
}
