import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/constants";

export function UpcomingProjects() {
  const upcomingProjects = projects.filter((project) => project.upcoming === true);

  if (upcomingProjects.length === 0) return null;

  return (
    <SectionWrapper
      id="upcoming-projects"
      className="border-y border-border bg-surface/30"
    >
      <SectionHeading
        label="In Progress"
        title="Upcoming Projects"
        subtitle="Projects currently in progress."
      />

      <div className="grid gap-5 md:max-w-2xl">
        {upcomingProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}