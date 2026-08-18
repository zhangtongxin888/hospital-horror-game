import assert from "node:assert/strict";
import test from "node:test";

const origin = "https://hospitalhorrorgame.wiki";
const publicRoutes = ["/", "/beginner-guide", "/core-loop", "/progression", "/common-mistakes", "/faq", "/sources"];

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

async function render(route) {
  const worker = await loadWorker();
  return worker.fetch(
    new Request(`${origin}${route}`, { headers: { accept: route.endsWith(".xml") ? "application/xml" : "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
      IMAGES: {},
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders every public guide route", async () => {
  for (const route of publicRoutes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, route);
    const html = await response.text();
    assert.match(html, /Hospital Horror Game/i, route);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i, route);
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
    assert.equal(canonical?.replace(/\/$/, ""), `${origin}${route === "/" ? "" : route}`, route);
  }
});

test("keeps the beginner guide as the primary home action", async () => {
  const html = await (await render("/")).text();
  const beginnerLink = html.indexOf('href="/beginner-guide"');
  const officialLink = html.indexOf('href="https://www.roblox.com/games/113046448920073/Hospital-Horror-Game"');
  assert.ok(beginnerLink >= 0);
  assert.ok(officialLink > beginnerLink);
  assert.match(html, /Start the beginner guide/);
  assert.match(html, /Place ID/);
  assert.match(html, /10610155567/);
  assert.match(html, /og:image[^>]+hospitalhorrorgame\.wiki\/og\.png/i);
});

test("uses route-specific social metadata without the site-wide card on detail routes", async () => {
  for (const route of publicRoutes.slice(1)) {
    const html = await (await render(route)).text();
    assert.match(html, /property="og:title"/i, route);
    assert.match(html, /name="twitter:title"/i, route);
    assert.doesNotMatch(html, /og:image[^>]+\/og\.png/i, route);
  }
});

test("publishes a canonical sitemap and crawlable robots file", async () => {
  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /application\/xml/i);
  const xml = await sitemapResponse.text();
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, publicRoutes.map((route) => `${origin}${route}`));

  const robotsResponse = await render("/robots.txt");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("emits FAQ structured data and security headers", async () => {
  const response = await render("/faq");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
  const html = await response.text();
  assert.match(html, /FAQPage/);
  assert.match(html, /What should a beginner do first\?/);
});

test("returns the custom 404", async () => {
  const response = await render("/not-a-real-guide");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /This corridor goes nowhere/i);
  assert.match(html, /Start the beginner guide/i);
});
