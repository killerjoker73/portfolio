import { Github, Linkedin, BookOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-secondary" },
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-primary" },
  { icon: BookOpen, label: "Blog", href: "#", color: "hover:text-accent" },
  { icon: FileText, label: "Resume", href: "#", color: "hover:text-secondary" },
]

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Orbiting icons */}
          <div className="orbit-container">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`orbit-icon glass h-12 w-12 rounded-full group transition-all duration-300 hover:scale-110 ${link.color}`}
                  asChild
                >
                  <a href={link.href} aria-label={link.label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              )
            })}
          </div>

          {/* AWS/DevOps decorative icons */}
          <div className="flex items-center gap-4 opacity-50">
            <div
              className="h-8 w-8 rounded bg-gradient-to-br from-primary to-secondary animate-float"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="h-6 w-6 rounded bg-gradient-to-br from-secondary to-accent animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="h-10 w-10 rounded bg-gradient-to-br from-accent to-primary animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="h-7 w-7 rounded bg-gradient-to-br from-primary to-accent animate-float"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm font-mono mb-2">Built with Next.js, Tailwind CSS, and ☁️</p>
            <p className="text-muted-foreground text-xs">© 2025 Cloud & DevOps Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
