import { GuideArticle } from "@/components/guide-article";
import Link from "next/link";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

const description =
  "How Hearth and Hamlet combat works: soldiers recruited from your population, happiness thresholds, raid timing, and the 120-soldier Ashenholt army fight.";

export const metadata = { ...guideMetadata("combat"), description };

export default function CombatPage() {
  return (
    <GuideArticle page={{ ...GUIDE_PAGES["combat"], description }}>
      <section>
        <h2 id="basics">How soldiers work</h2>
        <p>
          The official store page keeps it broad: &ldquo;Recruit soldiers as
          your realm expands to protect what you&apos;ve built,&rdquo; with city
          guard drafts listed among the policies that protect your population.
          What the page does not spell out &mdash; and what one answered Steam
          thread makes concrete &mdash; is that <strong>soldiers are recruited
          out of your working population</strong>. Every man-at-arms you field
          is a worker you no longer have at a woodcamp, farm, or market, and
          after a bloody battle you must reassign replacements yourself while
          the population slowly recovers.
        </p>

        <p>
          The recruit-soldiers panel shows three numbers worth watching before
          any fight: total army strength, upkeep cost in gold, and a happiness
          penalty that grows as your army does. The same thread confirms the
          practical ceiling players aim for: keep enough soldiers that they no
          longer drag happiness below the threshold where growth stalls. On
          Intense, one player reported keeping the army just below that line so
          a lost battle hurts morale less than an unprotected town would.
        </p>

        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Rule of thumb:</strong> treat every soldier as both a sword
            and an absent pair of hands. Before recruiting past your happiness
            line, check which workposts will go unmanned, because combat losses
            arrive home as unfilled jobs, not as casualty reports.
          </p>
        </div>
      </section>

      <section>
        <h2 id="battles">Resolving battles</h2>
        <p>
          Steam reviews regularly call combat &ldquo;unpredictable&rdquo; and
          complain there is no way to tell why a fight was won or lost. The
          honest answer from every thread we reviewed: the game does not expose
          a strength-comparison screen before battle, so treat these
          community-sourced rules as the closest thing to a forecast.
        </p>

        <div className="table-scroll">
          <table className="data-table">
            <caption>What community evidence says decides a battle</caption>
            <thead>
              <tr>
                <th scope="col">Factor</th>
                <th scope="col">Effect per player reports</th>
                <th scope="col">Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soldier count vs attacker count</td>
                <td>The 120-soldier quest threshold implies attackers scale with your progress; losing players consistently report being under the marker.</td>
                <td>Medium (one quest-confirmed number, several corroborating losses)</td>
              </tr>
              <tr>
                <td>Army happiness penalty</td>
                <td>Large armies push happiness down; one verified tip is sizing the army to sit just at the no-penalty line.</td>
                <td>High (answered thread, repeatable)</td>
              </tr>
              <tr>
                <td>Concurrent raid + army event</td>
                <td>A skeleton warband arriving mid-battle can wipe your field army even when the Ashenholt force alone was beatable.</td>
                <td>High (documented in the dev-replied bug thread)</td>
              </tr>
              <tr>
                <td>Buffs and soldier stats</td>
                <td>&ldquo;Use buffs etc. to increase the stats of your soldiers&rdquo; &mdash; quality partially substitutes for quantity.</td>
                <td>Medium (single answered post)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Because outcomes are not itemized in a battle log beyond win or lose,
          the reliable habit is preparation rather than replay analysis: fight
          only above the quest&apos;s stated number, never with an active raid
          on the map, and confirm your happiness sits stable before committing.
        </p>
      </section>

      <section>
        <h2 id="raids">Raids &amp; defense timing</h2>
        <p>
          Two hostile event types exist in the mid-game window: wandering
          skeleton warbands &mdash; described in one thread as magical zombies
          that keep attacking until you deal with their source &mdash; and the
          scripted Ashenholt army offensive tied to the quest line. They can
          stack. The dev-replied bug thread documents a player activating the
          Ashenholt fight while skeletons were halfway to town; by the time the
          army arrived, the skeleton raid had eaten enough soldiers that the
          quest battle became unwinnable.
        </p>

        <ol>
          <li>
            <strong>Check the map before starting a quest fight.</strong> If any
            raid marker is active, wait it out. Consecutive battles with the same
            army are how under-strength losses happen.
          </li>
          <li>
            <strong>Recruit back to full strength after every defensive win.</strong>{" "}
            Losses convert directly into unfilled workposts (see{" "}
            <Link href="/buildings/">buildings and workforce</Link>), so the
            economy hit is immediate even when the battle is won.
          </li>
          <li>
            <strong>Time big fights for stable happiness.</strong> The army
            penalty stacks with any post-raid unhappiness; recovering first keeps
            growth from stalling during the battle window.
          </li>
        </ol>

        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Intense mode note:</strong> the mode-specific thread records
            a player who, across 8&ndash;12 restarts, could not survive the
            first 15 minutes after unlocking the Town Guard, and no public reply
            claims a clean opening on Intense yet. On the highest difficulty,
            treat early guard duty as the real boss.
          </p>
        </div>
      </section>

      <section>
        <h2 id="ashenholt">The 120-soldier Ashenholt fight</h2>
        <p>
          The quest &ldquo;have 120 soldiers and fight the Ashenholt army&rdquo;
          is the game&apos;s only publicly documented strength marker. One
          player described the fallout of attempting it under-strength: the
          battle was lost hard, and a reload afterwards produced a bugged,
          auto-completed version of the quest that the developer acknowledged
          and promised to investigate. A second player hit the opposite failure:
          after reloading a lost attempt, the quest became unstartable, with no
          way to summon the army again.
        </p>

        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Before you activate it:</strong> confirm 120 soldiers on
            roster, no raid markers within marching time, happiness steady at
            your normal baseline, and a manual save from before the activation
            click. Both recorded quest failures happened in reloads of lost
            attempts, so the cheapest insurance is not needing one.
          </p>
        </div>

        <p>
          Winning this battle is also narratively significant: per the monarchy
          discussion thread, defeating a major army is what triggers the
          coronation sequence that turns your merchant city into a kingdom.
          Losing it (or exploiting the auto-complete bug) does not appear to
          block progression permanently, but both documented bug states left
          players stuck or confused &mdash; one saved a fraudulent win into
          their quest log, the other lost access to the fight entirely until a
          patch addresses the state handling.
        </p>

        <p>
          Note: the developer replied on August 22 acknowledging the
          auto-complete report as &ldquo;a new one&rdquo; to investigate; no fix
          has shipped in the patch notes we reviewed as of August 27. Until it
          lands, treat reloads around this fight as risky rather than routine.
        </p>
      </section>

      <section>
        <h2 id="faq">Combat FAQ</h2>
        <div className="faq">
          <details>
            <summary>How many soldiers do I need to win battles?</summary>
            <div className="faq__a"><p>
              The only publicly confirmed number is 120 for the Ashenholt quest
              army. Regular raids appear to scale earlier and smaller, and no
              official table of attacker sizes exists. The community rule is
              simple: fight above the marker, never under it, and replace losses
              before the next engagement.
            </p></div>
          </details>
          <details>
            <summary>Why did I lose workers after winning a battle?</summary>
            <div className="faq__a"><p>
              Soldiers are recruited from your working population, so casualties
              show up as unfilled jobs even on a victory. Reassign replacements
              manually once the population recovers; the answered Steam thread
              that established this also recommends sizing your standing army so
              its happiness penalty stays at zero during peacetime.
            </p></div>
          </details>
          <details>
            <summary>Why does my large army make people unhappy?</summary>
            <div className="faq__a"><p>
              Army size carries a growing happiness penalty. Players keep a
              standing force just below the penalty line and only over-recruit
              for known fights, then release or absorb losses afterwards. Keeping
              a bloated peacetime army stalls population growth for no defensive
              gain.
            </p></div>
          </details>
          <details>
            <summary>Can skeletons attack while I fight the Ashenholt army?</summary>
            <div className="faq__a"><p>
              Yes, and stacking both events loses fights by itself: the
              dev-replied bug thread documents an Ashenholt attempt that failed
              because skeletons arrived mid-battle. Wait out active raid markers
              before starting scripted quest battles.
            </p></div>
          </details>
          <details>
            <summary>My Ashenholt fight bugged after reloading. What now?</summary>
            <div className="faq__a"><p>
              Two failure modes are documented: an auto-completed win after
              losing (developer acknowledged on August 22) and a stuck state
              where the fight can no longer be started. If the quest auto-completed,
              you keep progressing but with a false win in the log; if it locked,
              report on the pinned Bug Reports thread and wait for a patch.
              Until the state handling is fixed, save manually before activating
              the battle instead of relying on reloads.
            </p></div>
          </details>
          <details>
            <summary>Is combat different on Intense difficulty?</summary>
            <div className="faq__a"><p>
              The mechanics are the same but the margins are not: the Intense
              thread records 8&ndash;12 restarts failing to survive 15 minutes
              past the Town Guard unlock, with no public clean-strategy claim.
              Read our <Link href="/difficulty/">difficulty comparison</Link> for
              completion-rate context before committing to a no-defeat Intense run.
            </p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
