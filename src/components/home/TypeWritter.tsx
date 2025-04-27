"use client";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

/**
 * Animated TypeWriter effect component
 * Displays text with a typing animation and cycles through different phrases
 */
export const TypeWriter = () => {
  const locale = useLocale();

  // Ensure phrases is an array with proper typing
  const typingPhrases =
    locale === "en"
      ? [
          "Modern Web Apps",
          "Beautiful UI",
          "Responsive Sites",
          "Fullstack Solutions",
        ]
      : [
          "Apps Web Modernos",
          "Belas Interfaces",
          "Sites Responsivos",
          "Soluções Fullstack",
        ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      // Current phrase from the array
      const fullPhrase = typingPhrases[currentIndex];

      // Calculate the next part of the phrase based on if we're deleting or adding
      const updatedPhrase = isDeleting
        ? fullPhrase.substring(0, currentPhrase.length - 1)
        : fullPhrase.substring(0, currentPhrase.length + 1);

      setCurrentPhrase(updatedPhrase);

      // Set typing speed - faster when deleting, slower when typing
      if (isDeleting) {
        setTypingSpeed(50);
      } else {
        setTypingSpeed(80 + Math.random() * 40);
      }

      // If completed typing the full phrase
      if (!isDeleting && updatedPhrase === fullPhrase) {
        // Pause at the end of phrase
        setTypingSpeed(1500);
        setIsDeleting(true);
      }
      // If deleted the phrase
      else if (isDeleting && updatedPhrase === "") {
        setIsDeleting(false);
        // Move to the next phrase
        setCurrentIndex((prev) => (prev + 1) % typingPhrases.length);
        // Small pause before starting the next phrase
        setTypingSpeed(400);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentPhrase, currentIndex, isDeleting, typingSpeed, typingPhrases]);

  return (
    <span className="relative ml-4 inline-block min-w-[280px] font-bold tracking-tight">
      {/* Enhanced text visibility with strong contrast */}
      <span
        className="text-primary font-extrabold relative z-10 gradient-text text-2xl md:text-3xl lg:text-4xl"
        style={{
          textShadow: "0 0 5px rgba(0, 255, 255, 0.7)",
          filter: "contrast(1.3) brightness(1.2)",
        }}
      >
        {currentPhrase}
      </span>

      {/* Crisp blinking cursor with better visibility */}
      <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-[blink_1s_step-end_infinite]"></span>

      {/* Bottom underline with sharp edges and increased opacity */}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
    </span>
  );
};
