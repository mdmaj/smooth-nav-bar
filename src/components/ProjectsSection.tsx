import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive developer portfolio showcasing projects, skills, and professional experience with a bold design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    live: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    description: "A content management system with rich text editing, categories, comments, and SEO optimization for authors.",
    tech: ["React", "Express", "MySQL", "Redis"],
    live: "#",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
          Projects<span className="text-primary">.</span>
        </h2>
        <div className="h-1 w-12 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Title */}
              <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-normal">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
