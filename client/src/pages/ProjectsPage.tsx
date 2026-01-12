import { Navigation, MobileNavigation } from "../components/navigation"
import { SocialLinks } from "../components/social-links"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  link?: string
  technologies: string[]
  highlights: string[]
}

function ProjectCard({ title, description, link, technologies, highlights }: ProjectCardProps) {
  return (
    <div className="group relative bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-slate-300 leading-relaxed">{description}</p>

        <ul className="space-y-2 text-sm text-slate-400">
          {highlights.map((highlight, index) => (
            <li key={index} className="leading-relaxed">
              • {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-full border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const projects: ProjectCardProps[] = [
    {
      title: "ShareSphere",
      description: "Full-stack campus platform facilitating item donations and requests among students.",
      link: "https://sharesphere.app",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Neon", "Docker", "Google Cloud", "OAuth", "TailwindCSS"],
      highlights: [
        "Built full-stack campus platform with React, Node.js, Express, PostgreSQL, and Docker, facilitating 100+ student item donations and requests",
        "Implemented secure OAuth login (Google, GitHub, Facebook) and centralized like system with state-synced React components for improved engagement",
        "Deployed on Google Cloud with containerized architecture, ensuring scalability, high availability, and reliable media storage via Cloudinary",
      ],
    },
    {
      title: "Qurius AI",
      description: "AI-Powered Website Assistance and Analytics Platform for SMBs",
      link: "https://qurius.app",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Supabase", "Stripe", "OpenRouter", "Cursor"],
      highlights: [
        "Built enterprise SaaS web assistant using React 18, TypeScript, Node.js, and PostgreSQL with secure multi-tenant architecture and 99.9% uptime",
        "Developed intelligent RAG system with Jina embeddings + pgvector for semantic search and confidence scoring, reducing customer response times by 80%",
        "Implemented CI/CD pipeline with GitHub, Vercel, and Render for seamless automated builds and deployments to production on every commit.",
        "Integrated Stripe payments, role-based authentication, and enterprise security (Supabase Auth, encrypted transmission, audit logging) to support SMB clients at scale"
      ],
    },
    {
      title: "ATM System",
      description: "Complete banking system designed from scratch following full SDLC and OOP principles.",
      link: "https://docs.google.com/document/d/1FBtb8BlCqD27APAUatbXh-b9tFyjCAezAJKCJ1umitY/edit?usp=sharing",
      technologies: ["C++", "UML", "Software Engineering", "OOP", "State Management"],
      highlights: [
        "Designed and implemented a full ATM system from scratch following object-oriented software engineering principles and a complete SDLC",
        "Translated formal requirements into UML use case, class, communication and sequence diagrams, then into maintainable code",
        "Implemented core banking workflows including authentication, balance inquiries, withdrawals, deposits, transfers, and receipt printing with robust error handling and state management",
      ],
    },
    {
      title: "AI-Cal-Scan",
      description: "An AI-powered iOS and Android calorie tracker app with computer vision for instant food recognition and calorie estimation",
      link: "https://github.com/ede-graft/ai-cal-scan",
      technologies: ["React Native", "Expo", "Node.js", "Express", "TypeScript", "Supabase", "OpenRouter", "Nativewind"],
      highlights: [
        "Integrated OpenAI GPT-4o-mini vision model via OpenRouter for real-time food analysis",
        "Enforced JSON output + confidence scoring",
        "Achieved 40% faster data sync with optimized Supabase queries and auto-refetch on navigation",
        "Implemented dynamic meal logging with AI-pre-filled food name, calories, and confidence score"
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <SocialLinks />
      <MobileNavigation />

      <main className="container mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
        <div className="w-full max-w-5xl space-y-16 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-semibold text-white">Projects</h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              A selection of projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>

          <div className="grid gap-6 mt-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
