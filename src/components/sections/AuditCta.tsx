"use client";

import { FormEvent, useRef, useState } from "react";

type Status = "idle" | "sending" | "ok" | "err";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function AuditCta() {
  const siteRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errField, setErrField] = useState<"site" | "email" | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const site = siteRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";

    setErrField(null);
    if (!site) {
      setStatus("err");
      setErrField("site");
      setMessage("Add your website so we know what to audit.");
      siteRef.current?.focus();
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("err");
      setErrField("email");
      setMessage("Enter a valid email so we can send it back.");
      emailRef.current?.focus();
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ site, email }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("ok");
      setMessage("Got it — your audit is on the way. We reply within 24 hours.");
      form.reset();
    } catch {
      setStatus("err");
      setMessage(
        "Something went wrong — email us directly at info@coastalvanguard.com."
      );
    }
  }

  return (
    <section className="band wrap" id="audit">
      <div className="cta-card reveal">
        <div>
          <span className="kicker">Free website audit</span>
          <h2 style={{ marginTop: 22 }}>
            Start with
            <br />a free audit.
          </h2>
          <p className="lead">
            Drop your site below and we&apos;ll send back a plain-English audit
            — what&apos;s working, what&apos;s costing you leads, and the
            fastest wins to fix first.
          </p>
          <div className="cta-meta">
            <span>
              Direct — <b>info@coastalvanguard.com</b>
            </span>
            <span>
              Turnaround — <b>within 24 hours</b>
            </span>
            <span>
              No pressure — <b>the audit is yours either way</b>
            </span>
          </div>
        </div>
        <form className="audit" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="site">Your website</label>
            <input
              ref={siteRef}
              type="url"
              id="site"
              name="site"
              placeholder="yourbusiness.com"
              autoComplete="url"
              inputMode="url"
              className={errField === "site" ? "err" : undefined}
              aria-invalid={errField === "site" || undefined}
              aria-describedby={errField === "site" ? "formMsg" : undefined}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Where to send it</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              placeholder="you@yourbusiness.com"
              autoComplete="email"
              inputMode="email"
              className={errField === "email" ? "err" : undefined}
              aria-invalid={errField === "email" || undefined}
              aria-describedby={errField === "email" ? "formMsg" : undefined}
            />
          </div>
          <div
            id="formMsg"
            className={`msg${status === "ok" ? " ok" : ""}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </div>
          <button
            type="submit"
            className="btn btn-accent"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending…"
            ) : (
              <>
                Request my free audit{" "}
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
