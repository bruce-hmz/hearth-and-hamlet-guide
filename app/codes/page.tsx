import { GuideArticle } from "@/components/guide-article";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

export const metadata = guideMetadata("codes");

const page = GUIDE_PAGES.codes;

export default function CodesPage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="active">Current codes status</h2>
        <div className="callout callout--danger">
          <span className="callout__icon" aria-hidden="true">!</span>
          <div>
            <p>
              <strong>No verified public codes at the latest page check.</strong>
              The official Steam page and the official material we have verified
              do not show a redemption feature or any public promo codes for
              Hearth and Hamlet.
            </p>
          </div>
        </div>
        <p>
          This is a status report, not a claim that the game can never add codes.
          A future update, event, or developer announcement could introduce a
          redemption system. Until an official source or a working in-game
          interface confirms one, this page will not publish unverified strings.
        </p>
        <p>
          <strong>Last full check: 2026-08-25.</strong> The official Steam
          page and the developer material reviewed for this site still showed
          no redemption feature or public promo codes on that date.
        </p>

        <h3>What counts as a verified code?</h3>
        <ul>
          <li>An announcement from the developer or publisher.</li>
          <li>A code shown through an official Hearth and Hamlet channel.</li>
          <li>
            A code accepted by a visible in-game redemption interface, with a
            reproducible reward and expiry status.
          </li>
        </ul>
        <p>
          Lists copied from generic code sites do not meet that standard. Search
          results can also mix Hearth and Hamlet with other games containing
          <q>Hamlet</q> in the title, so always confirm the exact game name and
          developer before trusting a claim.
        </p>
      </section>

      <section>
        <h2 id="redeem">How redemption would work</h2>
        <p>
          There is no confirmed redemption workflow to document at this time.
          If codes are added later, check these places before following a
          third-party guide:
        </p>
        <ol>
          <li>The title screen and pause menu for a clearly labeled Codes option.</li>
          <li>Settings and other in-game menus for an official redemption field.</li>
          <li>The game&apos;s Steam announcements and update notes.</li>
          <li>Developer or publisher posts linked from the official Steam page.</li>
        </ol>
        <p>
          Never download a <q>code activator</q>, save editor, or executable to
          claim a promotional reward. A legitimate promo code should not require
          your Steam password or an unrelated download.
        </p>

        <h3>When this page will be checked again</h3>
        <p>
          The status should be reviewed after major game updates, seasonal
          events, and official announcements. It should also be rechecked if a
          redemption button appears in-game or the Steam page adds a related
          feature notice.
        </p>
      </section>

      <section>
        <h2 id="trainers">Trainers, cheat engines &amp; auto-clickers</h2>
        <p>
          With no codes and no redemption system, players sometimes look at
          third-party trainers or cheat engines instead. Here the honest
          status is that <strong>nothing is officially documented either
          way</strong>: the developer has published no policy on external
          tools, no statement that they are safe, and no statement that they
          are penalized. Claims you may see on trainer-download sites that
          their tools are &ldquo;penalty-free&rdquo; for Hearth and Hamlet are
          unverified marketing, not developer statements.
        </p>
        <p>
          The closest thing to an official position comes from an August 22
          Steam thread in which a player complained about Windows-key
          auto-clicking no longer working. The developer replied that he was
          &ldquo;not familiar with Windows key auto-click,&rdquo; pointed to
          the game&apos;s <strong>built-in &ldquo;Hover to Click&rdquo;
          option</strong> in the options menu, and did not announce any ban or
          penalty policy for external tools in that thread. Review-level
          mentions of auto-clicker users being banned exist but are unverified
          hearsay &mdash; we do not repeat them as fact, and we have found no
          confirmed case of enforcement either.
        </p>
        <p>
          Practical takeaway: if your goal is less repetitive clicking, use
          the developer-built <code>Hover to Click</code> setting described on
          our <a href="/best-settings">best settings page</a> rather than an
          unknown executable. If you do experiment with third-party tools, do
          it on a backed-up save &mdash; see our{" "}
          <a href="/save-file-location">save file location guide</a> &mdash;
          because save edits are the realistic risk, and a corrupted save is
          the one outcome no policy statement will undo.
        </p>
      </section>

      <section>
        <h2 id="faq">FAQ</h2>
        <div className="faq">
          <details>
            <summary>Are there any working Hearth and Hamlet codes?</summary>
            <div className="faq__a">
              <p>
                None have been verified at the latest page check. The official
                Steam page and the official materials reviewed for this guide do
                not currently show public promo codes or a redemption interface.
              </p>
            </div>
          </details>
          <details>
            <summary>Where would I enter a code?</summary>
            <div className="faq__a">
              <p>
                No official entry location has been confirmed. If the feature is
                added, look for a clearly labeled option in the title, pause, or
                settings menus and verify it against an official announcement.
              </p>
            </div>
          </details>
          <details>
            <summary>Are trainers or auto-clickers allowed? Will I be banned?</summary>
            <div className="faq__a">
              <p>
                No official policy exists. In the only public thread on the
                topic (August 22), the developer did not announce any ban or
                penalty rule for external auto-clickers &mdash; he said he was
                unfamiliar with the Windows-key method raised there and pointed
                to the built-in &ldquo;Hover to Click&rdquo; option in the
                settings menu. Claims that players were banned, or that
                third-party tools are penalty-free, are both unverified. For
                less clicking without any third-party software, enable Hover to
                Click in the options menu.
              </p>
            </div>
          </details>
          <details>
            <summary>Why do some sites list codes for a Hamlet game?</summary>
            <div className="faq__a">
              <p>
                They may be covering a different game with a similar title or
                repeating an unsourced list. Match the full title
                <strong> Hearth and Hamlet</strong> and its official Steam page
                before attempting any code.
              </p>
            </div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
