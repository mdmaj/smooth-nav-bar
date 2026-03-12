import { Linkedin, Instagram, Twitter, Mail, Heart } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/mazid", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/mazid", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/mazid", label: "Twitter" },
  { icon: Mail, href: "mailto:mazid@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold font-display text-foreground tracking-tight">
            Mazid<span className="text-primary">.</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Mazid. Built with <Heart size={12} className="text-primary" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
}
