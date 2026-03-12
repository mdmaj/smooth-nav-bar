import { ArrowDown, Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/mazid", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/mazid", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/mazid", label: "Twitter" },
  { icon: Mail, href: "mailto:mazid@example.com", label: "Email" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-3xl relative z-10">
        {/* Greeting */}
        <p className="text-primary font-display font-semibold tracking-widest mb-4 text-sm uppercase animate-fade-in">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-foreground mb-6 leading-tight">
          Mazid<span className="text-primary">.</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-display font-medium mb-4">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8">
          Crafting modern, scalable web applications with clean architecture and bold design. Passionate about solving real-world problems through technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            variant="default"
            size="lg"
            className="rounded-full font-display font-semibold px-8"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            variant="glass"
            size="lg"
            className="font-display"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" size={20} />
        </div>
      </div>
    </section>
  );
}
