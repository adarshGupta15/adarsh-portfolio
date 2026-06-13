import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { skillCategories } from "@/lib/constants";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Skills"
        title="Skills & Tools"
        subtitle="Technologies and concepts I use to design, build, and ship software."
      />

      <div className="grid gap-10 sm:grid-cols-2">
        {skillCategories.map((category, i) => (
          <FadeIn key={category.name} delay={i * 0.06}>
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
