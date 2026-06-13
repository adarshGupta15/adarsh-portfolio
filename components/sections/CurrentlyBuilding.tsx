import { Hammer } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { currentlyBuilding } from "@/lib/constants";

export function CurrentlyBuilding() {
  return (
    <SectionWrapper id="building">
      <SectionHeading
        label="Now"
        title="Currently Building"
        subtitle="What I'm actively working on to grow as an engineer."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {currentlyBuilding.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <Card hover className="h-full">
              <div className="mb-4 inline-flex rounded-lg border border-border bg-background p-2.5">
                <Hammer size={18} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
