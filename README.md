# Cloud & DevOps Portfolio

A modern, production-ready portfolio website showcasing cloud engineering, DevOps expertise, and technical writing. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Glassmorphism cards, neon glow effects, and smooth animations
- **Performance Optimized**: Next.js 15 with App Router, optimized images, and lazy loading
- **Accessibility First**: WCAG AA compliant with proper semantic HTML and keyboard navigation
- **Responsive**: Perfect on all devices from mobile to desktop
- **SEO Ready**: Open Graph, Twitter Cards, and structured data
- **Type Safe**: Full TypeScript with strict mode
- **Quality Gates**: ESLint, Prettier, Playwright tests, and CI/CD

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Testing**: Playwright
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions

## 🏗️ Architecture

```
app/
├── (site)/                    # Site pages
│   ├── layout.tsx            # Root layout with nav
│   ├── page.tsx              # Home page
│   ├── projects/page.tsx     # Projects page
│   ├── blogs/page.tsx        # Blogs page
│   └── achievements/page.tsx # Achievements page
├── globals.css               # Global styles & design tokens
└── layout.tsx               # Root layout

components/                   # Reusable components
├── ui/                      # shadcn/ui components
├── glow-button.tsx          # Custom button with glow effects
├── hero.tsx                 # Hero section with typing animation
├── project-card.tsx         # Project cards with modals
├── stats-bar.tsx           # Animated counters
├── timeline.tsx            # Achievement timeline
├── nav.tsx                 # Navigation with mobile menu
└── footer.tsx              # Footer with social links

data/                        # Content data (no magic strings)
├── projects.ts             # Project data
├── achievements.ts         # Achievement data
└── blogs.ts               # Blog and stats data

lib/                        # Utilities and business logic
├── constants.ts           # Design tokens & site config
├── seo.ts                # SEO utilities
├── github.ts             # GitHub API integration
└── utils.ts              # General utilities
```

## 🎨 Design System

### Colors
- **Background**: `#0B0F19` (Deep navy black)
- **Secondary**: `#101820` (Subtle dark)
- **Text**: `#FFFFFF` (Clean white)
- **AWS Orange**: `#FF9900` (Primary accent)
- **Cyan**: `#00D8FF` (Secondary accent)
- **Violet**: `#8A2BE2` (Tertiary accent)

### Typography
- **Headings**: Orbitron (futuristic, tech-oriented)
- **Body**: Inter (clean, modern, professional)
- **Code**: Space Mono (technical, CLI aesthetic)

### Effects
- Glassmorphism cards with backdrop blur
- Subtle neon glow borders and animations
- Smooth motion respecting `prefers-reduced-motion`
- Particle background with cloud/tech icons

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd devops-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```

   Add your GitHub username for API integration:
   ```env
   GITHUB_USERNAME=yourusername
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Content Management

All content is centralized in `/data/*` files for easy editing:

### Projects (`/data/projects.ts`)
```typescript
export const PROJECTS = [
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimization",
    description: "Automated AWS cost optimization...",
    techStack: ["AWS Lambda", "Python", "CloudWatch", "Terraform"],
    kpi: "40% cost reduction",
    image: "/projects/cloud-optimizer.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/aws-cost-optimizer",
  },
  // ... more projects
]
```

### Achievements (`/data/achievements.ts`)
```typescript
export const ACHIEVEMENTS = [
  {
    id: "smart-india-hackathon",
    title: "1st Place - Smart India Hackathon",
    description: "College Level Competition",
    year: "2023",
    trophy: "/trophies/hackathon-1st.jpg",
  },
  // ... more achievements
]
```

### Blog Stats (`/data/blogs.ts`)
```typescript
export const STATS = {
  totalReads: 10000,
  linkedinFollowers: 14000,
  impressions: 140000,
}
```

## 🔧 Development

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run typecheck

# Run tests
npm run test
```

### Adding New Components

1. Create component in `/components/`
2. Use design tokens from `/lib/constants.ts`
3. Ensure accessibility (ARIA labels, focus management)
4. Add motion with Framer Motion (respect reduced motion)
5. Test with Playwright

### Performance Optimization

- Use `next/image` for all images
- Implement lazy loading for components
- Optimize animations for 60fps
- Tree-shake unused animations

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run specific test file
npx playwright test navigation.spec.ts

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests in debug mode
npx playwright test --debug
```

## 📊 Performance & SEO

- **Lighthouse Score**: ≥95 on all metrics
- **Core Web Vitals**: Optimized for excellent UX
- **SEO**: Proper meta tags, Open Graph, Twitter Cards
- **Accessibility**: WCAG AA compliant

## 🚢 Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Auto-deployment on push to main
3. Environment variables in Vercel dashboard

### Manual Deployment

```bash
npm run build
npm run start
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_USERNAME` | Your GitHub username for API integration | No |

## 📚 API Integration

### GitHub API
- Fetches pinned repositories
- Graceful fallback to local data if rate-limited
- Cached for 1 hour

### Adding New APIs
1. Create utility in `/lib/`
2. Add types and error handling
3. Implement fallback strategy
4. Add caching if needed

## 🎯 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Accessibility**: Screen readers, keyboard navigation

## 🔧 Customization

### Colors & Theme
Edit `/lib/constants.ts` for design tokens.

### Content
Update `/data/*` files for projects, achievements, and stats.

### SEO
Modify `/lib/seo.ts` for meta tags and structured data.

## 📈 Analytics

- Vercel Analytics (built-in)
- Optional: Add Google Analytics, Plausible, etc.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Ensure all checks pass
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
