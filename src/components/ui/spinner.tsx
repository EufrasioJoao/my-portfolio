import React from "react";

/**
 * Props for the Spinner component
 */
interface SpinnerProps {
  /** Optional class name for custom styling */
  className?: string;
  /** Size of the spinner (default: 'md') */
  size?: "sm" | "md" | "lg";
  /** Spinner variant (default: 'primary') */
  variant?: "primary" | "secondary" | "accent";
}

/**
 * Futuristic loading spinner component
 * Features cyberpunk-inspired animated effects
 */
export function Spinner({
  className = "",
  size = "md",
  variant = "primary",
}: SpinnerProps) {
  // Size mappings
  const sizeMap = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  // Variant color classes
  const variantMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  // Selected size and variant classes
  const sizeClass = sizeMap[size];
  const variantClass = variantMap[variant];

  return (
    <div
      className={`relative ${sizeClass} ${className}`}
      aria-label="Loading"
      role="status"
    >
      {/* Outer ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-t-transparent border-r-transparent ${variantClass} opacity-20 animate-spin`}
        style={{ animationDuration: "2s" }}
      ></div>

      {/* Middle ring */}
      <div
        className={`absolute inset-1 rounded-full border-2 border-b-transparent border-l-transparent ${variantClass} opacity-40 animate-spin`}
        style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
      ></div>

      {/* Inner ring */}
      <div
        className={`absolute inset-2 rounded-full border-2 border-t-transparent border-r-transparent ${variantClass} opacity-80 animate-spin`}
        style={{ animationDuration: "1s" }}
      ></div>

      {/* Center dot */}
      <div
        className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${variantClass} animate-pulse`}
      ></div>

      {/* Decorative lines */}
      <div className="absolute inset-0">
        <div
          className={`absolute left-1/2 top-0 h-1/2 w-0.5 -translate-x-1/2 ${variantClass} opacity-30`}
        ></div>
        <div
          className={`absolute left-1/2 bottom-0 h-1/2 w-0.5 -translate-x-1/2 ${variantClass} opacity-30`}
        ></div>
        <div
          className={`absolute top-1/2 left-0 w-1/2 h-0.5 -translate-y-1/2 ${variantClass} opacity-30`}
        ></div>
        <div
          className={`absolute top-1/2 right-0 w-1/2 h-0.5 -translate-y-1/2 ${variantClass} opacity-30`}
        ></div>
      </div>

      {/* Hidden text for screen readers */}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
