import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/90",
        className
      )}
    >
      {children}
    </span>
  );
}
