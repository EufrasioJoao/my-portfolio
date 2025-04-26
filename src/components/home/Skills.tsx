"use client";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Globe,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
};

// Group skills by category
type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  gradientStyle: React.CSSProperties;
  skills: Skill[];
};

// Helper functions for dynamic class names
const getBadgeClass = (colorClass: string) => {
  switch (colorClass) {
    case "primary":
      return "bg-primary/5 text-foreground/70 border-primary/20";
    case "secondary":
      return "bg-secondary/5 text-foreground/70 border-secondary/20";
    case "accent":
      return "bg-accent/5 text-foreground/70 border-accent/20";
    case "tertiary":
      return "bg-tertiary/5 text-foreground/70 border-tertiary/20";
    default:
      return "bg-primary/5 text-foreground/70 border-primary/20";
  }
};

const getIconClass = (colorClass: string) => {
  switch (colorClass) {
    case "primary":
      return "bg-primary/10 group-hover:shadow-primary/20 border-primary/20";
    case "secondary":
      return "bg-secondary/10 group-hover:shadow-secondary/20 border-secondary/20";
    case "accent":
      return "bg-accent/10 group-hover:shadow-accent/20 border-accent/20";
    case "tertiary":
      return "bg-tertiary/10 group-hover:shadow-tertiary/20 border-tertiary/20";
    default:
      return "bg-primary/10 group-hover:shadow-primary/20 border-primary/20";
  }
};

const getIndicatorClass = (colorClass: string) => {
  switch (colorClass) {
    case "primary":
      return "bg-primary";
    case "secondary":
      return "bg-secondary";
    case "accent":
      return "bg-accent";
    case "tertiary":
      return "bg-tertiary";
    default:
      return "bg-primary";
  }
};

const getProgressClass = (colorClass: string) => {
  switch (colorClass) {
    case "primary":
      return "bg-gradient-to-r from-primary/60 to-primary";
    case "secondary":
      return "bg-gradient-to-r from-secondary/60 to-secondary";
    case "accent":
      return "bg-gradient-to-r from-accent/60 to-accent";
    case "tertiary":
      return "bg-gradient-to-r from-tertiary/60 to-tertiary";
    default:
      return "bg-gradient-to-r from-primary/60 to-primary";
  }
};

const getBackgroundClass = (colorClass: string) => {
  switch (colorClass) {
    case "primary":
      return "bg-gradient-to-br from-primary/5 via-background/0 to-primary/10";
    case "secondary":
      return "bg-gradient-to-br from-secondary/5 via-background/0 to-secondary/10";
    case "accent":
      return "bg-gradient-to-br from-accent/5 via-background/0 to-accent/10";
    case "tertiary":
      return "bg-gradient-to-br from-tertiary/5 via-background/0 to-tertiary/10";
    default:
      return "bg-gradient-to-br from-primary/5 via-background/0 to-primary/10";
  }
};

const getParticleClass = (colorClass: string) => {
  switch (colorClass) {
    case "primary":
      return "bg-primary/30";
    case "secondary":
      return "bg-secondary/30";
    case "accent":
      return "bg-accent/30";
    case "tertiary":
      return "bg-tertiary/30";
    default:
      return "bg-primary/30";
  }
};

// Function to render the appropriate icon
const renderIcon = (colorClass: string) => {
  switch (colorClass) {
    case "primary":
      return <Code className="h-6 w-6 text-primary" />;
    case "secondary":
      return <Server className="h-6 w-6 text-secondary" />;
    case "accent":
      return <Smartphone className="h-6 w-6 text-accent" />;
    case "tertiary":
      return <Globe className="h-6 w-6 text-tertiary" />;
    default:
      return <Code className="h-6 w-6 text-primary" />;
  }
};

// Skill categories data
const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code className="h-8 w-8 text-primary" />,
    colorClass: "primary",
    gradientStyle: {
      background:
        "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    skills: [
      {
        name: "JavaScript / TypeScript",
      },
      {
        name: "React / Next.js",
      },
      {
        name: "Tailwind CSS / Shadcn UI",
      },
      {
        name: "HTML5 / CSS3",
      },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-8 w-8 text-secondary" />,
    colorClass: "secondary",
    gradientStyle: {
      background:
        "linear-gradient(to right, hsl(var(--secondary)), hsl(var(--tertiary)))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    skills: [
      {
        name: "Node.js / Express",
      },
      {
        name: "MySQL / Prisma",
      },
      {
        name: "Supabase",
      },
      {
        name: "REST APIs",
      },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    colorClass: "accent",
    gradientStyle: {
      background:
        "linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    skills: [
      {
        name: "React Native",
      },
      {
        name: "Native APIs",
      },
      {
        name: "Expo",
      },
      {
        name: "App Store Deployment",
      },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Globe className="h-8 w-8 text-tertiary" />,
    colorClass: "tertiary",
    gradientStyle: {
      background:
        "linear-gradient(to right, hsl(var(--tertiary)), hsl(var(--primary)))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    skills: [
      {
        name: "AWS",
      },
      {
        name: "Git / GitHub",
      },
      {
        name: "Docker",
      },
      {
        name: "CI/CD",
      },
    ],
  },
];

/**
 * Component for a horizontal scrolling card with skills
 */
function SkillCard({
  category,
  index,
  totalCategories,
}: {
  category: SkillCategory;
  index: number;
  totalCategories: number;
}) {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
      className="flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[38vw] lg:w-[25vw] h-auto rounded-2xl p-6 mr-6 relative overflow-hidden group"
    >
      {/* Glass morphism card effect */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-xl border border-primary/10 rounded-2xl shadow-xl" />

      {/* Subtle gradient background */}
      <div
        className={cn(
          "absolute inset-0 opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl",
          getBackgroundClass(category.colorClass)
        )}
      />

      {/* Animated particles background effect - smaller and fewer particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-1.5 h-1.5 rounded-full",
              getParticleClass(category.colorClass)
            )}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={cn(
              "h-12 w-12 rounded-xl flex items-center justify-center shadow-inner relative border",
              getIconClass(category.colorClass)
            )}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-primary"
            >
              {renderIcon(category.colorClass)}
            </motion.div>
          </motion.div>

          <span
            className={cn(
              "px-2 py-1 text-[10px] rounded-full border inline-flex items-center",
              getBadgeClass(category.colorClass)
            )}
          >
            {index + 1}/{totalCategories}
          </span>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold mb-3 tracking-tight"
          style={category.gradientStyle}
        >
          {category.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-3"
        />

        <div className="mt-5 space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.1 }}
              className="group/skill"
            >
              <div className="mb-1.5">
                <div className="flex items-center">
                  <motion.div
                    className={cn(
                      "w-0.5 h-4 rounded-full mr-2",
                      getIndicatorClass(category.colorClass)
                    )}
                    animate={{
                      height: [4, 10, 4],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                      delay: skillIndex * 0.2,
                    }}
                  />
                  <span className="font-medium text-sm text-foreground">
                    {skill.name}
                  </span>
                </div>
              </div>

              {/* Custom progress bar */}
              <div className="relative py-1">
                <div className="h-1 w-full bg-muted/40 rounded-full overflow-hidden">
                  <motion.div
                    className={cn(
                      "h-full rounded-full",
                      getProgressClass(category.colorClass)
                    )}
                    initial={{ width: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.3 + skillIndex * 0.1,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  // Reference to the horizontal scroll container
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  // Handle scroll snap navigation
  const handleScrollTo = (index: number) => {
    if (scrollRef.current) {
      const element = scrollRef.current.children[index] as HTMLElement;
      if (element) {
        scrollRef.current.scrollTo({
          left: element.offsetLeft - 16,
          behavior: "smooth",
        });
        setActiveCard(index);
      }
    }
  };

  // Handle navigation buttons
  const handlePrevious = () => {
    const newIndex = Math.max(0, activeCard - 1);
    handleScrollTo(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(skillCategories.length - 1, activeCard + 1);
    handleScrollTo(newIndex);
  };

  return (
    <>
      {/* Skills Section with Modern UI */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="skills">
        {/* Decorative background with animated gradient */}
        <div className="absolute inset-0 bg-primary/5 opacity-30"></div>
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, hsl(var(--primary)/30) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, hsl(var(--secondary)/30) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, hsl(var(--accent)/30) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, hsl(var(--tertiary)/30) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 30%, hsl(var(--primary)/30) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>

        {/* Content container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-sm font-medium text-primary mb-5 relative overflow-hidden">
              <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
              <span>Skills & Technologies</span>
              <span className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </div>
            <motion.h2
              className="mb-4 text-4xl md:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              My Technical Expertise
            </motion.h2>
            <motion.p
              className="mt-4 text-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I specialize in the following technologies and frameworks,
              bringing extensive experience and professional quality to every
              project.
            </motion.p>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center mb-6 gap-3">
            {skillCategories.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleScrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeCard === index
                    ? "bg-primary scale-125"
                    : "bg-foreground/20 hover:bg-foreground/40"
                )}
                aria-label={`View ${skillCategories[index].title} skills`}
              />
            ))}
          </div>

          {/* Navigation controls container */}
          <div className="relative">
            {/* Left navigation button */}
            <motion.button
              className={cn(
                " cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 border border-primary/20 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg -ml-5 sm:ml-0",
                activeCard === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/10"
              )}
              whileHover={activeCard > 0 ? { scale: 1.1 } : {}}
              whileTap={activeCard > 0 ? { scale: 0.95 } : {}}
              onClick={handlePrevious}
              disabled={activeCard === 0}
              aria-label="Previous skill category"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>

            {/* Right navigation button */}
            <motion.button
              className={cn(
                "cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 border border-primary/20 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg -mr-5 sm:mr-0",
                activeCard === skillCategories.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/10"
              )}
              whileHover={
                activeCard < skillCategories.length - 1 ? { scale: 1.1 } : {}
              }
              whileTap={
                activeCard < skillCategories.length - 1 ? { scale: 0.95 } : {}
              }
              onClick={handleNext}
              disabled={activeCard === skillCategories.length - 1}
              aria-label="Next skill category"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            {/* Horizontal scrolling skills cards */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={() => {
                if (scrollRef.current) {
                  const scrollPosition = scrollRef.current.scrollLeft;
                  const cardWidth =
                    scrollRef.current.scrollWidth / skillCategories.length;
                  const newActiveCard = Math.round(scrollPosition / cardWidth);
                  if (newActiveCard !== activeCard) {
                    setActiveCard(newActiveCard);
                  }
                }
              }}
            >
              {skillCategories.map((category, index) => (
                <div key={index} className="snap-center">
                  <SkillCard
                    category={category}
                    index={index}
                    totalCategories={skillCategories.length}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add a CSS class to hide scrollbars */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
