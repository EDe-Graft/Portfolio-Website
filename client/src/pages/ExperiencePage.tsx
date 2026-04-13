import { Navigation, MobileNavigation } from "../components/navigation"
import { ArrowUpRight } from "lucide-react"

interface ExperienceItemProps {
  period: string
  title: string
  company: string
  link?: string
  description: string[]
  technologies?: string[]
}

function ExperienceItem({ period, title, company, link, description, technologies }: ExperienceItemProps) {
  return (
    <div className="group relative border-l-2 border-slate-800 pl-8 pb-12 hover:border-cyan-400 transition-colors">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors" />

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500 uppercase tracking-wider">{period}</p>
            <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-1"
              >
                {company}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <p className="text-cyan-400 mt-1">{company}</p>
            )}
          </div>
        </div>

        <ul className="space-y-2 text-slate-300">
          {description.map((item, index) => (
            <li key={index} className="leading-relaxed">
              • {item}
            </li>
          ))}
        </ul>

        {technologies && (
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  const experiences: ExperienceItemProps[] = [
    {
      period: "Jan 2026 – Apr 2026",
      title: "Computer Science & AI Intern",
      company: "New Jersey Department of Law and Public Safety, Division on Civil Rights, Innovation Lab",
      description: [
        "Developed NJ Fair, an AI-powered interview summarization tool built with Next.js, Flask, PostgreSQL, and OpenAI, deployed on Azure to help investigators extract structured insights from civil rights case interviews.",
        "Diagnosed and resolved core accuracy issues—including truncated transcripts, entity errors, and ASR weaknesses—through deterministic chunking, validation safeguards, and targeted prompt engineering.",
        "Led evaluation and adversarial testing efforts, synthesizing investigator feedback to strengthen trustworthiness, reduce hallucination risk, and improve the fairness and reliability of AI-assisted case review.",
        "Contributed to AI governance research and public-facing educational materials to train staff on AI-driven systems.",
      ],
      technologies: ["Python", "Next.js", "Flask", "PostgreSQL", "OpenAI", "Azure", "AI/ML", "Data Analysis", "Governance"],
    },
    {
      period: "2026",
      title: "Omicron Omega Award for Excellence in Computer Science",
      company: "William Paterson University",
      link: "https://wpunj.edu",
      description: [
        "University award recognizing outstanding achievement in computer science at William Paterson University.",
      ],
    },
    {
      period: "April 2025 – Dec 2025",
      title: "Founder & Developer",
      company: "Qurius AI",
      description: [
        "Built enterprise SaaS web assistant using React 18, TypeScript, Node.js, and PostgreSQL with secure multi-tenant architecture and 99.9% uptime.",
        "Developed intelligent RAG system with Jina embeddings + pgvector for semantic search and confidence scoring, reducing customer response times by 80%.",
        "Implemented CI/CD pipeline with GitHub, Vercel, and Render for seamless automated builds and deployments to production on every commit.",
        "Integrated Stripe payments, role-based authentication, and enterprise security (Supabase Auth, encrypted transmission, audit logging) to support SMB clients at scale.",
      ],
      technologies: ["React 18", "TypeScript", "Node.js", "PostgreSQL", "RAG", "pgvector", "Stripe", "Supabase"],
    },
    {
      period: "June 2022 – Mar 2025",
      title: "Software Engineer",
      company: "AyaPrep Limited",
      description: [
        "Built RESTful APIs in Python + Flask to deliver localized math content, increasing user engagement by 30%.",
        "Optimized backend performance with caching + PostgreSQL indexing, reducing latency by 40% and scaling reach by 50%.",
        "Implemented JWT + OAuth authentication with role-based authorization, strengthening security and compliance.",
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "REST APIs", "JWT", "OAuth"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <MobileNavigation />

      <main className="lg:ml-64 container mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
        <div className="w-full max-w-4xl space-y-16 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-semibold text-white">Experience</h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Building polished software and web experiences. Experimenting with scalable systems and AI-driven
              solutions.
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
