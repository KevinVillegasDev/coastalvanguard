import { NextResponse } from "next/server";

/**
 * SITE OFFLINE GATE
 *
 * While this file exists, every request (except the assets the holding page
 * itself needs) receives a 503 "back soon" page. A 503 with Retry-After tells
 * search engines the outage is temporary so nothing gets de-indexed.
 *
 * To bring the site back: delete this file (or `git revert` the commit that
 * added it) and push to main — Vercel redeploys automatically.
 */

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Coastal Vanguard — Back soon</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: oklch(98.5% 0.004 250);
    --ink: oklch(24% 0.022 258);
    --ink-soft: oklch(46% 0.02 256);
    --accent: oklch(49% 0.17 252);
    --line: color-mix(in oklch, var(--ink) 18%, transparent);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; }
  body {
    font-family: Inter, system-ui, sans-serif;
    background: var(--bg);
    color: var(--ink);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    display: grid;
    place-items: center;
    padding: 24px;
  }
  main { width: 100%; max-width: 520px; text-align: center; }
  img { width: 180px; height: auto; display: block; margin: 0 auto 40px; }
  .tag {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 12px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
  }
  h1 {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-weight: 600;
    font-size: clamp(32px, 5vw, 44px);
    line-height: 1.1;
    letter-spacing: -.02em;
    margin-bottom: 16px;
  }
  p { color: var(--ink-soft); font-size: 17px; max-width: 40ch; margin-inline: auto; }
  a { color: var(--ink); text-decoration: underline; text-decoration-color: var(--line); text-underline-offset: 4px; }
  a:hover { text-decoration-color: var(--accent); }
</style>
</head>
<body>
<main>
  <img src="/logo-ink.png" alt="Coastal Vanguard" width="591" height="118">
  <p class="tag">Temporarily offline</p>
  <h1>We&rsquo;ll be back shortly.</h1>
  <p>The site is down for maintenance. Need to reach us in the meantime? Email <a href="mailto:info@coastalvanguard.com">info@coastalvanguard.com</a>.</p>
</main>
</body>
</html>
`;

export function proxy() {
  return new NextResponse(html, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}

export const config = {
  // Gate everything except the static assets the holding page needs.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|logo-ink.png).*)"],
};
