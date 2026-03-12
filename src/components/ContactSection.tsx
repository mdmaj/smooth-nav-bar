import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
          Contact<span className="text-primary">.</span>
        </h2>
        <div className="h-1 w-12 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-full bg-card border border-border">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground font-medium">mazid@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-full bg-card border border-border">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-full bg-card border border-border">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground font-medium">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input id="name" placeholder="Your name" required className="bg-card border-border focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required className="bg-card border-border focus:border-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground">Subject</Label>
              <Input id="subject" placeholder="What's this about?" required className="bg-card border-border focus:border-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <Textarea id="message" placeholder="Tell me about your project..." rows={5} required className="bg-card border-border focus:border-primary resize-none" />
            </div>
            <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full font-display font-semibold">
              {loading ? "Sending..." : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
