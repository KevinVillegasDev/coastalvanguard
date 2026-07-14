"use client";

import { useState } from "react";

const services = [
  {
    title: "Web Design & Development",
    sum: "Custom sites built to convert — not templates dressed up to look bespoke.",
    tags: ["Custom websites", "Landing pages", "E-commerce", "Redesigns", "Performance", "Hosting"],
  },
  {
    title: "SEO & Local Search",
    sum: "Get found by the people already searching for what you do, in your area.",
    tags: ["Local SEO", "Technical audits", "Keyword strategy", "Content", "Link building", "Reporting"],
  },
  {
    title: "Google Business Profile",
    sum: "Own the map pack and the reviews that decide who gets the call.",
    tags: ["Setup & verification", "Optimization", "Review management", "Post scheduling", "Multi-location"],
  },
  {
    title: "Paid Advertising",
    sum: "Spend that's measured to the dollar and optimized every week, not every quarter.",
    tags: ["Google Search", "Display", "Meta Ads", "YouTube", "Creative", "Optimization"],
  },
  {
    title: "Automation & CRM",
    sum: "Turn leads into booked appointments while you sleep — no lead left on read.",
    tags: ["CRM setup", "Email sequences", "Lead workflows", "Scheduling", "Chatbots", "API integrations"],
  },
  {
    title: "Analytics & Reporting",
    sum: "Dashboards that show what's working — and the honesty to kill what isn't.",
    tags: ["GA4", "Looker Studio", "Conversion tracking", "Attribution", "Competitor analysis"],
  },
];

export default function Services() {
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });

  return (
    <section className="band wrap" id="services">
      <div className="sec-head reveal">
        <span className="kicker">What we do</span>
        <h2>
          One team,
          <br />
          every discipline.
        </h2>
        <p>
          Most agencies hand off between vendors and lose the thread. We run
          every layer in-house, so strategy, build and growth stay aligned.
        </p>
      </div>

      <div className="svc-list">
        {services.map((svc, i) => (
          <div
            key={svc.title}
            className="svc reveal"
            role="button"
            tabIndex={0}
            aria-expanded={open.has(i)}
            onClick={() => toggle(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(i);
              }
            }}
          >
            <div className="svc-head">
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{svc.title}</h3>
                <p className="svc-sum">{svc.sum}</p>
                <div className="svc-panel">
                  <div>
                    <div className="tags">
                      {svc.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="toggle" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
