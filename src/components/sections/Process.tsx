const steps = [
  {
    title: "Audit",
    description:
      "A deep dive into your current digital presence and the opportunities hiding in it.",
  },
  {
    title: "Strategy",
    description:
      "A clear plan — scope, timeline and pricing — agreed before a single line of work ships.",
  },
  {
    title: "Build & Launch",
    description:
      "We design, develop and deploy with full visibility into progress the entire way through.",
  },
  {
    title: "Grow & Optimize",
    description:
      "Ongoing monitoring, optimization and honest monthly reporting well after launch.",
  },
];

export default function Process() {
  return (
    <section className="band wrap" id="process">
      <div className="sec-head reveal">
        <span className="kicker">How it works</span>
        <h2>
          Four steps.
          <br />
          No mystery.
        </h2>
        <p>
          From the first audit to ongoing growth, you always know exactly
          what&apos;s happening and why.
        </p>
      </div>
      <div className="steps">
        {steps.map((step, i) => (
          <div key={step.title} className="stepd reveal">
            <span className="node" />
            <div className="time">Step {String(i + 1).padStart(2, "0")}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
