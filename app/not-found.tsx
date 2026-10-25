import Link from "next/link";

export default function NotFound() {
  return (
    <main data-adsterra-clean="" id="main-content" className="not-found content-shell">
      <p className="eyebrow">Case file missing · 404</p>
      <h1>This corridor goes nowhere.</h1>
      <p>The page may have moved, or the guide has not verified enough evidence to publish it.</p>
      <div className="hero-actions">
        <Link className="button-primary" href="/beginner-guide">Start the beginner guide →</Link>
        <Link className="text-link" href="/">Return home</Link>
      </div>
    </main>
  );
}
