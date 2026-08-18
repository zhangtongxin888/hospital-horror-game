import Link from "next/link";
import type { FactStatus } from "../_data/site";

export function FactBadge({ status }: { status: FactStatus }) {
  const className = status === "Verified" ? "fact-badge verified" : status === "Guide advice" ? "fact-badge advice" : "fact-badge pending";
  return <span className={className}>{status}</span>;
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{current}</span>
    </nav>
  );
}

export function GuideHero({
  eyebrow,
  title,
  intro,
  readingTime,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  readingTime: string;
}) {
  return (
    <header className="guide-hero">
      <div className="content-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="guide-intro">{intro}</p>
        <div className="guide-meta"><FactBadge status="Verified" /><span>{readingTime}</span><span>Checked August 18, 2026</span></div>
      </div>
    </header>
  );
}

export function ArticleToc({ items }: { items: { href: string; label: string }[] }) {
  return (
    <details className="article-toc" open>
      <summary>On this page</summary>
      <ol>{items.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ol>
    </details>
  );
}

export function Callout({ type, title, children }: { type: "verified" | "advice" | "warning"; title: string; children: React.ReactNode }) {
  return (
    <aside className={`callout ${type}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

export function NextGuide({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <aside className="next-guide">
      <span>Continue your route</span>
      <Link href={href}><strong>{label}</strong><small>{note}</small><b aria-hidden="true">→</b></Link>
    </aside>
  );
}

export function RelatedGuides({ links }: { links: { href: string; label: string }[] }) {
  return (
    <nav className="related-guides" aria-label="Related guides">
      {links.map((link) => <Link href={link.href} key={link.href}>{link.label} <span aria-hidden="true">→</span></Link>)}
    </nav>
  );
}
