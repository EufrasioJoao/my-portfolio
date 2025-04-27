import { ArrowRight, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import Link from "next/link";
import { TypeWriter } from "@/components/home/TypeWritter";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("homepage.hero");

  return (
    <>
      {/* Hero Section with Futuristic Visual Effects */}
      <section className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-28">
        {/* Animated background elements */}
        <div className="absolute -top-40 right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[80px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid decorative element */}
        <div className="absolute inset-0 futuristic-grid opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Pre-title with neon effect */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-sm font-medium text-primary mb-8 shadow-sm shadow-primary/20 relative overflow-hidden group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="relative z-10">{t("available")}</span>
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></span>
              <span className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </div>

            {/* Main heading with animated typing effect */}
            <h1 className="mb-8 max-w-4xl">
              {t("title")}
              <br />
              <TypeWriter />
            </h1>

            {/* Subtitle with better contrast */}
            <p className="mb-12 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
              {t("subtitle")}
            </p>

            {/* CTA Buttons with cyber aesthetic */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="tel:+258857250244"
                className="cyber-button px-8 py-4 rounded-lg font-medium w-full sm:w-auto text-center relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:scale-105"></span>
                <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute inset-0 border border-primary/50 rounded-lg"></span>
                <span className="relative flex items-center justify-center gap-2 text-primary-foreground">
                  {t("getInTouch")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 rounded-lg font-medium transition-all duration-300 w-full sm:w-auto text-center shadow-sm relative group"
              >
                <span className="relative flex items-center justify-center gap-2">
                  {t("viewProjects")}
                  <span className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:left-0 group-hover:right-0 transition-all duration-500"></span>
                </span>
              </Link>
            </div>

            {/* Social links with better styling */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/EufrasioJoao"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button h-12 w-12 rounded-full flex items-center justify-center relative group"
                aria-label="GitHub"
              >
                <span className="absolute inset-0 border border-primary/50 rounded-full transition-all duration-300 group-hover:border-primary/80"></span>
                <span className="absolute inset-0 bg-primary/5 rounded-full transition-all duration-300 group-hover:bg-primary/10"></span>
                <Github className="h-5 w-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/eufrasio-jo%C3%A3o-04a118248"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button h-12 w-12 rounded-full flex items-center justify-center relative group"
                aria-label="LinkedIn"
              >
                <span className="absolute inset-0 border border-primary/50 rounded-full transition-all duration-300 group-hover:border-primary/80"></span>
                <span className="absolute inset-0 bg-primary/5 rounded-full transition-all duration-300 group-hover:bg-primary/10"></span>
                <Linkedin className="h-5 w-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="mailto:eufrasiojoao00@gmail.com"
                className="cyber-button h-12 w-12 rounded-full flex items-center justify-center relative group"
                aria-label="Email"
              >
                <span className="absolute inset-0 border border-primary/50 rounded-full transition-all duration-300 group-hover:border-primary/80"></span>
                <span className="absolute inset-0 bg-primary/5 rounded-full transition-all duration-300 group-hover:bg-primary/10"></span>
                <Mail className="h-5 w-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>

            {/* Scroll indicator with animation */}
            <div className="mt-16 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-10 bg-gradient-to-b from-primary/30 to-transparent"></div>
              <Link
                href="#skills"
                className="w-10 h-10 mx-auto rounded-full border border-primary/30 flex items-center justify-center animate-bounce relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></span>
                <ChevronDown className="w-5 h-5 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
