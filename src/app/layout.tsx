import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eufrásio João | Fullstack Web & Mobile Developer",
  description:
    "Fullstack developer specializing in React, React Native, Next.js, Node.js, MySQL, Express, and Supabase. View my projects and experience.",
  icons: {
    icon: {
      url: "/back.jpg",
      href: "/back.jpg",
    },
  },
  keywords: [
    "fullstack developer",
    "web developer",
    "mobile developer",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "portfolio",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the locale from the server
  const locale = await getLocale();

  // Load the messages for the current locale
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
