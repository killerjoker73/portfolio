import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Orbitron } from "next/font/google"
import { Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cloud, DevOps & Automation Portfolio",
  description:
    "Recent Computer Science Graduate | AWS Certified Cloud Practitioner | Cloud & DevOps Engineer | Technical Writer | DevRel Enthusiast",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${orbitron.variable} ${spaceMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
