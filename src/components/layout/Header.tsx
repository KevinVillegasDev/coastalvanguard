"use client";

import { useEffect, useState } from "react";
import BrandMark from "@/components/ui/BrandMark";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#audit" },
];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  // The burger disappears above 860px, so an open menu would be stranded
  // with nothing to close it — close it when the viewport crosses over.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const mq = window.matchMedia("(min-width: 861px)");
    const onWide = () => setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${stuck ? " stuck" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label="Coastal Vanguard home">
            <BrandMark />
            Coastal Vanguard
          </a>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="#audit" className="btn btn-accent">
              Free audit
            </a>
            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className="mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen || undefined}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="#audit"
          className="btn btn-accent"
          onClick={() => setMenuOpen(false)}
        >
          Get a free website audit
        </a>
      </div>
    </>
  );
}
