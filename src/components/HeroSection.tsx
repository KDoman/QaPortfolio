import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 pt-20 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="w-full flex justify-center items-center">
            <div className="w-fit relative isolate flex items-center justify-center mb-8">
              <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2  rounded-full animate-fade-in bg-accent/70">
                <span className="text-sm font-medium text-primary">{t("hero.status")}</span>
              </div>

              <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse-subtle-badge -z-10 pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse-subtle-badge -z-10 pointer-events-none" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse-subtle-badge -z-10 pointer-events-none" style={{ animationDelay: "2s" }} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/70 font-medium mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {t("hero.subtitle")}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 glow-accent">
              <a href="https://github.com/KDoman" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                {t("hero.github")}
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold px-8"
            >
              <a href="https://www.linkedin.com/in/kacper-domanskii/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                {t("hero.linkedin")}
              </a>
            </Button>

            {/* <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
              <a href="#" download>
                <Download className="mr-2 h-5 w-5" />
                {t("hero.cv")}
              </a>
            </Button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div onClick={scrollToAbout} className="hidden sm:flex justify-center items-center w-full absolute bottom-20 max-w-fit">
      <button  className=" text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce">
        <ArrowDown size={30} />
      </button>
      </div>
    </section>
  );
};

export default HeroSection;
