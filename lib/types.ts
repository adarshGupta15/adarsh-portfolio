export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
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
