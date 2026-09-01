import { GuideArticle } from "@/components/guide-article";
import Link from "next/link";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

const description =
  "Finished Hearth and Hamlet? What the developer says about replayability, what is still worth doing in your save, and seven similar city builders worth trying next.";

export const metadata = { ...guideMetadata("similar-games"), description };

export default function SimilarGamesPage() {
  return (
    <GuideArticle page={{ ...GUIDE_PAGES["similar-games"], description }}>
      <section>
        <h2 id="overview">What the developer says comes next</h2>
        <p>
          A &ldquo;games like this?&rdquo; thread on the Steam forum went
          unanswered for its first two days, so let us answer it properly.
          First, the honest framing: asked about replayability directly,
          Phorust has described Hearth and Hamlet as a{" "}
          <strong>mostly single-playthrough experience</strong>. There is no
          procedural map, no new-game-plus, and the city layout itself is
          predetermined &mdash; which is exactly why a leading complaint in
          the recent review wave is that players reach the end of a first
          kingdom and run out of things to do.
        </p>
        <p>
          That single-designed-run structure is also why &ldquo;what do I play
          next&rdquo; is a fair question rather than a failure to engage. The
          recommendations below are grouped by which part of Hearth and Hamlet
          you want more of: the relaxed medieval management, the
          rerun-the-loop structure, or the harsher colony-survival pressure
          that the food economy only hints at.
        </p>
        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>Before you uninstall:</strong> if you finished on Gentle or
            Steady, you have seen roughly half of the game&rsquo;s design. The
            difficulty ladder and the rule-based achievements are the second
            half &mdash; and they are where most of the community&rsquo;s
            playtime lives.
          </p>
        </div>
      </section>

      <section>
        <h2 id="in-game">Still left to do in your save</h2>
        <ul>
          <li>
            <strong>The difficulty ladder.</strong> Completing the game on
            Challenging is where the failure wall sits globally &mdash; the
            unlock-rate drop from Steady to Challenging is steep. Our{" "}
            <Link href="/difficulty/">difficulty guide</Link> compares all four
            modes, and the developer has posted his own Intense opening inside
            the <Link href="/difficulty/#intense">Intense strategy section</Link>.
          </li>
          <li>
            <strong>No-defeat runs.</strong> Flawless Victory (no defeats, any
            mode) is currently more common than a Challenging completion
            because players hunt it on easier modes &mdash; see the raid-timing
            rules in our <Link href="/combat/">combat guide</Link>.
          </li>
          <li>
            <strong>Steadfast Resolve.</strong> Finish a whole game without
            ever trading with Ashenholt. It is per saved game
            (developer-confirmed), so a fresh save is a clean attempt &mdash;
            the <Link href="/achievements/">achievements guide</Link> has the
            full ruling and run pairings.
          </li>
          <li>
            <strong>The full 24-achievement list.</strong> At the current
            unlock rates, only a few percent of players have cleared the
            ladder&rsquo;s top tier. The planning table in our{" "}
            <Link href="/achievements/">achievements guide</Link> shows which
            pairings share one save.
          </li>
        </ul>
        <p>
          If those are done and dusted, the games below are the ones players
          of this genre usually move to next.
        </p>
      </section>

      <section>
        <h2 id="list">Games like Hearth and Hamlet</h2>

        <h3>More relaxed medieval kingdom-building</h3>
        <ul>
          <li>
            <strong>Foundation.</strong> The closest match for the
            low-pressure medieval management loop: a gridless city builder
            where villagers choose their own jobs and paths, and your
            monuments, trade routes, and estates shape growth instead of
            strict zoning.
          </li>
          <li>
            <strong>Kingdoms and Castles.</strong> A lighter, stylized medieval
            city builder with a similar &ldquo;one more district&rdquo; pull,
            plus optional raid pressure that scales with how much challenge
            you want.
          </li>
          <li>
            <strong>Manor Lords.</strong> A bigger, slower medieval lord sim
            with real regional trade and field battles. It trades Hearth and
            Hamlet&rsquo;s pick-up-and-play pacing for depth, so it suits a
            second hundred hours rather than a next evening.
          </li>
          <li>
            <strong>Farthest Frontier.</strong> A heavier medieval frontier
            town builder where food spoilage, disease, and soil matter. If
            Hearth and Hamlet&rsquo;s starvation thread made you curious about
            deeper food systems, this is the deep end.
          </li>
        </ul>

        <h3>Shorter runs, the same one-more-run loop</h3>
        <ul>
          <li>
            <strong>Against the Storm.</strong> A dark-fantasy city builder
            built entirely around short settlement runs instead of one long
            city, with meta-progression between them. It is the standard
            recommendation for players who like Hearth and Hamlet&rsquo;s
            structure but want each session to end and restart cleanly.
          </li>
        </ul>

        <h3>Harsher survival colonies</h3>
        <ul>
          <li>
            <strong>Banished.</strong> The classic harsh-survival settlement
            builder: no combat, no fantasy, just a band of outcasts and a food
            economy that punishes complacency. The ancestor of every
            &ldquo;why is everyone starving&rdquo; thread in this genre.
          </li>
          <li>
            <strong>Timberborn.</strong> A colony builder with a different coat
            of paint &mdash; beavers, droughts, and vertical wooden cities
            &mdash; but the same satisfying cycle of planning a settlement
            around a recurring threat.
          </li>
        </ul>

        <div className="callout">
          <span className="callout__icon" aria-hidden="true">&#10022;</span>
          <p>
            <strong>How we picked these:</strong> every entry is an
            established Steam release in the settlement-building genre,
            matched to the specific loops Hearth and Hamlet trains &mdash;
            worker allocation, predictable threat cycles, and trade-driven
            income. None of them replicates its predetermined single-city
            structure, which is worth knowing before you buy.
          </p>
        </div>
      </section>

      <section>
        <h2 id="faq">Similar Games FAQ</h2>
        <div className="faq">
          <details>
            <summary>Is there new game plus or an endless mode in Hearth and Hamlet?</summary>
            <div className="faq__a"><p>
              No endless mode or new-game-plus has been documented in the
              current build, and the developer has described the game as a
              mostly single-playthrough experience when asked about
              replayability. A fresh save replays the same predetermined city
              &mdash; the variety comes from difficulty modes and achievement
              rules, not from a new map.
            </p></div>
          </details>
          <details>
            <summary>How long does Hearth and Hamlet take to finish?</summary>
            <div className="faq__a"><p>
              Recent reviewers most often describe reaching the end of a first
              kingdom in roughly ten hours, and length is the most common
              criticism in the current review wave. The honest counterweight:
              the four mode-completion achievements plus the no-defeat and
              no-Ashenholt-trade rules turn one ten-hour run into several
              planned reruns if you chase them.
            </p></div>
          </details>
          <details>
            <summary>What is the closest game to Hearth and Hamlet?</summary>
            <div className="faq__a"><p>
              For the relaxed medieval management feel, <em>Foundation</em> is
              the usual nearest match; for the structured rerun loop,{" "}
              <em>Against the Storm</em>. If what you actually want is more
              Hearth and Hamlet, the difficulty ladder in our{" "}
              <Link href="/difficulty/">difficulty guide</Link> is the closest
              thing to a second campaign the game itself offers.
            </p></div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
