"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { VariantProps } from "class-variance-authority"

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glow?: "orange" | "cyan" | "violet"
  variant?: VariantProps<typeof Button>["variant"]
  size?: VariantProps<typeof Button>["size"]
  children: React.ReactNode
}

export function GlowButton({
  glow = "orange",
  className,
  children,
  ...props
}: GlowButtonProps) {
  const glowStyles = {
    orange: "hover:shadow-orange-500/50 hover:border-orange-400",
    cyan: "hover:shadow-cyan-500/50 hover:border-cyan-400",
    violet: "hover:shadow-violet-500/50 hover:border-violet-400",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden border-2 transition-all duration-300",
          "bg-transparent hover:bg-opacity-10",
          glowStyles[glow],
          className
        )}
        {...props}
      >
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, rgba(var(--${glow}), 0.1) 0%, transparent 70%)`,
          }}
        />
        {children}
      </Button>
    </motion.div>
  )
}
