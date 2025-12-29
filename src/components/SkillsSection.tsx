import { useLanguage } from "@/contexts/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: "skills.automation",
      skills: ["skills.automation.playwright", "skills.automation.jsTs", "skills.automation.pom", "skills.automation.structure", "skills.automation.cicd"],
      color: "accent",
    },
    {
      titleKey: "skills.manual",
      skills: ["skills.manual.testCases", "skills.manual.exploratory", "skills.manual.defects", "skills.manual.mobile", "skills.manual.regression"],
      color: "primary",
    },
    {
      titleKey: "skills.development",
      skills: ["skills.dev.react", "skills.dev.node", "skills.dev.mongo", "skills.dev.express", "skills.dev.rest"],
      color: "muted-foreground",
    },
    {
      titleKey: "skills.tools",
      skills: ["skills.tools.git", "skills.tools.postman", "skills.tools.jira", "skills.tools.vscode", "skills.tools.devtools"],
      color: "muted-foreground",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">{t("skills.title")}</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elevated p-6 group">
              <h3 className={`font-heading font-semibold text-lg mb-4 ${category.color === "accent" ? "text-accent" : "text-foreground"}`}>{t(category.titleKey)}</h3>

              <ul className="space-y-3">
                {category.skills.map((skillKey, skillIndex) => (
                  <li key={skillIndex} className="flex items-center  gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-full ${category.color === "accent" ? "bg-accent" : "bg-muted-foreground"}`} />
                    {t(skillKey)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
