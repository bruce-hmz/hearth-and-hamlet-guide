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
        <h2 id="adjacency">How to think about adjacency</h2>
        <p>
          Hearth and Hamlet&apos;s official description establishes a clear town-building loop:
          gather resources, assign workers, and construct buildings as a camp grows into a
          kingdom. That makes <strong>functional proximity</strong> a useful planning rule even
          before every building interaction has been measured. Put structures that participate
          in the same workflow close enough that you can read and manage them as one district.
        </p>
        <p>
          Start with the bottleneck you can see. If gathering is limiting construction, keep the
          relevant worker and building controls easy to find. If a service is holding back the
          settlement, reserve nearby space for that service before placing decorative or
          late-game structures. Reassess the layout whenever research, policy, trade, magic, or
          defense opens a new demand on the same land.
        </p>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Evidence boundary:</strong> the official store page confirms a deep building
            system, but it does not document a universal City Hall radius bonus or a complete
            adjacency formula. Treat proximity as an editorial planning principle until the
            exact mechanic is verified in game.
          </p>
        </div>
      </section>

      <section>
        <h2 id="grids">Starter layout patterns</h2>
        <p>
          There is no single verified best grid for every map. Terrain, current unlocks, worker
          assignments, and the next expansion goal all change what a good town needs. These
          three patterns are flexible starting points rather than claims about hidden bonuses.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Editorial starter patterns — adapt dimensions to the current map</caption>
            <thead>
              <tr>
                <th scope="col">Pattern</th>
                <th scope="col">Use it when</th>
                <th scope="col">How to place it</th>
                <th scope="col">Expansion check</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Compact hearth cluster</td>
                <td>The settlement is small and needs quick oversight</td>
                <td>Group the first shelter, gathering, and service functions by role</td>
                <td>Leave one open edge for the next production chain</td>
              </tr>
              <tr>
                <td>Production corridor</td>
                <td>One resource flow is the current bottleneck</td>
                <td>Arrange related gathering, staffing, and construction controls in sequence</td>
                <td>Keep a branch point for trade or storage needs discovered later</td>
              </tr>
              <tr>
                <td>Expandable districts</td>
                <td>Research is unlocking several systems at once</td>
                <td>Reserve separate blocks for homes, economy, civic use, and defense</td>
                <td>Protect outer space for castles, academies, and fortifications</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Avoid filling every empty tile simply because it is available. A little deliberate
          negative space is cheaper than rebuilding a dense town when a larger structure or a new
          system becomes relevant.
        </p>
      </section>

      <section>
        <h2 id="districts">Industry vs. housing districts</h2>
        <p>
          Divide the town by <strong>function and attention</strong>, not by an assumed pollution
          or happiness rule. A practical plan keeps resource and worker management together,
          groups homes and everyday services into a legible neighborhood, and gives specialized
          late-game systems room to grow.
        </p>
        <ul>
          <li><strong>Gathering and production:</strong> place the structures you inspect together in a coherent work zone, then expand the zone toward its resource needs.</li>
          <li><strong>Housing and services:</strong> use a visually distinct block for tents and community buildings such as taverns so population support is easy to audit.</li>
          <li><strong>Civic and progression:</strong> reserve a flexible central or secondary area for policy, research, trade, and magical functions as they unlock.</li>
          <li><strong>Defense:</strong> plan from the settlement&apos;s outer edge inward. Preserve room for fortifications rather than trapping every future defensive structure inside a finished core.</li>
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
            <strong>A reliable expansion rule:</strong> solve the current bottleneck, keep the
            related controls readable, and preserve a clear direction for the next unlock. This
            works without depending on an unverified fixed grid.
          </p>
        </div>
      </section>

      <section>
        <h2 id="faq">Layout FAQ</h2>
        <div className="faq">
          <details>
            <summary>Is there one best Hearth and Hamlet layout?</summary>
            <div className="faq__a"><p>No universal best layout has been verified. The strongest plan depends on terrain, unlocked buildings, assigned workers, and the resource or service currently constraining growth. Use districts and expansion space as adaptable principles.</p></div>
          </details>
          <details>
            <summary>Does the City Hall give a radial adjacency bonus?</summary>
            <div className="faq__a"><p>The official Steam description does not publish such a formula. Do not design the entire town around a claimed City Hall radius unless you can confirm the effect in the current game build.</p></div>
          </details>
          <details>
            <summary>Should housing and production always be separated?</summary>
            <div className="faq__a"><p>Separate them when it improves readability and leaves room to expand, not because of an assumed penalty. Keep related buildings together, watch the live bottleneck, and reorganize only when a new unlock changes the town&apos;s needs.</p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
