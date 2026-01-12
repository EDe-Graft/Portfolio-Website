import { Link, useLocation } from "react-router-dom"
import { Github, Linkedin, Mail } from "lucide-react"

export function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 p-12 flex flex-col justify-between border-r border-slate-800 z-50 bg-slate-950 hidden lg:flex">
      <div className="space-y-12">
        <Link to="/" className="block">
          <h2 className="text-3xl font-semibold text-white"> Edward De-Graft Quansah</h2>
          <p className="text-sm text-slate-400 mt-2">Software & AI Engineer</p>
        </Link>

        <div className="space-y-6">
          <Link
            to="/"
            className={`block text-sm transition-colors ${
              isActive("/") ? "text-cyan-400 font-medium" : "text-slate-400 hover:text-white"
            }`}
          >
            ABOUT
          </Link>
          <Link
            to="/experience"
            className={`block text-sm transition-colors ${
              isActive("/experience") ? "text-cyan-400 font-medium" : "text-slate-400 hover:text-white"
            }`}
          >
            EXPERIENCE
          </Link>
          <Link
            to="/projects"
            className={`block text-sm transition-colors ${
              isActive("/projects") ? "text-cyan-400 font-medium" : "text-slate-400 hover:text-white"
            }`}
          >
            PROJECTS
          </Link>
          <Link
            to="/skills"
            className={`block text-sm transition-colors ${
              isActive("/skills") ? "text-cyan-400 font-medium" : "text-slate-400 hover:text-white"
            }`}
          >
            SKILLS
          </Link>
        </div>
      </div>

      <div className="flex gap-4">
        <a
          href="https://github.com/ede-graft"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/de-graft"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:edgquansah@gmail.com" className="text-slate-400 hover:text-white transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </nav>
  )
}

export function MobileNavigation() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="text-lg font-semibold text-white">
          Edward De-Graft Quansah
        </Link>
        <div className="flex gap-4">
          <Link to="/" className={`text-xs ${isActive("/") ? "text-cyan-400" : "text-slate-400"}`}>
            About
          </Link>
          <Link to="/experience" className={`text-xs ${isActive("/experience") ? "text-cyan-400" : "text-slate-400"}`}>
            Experience
          </Link>
          <Link to="/projects" className={`text-xs ${isActive("/projects") ? "text-cyan-400" : "text-slate-400"}`}>
            Projects
          </Link>
          <Link to="/skills" className={`text-xs ${isActive("/skills") ? "text-cyan-400" : "text-slate-400"}`}>
            Skills
          </Link>
        </div>
      </div>
    </nav>
  )
}
