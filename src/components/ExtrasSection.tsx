import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profile from "@/data/profile.json";

export default function ExtrasSection() {
  const { leetcode,  education, achievements, certifications } = profile as any;

  return (
    <section id="more" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 opacity-0 animate-fade-in-up [animation-delay:0.05s]">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            Profile & Academics<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: LeetCode + Education */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card opacity-0 animate-fade-in-up [animation-delay:0.12s] hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">LeetCode</h3>
                <Badge variant="secondary" className="text-xs">Profile</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Track your problem solving and algorithm progress. Link to your public profile below.
              </p>
              <Button asChild size="sm" variant="ghost">
                <a href={leetcode} target="_blank" rel="noopener noreferrer">
                  View LeetCode <ExternalLink size={14} />
                </a>
              </Button>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card opacity-0 animate-fade-in-up [animation-delay:0.18s] hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                {education.map((e: any, idx: number) => (
                  <div key={e.school} className={`opacity-0 animate-fade-in-left [animation-delay:${0.2 + idx * 0.04}s]`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-foreground">{e.degree}</div>
                        <div className="text-xs">{e.school} • {e.year}</div>
                      </div>
                    </div>
                    <div className="mt-2">{e.details}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Achievements + Certifications */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card opacity-0 animate-fade-in-up [animation-delay:0.22s] hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">Achievements</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                {achievements.map((a: string, idx: number) => (
                  <li key={a} className={`opacity-0 animate-fade-in-left [animation-delay:${0.25 + idx * 0.03}s]`}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card opacity-0 animate-fade-in-up [animation-delay:0.28s] hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">Certifications & Courses</h3>
              <div className="flex flex-col gap-3">
                {certifications.map((c: any, idx: number) => (
                  <div key={c.title} className={`flex items-center justify-between opacity-0 animate-fade-in-left [animation-delay:${0.3 + idx * 0.03}s]`}>
                    <div className="text-sm text-foreground">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.org}</div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
