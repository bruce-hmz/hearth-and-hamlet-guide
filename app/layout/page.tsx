import Link from "next/link";
import { GuideArticle } from "@/components/guide-article";
import { GameFigure } from "@/components/game-media";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

export const metadata = guideMetadata("layout");

const page = GUIDE_PAGES.layout;

export default function LayoutPage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="how-it-works">The layout is predetermined</h2>
        <p>
          If you have been holding off on construction because you want to plan the perfect
          city first, you can stop. Developer Phorust answered the question directly in the
          game&apos;s Steam forum: <strong>&quot;The city layout is completely predetermined.
          Think of it as assembling a pre-designed diorama.&quot;</strong> Where a building
          goes is fixed. What changes is when you build and upgrade it.
        </p>
        <p>
          The same reply frames the whole game around that choice — Hearth and Hamlet is
          intentionally &quot;a more relaxing incremental approach&quot; and &quot;not a true
          city builder.&quot; Phorust&apos;s own shorthand: think of it as &quot;Medieval
          Cookie Clicker, with more depth, story and atmosphere.&quot; In practice, that means
          the skills covered elsewhere on this site — <Link href="/tips">early-game worker
          balance</Link>, <Link href="/trade">trade routes</Link>, and research priorities —
          matter far more than any placement trick.
        </p>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>What this changes:</strong> layout advice about reserving expansion space
            or choosing between city grids does not apply here. A pre-designed diorama gives
            you no free tiles to plan with, so the remaining decisions are build order,
            upgrade order, and how you route your attention across the fixed districts.
          </p>
        </div>
      </section>

      <section>
        <h2 id="terrain">What terrain does</h2>
        <p>
          Terrain has at least one verified mechanical effect, which the official store
          page&apos;s list of <strong>lakes, rivers, and magical swamps</strong> only hints
          at. In the Steam thread <em>Where to increase magic-s storage</em>, a player stuck
          below the witches hut&apos;s 40,000-magic requirement got a two-part answer:
        </p>
        <ul>
          <li>
            <strong>Trade past the cap first.</strong> &quot;You can trade for over your
            storage limit. You just can&apos;t manually produce over your limit&quot; — so
            sending caravans or ships to buy magic is the intended way to reach 40,000 while
            manual production stays capped.
          </li>
          <li>
            <strong>The swamp building raises the cap later.</strong> The same reply notes it
            increases your magic storage limit &quot;but that&apos;s after you need
            40k&quot; — a late-game multiplier on top of the quest, not the way through it.
          </li>
        </ul>
        <p>
          Water still matters for reading the map — rivers and the waterfall district are the
          strongest visual boundary between zones — but treat any further terrain effect
          (adjacency, production, movement) as unverified until it is documented or tested.
        </p>
      </section>

      <section>
        <h2 id="order">Building order in a fixed map</h2>
        <p>
          With placement off the table, progress runs on a loop the community describes
          consistently: <strong>build what you currently can, upgrade everything you can,
          then repeat</strong> when the next round becomes affordable. The layout page of
          your run is really an ordering page — these are the decision points that matter:
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Decision points on a predetermined map — what to do before paying</caption>
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">What to do</th>
                <th scope="col">Why it works</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A quest demands far more than your cap (40,000 magic or gold)</td>
                <td>Buy the difference through trade instead of waiting on production</td>
                <td>Trade income can exceed the storage cap; manual production cannot</td>
              </tr>
              <tr>
                <td>An upgrade looks locked (blue/expert blueprints)</td>
                <td>Follow the main questline — the library upgrades into the school</td>
                <td>Expert blueprints unlock at the school, per the same storage thread</td>
              </tr>
              <tr>
                <td>Every affordable build and upgrade is done</td>
                <td>Move to the next round of story tasks rather than re-planning the map</td>
                <td>Progression is linear by design: build, upgrade, repeat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Two of those levers have their own guides: the <Link href="/buildings">buildings
          guide</Link> covers how storage upgrades and blueprints actually apply (including
          what to check when an upgrade silently fails), and the <Link href="/trade">trade
          guide</Link> covers routes and priorities for the caps that matter.
        </p>
      </section>

      <section>
        <h2 id="districts">Reading the districts</h2>
        <p>
          The fixed map is still organized into readable zones — production near resources,
          housing around the hearth, civic and magical buildings along their own strip. Since
          you cannot rearrange them, the useful skill is navigating them fast:
        </p>
        <ul>
          <li>
            <strong>Let water be your map key.</strong> Rivers and the waterfall district are
            the most reliable landmarks when you are jumping between tasks across town.
          </li>
          <li>
            <strong>Group your attention, not your buildings.</strong> Clear one
            district&apos;s build queue before moving on instead of zig-zagging between
            upgrades on opposite edges of the map.
          </li>
          <li>
            <strong>Know where the late-game strip lives.</strong> Magic (the witches hut,
            then the swamp building) and expert blueprints (the school) arrive on a schedule;
            remembering which district they land in keeps mid-game upgrades smooth.
          </li>
        </ul>
        {page.sectionMedia?.districts && (
          <GameFigure
            className="article-figure"
            src={page.sectionMedia.districts.src}
            alt={page.sectionMedia.districts.alt}
            caption={page.sectionMedia.districts.caption}
          />
        )}
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>The map never changes — only your command of it does.</strong> Once you
            know which district holds the current bottleneck, the only thing left to optimize
            is the order you visit them in.
          </p>
        </div>
      </section>

      <section>
        <h2 id="faq">Layout FAQ</h2>
        <div className="faq">
          <details>
            <summary>Is there one best Hearth and Hamlet layout?</summary>
            <div className="faq__a"><p>No — and the question does not quite apply. Developer Phorust confirmed the city layout is completely predetermined, so there is nothing to optimize about placement. The meaningful choices are build order, upgrade order, and trade-versus-production strategy.</p></div>
          </details>
          <details>
            <summary>Does the City Hall give a radial adjacency bonus?</summary>
            <div className="faq__a"><p>No such formula has ever been documented, and with a predetermined map it is hard to see how one would work. Treat any City Hall radius claim as unverified.</p></div>
          </details>
          <details>
            <summary>Does terrain matter for the layout?</summary>
            <div className="faq__a"><p>Yes, mechanically. The swamp building raises your magic storage cap — but only after the 40,000-magic quest, which you are meant to clear by trading past the cap. No other terrain bonus is documented yet.</p></div>
          </details>
          <details>
            <summary>Can combat be turned off?</summary>
            <div className="faq__a"><p>No, but it can be tuned to trivial. The developer states the difficulty options &quot;almost entirely control the enemy strength and cost of maintaining soldiers,&quot; so <Link href="/difficulty">difficulty settings</Link> — not wall placement — are your defensive lever.</p></div>
          </details>
          <details>
            <summary>I need more of a resource than my cap allows. Should I keep producing?</summary>
            <div className="faq__a"><p>No. Manual production cannot exceed the storage limit, but trade can. Send caravans or ships to buy the resource instead of idling at the cap — that is the verified path through the 40,000-magic quest, and it works the same for gold (see the <Link href="/buildings">storage checks</Link> before a big payment).</p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
