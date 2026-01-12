import { Navigation, MobileNavigation } from "../components/navigation"
import { SocialLinks } from "../components/social-links"
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
      period: "Jan 2026 – Mar 2026",
      title: "Computer Science & AI Intern",
      company: "New Jersey Division on Civil Rights",
      description: [
        "Conduct research on AI governance, risk management, and workforce adoption, supporting responsible AI use in a state civil rights agency.",
        "Assist in evaluating algorithmic bias, fairness, and explainability for AI systems used in public-sector decision-making.",
        "Apply data analysis and machine learning concepts to evaluate risks and fairness tradeoffs in AI-assisted systems.",
        "Contribute to AI-driven tools and public education materials that inform New Jersey residents about their rights related to AI systems.",
      ],
      technologies: ["Python", "AI/ML", "Data Analysis", "Governance"],
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
      <SocialLinks />
      <MobileNavigation />

      <main className="container mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
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
