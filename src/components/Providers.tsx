"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Component to wrap all client-side providers
 */
export default function Providers({ children }: ProvidersProps) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
