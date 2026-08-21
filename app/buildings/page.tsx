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
          buildings. Its economy then broadens through research, policies, and trade with distant
          kingdoms. Think of each economic building as part of a chain: it needs a purpose, enough
          workers, and demand for what it enables before it deserves scarce settlement space.
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
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Before constructing:</strong> identify the current bottleneck, confirm that
            you can staff the new function, and check its live tooltip. An impressive unlock does
            not automatically solve the settlement&apos;s immediate problem.
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
          <li><strong>Defensive fortifications:</strong> reserve useful perimeter space and review threats before investing, while verifying each structure&apos;s current stats.</li>
          <li><strong>Trade infrastructure:</strong> the game supports trade routes with distant kingdoms, but the official page does not provide a complete named building list or route economy table.</li>
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
            <summary>What are the exact building costs and production rates?</summary>
            <div className="faq__a"><p>The official store description does not publish a full numerical table. Costs, rates, staffing, range, and unlock requirements may also change with balance updates, so verify them in the current version rather than relying on invented or stale values.</p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
