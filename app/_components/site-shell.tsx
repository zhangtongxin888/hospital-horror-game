import Link from "next/link";
import { guideRoute, navLinks, site } from "../_data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Hospital Horror Game Wiki home">
          <span className="brand-mark" aria-hidden="true">H+</span>
          <span>Hospital Horror <strong>Wiki</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((item, index) => (
            <Link className={index === 0 ? "nav-link nav-link-primary" : "nav-link"} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-link" href="/sources">Sources</Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            <Link href="/sources">Sources</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-kicker">Independent case file</p>
          <h2>{site.name}</h2>
          <p>{site.description} Not affiliated with Roblox or the game developer.</p>
        </div>
        <div>
          <p className="footer-heading">Guide route</p>
          <ul className="footer-links">
            {guideRoute.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="footer-heading">Verification</p>
          <dl className="identity-list">
            <div><dt>Place</dt><dd>{site.placeId}</dd></div>
            <div><dt>Universe</dt><dd>{site.universeId}</dd></div>
            <div><dt>Checked</dt><dd>{site.verifiedDate}</dd></div>
          </dl>
          <Link className="footer-source-link" href="/sources">Read the source ledger →</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Game features and Robux prices can change.</span>
        <a href={site.officialGameUrl} rel="noreferrer" target="_blank">Official Roblox listing ↗</a>
      </div>
    </footer>
  );
}
