import type { BuildingItem, Project, SkillCategory, TimelineItem } from "./types";

export const siteConfig = {
  name: "Adarsh Gupta",
  firstName: "Adarsh",
  lastName: "Gupta",
  role: "CSE Student | Machine Learning & Software Development",
  tagline:
    "Focused on Machine Learning, DSA, C++, and Python, with hands-on work in web and full-stack development.",
  availability: "Available for internships & collaborations",
  links: {
    github: "https://github.com/adarshGupta15",
    linkedin: "https://linkedin.com/in/adarshgupta151",
    email: "mailto:ad282242@gmail.com",
    resume: "/resume.pdf",
  },
};

export const aboutStats = [
  { value: "8.2", label: "CGPA" },
  { value: "2028", label: "Expected Graduation" },
];

export const currentlyBuilding: BuildingItem[] = [
  {
    title: "Machine Learning",
    description: "Implementing ML concepts and small projects as part of a structured study journey.",
  },
  {
    title: "DSA Practice",
    description: "Practicing data structures, algorithms, and competitive programming.",
  },
  {
    title: "Mentor Academy",
    description: "Building student, teacher, and admin workflows with role-based access.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    name: "CS Fundamentals",
    skills: ["Data Structures & Algorithms"],
  },
  {
    name: "Machine Learning / Data",
    skills: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    name: "Web Development",
    skills: ["Next.js", "React", "Node.js", "Express", "Flask", "Tailwind CSS"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "Supabase", "Prisma"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Render"],
  },
];

export const projects: Project[] = [
  {
    title: "Mentor Academy",
    summary: "Academy website presenting school, JEE, and NEET programmes.",
    problem: "Learners need a clear view of available programmes and guidance.",
    solution: "Brings programme details, the mentorship approach, and contact options together.",
    implementation: [
      "Programme listings for school classes, JEE, and NEET",
      "Mentorship, educator, updates, and contact sections",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Authentication", "Role-based access"],
    image: "/projects/mentor-academy.png",
    liveUrl: "https://mentor-academy.vercel.app/",
  },
  {
    title: "Loan Approval Prediction",
    summary: "Dataset-based prediction of loan approval from applicant data.",
    problem: "Applications contain multiple fields relevant to a loan decision.",
    solution: "A Random Forest model predicts approval from those fields.",
    implementation: ["Random Forest model with Scikit-learn", "Flask application"],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Flask", "Random Forest"],
  },
  {
    title: "WattWise: Smart Electricity Prediction",
    summary: "Predicts household electricity consumption from profile and appliance details.",
    problem: "Estimating household usage involves appliance and environmental inputs.",
    solution: "Uses those inputs with Linear Regression to predict consumption.",
    implementation: [
      "Household, appliance, and environmental input form",
      "Linear Regression prediction",
    ],
    tech: ["Machine Learning", "Linear Regression"],
    image: "/projects/wattwise.png",
    liveUrl: "https://wattwise-smart-electricity-prediction.onrender.com/",
  },
  {
    title: "Fake Instagram Profile Detection",
    summary: "Predicts whether Instagram account features indicate a fake profile.",
    problem: "Fake profiles can resemble authentic accounts.",
    solution: "A prediction form evaluates account features with a machine-learning model.",
    implementation: [
      "Account feature input form",
      "Prediction action in the deployed app",
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Flask", "Render"],
    image: "/projects/fake-instagram-live.png",
    githubUrl: "https://github.com/adarshGupta15/fake-instagram-profile-detection",
    liveUrl: "https://fake-instagram-profile-detection-ccq8.onrender.com/",
  },
  {
    title: "Hospital Service Price Comparison",
    summary: "Backend API for comparing hospital service prices.",
    problem: "Hospital service prices need a comparable catalog.",
    solution: "An Express API provides access to comparison data.",
    implementation: [
      "Express API with Prisma",
      "PostgreSQL database on Neon",
    ],
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "Neon"],
  },
  {
    title: "Amazon Clone",
    summary: "Responsive storefront clone built with HTML, CSS, and JavaScript.",
    problem: "Product browsing needs a clear, responsive layout.",
    solution: "Product sections recreate a storefront experience.",
    implementation: ["Responsive layout", "Product sections"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    githubUrl: "https://github.com/adarshGupta15/Amazon_Clone-",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Programming Fundamentals",
    description: "Built foundations in C++, Python, and problem-solving.",
  },
  {
    year: "2025",
    title: "Data Structures & Algorithms",
    description: "Studied core data structures and algorithms.",
  },
  {
    year: "2025",
    title: "Machine Learning Projects",
    description: "Applied Scikit-learn and Flask in machine-learning projects.",
  },
  {
    title: "Web Development & Full-stack Projects",
    description: "Applied Next.js, TypeScript, backend APIs, and databases in project work.",
  },
];

export const education = {
  institution: "Ajay Kumar Garg Engineering College (AKGEC)",
  degree: "B.Tech in Computer Science & Engineering",
  university: "AKTU",
  cgpa: "8.2",
  graduation: "2028",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Building", href: "#building" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
