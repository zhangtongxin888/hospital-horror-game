import type { Metadata } from "next";
import Link from "next/link";
import { ArticleToc, Breadcrumbs, Callout, GuideHero, NextGuide, RelatedGuides } from "../_components/guide";
import { StructuredData, breadcrumbData } from "../_components/structured-data";
import { learningRoute } from "../_data/site";

export const metadata: Metadata = {
  title: "Progression Route — From Doctor to Sandbox",
  description: "A skill-based Hospital Horror Game progression route: learn the Doctor objective, build consistency, then explore Anomaly, Admin, Sandbox, and modifiers.",
  alternates: { canonical: "/progression" },
  openGraph: { title: "Hospital Horror Game Progression Route", description: "Learn normal play before advanced or paid layers.", url: "/progression", images: [] },
  twitter: { card: "summary", title: "Hospital Horror Game Progression Route", description: "Learn normal play before advanced or paid layers.", images: [] },
};

export default function ProgressionPage() {
  const toc = [{ href: "#route", label: "Three-stage route" }, { href: "#branches", label: "Advanced branches" }, { href: "#buying", label: "Before spending Robux" }];
  return (
    <main id="main-content">
      <StructuredData data={breadcrumbData("Progression", "/progression")} />
      <div className="content-shell"><Breadcrumbs current="Progression" /></div>
      <GuideHero eyebrow="Case route 03 · Skill path" title="Learn first. Spend later." intro="No verified level tree is public, so this route measures understanding—not invented shifts, currencies, or upgrades." readingTime="5 min read" />
      <div className="article-layout content-shell">
        <ArticleToc items={toc} />
        <article className="guide-article">
          <section id="route">
            <p className="section-index">01 / Three-stage route</p><h2>Build one layer at a time</h2>
            <div className="progression-list">
              {learningRoute.map((item, index) => <article key={item.stage}><span>{index + 1}</span><div><small>{item.stage}</small><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
            </div>
            <Callout type="advice" title="This is an editorial route">
              <p>The game’s public data does not describe mandatory stages. This order simply reduces confusion and helps you compare normal Doctor play with advanced modifiers.</p>
            </Callout>
          </section>
          <section id="branches">
            <p className="section-index">02 / Advanced branches</p><h2>Choose what you want to understand next</h2>
            <div className="branch-list">
              <article><h3>Anomaly</h3><p>Confirmed by the official description and a named pass. Free or alternate entry methods are not publicly confirmed.</p></article>
              <article><h3>Admin Panel</h3><p>A paid Admin Panel is listed alongside HD Admin and permanent Sandbox/Admin products. Command availability can change.</p></article>
              <article><h3>Sandbox</h3><p>Repeated in passes and official media. Public sources do not explain exact access, saving, or command behavior.</p></article>
              <article><h3>Modifiers</h3><p>Infinite Sanity and No Cooldown products exist, but they do not reveal the normal underlying rules.</p></article>
            </div>
          </section>
          <section id="buying">
            <p className="section-index">03 / Before spending</p><h2>Treat every price as a live value</h2>
            <p>The API snapshot on August 18, 2026 listed paid Admin, Sandbox, Anomaly, Sanity, cooldown, and character products. Prices and sale status may change at any time.</p>
            <Callout type="warning" title="Buy only from the current listing">
              <p>Check the live Roblox store before purchasing. This guide deliberately avoids presenting dated Robux values as permanent facts.</p>
            </Callout>
            <p>Review <Link className="inline-link" href="/common-mistakes#everything-free">the paid-feature mistake</Link> before choosing an advanced branch.</p>
          </section>
        </article>
      </div>
      <div className="content-shell"><NextGuide href="/common-mistakes" label="Common Mistakes" note="Avoid wrong-game rules, guessed controls, and misleading promises." /><RelatedGuides links={[{ href: "/core-loop", label: "Revisit the core loop" }, { href: "/faq#admin-free", label: "Is the Admin Panel free?" }]} /></div>
    </main>
  );
}
