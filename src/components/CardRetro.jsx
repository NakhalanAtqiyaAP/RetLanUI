import React from "react";
import "../styles/base.css";

export const CardRetro = ({ title, children, className = "" }) => {
  return (
    <div
      className={`relative pixel-border bg-[var(--retro-bg)] text-[var(--retro-text)] p-4 ${className}`}
    >
      {/* Corner Accent */}
      <span className="absolute top-0 left-0 w-2 h-2 bg-[var(--retro-accent)]"></span>
      <span className="absolute top-0 right-0 w-2 h-2 bg-[var(--retro-accent)]"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 bg-[var(--retro-accent)]"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--retro-accent)]"></span>

      {title && (
        <h3 className="pixel-font text-[var(--retro-accent)] mb-2 text-sm">
          {title}
        </h3>
      )}
      <div className="pixel-font text-xs leading-relaxed">{children}</div>
    </div>
  );
};
