import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { AchievementsSection } from "@/components/achievements-section"
import { GitHubSection } from "@/components/github-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      {/* Gradient meshes */}
      <div className="gradient-mesh gradient-mesh-1" />
      <div className="gradient-mesh gradient-mesh-2" />
      <div className="gradient-mesh gradient-mesh-3" />
      {/* Mobile wave animation */}
      <div className="wave-mobile" />
      <div className="relative z-10">
        <Hero />
        <ProjectsSection />
        <BlogSection />
        <AchievementsSection />
        <GitHubSection />
        <Footer />
      </div>
    </main>
  )
}
