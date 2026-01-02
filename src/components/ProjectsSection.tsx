import { useLanguage } from "@/contexts/LanguageContext";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatedDots } from "./ui/AnimatedDots";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const codeFiles = {
    "login.spec.ts": `import { test } from "../../setup/baseTest";
import { loginPageData } from "../../utils/data";

test("Test Case 2: Login User with correct email and password", async ({ navBar, loginPage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.correctLogin, loginPageData.correctPassword);
  await loginPage.expectLoginSuccess();
});

test("Test Case 3: Login User with incorrect email and password", async ({ navBar, loginPage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.wrongLogin, loginPageData.wrongPassword);
  await loginPage.expectLoginFail();
});

test("Test Case 4: Logout User", async ({ navBar, loginPage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.correctLogin, loginPageData.correctPassword);
  await navBar.expectedLoggedIn();
  await navBar.clickOnTab(" Logout");
  await navBar.expectedLoggedOut();
});`,
    "login.page.ts": `import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  private async fillInputs(email: string, password: string) {
    await this.page.locator('[data-qa="login-email"]').pressSequentially(email, { delay: 100 });
    await this.page.locator('[data-qa="login-password"]').pressSequentially(password, { delay: 100 });
  }

  private async sendForm() {
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  async expectLoginSuccess() {
    await expect(this.page.getByRole("link", { name: " Delete Account" })).toBeVisible();
  }

  async expectLoginFail() {
    await expect(this.page.getByText("Your email or password is incorrect!")).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.fillInputs(email, password);
    await this.sendForm();
  }

  async expectAccountToBeDeleted() {
    await expect(this.page.getByRole("heading", { name: "Account Deleted!" })).toBeVisible();
  }
}`,
    "baseTest.ts": `export const test = base.extend<MyPages>({
  page: async ({ page }, use) => {
    await page.goto("https://automationexercise.com/");
    const consent = page.getByRole("button", { name: "Consent" });
    if (await consent.isVisible()) {
      await consent.click();
    }
    await use(page);
  },
  navBar: async ({ page }, use) => {
    await use(new NavBar(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  baseAssertions: async ({ page }, use) => {
    await use(new BaseAssertions(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  testCasesPage: async ({ page }, use) => {
    await use(new TestCasesPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  modalElement: async ({ page }, use) => {
    await use(new ModalElement(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
});`,
  };

  const [activeFile, setActiveFile] = useState<keyof typeof codeFiles>("login.spec.ts");

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
            <div className="grid lg:grid-cols-2 lg:grid-rows-[550px]">
              {/* Content */}
              <div className="p-8 sm:p-10 w-full">
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
                  <a href="https://github.com/KDoman/Automation-Exercise---QA-Automation-Practice" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t("projects.view")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Code Preview */}
              <div className="bg-primary p-6 sm:p-8 lg:border-l border-border overflow-y-scroll overflow-y-hidden">
                {/* Tabs */}
                <div className="md:flex items-center gap-2 mb-4 border-b border-primary-foreground/10 max-w-fit">
                  {Object.keys(codeFiles).map((file) => (
                    <button
                      key={file}
                      onClick={() => setActiveFile(file as keyof typeof codeFiles)}
                      className={`px-3 py-1.5 text-xs font-mono transition-colors
                        ${activeFile === file ? "text-white border-b-2 border-accent" : "text-primary-foreground/50 hover:text-white"}`}
                    >
                      {file}
                    </button>
                  ))}
                </div>

                {/* Code */}
                <pre className="text-primary-foreground/80 font-mono text-wrap">
                  <code className="text-xs">{codeFiles[activeFile]}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <span className="inline-block bg-accent/20 text-accent font-semibold px-4 py-2 rounded-full shadow-md min-w-fit">
              {t("projects.more")}
              <AnimatedDots/>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
