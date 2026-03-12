const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "Socket.io"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Figma", "Linux", "CI/CD"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
          Skills<span className="text-primary">.</span>
        </h2>
        <div className="h-1 w-12 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="space-y-4">
              <h3 className="font-display font-semibold text-foreground text-lg">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-secondary text-secondary-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10 cursor-default"
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
