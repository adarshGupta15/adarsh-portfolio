"use client";

import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <SectionWrapper
      id="hero"
      size="large"
      className="min-h-screen py-16 sm:py-20 lg:py-32"
    >
      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {siteConfig.availability}
          </div>

          <FadeIn delay={0.03} duration={0.4}>
            <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
              {siteConfig.firstName}
              <br />
              {siteConfig.lastName}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1} duration={0.4}>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-snug text-foreground sm:text-2xl">
              {siteConfig.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.17} duration={0.4}>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted/80">
              {siteConfig.tagline}
            </p>
          </FadeIn>

          <div className="mt-7 grid w-full max-w-[26rem] grid-cols-2 gap-2 sm:mt-8 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:gap-3 lg:mt-10">
            <FadeIn delay={0.25} duration={0.35} className="w-full sm:w-auto">
              <Button
                href={siteConfig.links.resume}
                variant="primary"
                icon={Download}
                className="w-full justify-center px-3 py-2 text-xs sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Resume
              </Button>
            </FadeIn>
            <FadeIn delay={0.3} duration={0.35} className="w-full sm:w-auto">
              <Button
                href={siteConfig.links.github}
                variant="outline"
                icon={Github}
                external
                className="w-full justify-center px-3 py-2 text-xs sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
              >
                GitHub
              </Button>
            </FadeIn>
            <FadeIn delay={0.35} duration={0.35} className="w-full sm:w-auto">
              <Button
                href={siteConfig.links.linkedin}
                variant="outline"
                icon={Linkedin}
                external
                className="w-full justify-center px-3 py-2 text-xs sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
              >
                LinkedIn
              </Button>
            </FadeIn>
            <FadeIn delay={0.4} duration={0.35} className="w-full sm:w-auto">
              <Button
                href="#contact"
                variant="ghost"
                icon={Mail}
                className="w-full justify-center px-3 py-2 text-xs sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Contact
              </Button>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.18} duration={0.48} className="flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-[13rem] overflow-hidden rounded-2xl border border-border bg-surface sm:max-w-xs lg:max-w-sm">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/20">
                <Image
                  src="/profile.jpg"
                  alt="Adarsh Gupta"
                  fill
                  priority
                  sizes="366px"
                  className="object-cover"
                />
              </div>
              <span className="text-xs uppercase tracking-widest text-muted">
                Adarsh Gupta
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
