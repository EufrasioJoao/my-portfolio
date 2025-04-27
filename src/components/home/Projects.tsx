import { Laptop, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * Projects component showcasing featured work examples
 */
export function Projects() {
  const t = useTranslations("projects");

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
              <span>{t("badge")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t("subtitle")}
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
                    {t("project1.tag1")}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary mr-2">
                    {t("project1.tag2")}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    {t("project1.tag3")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project1.title")}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {t("project1.description")}
                </p>
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="https://shopmaismz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t("project1.liveLink")}
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
                    {t("project2.tag1")}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary mr-2">
                    {t("project2.tag2")}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    {t("project2.tag3")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project2.title")}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {t("project2.description")}
                </p>
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="https://fluentacademy.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t("project2.liveLink")}
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
                    {t("project3.tag1")}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary mr-2">
                    {t("project3.tag2")}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    {t("project3.tag3")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("project3.title")}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {t("project3.description")}
                </p>
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="https://leadsai.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t("project3.liveLink")}
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
