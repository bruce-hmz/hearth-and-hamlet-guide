import Link from "next/link";
import type { Metadata } from "next";
import { StageStrip } from "@/components/stage-strip";
import { GameFigure, TrailerFeature } from "@/components/game-media";
import { GUIDE_PAGES, GUIDE_ORDER } from "@/content/pages";
import { SITE_URL, STEAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hearth and Hamlet Guide & Wiki: Layouts, Tech Tree, Tips",
  description:
    "Complete Hearth and Hamlet guide: town layouts, worker allocation, tech tree priorities, best settings and save backups. Start your campfire kingdom right.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hearth and Hamlet Guide & Wiki",
    description:
      "Town layouts, worker allocation, tech tree priorities and best settings — a community guide for Hearth and Hamlet.",
    url: "/",
    type: "website",
    siteName: "Hearth and Hamlet Guide",
    images: [
      {
        url: "/img/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hearth and Hamlet Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hearth and Hamlet Guide & Wiki",
    description:
      "Town layouts, worker allocation, tech tree priorities and best settings for Hearth and Hamlet.",
    images: ["/img/og-cover.jpg"],
  },
};

const STAGES = [
  { name: "Campfire", note: "Gather by hand and establish your first production loops" },
  { name: "Village", note: "Assign workers and turn a frontier camp into a working settlement" },
  { name: "Town", note: "Coordinate research, trade, and policies as the economy expands" },
  { name: "Kingdom", note: "Shape a realm with magic, defenses, and long-term upgrades" },
];

// Homepage card labels stay short: the full page h1s (e.g. "Hearth and Hamlet
// Beginner Guide") would repeat the game title eight times on this page and
// push keyword density into stuffing territory. Only the two card titles that
// match real long-tail queries keep the full name.
const CARD_LABELS: Record<string, string> = {
  guide: "Beginner Guide: Campfire to Settlement",
  tips: "Tips and Tricks for Every Stage",
  layout: "Best Town Layouts",
  "tech-tree": "Tech Tree & Research Roadmap",
  buildings: "Buildings List",
  "best-settings": "Best Settings & Performance",
  "save-file-location": "Hearth and Hamlet Save File Location",
  codes: "Hearth and Hamlet Codes",
};

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
  trade:
    "Set up expeditions, read each kingdom's demand tiers, and learn when a shipment is worth sending - straight from verified interface screens.",
  difficulty:
    "Compare all four difficulty modes with official completion rates, pick the right challenge, and prep for no-defeat and Intense runs.",
  combat:
    "Understand the soldier-from-population rule, happiness thresholds, and battle resolution so raid defense stops feeling like a coin flip.",
  achievements:
    "Every achievement with its official global unlock rate, plus which rare ones to plan into your run before you get too comfortable.",
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
  trade: {
    src: "/img/game-3.webp",
    alt: "The expedition interface showing destination demand levels",
  },
  difficulty: {
    src: "/img/game-6.webp",
    alt: "The soldier recruitment panel showing army costs and strength",
  },
  combat: {
    src: "/img/game-6.webp",
    alt: "The Hearth and Hamlet soldier recruitment panel showing costs, strength, and upkeep",
  },
  achievements: {
    src: "/img/game-5.webp",
    alt: "A fully developed Hearth and Hamlet city with a castle",
  },
  "best-settings": {
    src: "/img/game-7.webp",
    alt: "A dense late-game town used to illustrate performance tuning",
  },
  "save-file-location": {
    src: "/img/game-7.webp",
    alt: "A developed town worth backing up",
  },
  codes: {
    src: "/img/game-12.webp",
    alt: "A story dialog over the game world",
  },
};

const FAQ_ITEMS = [
  {
    q: "Is Hearth and Hamlet on Steam?",
    a: "Yes. The game is developed by Phorust Studios, published by Runic Forge and Gamersky Games, and sold on Steam for Windows and SteamOS/Linux. It launched on August 19, 2026, and ships with 24 achievements.",
  },
  {
    q: "Where are Hearth and Hamlet save files stored?",
    a: "Saves are stored locally on your PC. The save file location guide shows the community-reported Windows path, how to confirm it on your own machine, and the safe steps for backing up or moving a settlement before you edit game files or switch computers.",
  },
  {
    q: "What should I research first?",
    a: "Tier 1 food and gathering upgrades pay for themselves fastest in almost every run. The tech tree guide walks a full priority order through Tier 4, including when kingdom policies and magical research become worth the cost.",
  },
  {
    q: "Are there working codes right now?",
    a: "No verified redemption system was found in the official material we reviewed. The codes page tracks the current status, explains where an official system would appear, and shows the date we last checked it.",
  },
  {
    q: "Will it run on a low-end PC?",
    a: "Yes. It is a lightweight 2D citybuilder. The best settings guide covers readable resolution choices, an FPS cap for long idle sessions, and the input checks that matter once late-game towns get visually dense.",
  },
  {
    q: "How current are these guides?",
    a: "Each page shows the date it was last reviewed. The codes page is re-checked most often because a redemption system can appear at any time, while deeper strategy pages are revisited whenever the game ships a meaningful update.",
  },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hearth and Hamlet Guide",
  url: SITE_URL,
};

// Entity data verified against the official Steam store page (2026-08-25).
const gameJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Hearth and Hamlet",
  url: STEAM_URL,
  description:
    "Medieval citybuilder clicker that blends resource management, in-depth upgrade trees, and relaxing idle gameplay.",
  genre: ["Casual", "Simulation", "Strategy"],
  gamePlatform: ["PC", "SteamOS"],
  playMode: "SinglePlayer",
  datePublished: "2026-08-19",
  developer: { "@type": "Organization", name: "Phorust Studios" },
  publisher: [
    { "@type": "Organization", name: "Runic Forge" },
    { "@type": "Organization", name: "Gamersky Games" },
  ],
  sameAs: [STEAM_URL],
  numberOfPlayers: { "@type": "QuantitativeValue", value: 1 },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
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
                Hearth and Hamlet <em>Guide</em>
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
                      srcSet={`${CARD_MEDIA[slug].src.replace(/\.webp$/, "-600.webp")} 600w, ${CARD_MEDIA[slug].src} 1200w`}
                      sizes="(min-width: 1000px) 300px, (min-width: 640px) 42vw, 92vw"
                      alt={CARD_MEDIA[slug].alt}
                      width={600}
                      height={338}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="card__body">
                  <span className="card__no">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="card__title">{CARD_LABELS[slug]}</span>
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
              density our guides refer to. Watch it once and the stills below
              start to make sense — each one maps to a guide on this page.
            </p>
            <div className="media-mini-grid" aria-label="Gameplay stills">
              <GameFigure
                src="/img/game-9.webp"
                alt="A river district in Hearth and Hamlet"
                caption="Terrain & districts"
              />
              <GameFigure
                src="/img/game-8.webp"
                alt="The research book in Hearth and Hamlet"
                caption="Research & policies"
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

      {/* ---------- gameplay loop ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="split__prose">
            <span className="eyebrow">Core Loop</span>
            <h2 className="section-title">How a run unfolds</h2>
            <p>
              Every kingdom follows the same loop: gather, build, assign,
              research. You place a production building, send workers to staff
              it, and watch raw materials accumulate while the settlement hums
              along. Early on, the loop is hands-on — you click to chop wood,
              harvest food, and shepherd your first families past each
              bottleneck.
            </p>
            <p>
              As research unlocks automation and multi-tier upgrades, the loop
              starts running itself in the background. Your attention shifts
              from individual clicks to district planning: where housing should
              sit relative to production, which trade goods are worth shipping,
              and how tax policy trades worker happiness against steady income.
            </p>
            <p>
              Idle players are covered too. Because production keeps ticking
              while the game runs in the background, a cap on frames per
              second and a few sensible options turn a long session into
              dependable overnight progress instead of a space heater. The
              best settings guide lists the exact options we use.
            </p>
            <p>
              The four-stage arc at the top of this page — Campfire, Village,
              Town, Kingdom — mirrors that shift. The guides above break each
              stage into concrete decisions, so you always know which upgrade
              to aim for next. They are written for players who want a direct
              answer: if food ran out in the first hour, if happiness dipped
              after the last tax change, or if a research branch feels wasted,
              the matching guide addresses that one bottleneck without a long
              walkthrough. Every page keeps the same format — one question, one
              answer, with screenshots where placement matters.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section--alt" id="faq">
        <div className="wrap">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="faq">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <div className="faq__a">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
