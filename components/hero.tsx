"use client"

import { GlowButton } from "./glow-button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { TypingText } from "./typing-text"

interface HeroProps {
  onViewWork?: () => void
  onReadBlogs?: () => void
}

export function Hero({ onViewWork, onReadBlogs }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="glass rounded-full px-6 py-2 animate-border-glow">
            <span className="text-sm font-mono text-primary">
              AWS Certified Cloud Practitioner
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            <TypingText text="Cloud, DevOps & Automation" />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 mb-12 max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Recent Computer Science Graduate | AWS Certified Cloud Practitioner
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Cloud & DevOps Engineer | Technical Writer | DevRel Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <GlowButton
            glow="orange"
            size="lg"
            className="px-8 py-6 text-lg font-semibold group"
            onClick={onViewWork}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </GlowButton>

          <GlowButton
            glow="cyan"
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold glass border-secondary text-secondary hover:bg-secondary/10 bg-transparent group"
            onClick={onReadBlogs}
          >
            Read My Blogs
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-sm text-muted-foreground font-mono"
        >
          <p className="italic">Helping developers simplify Cloud & DevOps in Plain English</p>
        </motion.div>

        {/* 3D Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="globe-container"
        >
          <div className="globe">
            <div className="globe-node"></div>
            <div className="globe-node"></div>
            <div className="globe-node"></div>
            <div className="globe-node"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
