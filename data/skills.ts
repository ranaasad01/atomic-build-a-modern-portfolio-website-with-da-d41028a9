export interface Skill {
  name: string;
  level: number; // 1-5
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 5, color: "#61DAFB" },
      { name: "Next.js", level: 5, color: "#000000" },
      { name: "TypeScript", level: 5, color: "#3178C6" },
      { name: "Tailwind CSS", level: 5, color: "#06B6D4" },
      { name: "Framer Motion", level: 4, color: "#FF0055" },
      { name: "Vue.js", level: 3, color: "#4FC08D" },
      { name: "GraphQL", level: 4, color: "#E10098" },
      { name: "Storybook", level: 4, color: "#FF4785" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 5, color: "#339933" },
      { name: "Python", level: 4, color: "#3776AB" },
      { name: "PostgreSQL", level: 4, color: "#4169E1" },
      { name: "Redis", level: 4, color: "#DC382D" },
      { name: "Prisma", level: 5, color: "#2D3748" },
      { name: "REST APIs", level: 5, color: "#FF6B35" },
      { name: "tRPC", level: 4, color: "#398CCB" },
      { name: "Supabase", level: 4, color: "#3ECF8E" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 5, color: "#F05032" },
      { name: "Docker", level: 4, color: "#2496ED" },
      { name: "AWS", level: 3, color: "#FF9900" },
      { name: "Vercel", level: 5, color: "#000000" },
      { name: "GitHub Actions", level: 4, color: "#2088FF" },
      { name: "Figma", level: 4, color: "#F24E1E" },
      { name: "Vitest", level: 4, color: "#6E9F18" },
      { name: "Playwright", level: 3, color: "#2EAD33" },
    ],
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "GitHub Stars", value: "1.2k" },
];
