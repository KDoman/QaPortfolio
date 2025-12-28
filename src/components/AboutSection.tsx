import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Building2, Zap } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      titleKey: "about.highlight1.title",
      descKey: "about.highlight1.desc",
    },
    {
      icon: Building2,
      titleKey: "about.highlight2.title",
      descKey: "about.highlight2.desc",
    },
    {
      icon: Zap,
      titleKey: "about.highlight3.title",
      descKey: "about.highlight3.desc",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">{t("about.title")}</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">{t("about.p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.p3")}</p>
          </div>

          {/* Highlights */}
          <div className="space-y-7">
            {highlights.map((highlight, index) => (
              <div key={index} className="card-elevated p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <highlight.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t(highlight.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(highlight.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
