import type { Metadata } from "next";
import { Breadcrumbs, GuideHero, NextGuide, RelatedGuides } from "../_components/guide";
import { StructuredData, breadcrumbData } from "../_components/structured-data";
import { faqs } from "../_data/site";

export const metadata: Metadata = {
  title: "FAQ — IDs, Admin Panel, Sanity & Controls",
  description: "Source-backed Hospital Horror Game answers about the correct ID, creator, beginner route, Anomaly, Admin Panel, Sanity, Shift 999, controls, and codes.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "Hospital Horror Game FAQ", description: "Short, source-backed answers without fake certainty.", url: "/faq", images: [] },
  twitter: { card: "summary", title: "Hospital Horror Game FAQ", description: "Short, source-backed answers without fake certainty.", images: [] },
};

export default function FaqPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  return (
    <main id="main-content">
      <StructuredData data={breadcrumbData("FAQ", "/faq")} />
      <StructuredData data={faqData} />
      <div className="content-shell"><Breadcrumbs current="FAQ" /></div>
      <GuideHero eyebrow="Case route 05 · Quick answers" title="Hospital Horror Game FAQ" intro="Every answer is tied to the exact Place, official Roblox data, or a clearly stated evidence gap." readingTime="7 min read" />
      <div className="single-article content-shell">
        <div className="faq-list-full">
          {faqs.map((faq) => <article id={faq.id} key={faq.id}><span>Q</span><div><h2>{faq.question}</h2><p>{faq.answer}</p></div></article>)}
        </div>
      </div>
      <div className="content-shell"><NextGuide href="/sources" label="Sources" note="Audit the official endpoints and the claims they support." /><RelatedGuides links={[{ href: "/beginner-guide", label: "Start the beginner guide" }, { href: "/common-mistakes", label: "Avoid bad assumptions" }]} /></div>
    </main>
  );
}
