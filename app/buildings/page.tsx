import Link from "next/link";
import { GuideArticle } from "@/components/guide-article";
import { GameFigure } from "@/components/game-media";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

export const metadata = guideMetadata("buildings");

const page = GUIDE_PAGES.buildings;

export default function BuildingsPage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="production">Production and economic buildings</h2>
        <p>
          Hearth and Hamlet begins with gathering resources, assigning workers, and constructing
          buildings. Its economy then broadens through research, policies, and{" "}
          <Link href="/trade/">trade with distant kingdoms</Link>. Think of each economic building
          as part of a chain: it needs a purpose, enough workers, and demand for what it enables
          before it deserves scarce settlement space.
        </p>
        <p>
          The official store page promises a deep building system, but it does not publish a
          complete directory of construction costs, worker slots, or production rates. The table
          below therefore lists only officially named examples and their broad, documented roles.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Officially named examples — exact costs and tiers require in-game verification</caption>
            <thead>
              <tr>
                <th scope="col">Building or structure</th>
                <th scope="col">Verified role</th>
                <th scope="col">Planning implication</th>
                <th scope="col">Still to verify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tent</td>
                <td>Represents the settlement&apos;s simple starting stage</td>
                <td>Keep early shelter compact while reserving room for growth</td>
                <td>Exact cost, capacity, and upgrade path</td>
              </tr>
              <tr>
                <td>Tavern</td>
                <td>Provides food and entertainment for the population</td>
                <td>Place it where the community-service area can expand</td>
                <td>Exact effects, staffing, cost, and unlock</td>
              </tr>
              <tr>
                <td>Castle</td>
                <td>A named example of the building system&apos;s advanced end</td>
                <td>Reserve a larger late-game site before the core becomes crowded</td>
                <td>Footprint, requirements, stats, and tier</td>
              </tr>
              <tr>
                <td>Magical academy</td>
                <td>Supports the game&apos;s magical progression</td>
                <td>Keep expansion space near other research or specialist functions</td>
                <td>Spells, costs, staffing, and prerequisites</td>
              </tr>
              <tr>
                <td>Defensive fortification</td>
                <td>Protects the kingdom against external threats</td>
                <td>Plan space along exposed settlement edges</td>
                <td>Types, durability, repair costs, and unlock order</td>
              </tr>
            </tbody>
          </table>
        </div>
        {page.sectionMedia?.production && (
          <GameFigure
            className="article-figure"
            src={page.sectionMedia.production.src}
            alt={page.sectionMedia.production.alt}
            caption={page.sectionMedia.production.caption}
          />
        )}
      </section>

      <section>
        <h2 id="storage">Storage and the gold cap</h2>
        <p>
          Storage is not one building - it is a stat that several upgrades feed, which is why
          it is easy to assume you have maxed it when one more upgrade is still waiting. The
          clearest real example comes from a Steam thread titled{" "}
          <em>Broken task is to pay 40,000 gold</em>: a player reached the quest that demands
          40,000 gold for Ashenholt&apos;s soldiers while their storage cap sat at 25,250, with
          no further upgrades visibly offered. Replies converged on three levers:
        </p>
        <ul>
          <li><strong>The manor upgrade:</strong> upgrading the manor grants gold storage. One player&apos;s simple diagnostic in that thread: &quot;Have you upgraded the manor? It gives you gold storage if you do.&quot;</li>
          <li><strong>Upgrade-added internal storage:</strong> another player cleared the same 40,000-gold quest twice using internal storage gained through building upgrades rather than any single treasury structure.</li>
          <li><strong>The library economy:</strong> building upgrades hinge on blueprints, and green blueprints are bought at the library. If an upgrade seems unavailable, the usual suspects are library level, story-gated tasks, or research you have not bought yet.</li>
        </ul>
        <p>
          A third player put the expected ceiling in numbers: by the point the 40,000-gold task
          appears, your cap should be pushable to roughly <strong>45,000-50,000</strong>. If
          yours stalls near 25,000 and no upgrade lights up anywhere, that gap is the tell -
          something is not applying. And occasionally it genuinely is not you: this exact
          thread ended with the player discovering their +15,000 storage upgrade had silently
          failed to apply, a bug they resolved with help on the game&apos;s Discord after the
          version 1.0.03 fix did not cover their older save. Developer Phorust also replied in
          the thread offering to inspect saves personally, so the studio treats stuck storage
          as a support case, not a dead end.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Community-reported gold storage checks before paying a quest above your cap</caption>
            <thead>
              <tr>
                <th scope="col">Check</th>
                <th scope="col">What to look for</th>
                <th scope="col">Evidence status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manor level</td>
                <td>An available manor upgrade; it raises gold storage</td>
                <td>Player-confirmed in the Steam thread</td>
              </tr>
              <tr>
                <td>Building upgrades with internal storage</td>
                <td>Any pending upgrade that adds storage as a side effect</td>
                <td>Player-confirmed (cleared the 40k quest twice this way)</td>
              </tr>
              <tr>
                <td>Library blueprints</td>
                <td>Green blueprints purchasable; library tier high enough to open its shop</td>
                <td>Player-confirmed; gated by library level and story tasks</td>
              </tr>
              <tr>
                <td>Expected cap at mid-game</td>
                <td>Roughly 45,000-50,000 by the time the 40k task arrives</td>
                <td>Single-player estimate - treat as a rough benchmark</td>
              </tr>
              <tr>
                <td>A silent failed upgrade</td>
                <td>Cap far below expectations with no upgrades offered</td>
                <td>Confirmed bug case fixed via Discord save repair</td>
              </tr>
              <tr>
                <td>Still short?</td>
                <td>Trade profits can land above the cap - see our <a href="/trade/">trade guide</a></td>
                <td>Player-confirmed workaround</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Evidence boundary:</strong> exact storage values per manor or blueprint
            tier are not officially documented, and none of these numbers have been re-tested
            on the current patch. Treat the path as reliable and the figures as community
            estimates until verified in-game.
          </p>
        </div>
      </section>

      <section>
        <h2 id="housing">Housing and services</h2>
        <p>
          The officially described progression from simple tents to taverns shows that growth is
          more than raw production. A settlement also develops places to live and community
          services. Taverns are specifically described as providing food and entertainment;
          beyond that, exact numerical effects should be read from the current in-game panel.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Housing and service planning without unverified stats</caption>
            <thead>
              <tr>
                <th scope="col">Need</th>
                <th scope="col">Official example</th>
                <th scope="col">What to check in game</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Early shelter</td>
                <td>Tents</td>
                <td>Capacity, construction cost, worker impact, and replacement options</td>
              </tr>
              <tr>
                <td>Food and entertainment</td>
                <td>Taverns</td>
                <td>Service effect, staffing, operating input, range, and unlock condition</td>
              </tr>
              <tr>
                <td>Population support</td>
                <td>No complete official list published</td>
                <td>Which live need is limiting growth before adding another structure</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Expand this part of town in response to an observed need. Check the population and
          worker state, then add the structure that addresses that state. Building every unlocked
          service immediately can consume resources and labor needed by a more urgent chain.
        </p>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Before constructing:</strong> identify the current bottleneck, confirm that
            you can staff the new function, and check its live tooltip. An impressive unlock does
            not automatically solve the settlement&apos;s immediate problem.
          </p>
        </div>
      </section>

      <section>
        <h2 id="wonder">Advanced and late-game structures</h2>
        <p>
          Castles, magical academies, and defensive fortifications mark the advanced end of the
          officially advertised building range. They sit inside a broader kingdom layer that also
          includes policies, research, trade, magic, and defense. Plan for these systems as a set:
          an unlock may require new resources, worker assignments, or protected space elsewhere in
          the settlement.
        </p>
        <ul>
          <li><strong>Castle:</strong> treat it as a major progression landmark and verify its live footprint and prerequisites before clearing land.</li>
          <li><strong>Magical academy:</strong> connect it conceptually with research and magical progression; do not assume specific spells or bonuses before checking the game.</li>
          <li><strong>Defensive fortifications:</strong> reserve useful perimeter space and review threats before investing, while verifying each structure&apos;s current stats. Walls buy time; the recruit-soldiers economy on our <Link href="/combat/">combat guide</Link> page explains what actually fights back.</li>
          <li><strong>Trade infrastructure:</strong> the game supports <Link href="/trade/">trade routes</Link> with distant kingdoms, but the official page does not provide a complete named building list or route economy table.</li>
        </ul>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Accuracy note:</strong> this is a verified examples guide, not a fabricated
            full database. Costs, output rates, worker slots, radii, hit points, and formal tiers
            should be added only after they are observed in the current game version.
          </p>
        </div>
      </section>

      <section>
        <h2 id="faq">Buildings FAQ</h2>
        <div className="faq">
          <details>
            <summary>Is this every building in Hearth and Hamlet?</summary>
            <div className="faq__a"><p>No. It covers examples explicitly named in the official description: tents, taverns, castles, magical academies, and defensive fortifications. A complete list needs direct verification in the current game build.</p></div>
          </details>
          <details>
            <summary>Which building should I construct next?</summary>
            <div className="faq__a"><p>Build for the bottleneck you can observe. Check resource supply, worker availability, population services, current research, and defense needs, then read the prospective building&apos;s live cost and effect before committing.</p></div>
          </details>
          <details>
            <summary>My quest needs more gold than I can store - what do I do?</summary>
            <div className="faq__a"><p>
              First sweep the storage checklist in our storage section: an un-upgraded manor,
              blueprint-gated building upgrades with internal storage, and library purchases.
              Players report a mid-game cap around 45,000-50,000 is reachable before the
              40,000-gold task, so a cap stuck near 25,000 usually means an upgrade has not
              applied. Trade income can also land above the cap, and if nothing works, the
              developer actively helps players with save issues - including one confirmed case
              of a storage upgrade silently failing on an older save.
            </p></div>
          </details>
          <details>
            <summary>How do I increase my gold storage cap?</summary>
            <div className="faq__a"><p>
              Through upgrades rather than a single treasury structure: the manor upgrade adds
              gold storage, other building upgrades contribute internal storage, and those
              upgrades are unlocked with green blueprints bought at the library. Exact numbers
              per tier have not been officially documented, so verify against your own panels.
            </p></div>
          </details>
          <details>
            <summary>What are the exact building costs and production rates?</summary>
            <div className="faq__a"><p>The official store description does not publish a full numerical table. Costs, rates, staffing, range, and unlock requirements may also change with balance updates, so verify them in the current version rather than relying on invented or stale values.</p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
