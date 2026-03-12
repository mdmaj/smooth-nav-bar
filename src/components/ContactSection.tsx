import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const contactItems = [
  { icon: Mail, label: "Email", value: "mdmazidkqr@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9693827728" },
  { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India" },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div ref={ref} className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            Contact<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-10" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always
              open to discussing new opportunities and ideas.
            </p>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-card border border-border shrink-0 transition-colors duration-300 group-hover:border-primary/40">
                    <item.icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={cn(
              "space-y-5 transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground text-sm">
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="What's this about?"
                required
                className="bg-card border-border focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground text-sm">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-card border-border focus:border-primary resize-none transition-colors"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full rounded-full font-display font-semibold group"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send
                    size={15}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
