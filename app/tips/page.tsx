import { GameFigure } from "@/components/game-media";
import { GuideArticle } from "@/components/guide-article";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

export const metadata = guideMetadata("tips");

const page = GUIDE_PAGES.tips;
const intoIndieGuide =
  "https://intoindiegames.com/tips-and-guides/hearth-and-hamlet-best-early-game-tips-and-tricks/";

export default function TipsPage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="food">Keep food ahead of population</h2>
        <p>
          Food competes for the same limited workforce as wood, stone, and iron.
          Muhammad Haris Umer&apos;s Into Indie Games guide recommends beginning with an
          even labor split across those four production areas. Use that as a baseline,
          then adjust it whenever the next purchase exposes a shortage.
        </p>
        <ul>
          <li>Keep food production staffed while the settlement is adding workers.</li>
          <li>
            Before expanding, check whether the new construction will pull too many
            workers away from food.
          </li>
          <li>
            If food becomes the immediate bottleneck, move extra labor there until the
            shortage clears, then restore workers to the other materials.
          </li>
          <li>
            Follow the blue Guiding Arrow early on; Umer says it leads to facilities
            needed to establish the first resource flow.
          </li>
        </ul>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Use balance as a checkpoint, not a rule.</strong> Equal allocation
            helps expose shortages; focused allocation is how you clear them.
          </p>
        </div>
      </section>

      <section>
        <h2 id="happiness">Happiness vs. taxes</h2>
        <p>
          The official Steam description confirms that taxation rules can raise income
          and that worker policies affect morale. It does not publish a universal safe
          tax percentage or a complete happiness formula, so there is no verified
          reason to target a precise early-game number such as 15%.
        </p>
        <p>
          Change taxes and worker rules in small steps, then read the game&apos;s current
          morale and economy feedback before changing them again. Extra income is only
          helpful if the policy does not undermine the workforce supporting your
          resource production.
        </p>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Version-safe advice:</strong> respond to the indicators shown in
            your save. Fixed tax thresholds can become inaccurate after balance
            patches and are not documented on the official store page.
          </p>
        </div>
      </section>

      <section>
        <h2 id="milestones">The at-least-once rule</h2>
        <p>
          Umer&apos;s guide frames progression around one central object: the
          camp, which later becomes the town square. Advancing the town square
          is the big milestone — but his recommended rule is to earn it.
          Before moving to the next town-square level, upgrade each of the
          four core production facilities <strong>at least once</strong>:
        </p>
        <ul>
          <li>Fishing hut (food)</li>
          <li>Lumber structure (wood)</li>
          <li>Quarry (stone)</li>
          <li>Iron mining (iron)</li>
        </ul>
        <p>
          The reason is twofold: according to the same guide, facility
          upgrades increase the <strong>per-facility resource output</strong>{" "}
          and the <strong>resource storage capacity</strong> at the same time.
          A town that levels its square on schedule but leaves gathering at
          base capacity tends to hit a supply wall immediately after — the
          classic &quot;new tier, empty storerooms&quot; stall.
        </p>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Checkpoint habit:</strong> before clicking the next
            town-square upgrade, scan the four facilities. If any is still at
            its base level, upgrade that one first.
          </p>
        </div>
      </section>

      <section>
        <h2 id="research">Make research pay twice</h2>
        <p>
          Research is usually described by what it unlocks, but Umer&apos;s
          guide points out a second benefit that matters for the early
          economy: research rewards can include a{" "}
          <strong>larger workforce</strong> and{" "}
          <strong>more resource gain per second</strong>. Those two effects
          compound with everything else on this page.
        </p>
        <ul>
          <li>
            A bigger workforce makes the even-split baseline stronger — every
            production lane gets more hands without re-planning.
          </li>
          <li>
            Higher gain per second means temporary focused allocation clears
            shortages faster, so you return to balance sooner.
          </li>
          <li>
            Both effects make the next research purchase easier to afford,
            which is why Umer recommends prioritizing research before
            upgrading individual structures.
          </li>
        </ul>
        <p>
          The exact buffs available at each stage vary with your build and
          game version; treat &quot;workforce + resource rate&quot; as the
          pattern to look for in the research panel rather than a fixed
          upgrade list. Our{" "}
          <a href="/tech-tree/">tech tree guide</a> covers the priority
          framework in depth.
        </p>
      </section>

      <section>
        <h2 id="mistakes">Common early mistakes</h2>
        <p>
          The following pitfalls are derived from Muhammad Haris Umer&apos;s published
          early-game route for Into Indie Games. They are strategy recommendations,
          not official requirements.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Early-game mistakes and course corrections</caption>
            <thead>
              <tr>
                <th scope="col">Mistake</th>
                <th scope="col">Why it stalls progress</th>
                <th scope="col">Course correction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ignoring the Guiding Arrow</td>
                <td>Delays the facilities that establish early production.</td>
                <td>Check the blue arrow before placing unrelated structures.</td>
              </tr>
              <tr>
                <td>Never revisiting worker jobs</td>
                <td>A balanced split cannot clear every temporary shortage quickly.</td>
                <td>Focus labor on the blocking material, then rebalance.</td>
              </tr>
              <tr>
                <td>Delaying research</td>
                <td>Research permanently unlocks technologies and upgrades.</td>
                <td>Keep research in the opening plan instead of treating it as late-game content.</td>
              </tr>
              <tr>
                <td>Rushing the next town-square level</td>
                <td>The existing economy may not support the next wave of demand.</td>
                <td>Improve the main resource structures before advancing again.</td>
              </tr>
              <tr>
                <td>Postponing defense</td>
                <td>An expanding realm eventually needs soldiers to protect it.</td>
                <td>Umer recommends training soldiers after Town Guards unlocks.</td>
              </tr>
            </tbody>
          </table>
        </div>
        {page.sectionMedia?.mistakes && (
          <GameFigure
            className="article-figure"
            src={page.sectionMedia.mistakes.src}
            alt={page.sectionMedia.mistakes.alt}
            caption={page.sectionMedia.mistakes.caption}
          />
        )}
        <p>
          The full reasoning behind this route is available in Umer&apos;s{" "}
          <a href={intoIndieGuide} target="_blank" rel="noopener noreferrer">
            Into Indie Games tips and tricks guide
          </a>.
        </p>
      </section>

      <section>
        <h2 id="faq">FAQ</h2>
        <div className="faq">
          <details>
            <summary>What is the best early tax rate?</summary>
            <div className="faq__a">
              <p>
                No fixed percentage is verified as universally best. Adjust taxes in
                small steps and use the current morale and income feedback in your save.
              </p>
            </div>
          </details>
          <details>
            <summary>Does happiness increase resource production?</summary>
            <div className="faq__a">
              <p>
                The official description connects worker rules with morale and taxation
                with income, but it does not document an exact happiness multiplier.
                Keep morale healthy without relying on an unverified coefficient.
              </p>
            </div>
          </details>
          <details>
            <summary>Do building upgrades also increase storage?</summary>
            <div className="faq__a">
              <p>
                Yes, according to Umer&apos;s Into Indie Games guide: upgrading
                a production facility increases both its resource output and
                its storage capacity. That dual effect is why the
                at-least-once rule exists.
              </p>
            </div>
          </details>
          <details>
            <summary>What does research give besides unlocks?</summary>
            <div className="faq__a">
              <p>
                Umer&apos;s guide credits early research with buffs such as a
                larger workforce and more resource gain per second, on top of
                the permanent unlocks. Exact buffs vary by game version.
              </p>
            </div>
          </details>
          <details>
            <summary>When should I stop splitting workers evenly?</summary>
            <div className="faq__a">
              <p>
                As soon as one resource blocks the next important build or upgrade.
                Concentrate labor there temporarily, then return to a broader split.
              </p>
            </div>
          </details>
          <details>
            <summary>When should I start training soldiers?</summary>
            <div className="faq__a">
              <p>
                Umer recommends beginning once Town Guards is unlocked. The official
                Steam page confirms that soldiers protect the realm, but does not set a
                mandatory training schedule.
              </p>
            </div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
