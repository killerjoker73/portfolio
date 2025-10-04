import { PROJECTS } from "@/data/projects"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-custom-red">
              Top Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building scalable cloud infrastructure and automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}