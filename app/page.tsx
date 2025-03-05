import { ExperienceSection } from "../components/experience";
import { ProjectsSection } from "@/components/projects";
import { LinksSection } from "@/components/links";
import { HeaderSection } from "@/components/header";
import { IntroSection } from "@/components/intro";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 font-[var(--font-geist-sans)]">
      <HeaderSection />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <LinksSection />
    </div>
  );
}
