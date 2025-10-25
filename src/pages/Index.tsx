import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import StrengthsSection from "@/components/StrengthsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingHireButton from "@/components/FloatingHireButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <StrengthsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingHireButton />
    </div>
  );
};

export default Index;
