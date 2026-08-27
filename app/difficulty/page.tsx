import { GuideArticle } from "@/components/guide-article";
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
            <caption>Official completion achievements with global unlock rates (August 27, 2026)</caption>
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
                <td>37%</td>
                <td>Roughly one in three players finishes at least a Gentle run</td>
              </tr>
              <tr>
                <td>Steady</td>
                <td>Steady Hands - complete the game on Steady difficulty</td>
                <td>28%</td>
                <td>Nine points below Gentle - a modest but real step up</td>
              </tr>
              <tr>
                <td>Challenging</td>
                <td>Rising Challenge - complete the game on Challenging difficulty</td>
                <td>9%</td>
                <td>The wall: two-thirds of Steady finishers never clear Challenging</td>
              </tr>
              <tr>
                <td>Intense</td>
                <td>Against the Odds - complete the game on Intense difficulty</td>
                <td>3%</td>
                <td>The rarest completion achievement in the game (tied for lowest overall)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Reading the funnel:</strong> unlock rates measure completed runs on that
            mode or stricter, not attempts. The steep 28% to 9% to 3% drop-off is the clearest
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
          <li><strong>New to citybuilders or playing cozy:</strong> Gentle. A 37% completion rate is unusually high for a &quot;finish the game&quot; achievement; most players who want to see the ending will get it here.</li>
          <li><strong>Comfortable with the loop, want some tension:</strong> Steady. The default middle path — noticeably harder than Gentle, still cleared by more than one in four players.</li>
          <li><strong>Confident planner chasing mastery:</strong> Challenging. This is where the funnel collapses to 9%. Expect hostile timings to punish slow openings.</li>
          <li><strong>Completionists and masochists:</strong> Intense, ideally as a deliberate project after a successful Challenging run. At 3% completion, going in blind means restarting often — one player reported 8-12 failed restarts and still could not push past the first stretch after Town Guards unlocked.</li>
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
                <td>11%</td>
                <td>One lost fight voids the run - the no-defeat challenge below</td>
              </tr>
              <tr>
                <td>Ancient Evil</td>
                <td>Tied to a specific end-game quest line</td>
                <td>43%</td>
                <td>Listed for contrast: story-critical, not rule-restricted</td>
              </tr>
              <tr>
                <td>Steadfast Resolve</td>
                <td>Complete the game without ever trading with Ashenholt</td>
                <td>4%</td>
                <td>Closes your most convenient market for the entire save</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="undefeated">No-defeat runs</h2>
        <p>
          At 11%, Flawless Victory is six times rarer than a Gentle completion but ten times
          more common than an Intense one — it sits exactly in the band of &quot;achievable
          with discipline.&quot; The official store page gives you the defensive toolkit in one
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
          Set expectations first: 3% of all players have finished Intense. That is not a typo
          or a soft launch number — it is the game&apos;s rarest completion achievement, tied
          with Steadfast Resolve at 4% (rounded). The only public discussion thread about the
          mode opens with a player who loves the difficulty reporting{' '}
          <em>&quot;after 8-12 restarts, passing the first 15 min after unlocking Town Guard
          [seems] possibly impossible,&quot;</em> and the sole reply, six hours later, is another
          player conceding they also only survived with a defeat. Nobody in that thread claims
          a clean Intense opening — which is itself information: you are not failing at
          something the community finds easy.
        </p>
        <p>
          No verified community strategy for Intense exists yet. What follows is a preparation
          framework built from what the funnel and the combat system publicly tell us:
        </p>
        <ul>
          <li><strong>Learn the window first.</strong> The thread OP&apos;s wall is the same for everyone: the quarter-hour after Town Guards unlocks, when defense obligations begin before your economy has recovered. Play to that point on Challenging and log where raids arrive — building the timing map is half the fight.</li>
          <li><strong>Pre-build defense capacity.</strong> The recruit-soldiers panel shows cost per soldier, happiness effects, total military strength, and upkeep per soldier. On lower difficulties you can improvise; on Intense, treat a standing garrison as a scheduled expense, not a reaction.</li>
          <li><strong>Never tech into growth while a threat timer runs.</strong> Expansion spending that delays soldier recruitment by even a minute can be run-ending — this is the trap the completion funnel suggests most players fall into.</li>
          <li><strong>Bank food surplus early.</strong> Starvation-driven worker loss compounds fast when defenses are also draining gold; a food cushion is cheap insurance.</li>
          <li><strong>Accept restart-heavy pacing.</strong> With single-digit completion rates, treat failed openings as scouting runs. A roguelite mindset is the documented meta: every restart teaches the exact timing window you will need.</li>
        </ul>
        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Status check:</strong> if Phorust tunes Intense in a patch, this section
            will age quickly. Check the thread or our version notes after major updates before
            committing to a long attempt.
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
              completions) can be earned on any difficulty. Gentle Rule alone is at 37%, so
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
              Yes, but rarely: Against the Odds sits at a 3% global completion rate. The
              public discussion thread shows even dedicated players bouncing off its opening
              window repeatedly. Treat it as an end-game challenge best attempted with a
              Challenging-clear plan in hand — no verified clean strategy exists yet.
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
