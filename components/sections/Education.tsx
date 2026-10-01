import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { education } from "@/lib/constants";

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading label="Education" title="Education" />

      <FadeIn>
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
              <GraduationCap size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {education.institution}
              </h3>
              <p className="mt-1 text-sm text-muted sm:text-base">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-muted">{education.university}</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-muted sm:text-right">
            <div>
              <p className="text-xs uppercase tracking-wider">CGPA</p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                {education.cgpa}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider">Graduation</p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                {education.graduation}
              </p>
            </div>
          </div>
        </Card>
      </FadeIn>
    </SectionWrapper>
  );
}
