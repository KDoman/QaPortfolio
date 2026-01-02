import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.approach": "Approach",
    "nav.work": "Work",
    "nav.contact": "Contact",

    // Hero
    "hero.status": "Open to collaboration",
    "hero.title": "Manual QA & Aspiring Automation Engineer",
    "hero.subtitle": "Manual Testing Background | Playwright | Mobile & Web Testing",
    "hero.description": "Quality-focused QA Engineer with experience in mobile banking applications, transitioning into test automation and building E2E solutions.",
    "hero.github": "GitHub Projects",
    "hero.linkedin": "LinkedIn",
    "hero.cv": "Download CV",

    // About
    "about.title": "About Me",
    "about.p1": "I combine hands-on QA experience with a software development background, which allows me to design clear, stable, and easy-to-maintain automated tests.",
    "about.p2": "My career started with solid programming foundations (JavaScript, React) and later developed into Full Stack Development in the MERN stack. This gives me a deep understanding of how applications work internally and which areas are most prone to errors.",
    "about.p3": "Currently, I work as a manual mobile application tester in the banking sector, gaining experience in a regulated, high-quality environment. At the same time, I am developing my skills in E2E test automation using Playwright and plan to extend mobile test automation for iOS and Android using Appium, aiming to combine manual and automated QA knowledge in my daily work.",
    "about.highlight1.title": "Developer Background",
    "about.highlight1.desc": "Practical experience with the MERN stack and application architecture",
    "about.highlight2.title": "Banking Environment",
    "about.highlight2.desc": "Experience working with systems that have high quality and compliance requirements",
    "about.highlight3.title": "Test Automation",
    "about.highlight3.desc": "Designing and developing E2E tests with Playwright and automated mobile tests with Appium",


    // Experience
    "experience.title": "Professional Experience",
    "experience.status": "Current role",
    "experience.role": "Mobile Application Tester",
    "experience.company": "Bank Millennium",
    "experience.period": "July 2025 - current",
    "experience.desc": "Testing business-critical mobile banking applications in a regulated enterprise environment, with a strong focus on quality, stability, accessibility and user safety.",
    "experience.point1": "Manual testing of mobile applications (iOS / Android)",
    "experience.point2": "Testing critical user flows and business processes",
    "experience.point3": "Working in a regulated enterprise environment with defined quality standards",
    "experience.point4": "Close collaboration with developers, business analysts, and QA teams",
    // Experience 2
    "experience2.role": "Customer Configuration Specialist",
    "experience2.company": "Intiaro",
    "experience2.period": "Mar 2022 – Jul 2025",
    "experience2.desc":
      "Configuration and validation of customer-specific products according to business requirements. Design and development of an internal SPA application automating configuration and testing processes, resulting in a reduction of manual errors and a significant improvement in operational efficiency.",
    "experience2.point1": "Configuration and validation of products tailored to customer requirements",
    "experience2.point2": "Testing product functionality and correctness",
    "experience2.point3": "Design and development of an internal SPA application automating configuration processes",
    "experience2.point4": "Reduction of manual errors and optimization of process execution time",

    // Skills
    "skills.title": "Technical Skills",
    "skills.automation": "Automation QA",
    "skills.manual": "Manual QA",
    "skills.development": "Development",
    "skills.tools": "Tools",
    "skills.automation.playwright": "Playwright",
    "skills.automation.jsTs": "JavaScript & TypeScript",
    "skills.automation.pom": "Page Object Model",
    "skills.automation.structure": "Business-readable tests",
    "skills.automation.cicd": "CI/CD integration",
    "skills.manual.testCases": "Test case design",
    "skills.manual.exploratory": "Exploratory testing",
    "skills.manual.defects": "Defect reporting",
    "skills.manual.mobile": "Mobile application testing",
    "skills.manual.regression": "Regression testing",
    "skills.dev.react": "React",
    "skills.dev.node": "Node.js",
    "skills.dev.mongo": "MongoDB",
    "skills.dev.express": "Express.js",
    "skills.dev.rest": "REST API",
    "skills.tools.git": "Git / GitHub",
    "skills.tools.postman": "Postman",
    "skills.tools.jira": "Jira",
    "skills.tools.vscode": "VS Code",
    "skills.tools.devtools": "Chrome DevTools",

    // Projects
    "projects.title": "Automation Projects",
    "projects.view": "View on GitHub",
    "projects.project1.title": "E2E Automation Framework with Playwright",
    "projects.project1.desc":
      "A scalable end-to-end test automation framework built with Playwright, based on Page Object Model and custom fixtures. Tests are written in a business-readable format, focusing on real user flows and long-term maintainability.",
    "projects.project1.scope": "E2E / UI Testing",
    "projects.project1.feature3": "Page Object Model with encapsulated actions and assertions",
    "projects.project1.feature2": "Business-readable test scenarios",
    "projects.project1.feature4": "Separation of pages, components, test data, and assertions",
    "projects.project1.feature1": "Fixture-based architecture",
    "projects.more":"More coming soon",

    // Approach
    "approach.title": "Testing Approach",
    "approach.intro": "Automation is a tool to support product quality, not a goal on its own. I focus on building tests that provide real value to the business.",
    "approach.point1.title": "Risk-Based Testing",
    "approach.point1.desc": "Prioritizing tests based on business impact and failure probability",
    "approach.point2.title": "Maintainable Tests",
    "approach.point2.desc": "Writing clean, business-readable test code that teams can easily understand and extend",
    "approach.point3.title": "QA-Dev Collaboration",
    "approach.point3.desc": "Bridging the gap between development and quality assurance",
    "approach.point4.title": "Continuous Improvement",
    "approach.point4.desc": "Monitoring test results and improving automated tests based on quality metrics and project feedback",
    "approach.flow.title": "My Testing Flow",
    "approach.flow1": "Requirements Analysis",
    "approach.flow2": "Process Understanding",
    "approach.flow3": "Test Design",
    "approach.flow4": "Test Execution",
    "approach.flow5": "Defect Reporting & Feedback",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Interested in working together? Let's connect.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.messagePlaceholder": "Your message...",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with React & Playwright mindset",

    // How do i work
    "mywork.title": "How I Work on a Daily Basis",
    "mywork.intro": "My daily work focuses on understanding requirements, estimating testing effort, and ensuring quality through structured testing and close collaboration.",

    "mywork.step1.title": "Requirements Analysis & Estimation",
    "mywork.step1.desc": "Analyzing requirements together with the team, understanding business goals, identifying risks, and estimating testing effort.",

    "mywork.step2.title": "Process Understanding & Exploratory Testing",
    "mywork.step2.desc": "Exploring the application to understand business workflows, system behavior, and potential risk areas.",

    "mywork.step3.title": "Test Design",
    "mywork.step3.desc": "Designing clear and structured test cases based on requirements and exploratory findings, using Jira Xray.",

    "mywork.step4.title": "Test Execution",
    "mywork.step4.desc": "Executing test cases on mobile applications (iOS / Android) and validating results against expected behavior.",

    "mywork.step5.title": "Defect Reporting & Collaboration",
    "mywork.step5.desc": "Reporting defects, analyzing issues, and collaborating closely with QA, Developers, Analysts, and Product Owners.",

    "mywork.tools.mobile.title": "Mobile Testing Environment",
    "mywork.tools.mobile.desc": "Testing mobile banking applications on iOS and Android platforms.",

    "mywork.tools.accessibility.title": "Accessibility Testing",
    "mywork.tools.accessibility.desc": "Using VoiceOver and TalkBack to validate accessibility and user experience.",

    "mywork.tools.stack.title": "Tools & Technology Stack",
    "mywork.tools.stack.desc": "Jira, Xray, Confluence, Kibana, SQL, Postman, Agile / Scrum.",

    "mywork.tools.monitoring.title": "Logs Analysis & Debugging",
    "mywork.tools.monitoring.desc": "Analyzing application logs in Kibana to diagnose issues and verify system behavior.",

    "mywork.tools.enterprise.title": "Enterprise Environment",
    "mywork.tools.enterprise.desc": "Working in a regulated banking environment with strong focus on quality, security, and compliance.",
  },
  pl: {
    // Navigation
    "nav.about": "O mnie",
    "nav.experience": "Doświadczenie",
    "nav.skills": "Umiejętności",
    "nav.projects": "Projekty",
    "nav.approach": "Podejście",
    "nav.work": "Praca",
    "nav.contact": "Kontakt",

    // Hero
    "hero.status": "Otwarty na współpracę",
    "hero.title": "Tester Manualny & Aspirujący Automatyk",
    "hero.subtitle": "Doświadczenie w Testowaniu Manualnym | Playwright | Aplikacje mobilne i webowe",
    "hero.description": "Inżynier QA zorientowany na jakość z doświadczeniem w mobilnych aplikacjach bankowych, przechodzący do automatyzacji testów i budujący rozwiązania E2E.",
    "hero.github": "Projekty GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.cv": "Pobierz CV",

    // About
    
  "about.title": "O Mnie",
  "about.p1": "Łączę praktyczne doświadczenie QA z wiedzą programistyczną, co pozwala mi projektować czytelne, stabilne i łatwe w utrzymaniu testy automatyczne.",
  "about.p2": "Moja ścieżka zawodowa rozpoczęła się od solidnych podstaw w programowaniu (JavaScript, React), a następnie rozwinęła się w kierunku Full Stack Developmentu w stosie MERN. Dzięki temu dobrze rozumiem, jak działa aplikacja „od środka” i które obszary są najbardziej podatne na błędy.",
  "about.p3": "Obecnie pracuję jako tester manualny aplikacji mobilnych w sektorze bankowym, zdobywając doświadczenie w regulowanym środowisku o wysokich wymaganiach jakościowych. Równolegle rozwijam swoje umiejętności w zakresie automatyzacji testów E2E w Playwright oraz planuję poszerzyć automatyzację testów mobilnych na platformy iOS i Android z użyciem Appium, dążąc do połączenia wiedzy manualnej i automatycznej w codziennej pracy QA.",
  "about.highlight1.title": "Doświadczenie Developerskie",
  "about.highlight1.desc": "Praktyczna znajomość MERN Stack i architektury aplikacji",
  "about.highlight2.title": "Testowanie Manualne",
  "about.highlight2.desc": "Testowanie aplikacji mobilnych w środowisku enterprise",
  "about.highlight3.title": "Automatyzacja Testów",
  "about.highlight3.desc": "Projektowanie i rozwój testów E2E w Playwright oraz automatycznych testów mobilnych w Appium",


    // Experience
    "experience.title": "Doświadczenie Zawodowe",
    "experience.status": "Obecne stanowisko",
    "experience.role": "Tester Aplikacji Mobilnych",
    "experience.company": "Bank Millennium",
    "experience.period": "Lip 2025 - obecnie",
    "experience.desc": "Testowanie krytycznych biznesowo aplikacji mobilnych w regulowanym środowisku bankowym, z naciskiem na jakość, stabilność, ułatwienia dostępu i bezpieczeństwo użytkownika.",
    "experience.point1": "Testowanie manualne aplikacji mobilnych (iOS / Android)",
    "experience.point2": "Testowanie krytycznych ścieżek użytkownika i procesów biznesowych",
    "experience.point3": "Praca w regulowanym środowisku enterprise (procedury, standardy jakości)",
    "experience.point4": "Ścisła współpraca z developerami, analitykami i zespołami QA",
    // Experience 2
    "experience2.role": "Specjalista ds. konfiguracji klienta",
    "experience2.company": "Intiaro",
    "experience2.period": "Mar 2022 - Lip 2025",
    "experience2.desc":
      "Konfiguracja oraz walidacja produktów dostosowanych do wymagań klientów. Tworzenie wewnętrznej aplikacji SPA, automatyzującej procesy konfiguracji i testowania, co przełożyło się na redukcję błędów oraz znaczną poprawę efektywności pracy.",
    "experience2.point1": "Konfiguracja i walidacja produktów dostosowanych do wymagań klientów",
    "experience2.point2": "Testowanie poprawności działania produktów",
    "experience2.point3": "Projektowanie i rozwój wewnętrznej aplikacji SPA automatyzującej procesy konfiguracji",
    "experience2.point4": "Redukcja błędów manualnych oraz optymalizacja czasu realizacji procesów",

    // Skills
    "skills.title": "Umiejętności Techniczne",
    "skills.automation": "Automatyzacja QA",
    "skills.manual": "QA Manualne",
    "skills.development": "Programowanie",
    "skills.tools": "Narzędzia",
    "skills.automation.playwright": "Playwright",
    "skills.automation.jsTs": "JavaScript & TypeScript",
    "skills.automation.pom": "Page Object Model",
    "skills.automation.structure": "Biznesowo czytelne testy",
    "skills.automation.cicd": "Integracja z CI/CD",
    "skills.manual.testCases": "Pisanie przypadków testowych",
    "skills.manual.exploratory": "Testy eksploracyjne",
    "skills.manual.defects": "Raportowanie defektów",
    "skills.manual.mobile": "Testowanie aplikacji mobilnych",
    "skills.manual.regression": "Testy regresji",
    "skills.dev.react": "React",
    "skills.dev.node": "Node.js",
    "skills.dev.mongo": "MongoDB",
    "skills.dev.express": "Express.js",
    "skills.dev.rest": "REST API",
    "skills.tools.git": "Git / GitHub",
    "skills.tools.postman": "Postman",
    "skills.tools.jira": "Jira",
    "skills.tools.vscode": "VS Code",
    "skills.tools.devtools": "Chrome DevTools",

    // Projects
    "projects.title": "Projekty Automatyzacji",
    "projects.view": "Zobacz na GitHub",
    "projects.project1.title": "Framework automatyzacji E2E w Playwright",
    "projects.project1.desc":
      "Skalowalny framework testów end-to-end oparty o Playwright, wykorzystujący Page Object Model oraz własne fixtures. Testy są pisane w biznesowo czytelnym formacie, z naciskiem na realne scenariusze użytkownika i łatwe utrzymanie.",
    "projects.project1.scope": "Testy E2E / UI",
    "projects.project1.feature3": "Page Object Model z enkapsulacją akcji i asercji",
    "projects.project1.feature2": "Testy czytelne biznesowo",
    "projects.project1.feature4": "Separacja stron, komponentów, danych testowych i asercji",
    "projects.project1.feature1": "Architektura oparta o fixtures",
    "projects.more":"Więcej wkrótce",

    // Approach
    "approach.title": "Podejście do Testowania",
    "approach.intro": "Automatyzację traktuję jako narzędzie wspierające jakość produktu, a nie cel sam w sobie. Skupiam się na testach, które dostarczają realną wartość biznesową.",
    "approach.point1.title": "Testowanie Oparte na Ryzyku",
    "approach.point1.desc": "Priorytetyzacja testów na podstawie wpływu biznesowego i prawdopodobieństwa awarii",
    "approach.point2.title": "Testy Łatwe w Utrzymaniu",
    "approach.point2.desc": "Pisanie czystego, biznesowo czytelnego kodu testów, który zespoły mogą łatwo zrozumieć i rozwijać",
    "approach.point3.title": "Współpraca QA-Dev",
    "approach.point3.desc": "Łączenie światów developmentu i quality assurance",
    "approach.point4.title": "Ciągłe Doskonalenie",
    "approach.point4.desc": "Monitorowanie wyników testów oraz doskonalenie automatyzacji na podstawie metryk jakości i feedbacku projektowego",
    "approach.flow.title": "Moje Flow Testów",
    "approach.flow1": "Analiza Wymagań",
    "approach.flow2": "Zrozumienie Procesu Biznesowego",
    "approach.flow3": "Projektowanie Testów",
    "approach.flow4": "Wykonanie Testów",
    "approach.flow5": "Raportowanie Defektów i Feedback",

    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Zainteresowany współpracą? Porozmawiajmy.",
    "contact.name": "Imię",
    "contact.email": "Email",
    "contact.message": "Wiadomość",
    "contact.send": "Wyślij Wiadomość",
    "contact.success": "Wiadomość wysłana pomyślnie!",
    "contact.namePlaceholder": "Twoje imię",
    "contact.emailPlaceholder": "twoj.email@example.com",
    "contact.messagePlaceholder": "Twoja wiadomość...",

    // Footer
    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.built": "Zbudowane z React i podejściem Playwright",

    // How do i work
    "mywork.title": "Jak Pracuję na Co Dzień",
    "mywork.intro": "Moja codzienna praca skupia się na analizie wymagań, estymacji prac testowych oraz zapewnianiu jakości poprzez uporządkowane testowanie i ścisłą współpracę zespołową.",

    "mywork.step1.title": "Analiza Wymagań i Estymacja",
    "mywork.step1.desc": "Analiza wymagań wraz z zespołem, zrozumienie celów biznesowych, identyfikacja ryzyk oraz estymacja zakresu testów.",

    "mywork.step2.title": "Zrozumienie Procesu i Testy Eksploracyjne",
    "mywork.step2.desc": "Eksploracja aplikacji w celu poznania procesów biznesowych, zachowania systemu oraz potencjalnych obszarów ryzyka.",

    "mywork.step3.title": "Projektowanie Testów",
    "mywork.step3.desc": "Projektowanie czytelnych i uporządkowanych przypadków testowych w oparciu o wymagania i wyniki testów eksploracyjnych, z wykorzystaniem Jira Xray.",

    "mywork.step4.title": "Wykonanie Testów",
    "mywork.step4.desc": "Wykonywanie testów aplikacji mobilnych (iOS / Android) oraz weryfikacja wyników względem oczekiwanego zachowania.",

    "mywork.step5.title": "Raportowanie Defektów i Współpraca",
    "mywork.step5.desc": "Raportowanie defektów, analiza problemów oraz ścisła współpraca z zespołami QA, Developerskimi, Analitykami i Product Ownerami.",

    "mywork.tools.mobile.title": "Środowisko Testów Mobilnych",
    "mywork.tools.mobile.desc": "Testowanie bankowych aplikacji mobilnych na platformach iOS oraz Android.",

    "mywork.tools.accessibility.title": "Testy Dostępności",
    "mywork.tools.accessibility.desc": "Praca z narzędziami VoiceOver i TalkBack w celu weryfikacji dostępności i użyteczności aplikacji.",

    "mywork.tools.stack.title": "Narzędzia i Stos Technologiczny",
    "mywork.tools.stack.desc": "Jira, Xray, Confluence, Kibana, SQL, Postman, Agile / Scrum.",

    "mywork.tools.enterprise.title": "Środowisko Enterprise",
    "mywork.tools.enterprise.desc": "Praca w regulowanym środowisku bankowym z naciskiem na jakość, bezpieczeństwo i zgodność z wymaganiami.",

    "mywork.tools.monitoring.title": "Analiza Logów i Debugowanie",
    "mywork.tools.monitoring.desc": "Analiza logów aplikacyjnych w Kibanie w celu diagnozowania błędów i weryfikacji zachowania systemu.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pl");

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["pl"]] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
