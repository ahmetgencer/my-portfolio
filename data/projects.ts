export type Project = {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "REST API with TypeScript",
    description: "A scalable REST API using Node.js, Express, and TypeScript.",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/ahmet/rest-api-ts",
    liveUrl: "https://rest-api-ts.vercel.app",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin panel for managing products, orders, and users.",
    tech: ["React", "Tailwind", "Next.js", "Prisma"],
    githubUrl: "https://github.com/ahmet/ecommerce-dashboard",
  },
  {
    title: "SQL Query Optimizer",
    description: "Analyzed and optimized long-running SQL queries for better performance.",
    tech: ["SQL Server", "T-SQL", "Entity Framework"],
    githubUrl: "https://github.com/ahmet/sql-optimizer",
  },
]
