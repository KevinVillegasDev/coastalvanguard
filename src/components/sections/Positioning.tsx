const stats = [
  { count: 150, suffix: "+", label: "Projects delivered" },
  { count: 98, suffix: "%", label: "Client satisfaction" },
  { count: 5, suffix: "×", label: "Average ROI" },
  { fixed: "24/7", label: "Support & monitoring" },
];

export default function Positioning() {
  return (
    <section className="band wrap">
      <div className="reveal">
        <span className="kicker">One partner, every layer</span>
        <p className="pos-statement" style={{ marginTop: 26 }}>
          Six disciplines, <em>one accountable team.</em> Everything your
          digital presence needs — built by the same people who ship it.
        </p>
      </div>
      <div className="stat-row">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="s reveal"
            data-d={i > 0 ? i : undefined}
          >
            {stat.fixed ? (
              <div className="n">{stat.fixed}</div>
            ) : (
              <div className="n" data-count={stat.count} data-suffix={stat.suffix}>
                0{stat.suffix}
              </div>
            )}
            <div className="k">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
