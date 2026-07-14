"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [lit, setLit] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cloudBackRef = useRef<HTMLDivElement>(null);
  const cloudFrontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setLit(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Layered depth, Slider Revolution style: the cursor shifts each layer by a
  // different amount, and on scroll the backdrop sinks faster than the peak so
  // the scene separates. The fg is the backdrop's own peak registered 1:1 and
  // scaled 1.04, so its relative offsets must stay within that cover margin
  // (~±25px) or the backdrop's copy of the peak peeks out.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    if (!section) return;

    let heroH = section.offsetHeight;
    const onResize = () => {
      heroH = section.offsetHeight;
    };

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let tx = 0,
      ty = 0; // target cursor offset, -0.5 … 0.5
    let mx = 0,
      my = 0; // eased
    const onMove = (e: PointerEvent) => {
      if (!fine.matches) return;
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      // Layers are display:none at <=860px, and there's nothing to move once
      // the hero has fully scrolled out.
      if (window.innerWidth <= 860) return;
      if (window.scrollY > heroH * 1.2) return;
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      const p = Math.min(Math.max(window.scrollY / heroH, 0), 1);
      const set = (
        el: HTMLElement | null,
        x: number,
        y: number,
        extra = ""
      ) => {
        if (el) el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)${extra}`;
      };
      set(bgRef.current, mx * -20, my * -10 + p * heroH * 0.34);
      set(fgRef.current, mx * -42, my * -22 + p * heroH * 0.2, " scale(1.04)");
      set(contentRef.current, mx * -12, my * -6);
      set(cloudBackRef.current, mx * -40, my * -16);
      set(cloudFrontRef.current, mx * -85, my * -34);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
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

      <div ref={cloudBackRef} className="hero-cloud cloud-back" aria-hidden="true">
        <div className="drift" />
      </div>

      <div className="wrap hero-content">
        <div ref={contentRef} className="prl-content">
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
      </div>

      <div className="hero-fg" aria-hidden="true">
        <div ref={fgRef} className="prl prl-fg">
          <Image src="/hero-peak-fg.png" alt="" fill priority sizes="100vw" />
          <div className="fg-tint" />
          <div className="fg-shade" />
        </div>
      </div>

      <div
        ref={cloudFrontRef}
        className="hero-cloud cloud-front"
        aria-hidden="true"
      >
        <div className="drift" />
      </div>
    </section>
  );
}
