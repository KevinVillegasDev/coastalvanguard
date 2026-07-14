"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [lit, setLit] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setLit(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Scroll parallax: the backdrop sinks faster (0.34x) than the peak (0.2x) so
  // the scene separates in depth as it leaves. The fg is the backdrop's own
  // peak registered 1:1 at scale(1.04) — bg must always sink MORE than fg so
  // its copy of the peak stays hidden underneath.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    if (!section) return;

    let heroH = section.offsetHeight;
    const onResize = () => {
      heroH = section.offsetHeight;
      apply();
    };

    const apply = () => {
      // Layers are display:none at <=860px; nothing to move once scrolled out.
      if (window.innerWidth <= 860 || window.scrollY > heroH * 1.2) return;
      const p = Math.min(Math.max(window.scrollY / heroH, 0), 1);
      if (bgRef.current)
        bgRef.current.style.transform = `translate3d(0, ${(p * heroH * 0.34).toFixed(2)}px, 0)`;
      if (fgRef.current)
        fgRef.current.style.transform = `translate3d(0, ${(p * heroH * 0.2).toFixed(2)}px, 0) scale(1.04)`;
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`hero${lit ? " lit" : ""}`} id="hero">
      <div className="hero-photo">
        <div ref={bgRef} className="prl">
          <Image
            src="/hero-peak.jpg"
            alt="Snow-capped mountain peaks rising above clouds at dawn"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-tint" aria-hidden="true" />
      </div>

      <div className="hero-cloud cloud-back" aria-hidden="true">
        <div className="drift" />
      </div>

      <div className="wrap hero-content">
        <span className="kicker">Full-service digital agency</span>
        <h1 style={{ marginTop: 30 }}>
          <span className="ln">
            <span>One team for your</span>
          </span>
          <span className="ln">
            <span>
              <span className="accentword">peak</span> digital presence.
            </span>
          </span>
        </h1>
        <p className="hero-sub">
          Coastal Vanguard is a full-service digital agency — web, SEO, Google
          &amp; Meta ads, automation and analytics, run by{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
            one accountable team
          </strong>
          . No middlemen, no outsourced vendors, and no systems you don&apos;t
          own.
        </p>
        <div className="hero-actions">
          <a href="#audit" className="btn btn-accent">
            Get a free website audit{" "}
            <span className="arw" aria-hidden="true">
              →
            </span>
          </a>
          <a href="#services" className="btn btn-ghost">
            See our services
          </a>
          <span className="hero-note" style={{ color: "rgb(0, 0, 0)" }}>
            Reply within 24 hours
          </span>
        </div>
      </div>

      <div className="hero-fg" aria-hidden="true">
        <div ref={fgRef} className="prl prl-fg">
          <Image src="/hero-peak-fg.png" alt="" fill priority sizes="100vw" />
          <div className="fg-tint" />
          <div className="fg-shade" />
        </div>
      </div>

      <div className="hero-cloud cloud-front" aria-hidden="true">
        <div className="drift" />
      </div>
    </section>
  );
}
