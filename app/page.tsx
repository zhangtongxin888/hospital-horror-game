import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FactBadge } from "./_components/guide";
import { faqs, guideRoute, learningRoute, mistakes, quickStart, site, verifiedPillars } from "./_data/site";

export const metadata: Metadata = {
  title: "Hospital Horror Game Beginner Guide & Wiki",
  description: "Start with the Doctor route, learn the verified Hospital Horror Game loop, then explore Anomaly, Admin Panel, Sandbox, mistakes, and FAQ.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hospital Horror Game Beginner Guide & Wiki",
    description: "A beginner-first route built from the correct Place ID and source-checked public facts.",
    url: "/",
    images: [{ url: `${site.domain}/og.png`, width: 1731, height: 909, alt: "Hospital Horror Game Beginner Guide night-shift case file" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Horror Game Beginner Guide & Wiki",
    description: "A beginner-first route built from the correct Place ID and source-checked public facts.",
    images: [`${site.domain}/og.png`],
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="mission-band" aria-label="Site mission">
        <span>Beginner-first guide</span>
        <p>Correct Place ID · Source ledger · Unknown mechanics stay unknown</p>
      </section>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Night-shift case file · Checked {site.verifiedDate}</p>
          <h1>Hospital<span>Horror Game</span></h1>
          <p className="hero-lede">
            Start as a Doctor. Learn the patient-helping objective from the live prompts, then approach Anomaly, Admin Panel, and Sandbox as separate advanced layers.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/beginner-guide">Start the beginner guide <span aria-hidden="true">→</span></Link>
            <Link className="text-link" href="/core-loop">See the verified core loop</Link>
          </div>
          <ul className="trust-list" aria-label="Editorial standards">
            <li>Correct universe</li><li>Sources listed</li><li>No invented mechanics</li>
          </ul>
        </div>
        <figure className="hero-art">
          <Image src="/hospital-gameplay-2.png" alt="Official promotional art showing a doctor, a patient, and an anomaly character" width={768} height={432} priority />
          <figcaption>Official promotional image associated with Universe {site.universeId}</figcaption>
        </figure>
      </section>

      <section className="section section-paper" id="quick-start">
        <div className="section-heading split-heading">
          <div><p className="eyebrow dark">Your first session</p><h2>Five steps before you experiment</h2></div>
          <p>The public listing confirms roles and products, not a detailed treatment manual. This route stays useful without pretending otherwise.</p>
        </div>
        <ol className="step-grid">
          {quickStart.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <FactBadge status={step.status} />
              <h3>{step.title}</h3><p>{step.body}</p>
            </li>
          ))}
        </ol>
        <Link className="section-link dark-link" href="/beginner-guide">Read the full beginner guide →</Link>
      </section>

      <section className="section" id="core-loop">
        <div className="section-heading"><p className="eyebrow">Verified core</p><h2>Four layers. Different certainty.</h2><p>Each card says only what the exact game listing, pass catalog, or official media supports.</p></div>
        <div className="pillar-grid">
          {verifiedPillars.map((pillar) => (
            <article className="pillar-card" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.body}</p><small>{pillar.source}</small>
            </article>
          ))}
        </div>
        <Link className="section-link" href="/core-loop">Understand the full loop →</Link>
      </section>

      <section className="section section-paper" id="progression">
        <div className="section-heading"><p className="eyebrow dark">Skill progression</p><h2>Learn first. Spend later.</h2><p>This is a learning route—not a claim about hidden levels, currencies, or shift unlocks.</p></div>
        <div className="route-grid">
          {learningRoute.map((item) => <article key={item.stage}><span>{item.stage}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
        </div>
        <Link className="section-link dark-link" href="/progression">Open the progression route →</Link>
      </section>

      <section className="section" id="mistakes">
        <div className="section-heading"><p className="eyebrow">First-run warnings</p><h2>Avoid confident wrong answers</h2><p>The largest risk is carrying rules from another hospital game into this one.</p></div>
        <div className="mistake-grid">
          {mistakes.slice(0, 3).map((mistake) => (
            <Link href={`/common-mistakes#${mistake.id}`} key={mistake.id}>
              <span>Warning</span><h3>{mistake.title}</h3><p>{mistake.fix}</p><b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-heading"><p className="eyebrow">Official media</p><h2 id="gallery-title">What the promotion actually shows</h2><p>Modded, Sandbox, Admin Panel, and Shift 999 are visible promotional labels. They do not document complete rules.</p></div>
        <div className="media-grid">
          {[1, 2, 3].map((number) => <Image key={number} src={`/hospital-gameplay-${number}.png`} alt={`Official Hospital Horror Game promotional image ${number}`} width={768} height={432} />)}
        </div>
      </section>

      <section className="section section-paper" id="faq-preview">
        <div className="section-heading"><p className="eyebrow dark">Quick answers</p><h2>Know before your first shift</h2></div>
        <div className="faq-grid">
          {faqs.slice(0, 4).map((faq) => <article id={`home-${faq.id}`} key={faq.id}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}
        </div>
        <Link className="section-link dark-link" href="/faq">Read every answer →</Link>
      </section>

      <section className="reading-route">
        <div><p className="eyebrow">Stay on route</p><h2>Continue through the case file</h2></div>
        <ol>{guideRoute.map((item, index) => <li key={item.href}><Link href={item.href}><span>{index + 1}</span><strong>{item.label}</strong><small>{item.note}</small></Link></li>)}</ol>
      </section>

      <section className="verification-strip">
        <div><span>Place ID</span><strong>{site.placeId}</strong></div>
        <div><span>Universe ID</span><strong>{site.universeId}</strong></div>
        <div><span>Last checked</span><strong>{site.verifiedDate}</strong></div>
        <Link href="/sources">Audit every source →</Link>
      </section>
    </main>
  );
}
