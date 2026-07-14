"use client";

import { useEffect } from "react";

/**
 * Scroll-driven effects for the whole page: adds `.in` to `.reveal`/`.stepd`
 * elements as they enter the viewport, and runs the count-up on `[data-count]`.
 *
 * Mutates DOM classes/text outside React, so target elements must keep a
 * constant className/textContent across re-renders (all current targets do —
 * they're either static or only change other attributes).
 */
export default function ScrollFx() {
  useEffect(() => {
    // Signals the layout's inline script that hydration landed (see layout.tsx).
    (window as Window & { __cvHydrated?: boolean }).__cvHydrated = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal, .stepd");
    const countEls = document.querySelectorAll<HTMLElement>("[data-count]");
    let disposed = false;

    function countUp(el: HTMLElement) {
      const target = parseFloat(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      let start: number | null = null;
      const dur = 1500;
      function tick(now: number) {
        if (disposed) return;
        if (start === null) start = now;
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    // Stats are server-rendered with their real values (for crawlers and
    // no-JS visitors); only reset them to 0 when the count-up will run.
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target as HTMLElement);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    if (!reduce) {
      countEls.forEach((el) => {
        el.textContent = "0" + (el.dataset.suffix || "");
        cio.observe(el);
      });
    }

    return () => {
      disposed = true;
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  return null;
}
