import { Code2, Server, Database, Layers } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Frontend", desc: "React, TypeScript, Tailwind CSS" },
  { icon: Server, title: "Backend", desc: "Node.js, Express, REST APIs" },
  { icon: Database, title: "Databases", desc: "PostgreSQL, MongoDB, MySQL" },
  { icon: Layers, title: "DevOps", desc: "Git, Docker, CI/CD Pipelines" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
          About<span className="text-primary">.</span>
        </h2>
        <div className="h-1 w-12 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with a love for building scalable web applications that solve real-world problems. My journey in software development has been driven by curiosity and a commitment to continuous learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experience across the entire development stack — from pixel-perfect frontends to robust backend systems — I bring ideas to life through clean code, thoughtful architecture, and modern design principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="p-5 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <h.icon className="text-primary mb-3 transition-transform duration-300 group-hover:scale-110" size={24} />
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{h.title}</h3>
                <p className="text-xs text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
