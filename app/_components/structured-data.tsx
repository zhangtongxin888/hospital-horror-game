export function StructuredData({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function breadcrumbData(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://hospitalhorrorgame.wiki/" },
      { "@type": "ListItem", position: 2, name, item: `https://hospitalhorrorgame.wiki${path}` },
    ],
  };
}
