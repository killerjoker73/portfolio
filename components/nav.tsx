"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GlowButton } from "./glow-button"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/achievements", label: "Achievements" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-display font-bold text-primary">
            PP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/#contact">
              <GlowButton
                glow="orange"
                className="px-6 py-2 text-sm font-medium"
              >
                Get In Touch
              </GlowButton>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  <GlowButton
                    glow="orange"
                    className="w-full px-6 py-2 text-sm font-medium"
                  >
                    Get In Touch
                  </GlowButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
