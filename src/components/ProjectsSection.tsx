import { useLanguage } from "@/contexts/LanguageContext";
import { Github, ExternalLink, CheckCircle2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const codeSnippet = `// Page Object Model Example
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('password');
    this.submitButton = page.getByRole('button', { name: 'Sign in' });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}`;

  const features = ["projects.project1.feature1", "projects.project1.feature2", "projects.project1.feature3", "projects.project1.feature4"];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">{t("projects.title")}</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Project Card */}
        <div className="max-w-5xl mx-auto">
          <div className="card-elevated overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="px-3 py-1 bg-secondary text-sm font-medium text-muted-foreground rounded-full">{t("projects.project1.scope")}</span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{t("projects.project1.title")}</h3>

                <p className="text-muted-foreground mb-6">{t("projects.project1.desc")}</p>

                <ul className="space-y-3 mb-8">
                  {features.map((featureKey, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t("projects.view")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Code Preview */}
              <div className="bg-primary p-6 sm:p-8 lg:border-l border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-xs text-primary-foreground/50 font-mono">login.page.ts</span>
                </div>
                <pre className="text-xs sm:text-sm text-primary-foreground/80 font-mono overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
