import HomeClient from "@/components/home-client";
import { PROJECTS } from "@/data/projects";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <HomeClient 
      projects={PROJECTS}
    />
  );
}
