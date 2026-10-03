import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
