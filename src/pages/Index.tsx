import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <p className="text-primary font-display font-semibold tracking-wide mb-4 text-sm uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-6 leading-tight">
            Mazid<span className="text-primary">.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A passionate developer crafting modern, responsive web experiences with clean code and bold design.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-foreground mb-2">
            About<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-8" />
          <p className="text-muted-foreground leading-relaxed">
            I design and build digital experiences that are both beautiful and functional. With a strong foundation in modern web technologies, I bring ideas to life through clean architecture and thoughtful interfaces.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-foreground mb-2">
            Projects<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-8" />
          <p className="text-muted-foreground leading-relaxed">
            Coming soon — a showcase of my best work.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-foreground mb-2">
            Experience<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-8" />
          <p className="text-muted-foreground leading-relaxed">
            My professional journey and key milestones.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-foreground mb-2">
            Contact<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded mb-8" />
          <p className="text-muted-foreground leading-relaxed">
            Let's connect — reach out and let's build something great together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
