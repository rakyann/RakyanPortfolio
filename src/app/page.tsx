import prisma from "@/lib/prisma";
import HomeClient from "@/components/home-client";
import { PROJECTS } from "@/data/projects";

export const dynamic = "force-dynamic";

const STATIC_TESTIMONIALS = [
  {
    id: 1,
    name: "Mba Shavira",
    role: "HR & Operations Lead at CV Gani Pranata Consulting",
    content: "Pengembangan platform GaniConsulting benar-benar mengubah cara kami melayani klien. Fitur live chat ke psikolog sangat responsif, dan yang paling luar biasa adalah ringkasan otomatisnya, psikolog kami sekarang hemat waktu dokumentasi dari 30 menit jadi 2 menit saja per sesi. Hasilnya luar biasa!",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Mba Gratia",
    role: "Owner & Lead Planner at Gratia Wedding Organizer (Purwokerto)",
    content: "Sebagai Wedding Organizer di Purwokerto, bermitra dengan Rakyan sebagai vendor pembuatan website undangan digital sangat meningkatkan kelas paket wedding kami! Fitur Google Drive Live Guest Camera-nya jadi nilai jual utama, pengantin dan tamu-tamu sangat terkesan karena foto momen resepsi langsung terkumpul otomatis di drive.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Damar Setyawan",
    role: "Founder & Lead 3D Sculptor at DAM Studio (Cilacap)",
    content: "Website DAM Studio buatan Rakyan sangat membantu studio kami di Cilacap! Klien luar kota sekarang bisa langsung memutar dan mengecek model 3D jumbo kami secara 360 derajat di browser tanpa perlu install Blender atau 3ds Max. Fitur auto-convert ke .glb sangat jenius!",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  },
];

const STATIC_CONTACTS = [
  { id: 1, platform: "GitHub", url: "https://github.com/rkyan22" },
  { id: 2, platform: "Email", url: "mailto:rkyan22@gmail.com" },
  { id: 3, platform: "LinkedIn", url: "https://linkedin.com/in/rakyan" },
];

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

  if (!testimonials || testimonials.length === 0) {
    testimonials = STATIC_TESTIMONIALS;
  }

  if (!contacts || contacts.length === 0) {
    contacts = STATIC_CONTACTS;
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
