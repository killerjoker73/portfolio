"use client"

import { useEffect, useRef } from "react"
import { Cloud, Server, Database, Cpu, HardDrive, Network } from "lucide-react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      icon: string
    }> = []

        const colors = ["oklch(0.6 0.25 35)", "oklch(0.6 0.25 200)", "oklch(0.6 0.25 270)"]
    const icons = ["cloud", "server", "database", "cpu", "harddrive", "network"]

    // Icon drawing functions
    function drawCloud(ctx: CanvasRenderingContext2D) {
      ctx.beginPath()
      ctx.arc(-3, 0, 3, 0, Math.PI * 2)
      ctx.arc(0, -2, 4, 0, Math.PI * 2)
      ctx.arc(3, 0, 3, 0, Math.PI * 2)
      ctx.arc(0, 2, 2, 0, Math.PI * 2)
      ctx.fill()
    }

    function drawServer(ctx: CanvasRenderingContext2D) {
      ctx.fillRect(-4, -3, 8, 6)
      ctx.fillRect(-3, -2, 6, 1)
      ctx.fillRect(-3, 0, 6, 1)
      ctx.fillRect(-3, 2, 6, 1)
    }

    function drawDatabase(ctx: CanvasRenderingContext2D) {
      ctx.beginPath()
      ctx.ellipse(0, -2, 4, 2, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(0, 0, 4, 2, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(0, 2, 4, 2, 0, 0, Math.PI * 2)
      ctx.fill()
    }

        function drawCpu(ctx: CanvasRenderingContext2D) {
          ctx.fillRect(-3, -3, 6, 6)
          ctx.fillStyle = "oklch(0.08 0.02 240)"
          ctx.fillRect(-2, -2, 4, 4)
          ctx.fillStyle = "oklch(0.6 0.25 35)"
        }

    function drawHardDrive(ctx: CanvasRenderingContext2D) {
      ctx.fillRect(-4, -2, 8, 4)
      ctx.fillRect(-3, -1, 6, 2)
    }

    function drawNetwork(ctx: CanvasRenderingContext2D) {
      ctx.beginPath()
      ctx.moveTo(-4, -2)
      ctx.lineTo(4, -2)
      ctx.moveTo(-4, 0)
      ctx.lineTo(4, 0)
      ctx.moveTo(-4, 2)
      ctx.lineTo(4, 2)
      ctx.stroke()
    }

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        icon: icons[Math.floor(Math.random() * icons.length)],
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw icon instead of circle
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.scale(particle.size / 10, particle.size / 10)
        ctx.fillStyle = particle.color
        ctx.shadowBlur = 15
        ctx.shadowColor = particle.color
        
        // Draw simple icon shapes
        switch (particle.icon) {
          case "cloud":
            drawCloud(ctx)
            break
          case "server":
            drawServer(ctx)
            break
          case "database":
            drawDatabase(ctx)
            break
          case "cpu":
            drawCpu(ctx)
            break
          case "harddrive":
            drawHardDrive(ctx)
            break
          case "network":
            drawNetwork(ctx)
            break
        }
        ctx.restore()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 150) {
                ctx.beginPath()
                ctx.moveTo(p1.x, p1.y)
                ctx.lineTo(p2.x, p2.y)
                ctx.strokeStyle = `oklch(from oklch(0.6 0.25 35) l c h / ${0.2 * (1 - distance / 150)})`
                ctx.lineWidth = 0.5
                ctx.stroke()
              }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" />
}
