"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Terminal } from "lucide-react"
import { useState, useEffect } from "react"
import { fetchPinnedRepos, GitHubRepo } from "@/lib/github"

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [typedText, setTypedText] = useState("")
  const fullText = "echo \"kubectl apply -f pranav.yaml # Deploying Pranav to prod 🚀\""

  useEffect(() => {
    fetchPinnedRepos("yourusername").then((data) => {
      setRepos(data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Github className="h-12 w-12 text-primary animate-pulse" />
              <h2 className="font-display text-4xl sm:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  My GitHub
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">Loading repositories...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="h-12 w-12 text-primary" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              <span className="text-custom-red">
                My GitHub
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">Open source projects and contributions</p>
        </div>

        {/* Terminal mockup */}
        <Card className="glass p-6 mb-12 max-w-3xl mx-auto border-2 border-red-500">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <div className="h-3 w-3 rounded-full bg-accent" />
            <div className="h-3 w-3 rounded-full bg-secondary" />
            <span className="ml-4 text-sm text-muted-foreground font-mono">terminal</span>
          </div>
          <div className="bg-background/50 rounded p-4 font-mono text-sm">
            <div className="flex items-center gap-2 text-secondary">
              <Terminal className="h-4 w-4" />
              <span className="text-primary">$</span>
              <span className="text-foreground">{typedText}</span>
              <span className="animate-pulse">▊</span>
            </div>
          </div>
        </Card>

        {/* GitHub repos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <Card key={`repo-${index}-${repo.name}`} className="glass p-6 group hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-red-500">
              <div className="flex items-start justify-between mb-4">
                <Github className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {repo.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{repo.description}</p>

              <Badge
                variant="secondary"
                className="bg-muted/50 text-foreground border border-primary/20 font-mono text-xs"
              >
                {repo.language}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}