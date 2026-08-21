import Link from "next/link";
import type { Metadata } from "next";
import { StageStrip } from "@/components/stage-strip";
import { GameFigure, TrailerFeature } from "@/components/game-media";
import { GUIDE_PAGES, GUIDE_ORDER } from "@/content/pages";
import { STEAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hearth and Hamlet Guide & Wiki – Medieval Citybuilder Clicker",
  description:
    "Comprehensive strategy guide and wiki for Hearth and Hamlet. Town layouts, worker allocation, tech tree progression, and best settings.",
};

const STAGES = [
  { name: "Campfire", note: "Gather by hand and establish your first production loops" },
  { name: "Village", note: "Assign workers and turn a frontier camp into a working settlement" },
  { name: "Town", note: "Coordinate research, trade, and policies as the economy expands" },
  { name: "Kingdom", note: "Shape a realm with magic, defenses, and long-term upgrades" },
];

const CARD_DESCRIPTIONS: Record<string, string> = {
  guide:
    "Follow the path from the opening campfire to a self-sustaining settlement, with clear priorities for resources, workers, and construction.",
  tips:
    "Learn practical early-game habits that keep gathering, staffing, and expansion moving without losing sight of the wider economy.",
  layout:
    "Plan readable districts, sensible travel routes, and room to grow as a compact camp develops into a crowded medieval town.",
  "tech-tree":
    "Understand the research branches, what new systems they open, and how policies fit into your kingdom's wider progression.",
  buildings:
    "Browse the settlement's production, housing, service, magical, and defensive structures by the role each one plays.",
  "best-settings":
    "Tune the PC experience for a clear, comfortable view of busy settlements and dependable play during longer sessions.",
  "save-file-location":
    "Find, back up, and transfer your settlement data before moving computers or making changes to local game files.",
  codes:
    "Check the current status of any redemption system and see when the page was last reviewed—without promises of unverified codes.",
};

const GAME_FACTS = [
  { label: "Developer", value: "Phorust Studios" },
  { label: "Publishers", value: "Runic Forge · Gamersky Games" },
  { label: "Release Date", value: "August 19, 2026" },
  { label: "Platforms", value: "Windows · SteamOS/Linux" },
  { label: "Genre", value: "Incremental medieval citybuilder" },
];

const CARD_MEDIA: Record<string, { src: string; alt: string }> = {
  guide: {
    src: "/img/game-2.webp",
    alt: "A new settlement centered on a glowing campfire",
  },
  tips: {
    src: "/img/game-4.webp",
    alt: "Workers gathering around an early woodland settlement",
  },
  layout: {
    src: "/img/game-1.webp",
    alt: "A fortified waterfront city layout",
  },
  "tech-tree": {
    src: "/img/game-8.webp",
    alt: "The research book interface",
  },
  buildings: {
    src: "/img/game-5.webp",
    alt: "A dense town with many different buildings",
  },
  "best-settings": {
    src: "/img/game-7.webp",
    alt: "A dense late-game town used to illustrate performance tuning",
  },
  "save-file-location": {
    src: "/img/game-7.webp",
    alt: "A developed Hearth and Hamlet town",
  },
  codes: {
    src: "/img/game-12.webp",
    alt: "A story dialog over the game world",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <div className="hero__embers" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
        <div className="wrap">
          <div className="hero__layout">
            <div className="hero__inner">
              <span className="eyebrow">Community Strategy Hub</span>
              <h1 className="hero__title">
                Hearth <em>&amp;</em> Hamlet
              </h1>
              <p className="hero__lede">
                Begin with a lone campfire and build a thriving medieval
                kingdom, one deliberate upgrade at a time. Gather resources,
                assign workers, research new possibilities, and decide what
                kind of realm your settlement will become.
              </p>
              <ul className="hero__stats">
                <li>Single-player</li>
                <li>24 Steam achievements</li>
                <li>Windows &amp; Linux</li>
              </ul>
              <div className="hero__ctas">
                <Link className="btn btn--primary" href="/guide/">
                  Read the Beginner Guide
                </Link>
                <Link className="btn btn--ghost" href="/layout/">
                  Explore Best Layouts
                </Link>
                <a
                  className="btn btn--steam"
                  href={STEAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play on Steam ↗
                </a>
              </div>
            </div>
            <div className="hero__media">
              <GameFigure
                src="/img/game-5.webp"
                alt="A thriving medieval town in Hearth and Hamlet"
                caption="From one campfire to a living medieval capital"
                eager
              />
              <GameFigure
                className="hero__media-inset"
                src="/img/game-2.webp"
                alt="The starting campfire settlement in Hearth and Hamlet"
                caption="Stage I · Campfire"
                eager
              />
            </div>
          </div>
          <StageStrip stages={STAGES} />
        </div>
      </section>

      {/* ---------- essential guides ---------- */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Essential Guides</span>
          <h2 className="section-title">Build Your Kingdom</h2>
          <p className="section-lede">
            Start with the fundamentals, then move into focused references for
            city planning, research, buildings, PC setup, and local saves. Each
            guide is designed to answer one clear question without burying the
            useful part.
          </p>
          <div className="card-grid">
            {GUIDE_ORDER.map((slug, i) => {
              const page = GUIDE_PAGES[slug];
              const soon = slug === "codes";
              return (
                <Link
                  key={slug}
                  className={`card${soon ? " card--soon" : ""}`}
                  href={`/${slug}/`}
                >
                  <span className="card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={CARD_MEDIA[slug].src}
                      alt={CARD_MEDIA[slug].alt}
                      width={600}
                      height={338}
                      loading="eager"
                      decoding="async"
                    />
                  </span>
                  <span className="card__body">
                  <span className="card__no">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="card__title">{page.h1}</span>
                  <span className="card__desc">
                    {CARD_DESCRIPTIONS[slug]}
                  </span>
                  <span className="card__meta">
                    {soon ? (
                      <span className="badge">Monitored</span>
                    ) : (
                      <span className="badge badge--moss">Guide</span>
                    )}
                    <span className="arrow">→</span>
                  </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- official trailer ---------- */}
      <section className="section section--alt media-section">
        <div className="wrap media-section__grid">
          <div className="media-section__copy">
            <span className="eyebrow">See the Systems Move</span>
            <h2 className="section-title">Watch the kingdom take shape</h2>
            <p className="section-lede">
              The official launch trailer shows the actual building scale,
              click-to-gather loop, town interfaces, and late-game settlement
              density our guides refer to.
            </p>
            <div className="media-mini-grid" aria-label="Gameplay stills">
              <GameFigure
                src="/img/game-9.webp"
                alt="A river district in Hearth and Hamlet"
                caption="Terrain & districts"
                eager
              />
              <GameFigure
                src="/img/game-8.webp"
                alt="The research book in Hearth and Hamlet"
                caption="Research & policies"
                eager
              />
            </div>
          </div>
          <TrailerFeature />
        </div>
      </section>

      {/* ---------- about the game ---------- */}
      <section className="section section--alt">
        <div className="wrap split">
          <div className="split__prose">
            <span className="eyebrow">The Game</span>
            <h2 className="section-title">What is Hearth and Hamlet?</h2>
            <p>
              <strong>Hearth and Hamlet</strong> is an incremental medieval
              citybuilder from Phorust Studios. You begin at a quiet frontier
              camp, gather resources, assign workers, and construct the systems
              that gradually turn it into a living kingdom.
            </p>
            <p>
              Growth brings choices as well as scale. Research unlocks new
              buildings and upgrades, trade connects the economy, and laws and
              policies shape how the realm operates. Magic and defensive
              fortifications broaden the late-game possibilities while the
              clicker foundation keeps progress moving at your pace.
            </p>
            <div className="hero__ctas">
              <Link className="btn btn--ghost" href="/guide/">
                Explore All Strategy Guides
              </Link>
            </div>
          </div>
          <dl className="fact-table">
            {GAME_FACTS.map(({ label, value }) => (
              <div className="fact-table__row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- final CTA ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="cta-banner">
            <span className="eyebrow">Ready?</span>
            <h2 style={{ color: "var(--ash)", fontStyle: "italic" }}>
              Turn the next upgrade into a plan.
            </h2>
            <p>
              Begin with the starter guide for a clear route out of the
              campfire stage, or open the layout guide when your growing town
              needs more structure.
            </p>
            <div className="hero__ctas">
              <Link className="btn btn--primary" href="/guide/">
                Read the Beginner Guide
              </Link>
              <Link className="btn btn--ghost" href="/layout/">
                View City Layouts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
