import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classSwitchLangaugeButton = (plOrEn: "pl" | "en") => {
    return !isScrolled
      ? language === plOrEn
        ? `bg-primary-foreground/20 text-secondary shadow-sm `
        : `text-secondary/70 hover:text-secondary`
      : language === plOrEn
      ? `bg-primary/10 text-primary shadow-sm `
      : `text-primary/70 hover:text-primary`;
  };
  const navItems = [
    { key: "about", href: "#about" },
    { key: "experience", href: "#experience" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "approach", href: "#approach" },
    { key: "work", href: "#my-work" },
    { key: "contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md  shadow-sm" : "bg-transparent"}`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Logo */}
          <a
            href="https://www.linkedin.com/in/kacper-domanskii/"
            target="_blank"
            className="font-heading font-bold text-xl text-foreground md:absolute md:top-2 lg:-top-1 lg:left-0 md:left-10 lg:relative"
          >
            <span className="text-accent mr-1">Kacper</span>
            <span className={`${!isScrolled ? "text-secondary/70" : "text-foreground/70 "}`}>Domański</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className={`${isScrolled ? "text-secondary-foreground/70 hover:text-primary" : "text-secondary/70 hover:text-secondary"} px-4 py-2 text-sm font-medium  transition-colors`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className={`flex items-center rounded-lg p-1 ${!isScrolled ? " bg-secondary/10" : "bg-primary/5"}`}>
              <button onClick={() => setLanguage("pl")} className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${classSwitchLangaugeButton("pl")}`}>
                PL
              </button>
              <button onClick={() => setLanguage("en")} className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${classSwitchLangaugeButton("en")}`}>
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors ${!isScrolled ? " bg-primary-foreground/20" : "bg-primary/5"}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden py-4 mb-6 border-t border-border animate-fade-in ${!isScrolled ? ' bg-primary' : "bg-foreground/20"}`}>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-3 text-left text-sm font-medium  hover:bg-secondary transition-colors hover:text-foreground ${!isScrolled ? "text-primary-foreground " : "text-secondary-foreground"}`}
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
