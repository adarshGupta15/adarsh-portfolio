import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { aboutStats } from "@/lib/constants";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About"
        title="About Me"
      />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <FadeIn>
          <div className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m a Computer Science &amp; Engineering student at Ajay Kumar
              Garg Engineering College (AKGEC). I build software and machine
              learning projects, while strengthening my problem-solving skills
              through C++ and data structures and algorithms.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {aboutStats.map((stat) => (
              <Card key={stat.label} className="p-4 text-center sm:p-5">
                <p className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
