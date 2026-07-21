import Sidebar from "@/components/Sidebar";
import PlayerBar from "@/components/PlayerBar";
import MobileNav from "@/components/MobileNav";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { SectionCard, SectionHeading } from "@/components/SectionCard";

const skills = [
  { name: "React.js", gradient: "linear-gradient(135deg, #61dafb, #282c34)" },
  { name: "Next.js", gradient: "linear-gradient(135deg, #000000, #ffffff)" },
  { name: "TypeScript", gradient: "linear-gradient(135deg, #3178c6, #00273f)" },
  { name: "Redux", gradient: "linear-gradient(135deg, #764abc, #4a148c)" },
  { name: "Tailwind", gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)" },
  { name: "JavaScript", gradient: "linear-gradient(135deg, #f7df1e, #222222)" },

  { name: "Git", gradient: "linear-gradient(135deg, #f05032, #1a1a2e)" },
];

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "7Span",
    location: "Ahmedabad, Gujarat",
    period: "Mar 2026 – Present",
    description:
      "Leading frontend development for scalable SaaS and enterprise applications using React.js, Next.js, and TypeScript. Designing reusable component libraries and improving performance through code splitting and lazy loading.",
    gradient: "linear-gradient(135deg, #1db954, #169c46)",
  },
  {
    role: "Software Engineer (Frontend)",
    company: "Bacancy Technology",
    location: "Ahmedabad, Gujarat",
    period: "Nov 2024 – Mar 2026",
    description:
      "Developed scalable frontend applications using React.js, Next.js, Redux Toolkit. Implemented SSR, ISR, lazy loading, and caching strategies. Built custom hooks for auth and RBAC.",
    gradient: "linear-gradient(135deg, #e13300, #b02500)",
  },
  {
    role: "Frontend Developer",
    company: "Zignuts Technolab",
    location: "Gandhinagar, Gujarat",
    period: "May 2022 – Nov 2024",
    description:
      "Built production-grade React.js applications, implemented Redux Toolkit for state management, integrated REST APIs, and migrated legacy applications to React.js.",
    gradient: "linear-gradient(135deg, #8400e7, #5b00a0)",
  },
];

const projects = [
  {
    title: "Ride & Stride Adventures",
    tech: "Next.js | Directus | Algolia",
    description:
      "Tour guide web platform where users can discover full itineraries, budgets, and activities all in one place. Plan and get a complete overview of tours with rich search powered by Algolia and content managed via Directus CMS.",
    url: "https://ridestrideadventures.com/",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    title: "Multi-Vendor Auto Parts Marketplace",
    tech: "Next.js | React Query | Redux Toolkit",
    description:
      "Scalable multi-vendor eCommerce platform with vendor onboarding, inventory management, logistics, payouts, and customer-facing product discovery with cart and checkout flows.",
    url: null,
    gradient: "linear-gradient(135deg, #1db954, #191414)",
  },
  {
    title: "Prompt Hub AI (SaaS)",
    tech: "Next.js | Redux Toolkit | SCSS",
    description:
      "AI-powered SaaS platform supporting text-to-text, text-to-image, and text-to-voice workflows with a canvas-based workflow engine, billing, subscriptions, and social feeds.",
    url: "https://prompts.ai/",
    gradient: "linear-gradient(135deg, #e13300, #ff7b00)",
  },
  {
    title: "Corporate Website Migration",
    tech: "Next.js | Tailwind CSS | SSR",
    description:
      "Migrated a large-scale corporate website from Core PHP to Next.js with Headless WordPress CMS. Implemented SSR, dynamic routing, SEO optimization, and caching.",
    url: null,
    gradient: "linear-gradient(135deg, #3178c6, #00273f)",
  },
];

const education = [
  {
    degree: "B.Tech Metallurgy & Material Science",
    school: "Gujarat Technological University",
    year: "2018 – 2022",
  },
];

const certifications = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2025",
    url: "https://www.linkedin.com/learning/certificates/951de9e59a5c7ea74c64dd014c1b916e9832de27e4f923264d25cce3c958759d",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    year: "2024",
    url: "https://www.freecodecamp.org/certification/fcca9e3023b-aef3-439e-89ef-f58077de7eaa/front-end-development-libraries",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#333] to-spotify-base">
          {/* Top Bar */}
          <header className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur-md flex items-center justify-between px-3 md:px-6 py-3">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-spotify-text hover:bg-black/80 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-spotify-text hover:bg-black/80 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/parimal-sharma-front-dev.pdf"
                download
                className="flex items-center justify-center gap-2 border border-white/20 text-white text-[11px] font-bold w-9 h-9 sm:w-auto sm:px-4 sm:py-2 rounded-full hover:scale-105 hover:border-white/40 transition-all uppercase tracking-wider"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span className="hidden sm:inline">Resume</span>
              </a>
              <a
                href="mailto:parimal81280@gmail.com"
                className="flex items-center justify-center gap-2 bg-white text-black text-xs font-bold w-9 h-9 sm:w-auto sm:px-6 sm:py-2 rounded-full hover:scale-105 transition-transform uppercase tracking-wider"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">Hire Me</span>
              </a>
            </div>
          </header>

          <div className="px-3 md:px-6 pb-24 lg:pb-24">
            {/* Hero Section */}
            <section id="home" className="pt-4 pb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
                <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-spotify-green to-[#169c46] shadow-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white">P</span>
                </div>
                <div className="pb-0 sm:pb-3 text-center sm:text-left">
                  <p className="text-[10px] sm:text-xs font-bold text-spotify-subtext uppercase tracking-wider mb-1">
                    Profile
                  </p>
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-1 sm:mb-2">
                    Parimal Sharma
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-spotify-subtext font-semibold">
                    Senior Frontend Engineer
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-2 sm:mt-3">
                    <span className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-sm text-spotify-subtext">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      Gandhinagar, India
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-sm text-spotify-subtext">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      4+ Years
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="mb-10">
              <SectionHeading title="About" subtitle="Senior Frontend Engineer" />
              <p className="text-spotify-subtext text-sm leading-relaxed max-w-3xl bg-spotify-surface rounded-md p-4">
                Senior Frontend Engineer with 4+ years of experience building scalable SaaS platforms,
                enterprise applications, AI-powered products, and marketplace solutions using React.js,
                Next.js, TypeScript, Redux Toolkit, and modern frontend architectures. Experienced
                in frontend system design, reusable component architecture, API integrations,
                authentication systems, SSR/ISR rendering strategies, and performance optimization.
              </p>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-10">
              <SectionHeading
                title="Tech Stack"
                subtitle="Languages, frameworks, and tools I work with"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                {skills.map((skill) => (
                  <SectionCard
                    key={skill.name}
                    title={skill.name}
                    gradient={skill.gradient}
                    subtitle="Proficient"
                  />
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-10">
              <SectionHeading
                title="Experience"
                subtitle="Professional journey and roles"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {experiences.map((exp) => (
                  <ExperienceCard
                    key={exp.company}
                    role={exp.role}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    gradient={exp.gradient}
                  />
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-10">
              <SectionHeading
                title="Projects"
                subtitle="Key projects I've built"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    tech={project.tech}
                    description={project.description}
                    gradient={project.gradient}
                    url={project.url}
                  />
                ))}
              </div>
            </section>

            {/* Education & Certs */}
            <section id="education" className="mb-10">
              <SectionHeading title="Education & Certifications" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-spotify-surface rounded-md p-4">
                  <h3 className="text-white font-bold text-base mb-3">Education</h3>
                  {education.map((edu) => (
                    <div key={edu.degree} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-spotify-elevated flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{edu.degree}</p>
                        <p className="text-spotify-subtext text-xs">{edu.school} · {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-spotify-surface rounded-md p-4">
                  <h3 className="text-white font-bold text-base mb-3">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((cert) => (
                      <a
                        key={cert.title}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-spotify-elevated flex items-center justify-center flex-shrink-0">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold group-hover:underline">{cert.title}</p>
                          <p className="text-spotify-subtext text-xs">{cert.issuer} · {cert.year}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-10">
              <SectionHeading title="Contact" subtitle="Let's connect" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <a
                  href="tel:+919409285672"
                  className="bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-spotify-elevated flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+91 94092 85672</p>
                    <p className="text-spotify-subtext text-xs">Phone</p>
                  </div>
                </a>
                <a
                  href="mailto:parimal81280@gmail.com"
                  className="bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-spotify-elevated flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold truncate">parimal81280@gmail.com</p>
                    <p className="text-spotify-subtext text-xs">Email</p>
                  </div>
                </a>
                <a
                  href="https://github.com/Parimal2607/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-spotify-elevated flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-spotify-green" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold truncate">Parimal2607</p>
                    <p className="text-spotify-subtext text-xs">GitHub</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/parimal-sharma-2521561b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-spotify-elevated flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-spotify-green" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold truncate">Parimal Sharma</p>
                    <p className="text-spotify-subtext text-xs">LinkedIn</p>
                  </div>
                </a>
              </div>
              {/* npm package card */}
              <div className="mt-3 sm:mt-4">
                <a
                  href="https://www.npmjs.com/package/@prmvx/frontend-forge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-spotify-elevated flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-spotify-green" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">@prmvx/frontend-forge</p>
                    <p className="text-spotify-subtext text-xs">npm package</p>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>

      <MobileNav />
      <PlayerBar />
    </div>
  );
}
