import { useLanguage } from "@/contexts/LanguageContext";
import { ClipboardList, Search, PenTool, PlayCircle, Bug, Smartphone, Accessibility, Wrench, Landmark, ChartBar   } from "lucide-react";

const MyWorkSection = () => {
  const { t } = useLanguage();

  const workflow = [
    {
      icon: ClipboardList,
      titleKey: "mywork.step1.title",
      descKey: "mywork.step1.desc",
    },
    {
      icon: Search,
      titleKey: "mywork.step2.title",
      descKey: "mywork.step2.desc",
    },
    {
      icon: PenTool,
      titleKey: "mywork.step3.title",
      descKey: "mywork.step3.desc",
    },
    {
      icon: PlayCircle,
      titleKey: "mywork.step4.title",
      descKey: "mywork.step4.desc",
    },
    {
      icon: Bug,
      titleKey: "mywork.step5.title",
      descKey: "mywork.step5.desc",
    },
  ];

  const tools = [
    {
      icon: Smartphone,
      titleKey: "mywork.tools.mobile.title",
      descKey: "mywork.tools.mobile.desc",
    },
    {
      icon: Accessibility,
      titleKey: "mywork.tools.accessibility.title",
      descKey: "mywork.tools.accessibility.desc",
    },
    {
      icon: Wrench,
      titleKey: "mywork.tools.stack.title",
      descKey: "mywork.tools.stack.desc",
    },
    {
      icon: Landmark ,
      titleKey: "mywork.tools.enterprise.title",
      descKey: "mywork.tools.enterprise.desc",
    },
    {
      icon: ChartBar ,
      titleKey: "mywork.tools.monitoring.title",
      descKey: "mywork.tools.monitoring.desc",
    },
  ];

  return (
    <section id="my-work" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">{t("mywork.title")}</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">{t("mywork.intro")}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr,2px,1fr] gap-12 lg:gap-16 items-start">
          {/* Workflow */}
          <div className="space-y-6">
            {workflow.map((step, index) => (
              <div key={index} className="card-elevated p-6 flex gap-4 h-40 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(step.descKey)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden border-2 border-accent"></div>
          <div className="lg:block hidden border-2 border-accent h-full"></div>

          {/* Tools */}
          <div className="space-y-6">
            {tools.map((tool, index) => (
              <div key={index} className="card-elevated p-6 flex gap-4 h-40 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <tool.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t(tool.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(tool.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
