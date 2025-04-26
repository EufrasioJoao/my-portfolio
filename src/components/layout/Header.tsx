"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ButtonLanguageToggle } from "@/components/ui/ButtonLanguageToggle";
import { Code, Menu, User, X, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Portfolio header component with navigation and utility controls
 * Featuring futuristic cyberpunk styling
 */
export function Header() {
  const { translate } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 transition-all duration-300 border-b border-primary/20 ${
        scrolled ? "shadow-sm shadow-primary/20" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between relative">
        {/* Decorative header elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1 left-1/4 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-primary/30 to-transparent"></div>
          <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-secondary/30 to-transparent"></div>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3 relative">
          <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground shadow-sm relative overflow-hidden group neon-glow z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Code className="h-5 w-5 relative z-10" />
          </div>
          <Link href="/" className="text-xl font-bold tracking-tight relative">
            <span className="text-primary relative">
              Eufrásio
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-primary/50"></span>
            </span>
            <span className="ml-2 text-foreground relative group-hover:text-primary transition-colors">
              João
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary/50 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden relative p-2 rounded-md hover:bg-primary/10 text-primary cyber-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            href="/#about"
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary relative group"
          >
            {translate("about")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/80 to-primary/20 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#skills"
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary relative group"
          >
            {translate("skills")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/80 to-primary/20 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#projects"
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary relative group"
          >
            {translate("projects")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/80 to-primary/20 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#experience"
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary relative group"
          >
            {translate("experience")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/80 to-primary/20 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#contact"
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary relative group"
          >
            {translate("contact")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/80 to-primary/20 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center space-x-1">
            <ButtonLanguageToggle />
          </div>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2 rounded-md text-primary-foreground text-sm font-medium transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:scale-105"></span>
            <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute inset-0 w-full h-full border border-primary/50 rounded-md"></span>
            <span className="relative flex items-center gap-2">
              <User className="h-4 w-4" />
              {translate("resume")}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 glass-bg pt-20">
          <div className="container mx-auto px-4 py-6 flex flex-col">
            <nav className="flex flex-col space-y-4 mb-8">
              <Link
                href="/#about"
                className="py-3 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translate("about")}
              </Link>
              <Link
                href="/#skills"
                className="py-3 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translate("skills")}
              </Link>
              <Link
                href="/#projects"
                className="py-3 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translate("projects")}
              </Link>
              <Link
                href="/#experience"
                className="py-3 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translate("experience")}
              </Link>
              <Link
                href="/#contact"
                className="py-3 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translate("contact")}
              </Link>
            </nav>

            <div className="flex flex-col gap-4">
              <ButtonLanguageToggle />

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-3 px-4 rounded-md text-primary-foreground text-base font-medium transition-all duration-300 overflow-hidden group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:scale-105"></span>
                <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute inset-0 w-full h-full border border-primary/50 rounded-md"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <User className="h-5 w-5" />
                  {translate("resume")}
                </span>
              </Link>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com/EufrasioJoao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/eufrasio-jo%C3%A3o-04a118248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:eufrasiojoao00@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
