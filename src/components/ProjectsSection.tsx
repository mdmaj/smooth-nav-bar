import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const projectDelayClasses = ["stagger-100", "stagger-200", "stagger-300", "stagger-400"];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive developer portfolio showcasing projects, skills, and professional experience with a bold design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A content management system with rich text editing, categories, comments, and SEO optimization for authors.",
    tech: ["React", "Express", "MySQL", "Redis"],
    live: "#",
    github: "#",
    featured: false,
  },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div ref={ref} className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            Projects<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-10" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={cn(
                "group relative rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 flex flex-col",
                projectDelayClasses[i],
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              {/* Number + featured badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold font-display text-border group-hover:text-primary/30 transition-colors duration-300 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold font-display rounded-full bg-primary/15 text-primary border border-primary/25">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-normal">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-3 border-t border-border/50">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-primary text-xs h-8 px-3"
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-primary text-xs h-8 px-3"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={13} />
                    GitHub
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
