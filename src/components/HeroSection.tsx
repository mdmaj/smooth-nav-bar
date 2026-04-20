import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Instagram, Twitter, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Full Stack Developer","MERN Stack Developer","Backend Developer", "React Specialist", "Node.js Engineer"];

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
                onClick={() => window.open("/FullStack.pdf", "_blank")}
              >
                <Download size={16} className="mr-2" />
                Download Resume
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
            className="order-1 lg:order-2 hidden lg:flex justify-center opacity-0 animate-fade-in-right [animation-delay:0.3s]"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating rings (made subtler and larger) */}
              <div className="absolute -inset-7 rounded-full border-2 border-dashed border-primary/20 animate-rotate-slow" />
              <div
                className="absolute -inset-12 rounded-full border border-primary/8 animate-rotate-slow [animation-direction:reverse] [animation-duration:28s]"
              />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-105 animate-pulse-glow" />
              {/* Photo (add subtle scale on hover and soft inner shadow) */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/3 to-transparent transform transition-transform duration-500 hover:scale-105 shadow-2xl">
                <img
                  src="/assets/hero8.jpeg"
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
                {/* soft inner vignette */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
              </div>
              {/* Floating tech badges (tweaked positions + smaller on small screens) */}
              <span
                className="absolute -top-2 left-3 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float whitespace-nowrap text-[11px]"
              >
                ⚛️ React
              </span>
              <span
                className="hidden sm:block absolute top-20 -right-10 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float [animation-delay:0.8s] whitespace-nowrap text-[11px]"
              >
                📊 MongoDB
              </span>
              <span
                className="hidden sm:block absolute bottom-28 -left-12 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float [animation-delay:1.4s] whitespace-nowrap text-[11px]"
              >
                ⚙️ Express.js
              </span>
              <span
                className="absolute -bottom-2 right-6 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold font-display shadow-lg animate-float [animation-delay:0.5s] whitespace-nowrap text-[11px]"
              >
                🟢 Node.js
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
