import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Wrench, Users, TrendingUp } from 'lucide-react';

const ApproachSection = () => {
  const { t } = useLanguage();

  const approaches = [
    {
      icon: Target,
      titleKey: 'approach.point1.title',
      descKey: 'approach.point1.desc',
    },
    {
      icon: Wrench,
      titleKey: 'approach.point2.title',
      descKey: 'approach.point2.desc',
    },
    {
      icon: Users,
      titleKey: 'approach.point3.title',
      descKey: 'approach.point3.desc',
    },
    {
      icon: TrendingUp,
      titleKey: 'approach.point4.title',
      descKey: 'approach.point4.desc',
    },
  ];

  return (
    <section id="approach" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {t('approach.title')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            {t('approach.intro')}
          </p>
        </div>

        {/* Approach Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="card-elevated p-6 sm:p-8 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <approach.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {t(approach.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(approach.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* E2E Flow Diagram */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-lg font-heading font-semibold text-center text-foreground mb-8">
            E2E Testing Flow
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Requirements', 'Test Design', 'Automation', 'Execution', 'Reporting'].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="px-6 py-3 bg-secondary rounded-lg border border-border text-sm font-medium text-foreground">
                  {step}
                </div>
                {index < 4 && (
                  <div className="hidden sm:block w-8 h-[2px] bg-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
