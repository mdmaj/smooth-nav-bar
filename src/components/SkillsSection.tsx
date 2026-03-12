import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const statsDelayClasses = ["stagger-0", "stagger-80", "stagger-160", "stagger-240"];

const categoryDelayClasses = ["stagger-350", "stagger-450", "stagger-550", "stagger-650"];

const skillDelayClassMap = {
  Frontend: [
    "stagger-450",
    "stagger-485",
    "stagger-520",
    "stagger-555",
    "stagger-590",
    "stagger-625",
    "stagger-660",
    "stagger-695",
  ],
  Backend: ["stagger-550", "stagger-585", "stagger-620", "stagger-655", "stagger-690", "stagger-725"],
  Databases: ["stagger-650", "stagger-685", "stagger-720", "stagger-755", "stagger-790"],
  "Tools & DevOps": [
    "stagger-750",
    "stagger-785",
    "stagger-820",
    "stagger-855",
    "stagger-890",
    "stagger-925",
    "stagger-960",
    "stagger-995",
  ],
} as const;

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "5+", label: "Happy Clients" },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "Socket.io"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Figma", "Linux", "CI/CD"],
  },
];

export default function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-card">
      <div ref={ref} className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            Skills<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-10" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "p-5 rounded-xl border border-border bg-background text-center transition-all duration-500 hover:border-primary/40 hover:-translate-y-0.5",
                statsDelayClasses[i],
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-2xl md:text-3xl font-bold font-display text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 gap-10">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className={cn(
                "space-y-4 transition-all duration-500",
                categoryDelayClasses[ci],
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h3 className="font-display font-semibold text-foreground text-base">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-secondary text-secondary-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10 cursor-default",
                      skillDelayClassMap[cat.title][si],
                      inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
