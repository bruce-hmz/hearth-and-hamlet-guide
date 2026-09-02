import { GuideArticle } from "@/components/guide-article";
import Link from "next/link";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

const description =
  "All 24 Hearth and Hamlet achievements with official global unlock rates, plus planning tips for the mode-dependent and rule-bending rare ones.";

export const metadata = { ...guideMetadata("achievements"), description };

export default function AchievementsPage() {
  return (
    <GuideArticle page={{ ...GUIDE_PAGES["achievements"], description }}>
      <section>
        <h2 id="list">All 24 achievements</h2>
        <p>
          Rates below are the official global unlock percentages from Steam,
          retrieved on September 3, 2026. Steam only publishes written
          descriptions for some of them; where none is shown, the entry lists
          what the community has verified about how it unlocks. Names are
          official; interpretations are ours and marked as such.
        </p>

        <div className="table-scroll">
          <table className="data-table">
            <caption>Hearth and Hamlet achievements by global unlock rate (Steam, Sep 3, 2026)</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Achievement</th>
                <th scope="col">Global unlock rate</th>
                <th scope="col">Requirement (official text or community notes)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Humble Beginning</td><td>98.5%</td><td>Named progression milestone in the opening sequence.</td></tr>
              <tr><td>2</td><td>A Place to Call Home</td><td>94.6%</td><td>Early settlement establishment.</td></tr>
              <tr><td>3</td><td>Hearth and Hamlet</td><td>92.1%</td><td>Title-drop milestone most players reach naturally.</td></tr>
              <tr><td>4</td><td>First Contact</td><td>85.2%</td><td>First meeting with a neighboring power.</td></tr>
              <tr><td>5</td><td>Coin for the Realm</td><td>82.5%</td><td>First major economy milestone.</td></tr>
              <tr><td>6</td><td>A Merchant&apos;s Tale</td><td>71.9%</td><td>Trade introduction.</td></tr>
              <tr><td>7</td><td>Educated Minds</td><td>71.4%</td><td>Research/library progression.</td></tr>
              <tr><td>8</td><td>Walls of Stone</td><td>65.8%</td><td>Defensive construction.</td></tr>
              <tr><td>9</td><td>He&apos;s a Wizard</td><td>64.3%</td><td>Magic branch intro.</td></tr>
              <tr><td>10</td><td>Just Pay It With Magic</td><td>62.4%</td><td>Magic application milestone.</td></tr>
              <tr><td>11</td><td>Merchant Kingdom</td><td>59.4%</td><td><strong>Official:</strong> trade with Distant Kingdoms 20 times.</td></tr>
              <tr><td>12</td><td>A City Rises</td><td>56.5%</td><td>Mid-game settlement growth.</td></tr>
              <tr><td>13</td><td>Standing Strong</td><td>54.4%</td><td>Defense milestone, likely siege survival.</td></tr>
              <tr><td>14</td><td>My Home and Castle</td><td>53.3%</td><td>Castle construction or upgrade.</td></tr>
              <tr><td>15</td><td>Ancient Evil</td><td>48.7%</td><td>Survive the end-game Ancient Evil plague that starts when you build the Keep (community mapping; API name ACH_SURVIVE_PLAGUE).</td></tr>
              <tr><td>16</td><td>We love it here!</td><td>43.9%</td><td><strong>Official:</strong> reach a happiness of 200%.</td></tr>
              <tr><td>17</td><td>A Kingdom is Born</td><td>43.6%</td><td>Coronation after defeating the Ashenholt army.</td></tr>
              <tr><td>18</td><td>Gentle Rule</td><td>42.5%</td><td><strong>Official:</strong> complete the game on Gentle difficulty.</td></tr>
              <tr><td>19</td><td>Master Builder</td><td>37.6%</td><td><strong>Official:</strong> fully upgrade your city.</td></tr>
              <tr><td>20</td><td>Steady Hands</td><td>33.0%</td><td><strong>Official:</strong> complete the game on Steady difficulty.</td></tr>
              <tr><td>21</td><td>Flawless Victory</td><td>13.3%</td><td><strong>Official:</strong> win the game without suffering any defeats.</td></tr>
              <tr><td>22</td><td>Rising Challenge</td><td>11.4%</td><td><strong>Official:</strong> complete the game on Challenging difficulty.</td></tr>
              <tr><td>23</td><td>Steadfast Resolve</td><td>5.2%</td><td><strong>Official:</strong> complete the game without ever trading with Ashenholt.</td></tr>
              <tr><td>24</td><td>Against the Odds</td><td>4.0%</td><td><strong>Official:</strong> complete the game on Intense difficulty.</td></tr>
            </tbody>
          </table>
        </div>

        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>About the missing descriptions:</strong> rows without an
            &ldquo;official&rdquo; tag have no public requirement text on
            Steam&apos;s pages. Their placement in the list tracks the natural
            progression order players report, but treat the wording above as
            community inference, not developer documentation.
          </p>
        </div>
      </section>

      <section>
        <h2 id="hardest">The rare ones &amp; how to plan them</h2>

        <h3>Against the Odds (4.0%) &mdash; Intense completion</h3>
        <p>
          Roughly one in twenty-five players finish the game on Intense. The
          dedicated discussion thread records a player who restarted 8&ndash;12
          times without surviving the first 15 minutes past the Town Guard
          unlock &mdash; though it is now clearly beatable: the developer has
          since posted his own opening strategy in that thread, and our{" "}
          <Link href="/difficulty/">difficulty guide</Link> breaks it down step
          by step alongside the{" "}
          <Link href="/combat/#raids">raid timing rules</Link>. On this mode,
          early guard duty is the wall, not the late game.
        </p>

        <h3>Steadfast Resolve (5.2%) &mdash; never trade with Ashenholt</h3>
        <p>
          This is a restraint achievement: complete the whole game while never
          sending a single shipment to Ashenholt. It pairs naturally with a
          normal economy elsewhere &mdash; just treat that one kingdom as
          off-limits from turn one and route all trade through the others using
          our <Link href="/trade/">trade guide</Link>. The 5.2% rate shows how
          easy it is to fire off one convenient shipment before remembering the
          restriction.
        </p>
        <p>
          One rule the official text leaves out, confirmed by the developer in
          the Steam thread: <strong>the tracker is per saved game.</strong> A
          shipment you sent to Ashenholt in an earlier playthrough does not
          poison a fresh save &mdash; &ldquo;It is per saved game,&rdquo;
          Phorust confirmed in August 2026, and the player who reported the
          problem verified a new run unlocked it. So if you slip up mid-run,
          the clean retry is a new save, not a hunt through old ones.
        </p>

        <h3>Flawless Victory (13.3%) &mdash; no defeats</h3>
        <p>
          Win without suffering any defeat, on any difficulty. Most players
          combine it with a Gentle or Steady run where threat timing is
          forgiving. The main risks are early skeleton raids before your guard
          scales and overlapping events (see{" "}
          <Link href="/combat/">combat</Link>) &mdash; keep a manual save before
          risky battles if a flawless run matters to you.
        </p>

        <h3>The difficulty ladder (42.5% / 33.0% / 11.4% / 4.0%)</h3>
        <p>
          Each mode-completion achievement requires finishing on that setting;
          the drop from Steady to Challenging (33.0% to 11.4%) is where runs
          start failing in bulk. Plan these as separate deliberate runs rather
          than hoping one save accumulates them. One telling detail in the
          September 3 rates: Flawless Victory (13.3%) still sits <em>above</em>{" "}
          Rising Challenge (11.4%), our read being that a chunk of players skip
          Challenging entirely and hunt no-defeat wins on easier modes instead
          &mdash; which is exactly the pairing strategy below. And once every
          tier is cleared, our{" "}
          <Link href="/similar-games/">similar games guide</Link> picks up
          where the save file ends.
        </p>
      </section>

      <section>
        <h2 id="synergies">Combining achievements in one run</h2>
        <p>
          Nothing in the official text forbids stacking, but three pairings are
          commonly planned together:
        </p>

        <ol>
          <li>
            <strong>Gentle Rule + Flawless Victory.</strong> The standard first
            pairing: learn the full game while threat pressure stays low, ending
            with two of the list&apos;s top-20 achievements in one save.
          </li>
          <li>
            <strong>Steadfast Resolve + Merchant Kingdom.</strong> Both are
            trade-driven: ban Ashenholt specifically while pushing every other
            kingdom hard toward 20 Distant Kingdoms shipments. One trade-heavy
            economy serves both goals at once.
          </li>
          <li>
            <strong>Master Builder + We love it here!</strong> A fully upgraded
            city with maxed services is also the natural path to 200% happiness,
            so chase both in the same late-game save rather than restarting for
            each.
          </li>
        </ol>

        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>One warning:</strong> do not stack Against the Odds with
            anything else until you have cleared Intense once. Every extra
            constraint multiplies restart count, and the thread evidence says
            restarts are already punishing on that mode.
          </p>
        </div>
      </section>

      <section>
        <h2 id="faq">Achievements FAQ</h2>
        <div className="faq">
          <details>
            <summary>How many achievements does Hearth and Hamlet have?</summary>
            <div className="faq__a"><p>
              24. The full list above is sorted by official global unlock rate,
              from Humble Beginning (98.5%) down to Against the Odds (4.0%).
            </p></div>
          </details>
          <details>
            <summary>Do achievements lock on lower difficulties?</summary>
            <div className="faq__a"><p>
              No. Only the four mode-completion achievements (Gentle Rule,
              Steady Hands, Rising Challenge, Against the Odds) require a
              specific difficulty, and every other achievement can be earned on
              any setting &mdash; including rule-based ones like Flawless
              Victory and Steadfast Resolve, which are about how you play rather
              than which mode you pick.
            </p></div>
          </details>
          <details>
            <summary>What is the rarest achievement?</summary>
            <div className="faq__a"><p>
              Against the Odds at 4.0% &mdash; complete the game on Intense.
              Steadfast Resolve (5.2%, never trade with Ashenholt) is the only
              other one below 10%. Community evidence so far suggests Intense&apos;s
              opening window after the Town Guard unlock is where most attempts
              die.
            </p></div>
          </details>
          <details>
            <summary>Can I get Flawless Victory and a mode achievement in the same run?</summary>
            <div className="faq__a"><p>
              Yes. Flawless Victory has no mode requirement, so the common plan
              is pairing it with Gentle Rule or Steady Hands for a two-in-one
              save. See our run-pairing suggestions above.
            </p></div>
          </details>
          <details>
            <summary>Does the Ashenholt quest bug affect achievements?</summary>
            <div className="faq__a"><p>
              Less than it used to. The developer-acknowledged auto-complete bug
              could record a false win in your quest log after a reload, and
              patch 1.0.06 (August 29, 2026) took another run at it &mdash; the
              developer says he has &ldquo;added in enough safeguards&rdquo; and
              fixed the related case where the Ashenholt army failed to spawn
              after a failed attempt. The practical advice stands anyway: save
              manually before activating that fight, because the bug was never
              reliably reproducible in testing and your save is the only
              rollback that is guaranteed to work.
            </p></div>
          </details>
          <details>
            <summary>Do I need to trade to 100% the game?</summary>
            <div className="faq__a"><p>
              You need trading for Merchant Kingdom (20 Distant Kingdoms
              shipments), and you must specifically never trade with Ashenholt
              for Steadfast Resolve. Those two can share one save &mdash; ship
              to every other kingdom while keeping Ashenholt embargoed, and
              both tally up together. And because the Steadfast tracker is per
              saved game (developer-confirmed), an accidental Ashenholt
              shipment only spoils the current save: a fresh playthrough gets a
              clean attempt at it.
            </p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
