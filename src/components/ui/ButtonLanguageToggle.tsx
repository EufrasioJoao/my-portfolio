"use client";

import { Globe } from "lucide-react";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
/**
 * Language toggle button component with cyberpunk styling
 * Allows switching between different language options
 */
export function ButtonLanguageToggle() {
  const router = useRouter();
  const [language, setLanguage] = useState<"en" | "pt">("pt");
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    // Set cookie for the locale
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;

    // Force a refresh to apply the new locale
    setLanguage(newLocale as "en" | "pt");
    router.refresh();
  };

  const getLanguage = () => {
    setLanguage(locale as "en" | "pt");
  };

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <button
      onClick={() => switchLanguage(language == "en" ? "pt" : "en")}
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
