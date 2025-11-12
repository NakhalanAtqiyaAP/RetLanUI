import React from "react";

export const SectionRetro = ({ title, children, className = "" }) => {
  return (
    <section
      className={`pixel-border bg-[var(--retro-bg)] text-[var(--retro-text)] p-6 m-4 relative ${className}`}
    >
      {/* Corner Accent */}
      <span className="absolute top-0 left-0 w-2 h-2 bg-[var(--retro-accent)]"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--retro-accent)]"></span>

      {title && (
        <h2 className="pixel-font text-[var(--retro-accent)] mb-4 text-sm uppercase">
          {title}
        </h2>
      )}

      <div className="pixel-font text-xs leading-relaxed">{children}</div>
    </section>
  );
};
