import type { Metadata } from "next";
import Link from "next/link";
import { ArticleToc, Breadcrumbs, Callout, FactBadge, GuideHero, NextGuide, RelatedGuides } from "../_components/guide";
import { StructuredData, breadcrumbData } from "../_components/structured-data";
import { verifiedPillars } from "../_data/site";

export const metadata: Metadata = {
  title: "Core Gameplay Loop — Verified Roles",
  description: "Understand the confirmed Hospital Horror Game loop: Doctor and patient help first, then separate Anomaly, Admin Panel, and Sandbox layers.",
  alternates: { canonical: "/core-loop" },
  openGraph: { title: "Hospital Horror Game Core Loop", description: "The verified loop without invented treatment rules.", url: "/core-loop", images: [] },
  twitter: { card: "summary", title: "Hospital Horror Game Core Loop", description: "The verified loop without invented treatment rules.", images: [] },
};

export default function CoreLoopPage() {
  const toc = [{ href: "#public-loop", label: "Publicly supported loop" }, { href: "#four-layers", label: "Four verified layers" }, { href: "#unknown", label: "What remains unknown" }];
  return (
    <main id="main-content">
      <StructuredData data={breadcrumbData("Core Loop", "/core-loop")} />
      <div className="content-shell"><Breadcrumbs current="Core Loop" /></div>
      <GuideHero eyebrow="Case route 02 · Fact boundary" title="The verified core loop" intro="The public sources explain the experience’s roles and products, but they do not publish the exact patient workflow or win conditions." readingTime="5 min read" />
      <div className="article-layout content-shell">
        <ArticleToc items={toc} />
        <article className="guide-article">
          <section id="public-loop">
            <p className="section-index">01 / Publicly supported loop</p>
            <h2>The shortest defensible route</h2>
            <div className="loop-flow" aria-label="Verified core gameplay sequence">
              {[
                "Enter the correct experience",
                "Take the Doctor role when offered",
                "Follow the live objective to help patients",
                "Continue toward the Doctor goal",
                "Explore Anomaly, Admin, and Sandbox separately",
              ].map((step, index) => <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>)}
            </div>
            <Callout type="verified" title="Source boundary">
              <p>The Doctor, patient-helping, Anomaly, and Admin themes come directly from the official description. Sandbox and paid modifiers are supported by the pass catalog and official media.</p>
            </Callout>
          </section>
          <section id="four-layers">
            <p className="section-index">02 / Four layers</p>
            <h2>Do not collapse every feature into one loop</h2>
            <div className="article-card-grid">
              {verifiedPillars.map((pillar) => <article key={pillar.number}><FactBadge status="Verified" /><h3>{pillar.title}</h3><p>{pillar.body}</p><small>{pillar.source}</small></article>)}
            </div>
            <p>The safest learning order is Doctor and patient help first, then one advanced layer at a time. That is a <strong>guide recommendation</strong>, not an official progression requirement.</p>
          </section>
          <section id="unknown">
            <p className="section-index">03 / Unknown rules</p>
            <h2>Details we will not invent</h2>
            <ul className="unknown-list">
              <li>Photo, CCTV, shutter, room, or treatment sequences</li>
              <li>Exact Sanity drain, recovery, or zero-state effects</li>
              <li>Death limits, shift unlocks, currencies, or class upgrades</li>
              <li>Game-specific interaction, sprint, crouch, or item keys</li>
              <li>A normal progression route to the “Shift 999” shown in promotional art</li>
            </ul>
            <Callout type="warning" title="A similar game is not a source">
              <p>Hospital Horror Game uses anomaly-hospital language, but another experience’s guide cannot validate rules for this Place ID.</p>
            </Callout>
            <p>For a practical route that respects these limits, return to the <Link className="inline-link" href="/beginner-guide">beginner guide</Link>.</p>
          </section>
        </article>
      </div>
      <div className="content-shell"><NextGuide href="/progression" label="Progression" note="Build a learning path around the systems we can verify." /><RelatedGuides links={[{ href: "/sources", label: "Audit the evidence" }, { href: "/common-mistakes", label: "See risky assumptions" }]} /></div>
    </main>
  );
}
