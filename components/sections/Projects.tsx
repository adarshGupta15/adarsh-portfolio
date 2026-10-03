import Link from "next/link";
import { Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, siteConfig } from "@/lib/constants";

export function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured !== false && project.upcoming !== true
  );
  const additionalProjects = projects.filter(
    (project) => project.featured === false && project.upcoming !== true
  );

  return (
    <SectionWrapper id="projects" size="large">
      <SectionHeading
        label="Work"
        title="Featured Projects"
        subtitle="Selected work showcasing machine learning systems and full-stack development."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {additionalProjects.length > 0 && (
        <div className="mt-10 border-t border-border pt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
            Additional Project
          </h3>
          <div className="mt-4 grid gap-4 md:max-w-2xl">
            {additionalProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={featuredProjects.length + index}
                compact
              />
            ))}
          </div>
        </div>
      )}

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
