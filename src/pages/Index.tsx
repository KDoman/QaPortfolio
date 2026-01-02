import { Helmet } from "react-helmet-async";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
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
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>Automation QA Engineer Portfolio | Playwright & Banking Experience</title>
        <meta
          name="description"
          content="Quality-focused QA Engineer with experience in mobile banking applications, transitioning into test automation and building reliable E2E solutions with Playwright."
        />
        <meta name="keywords" content="QA Engineer, Automation Testing, Playwright, E2E Testing, Banking, Mobile Testing, Test Automation" />
        <meta property="og:title" content="Automation QA Engineer Portfolio" />
        <meta property="og:description" content="Quality-focused QA Engineer with experience in mobile banking applications and Playwright automation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

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
