import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExtrasSection from "@/components/ExtrasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "@/lib/react-helmet-async";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // small timeout to allow layout/animations to settle
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background font-body">
      <Helmet>
        <title>Mazid — Full Stack Developer</title>
        <meta name="description" content="Portfolio of Mazid — Full Stack Developer. Explore projects, skills, and contact information." />
        <meta property="og:title" content="Mazid — Full Stack Developer" />
        <meta property="og:description" content="Portfolio and projects by Mazid. View projects, skills, and contact info." />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection limit={4} />
      <ExperienceSection />
      <ExtrasSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
