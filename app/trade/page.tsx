import Link from "next/link";
import { GuideArticle } from "@/components/guide-article";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

export const metadata = guideMetadata("trade");

const page = GUIDE_PAGES.trade;

export default function TradePage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="overview">How trade works</h2>
        <p>
          Trading runs through the Shipwright&apos;s <strong>Expedition</strong> menu rather than
          a market building. You assemble each run piece by piece: pick a transport method
          (Caravan or Ship), choose a destination kingdom, select which of the six goods -
          Food, Wood, Stone, Iron, Gold, Magic - you are buying or selling, then adjust quality
          and caravan size before confirming. The cost box stays empty until a loadout is
          complete (&quot;Select options to see cost&quot;), so a route&apos;s true price is
          revealed inside the panel, not from an external price sheet.
        </p>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Read before you send:</strong> because costs only display once options are
            selected, toggling one choice at a time is the fastest way to learn what each leg of
            a route actually charges.
          </p>
        </div>
        <p>
          Trade also depends on production. Every crate you ship out is a good your workers
          gathered first, so if labor allocation is still unstable, fix that baseline before
          diverting output into expeditions - our{" "}
          <a href="/tips/">tips and tricks guide</a> walks the starting split.
        </p>
      </section>

      <section>
        <h2 id="destinations">Destinations &amp; transport</h2>
        <p>
          The destination map in the current release build shows four kingdoms -{" "}
          <strong>Ironrend</strong>, <strong>Crimsonvale</strong>, <strong>Rubescairn</strong>,
          and <strong>Ankhet-Nar</strong> - each reachable by Caravan or Ship. Transport choice
          feeds into the expedition cost shown in the panel, though the exact numbers depend on
          the full loadout you have selected.
        </p>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Does distance matter?</strong> The developer answered this
            directly in the Steam trade thread: &ldquo;Profits don&apos;t
            directly change by distance; it just takes longer,&rdquo; adding
            that shorter trips still win on economics because &ldquo;the less
            travel time, the less supplies and wages you need.&rdquo; Pick
            routes for the demand tags first, and treat travel time as a
            supply-and-wage surtax rather than a price modifier.
          </p>
        </div>
        <p>
          One boundary still holds: no official source publishes per-route
          price tables or caravan-versus-ship efficiency numbers. The base
          values below and the live cost readout are what we have; treat any
          fixed route-by-route profit table you find online as stale or
          invented until it can be reproduced in the current build.
        </p>
      </section>

      <section>
        <h2 id="demand">Reading demand tiers</h2>
        <p>
          Every destination carries a color-coded demand tag for each good. The labels below
          were read directly from the in-game legend, so they are the terms the interface itself
          uses:
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>In-game demand labels with the community&apos;s working interpretation</caption>
            <thead>
              <tr>
                <th scope="col">Legend label</th>
                <th scope="col">Visual cue</th>
                <th scope="col">How players read it</th>
                <th scope="col">Suggested stance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High Demand</td>
                <td>Bright green</td>
                <td>&quot;Very high&quot; in forum shorthand - the best price band</td>
                <td>Prime target: sell here first</td>
              </tr>
              <tr>
                <td>Increased Demand</td>
                <td>Green</td>
                <td>Mildly favorable market</td>
                <td>Reasonable secondary sell target</td>
              </tr>
              <tr>
                <td>Normal Demand</td>
                <td>White / neutral</td>
                <td>Baseline pricing</td>
                <td>Skip - margins rarely justify the trip</td>
              </tr>
              <tr>
                <td>Reduced Demand</td>
                <td>Red</td>
                <td>&quot;Low&quot; - weakest market</td>
                <td>Avoid selling; consider buying here instead</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Whether further tiers exist above High Demand has not been documented
          publicly. Why the same tag can pay differently between goods is now
          partly explained, though: the developer confirmed hidden per-good
          base values (basics at 1, Iron at 1.5) sit underneath the demand
          system. Judge each route by its legend tag plus the live cost readout
          rather than by memorized numbers.
        </p>
      </section>

      <section>
        <h2 id="timing">When a trade is worth it</h2>
        <p>
          The community&apos;s filter for when a trade is worth sending is now
          developer-confirmed. Asked about it in the Steam &quot;Tips for
          trade?&quot; thread, Phorust replied: &ldquo;Yeah, you are all
          correct. The highest trade profits will be made when you: sell things
          in high demand, buy things in low demand.&rdquo; He added that
          off-tier trades still turn a profit, &ldquo;just a lot less,&rdquo; so
          a marginal route is a slow path to income rather than a mistake.
        </p>
        <ul>
          <li><strong>The rule, confirmed:</strong> &ldquo;normal or low demand, don&apos;t go for it - high and very high demand, go for it&rdquo; - and the developer endorsed exactly this reading.</li>
          <li><strong>Goods have hidden base values:</strong> per the developer, &ldquo;wood, stone, food = 1, Iron = 1.5, etc. These are hidden variables, but they also play a role.&rdquo; Iron shipments are worth structurally more than the same stack size of basics.</li>
          <li><strong>Like-for-like trades can profit:</strong> the developer confirms selling Food and buying Food in the same trip earns a small margin if your goods are higher quality - &ldquo;like trading Wheat for Corn.&rdquo;</li>
          <li><strong>Demand decays after you sell:</strong> players observe that each completed sale drops that good&apos;s local demand by one tier, so dumping the same cargo into the same kingdom twice yields less the second time. One exception reported in the thread: food demand from the warring states stays High no matter how many times you feed them.</li>
          <li><strong>Rotate targets:</strong> spread sales across goods and kingdoms so at least one high-demand lane is always open.</li>
        </ul>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>What&apos;s official vs observed:</strong> the
            sell-high/buy-low rule, the hidden base values, and like-for-like
            trades are developer statements from August 2026. The one-tier
            demand decay and the warring-states food exception come from the
            same thread&apos;s players - watch the tags in your own save and
            trust what they show.
          </p>
        </div>
      </section>

      <section>
        <h2 id="gold-cap">Trading past the gold cap</h2>
        <p>
          A practical quirk surfaced in Steam discussions: <strong>a completed trade can push
          your gold above the normal storage ceiling.</strong> Players ran into it while
          diagnosing gold-related task bugs and found that trade income landed regardless of the
          cap that otherwise clamps deposits. If a milestone wants more gold than your treasury
          can hold, routing it in through a sale is the community&apos;s go-to workaround.
        </p>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Treat it as opportunistic:</strong> this overflow behavior is a
            player-discovered workaround, not a documented feature, and a future patch could
            close it. Confirm it still works in your build before relying on it for a timed goal.
          </p>
        </div>
        <p>
          Hitting the cap from the other direction - storage too small for a quest payment - is
          a progression problem with its own checklist. The{" "}
          <a href="/buildings/">buildings guide</a> covers the manor, blueprint, and library
          upgrades that raise it, plus the rare bug that makes an upgrade silently fail.
        </p>
      </section>

      <section>
        <h2 id="achievements">Two achievements revolve around trade</h2>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Steam achievements involving trade (unlock rates as of September 3, 2026)</caption>
            <thead>
              <tr>
                <th scope="col">Achievement</th>
                <th scope="col">Requirement</th>
                <th scope="col">Global unlock rate</th>
                <th scope="col">Planning takeaway</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Merchant Kingdom</td>
                <td>Trade with Distant Kingdoms 20 times</td>
                <td>59.4%</td>
                <td>Lands naturally if you keep sending regular expeditions</td>
              </tr>
              <tr>
                <td>Steadfast Resolve</td>
                <td>Complete the game without ever trading with Ashenholt</td>
                <td>5.2%</td>
                <td>Among the rarest achievements globally - commit to closed routes early</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          More than half of all players have earned Merchant Kingdom, which tells you routine trading is
          nearly unavoidable. The flip side is Steadfast Resolve at 5.2%: almost everyone who
          finishes the game touches Ashenholt at least once. If you want the rare one, decide at
          the start of the save that those routes stay shut - the condition spans the entire
          game, and one hurried expedition quietly ends the attempt. There is mercy in the
          rule, though: the developer confirmed the tracker is per saved game, so a spoiled
          attempt only costs the current playthrough, not your account. Our{" "}
          <a href="/achievements/">achievements guide</a> has the full ruling and run pairings.
        </p>
      </section>

      <section>
        <h2 id="faq">Trade FAQ</h2>
        <div className="faq">
          <details>
            <summary>How do I trade for magic?</summary>
            <div className="faq__a"><p>
              Through an expedition, not the research panel - and that is the
              trap. The quest that asks you to acquire magic by trading sends
              you to the Shipwright: start a trade expedition and use the{" "}
              <strong>buying side</strong> of the trade screen, where magic
              sits among the six goods you can purchase. Two players have now
              described spending an hour hunting for a &ldquo;trade
              magic&rdquo; tech before the developer clarified in the Steam
              thread that you simply choose to buy magic on the right-hand
              column of the expedition screen. The related research does exist
              - <em>Magical Trade Goods</em> - but it lives in the Magic
              Academy branch, not the early research flow, and the quest
              description was reworded in a patch to point at the trade step.
              That branch&apos;s nodes and requirements are broken down in
              our <Link href="/tech-tree/">tech tree guide</Link>.
            </p></div>
          </details>
          <details>
            <summary>How do I get another caravan?</summary>
            <div className="faq__a"><p>
              Additional transports are not bought outright - they come through
              research. In the one Steam thread on the question, a player who
              had dispatched the starting caravan once and burned through its
              goods was told by another player that extra caravans, and later
              ships, unlock via research once the relevant building is upgraded
              to the required level. Two logistics notes from the same answer:
              a trip&apos;s full cost is charged up front when you dispatch,
              and the caravan itself is not consumed - it returns when the trip
              ends and can be sent out again. That answer is community-written;
              the developer has not replied in the thread.
            </p></div>
          </details>
          <details>
            <summary>Can I specialize fully in trade?</summary>
            <div className="faq__a"><p>
              One Steam player reports abandoning wood and stone production entirely, living on
              trade plus minimal iron, gold, food, and magic. It is a self-imposed playstyle
              rather than a designed path - keep enough domestic supply buffered that a failed
              expedition cannot starve the settlement.
            </p></div>
          </details>
          <details>
            <summary>Does trading with anyone break Steadfast Resolve?</summary>
            <div className="faq__a"><p>
              No - the achievement only forbids trading with Ashenholt. Trips to Ironrend,
              Crimsonvale, Rubescairn, or Ankhet-Nar stay safe. Ashenholt was not among the four
              destinations in our captures of the current build, so treat it as a power you may
              meet later in progression and verify against your own map.
            </p></div>
          </details>
          <details>
            <summary>Where can I see exact trade prices?</summary>
            <div className="faq__a"><p>
              Exact costs appear only inside the expedition panel once a full
              loadout is selected - no official table publishes per-route
              rates. What the developer has revealed is the layer underneath:
              hidden base values per good (wood, stone, and food at 1, Iron at
              1.5). Compare routes live, and re-check them after updates.
            </p></div>
          </details>
          <details>
            <summary>Does reduced demand recover after I sell?</summary>
            <div className="faq__a"><p>
              Recovery behavior is not documented. What players observe is the
              opposite edge: each sale drops the good&apos;s local demand one
              tier - with one reported exception, food demand from the warring
              states, which stays High no matter how many shipments arrive.
              That is why rotating across kingdoms beats dumping everything in
              one port.
            </p></div>
          </details>
          <details>
            <summary>Is it worth trading early in a run?</summary>
            <div className="faq__a"><p>
              Only on genuinely favorable tags. Early surpluses are small and production chains
              fragile, so most players hold expeditions until High Demand appears in a nearby
              kingdom - and use them to convert a glut of one good into income for the next
              unlock.
            </p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
