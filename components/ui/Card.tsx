import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6",
        hover &&
          "transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 motion-reduce:hover:translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
}
