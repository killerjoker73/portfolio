"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Achievement } from "@/data/achievements"
import Image from "next/image"

interface TimelineProps {
  achievements: readonly Achievement[]
  className?: string
}

export function Timeline({ achievements, className }: TimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

      <div className="space-y-12">
        {achievements.map((achievement, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <Card
                className={`glass p-6 flex-1 group hover:scale-105 transition-all duration-300 min-h-[200px] border-4 border-red-500 ${isEven ? "lg:text-right" : "lg:text-left"}`}
              >
                <div className={`flex items-start gap-4 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className={`h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    {achievement.trophy ? (
                      <Image
                        src={achievement.trophy}
                        alt={`${achievement.title} trophy`}
                        width={40}
                        height={40}
                        className="rounded object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 bg-primary rounded-full" />
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground font-mono mb-2">
                      {achievement.year}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.5, type: "spring" }}
                className={`hidden lg:block h-4 w-4 rounded-full bg-gradient-to-r from-primary to-primary ring-4 ring-background flex-shrink-0`}
              />

              <div className="flex-1 hidden lg:block" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
