import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kacper-domanskii/',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:itdoman1999@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/KDoman',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid max-w-5xl mx-auto">        

          {/* Social Links & Info */}
              <div className="lg:flex">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/50 hover:bg-secondary/50 transition-all group lg:flex-1 lg:mx-4 my-4 lg:my-0"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <link.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground">{link.label}</span>
                  </a>
                ))}
              </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
