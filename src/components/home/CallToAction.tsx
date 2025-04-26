import { Download, Mail, ExternalLink, ArrowRight } from "lucide-react";
import React from "react";
// Temporarily remove framer-motion
// import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Enhanced call-to-action section with improved visual design
 * Encourages visitors to either get in touch or download resume
 */
export function CallToAction() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Let's Create Something Amazing Together
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and full-time
            opportunities. Whether you need a complete website, a custom
            application, or technical expertise, I'd love to hear about your
            vision.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <div>
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 w-full sm:w-auto"
              >
                Get In Touch
                <Mail className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-primary/20 bg-background px-8 py-4 font-medium hover:bg-primary/5 transition-all duration-300 hover:border-primary hover:text-primary w-full sm:w-auto"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="https://github.com/EufrasioJoao"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span>View GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/eufrasio-jo%C3%A3o-04a118248"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="h-4 w-4" />
            </Link>

            <Link
              href="/projects"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
