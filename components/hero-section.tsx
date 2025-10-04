"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">▊</span>
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          <span className="hero-gradient-text">
            <TypingText text="Cloud, DevOps & Automation" />
          </span>
        </h1>

        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Pranav Purohit
          </span>
        </h2>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto text-pretty">
          AWS Certified Cloud Practitioner
        </p>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto text-pretty">
        Developer Advocate | Technical Writer | DevRel Enthusiast
        </p>

        <div className="flex justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1qhOjTjPzmRhsNriBeFUiEUus5_P8P6EH/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg glow-orange group rounded-xl transition-all duration-300 hover:scale-105 mx-auto"
          >
            Resume
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-16 text-base text-muted-foreground font-mono">
          <p className="italic whitespace-nowrap">🛠️ DevOps engineer who thinks in scripts, dreams in containers 🐳 | Clouds, pipelines & chaos are my daily breakfast</p>
        </div>

        {/* 3D Globe */}
        <div className="globe-container">
          <div className="globe">
            <div className="globe-node"></div>
            <div className="globe-node"></div>
            <div className="globe-node"></div>
            <div className="globe-node"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
