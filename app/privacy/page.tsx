import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Hearth & Hamlet community guide.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap section">
      <span className="eyebrow">Legal</span>
      <h1 className="section-title">Privacy Policy</h1>
      <div className="prose" style={{ maxWidth: "var(--wrap-article)", marginTop: "2rem" }}>
        <p><strong>Effective date:</strong> August 21, 2026</p>
        <p>
          This policy explains what information may be handled when you visit
          Hearth &amp; Hamlet Community Guide. The site is currently a static
          guide: it does not offer user accounts, comments, purchases, or a
          contact form.
        </p>

        <h2>Basic technical logs</h2>
        <p>
          Our hosting or delivery provider may automatically record standard
          request information, such as an IP address, browser type, requested
          page, referring page, and request time. These logs are generally used
          to deliver the site, maintain reliability, prevent abuse, and diagnose
          errors. We do not use this site to request sensitive personal data.
        </p>

        <h2>Analytics, cookies, and advertising</h2>
        <p>
          We do not currently identify a specific analytics or advertising
          service as active on this site. If analytics is introduced, it may use
          cookies or similar technologies to measure visits and page usage. If
          advertising is introduced, an advertising partner may use cookies or
          comparable identifiers to deliver, limit, or measure ads.
        </p>
        <p>
          Before those services are enabled, this policy will be updated to name
          the relevant providers and explain the choices available to visitors.
          Where required, we will also present a consent or preference control.
          You can restrict or remove cookies through your browser settings, but
          doing so may affect features that rely on them in the future.
        </p>

        <h2>External links</h2>
        <p>
          The guide links to third-party sites such as Steam. Those sites operate
          under their own privacy policies, and their handling of data is outside
          this site&apos;s control.
        </p>

        <h2>Changes and questions</h2>
        <p>
          We may revise this policy when the site&apos;s features or service
          providers change. The effective date above will be updated when that
          happens. A public contact address is not currently listed; when a
          monitored contact channel becomes available, it will be published on
          the About page and reflected here.
        </p>
      </div>
    </div>
  );
}
