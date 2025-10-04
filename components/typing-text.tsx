"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
}

export function TypingText({ text, className, speed = 100 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        className="animate-pulse"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        ▊
      </motion.span>
    </span>
  )
}
