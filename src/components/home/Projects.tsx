import { Github, Laptop, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * Projects component showcasing featured work examples
 *
 * TODO: Replace the temporary images with actual project screenshots:
 * - /shopmaismz.webp
 * - /fluentacademy.webp
 * - /leadsai.webp
 */
export function Projects() {
  return (
    <>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-4">
              <Laptop className="h-4 w-4" />
              <span>Featured Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Recent Work
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Here are some of the projects I've worked on. Each project
              reflects my commitment to quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: ShopMaisMZ */}
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden h-full flex flex-col">
              <div className="relative h-65">
                <Image
                  src="/shopmaismz.png"
                  alt="ShopMaisMZ - E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mr-2">
                    Next.js
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary mr-2">
                    Supabase
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    Tailwind CSS
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">ShopMaisMZ</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  A comprehensive e-commerce platform serving Mozambique with
                  2-day delivery in Nampula. Features include product catalog,
                  shopping cart, secure payments (MPesa and PayPal), and a 5-day
                  return policy.
                </p>
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="https://shopmaismz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Site
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2: FluentAcademy */}
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden h-full flex flex-col">
              <div className="relative h-65">
                <Image
                  src="/fluentacademy.png"
                  alt="Fluent Academy - English Learning Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mr-2">
                    Next.js
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary mr-2">
                    TypeScript
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    Prisma
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fluent Academy</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  A comprehensive English learning platform featuring courses
                  from beginner to advanced levels. Includes 120+ lessons, 20+
                  hours of content, interactive quizzes, podcasts, and
                  certification. Supports various learning paths with
                  subscription-based access.
                </p>
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="https://fluentacademy.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Site
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3: LeadsAI */}
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden h-full flex flex-col">
              <div className="relative h-65">
                <Image
                  src="/leadsai.png"
                  alt="LeadsAI - AI Marketing Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mr-2">
                    React
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary mr-2">
                    Node.js
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    AI APIs
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">LeadsAI</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  An innovative AI-powered lead generation platform that helps
                  businesses identify and engage with high-quality prospects.
                  Features include persona enrichment, prospect targeting,
                  automated outreach, and analytics for optimizing marketing
                  strategies.
                </p>
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="https://leadsai.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Site
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
