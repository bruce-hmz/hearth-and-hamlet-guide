import { GameFigure } from "@/components/game-media";
import { GuideArticle } from "@/components/guide-article";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

export const metadata = guideMetadata("guide");

const page = GUIDE_PAGES.guide;
const intoIndieGuide =
  "https://intoindiegames.com/tips-and-guides/hearth-and-hamlet-best-early-game-tips-and-tricks/";

export default function GuidePage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="stages">The four kingdom stages</h2>
        <p>
          Hearth and Hamlet begins at a campfire and grows toward a full kingdom.
          The progression path is organized around four settlement stages: Campfire,
          Village, Town, and Kingdom. Treat each stage as a signal to strengthen the
          economy you already have, rather than a reason to expand immediately.
        </p>
        <ol>
          <li>
            <strong>Campfire:</strong> establish the first gathering jobs and follow
            the game&apos;s early direction prompts.
          </li>
          <li>
            <strong>Village:</strong> add workers and production without letting one
            material fall far behind the others.
          </li>
          <li>
            <strong>Town:</strong> research, laws, policies, and defense begin to
            matter alongside raw expansion.
          </li>
          <li>
            <strong>Kingdom:</strong> combine advanced buildings, trade, magic, and
            soldiers into a settlement that can support itself.
          </li>
        </ol>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Progression rule:</strong> a stage upgrade is most useful after
            your current food and construction-material production can support the
            buildings it unlocks.
          </p>
        </div>
        {page.sectionMedia?.stages && (
          <GameFigure
            className="article-figure"
            src={page.sectionMedia.stages.src}
            alt={page.sectionMedia.stages.alt}
            caption={page.sectionMedia.stages.caption}
          />
        )}
      </section>

      <section>
        <h2 id="resources">Core resources explained</h2>
        <p>
          The official Steam description identifies food, wood, stone, and gold as
          resources your population can gather. Iron also appears in early production
          planning in Muhammad Haris Umer&apos;s Into Indie Games walkthrough. Because
          unlocks and demand change as the settlement grows, the useful question is
          not which resource is universally best, but which one is currently blocking
          your next building, upgrade, or policy.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Early-economy resource roles</caption>
            <thead>
              <tr>
                <th scope="col">Resource</th>
                <th scope="col">Evidence</th>
                <th scope="col">How to plan around it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food</td>
                <td>Named on the official Steam page</td>
                <td>Keep production active while population and worker demand grow.</td>
              </tr>
              <tr>
                <td>Wood</td>
                <td>Named on the official Steam page</td>
                <td>Maintain a share of labor for routine construction and upgrades.</td>
              </tr>
              <tr>
                <td>Stone</td>
                <td>Named on the official Steam page</td>
                <td>Watch for it becoming the bottleneck on larger structures.</td>
              </tr>
              <tr>
                <td>Gold</td>
                <td>Named on the official Steam page</td>
                <td>Review income alongside laws, policies, and later trade.</td>
              </tr>
              <tr>
                <td>Iron</td>
                <td>Included in Umer&apos;s early-game worker advice</td>
                <td>Staff its production when the relevant facilities become available.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="workers">Worker allocation basics</h2>
        <p>
          Umer recommends using an even split across food, wood, stone, and iron as an
          early baseline. That is a third-party strategy, not an official formula, but
          it is a simple way to prevent one production chain from being forgotten.
        </p>
        <p>
          The same guide recommends abandoning that balance temporarily when one
          resource is holding up a structure or settlement upgrade: move labor toward
          the shortage, complete the immediate goal, and then restore a broader split.
          This makes worker allocation a control you revisit, not a one-time setup.
        </p>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Practical loop:</strong> identify the blocked purchase, concentrate
            workers on its missing material, buy it, then rebalance before the next
            shortage develops.
          </p>
        </div>
      </section>

      <section>
        <h2 id="opening">Opening moves</h2>
        <p>
          The opening sequence below follows the recommendations published by
          Muhammad Haris Umer for Into Indie Games. It is a useful starting route, but
          it should be adapted to what your current save is short of.
        </p>
        <ol>
          <li>
            <strong>Follow the blue Guiding Arrow.</strong> Umer says it points toward
            the structures and facilities needed to get the first production chains
            running.
          </li>
          <li>
            <strong>Start from a balanced workforce.</strong> Spread workers across
            food, wood, stone, and iron, then focus them on a single shortage when a
            planned build is blocked.
          </li>
          <li>
            <strong>Prioritize research.</strong> The official page confirms that
            research permanently unlocks buildings, upgrades, policies, and magic;
            Umer recommends investing in it early instead of rushing isolated building
            upgrades.
          </li>
          <li>
            <strong>Upgrade resource structures before the next settlement level.</strong>
            Umer specifically recommends improving the fishing, lumber, quarry, and
            iron-production facilities before advancing the town square again.
          </li>
          <li>
            <strong>Prepare a defense.</strong> Once the Town Guards building is
            unlocked, Umer recommends training soldiers rather than postponing defense
            indefinitely. The official description confirms soldiers are used to
            protect the expanding realm.
          </li>
        </ol>
        <p>
          Read the original advice in the{" "}
          <a href={intoIndieGuide} target="_blank" rel="noopener noreferrer">
            Into Indie Games early-game guide
          </a>.
        </p>
      </section>

      <section>
        <h2 id="faq">FAQ</h2>
        <div className="faq">
          <details>
            <summary>What should I do first in Hearth and Hamlet?</summary>
            <div className="faq__a">
              <p>
                Follow the blue Guiding Arrow and establish the production buildings
                it highlights. This is Umer&apos;s recommended opening route, not a forced
                objective order.
              </p>
            </div>
          </details>
          <details>
            <summary>Which resources are confirmed in the game?</summary>
            <div className="faq__a">
              <p>
                The official Steam page names food, wood, stone, and gold. Umer&apos;s
                guide also discusses iron production in the early economy.
              </p>
            </div>
          </details>
          <details>
            <summary>Should workers always be split evenly?</summary>
            <div className="faq__a">
              <p>
                No. An even split is a third-party baseline. When one material blocks
                your next upgrade, concentrate workers there temporarily and rebalance
                after the purchase.
              </p>
            </div>
          </details>
          <details>
            <summary>Should I research or upgrade buildings first?</summary>
            <div className="faq__a">
              <p>
                Research creates permanent unlocks, so it should remain active. Umer&apos;s
                route also upgrades the main resource structures before advancing the
                town square; the exact order depends on the shortage in your save.
              </p>
            </div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
