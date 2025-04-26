"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  translate: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Simple translation dictionary
 * This should be expanded or replaced with a more robust i18n solution
 */
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    resume: "Resume",

    // Settings
    settings: "Settings",
    english: "English",
    portuguese: "Portuguese",

    // Footer
    navigation: "Navigation",
    connect: "Connect",
    email: "Email",
    phone: "Phone",
    yourName: "Your Name",
    allRightsReserved: "All rights reserved.",
    footerTagline:
      "Fullstack Web & Mobile Developer crafting beautiful, performant applications with modern technologies.",

    // Hero Section
    heroTitle: "Turning Ideas Into Digital Reality",
    heroSubtitle:
      "Fullstack Web & Mobile Developer focused on creating beautiful and functional applications.",
    getInTouch: "Get in Touch",
    viewProjects: "View Projects",

    // About Section
    aboutTitle: "About Me",
    aboutDescription:
      "I'm a passionate developer with expertise in creating engaging user experiences and robust backend solutions. I enjoy solving complex problems and continuously learning new technologies.",

    // Skills Section
    skillsTitle: "Skills & Technologies",
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    tools: "Tools & Others",

    // Projects Section
    projectsTitle: "Featured Projects",
    viewLive: "Live Demo",
    viewCode: "View Code",

    // Experience Section
    experienceTitle: "Work Experience",
    present: "Present",

    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription:
      "Interested in working together? Feel free to contact me for projects, questions or just to say hello!",
    sendMessage: "Send Message",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    submitLabel: "Submit",
  },
  pt: {
    // Navigation
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
    resume: "Currículo",

    // Settings
    settings: "Configurações",
    english: "Inglês",
    portuguese: "Português",

    // Footer
    navigation: "Navegação",
    connect: "Conectar",
    email: "Email",
    phone: "Telefone",
    yourName: "Seu Nome",
    allRightsReserved: "Todos os direitos reservados.",
    footerTagline:
      "Desenvolvedor Web & Mobile Fullstack criando aplicações bonitas e performáticas com tecnologias modernas.",

    // Hero Section
    heroTitle: "Transformando Ideias em Realidade Digital",
    heroSubtitle:
      "Desenvolvedor Web & Mobile Fullstack focado em criar aplicações bonitas e funcionais.",
    getInTouch: "Entre em Contato",
    viewProjects: "Ver Projetos",

    // About Section
    aboutTitle: "Sobre Mim",
    aboutDescription:
      "Sou um desenvolvedor apaixonado com expertise em criar experiências de usuário envolventes e soluções robustas de backend. Gosto de resolver problemas complexos e aprender continuamente novas tecnologias.",

    // Skills Section
    skillsTitle: "Habilidades & Tecnologias",
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    tools: "Ferramentas & Outros",

    // Projects Section
    projectsTitle: "Projetos em Destaque",
    viewLive: "Ver Demo",
    viewCode: "Ver Código",

    // Experience Section
    experienceTitle: "Experiência Profissional",
    present: "Presente",

    // Contact Section
    contactTitle: "Entre em Contato",
    contactDescription:
      "Interessado em trabalhar juntos? Sinta-se à vontade para me contatar para projetos, perguntas ou apenas para dizer olá!",
    sendMessage: "Enviar Mensagem",
    nameLabel: "Seu Nome",
    emailLabel: "Seu Email",
    messageLabel: "Sua Mensagem",
    submitLabel: "Enviar",
  },
};

/**
 * Provider component that wraps the application to provide language context
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize language state from localStorage or browser language
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Check for saved language preference or use browser language
    const savedLanguage = localStorage.getItem("language") as Language | null;
    const browserLanguage = navigator.language.startsWith("pt") ? "pt" : "en";

    // Set initial language
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage(browserLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("language", language);

    // Set html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  /**
   * Change the current language
   */
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  /**
   * Toggle between available languages
   */
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  /**
   * Translate a key to the current language
   */
  const translate = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, translate, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook to use the language context
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
