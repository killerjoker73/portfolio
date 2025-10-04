import { Metadata } from "next"
import { SITE_CONFIG } from "./constants"

export function generateMetadata({
  title,
  description,
  path = "",
}: {
  title?: string
  description?: string
  path?: string
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name
  const fullDescription = description || SITE_CONFIG.description
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [SITE_CONFIG.ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pranav Purohit", // Replace with your actual name
    jobTitle: "Cloud & DevOps Engineer",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    sameAs: [
      "https://linkedin.com/in/yourusername", // Replace with actual LinkedIn
      "https://github.com/yourusername", // Replace with actual GitHub
      "https://yourblog.com", // Replace with actual blog
    ],
    knowsAbout: [
      "AWS",
      "DevOps",
      "Cloud Computing",
      "Kubernetes",
      "CI/CD",
      "Infrastructure as Code",
    ],
  }
}
