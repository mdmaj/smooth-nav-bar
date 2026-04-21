import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { Helmet } from "@/lib/react-helmet-async";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Helmet>
        <title>Projects — Mazid</title>
        <link rel="canonical" href="https://www.mdmaj.in/projects" />
        <meta name="description" content="A curated list of projects by Mazid — Full Stack Developer. Includes live demos and GitHub links." />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Projects — Mazid" />
        <meta property="og:description" content="Project portfolio: live demos and source code." />
        <meta property="og:url" content="https://www.mdmaj.in/projects" />
        <meta property="og:image" content="https://www.mdmaj.in/og-image.png" />
      </Helmet>
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
