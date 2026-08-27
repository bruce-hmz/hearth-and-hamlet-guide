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
            <strong>Evidence boundary:</strong> no official source publishes per-route pricing,
            distance modifiers, or caravan-versus-ship efficiency. Treat any fixed profit table
            you find online as stale or invented until it can be reproduced in the current build.
          </p>
        </div>
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
          Whether further tiers exist above High Demand - and how sharply prices move between
          bands - has not been documented publicly. Judge each route by its legend tag plus the
          live cost readout rather than by memorized numbers.
        </p>
      </section>

      <section>
        <h2 id="timing">When a trade is worth it</h2>
        <p>
          Player consensus from the Steam &quot;Tips for trade?&quot; discussion converges on a
          simple filter: <strong>skip markets sitting near Normal or Reduced, and act when the
          tag reads High.</strong> One participant sums up their habit as trading whenever
          demand states sit one to two tiers apart between the two sides, while admitting that
          judging whether a deal is worthwhile remains the hardest part.
        </p>
        <ul>
          <li><strong>The consensus rule:</strong> &quot;normal or low demand, don&apos;t go for it - high and very high demand, go for it.&quot;</li>
          <li><strong>Demand decays after you sell:</strong> completing a sale reportedly drops that good&apos;s demand tier by one - with food exempt - so dumping the same cargo into the same kingdom twice yields less the second time.</li>
          <li><strong>Rotate targets:</strong> spread sales across goods and kingdoms so at least one high-demand lane is always open.</li>
        </ul>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Player-reported, not patched:</strong> the one-tier decay behavior comes from
            the discussion thread, not from official documentation. Watch the tags in your own
            save and trust what they show over any external claim - including ours.
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
            <caption>Steam achievements involving trade (unlock rates as of August 27, 2026)</caption>
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
                <td>55.7%</td>
                <td>Lands naturally if you keep sending regular expeditions</td>
              </tr>
              <tr>
                <td>Steadfast Resolve</td>
                <td>Complete the game without ever trading with Ashenholt</td>
                <td>4.2%</td>
                <td>Among the rarest achievements globally - commit to closed routes early</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Half of all players have earned Merchant Kingdom, which tells you routine trading is
          nearly unavoidable. The flip side is Steadfast Resolve at 4.2%: almost everyone who
          finishes the game touches Ashenholt at least once. If you want the rare one, decide at
          the start of the save that those routes stay shut - the condition spans the entire
          game, and one hurried expedition quietly ends the attempt.
        </p>
      </section>

      <section>
        <h2 id="faq">Trade FAQ</h2>
        <div className="faq">
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
              Nowhere outside the game panel. The expedition screen reveals costs only after a
              full loadout is selected, and no official table publishes per-good rates. Compare
              routes live, and re-check them after updates.
            </p></div>
          </details>
          <details>
            <summary>Does reduced demand recover after I sell?</summary>
            <div className="faq__a"><p>
              Recovery behavior is not documented. What players observe is the opposite edge:
              each sale drops the good&apos;s local demand one tier (food exempt), which is why
              rotating across kingdoms beats dumping everything in one port.
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
