import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 — Present",
    description: "Building and maintaining scalable web applications using React, Node.js, and PostgreSQL. Leading frontend architecture decisions and mentoring junior developers.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2022 — 2023",
    description: "Developed responsive web interfaces for client projects. Collaborated with designers and backend teams to deliver pixel-perfect, performant applications.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Web Development Intern",
    company: "StartUp Hub",
    period: "2021 — 2022",
    description: "Contributed to building MVP features for early-stage products. Gained hands-on experience with full-stack development workflows and agile methodologies.",
    tech: ["JavaScript", "Express", "MongoDB", "Git"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
          Experience<span className="text-primary">.</span>
        </h2>
        <div className="h-1 w-12 bg-primary rounded mb-10" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h3 className="font-display font-bold text-foreground text-lg flex items-center gap-2">
                      <Briefcase size={16} className="text-primary" />
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium text-primary font-display">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-full border border-border bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
