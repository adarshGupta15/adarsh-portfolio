import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large";
}

export function SectionWrapper({
  id,
  children,
  className,
  size = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-6",
        size === "large" ? "py-32" : "py-24",
        className
      )}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
