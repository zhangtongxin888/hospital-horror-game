import type { Metadata } from "next";
import { Breadcrumbs, Callout, GuideHero, RelatedGuides } from "../_components/guide";
import { StructuredData, breadcrumbData } from "../_components/structured-data";
import { site, sources } from "../_data/site";

export const metadata: Metadata = {
  title: "Sources & Verification Ledger",
  description: "Audit the official Roblox sources used for Hospital Horror Game identity, roles, passes, badges, controls, and editorial limits.",
  alternates: { canonical: "/sources" },
  openGraph: { title: "Hospital Horror Game Source Ledger", description: "What is verified, what is promotional, and what still needs an in-game check.", url: "/sources", images: [] },
  twitter: { card: "summary", title: "Hospital Horror Game Source Ledger", description: "What is verified, what is promotional, and what still needs an in-game check.", images: [] },
};

export default function SourcesPage() {
  return (
    <main id="main-content">
      <StructuredData data={breadcrumbData("Sources", "/sources")} />
      <div className="content-shell"><Breadcrumbs current="Sources" /></div>
      <GuideHero eyebrow="Evidence desk · Updated August 18, 2026" title="Sources & verification" intro="A claim stays only when the exact game or an official Roblox platform source supports it." readingTime="6 min read" />
      <div className="single-article content-shell">
        <article className="guide-article">
          <section>
            <p className="section-index">01 / Identity</p><h2>The exact experience checked</h2>
            <dl className="case-identity">
              <div><dt>Title</dt><dd>Hospital Horror Game!</dd></div><div><dt>Place</dt><dd>{site.placeId}</dd></div><div><dt>Universe</dt><dd>{site.universeId}</dd></div><div><dt>Creator group</dt><dd>{site.creator}</dd></div>
            </dl>
          </section>
          <section>
            <p className="section-index">02 / Source register</p><h2>Primary sources first</h2>
            <div className="source-list">
              {sources.map((source, index) => <article key={source.url}><span>S{index + 1}</span><div><h3>{source.label}</h3><p>{source.supports}</p><a href={source.url} rel="noreferrer" target="_blank">Open official source ↗</a></div></article>)}
            </div>
          </section>
          <section>
            <p className="section-index">03 / Media boundary</p><h2>Official art is promotion—not a manual</h2>
            <p>Three public Roblox CDN images show labels including Modded, Sandbox, Admin Panel, Spawn Anomaly, and Shift 999. We describe those visible labels but do not promise every shown command or a playable route to Shift 999.</p>
            <Callout type="warning" title="Still needs an in-game check">
              <p>Exact treatment steps, anomaly identification, rooms, win conditions, shift unlocks, currencies, custom controls, and Sanity rules are not documented in the public sources reviewed.</p>
            </Callout>
          </section>
          <section>
            <p className="section-index">04 / Editorial policy</p><h2>How updates earn a “Verified” label</h2>
            <ul className="check-list">
              <li>Match the correct Place and Universe before researching a mechanic.</li>
              <li>Prefer official API data, the live listing, or evidence captured from this exact game.</li>
              <li>Keep prices and dynamic counts dated; never turn a snapshot into a permanent promise.</li>
              <li>Label practical sequencing as guide advice, not hidden game law.</li>
              <li>Delete uncertain details instead of borrowing them from a similar experience.</li>
            </ul>
          </section>
        </article>
      </div>
      <div className="content-shell"><RelatedGuides links={[{ href: "/beginner-guide", label: "Use the beginner route" }, { href: "/core-loop", label: "See the fact boundary" }, { href: "/faq", label: "Read quick answers" }]} /></div>
    </main>
  );
}
