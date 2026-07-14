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
  return (
    <section className="band wrap" id="services">
      <div className="svc-split">
        <div className="sec-head reveal">
          <span className="kicker">What we do</span>
          <h2>One team, every discipline.</h2>
          <p>
            Most agencies hand off between vendors and lose the thread. We run
            every layer in-house, so strategy, build and growth stay aligned.
          </p>
        </div>

        <div className="svc-list">
          {services.map((svc, i) => (
            <div key={svc.title} className="svc reveal">
              <div className="svc-head">
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{svc.title}</h3>
                  <p className="svc-sum">{svc.sum}</p>
                  <div className="tags">
                    {svc.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
