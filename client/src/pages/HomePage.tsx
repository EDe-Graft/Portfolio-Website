import { Navigation, MobileNavigation } from "../components/navigation"
import { ExternalLink } from "lucide-react"
import profileImage from "../assets/profile-image.png"

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <MobileNavigation />

      <main className="lg:ml-64 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 lg:py-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-semibold text-white">Edward De-Graft Quansah</h1>
              <p className="text-xl text-slate-400">Computer Science Student || Software Engineer || Artificial Intelligence</p>

              <div className="w-full max-w-sm h-72 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <img
                  src={profileImage}
                  alt="Edward De-Graft Quansah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                I'm a developer passionate about crafting accessible, pixel-perfect digital experiences that blend
                thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                development, creating experiences that not only look great but are meticulously built for performance
                and usability.
              </p>

              <p>
                Currently, I'm pursuing my Bachelor of Science in Computer Science at{" "}
                <a
                  href="https://wpunj.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  William Paterson University
                  <ExternalLink className="w-3 h-3" />
                </a>, with a GPA of 3.98,
                graduating in May 2026. I specialize in full-stack development, AI/ML, and building scalable
                cloud-native applications.
              </p>

              <p>
                In the past, I've had the opportunity to work on innovative projects across various domains — from
                building <span className="text-white">AI-powered SaaS platforms </span>
                at {" "}
                <a
                  href="https://qurius.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  Qurius AI 
                  <ExternalLink className="w-3 h-3" />
                </a>,  
                to conducting research on{" "}
                <span className="text-white">AI governance and algorithmic fairness</span> at the {" "}
                <a
                  href="https://www.njoag.gov/attorney-general-platkin-and-division-on-civil-rights-announce-new-guidance-on-algorithmic-discrimination-creation-of-civil-rights-innovation-lab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  New Jersey Division On Civil Rights
                  <ExternalLink className="w-3 h-3" />
                </a>. I've also developed localized educational platforms at {" "}
                <a
                  href="https://ayaprep.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  AyaPrep Limited
                  <ExternalLink className="w-3 h-3" />
                </a>, serving thousands
                of students across Ghana and West Africa.
              </p>

              <p>
                Additionally, I've led multiple successful projects including{" "}
                <a
                  href="https://sharesphere.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  ShareSphere
                  <ExternalLink className="w-3 h-3" />
                </a>
                , a campus resource-sharing platform, and designed a comprehensive end-to-end {" "}
                <a
                  href="https://sharesphere.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  ATM Banking System
                  <ExternalLink className="w-3 h-3" />
                </a>, following complete
                SDLC best practices.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="mailto:edgquansah@gmail.com"
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors font-medium"
              >
                Get In Touch
              </a>
              <a
                href="tel:+19739869907"
                className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:border-slate-600 hover:text-white transition-colors"
              >
                +1 973-986-9907
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
