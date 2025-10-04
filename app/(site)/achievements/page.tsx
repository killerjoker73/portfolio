import { Metadata } from "next"
import { ACHIEVEMENTS } from "@/data/achievements"
import { Timeline } from "@/components/timeline"
import { generateMetadata } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Achievements & Recognition",
  description: "Recognition and awards in technology competitions and academic achievements.",
  path: "/achievements",
})

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Recognition and awards in technology competitions and academic excellence.
          </p>
        </div>

        <Timeline achievements={ACHIEVEMENTS} />

        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4">Recognition Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe that true achievement comes from solving real problems and making a positive impact.
              Each recognition represents not just technical skill, but the ability to collaborate, innovate, and deliver results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These achievements fuel my passion for continuous learning and pushing the boundaries of what's possible
              in cloud computing and DevOps engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
