import Link from "next/link";
import { Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, siteConfig } from "@/lib/constants";

export function Projects() {
  return (
    <SectionWrapper id="projects" size="large">
      <SectionHeading
        label="Work"
        title="Featured Projects"
        subtitle="Selected work showcasing machine learning systems and full-stack development."
      />

      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <Github size={16} />
          View all on GitHub
        </Link>
      </div>
    </SectionWrapper>
  );
}
