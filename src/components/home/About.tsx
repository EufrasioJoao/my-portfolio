import { User, CheckCircle2, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-4">
              <User className="h-4 w-4" />
              <span>{t("title")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("subtitle")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg border bg-card shadow-xl overflow-hidden">
                <Image
                  src="/back.jpg"
                  alt="Developer working"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -z-10 h-full w-full translate-y-4 -translate-x-4 rounded-lg bg-primary/20 blur-sm"></div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">{t("experience")}</p>

              <p className="text-muted-foreground">{t("specialization")}</p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t("skill1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t("skill2")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t("skill3")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t("skill4")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t("skill5")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t("skill6")}</span>
                </div>
              </div>

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
              >
                <Download className="h-4 w-4" />
                <span>{t("resume")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
