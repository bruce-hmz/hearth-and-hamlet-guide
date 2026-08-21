import Link from "next/link";
import { STEAM_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2>About this guide</h2>
            <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <img
                className="footer-logo"
                src="/logo/logo.png"
                alt=""
                width={32}
                height={32}
              />
              <strong style={{ color: "var(--wheat)" }}>
                Hearth &amp; Hamlet Community Guide
              </strong>
            </p>
            <p>
              An independent, fan-made strategy resource for Hearth and Hamlet
              players — town layouts, worker management, tech tree roadmaps,
              and performance settings.
            </p>
            <p>
              Hearth and Hamlet is developed by Phorust Studios and published
              by Runic Forge. This unofficial fan site is not affiliated with
              or endorsed by them.
            </p>
            <p>
              Gameplay screenshots and the launch trailer are official
              promotional media sourced from the game&apos;s Steam store page.
            </p>
          </div>
          <div>
            <h2>Guides</h2>
            <ul className="footer-links">
              <li><Link href="/guide/">Beginner Guide</Link></li>
              <li><Link href="/layout/">Town Layouts</Link></li>
              <li><Link href="/tech-tree/">Tech Tree</Link></li>
              <li><Link href="/buildings/">Buildings</Link></li>
              <li><Link href="/best-settings/">Best Settings</Link></li>
            </ul>
          </div>
          <div>
            <h2>Official links</h2>
            <ul className="footer-links">
              <li>
                <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                  Hearth and Hamlet on Steam ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2026 Hearth &amp; Hamlet Community Guide</span>
          <nav aria-label="Legal">
            <Link href="/about/">About</Link>
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/terms/">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
