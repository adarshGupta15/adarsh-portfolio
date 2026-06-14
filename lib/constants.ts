import type { BuildingItem, Project, SkillCategory, TimelineItem } from "./types";

export const siteConfig = {
  name: "Adarsh Gupta",
  firstName: "Adarsh",
  lastName: "Gupta",
  role: "Software Engineer | AI Enthusiast | B.Tech CSE Student",
  tagline:
    "Building intelligent systems with Python, Machine Learning, and clean, production-ready code.",
  availability: "Available for internships & collaborations",
  links: {
    github: "https://github.com/adarshGupta15",
    linkedin: "https://linkedin.com/in/adarshgupta151",
    email: "mailto:ad282242@gmail.com",
    resume: "Adarsh_Gupta_ML_Engineer_Resume.pdf",
  },
};

export const aboutStats = [
  { value: "2+", label: "Projects Built" },
  { value: "8.2", label: "CGPA" },
  { value: "2028", label: "Graduation" },
];

export const currentlyBuilding: BuildingItem[] = [
  {
    title: "100 Days of Machine Learning",
    description:
      "Daily ML concepts, implementations, and mini-projects to deepen understanding of algorithms, models, and real-world applications.",
  },
  {
    title: "DSA Practice",
    description:
      "Structured problem-solving in data structures and algorithms to strengthen core CS fundamentals and interview readiness.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "C++","Java"],
  },
  {
    name: "Machine Learning",
    skills: ["Machine Learning", "Scikit-Learn", "Flask", "Pandas", "NumPy"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub","VS Code"],
  },
  {
    name: "Core Concepts",
    skills: ["Data Structures & Algorithms"],
  },
];

export const projects: Project[] = [
  {
    title: "Fake Instagram Profile Detection",
    description:
      "Machine learning system that identifies fake Instagram profiles using profile features, preprocessing, feature engineering, model training, and Flask deployment.",
    tech: ["Python", "Flask", "Scikit-Learn"],
    githubUrl: "https://github.com/adarshgupta/fake-instagram-detection",
    image: "/projects/fake-instagram.png",
  },
  {
    title: "Amazon Clone",
    description:
      "Responsive Amazon-inspired e-commerce website clone with product sections and modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/adarshgupta/amazon-clone",
    image: "/projects/amazon-clone.png",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Started B.Tech CSE at AKGEC",
    description:
      "Began formal computer science education at Ajay Kumar Garg Engineering College.",
  },
  {
    year: "2025",
    title: "Core DSA & Python Fundamentals",
    description: "Built strong foundations in programming and problem-solving.",
  },
  {
    year: "2025",
    title: "Machine Learning Projects",
    description:
      "Applied Scikit-Learn and Flask to build and deploy ML applications.",
  },
  {
    year: "2026",
    title: "Continuous Learning",
    description:
      "100 Days of ML and structured DSA practice alongside academic work.",
  },
  {
    year: "2028",
    title: "Expected Graduation",
    description: "B.Tech Computer Science Engineering from AKGEC.",
  },
];

export const education = {
  institution: "Ajay Kumar Garg Engineering College (AKGEC)",
  degree: "B.Tech Computer Science Engineering",
  cgpa: "8.2",
  graduation: "2028",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Building", href: "#building" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
