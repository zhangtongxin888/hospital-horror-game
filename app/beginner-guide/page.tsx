import type { Metadata } from "next";
import Link from "next/link";
import { ArticleToc, Breadcrumbs, Callout, FactBadge, GuideHero, NextGuide, RelatedGuides } from "../_components/guide";
import { StructuredData, breadcrumbData } from "../_components/structured-data";
import { quickStart, site } from "../_data/site";

export const metadata: Metadata = {
  title: "Beginner Guide — First Doctor Route",
  description: "A careful first-session route for Hospital Horror Game: verify the game, start as a Doctor, follow live prompts, watch Sanity, and delay paid layers.",
  alternates: { canonical: "/beginner-guide" },
  openGraph: { title: "Hospital Horror Game Beginner Guide", description: "Your source-checked first Doctor route.", url: "/beginner-guide", images: [] },
  twitter: { card: "summary", title: "Hospital Horror Game Beginner Guide", description: "Your source-checked first Doctor route.", images: [] },
};

const toc = [
  { href: "#before-you-start", label: "Before you start" },
  { href: "#first-run", label: "First-run checklist" },
  { href: "#controls", label: "Controls" },
  { href: "#after-the-basics", label: "After the basics" },
];

export default function BeginnerGuidePage() {
  return (
    <main id="main-content">
      <StructuredData data={breadcrumbData("Beginner Guide", "/beginner-guide")} />
      <div className="content-shell"><Breadcrumbs current="Beginner Guide" /></div>
      <GuideHero eyebrow="Case route 01 · Start here" title="Your first Doctor route" intro="Learn only what the public listing confirms, then let the current game build teach the actions its APIs do not document." readingTime="6 min read" />
      <div className="article-layout content-shell">
        <ArticleToc items={toc} />
        <article className="guide-article">
          <section id="before-you-start">
            <p className="section-index">01 / Before you start</p>
            <h2>Make sure this guide matches your server</h2>
            <p>Hospital-themed Roblox experiences reuse similar names and ideas. This guide covers the root Place below and does not import rules from another experience.</p>
            <dl className="case-identity">
              <div><dt>Public title</dt><dd>Hospital Horror Game!</dd></div>
              <div><dt>Place ID</dt><dd>{site.placeId}</dd></div>
              <div><dt>Universe ID</dt><dd>{site.universeId}</dd></div>
              <div><dt>Creator group</dt><dd>{site.creator}</dd></div>
            </dl>
            <Callout type="verified" title="What the developer confirms">
              <p>The public description promotes becoming a Doctor, saving and helping patients, playing as an Anomaly, buying an Admin Panel, and becoming the best Doctor.</p>
            </Callout>
          </section>

          <section id="first-run">
            <p className="section-index">02 / First run</p>
            <h2>Follow this five-step orientation</h2>
            <ol className="article-steps">
              {quickStart.map((step, index) => (
                <li key={step.title}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div><FactBadge status={step.status} /><h3>{step.title}</h3><p>{step.body}</p></div>
                </li>
              ))}
            </ol>
            <Callout type="advice" title="Why Doctor first?">
              <p>It is the clearest objective in the official description. Starting there gives you a baseline before modded and paid systems change the experience.</p>
            </Callout>
          </section>

          <section id="controls">
            <p className="section-index">03 / Controls</p>
            <h2>Trust the current prompt—not a copied key list</h2>
            <div className="device-grid">
              <article><h3>Keyboard and mouse</h3><p>Use Roblox standard movement and camera controls. For treatment, Admin, or Anomaly actions, press the control displayed by the current prompt.</p></article>
              <article><h3>Mobile, tablet, controller</h3><p>Use the buttons rendered by your client. No verified device-specific action chart is public for this Place ID.</p></article>
            </div>
            <Callout type="warning" title="Do not hard-code E, Shift, or C">
              <p>E is a common Roblox interaction convention, but that does not prove this game uses it for every action. Custom actions can vary by build and device.</p>
            </Callout>
          </section>

          <section id="after-the-basics">
            <p className="section-index">04 / Next layer</p>
            <h2>Explore advanced options with the right expectations</h2>
            <p>Once you understand the normal Doctor objective, move into the other verified branches one at a time:</p>
            <ul className="check-list">
              <li><strong>Anomaly:</strong> promoted in the description; a BecomeAnomaly pass exists, but public data does not prove every access method.</li>
              <li><strong>Admin Panel:</strong> sold as a pass alongside other Admin products; current price and features can change.</li>
              <li><strong>Sandbox:</strong> named in official passes and promotional media; exact commands and persistence are not documented publicly.</li>
              <li><strong>Sanity:</strong> confirmed by an Infinite Sanity product; drain, recovery, and zero-state effects remain unverified.</li>
            </ul>
            <p>See the <Link className="inline-link" href="/core-loop">core loop</Link> for the boundary between confirmed roles and unknown rules.</p>
          </section>
        </article>
      </div>
      <div className="content-shell"><NextGuide href="/core-loop" label="Core Loop" note="See exactly what is confirmed, inferred, and still unknown." /><RelatedGuides links={[{ href: "/common-mistakes", label: "Avoid common mistakes" }, { href: "/faq", label: "Open the FAQ" }]} /></div>
    </main>
  );
}
