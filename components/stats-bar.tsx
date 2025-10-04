"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { BookOpen, TrendingUp, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { STATS } from "@/data/blogs"

interface StatsBarProps {
  className?: string
}

export function StatsBar({ className }: StatsBarProps) {
  const [counters, setCounters] = useState({
    reads: 0,
    followers: 0,
    impressions: 0,
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = {
        reads: STATS.totalReads / steps,
        followers: STATS.linkedinFollowers / steps,
        impressions: STATS.impressions / steps,
      }

      const timer = setInterval(() => {
        setCounters(prev => ({
          reads: Math.min(prev.reads + increment.reads, STATS.totalReads),
          followers: Math.min(prev.followers + increment.followers, STATS.linkedinFollowers),
          impressions: Math.min(prev.impressions + increment.impressions, STATS.impressions),
        }))
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView])

  const stats = [
    {
      label: "Total Reads",
      value: Math.floor(counters.reads),
      icon: BookOpen,
      color: "text-primary",
    },
    {
      label: "LinkedIn Followers",
      value: Math.floor(counters.followers),
      icon: Users,
      color: "text-secondary",
    },
    {
      label: "Impressions",
      value: Math.floor(counters.impressions),
      icon: TrendingUp,
      color: "text-accent",
    },
  ]

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${className}`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass p-8 text-center group hover:scale-105 transition-all duration-300">
              <Icon className={`h-12 w-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-4xl font-display font-bold mb-2 ${stat.color}`}>
                {stat.value.toLocaleString()}+
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
