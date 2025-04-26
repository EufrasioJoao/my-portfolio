"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

/**
 * Language toggle button component with cyberpunk styling
 * Allows switching between different language options
 */
export function ButtonLanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="cyber-button px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group"
      aria-label={`Change language to ${
        language === "en" ? "Portuguese" : "English"
      }`}
    >
      {/* Background and border effects */}
      <span className="absolute inset-0 border border-primary/40 rounded-md transition-all duration-300 group-hover:border-primary/70"></span>
      <span className="absolute inset-0 bg-primary/5 rounded-md transition-all duration-300 group-hover:bg-primary/10"></span>

      {/* Highlight effect */}
      <span className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></span>

      {/* Text and icon */}
      <span className="relative flex items-center gap-1.5 text-primary">
        <Globe className="h-3.5 w-3.5" />
        <span>{language === "en" ? "EN" : "PT"}</span>
      </span>

      {/* Animated scanner effect */}
      <span className="absolute top-0 left-0 h-full w-1 bg-primary/20 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></span>
    </button>
  );
}
