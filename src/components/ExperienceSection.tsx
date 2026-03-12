import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const experienceDelayClasses = ["stagger-200", "stagger-350", "stagger-500"];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 — Present",
    description:
      "Building and maintaining scalable web applications using React, Node.js, and PostgreSQL. Leading frontend architecture decisions and mentoring junior developers.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2022 — 2023",
    description:
      "Developed responsive web interfaces for client projects. Collaborated with designers and backend teams to deliver pixel-perfect, performant applications.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Web Development Intern",
    company: "StartUp Hub",
    period: "2021 — 2022",
    description:
      "Contributed to building MVP features for early-stage products. Gained hands-on experience with full-stack development workflows and agile methodologies.",
    tech: ["JavaScript", "Express", "MongoDB", "Git"],
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-card">
      <div ref={ref} className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            Experience<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-10" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={cn(
                  "relative pl-12 md:pl-16 transition-all duration-600",
                  experienceDelayClasses[i],
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] md:left-[17px] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-card" />

                <div className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-foreground text-base flex items-center gap-2">
                        <Briefcase size={14} className="text-primary shrink-0" />
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground mt-0.5 ml-5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-primary font-display bg-primary/10 border border-primary/20 px-3 py-1 rounded-full whitespace-nowrap h-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-full border border-border bg-secondary text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
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
