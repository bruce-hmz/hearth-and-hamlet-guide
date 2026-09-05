import { GuideArticle } from "@/components/guide-article";
import { GameFigure } from "@/components/game-media";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

const description =
  "Hearth and Hamlet PC settings guide: official system requirements, practical resolution and FPS advice, Steam Deck notes, and idle-play performance troubleshooting.";

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
          page on 2026-08-31. Hearth and Hamlet also ships on SteamOS and
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
                <td>16 GB RAM (raised in patch 1.0.06)</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>GeForce GTX 650 or Radeon HD 7770 (2 GB VRAM)</td>
                <td>GeForce GTX 750 Ti or Radeon R7 260X (2 GB VRAM)</td>
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
                <td>16 GB RAM (raised in patch 1.0.06)</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>GeForce GTX 650 or Radeon HD 7770 (2 GB VRAM)</td>
                <td>GeForce GTX 750 Ti or Radeon R7 260X (2 GB VRAM)</td>
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
          dips in dense late-game towns. The one-spec change to know about:
          patch 1.0.06 (August 29, 2026) raised the <strong>recommended</strong>{" "}
          memory to 16 GB because leaner asset memory usage still needs
          headroom. The developer&apos;s own framing is that 8 GB &ldquo;can
          still work flawlessly, but leaves little room for multitasking&rdquo;
          &mdash; minimum requirements did not change.
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
          been independently verified. The developer said in August 2026 that
          he is considering adding a frame-rate option to the in-game menu in a
          future patch; nothing like that has shipped through patch 1.0.07, so
          the launch option remains the only way to lift the cap.
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
          loading, or graphical glitches &mdash; white squares and textures
          failing to load are the visible signature. Two official threads plus
          a string of patches define the current state of play. The pinned Bug
          Reports post establishes the first fix: switching the renderer to{" "}
          <strong>Vulkan</strong> resolves or greatly improves these problems
          in the large majority of cases. The developer&apos;s August 25
          Ongoing Development Update then diagnosed the remaining source as
          systems whose VRAM is exhausted, or which rely on shared video memory
          &mdash; mostly laptops and, less often, the Steam Deck &mdash; and
          the promised fix wave has now shipped: patch 1.0.05 (August 27)
          rebuilt &ldquo;hundreds of assets&rdquo; to be leaner as the
          &ldquo;first wave of VRAM optimisation,&rdquo; patch 1.0.06
          (August 29) trimmed audio memory use on top, and patch 1.0.07
          (September 5, 2026) is &ldquo;focused entirely on reducing the
          game&apos;s memory footprint&rdquo; &mdash; by the developer&apos;s
          count, &ldquo;hundreds of changes&rdquo; have cut VRAM usage by about{" "}
          <strong>1.1 GB</strong>, which &ldquo;should improve stability,
          especially on lower-spec hardware.&rdquo; The developer&apos;s
          Known Issues list, updated August 29, rated the low-RAM/VRAM crashes
          &ldquo;greatly improved&rdquo; before this latest patch, and 1.0.07
          continues the same effort rather than changing any gameplay.
        </p>
        <p>
          With that patch installed, treat the steps below as fallbacks rather
          than first-line fixes. They matter most on the profile the developer
          keeps describing: 8 GB machines, GPUs with 2 GB of VRAM, and systems
          that share main memory with the graphics chip.
        </p>

        <h3>What to try first</h3>
        <ol>
          <li>
            <strong>Update to 1.0.07 or later before anything else.</strong>{" "}
            If you last played on an earlier build, this alone may clear the
            symptom &mdash; the VRAM-optimisation wave (1.0.05&ndash;1.0.07)
            specifically targets VRAM-related crashes and the
            white-square/missing-texture glitches, and 1.0.07 alone cut VRAM
            use by roughly 1.1 GB.
          </li>
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
            <strong>Report persisting cases upstream.</strong> The Known Issues
            pin treats this as an actively worked problem rather than
            user error, and the developer has been repairing affected saves
            directly via Discord. Use the pinned Bug Reports thread or Discord
            with your save file if crashes survive all of the above.
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
        <h2 id="steam-deck">Steam Deck notes</h2>
        <p>
          Hearth and Hamlet is a light native SteamOS title: the store lists
          SteamOS (Ubuntu 20.04+) among its supported systems, so the Deck runs
          the native Linux build rather than a compatibility layer, and the
          Deck&apos;s hardware sits far above the game&apos;s decade-old
          minimum specification. One top-rated player review sums the current
          experience up as &ldquo;Runs perfectly&rdquo; on Deck &mdash; a
          single report, but consistent with how modest the requirements are.
        </p>
        <p>
          The one Deck-specific history worth knowing is the VRAM crash wave:
          the developer&apos;s August 25 Ongoing Development Update named the
          Steam Deck, alongside laptops, among the shared-memory systems most
          affected by the startup crashes and missing-texture glitches. That
          diagnosis is what patches 1.0.05 and 1.0.06 shipped fixes for, and
          patch 1.0.07 (September 5, 2026) is the same story continued:
          its roughly 1.1 GB VRAM cut lands hardest on shared-memory systems
          like the Deck, where every gigabyte of video memory is borrowed from
          system RAM. The Known Issues list rated the problem &ldquo;greatly
          improved&rdquo; before 1.0.07. Practically: make sure the game is
          updated to 1.0.07 or later, and if white squares or texture glitches
          still appear, launch with the <strong>Vulkan</strong> renderer selected in
          Steam&apos;s launch dialog &mdash; the same first fix recommended
          for Linux desktops above.
        </p>
        <p>
          For settings on the Deck&apos;s 1280&times;800 screen, the same
          guidance applies with two adjustments: keep the built-in 60 FPS cap,
          since extra frames only cost battery during idle sessions, and use{" "}
          <strong>Auto UI Scaling</strong> if any menu overflows the smaller
          display &mdash; it is the official fix for cut-off interfaces at
          non-standard resolutions.
        </p>
      </section>

      <section>
        <h2 id="accessibility">Accessibility &amp; input checks</h2>
        <p>
          One input feature is developer-confirmed: the game has a{" "}
          <strong>built-in auto-click function</strong>. Answering a player on
          the Steam forums (August 22), the developer said, &ldquo;I have a
          built-in auto-click function. You can turn on &lsquo;Hover to
          Click&rsquo; in the options menu&rdquo; &mdash; the supported way to
          cut down repetitive clicking while gathering. Beyond that, a
          complete, version-verified list of accessibility and input toggles
          is not available in the official public material we reviewed. Check
          the current in-game Options menu before relying on features such as
          hold-to-gather, interface scaling, or remapping.
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
                Yes. The frame rate is fixed at 60 through the engine&apos;s
                exported settings (verified in the v1.0.04 files), the V-Sync
                toggle cannot override it, and no patch through 1.0.07 has
                touched the cap. High-refresh-display owners can remove it
                temporarily with <code>--max-fps 0</code> in Steam launch
                options, as covered above.
              </p>
            </div>
          </details>
          <details>
            <summary>Hearth and Hamlet keeps crashing. How do I fix it?</summary>
            <div className="faq__a">
              <p>
                First, update &mdash; patches 1.0.05 through 1.0.07 shipped a
                VRAM optimisation wave (1.0.07, September 5, 2026, alone cut
                VRAM use by about 1.1 GB) that the developer credits with
                greatly improving the low-memory crashes. If you are current
                and still crashing, try the Vulkan renderer next: pick it in
                Steam&apos;s launch dialog before the game starts; the
                developer reports this alone clears most crash and glitch
                cases, especially on Linux.
                Remaining failures concentrate on systems out of VRAM, laptops
                sharing main memory with the GPU, and some Steam Decks. Verify
                files, close VRAM-hungry apps, and use the pinned Bug Reports
                thread or the official Discord for persistent cases &mdash; the
                developer has been repairing affected saves there directly.
              </p>
            </div>
          </details>
          <details>
            <summary>Does Hearth and Hamlet run well on Steam Deck?</summary>
            <div className="faq__a">
              <p>
                It runs natively on SteamOS, and the Deck comfortably exceeds
                the game&apos;s minimum requirements; one top-rated player
                review calls it &ldquo;Runs perfectly&rdquo; on Deck. The one
                Deck-relevant history: the developer named the Deck among the
                systems hit by the VRAM crash wave, which patches 1.0.05
                through 1.0.07 specifically addressed &mdash; 1.0.07
                (September 5, 2026) cut VRAM use by about 1.1 GB, a change that
                matters most on shared-memory systems like the Deck &mdash; so
                update first, and pick the Vulkan renderer in the launch dialog
                if texture glitches appear. For the 1280&times;800 screen, keep
                the 60 FPS cap for battery life and enable Auto UI Scaling if
                menus overflow.
              </p>
            </div>
          </details>
          <details>
            <summary>Why are my menus cut off or buttons unclickable?</summary>
            <div className="faq__a">
              <p>
                This is the documented UI-scaling overflow: the UI Scaling
                setting is too high for your resolution, so elements render
                outside the screen and dialogs cannot be closed. The official
                fix from the Known Issues list is to either lower UI Scaling or
                enable <strong>Auto UI Scaling</strong>, which fits the
                interface to your resolution automatically.
              </p>
            </div>
          </details>
          <details>
            <summary>Why is the Incoming Enemy Tracker in the wrong place?</summary>
            <div className="faq__a">
              <p>
                The Known Issues list confirms the tracker can end up misplaced
                in the bottom-right after a resolution change. Saving and
                exiting, then reloading, puts it back where it belongs.
              </p>
            </div>
          </details>
          <details>
            <summary>Can my PC run Hearth and Hamlet?</summary>
            <div className="faq__a">
              <p>
                The Steam minimum lists Windows 10, 8 GB RAM, a GeForce GTX 650
                or Radeon HD 7770 (2 GB VRAM), DirectX 11, and 1 GB of
                available storage. Since patch 1.0.06, the recommended spec is
                Windows 11, 16 GB RAM, and a GTX 750 Ti or Radeon R7 260X
                &mdash; the developer notes 8 GB still works, just with little
                headroom for multitasking.
              </p>
            </div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
