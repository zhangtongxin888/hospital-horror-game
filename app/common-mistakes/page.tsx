import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Callout, GuideHero, NextGuide, RelatedGuides } from "../_components/guide";
import { StructuredData, breadcrumbData } from "../_components/structured-data";
import { mistakes } from "../_data/site";

export const metadata: Metadata = {
  title: "Common Mistakes — Avoid Bad Hospital Guides",
  description: "Avoid the most misleading Hospital Horror Game mistakes: wrong Place ID, copied Animal Hospital rules, Shift 999 claims, assumed free features, and guessed controls.",
  alternates: { canonical: "/common-mistakes" },
  openGraph: { title: "Hospital Horror Game Common Mistakes", description: "Five mistakes that create confidently wrong guides.", url: "/common-mistakes", images: [] },
  twitter: { card: "summary", title: "Hospital Horror Game Common Mistakes", description: "Five mistakes that create confidently wrong guides.", images: [] },
};

export default function CommonMistakesPage() {
  return (
    <main id="main-content">
      <StructuredData data={breadcrumbData("Common Mistakes", "/common-mistakes")} />
      <div className="content-shell"><Breadcrumbs current="Common Mistakes" /></div>
      <GuideHero eyebrow="Case route 04 · Error check" title="Five mistakes to avoid" intro="Most first-run problems begin before play: the wrong game, a copied rule set, or a promise the public sources never made." readingTime="5 min read" />
      <div className="single-article content-shell">
        <article className="guide-article mistake-list-full">
          {mistakes.map((mistake, index) => (
            <section id={mistake.id} key={mistake.id}>
              <span className="mistake-count">{String(index + 1).padStart(2, "0")}</span>
              <div><p className="section-index">First-run warning</p><h2>{mistake.title}</h2><p><strong>Why it fails:</strong> {mistake.problem}</p><p><strong>Fix:</strong> {mistake.fix}</p></div>
            </section>
          ))}
          <Callout type="verified" title="The editorial rule">
            <p>A fact belongs on this site only when it can be tied to Place {"113046448920073"}, Universe {"10610155567"}, an official platform rule, or a clearly labeled recommendation.</p>
          </Callout>
          <p>When in doubt, check the <Link className="inline-link" href="/sources">source ledger</Link> instead of filling the gap.</p>
        </article>
      </div>
      <div className="content-shell"><NextGuide href="/faq" label="FAQ" note="Get short answers about IDs, Anomaly, Admin, Sanity, controls, and codes." /><RelatedGuides links={[{ href: "/beginner-guide", label: "Restart the beginner route" }, { href: "/sources", label: "Read the evidence" }]} /></div>
    </main>
  );
}
