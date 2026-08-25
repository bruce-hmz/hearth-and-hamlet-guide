import type { Metadata } from "next";
import { STEAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About This Guide",
  description: "About the Hearth & Hamlet community guide.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <div className="wrap section">
      <span className="eyebrow">About</span>
      <h1 className="section-title">About This Guide</h1>
      <div className="prose" style={{ maxWidth: "var(--wrap-article)", marginTop: "2rem" }}>
        <p>
          Hearth &amp; Hamlet Community Guide is an independent, fan-made
          resource for players building their first settlement or refining a
          late-game town. It is not an official wiki, and it is not affiliated
          with, endorsed by, or operated by Phorust Studios or Runic Forge.
        </p>

        <h2>How our guides are made</h2>
        <p>
          We use an evidence-first process. Game details are checked against
          official store information, developer materials, visible in-game
          systems, and clearly attributed community reports. We separate
          confirmed facts from strategy recommendations: official rules and
          observed mechanics are presented as facts, while layouts, priorities,
          and optimization advice are labeled as guidance.
        </p>
        <p>
          Hearth and Hamlet can change through patches. We review guides when
          the game or its public documentation changes, and pages with
          version-sensitive advice show a review date whenever practical.
        </p>

        <h2>Images and video</h2>
        <p>
          Gameplay screenshots and trailers used on this site are official
          promotional media sourced from the game&apos;s{
          " "}
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">
            Steam store page
          </a>
          , unless a page states otherwise. Hearth and Hamlet names, artwork,
          footage, and related game assets remain the property of their
          respective owners.
        </p>

        <h2>Corrections and contact</h2>
        <p>
          We welcome corrections supported by a patch note, screenshot, or
          reproducible in-game result. A public contact channel is not currently
          listed; we will add it here when one is available rather than publish
          an unmonitored address.
        </p>
      </div>
    </div>
  );
}
