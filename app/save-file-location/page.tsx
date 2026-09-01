import { GuideArticle } from "@/components/guide-article";
import { GameFigure } from "@/components/game-media";
import { guideMetadata } from "@/components/guide-shell";
import { GUIDE_PAGES } from "@/content/pages";

export const metadata = guideMetadata("save-file-location");

const page = GUIDE_PAGES["save-file-location"];

export default function SaveFileLocationPage() {
  return (
    <GuideArticle page={page}>
      <section>
        <h2 id="path">Save file path</h2>
        <p>A community-reported Windows location for Hearth and Hamlet saves is:</p>
        <blockquote>
          <code>%LOCALAPPDATA%/HearthAndHamlet/Saved/SaveGames/</code>
        </blockquote>
        <div className="callout callout--danger">
          <span className="callout__icon" aria-hidden="true">!</span>
          <div>
            <p>
              <strong>This path still needs confirmation.</strong> It is a
              community report, not a location published by the developer. The
              currently available official Steam material does not document a
              save path.
            </p>
          </div>
        </div>

        <h3>How saving works</h3>
        <p>
          Two save triggers are confirmed. Quitting the game saves, and the
          developer has also confirmed in the Steam forum that the game{" "}
          <strong>auto saves every minute</strong> on top of that. Practically,
          this means your save folder&apos;s files stay fresh &mdash; even a
          crash or power cut should cost you at most about a minute of
          progress &mdash; and it is why every backup step below starts with{" "}
          <em>closing the game first</em>: the folder keeps changing while the
          process runs.
        </p>

        <h3>Find the folder safely on Windows</h3>
        <ol>
          <li>Save your game, return to the main menu, and close it completely.</li>
          <li>
            Press <strong>Windows + R</strong>, enter <code>%LOCALAPPDATA%</code>,
            and select <strong>OK</strong>.
          </li>
          <li>
            Look for a folder named <code>HearthAndHamlet</code>, then open
            <code>Saved</code> and <code>SaveGames</code> if those folders exist.
          </li>
          <li>
            Compare the files&apos; <strong>Date modified</strong> values with the
            time of your last in-game save. This is a useful cross-check, not
            proof by itself.
          </li>
        </ol>
        <p>
          If that folder is absent, do not create it or move unrelated files
          into it. Launch the game, make a fresh test save, close the game, and
          search <code>%LOCALAPPDATA%</code> for recently modified folders whose
          names clearly relate to Hearth and Hamlet. A future build may use a
          different location.
        </p>
      </section>

      <section>
        <h2 id="backup">Back up your saves</h2>
        <p>
          Back up the entire confirmed save folder rather than guessing which
          individual file holds your settlement. Keeping the folder structure
          intact also makes a later restore less error-prone.
        </p>
        <ol>
          <li>Close Hearth and Hamlet before copying anything.</li>
          <li>
            Copy the whole <code>SaveGames</code> folder to a separate location,
            such as Documents or an external drive.
          </li>
          <li>
            Give the copy a dated name, for example
            <code> Hearth-and-Hamlet-backup-2026-08-21</code>.
          </li>
          <li>
            Keep the original untouched until you have launched the game and
            confirmed that your backup or transfer works.
          </li>
        </ol>
        <div className="callout callout--danger">
          <span className="callout__icon" aria-hidden="true">✦</span>
          <div>
            <p>
              <strong>Do not rely on Steam Cloud as your only backup.</strong>
              Steam&apos;s official store page currently does not list Steam Cloud
              support for Hearth and Hamlet, so cloud-sync behavior is not
              confirmed.
            </p>
          </div>
        </div>

        <h3>Moving a save to another PC</h3>
        <p>
          Install and launch the same game version once on the destination PC,
          then close it. Back up any destination save folder before copying.
          Only replace files after you have confirmed that both folders belong
          to Hearth and Hamlet; keep the source backup until the transferred
          settlement loads correctly.
        </p>

        {page.sectionMedia?.backup && (
          <GameFigure
            className="article-figure"
            src={page.sectionMedia.backup.src}
            alt={page.sectionMedia.backup.alt}
            caption={page.sectionMedia.backup.caption}
          />
        )}
      </section>

      <section>
        <h2 id="faq">FAQ</h2>
        <div className="faq">
          <details>
            <summary>Does Hearth and Hamlet autosave?</summary>
            <div className="faq__a">
              <p>
                Yes. Besides saving when you quit, the developer confirmed the
                game also auto saves every minute. You do not need to panic-save
                before every risky fight &mdash; but for the Ashenholt army
                battle specifically, a manual save right before activating it is
                still the only guaranteed rollback point.
              </p>
            </div>
          </details>
          <details>
            <summary>My save seems broken. Can it be repaired?</summary>
            <div className="faq__a">
              <p>
                Often, yes. The developer has repeatedly repaired affected
                players&apos; saves directly through the official{" "}
                <a
                  href="https://discord.gg/yhPTGSE3nE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>{" "}
                (bugged storage upgrades and stuck quest states are the two
                cases he has publicly fixed this way), and asks players to
                report remaining problems on the pinned Bug Reports thread with
                the save attached. Never edit save files yourself as a first
                move &mdash; ask first, and keep a backup copy before handing
                anything over.
              </p>
            </div>
          </details>
          <details>
            <summary>Is the reported save path officially confirmed?</summary>
            <div className="faq__a">
              <p>
                No. <code>%LOCALAPPDATA%/HearthAndHamlet/Saved/SaveGames/</code>
                is community-reported and still needs confirmation. Verify it
                by checking that file modification times match a fresh in-game
                save before treating it as your save folder.
              </p>
            </div>
          </details>
          <details>
            <summary>Does Hearth and Hamlet support Steam Cloud?</summary>
            <div className="faq__a">
              <p>
                Steam Cloud is not currently listed on the game&apos;s official
                Steam store page. That means support is unconfirmed; use a
                separate local backup instead of assuming your saves will sync.
              </p>
            </div>
          </details>
          <details>
            <summary>What should I do if the folder is missing?</summary>
            <div className="faq__a">
              <p>
                Create a new test save, close the game, and inspect recently
                modified folders under <code>%LOCALAPPDATA%</code>. Do not create
                the reported folder manually or delete other files. The storage
                location may differ by build and should be rechecked after an
                update.
              </p>
            </div>
          </details>
        </div>
      </section>
    </GuideArticle>
  );
}
