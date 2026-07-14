"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setLit(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className={`hero${lit ? " lit" : ""}`} id="hero">
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
      <div className="hero-photo">
        <Image
          src="/hero-peak.jpg"
          alt="Snow-capped mountain peaks rising above clouds at dawn"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-tint" aria-hidden="true" />
      </div>
    </section>
  );
}
