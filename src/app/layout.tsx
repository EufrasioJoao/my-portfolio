import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
      url: "/frasio.png",
      href: "/frasio.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <Providers>
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
