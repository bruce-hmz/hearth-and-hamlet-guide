import { GuideArticle } from "@/components/guide-article";
import Link from "next/link";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

const description =
  "How Hearth and Hamlet combat works: soldiers recruited from your population, happiness thresholds, raid timing, the 120-soldier Ashenholt army fight, and surviving the Ancient Evil zombie-horde siege.";

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

        <p>
          A separate dev-answered thread settles two combat-math questions.
          First, <strong>research applies to existing soldiers instantly</strong>
          &mdash; &ldquo;purchasing a new research should immediately change all
          the guards&apos; stats. No retrain necessary.&rdquo; Second,{" "}
          <strong>a normal critical hit is a x12 multiplier</strong> (the
          developer raised it from x10 because the difference was hard to see),
          and he notes the crit value &ldquo;changes over time.&rdquo; The same
          reply explains why in-game numbers sometimes look wrong: values carry
          hidden decimals &mdash; &ldquo;it may look like you get 20 stone, but
          in fact it is 20.48&rdquo; &mdash; and rounding those after
          multiplication produces odd figures on screen.
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
                <td>&ldquo;Use buffs etc. to increase the stats of your soldiers&rdquo; &mdash; quality partially substitutes for quantity. Research applies to existing soldiers instantly, no retraining.</td>
                <td>High (dev-confirmed on stat updates)</td>
              </tr>
              <tr>
                <td>Critical hits</td>
                <td>A normal crit multiplies damage x12 (developer-raised from x10); the value scales up over time.</td>
                <td>High (dev-stated, August 2026)</td>
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

        <h3>How big do raids get?</h3>
        <p>
          Raids scale with your population. One Intense-mode player reports
          monster raids starting around the 200-population mark and growing from
          there; the sharpest data point comes from a max-difficulty player who
          met a skeleton wave of <strong>68 attackers against 400 population</strong>{" "}
          &mdash; roughly one skeleton per six citizens &mdash; after clearing
          the same runs against goblins and rats with far smaller forces. Asked
          whether that wave was a bug, the developer answered that it is
          &ldquo;intended to be very difficult,&rdquo; but added he has
          &ldquo;had a few reports that the early game is too challenge,
          especially the undead,&rdquo; and is &ldquo;considering turning it
          down slightly.&rdquo; Treat skeleton-wave sizes as a live balance
          target: check the patch notes after each update before sizing your
          garrison.
        </p>

        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Intense mode note:</strong> Intense is no longer the
            uncharted wall it was at launch &mdash; the developer has beaten it
            without losing a battle and published his full strategy, and the
            community has added staffing numbers for each wave. Our{" "}
            <Link href="/difficulty/">difficulty guide</Link> breaks the whole
            plan down; the short version is that early guard duty is still the
            real boss, but it now has a documented answer.
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
          Note: the developer first acknowledged the auto-complete report on
          August 22 as &ldquo;a new one&rdquo; to investigate. Patch 1.0.06
          (August 29) then took a second pass &mdash; its notes list a fix for
          &ldquo;a very rare but stubborn bug that could cause the Ashenholt
          army to fail to spawn, or the quest to be skipped after a failed
          attempt,&rdquo; and the developer says he has &ldquo;added in enough
          safeguards&rdquo; to resolve it, though the bug was never reliably
          reproducible in his testing. The manual-save-before-activation habit
          remains the only guaranteed rollback.
        </p>
      </section>

      <section>
        <h2 id="ancient-evil">The Ancient Evil horde siege</h2>
        <p>
          Build the Keep and the quest line walks you toward the cathedral &mdash; and, with
          no warning, into the hardest stretch of the run: the <strong>Ancient Evil</strong>.
          The Steam thread where players compare notes on it describes the pattern: a
          happiness debuff lands the moment the Keep goes up (players report it at roughly
          &minus;50%; the developer has not published an exact number), food reads
          permanently zero while the debuff is active, and zombie hordes keep coming &mdash;
          one player counted <strong>a horde roughly every 30 seconds, each killing about
          10% of his population</strong>. The Ancient Evil achievement (48.7% of players) is
          the milestone for surviving it.
        </p>

        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>This section is not the 120-soldier fight.</strong> The checklist above
            belongs to the scripted Ashenholt battle. The game itself tells you to hold 120
            military for the horde siege too, but survivors call that number &ldquo;the 120
            recommended death trap&rdquo;: hordes arrive back-to-back, and an army that just
            lost a third of its strength cannot refill in time. Their rule is{" "}
            <strong>at least 200 soldiers before you build the Keep</strong>.
          </p>
        </div>

        <p>
          Four community-tested rules separate the players who survive the event from the
          ones who reload it:
        </p>
        <ul>
          <li>
            <strong>Keep troops under 5% of population when idle.</strong> Below that line
            the army&apos;s happiness penalty disappears entirely, which is the only reason a
            200-strong garrison is livable during the debuff. Players re-derived this rule in
            two separate threads, one calling it a fix that &ldquo;works like a charm&rdquo;
            even on lost battles.
          </li>
          <li>
            <strong>Rush Consecrated Weapons the moment the cathedral unlocks it.</strong>{" "}
            The developer&apos;s own verdict in the thread: &ldquo;The enemy will become
            trivial once you research consecrated weapons.&rdquo; The research sits{" "}
            <em>behind</em> the cathedral in the chain, so it is a two-step fix &mdash;
            players describe it as a knowledge check on whether you stockpiled the resources
            to buy it instantly. Per the community research catalogue it needs a Church at
            level 4 and adds +20% damage against Undead while preventing their revival (see
            our <Link href="/tech-tree/#undead">Undead-siege research section</Link>).
          </li>
          <li>
            <strong>Buy Battle Loot: Undead to turn the siege into income.</strong> The
            Mage-Tower research (level 3 per the catalogue) unlocks battle rewards from
            defeated Undead, and players report <strong>50,000&ndash;100,000 gold and magic
            per fight</strong> once it is running &mdash; the same stretch the developer
            calls one of the most profitable parts of a run when handled well.
          </li>
          <li>
            <strong>A lost battle is not a lost run.</strong> The developer is explicit:
            &ldquo;Each time you lose a battle, the enemy spawn will be smaller and less
            frequent,&rdquo; and he states a soft-lock is not possible. Players still ask for
            a cooldown between hordes because the mid-event death spiral feels brutal &mdash;
            but the mechanic itself digs you out if you keep rebuilding between waves.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="faq">Combat FAQ</h2>
        <div className="faq">
          <details>
            <summary>How many soldiers do I need to win battles?</summary>
            <div className="faq__a"><p>
              The only publicly confirmed number is 120 for the Ashenholt quest
              army &mdash; and later scripted fights need more (Intense players
              report the third taxation event taking well over 120). Regular
              raids scale with your population, from roughly the 200-population
              mark, with documented skeleton waves of 68 attackers at 400
              population. Fight above the marker, never under it, and replace
              losses before the next engagement.
            </p></div>
          </details>
          <details>
            <summary>Why did I lose workers after winning a battle?</summary>
            <div className="faq__a"><p>
              Soldiers are recruited from your working population, so casualties
              show up as unfilled jobs even on a victory. Reassign replacements
              manually once the population recovers; the answered Steam thread
              that established this also recommends sizing your standing army so
              its happiness penalty stays at zero during peacetime. One player-reported
              wrinkle from the same thread: the post-battle results screen can claim
              &ldquo;0 civilian losses&rdquo; while your working population still drops &mdash;
              treat the screen as about battle deaths only, and reassign workers regardless.
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
              losing and a stuck state where the fight can no longer be
              started. Patch 1.0.06 (August 29) targeted both &mdash; the
              developer calls the safeguards he added a fix, offered save
              repairs via Discord for still-affected players, and asked anyone
              who hits it again to report with the save attached. If the quest
              auto-completed you keep progressing with a false win in the log;
              if it locks, use the pinned Bug Reports thread or Discord. The
              manual save before activating the battle remains the only
              guaranteed rollback.
            </p></div>
          </details>
          <details>
            <summary>How do I survive the Ancient Evil zombie hordes?</summary>
            <div className="faq__a"><p>
              Before building the Keep: stockpile at least 200 soldiers (the in-game 120
              number is a death trap for this fight) and keep them under 5% of population
              when idle so the happiness penalty stays at zero. Once the hordes start, rush
              the Consecrated Weapons research behind the cathedral &mdash; the developer
              says enemies become trivial with it &mdash; and buy Battle Loot: Undead to
              farm 50k&ndash;100k gold and magic per successful defense. If you lose a
              battle, the next spawn is smaller and less frequent (developer-confirmed), so
              the event is survivable even after a bad wave. Full breakdown in the{" "}
              <a href="#ancient-evil">Ancient Evil siege section</a> above.
            </p></div>
          </details>
          <details>
            <summary>Is combat different on Intense difficulty?</summary>
            <div className="faq__a"><p>
              The mechanics are the same but the margins are not: enemies jump
              sharply at population thresholds, and the early undead waves are
              tuned hard enough that the developer is considering softening
              them. It is beatable without losses &mdash; the developer has
              done exactly that and published the plan. Our{" "}
              <Link href="/difficulty/">difficulty guide</Link> carries the full
              strategy and completion-rate context.
            </p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
