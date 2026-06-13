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
        subtitle="A software engineer and AI enthusiast focused on building practical, intelligent applications."
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <FadeIn>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m a B.Tech Computer Science Engineering student at Ajay
              Kumar Garg Engineering College, passionate about machine learning,
              clean code, and solving real-world problems through technology.
            </p>
            <p>
              My work spans ML model development, Flask deployment, and
              front-end projects — always with an emphasis on clarity,
              performance, and thoughtful user experience.
            </p>
            <p>
              I&apos;m actively growing through structured learning — from daily
              ML practice to rigorous DSA — while building projects that
              demonstrate both depth and execution.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 gap-3">
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
