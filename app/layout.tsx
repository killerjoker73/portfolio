import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Orbitron } from "next/font/google"
import { Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Nav } from "@/components/nav"
import { generatePersonSchema } from "@/lib/seo"

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
  description: "Recent Computer Science Graduate | AWS Certified Cloud Practitioner | Cloud & DevOps Engineer | Technical Writer | DevRel Enthusiast",
  openGraph: {
    title: "Cloud, DevOps & Automation Portfolio",
    description: "Recent Computer Science Graduate | AWS Certified Cloud Practitioner | Cloud & DevOps Engineer | Technical Writer | DevRel Enthusiast",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${orbitron.variable} ${spaceMono.variable} antialiased`}>
        <Nav />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
