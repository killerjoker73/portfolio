"use client"

import { ACHIEVEMENTS } from "@/data/achievements"
import { Timeline } from "./timeline"

export function AchievementsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-custom-red">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">Recognition and awards in technology competitions</p>
        </div>

        <Timeline achievements={ACHIEVEMENTS} />
      </div>
    </section>
  )
}