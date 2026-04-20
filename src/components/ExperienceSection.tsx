import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const experienceDelayClasses = ["stagger-200", "stagger-350", "stagger-500"];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Azzunique Software Pvt Ltd",
    period: "Present",
    description:
      "Building and maintaining scalable web applications using React, Node.js, and Express. Collaborating with cross-functional teams to design and implement new features, optimize performance, and ensure code quality. Leading the development of a key project that improved user engagement by 30%.",
    tech: ["React", "Node.js", "Express","Prisma" ],
  },
  {
    role: "Training Intern",
    company: "Learc & Build",
    period: "June 2025 — Aug 2025",
    description:
      "Completed an intensive 3-month training program focused on full-stack web development. Gained hands-on experience with React, Node.js, and RESTful APIs through real-world projects and mentorship from industry professionals.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  
];

export default function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-16 md:py-32 px-2 sm:px-6 bg-card">
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
          <div className="absolute left-2 sm:left-4 md:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={cn(
                  "relative pl-8 sm:pl-12 md:pl-16 transition-all duration-600",
                  experienceDelayClasses[i],
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-[5px] sm:left-[13px] md:left-[17px] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-card" />

                <div className="rounded-xl border border-border bg-background p-4 sm:p-6 w-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
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
