import React from "react";
import "../styles/base.css";

export const HeaderRetro = ({ title = "RetlanUI", links = [] }) => {
  return (
    <header className="pixel-border bg-[var(--retro-bg-dark)] text-[var(--retro-text)] flex justify-between items-center p-4 pixel-font text-xs shadow-lg relative">
      {/* Corner Accent */}
      <span className="absolute top-0 left-0 w-2 h-2 bg-[var(--retro-accent)]"></span>
      <span className="absolute top-0 right-0 w-2 h-2 bg-[var(--retro-accent)]"></span>

      <h1 className="text-[var(--retro-accent)] tracking-tight">{title}</h1>
      <nav className="flex gap-3">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="pixel-button bg-[var(--retro-bg)] hover:bg-[var(--retro-accent)] hover:text-black transition-all"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
