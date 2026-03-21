import { Code2, Server, Database, Layers, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const highlights = [
  { icon: Code2, title: "Frontend", desc: "React, TypeScript, Tailwind CSS" },
  { icon: Server, title: "Backend", desc: "Node.js, Express, REST APIs" },
  { icon: Database, title: "Databases", desc: "PostgreSQL, MongoDB, MySQL" },
  { icon: Layers, title: "DevOps", desc: "Git, Docker, CI/CD Pipelines" },
];

const highlightDelayClasses = ["stagger-200", "stagger-300", "stagger-400", "stagger-500"];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div ref={ref} className="container mx-auto max-w-5xl">
        <div
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            About<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-10" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div
            className={cn(
              "space-y-5 transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate{" "}
              <span className="text-foreground font-medium">Full Stack Developer</span> with a
              love for building scalable web applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From pixel-perfect UIs to robust backend systems — I bring ideas to life through
              clean code, thoughtful architecture, and modern design principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-5 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={15} className="text-primary" />
                India
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={15} className="text-primary" />
                4+ years experience
              </div>
            </div>
          </div>

          {/* Highlight cards and icons */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={cn(
                  "p-5 rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 group cursor-default",
                  highlightDelayClasses[i],
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                <h.icon
                  className="text-primary mb-3 transition-transform duration-300 group-hover:scale-110"
                  size={22}
                />
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                  {h.title}
                </h3>
                <p className="text-xs text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
