import Link from "next/link";
import { GuideArticle } from "@/components/guide-article";
import { GameFigure } from "@/components/game-media";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

const description =
  "Hearth and Hamlet research guide: named early research picks, practical priorities, policy trade-offs, the Magic Academy branch, and late-game Undead-siege research.";

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
            <strong>Plan around outcomes, not tier labels.</strong> Official
            sources confirm a multi-branch research system but publish no
            node list or tier order. A community wiki has catalogued 323
            research entries from build 1.0.04 &mdash; the named nodes below
            come from that catalogue, and the 1.0.05 and 1.0.06 patch notes
            announced no research-tree changes. Confirm exact costs in your
            in-game panel.
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

        <p>
          For the first tier specifically, these named nodes (community wiki
          catalogue, build 1.0.04) are cheap, always useful, and fit the
          framework above:
        </p>
        <ul>
          <li>
            <strong>Construction Advisor</strong> (Keep 1 + Carpenter 1)
            &mdash; notifies you when you can afford a building upgrade, so
            you stop re-checking every panel.
          </li>
          <li>
            <strong>Critical Success I</strong> (Keep 1) &mdash; a 2% chance
            of a critical success when personally harvesting.
          </li>
          <li>
            <strong>Extra Accommodation</strong> (Tavern 1) &mdash; +8 max
            population.
          </li>
          <li>
            <strong>Apprenticeships</strong> (Library 1) &mdash; +2 global
            resource harvesting.
          </li>
          <li>
            <strong>Research Advisor</strong> (Keep 2 + Library 1) &mdash;
            notifies you when new research becomes available, which matters
            because many nodes stay hidden behind building levels you have
            not reached yet.
          </li>
          <li>
            <strong>The Sturdy Tools line</strong> (production building 1&ndash;2
            + Blacksmith 1) &mdash; roughly +50&ndash;100% production of that
            one resource; buy the entry matching your current bottleneck.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="undead">Late-game research: the Undead siege</h2>
        <p>
          Building the Keep triggers a quest chain that runs through the
          cathedral and ends in the Ancient Evil siege &mdash; repeated
          zombie-horde battles that players in the Steam thread call the
          biggest challenge in the game. Two research nodes decide whether
          that phase drains your treasury or funds it:
        </p>
        <ul>
          <li>
            <strong>Consecrated Weapons</strong> (Church level 4) &mdash;
            +20% damage to Undead and prevents Undead from reviving. Players
            describe this as the node that makes the horde fights trivial,
            and also warn that it sits at the end of the church upgrade line
            (&ldquo;behind the cathedral&rdquo;) &mdash; a two-step
            investment: building levels first, research second.
          </li>
          <li>
            <strong>Battle Loot: Undead</strong> (Mage Tower level 3) &mdash;
            unlocks battle rewards for defeating Undead. Player-reported
            yields run roughly 50,000&ndash;100,000 gold and magic per horde
            fight, which turns the siege into your best late-game income as
            long as you keep the research current.
          </li>
        </ul>
        <p>
          For how many soldiers to bring and how the waves behave, see the{" "}
          <Link href="/combat/">combat guide</Link> &mdash; soldier count
          scales from population, and that rule is what the siege punishes
          hardest. Surviving the siege is also the{" "}
          <Link href="/achievements/">Ancient Evil achievement</Link>, so the
          research pays into a guaranteed unlock most runs reach anyway.
        </p>
      </section>

      <section>
        <h2 id="magic">Magic research and the Magic Academy</h2>
        <p>
          The most common magic mistake is hunting the research panel for a
          way to buy magic. There isn&apos;t one: the quest that asks you to
          acquire magic by trading is completed from the{" "}
          <strong>buying side of a trade expedition</strong>, as the
          developer confirmed in the Steam thread after two players reported
          losing an hour to the search. The step-by-step lives in our{" "}
          <Link href="/trade/">trade guide FAQ</Link>; what the research tree
          does own is the Magic Academy branch (catalogued as the Mage Tower
          in the community wiki):
        </p>
        <ul>
          <li>
            <strong>Magical Trade Goods</strong> (Mage Tower 2 + Market 3)
            &mdash; unlocks Magical Trade Goods. This is the research the
            developer pointed to when players asked where the &ldquo;trade
            magic&rdquo; tech lives.
          </li>
          <li>
            <strong>Enchant Weapons I / II</strong> (Mage Tower 2 / 4)
            &mdash; unlocks and upgrades the soldier-attack enchant shop
            items (+3, then +6 attack).
          </li>
          <li>
            <strong>Enchant Armour I / II</strong> (Mage Tower 2 / 4)
            &mdash; the defence counterpart (+10, then +20 soldier defence).
          </li>
          <li>
            <strong>Mana Tap</strong> (Mage Tower 3) &mdash; unlocks a shop
            item worth +50% magic production.
          </li>
          <li>
            <strong>Battle Loot: Undead</strong> (Mage Tower 3) &mdash; the
            siege-income node covered above.
          </li>
        </ul>
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
          game&apos;s advanced building system. Official material does not
          establish their exact prerequisites or costs, so use the in-game research panel
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
            <summary>Do I need a research tech to buy magic?</summary>
            <div className="faq__a">
              <p>
                No. The developer confirmed that buying magic happens on the
                buying side of a trade expedition, not through any research
                node. The related <em>Magical Trade Goods</em> research (Magic
                Academy branch, with a level 3 Market requirement) is a
                separate unlock. The full walkthrough is in our{" "}
                <Link href="/trade/">trade guide FAQ</Link>.
              </p>
            </div>
          </details>
          <details>
            <summary>When should I pursue alchemy or magic?</summary>
            <div className="faq__a">
              <p>
                Treat alchemical labs and magical academies as later goals. Build
                toward them after food, housing, and core production are stable;
                the Academy branch&apos;s early entries (Enchant Weapons,
                Magical Trade Goods) need only Mage Tower level 2 plus a level
                3 Market, while the siege-critical nodes (Consecrated Weapons,
                Battle Loot: Undead) are worth budgeting for before you build
                the Keep.
              </p>
            </div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
