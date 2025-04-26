import React from "react";

/**
 * Logo component for the Copy Master application
 * Can be used in headers, footers, and other branding locations
 */
export function LogoCopy({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" />
        <path d="M17 2v9" />
      </svg>
      <span className="font-bold text-xl sm:text-2xl">Copy Master</span>
    </div>
  );
}
