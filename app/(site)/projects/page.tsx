import { Metadata } from "next"
import { PROJECTS } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { generateMetadata } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Projects",
  description: "Showcase of my top cloud and DevOps projects with detailed technical implementations and results.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Top Projects
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Building scalable cloud infrastructure and automation solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
