const numbers = [
  { count: 150, suffix: "+", label: "Projects delivered end-to-end" },
  { count: 98, suffix: "%", label: "Client satisfaction rate" },
  { count: 5, suffix: "×", label: "Average return on investment" },
  { fixed: "24/7", label: "Support & monitoring coverage" },
];

export default function Results() {
  return (
    <section className="band wrap" id="results">
      <div className="results-grid">
        <div className="reveal">
          <span className="kicker">Proof, not promises</span>
          <h2 style={{ fontSize: "clamp(38px,6vw,84px)", marginTop: 22 }}>
            By the
            <br />
            numbers.
          </h2>
          <p style={{ marginTop: 24, color: "var(--muted)", maxWidth: "44ch" }}>
            Across 150+ builds the pattern holds: businesses that treat digital
            as infrastructure — not decoration — compound. Here&apos;s the
            average of what that looks like.
          </p>
          <a href="#audit" className="btn btn-ghost" style={{ marginTop: 32 }}>
            Start with a free audit{" "}
            <span className="arw" aria-hidden="true">
              →
            </span>
          </a>
        </div>
        <div className="big-nums">
          {numbers.map((num, i) => (
            <div
              key={num.label}
              className="reveal"
              data-d={i > 0 ? i : undefined}
            >
              {num.fixed ? (
                <div className="n">{num.fixed}</div>
              ) : (
                <div className="n" data-count={num.count} data-suffix={num.suffix}>
                  0{num.suffix}
                </div>
              )}
              <div className="k">{num.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
