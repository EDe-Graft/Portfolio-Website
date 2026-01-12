import { Github, Linkedin, Mail, Globe } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/ede-graft", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/de-graft", label: "LinkedIn" },
  { icon: Mail, href: "mailto:edgquansah@gmail.com", label: "Email" },
  { icon: Globe, href: "https://edgquansah.com", label: "Website" },
]

export function SocialLinks() {
  return (
    <div className="fixed bottom-12 left-12 z-50 hidden md:flex flex-col gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label={link.label}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
