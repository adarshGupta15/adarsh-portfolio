import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { timeline } from "@/lib/constants";

export function LearningJourney() {
  return (
    <SectionWrapper id="journey">
      <SectionHeading
        label="Journey"
        title="Learning Journey"
        subtitle="How I'm growing as a software engineer and ML practitioner."
      />

      <div className="relative ml-3 border-l border-border pl-8 sm:ml-4 sm:pl-10">
        {timeline.map((item, i) => (
          <FadeIn key={`${item.year}-${item.title}`} delay={i * 0.06}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.55rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background sm:-left-[2.85rem]" />
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {item.year}
              </p>
              <h3 className="mt-1 text-base font-semibold text-foreground sm:text-lg">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
