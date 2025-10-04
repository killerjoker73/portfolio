import { Metadata } from "next"
import { PUBLICATIONS } from "@/data/blogs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink } from "lucide-react"
import { generateMetadata } from "@/lib/seo"
import { StatsBar } from "@/components/stats-bar"

export const metadata: Metadata = generateMetadata({
  title: "Blogs & Writing",
  description: "Technical writing on AWS, DevOps, and cloud computing. Simplifying complex concepts for developers.",
  path: "/blogs",
})

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Sharing Knowledge, Simplifying Cloud
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Published on AWS in Plain English & Towards AWS - Making cloud computing accessible to everyone.
          </p>
        </div>

        <StatsBar />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PUBLICATIONS.map((publication, index) => (
            <Card key={publication.name} className="glass p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-orange">
                  <BookOpen className="h-6 w-6 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{publication.name}</h3>
                  <p className="text-sm text-muted-foreground">{publication.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  Featured Publication
                </Badge>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Site
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="glass p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-4">Writing Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I believe that great technical writing bridges the gap between complex concepts and practical understanding.
            My articles focus on real-world applications, best practices, and the "why" behind the technology.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're just starting your cloud journey or looking to optimize existing infrastructure,
            my writing aims to provide actionable insights that you can apply immediately in your projects.
          </p>
        </div>
      </div>
    </div>
  )
}
