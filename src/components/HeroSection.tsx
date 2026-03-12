import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Instagram, Twitter, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Full Stack Developer", "React Specialist", "Node.js Engineer", "UI/UX Enthusiast"];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/md-mazid-hussain-maj1707", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/flying__heart_17/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/MdMazid1707", label: "Twitter" },
  { icon: Mail, href: "mailto:mdmazidkqr@gmail.com", label: "Email" },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center px-6 overflow-hidden">
      {/* Background radial gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,hsl(24_95%_53%_/_0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,hsl(24_95%_53%_/_0.04),transparent)]" />
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-50 dot-grid-bg" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-28 pb-12">
          {/* LEFT — Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Available badge */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold font-display tracking-widest mb-6 opacity-0 animate-fade-in-up [animation-delay:0.1s]"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Available for work
            </span>

            {/* Name */}
            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold font-display text-foreground leading-[1.1] mb-4 opacity-0 animate-fade-in-up [animation-delay:0.2s]"
            >
              Hi, I'm{" "}
              <span className="relative inline-block text-primary">
                Mazid
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/40" />
              </span>
            </h1>

            {/* Typewriter role */}
            <div
              className="flex items-center justify-center lg:justify-start gap-1 mb-6 min-h-[2rem] opacity-0 animate-fade-in-up [animation-delay:0.3s]"
            >
              <span className="text-xl md:text-2xl font-display font-semibold text-muted-foreground">
                {displayed}
              </span>
              <span className="inline-block w-0.5 h-6 bg-primary animate-pulse" />
            </div>

            {/* Bio */}
            <p
              className="text-base text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed mb-8 opacity-0 animate-fade-in-up [animation-delay:0.4s]"
            >
              I build scalable, performant web applications with clean code and thoughtful
              design. From idea to deployment — I've got it covered.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in-up [animation-delay:0.5s]"
            >
              <Button
                size="lg"
                className="rounded-full font-display font-semibold px-8 group"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full font-display border-border hover:border-primary hover:text-primary hover:bg-primary/10"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social icons */}
            <div
              className="flex gap-3 justify-center lg:justify-start opacity-0 animate-fade-in-up [animation-delay:0.6s]"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 hover:-translate-y-0.5"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Profile image */}
          <div
            className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in-right [animation-delay:0.3s]"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Outer rotating rings */}
              <div className="absolute -inset-5 rounded-full border-2 border-dashed border-primary/25 animate-rotate-slow" />
              <div
                className="absolute -inset-9 rounded-full border border-primary/10 animate-rotate-slow [animation-direction:reverse] [animation-duration:25s]"
              />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl scale-110 animate-pulse-glow" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent animate-float shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Mazid — Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    if (img.parentElement) {
                      img.parentElement.innerHTML =
                        '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;font-weight:800;color:hsl(24,95%,53%);font-family:Space Grotesk,sans-serif;letter-spacing:-2px;">Md</div>';
                    }
                  }}
                />
              </div>
              {/* Floating tech badges */}
              <span
                className="absolute -top-3 left-4 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float whitespace-nowrap"
              >
                ⚛️ React
              </span>
              <span
                className="hidden sm:block absolute top-1/4 -right-14 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float [animation-delay:0.8s] whitespace-nowrap"
              >
                🟢 Node.js
              </span>
              <span
                className="hidden sm:block absolute bottom-1/3 -left-16 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float [animation-delay:1.4s] whitespace-nowrap"
              >
                ⚙️ Express.js
              </span>
              <span
                className="absolute -bottom-3 right-4 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float [animation-delay:0.5s] whitespace-nowrap"
              >
                📊 MongoDB
              </span>
              <span
                className="absolute -bottom-3 right-4 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float [animation-delay:0.5s] whitespace-nowrap"
              >
                🎨 Tailwind
              </span>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pb-8 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <span className="text-xs font-display text-muted-foreground tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ArrowDown size={16} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
