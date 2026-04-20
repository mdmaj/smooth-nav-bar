import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background font-body">
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
