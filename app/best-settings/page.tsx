import { GuideArticle } from "@/components/guide-article";
import { GameFigure } from "@/components/game-media";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

const description =
  "Hearth and Hamlet PC settings guide: official system requirements, practical resolution and FPS advice, and idle-play performance troubleshooting.";

export const metadata = { ...guideMetadata("best-settings"), description };

const page = { ...GUIDE_PAGES["best-settings"], description };

export default function BestSettingsPage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="graphics">Graphics &amp; resolution</h2>
        <p>
          Hearth and Hamlet has modest official PC requirements, but a dense
          late-game town can put more work on the screen than the opening camp.
          Start at your monitor&apos;s native resolution, then reduce rendering load
          only if frame pacing becomes uneven as the settlement grows.
        </p>

        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Best starting point:</strong> native resolution, a stable
            display mode, and conservative background frame rendering. Change
            one option at a time so you can tell which adjustment helped.
          </p>
        </div>

        <div className="table-scroll">
          <table className="data-table">
            <caption>Practical display recommendations</caption>
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">Resolution</th>
                <th scope="col">Frame-rate target</th>
                <th scope="col">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Meets recommended spec</td>
                <td>Native monitor resolution</td>
                <td>Stable 60 FPS target</td>
                <td>Keeps interface text sharp while avoiding unnecessary rendering for an idle session.</td>
              </tr>
              <tr>
                <td>Near minimum spec</td>
                <td>1920×1080 or 1600×900</td>
                <td>30–60 FPS, favor stability</td>
                <td>Lowering resolution reduces GPU load; a consistent frame rate feels better than fluctuating peaks.</td>
              </tr>
              <tr>
                <td>Long background session</td>
                <td>Keep the lowest readable resolution</td>
                <td>60 FPS practical ceiling</td>
                <td>Limits avoidable heat and power use while the town runs unattended.</td>
              </tr>
              <tr>
                <td>Text looks soft</td>
                <td>Return to native resolution</td>
                <td>Lower another load source instead</td>
                <td>Non-native scaling can make management text harder to read.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Official PC requirements</h3>
        <p>
          Requirements below were verified against the official Steam store
          page on 2026-08-25. Hearth and Hamlet also ships on SteamOS and
          Linux.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Steam system requirements — Windows</caption>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Minimum</th>
                <th scope="col">Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating system</td>
                <td>Windows 10 (64-bit)</td>
                <td>Windows 11</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>Intel Core i3 @ 3.2 GHz</td>
                <td>Intel Core i5-2400 @ 3.1 GHz</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>8 GB RAM</td>
                <td>8 GB RAM</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>GeForce GTX 650 or Radeon HD 7770</td>
                <td>GeForce GTX 750 Ti or Radeon R7 260X</td>
              </tr>
              <tr>
                <td>DirectX</td>
                <td>Version 11</td>
                <td>Version 11</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>1 GB available space</td>
                <td>1 GB available space</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <caption>Steam system requirements — SteamOS &amp; Linux</caption>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Minimum</th>
                <th scope="col">Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating system</td>
                <td>Ubuntu 20.04+ or SteamOS</td>
                <td>Ubuntu 20.04+ or SteamOS</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>Intel Core i3 @ 3.2 GHz</td>
                <td>Intel Core i5-2400 @ 3.1 GHz</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>8 GB RAM</td>
                <td>8 GB RAM</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>GeForce GTX 650 or Radeon HD 7770</td>
                <td>GeForce GTX 750 Ti or Radeon R7 260X</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>1 GB available space</td>
                <td>1 GB available space</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The 1 GB storage footprint and decade-old baseline GPUs confirm the
          game&apos;s lightweight 2D presentation: almost any desktop PC built
          in the last ten years clears the minimum, and laptops with
          integrated graphics are worth testing at 1600×900 if the frame rate
          dips in dense late-game towns.
        </p>
      </section>

      <section>
        <h2 id="fps">FPS cap for idle sessions</h2>
        <p>
          A 60 FPS ceiling is a <strong>practical recommendation</strong> for a
          game that may remain open during long idle sessions. It is not a claim
          that Hearth and Hamlet exposes a confirmed built-in 60 FPS selector.
          If the current build does not offer a frame limiter, use your GPU
          driver&apos;s per-game frame-rate control.
        </p>

        <div className="callout">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <div>
            <p>
              <strong>For idle play:</strong> target a steady 60 FPS or lower,
              keep the game at a readable resolution, and avoid leaving other
              GPU-heavy applications running beside it.
            </p>
            <p>
              If temperatures or fan noise stay high, test a 30 FPS driver cap.
              Progress does not benefit from rendering extra frames.
            </p>
          </div>
        </div>

        <h3>Troubleshooting stutter or high GPU use</h3>
        <ol>
          <li>
            <strong>Restart and retest the same town.</strong> This separates a
            long-session issue from a consistently heavy scene.
          </li>
          <li>
            <strong>Set a driver-level frame cap.</strong> Try 60 FPS first, then
            30 FPS for unattended sessions if load remains high.
          </li>
          <li>
            <strong>Reduce resolution one step.</strong> Test 1920×1080, then
            1600×900 on hardware near the minimum graphics specification.
          </li>
          <li>
            <strong>Close overlays and background GPU workloads.</strong> Video,
            recording, and animated desktop tools can compete with the game.
          </li>
          <li>
            <strong>Update the graphics driver.</strong> Confirm the game is
            using the dedicated GPU on dual-GPU laptops.
          </li>
        </ol>
      </section>

      <section>
        <h2 id="accessibility">Accessibility &amp; input checks</h2>
        <p>
          A complete, version-verified list of accessibility and input toggles
          is not available in the official public material we reviewed. Check
          the current in-game Options menu before relying on features such as
          hold-to-gather, hover interaction, interface scaling, or remapping.
        </p>
        <p>
          For a more comfortable management setup, prioritize readable native
          resolution, Windows display scaling that keeps text legible, and an
          input posture that does not require prolonged repetitive clicking.
          These are setup recommendations, not claims about built-in toggles.
        </p>

        {page.sectionMedia?.accessibility && (
          <GameFigure
            className="article-figure"
            src={page.sectionMedia.accessibility.src}
            alt={page.sectionMedia.accessibility.alt}
            caption="The expedition screen is a management interface, not the settings menu; use it here only as an example of information density and text readability."
          />
        )}
      </section>

      <section>
        <h2 id="faq">FAQ</h2>
        <div className="faq">
          <details>
            <summary>What are the best settings for Hearth and Hamlet?</summary>
            <div className="faq__a">
              <p>
                Begin at native resolution and aim for stable frame pacing. A
                60 FPS ceiling is a sensible practical target for normal and
                idle play; lower resolution or use a 30 FPS driver cap if a
                large town causes high GPU load.
              </p>
            </div>
          </details>
          <details>
            <summary>Does Hearth and Hamlet have a built-in FPS cap?</summary>
            <div className="faq__a">
              <p>
                We have not independently verified a built-in limiter in the
                current version. If no option appears in-game, set a per-game
                maximum frame rate through the NVIDIA or AMD driver software.
              </p>
            </div>
          </details>
          <details>
            <summary>Can my PC run Hearth and Hamlet?</summary>
            <div className="faq__a">
              <p>
                The Steam minimum lists Windows 10, 8 GB RAM, a GeForce GTX 650
                or Radeon HD 7770, DirectX 11, and 1 GB of available storage.
                Steam recommends Windows 11 and a GTX 750 Ti or Radeon R7 260X.
              </p>
            </div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
