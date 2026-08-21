import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for the Hearth & Hamlet community guide.",
};

export default function TermsPage() {
  return (
    <div className="wrap section">
      <span className="eyebrow">Legal</span>
      <h1 className="section-title">Terms of Service</h1>
      <div className="prose" style={{ maxWidth: "var(--wrap-article)", marginTop: "2rem" }}>
        <p><strong>Effective date:</strong> August 21, 2026</p>
        <p>
          These terms apply to your use of Hearth &amp; Hamlet Community Guide.
          This is an independent, informational fan resource, not an official
          game service or a substitute for official announcements.
        </p>

        <h2>Informational use</h2>
        <p>
          You may use the site for personal reference while playing Hearth and
          Hamlet. Please do not republish substantial portions of the site,
          misrepresent its material as official, interfere with its operation,
          or use automated requests in a way that degrades access for others.
        </p>

        <h2>Accuracy and game versions</h2>
        <p>
          We aim to distinguish verified game facts from editorial strategy
          advice, but errors and omissions can occur. Updates, balance changes,
          platform differences, and individual play styles may make a guide
          incomplete or outdated. Check the page&apos;s review date and official
          game information before relying on version-sensitive details. How you
          apply any strategy remains your decision.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Hearth and Hamlet, its trademarks, artwork, screenshots, video, and
          other game assets belong to their respective owners. Their appearance
          here is for identification, commentary, and fan-guide purposes and
          does not imply endorsement. Original site text and design may not be
          reproduced wholesale without permission.
        </p>

        <h2>External links</h2>
        <p>
          Links to Steam and other third-party resources are provided for
          convenience and attribution. We do not operate those services or
          control their content, availability, security, or policies. Visiting
          an external site is subject to that site&apos;s own terms.
        </p>

        <h2>Availability and changes</h2>
        <p>
          We may correct, reorganize, add, or remove guide material as the game
          and this site evolve. We may also update these terms; the effective
          date above will identify the current version. The site may sometimes
          be unavailable because of maintenance, hosting issues, or changes
          outside our control.
        </p>
      </div>
    </div>
  );
}
