// Design System Constants - Single source of truth for all design tokens
export const SITE_CONFIG = {
  name: "Cloud, DevOps & Automation Portfolio",
  description: "Recent Computer Science Graduate | AWS Certified Cloud Practitioner | Cloud & DevOps Engineer | Technical Writer | DevRel Enthusiast",
  url: "https://your-domain.com", // Replace with actual domain
  ogImage: "/og-image.jpg", // Add this image to public folder
} as const

export const COLORS = {
  bg: "#0B0F19",
  bg2: "#101820",
  text: "#FFFFFF",
  muted: "#B3B3B3",
  aws: "#FF9900",
  cyan: "#00D8FF",
  violet: "#8A2BE2",
  glowOrange: "rgba(255, 153, 0, 0.5)",
  glowCyan: "rgba(0, 216, 255, 0.5)",
  glowViolet: "rgba(138, 43, 226, 0.5)",
} as const

export const TYPOGRAPHY = {
  fonts: {
    display: "Orbitron, var(--font-orbitron)",
    sans: "Inter, var(--font-inter)",
    mono: "Space Mono, var(--font-space-mono)",
    body: "Inter, var(--font-inter)",
  },
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
  },
} as const

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
  blog: "https://yourblog.com",
  resume: "/resume.pdf", // Add to public folder
} as const

export type BlogStats = {
  readonly totalReads: number
  readonly linkedinFollowers: number
  readonly impressions: number
}

export const STATS: BlogStats = {
  totalReads: 10000,
  linkedinFollowers: 14000,
  impressions: 140000,
} as const

export type Publication = {
  readonly name: string
  readonly url: string
  readonly description: string
}

export const PUBLICATIONS: readonly Publication[] = [
  {
    name: "AWS in Plain English",
    url: "https://awsinplainenglish.com",
    description: "Simplifying AWS concepts for developers",
  },
  {
    name: "Towards AWS",
    url: "https://towardsaws.com",
    description: "Advanced AWS tutorials and best practices",
  },
] as const

export type Achievement = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly year: string
  readonly trophy: string
}

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: "smart-india-hackathon",
    title: "1st Place - Smart India Hackathon",
    description: "College Level Competition",
    year: "2023",
    trophy: "/placeholder.jpg",
  },
  {
    id: "blockchain-finance",
    title: "2nd Place - Blockchain in Finance",
    description: "Final Year Project with Trophy",
    year: "2024",
    trophy: "/placeholder.jpg",
  },
  {
    id: "iit-roorkee-case-study",
    title: "2nd Place - IIT Roorkee Case Study",
    description: "Only Tier-3 Winner vs IIMs",
    year: "2023",
    trophy: "/placeholder.jpg",
  },
] as const

export type Project = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly techStack: readonly string[]
  readonly kpi: string
  readonly image: string
  readonly demoUrl: string
  readonly githubUrl: string
}

export const PROJECTS: readonly Project[] = [
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimization",
    description: "Automated AWS cost optimization solution reducing infrastructure costs by 40% using Lambda, CloudWatch, and custom analytics.",
    techStack: ["AWS Lambda", "Python", "CloudWatch", "Terraform"],
    kpi: "40% cost reduction",
    image: "/projects/cloud-optimizer.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/aws-cost-optimizer",
  },
  {
    id: "kubernetes-automation",
    title: "Kubernetes Automation",
    description: "Production-grade K8s cluster automation with auto-scaling, monitoring, and self-healing capabilities for microservices.",
    techStack: ["Kubernetes", "Docker", "Helm", "Prometheus"],
    kpi: "99.9% uptime",
    image: "/projects/k8s-automation.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/k8s-automation-toolkit",
  },
  {
    id: "cicd-pipelines",
    title: "CI/CD Pipelines",
    description: "Enterprise CI/CD pipeline reducing deployment time by 70% with automated testing, security scanning, and rollback mechanisms.",
    techStack: ["GitHub Actions", "Jenkins", "Docker", "AWS"],
    kpi: "70% faster deployments",
    image: "/projects/cicd-pipelines.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/devops-pipeline-templates",
  },
] as const
