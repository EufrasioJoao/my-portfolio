import { User, CheckCircle2, Download } from "lucide-react";
import Link from "next/link";

/**
 * Experience component for the home page
 * Displays professional work history in a timeline format
 * @returns Experience section with timeline of work history
 */
export function Experience() {
  return (
    <>
      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 md:py-24 bg-accent/5 relative overflow-hidden"
      >
        <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-4">
              <User className="h-4 w-4" />
              <span>Professional Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Work Experience
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              My professional history and the companies I've collaborated with
              throughout my career.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Current Experience - Forge */}
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-border"></div>
                <div className="hidden md:flex absolute left-0 top-0 -ml-3.5 h-7 w-7 items-center justify-center rounded-full bg-primary/10 border border-primary">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                </div>

                <div className="md:pl-12">
                  <div className="md:flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">
                      Fullstack Software Engineer
                    </h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mt-1 md:mt-0">
                      <span>Present</span>
                    </div>
                  </div>
                  <div className="text-lg font-medium text-muted-foreground mb-4">
                    Forge
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Responsible for creating comprehensive solutions for clients
                    across all levels of development, from concept to
                    deployment, including various types of applications and
                    digital solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Develop end-to-end solutions tailored to diverse client
                        requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Implement fullstack applications using modern JavaScript
                        frameworks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Lead technical architecture decisions for client
                        projects
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Previous Experience - Bantuc */}
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-border"></div>
                <div className="hidden md:flex absolute left-0 top-0 -ml-3.5 h-7 w-7 items-center justify-center rounded-full bg-secondary/10 border border-secondary">
                  <div className="h-2.5 w-2.5 rounded-full bg-secondary"></div>
                </div>

                <div className="md:pl-12">
                  <div className="md:flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">
                      Fullstack Developer
                    </h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mt-1 md:mt-0">
                      <span>Previous</span>
                    </div>
                  </div>
                  <div className="text-lg font-medium text-muted-foreground mb-4">
                    Bantuc
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Specialized in creating frontend applications and websites,
                    working on both client-facing interfaces and backend
                    services to deliver complete digital solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>
                        Developed responsive web applications with modern
                        JavaScript frameworks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>
                        Built and maintained backend services to support
                        frontend applications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>
                        Collaborated with cross-functional teams to deliver
                        high-quality products
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* First Experience - FlextTech */}
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-border"></div>
                <div className="hidden md:flex absolute left-0 top-0 -ml-3.5 h-7 w-7 items-center justify-center rounded-full bg-accent/10 border border-accent">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent"></div>
                </div>

                <div className="md:pl-12">
                  <div className="md:flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">
                      Fullstack Developer
                    </h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mt-1 md:mt-0">
                      <span>Previous</span>
                    </div>
                  </div>
                  <div className="text-lg font-medium text-muted-foreground mb-4">
                    FlextTech
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Started my professional journey as a fullstack developer,
                    working on various web development projects and gaining
                    expertise in both frontend and backend technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Created responsive web interfaces with HTML, CSS, and
                        JavaScript
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Developed server-side applications and integrated with
                        databases
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Participated in full software development lifecycle from
                        concept to deployment
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 font-medium hover:bg-accent/20 transition-colors hover:text-primary"
            >
              View Full Resume
              <Download className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
