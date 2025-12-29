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
    "nav.contact": "Contact",

    // Hero
    "hero.status": "Open to opportunities",
    "hero.title": "Automation QA Engineer",
    "hero.subtitle": "Manual Testing Background | Playwright | Mobile & Web Testing",
    "hero.description": "Quality-focused QA Engineer with experience in mobile banking applications, transitioning into test automation and building E2E solutions.",
    "hero.github": "GitHub Projects",
    "hero.linkedin": "LinkedIn",
    "hero.cv": "Download CV",

    // About
    "about.title": "About Me",
    "about.p1": "I combine hands-on QA experience with a software development background, which allows me to design clear, stable, and easy-to-maintain automated tests.",
    "about.p2":
      "My professional journey started with solid foundations in programming (JavaScript, React) and later evolved into Full Stack development using the MERN stack. This background gives me a strong understanding of how applications work “under the hood” and which areas are most prone to defects.",
    "about.p3":
      "Currently, I work as a Mobile Application Tester in the banking sector, gaining experience in a regulated enterprise environment where quality and reliability are critical. In parallel, I am actively transitioning toward test automation, using Playwright to build scalable end-to-end tests.",
    "about.highlight1.title": "Developer Background",
    "about.highlight1.desc": "Practical experience with the MERN stack and application architecture",
    "about.highlight2.title": "Banking Environment",
    "about.highlight2.desc": "Experience working with systems that have high quality and compliance requirements",
    "about.highlight3.title": "Automation Focus",
    "about.highlight3.desc": "Designing and developing E2E tests using Playwright",

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
    "projects.project1.title": "Playwright E2E Automation Framework",
    "projects.project1.desc": "A comprehensive end-to-end testing framework built with Playwright, featuring clean architecture and best practices.",
    "projects.project1.scope": "E2E / UI Testing",
    "projects.project1.feature1": "Coverage of critical user paths",
    "projects.project1.feature2": "Clean and scalable test architecture",
    "projects.project1.feature3": "Page Object Model implementation",
    "projects.project1.feature4": "Designed for continuous extension",

    // Approach
    "approach.title": "Testing Approach",
    "approach.intro": "My philosophy centers on automation as a support for quality, not a goal itself.",
    "approach.point1.title": "Risk-Based Testing",
    "approach.point1.desc": "Prioritizing tests based on business impact and failure probability",
    "approach.point2.title": "Maintainable Tests",
    "approach.point2.desc": "Writing clean, readable code that teams can understand and extend",
    "approach.point3.title": "QA-Dev Collaboration",
    "approach.point3.desc": "Bridging the gap between development and quality assurance",
    "approach.point4.title": "Continuous Improvement",
    "approach.point4.desc": "Iterating on test strategies based on real feedback and metrics",

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
  },
  pl: {
    // Navigation
    "nav.about": "O mnie",
    "nav.experience": "Doświadczenie",
    "nav.skills": "Umiejętności",
    "nav.projects": "Projekty",
    "nav.approach": "Podejście",
    "nav.contact": "Kontakt",

    // Hero
    "hero.status": "Otwarty na współpracę",
    "hero.title": "Inżynier QA ds. Automatyzacji",
    "hero.subtitle": "Doświadczenie w Testowaniu Manualnym | Playwright | Aplikacje mobilne i webowe",
    "hero.description": "Inżynier QA zorientowany na jakość z doświadczeniem w mobilnych aplikacjach bankowych, przechodzący do automatyzacji testów i budujący rozwiązania E2E.",
    "hero.github": "Projekty GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.cv": "Pobierz CV",

    // About
    "about.title": "O Mnie",
    "about.p1": "Łączę praktyczne doświadczenie QA z wiedzą programistyczną, co pozwala mi projektować czytelne, stabilne i łatwe w utrzymaniu testy automatyczne.",
    "about.p2":
      "Moja ścieżka zawodowa rozpoczęła się od solidnych podstaw w programowaniu (JavaScript, React), a następnie rozwinęła się w kierunku Full Stack Developmentu w stosie MERN. Dzięki temu dobrze rozumiem, jak działa aplikacja „od środka” oraz jakie obszary są najbardziej podatne na błędy.",
    "about.p3":
      "Obecnie pracuję jako Tester Aplikacji Mobilnych w sektorze bankowym, gdzie zdobywam doświadczenie w regulowanym środowisku enterprise, w którym jakość i niezawodność mają kluczowe znaczenie. Równolegle rozwijam się w kierunku automatyzacji testów, wykorzystując Playwright do budowy skalowalnych testów E2E.",
    "about.highlight1.title": "Doświadczenie Developerskie",
    "about.highlight1.desc": "Praktyczna znajomość MERN Stack i architektury aplikacji",
    "about.highlight2.title": "Środowisko Bankowe",
    "about.highlight2.desc": "Praca z systemami o wysokich wymaganiach jakościowych",
    "about.highlight3.title": "Fokus na Automatyzację",
    "about.highlight3.desc": "Projektowanie i rozwój testów E2E w Playwright",

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
    "projects.project1.title": "Framework Automatyzacji E2E z Playwright",
    "projects.project1.desc": "Kompleksowy framework do testów end-to-end zbudowany z Playwright, z czystą architekturą i najlepszymi praktykami.",
    "projects.project1.scope": "Testy E2E / UI",
    "projects.project1.feature1": "Pokrycie krytycznych ścieżek użytkownika",
    "projects.project1.feature2": "Czysta i skalowalna architektura testów",
    "projects.project1.feature3": "Implementacja Page Object Model",
    "projects.project1.feature4": "Zaprojektowany do ciągłego rozszerzania",

    // Approach
    "approach.title": "Podejście do Testowania",
    "approach.intro": "Moja filozofia skupia się na automatyzacji jako wsparciu dla jakości, nie jako celu samego w sobie.",
    "approach.point1.title": "Testowanie Oparte na Ryzyku",
    "approach.point1.desc": "Priorytetyzacja testów na podstawie wpływu biznesowego i prawdopodobieństwa awarii",
    "approach.point2.title": "Testy Łatwe w Utrzymaniu",
    "approach.point2.desc": "Pisanie czystego, czytelnego kodu, który zespoły mogą zrozumieć i rozwijać",
    "approach.point3.title": "Współpraca QA-Dev",
    "approach.point3.desc": "Łączenie światów developmentu i quality assurance",
    "approach.point4.title": "Ciągłe Doskonalenie",
    "approach.point4.desc": "Iteracja strategii testowych na podstawie realnych feedbacków i metryk",

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
