import { GuideArticle } from "@/components/guide-article";
import { GameFigure } from "@/components/game-media";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

const description =
  "Hearth and Hamlet research guide: permanent unlocks, practical early priorities, policy trade-offs, and when to pursue alchemy and magic.";

export const metadata = { ...guideMetadata("tech-tree"), description };

const page = { ...GUIDE_PAGES["tech-tree"], description };

export default function TechTreePage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="overview">Research system overview</h2>
        <p>
          Research is the long-term progression layer in Hearth and Hamlet. The
          official Steam description says upgrades feed into a research tree
          that <strong>permanently unlocks new technologies</strong>, including
          buildings, policies, magic, and other upgrades as your civilization
          advances.
        </p>
        <p>
          That makes research different from a short-lived production boost.
          An unlock expands what the settlement can do for the rest of the run,
          so the best early choices are the ones that remove a current economic
          bottleneck or open a system you can use immediately.
        </p>

        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Plan around outcomes, not tier labels.</strong> The public
            sources confirm a multi-branch research system, but they do not
            document a complete launch-version node list, exact costs, or a
            universal numbered tier order.
          </p>
        </div>
      </section>

      <section>
        <h2 id="branches">Confirmed branch themes</h2>
        <p>
          The official Steam material does not publish a complete node list,
          but it names the themes the research tree permanently unlocks. The
          table below separates what is officially confirmed from what remains
          unspecified.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Research themes named in official material</caption>
            <thead>
              <tr>
                <th scope="col">Theme</th>
                <th scope="col">What the official page confirms</th>
                <th scope="col">Not yet documented publicly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Advanced architecture</td>
                <td>Named as a permanent unlock category of the research tree.</td>
                <td>Individual building unlocks and their prerequisites.</td>
              </tr>
              <tr>
                <td>Civic policies</td>
                <td>Laws and policies, taxation rules, worker rules affecting morale, city guard drafts.</td>
                <td>Exact morale and income math per policy.</td>
              </tr>
              <tr>
                <td>Alchemy</td>
                <td>Alchemical labs are part of the advanced building system.</td>
                <td>Lab tech prerequisites and crafting costs.</td>
              </tr>
              <tr>
                <td>Magic</td>
                <td>Magical academies unlock mid-to-late game automation and resource transmutation spells.</td>
                <td>Spell list, casting costs, and academy requirements.</td>
              </tr>
              <tr>
                <td>Trade</td>
                <td>Trade routes with neighbouring kingdoms and strange new lands.</td>
                <td>Route unlock conditions and exchange rates.</td>
              </tr>
              <tr>
                <td>Military</td>
                <td>Soldiers can be recruited to protect the expanding realm.</td>
                <td>Raid timing and defense strength values.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Use the in-game research panel as the authority for the current
          version&apos;s node names, costs, and ordering — this table exists
          so you know which systems are officially confirmed to exist before
          you plan around them.
        </p>
      </section>

      <section>
        <h2 id="order">Recommended unlock order</h2>
        <p>
          There is no single fixed order that fits every town. A safe roadmap is
          to strengthen the resource loop first, solve the settlement&apos;s
          immediate constraint second, and only then spend toward specialized
          late-game systems. An{" "}
          <a
            href="https://intoindiegames.com/tips-and-guides/hearth-and-hamlet-best-early-game-tips-and-tricks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Into Indie Games early-game guide
          </a>{" "}
          likewise recommends prioritizing early research that improves tools
          and gathering speed.
        </p>

        <div className="table-scroll">
          <table className="data-table">
            <caption>Practical research priority by settlement need</caption>
            <thead>
              <tr>
                <th scope="col">Priority</th>
                <th scope="col">Research focus</th>
                <th scope="col">Why it comes here</th>
                <th scope="col">Move on when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Gathering and core production</td>
                <td>More reliable inputs support every later building and unlock.</td>
                <td>Your essential resource queues stay supplied.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Your active bottleneck</td>
                <td>Choose the branch that fixes the resource, capacity, or service currently holding growth back.</td>
                <td>The constraint no longer stalls expansion.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Policies and settlement control</td>
                <td>Policy options matter more once the town has an economy worth tuning.</td>
                <td>You can absorb a policy&apos;s trade-off without destabilizing supplies.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Specialized and military branches</td>
                <td>Invest when that system supports a real goal instead of unlocking it speculatively.</td>
                <td>The supporting production chain is ready.</td>
              </tr>
              <tr>
                <td>Later</td>
                <td>Alchemy and magical academies</td>
                <td>The official description presents these as advanced additions to a developed kingdom.</td>
                <td>Your core settlement can fund expansion without neglecting essentials.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Treat this as a decision framework rather than a list of named nodes.
          Before buying an upgrade, identify what it unlocks, confirm that you
          can use it now, and check that the purchase will not empty resources
          needed for food, housing, or the next essential building.
        </p>
      </section>

      <section>
        <h2 id="policies">Kingdom Policies</h2>
        <p>
          Research also connects to laws and policies that shape how the
          kingdom operates. The official description specifically mentions
          taxation rules. In the Keep interface, the visible tax choices trade
          greater income against citizen happiness, so the strongest option is
          not automatically the highest rate.
        </p>

        <div className="table-scroll">
          <table className="data-table">
            <caption>How to evaluate a policy choice</caption>
            <thead>
              <tr>
                <th scope="col">Check</th>
                <th scope="col">Question to ask</th>
                <th scope="col">Safer response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Income</td>
                <td>Does the town need more coin for a specific next purchase?</td>
                <td>Raise pressure only for a clear, affordable objective.</td>
              </tr>
              <tr>
                <td>Happiness</td>
                <td>Can residents absorb the policy&apos;s downside?</td>
                <td>Keep a buffer instead of tuning to the edge of failure.</td>
              </tr>
              <tr>
                <td>Timing</td>
                <td>Is the economy stable enough to judge the effect?</td>
                <td>Change one policy at a time, then observe the result.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {page.sectionMedia?.policies && (
          <GameFigure
            className="article-figure"
            src={page.sectionMedia.policies.src}
            alt={page.sectionMedia.policies.alt}
            caption="The Keep Policies panel presents low, medium, and high tax choices, each with a different income and happiness trade-off."
          />
        )}

        <p>
          Alchemical labs and magical academies are also confirmed parts of the
          game&apos;s advanced building system. Public material does not establish
          their exact prerequisites or costs, so use the in-game research panel
          as the authority for the current version.
        </p>
      </section>

      <section>
        <h2 id="faq">FAQ</h2>
        <div className="faq">
          <details>
            <summary>Is research permanent in Hearth and Hamlet?</summary>
            <div className="faq__a">
              <p>
                Yes. The official Steam description says the research tree
                permanently unlocks new technologies as your civilization
                advances.
              </p>
            </div>
          </details>
          <details>
            <summary>What should I research first?</summary>
            <div className="faq__a">
              <p>
                Start with research that improves the core resource loop or
                solves the bottleneck currently stopping your town. Early
                gathering improvements are a strong default, but the best next
                choice depends on your settlement&apos;s actual shortage.
              </p>
            </div>
          </details>
          <details>
            <summary>When should I pursue alchemy or magic?</summary>
            <div className="faq__a">
              <p>
                Treat alchemical labs and magical academies as later goals. Build
                toward them after food, housing, and core production are stable;
                confirm their current prerequisites in the in-game tree before
                committing resources.
              </p>
            </div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
