"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

export function ProjectCard({ project, index, compact = false }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.45,
              delay: index * 0.06,
              ease: [0.21, 0.47, 0.32, 0.98],
            }
      }
      className="group h-full"
    >
      <div
        className={`flex h-full flex-col overflow-hidden rounded-2xl border border-border ${
          compact ? "bg-background/50" : "bg-surface"
        } transition-colors duration-300 group-hover:border-accent/25`}
      >
        {project.image && (
          <div className="relative aspect-video shrink-0 overflow-hidden bg-background">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}

        <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-4 sm:p-5"}`}>
          <h3
            className={`font-semibold tracking-tight text-foreground ${
              compact ? "text-lg" : "text-lg sm:text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-3 grid gap-3 border-t border-border pt-3 md:grid-cols-2">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-muted">
                Problem
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-muted">
                Solution
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                {project.solution}
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs font-medium uppercase tracking-wider text-muted">
                Key implementation
              </h4>
              <ul className="mt-1.5 space-y-1 text-sm leading-relaxed text-muted">
                {project.implementation.map((detail) => (
                  <li key={detail} className="list-inside list-disc marker:text-accent">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-3">
            <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
