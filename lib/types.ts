export interface Project {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  implementation: string[];
  tech: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface TimelineItem {
  year?: string;
  title: string;
  description?: string;
}

export interface BuildingItem {
  title: string;
  description: string;
}

export interface SiteLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}
