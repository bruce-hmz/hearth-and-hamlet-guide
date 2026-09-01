import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Hearth & Hamlet community guide.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="wrap section">
      <span className="eyebrow">Legal</span>
      <h1 className="section-title">Privacy Policy</h1>
      <div className="prose" style={{ maxWidth: "var(--wrap-article)", marginTop: "2rem" }}>
        <p><strong>Effective date:</strong> August 31, 2026</p>
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
          This site displays advertising delivered by third-party advertising
          networks. Ad scripts currently load from the domains
          profitableratecpmnetwork.com and highrevenueformat.com. To deliver,
          limit, and measure ads, these partners may use cookies, device
          identifiers, or comparable technologies, and they may use information
          about your visits to this and other sites to make the ads you see more
          relevant. Ad content is served inside a frame controlled by the
          partner; data handling within that frame follows the partner&apos;s
          own privacy policy.
        </p>
        <p>
          You can limit ad personalization through your browser settings by
          blocking or deleting cookies, or through industry opt-out tools such
          as the Digital Advertising Alliance&apos;s opt-out page
          (optout.aboutads.info) or youronlinechoices.com. Blocking cookies will
          not remove ads; it can make them less relevant to you.
        </p>
        <p>
          If an analytics service is introduced later, it may use cookies or
          similar technologies to measure visits and page usage. Before any new
          tracking service is enabled, this policy will be updated to name the
          provider and explain the choices available, and where required we will
          present a consent or preference control.
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
