import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MyWorkSection from "@/components/MyWorkSection";

const PortfolioContent = () => {

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ApproachSection />
          <MyWorkSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
};

export default Index;
