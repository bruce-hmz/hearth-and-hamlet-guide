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
        <h2 id="fps">The 60 FPS cap &amp; how to lift it</h2>
        <p>
          The 60 FPS ceiling on PC is <strong>confirmed build behavior, not a
          rough guess</strong>. An inspection of the v1.0.04 files posted in the
          game&apos;s Steam discussion hub shows{" "}
          <code>application/run/max_fps</code> locked to 60 in the exported
          engine settings, so the cap holds no matter what the in-game V-Sync
          toggle says, and Windows players report the identical limit. For idle
          sessions this is convenient: the game already runs at exactly the
          pace recommended below, with zero configuration.
        </p>

        <h3>Lifting the cap on a high-refresh display</h3>
        <p>
          On 120&ndash;170 Hz monitors the stock cap leaves visible smoothness
          behind. The fix that has worked for Linux players (and matches what
          Windows players report) is a launch option rather than any settings
          menu: add <code>--max-fps 0</code> to the game&apos;s Steam launch
          options, then start normally and let V-Sync govern pacing. In your
          Steam library, right-click Hearth and Hamlet, choose Properties, and
          type <code>--max-fps 0</code> into the Launch Options box. The report
          that established this fix comes from a 170 Hz display running an RX
          7800 XT on the Linux native build; results on other GPUs have not
          been independently verified.
        </p>

        <div className="callout">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <div>
            <p>
              <strong>Keep the stock 60 cap for idle play.</strong> Extra
              frames do not speed up townsfolk or taxes; an uncapped overnight
              session just burns GPU power rendering a picture nobody is
              watching.
            </p>
            <p>
              Lift the cap only for active play on a high-refresh display, and
              consider removing the launch argument again before long AFK
              sessions.
            </p>
          </div>
        </div>

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
            <strong>Return to stock launch options.</strong> If you added{" "}
            <code>--max-fps 0</code> while chasing high-refresh smoothness,
            take it out again before troubleshooting idle load. Once the built-in
            60 cap is restored, a driver-level 30 FPS limit is the next lever
            for unattended sessions near minimum-spec hardware.
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
        <h2 id="crashes">Crash &amp; VRAM fixes</h2>
        <p>
          Since release, some players have hit startup failures, crashes during
          loading, or graphical glitches. Two official threads define the state
          of play. First, the pinned Bug Reports post states that switching the
          renderer to Vulkan resolves or greatly improves these problems in the
          large majority of cases, and multiple Linux players confirmed their
          crashes stopped after choosing Vulkan at launch. Second, the
          developer&apos;s August 25 Ongoing Development Update identifies
          systems whose VRAM is exhausted, or which rely on shared video memory,
          as the remaining source &mdash; mostly laptops and, less often, the
          Steam Deck &mdash; and commits to a substantial backend stability
          patch.
        </p>

        <h3>What to try first</h3>
        <ol>
          <li>
            <strong>Relaunch in Vulkan mode.</strong> Use Steam&apos;s
            launch-option dialog (the selection window that appears when you
            press Play, or Set Launch Options in Properties) and pick the
            Vulkan entry. This is the developer-recommended first move and the
            one with the strongest public track record.
          </li>
          <li>
            <strong>Verify game files.</strong> In Steam, open Properties →
            Installed Files → Verify integrity. This catches corrupted installs
            after failed patches.
          </li>
          <li>
            <strong>Free up video memory before launching.</strong> Close
            hardware-accelerated browsers, video editors, and other games;
            shared-VRAM laptops are the hardest-hit category per the developer&apos;s
            own diagnosis.
          </li>
          <li>
            <strong>Test on battery power versus plugged in.</strong> Laptops
            sometimes downclock integrated GPUs on battery; plug in before
            concluding the fix failed.
          </li>
          <li>
            <strong>Wait for the patch if none of the above holds.</strong>{" "}
            The developer describes the rework as &ldquo;a very large change to
            the back end,&rdquo; so affected configurations are acknowledged
            upstream rather than user-error; report persisting cases on the
            official Discord or Bug Reports thread.
          </li>
        </ol>

        <div className="callout callout--moss">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <p>
            <strong>Save-file safety:</strong> none of the crash reports link
            this problem to town data corruption, so keep playing your save once
            the game starts reliably. Store backups locally as described on our{" "}
            <a href="/save-file-location">save file location page</a>.
          </p>
        </div>
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
                Yes. Version 1.0.04 fixes the frame rate at 60 through the
                engine&apos;s exported settings, and the V-Sync toggle cannot
                override it. High-refresh-display owners can remove the cap
                temporarily with <code>--max-fps 0</code> in Steam launch
                options, as covered above.
              </p>
            </div>
          </details>
          <details>
            <summary>Hearth and Hamlet keeps crashing. How do I fix it?</summary>
            <div className="faq__a">
              <p>
                Try the Vulkan renderer first: pick it in Steam&apos;s launch
                dialog before the game starts. The developer reports this alone
                clears most crash and glitch cases, especially on Linux.
                Remaining failures concentrate on systems out of VRAM, laptops
                sharing main memory with the GPU, and some Steam Decks; a
                backend patch targeting them was announced on August 25, 2026.
                Until it ships, verify files, close VRAM-hungry apps, and use
                the pinned Bug Reports thread for persistent cases.
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
