import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span className="font-heading font-bold">
              <a href="https://www.linkedin.com/in/kacper-domanskii/" target="_blank">
                <span className="text-accent">Kacper</span>Domański
              </a>
            </span>
          </div>

          <div className="text-sm text-primary-foreground/60 text-center">
            © {currentYear} {t("footer.rights")}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
