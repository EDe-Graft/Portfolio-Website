import { Navigation, MobileNavigation } from "../components/navigation"
import { SocialLinks } from "../components/social-links"

interface SkillCategory {
  category: string
  skills: string[]
}

function SkillSection({ category, skills }: SkillCategory) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wider">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-slate-800/50 text-slate-200 rounded-lg border border-slate-700 hover:border-cyan-400/50 hover:text-white transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "HTML/CSS", "SQL"],
    },
    {
      category: "Frameworks",
      skills: ["React", "React Native", "Node.js", "Express.js", "Flask", "Expo"],
    },
    {
      category: "Cloud & Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Google Cloud Platform",
        "Supabase",
        "Appwrite",
        "VS Code",
        "CursorAI",
        "Claude Code",
      ],
    },
    {
      category: "AI/ML",
      skills: [
        "scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "RAG",
        "Vector Databases",
        "Semantic Search",
      ],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "pgvector"],
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
            <h1 className="text-5xl md:text-6xl font-semibold text-white">Skills</h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              A comprehensive overview of my technical expertise and tools I work with to build exceptional digital
              experiences.
            </p>
          </div>

          <div className="space-y-10 mt-12">
            {skillCategories.map((category, index) => (
              <SkillSection key={index} {...category} />
            ))}
          </div>

          <div className="mt-16 p-6 bg-slate-900/50 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
            <div className="space-y-2 text-slate-300">
              <p className="font-medium">William Paterson University, Wayne, NJ</p>
              <p>Bachelor of Science in Computer Science • GPA: 3.98 • May 2026</p>
              <p className="text-sm text-slate-400 mt-3">
                <strong className="text-slate-300">Relevant Courses:</strong> AI, Software Engineering, Data Mining,
                Cloud Computing, Full Stack Development, Data Structures, UI/UX, Security, Operating Systems
              </p>
              <p className="text-sm text-slate-400 mt-2">
                <strong className="text-slate-300">Honors:</strong> Valedictorian (2017), NSMQ Finalist (2017),
                Innovation Hub Award (AyaPrep 2022)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
