import { User, CheckCircle2, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-4">
              <User className="h-4 w-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Journey as a Developer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              I'm a passionate Fullstack Developer with extensive experience in
              building web and mobile applications that combine beautiful design
              with robust functionality.
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
              <p className="text-muted-foreground">
                With over 5 years of experience in web and mobile development,
                I've worked on a diverse range of projects, from e-commerce
                platforms to enterprise applications. My approach combines
                technical expertise with creative problem-solving to deliver
                solutions that exceed expectations.
              </p>

              <p className="text-muted-foreground">
                I specialize in creating responsive and performant applications
                using modern technologies like React, Next.js, and React Native
                on the frontend, and Node.js, Express, MySQL, and Prisma on the
                backend.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Web Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Mobile Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>API Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Database Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Cloud Services</span>
                </div>
              </div>

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
              >
                <Download className="h-4 w-4" />
                <span>Download my resume</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
