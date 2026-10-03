import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  icon?: LucideIcon;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "outline",
  icon: Icon,
  external = false,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0 motion-reduce:transform-none";

  const variants = {
    primary: "bg-accent text-background hover:bg-accent/90",
    outline:
      "border border-border bg-transparent text-foreground hover:border-accent/40 hover:bg-surface",
    ghost: "text-muted hover:text-foreground",
  };

  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {Icon && <Icon size={16} />}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {Icon && <Icon size={16} />}
      {children}
    </Link>
  );
}
