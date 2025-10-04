"use client"

import { Card } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { PUBLICATIONS } from "@/data/blogs"
import { StatsBar } from "./stats-bar"

export function BlogSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-custom-red">
              Sharing Knowledge, Simplifying Cloud
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">Published on AWS in Plain English & Towards AWS</p>
        </div>

        <StatsBar />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PUBLICATIONS.map((publication, index) => (
            <Card key={publication.name} className="glass p-8 group hover:scale-105 transition-all duration-300 border-2 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-orange">
                  <BookOpen className="h-6 w-6 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{publication.name}</h3>
                  <p className="text-sm text-muted-foreground">{publication.description}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Writing technical content that breaks down complex AWS and DevOps concepts into digestible, plain-English
                explanations. Helping thousands of developers accelerate their cloud journey.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}