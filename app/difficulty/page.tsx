import { GuideArticle } from "@/components/guide-article";
import Link from "next/link";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

export const metadata = guideMetadata("difficulty");

const page = GUIDE_PAGES.difficulty;

export default function DifficultyPage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="modes">The four difficulty modes</h2>
        <p>
          Hearth and Hamlet ships with four difficulty modes: <strong>Gentle</strong>,{" "}
          <strong>Steady</strong>, <strong>Challenging</strong>, and <strong>Intense</strong>.
          The names come straight from the game&apos;s achievement list, which rewards a full
          completion on each mode. Exactly what each tier changes — enemy pressure timing,
          combat outcomes, economic slack — has not been documented publicly in detail. What
          is publicly measurable is how many players ever finish a run on each tier, from the
          official Steam achievement percentages:
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Official completion achievements with global unlock rates (August 31, 2026)</caption>
            <thead>
              <tr>
                <th scope="col">Mode</th>
                <th scope="col">Completion achievement</th>
                <th scope="col">Global unlock rate</th>
                <th scope="col">How to read it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gentle</td>
                <td>Gentle Rule - complete the game on Gentle difficulty</td>
                <td>41.3%</td>
                <td>Roughly two in five players finishes at least a Gentle run</td>
              </tr>
              <tr>
                <td>Steady</td>
                <td>Steady Hands - complete the game on Steady difficulty</td>
                <td>32.0%</td>
                <td>Nine points below Gentle - a modest but real step up</td>
              </tr>
              <tr>
                <td>Challenging</td>
                <td>Rising Challenge - complete the game on Challenging difficulty</td>
                <td>10.9%</td>
                <td>The wall: two-thirds of Steady finishers never clear Challenging</td>
              </tr>
              <tr>
                <td>Intense</td>
                <td>Against the Odds - complete the game on Intense difficulty</td>
                <td>3.8%</td>
                <td>The rarest completion achievement in the game</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Reading the funnel:</strong> unlock rates measure completed runs on that
            mode or stricter, not attempts. The steep 32.0% to 10.9% to 3.8% drop-off is the clearest
            public evidence that difficulty ramps sharply after Steady.
          </p>
        </div>
      </section>

      <section>
        <h2 id="picking">Which difficulty should you pick?</h2>
        <p>
          The honest answer depends on what broke your last run, and the official materials do
          not publish per-mode numbers for raids, defense checks, or economic pressure. What
          follows is calibrated against the completion funnel above and the achievements that
          bend run rules — treat it as orientation, then adjust to your own save:
        </p>
        <ul>
          <li><strong>New to citybuilders or playing cozy:</strong> Gentle. A 41.3% completion rate is unusually high for a &quot;finish the game&quot; achievement; most players who want to see the ending will get it here.</li>
          <li><strong>Comfortable with the loop, want some tension:</strong> Steady. The default middle path — noticeably harder than Gentle, still cleared by nearly one in three players.</li>
          <li><strong>Confident planner chasing mastery:</strong> Challenging. This is where the funnel collapses to 10.9%. Expect hostile timings to punish slow openings.</li>
          <li><strong>Completionists and masochists:</strong> Intense, ideally as a deliberate project after a successful Challenging run. At 3.8% completion it remains the rarest achievement in the game — but it is demonstrably beatable: the developer has finished it without losing a battle and posted his exact strategy, which our <a href="#intense">Intense section</a> breaks down.</li>
        </ul>
      </section>

      <section>
        <h2 id="unlocks">Special completion achievements</h2>
        <p>
          Two more achievements do not care which mode you pick — they change what a run is
          allowed to contain. Their unlock rates explain why so few players bother:
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Rule-bending completion achievements (official requirements and rates)</caption>
            <thead>
              <tr>
                <th scope="col">Achievement</th>
                <th scope="col">Official requirement</th>
                <th scope="col">Global rate</th>
                <th scope="col">What makes it hard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flawless Victory</td>
                <td>Win the game without suffering any defeats</td>
                <td>12.8%</td>
                <td>One lost fight voids the run - the no-defeat challenge below</td>
              </tr>
              <tr>
                <td>Ancient Evil</td>
                <td>Tied to a specific end-game quest line</td>
                <td>47.5%</td>
                <td>Listed for contrast: story-critical, not rule-restricted</td>
              </tr>
              <tr>
                <td>Steadfast Resolve</td>
                <td>Complete the game without ever trading with Ashenholt</td>
                <td>5.0%</td>
                <td>Closes your most convenient market for the entire save (tracked per save, per the developer)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="undefeated">No-defeat runs</h2>
        <p>
          At 12.8%, Flawless Victory is three times rarer than a Gentle completion but more
          than three times as common as an Intense one — it sits exactly in the band of
          &quot;achievable with discipline.&quot; Notably, it now unlocks more often than
          Challenging completion (10.9%), which tells you most no-defeat hunters wisely pick
          an easier mode. The official store page gives you the defensive toolkit in one
          sentence: <em>&quot;Recruit soldiers as your realm expands to protect what you&apos;ve
          built,&quot;</em> reinforced by city guard drafts that defend the population. The
          discipline part is what the game will not do for you:
        </p>
        <ul>
          <li><strong>Scout threats before they arrive.</strong> The timing log compounds across an entire save; a defeat in hour two voids the achievement at hour twenty.</li>
          <li><strong>Hold a standing army, not an emergency one.</strong> Soldiers take upkeep (the recruit panel shows cost per soldier and happiness effects), so budget them like infrastructure rather than firefighting.</li>
          <li><strong>When a loss looks likely, reload before it resolves.</strong> Community reports indicate defeats are judged by outcomes; an interrupted fight before the losing tick preserves the run. This is player-reported behavior — verify it holds on your build.</li>
          <li><strong>Garrison-first economy.</strong> Idle income keeps flowing during long defensive stands; starving the army to rush growth is how no-defeat runs die mid-way.</li>
        </ul>
      </section>

      <section>
        <h2 id="intense">Intense mode strategy</h2>
        <p>
          Set expectations first: 3.8% of all players have finished Intense. It is the
          game&apos;s rarest completion achievement. Early in the game&apos;s life that
          number looked unreachably low — the thread&apos;s OP reported{' '}
          <em>&quot;after 8-12 restarts, passing the first 15 min after unlocking Town Guard
          [seems] possibly impossible.&rdquo;</em> Since then the picture flipped: several
          players have cleared it, the developer himself replayed the mode and says he
          &ldquo;managed without difficulty and without losing any battles,&rdquo; and he
          posted a complete strategy. What follows is that strategy, with the
          community&apos;s corroborating numbers.
        </p>

        <h3>Where Intense runs actually die</h3>
        <p>
          The developer identifies three losing points, and every player report in the
          thread maps to one of them:
        </p>
        <ol>
          <li>
            <strong>The first wave after the initial goblins.</strong> This is the
            opening wall the OP hit.
          </li>
          <li>
            <strong>The first waves after reaching 400 population</strong> —
            &ldquo;especially if they&apos;re skeletons. Enemy difficulty jumps at certain
            thresholds.&rdquo;
          </li>
          <li>
            <strong>The zombie invasion.</strong> Survivable, but only with military
            research kept current.
          </li>
        </ol>

        <h3>The developer&apos;s opening (point 1)</h3>
        <ul>
          <li>
            <strong>Blacksmith soldier upgrades first</strong> &mdash; they require no
            upkeep, so stack them ASAP, plus most town guard upgrades.
          </li>
          <li>
            <strong>Run conscription at the high &minus;20% happiness penalty</strong> (the
            step just before &minus;30%). One player&apos;s math agrees: keeping the army at
            &minus;20% while recruiting-and-disbanding is what carried them through.
          </li>
          <li>
            <strong>Skip Basic Training</strong> &mdash; it costs too much gold early; keep
            spare gold instead so you can buy extra training when a wave lands.
          </li>
          <li>
            <strong>Upgrade the town guard building</strong> &mdash; its level sets
            training speed, which decides how many soldiers you get before contact.
          </li>
          <li>
            <strong>Church tithes are &ldquo;KEY&rdquo;</strong> &mdash; soldiers are
            expensive to maintain, and tithes generate the gold that sustains them.
          </li>
        </ul>

        <h3>The 400-population gate (point 2)</h3>
        <p>
          Enemy difficulty scales with your population, so the developer managed growth
          deliberately: he held at <strong>398 population</strong> with guard-house and
          blacksmith upgrades mostly maxed, absorbed the first attack easily, then added one
          building to cross 400 &mdash; and when the walls quest popped, immediately spent
          stored resources to raise both walls before the next wave. His verdict:{' '}
          <em>&ldquo;Walls are overpowered.&rdquo;</em> A community run confirms the
          mechanic from the other end: monster raids begin around 200 population and scale
          with it, so keeping population low until buildings and critical research are
          finished is a legitimate Intense playbook.
        </p>

        <h3>The zombie invasion (point 3)</h3>
        <p>
          Keep blacksmith military research maxed, keep a high-level guard house training,
          and run taxes that can afford the army. <strong>Call to Arms</strong> rebuilds
          troops fast after bad RNG, <strong>healing potions</strong> carry High-difficulty
          fights, and the developer calls <strong>consecrated weapons</strong> a
          &ldquo;cakewalk&rdquo; once researched &mdash; he notes this stretch can be one of
          the most profitable parts of the run if handled well.
        </p>

        <h3>Force composition and economy</h3>
        <ul>
          <li>
            <strong>Quality beats quantity:</strong> &ldquo;40 well-upgraded soldiers are
            much better than 80 soldiers half as strong&rdquo; &mdash; and 10 strong soldiers
            retrain faster than 20 weak ones.
          </li>
          <li>
            <strong>Priority order:</strong> defense technology and soldiers before
            expansion; strong gold and iron production (tithes and taxes) to sustain them.
          </li>
          <li>
            <strong>Quest-fight warnings from players:</strong> the third taxation event
            needs <em>way more than 120 troops</em> &mdash; one player lost a 100,000-gold
            defense with roughly 65 soldiers against 105 skeleton warriors despite maxed
            upgrades. Our <Link href="/combat/">combat guide</Link> covers the garrison
            math.
          </li>
        </ul>

        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Watch the patch notes:</strong> the developer has said twice (Aug 27
            and Aug 30) that he may tune the mode down slightly, and is specifically
            considering softening the early-game undead. If that lands, the strategy above
            still applies but the pressure drops &mdash; re-check this page after the next
            patch.
          </p>
        </div>
      </section>

      <section>
        <h2 id="faq">Difficulty FAQ</h2>
        <div className="faq">
          <details>
            <summary>Can you change difficulty mid-run?</summary>
            <div className="faq__a"><p>
              The game does not document a mid-run difficulty switch, and the mode-specific
              achievements are worded as completing the game on that setting. Plan your run
              around the choice made at save creation; do not assume you can downshift after
              hitting a wall.
            </p></div>
          </details>
          <details>
            <summary>Do lower difficulties lock achievements?</summary>
            <div className="faq__a"><p>
              No — 19 of 24 achievements (everything except the five mode or rule-dependent
              completions) can be earned on any difficulty. Gentle Rule alone is at 41.3%, so
              plenty of players collect most of the list without ever leaving Gentle.
            </p></div>
          </details>
          <details>
            <summary>Which difficulty should my first run be?</summary>
            <div className="faq__a"><p>
              Gentle if you want to learn systems without defense pressure; Steady if you have
              citybuilder experience and want some tension. The 9-point drop between their
              completion rates makes Steady a genuine step up rather than a token one.
            </p></div>
          </details>
          <details>
            <summary>Is Intense actually beatable?</summary>
            <div className="faq__a"><p>
              Yes — definitively now. The developer has beaten it without losing a single
              battle and published the exact strategy (see the Intense section above), and
              several players have followed it to a clear. It remains the rarest completion
              at 3.8%, and the opening after Town Guards is still where most attempts die.
              Read the strategy first; blind attempts are what produced the 8-12 restart
              stories.
            </p></div>
          </details>
          <details>
            <summary>Does Flawless Victory require Intense?</summary>
            <div className="faq__a"><p>
              No — it only requires winning without suffering any defeats, on any mode. Most
              players chase it on Gentle or Steady where threat timing is forgiving. The two
              hardest challenges stack only if you deliberately combine them.
            </p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
