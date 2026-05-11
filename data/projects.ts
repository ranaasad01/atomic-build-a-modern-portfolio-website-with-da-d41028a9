export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "fullstack" | "frontend" | "backend" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Analytics Dashboard",
    description:
      "A real-time analytics platform with interactive charts, user segmentation, and AI-powered insights for SaaS businesses.",
    longDescription:
      "Nexus is a comprehensive analytics dashboard built for SaaS companies to track key metrics, user behavior, and revenue trends. It features real-time data streaming via WebSockets, customizable chart widgets, cohort analysis, and an AI assistant that surfaces actionable insights from your data. The platform handles millions of events per day with sub-second query performance.",
    image: "https://cdn.dribbble.com/userupload/43387713/file/original-6af3358e1ae38eab78e7853ab5e95798.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Recharts", "Prisma"],
    category: "fullstack",
    liveUrl: "https://nexus-demo.vercel.app",
    githubUrl: "https://github.com/alexchen/nexus",
    featured: true,
  },
  {
    slug: "orbit-design-system",
    title: "Orbit Design System",
    description:
      "A comprehensive React component library with 60+ accessible components, dark mode support, and Storybook documentation.",
    longDescription:
      "Orbit is a production-ready design system built with React, TypeScript, and Radix UI primitives. It includes 60+ fully accessible components following WAI-ARIA guidelines, a flexible theming system with CSS variables, comprehensive Storybook documentation, and automated visual regression testing. Used by 3 production applications serving 50k+ users.",
    image: "https://storybook.js.org/tutorials/intro-to-storybook/storybook-relationship.jpg",
    tags: ["React", "TypeScript", "Radix UI", "Storybook", "Tailwind CSS", "Vitest"],
    category: "frontend",
    liveUrl: "https://orbit-ui.vercel.app",
    githubUrl: "https://github.com/alexchen/orbit",
    featured: true,
  },
  {
    slug: "pulse-api",
    title: "Pulse REST API",
    description:
      "A high-performance Node.js REST API with JWT authentication, rate limiting, and comprehensive OpenAPI documentation.",
    longDescription:
      "Pulse is a scalable REST API built with Node.js, Express, and TypeScript. It features JWT-based authentication with refresh token rotation, role-based access control, Redis-powered rate limiting, request validation with Zod, and auto-generated OpenAPI 3.0 documentation. Deployed on AWS with horizontal scaling and 99.9% uptime SLA.",
    image: "https://cdn.prod.website-files.com/67615512eed3697e5e735df6/67c1d3e2845c6abaf9d0a3b6_0Nh1yR6SSPwqnsKYSfHa.png",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    category: "backend",
    liveUrl: "https://pulse-api-docs.vercel.app",
    githubUrl: "https://github.com/alexchen/pulse-api",
    featured: true,
  },
  {
    slug: "bloom-ecommerce",
    title: "Bloom E-Commerce",
    description:
      "A full-featured online store with product search, cart management, Stripe payments, and an admin dashboard.",
    longDescription:
      "Bloom is a modern e-commerce platform built with Next.js 14 and Stripe. It features full-text product search with Algolia, real-time inventory management, a multi-step checkout flow, Stripe payment processing with webhooks, an admin dashboard for order management, and email notifications via Resend. Optimized for Core Web Vitals with 98 Lighthouse score.",
    image: "https://s3-alpha.figma.com/hub/file/2229439801665194986/ac0f5f96-e610-46db-be7b-7b276b6a9feb-cover.png",
    tags: ["Next.js", "Stripe", "Algolia", "Prisma", "Tailwind CSS", "Resend"],
    category: "fullstack",
    liveUrl: "https://bloom-store.vercel.app",
    githubUrl: "https://github.com/alexchen/bloom",
    featured: false,
  },
  {
    slug: "taskflow-app",
    title: "TaskFlow Mobile App",
    description:
      "A cross-platform task management app with offline support, team collaboration, and smart scheduling powered by AI.",
    longDescription:
      "TaskFlow is a React Native productivity app that helps teams manage projects and tasks efficiently. It features offline-first architecture with SQLite, real-time collaboration via Supabase, AI-powered task prioritization, recurring task scheduling, push notifications, and deep linking. Available on iOS and Android with 4.8-star rating.",
    image: "https://d1tzxux72fvryy.cloudfront.net/Mf6f8fb6e1c54acaf8c83b53e892a40671726204602624/preview/Mf6f8fb6e1c54acaf8c83b53e892a40671726204602624.png",
    tags: ["React Native", "Expo", "Supabase", "SQLite", "TypeScript", "OpenAI"],
    category: "mobile",
    liveUrl: "https://taskflow.app",
    githubUrl: "https://github.com/alexchen/taskflow",
    featured: false,
  },
  {
    slug: "devlog-platform",
    title: "DevLog Blogging Platform",
    description:
      "A developer-focused blogging platform with MDX support, syntax highlighting, and a built-in newsletter system.",
    longDescription:
      "DevLog is a modern blogging platform tailored for developers. It supports MDX with custom components, syntax highlighting via Shiki, reading time estimation, table of contents generation, and a built-in newsletter system with Resend. Features a clean reading experience with dark mode, RSS feed, and SEO optimization. Handles 10k+ monthly readers.",
    image: "https://next.jqueryscript.net/wp-content/uploads/2025/07/next-blog-scaled.webp",
    tags: ["Next.js", "MDX", "Shiki", "Resend", "Tailwind CSS", "Vercel"],
    category: "fullstack",
    liveUrl: "https://devlog.vercel.app",
    githubUrl: "https://github.com/alexchen/devlog",
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
] as const;
