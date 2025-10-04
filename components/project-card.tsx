"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, ExternalLink, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card className="group cursor-pointer glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="relative overflow-hidden rounded-t-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Play className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardHeader>
              <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {project.kpi}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech: string) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-secondary/10 hover:bg-secondary/20 rounded-md transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className="glass max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
            <DialogDescription className="text-lg">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <Play className="h-16 w-16 text-primary" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Achievement</h3>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-base">
                {project.kpi}
              </Badge>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <Badge key={tech} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors"
              >
                <Github className="h-5 w-5" />
                View Code
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}