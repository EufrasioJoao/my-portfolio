"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Code, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Portfolio footer component with social links, navigation, and scroll-to-top functionality
 * Features cyberpunk-inspired design elements
 */
export function Footer() {
  const t = useTranslations("footer");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll-to-top button visibility
  useEffect(() => {
    const checkScrollPosition = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary/20 mt-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute -top-10 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Code className="h-5 w-5 relative z-10" />
              </div>
              <Link
                href="/"
                className="text-xl font-bold tracking-tight relative"
              >
                <span className="text-primary relative">
                  Eufrásio
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-primary/50"></span>
                </span>
                <span className="ml-2 text-foreground">João</span>
              </Link>
            </div>
            <p className="text-muted-foreground mb-4">{t("tagline")}</p>
            <div className="flex space-x-4 mt-auto">
              <a
                href="https://github.com/EufrasioJoao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/eufrasio-jo%C3%A3o-04a118248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:eufrasiojoao00@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation sections */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 relative inline-block">
              <span className="text-foreground">{t("navigation")}</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t("about")}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t("skills")}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t("projects")}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t("experience")}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+258857250244"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t("contact")}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 relative inline-block">
              <span className="text-foreground">{t("services")}</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:eufrasiojoao00@gmail.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t("webDevelopment")}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:eufrasiojoao00@gmail.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t("mobileDevelopment")}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:eufrasiojoao00@gmail.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {t("consulting")}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 relative inline-block">
              <span className="text-foreground">{t("contact")}</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="mailto:eufrasiojoao00@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  eufrasiojoao00@gmail.com
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Github className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="https://github.com/EufrasioJoao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  GitHub
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="https://www.linkedin.com/in/eufrasio-jo%C3%A3o-04a118248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  Linkedin
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {currentYear} {t("copyright")}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-4 h-12 w-12 rounded-full cyber-button flex items-center justify-center transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <ChevronUp className="h-5 w-5 text-background relative z-10" />
      </button>
    </footer>
  );
}
