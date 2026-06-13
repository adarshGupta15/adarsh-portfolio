"use client";

import { Download, Github, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <SectionWrapper id="hero" size="large" className="min-h-screen pt-32">
      <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {siteConfig.availability}
          </div>

          <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
            {siteConfig.firstName}
            <br />
            {siteConfig.lastName}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {siteConfig.role}
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted/80">
            {siteConfig.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              href={siteConfig.links.resume}
              variant="primary"
              icon={Download}
            >
              Resume
            </Button>
            <Button
              href={siteConfig.links.github}
              variant="outline"
              icon={Github}
              external
            >
              GitHub
            </Button>
            <Button
              href={siteConfig.links.linkedin}
              variant="outline"
              icon={Linkedin}
              external
            >
              LinkedIn
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
              <img
  src="/profile.jpg"
  alt="Adarsh Gupta"
  className="h-40 w-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/20"
/>
              <span className="text-xs uppercase tracking-widest">
                Profile Photo
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
