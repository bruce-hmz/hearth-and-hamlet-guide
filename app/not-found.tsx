import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Hearth and Hamlet guide page could not be found.",
};

export default function NotFound() {
  return (
    <div className="wrap section">
      <span className="eyebrow">404 · Lost Beyond the Hamlet</span>
      <h1 className="section-title">This path leads nowhere.</h1>
      <div
        className="prose"
        style={{ maxWidth: "var(--wrap-article)", marginTop: "2rem" }}
      >
        <p>
          The guide may have moved, or the address may be incomplete. Return to
          the settlement hub or continue with the beginner route.
        </p>
        <div className="hero__ctas">
          <Link className="btn btn--primary" href="/">
            Return Home
          </Link>
          <Link className="btn btn--ghost" href="/guide/">
            Open the Beginner Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
