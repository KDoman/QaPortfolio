import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Calendar, CheckCircle2 } from 'lucide-react';

const ExperienceSection = () => {
  const { t } = useLanguage();

  const points = [
    'experience.point1',
    'experience.point2',
    'experience.point3',
    'experience.point4',
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Experience Card */}
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8 sm:p-10 relative">
            {/* Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-xl" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
                  {t('experience.role')}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {t('experience.company')}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {t('experience.period')}
                  </span>
                </div>
              </div>
              
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Current Role
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8">
              {t('experience.desc')}
            </p>

            {/* Points */}
            <ul className="space-y-4">
              {points.map((pointKey, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{t(pointKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
