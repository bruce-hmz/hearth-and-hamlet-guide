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
        <h2 id="overview">What kind of game is this?</h2>
        <p>
          The official Steam page describes Hearth and Hamlet as a{" "}
          <em>medieval citybuilder clicker</em> that blends resource
          management, in-depth upgrade trees, and relaxing idle gameplay. In
          practice that means you are doing two things at once: actively
          deciding what to build, research, and staff next, and letting the
          settlement keep producing while you plan. It is a single-player
          game, and it ships with 24 Steam achievements.
        </p>
        <p>
          The world is presented in pixel art — the official description
          highlights lakes, rivers, magical swamps, and faraway lands — and
          the building range runs from simple tents to taverns, castles,
          magical academies, and defensive fortifications. At the time of
          writing the game is listed at US$7.99 on Steam, supports Windows
          and SteamOS/Linux, and offers full audio and text in seven
          languages: English, Simplified and Traditional Chinese, German,
          Japanese, Russian, and Korean.
        </p>
        <p>
          Steam user reviews stood at <em>Mostly Positive</em> — about 79% of
          roughly 1,900 reviews — when this page was last reviewed. That is
          context rather than a quality claim; for a launch-window game the
          number will keep moving.
        </p>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>If you have played idle or incremental games:</strong>{" "}
            expect a similar low-pressure loop, but with citybuilder
            decisions — worker allocation, layout, and research order — doing
            the heavy lifting.
          </p>
        </div>
      </section>

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
            iron-production facilities before advancing the town square again — and
            recommends upgrading each of them <em>at least once</em>. According to
            his guide, those upgrades increase both the per-facility resource output
            and the resource storage capacity, so they pay twice.
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
        <h2 id="policies">Run your kingdom your way</h2>
        <p>
          Beyond construction and research, the official Steam page promotes a
          governance layer under the banner <q>run your kingdom your way</q>:
          you set laws and policies, including taxation rules and worker rules
          that affect morale, and you decide when to draft citizens into the
          city guard. These civic choices are permanent steering decisions for
          your realm rather than one-off toggles.
        </p>
        <ul>
          <li>
            <strong>Taxation rules</strong> raise income, but worker morale is
            part of the same system — push rates only when you have a concrete
            purchase in mind.
          </li>
          <li>
            <strong>Worker rules</strong> influence how your population feels
            about their jobs; morale and output interact.
          </li>
          <li>
            <strong>City guard drafts</strong> convert civilians into
            protection for an expanding realm; the official description
            confirms soldiers exist to defend it.
          </li>
        </ul>
        <p>
          The exact morale math is not published in the official material, so
          change one policy at a time and read the in-game feedback before
          committing further. Our{" "}
          <a href="/tips/">tips page</a> covers the happiness-versus-taxes
          trade-off in more detail, and the{" "}
          <a href="/tech-tree/">tech tree guide</a> shows where policies sit in
          the research order.
        </p>
      </section>

      <section>
        <h2 id="post-game">After the coronation: what the ending means</h2>
        <p>
          The road from Campfire to Kingdom ends with your settlement&apos;s
          coronation as a monarchy. That is the designed conclusion of the
          campaign, not a stage you missed or a status you accidentally
          triggered - and when players asked directly what the game offers
          after it, the developer was candid. In the Steam thread{" "}
          <em>Fun Once, Lack of Replayability</em>, Phorust replied:{" "}
          <q>
            Yes, I designed the game to be (mostly) a single playthrough
            experience and tried to price it appropriately.
          </q>
        </p>
        <p>
          No expansion has been announced, and when a player asked directly
          about new content on the game&apos;s Steam hub (the thread{" "}
          <em>Any new content is planned?</em>), the developer answered on
          September 6, 2026: the plan is to work through the small issues and
          improvements the community has highlighted first &mdash;{" "}
          &ldquo;The past week or so has been spent purely on reducing the
          games VRAM footprint&rdquo; &mdash; and &ldquo;I intend to continue
          poshing [polishing] for some time. After that i&apos;d love to add
          more content.&rdquo; Things are moving slower now that he is back at
          his day job (Teacher), he noted, though he still fits in several
          hours of work each day. So more content is hoped for, not promised
          &mdash; and the honest answer to &ldquo;what is next?&rdquo; is
          still the rest of the same save. The difficulty ladder is
          the biggest lever: our{" "}
          <a href="/difficulty/">difficulty guide</a> compares all four modes
          and carries the developer&apos;s own Intense opening plan. The
          rule-based achievements come second - no-defeat runs and never
          trading with Ashenholt turn one completed kingdom into several
          planned reruns, and the{" "}
          <a href="/achievements/">achievements guide</a> maps which rules can
          share a single save. And once a save is truly finished, our{" "}
          <a href="/similar-games/">games-like-Hearth-and-Hamlet page</a> picks
          up where the coronation leaves off.
        </p>
      </section>

      <section>
        <h2 id="faq">FAQ</h2>
        <div className="faq">
          <details>
            <summary>Why does my settlement become a monarchy?</summary>
            <div className="faq__a">
              <p>
                Because that is where the campaign is meant to take you. Your
                settlement advances through the Campfire, Village, Town, and
                Kingdom stages toward the story&apos;s coronation, and the
                developer has described the game as a mostly single-playthrough
                experience - reaching the monarchy is the ending, not a
                penalty or a setting you tripped into. What follows is endgame
                cleanup rather than new story: difficulty completions and
                rule-based achievements, as covered in the{" "}
                <a href="/difficulty/">difficulty</a> and{" "}
                <a href="/achievements/">achievements</a> guides.
              </p>
            </div>
          </details>
          <details>
            <summary>Is Hearth and Hamlet an idle game?</summary>
            <div className="faq__a">
              <p>
                It blends both. The official description pairs resource
                management and upgrade trees with relaxing idle gameplay, so
                production continues while you plan, but worker allocation and
                research decisions reward active attention.
              </p>
            </div>
          </details>
          <details>
            <summary>How much does Hearth and Hamlet cost?</summary>
            <div className="faq__a">
              <p>
                The game is listed at US$7.99 on Steam at the time of writing.
                Check the store page for current pricing and any regional
                differences.
              </p>
            </div>
          </details>
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
