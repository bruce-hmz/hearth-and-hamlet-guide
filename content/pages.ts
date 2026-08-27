/**
 * Production page registry.
 * Titles, descriptions, navigation, media, and source attribution are kept
 * here so every guide page shares the same SEO and trust metadata.
 */

export type TocItem = { id: string; label: string };

export type PageMedia = {
  src: string;
  alt: string;
  caption: string;
};

export type GuidePageMeta = {
  slug: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  canonicalKeyword: string;
  heroImage: PageMedia;
  sectionMedia?: Record<string, PageMedia>;
  sources?: { name: string; url: string }[];
  toc: TocItem[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
  /** Page-specific review date; defaults to LAST_REVIEWED. */
  lastReviewed?: string;
};

export const DATE_PUBLISHED = "2026-08-21";
export const LAST_REVIEWED = "2026-08-21";
export const GAME_VERSION = "Release build";

export const GUIDE_PAGES: Record<string, GuidePageMeta> = {
  guide: {
    slug: "guide",
    eyebrow: "Starter Guide",
    h1: "Hearth and Hamlet Beginner Guide",
    title: "Hearth and Hamlet Beginner Guide & Walkthrough",
    description:
      "Complete Hearth and Hamlet beginner guide: campfire opening, worker allocation, resource balance, and the path from camp to kingdom.",
    canonicalKeyword: "hearth and hamlet guide",
    heroImage: {
      src: "/img/game-2.webp",
      alt: "A new Hearth and Hamlet settlement growing around a glowing campfire",
      caption: "Every kingdom starts with one fire and a handful of workers.",
    },
    sectionMedia: {
      stages: {
        src: "/img/game-5.webp",
        alt: "A large developed town in Hearth and Hamlet",
        caption: "A mature settlement with dense housing, services, and production buildings.",
      },
    },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Hearth and Hamlet: Best Early Game Tips and Tricks (Into Indie Games)",
        url: "https://intoindiegames.com/tips-and-guides/hearth-and-hamlet-best-early-game-tips-and-tricks/",
      },
    ],
    toc: [
      { id: "overview", label: "What kind of game is this?" },
      { id: "stages", label: "The four kingdom stages" },
      { id: "resources", label: "Core resources explained" },
      { id: "workers", label: "Worker allocation basics" },
      { id: "opening", label: "Opening moves" },
      { id: "policies", label: "Run your kingdom your way" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-25",
    next: { slug: "tips", title: "Tips & Tricks" },
  },
  tips: {
    slug: "tips",
    eyebrow: "Tips & Tricks",
    h1: "Hearth and Hamlet Tips and Tricks",
    title: "Hearth and Hamlet Tips & Tricks for the Early Game",
    description:
      "Early-game tips for Hearth and Hamlet: worker balance, tax and morale trade-offs, research priorities, and common causes of stalled settlements.",
    canonicalKeyword: "hearth and hamlet tips",
    heroImage: {
      src: "/img/game-4.webp",
      alt: "Workers gathering resources around a woodland Hearth and Hamlet settlement",
      caption: "Efficient early towns keep gathering routes short and workers productive.",
    },
    sectionMedia: {
      mistakes: {
        src: "/img/game-11.webp",
        alt: "A lone lumber worker harvesting in Hearth and Hamlet",
        caption: "Expanding one production chain too aggressively can starve the rest of the economy.",
      },
    },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Hearth and Hamlet: Best Early Game Tips and Tricks (Into Indie Games)",
        url: "https://intoindiegames.com/tips-and-guides/hearth-and-hamlet-best-early-game-tips-and-tricks/",
      },
    ],
    toc: [
      { id: "food", label: "Keep food ahead of population" },
      { id: "happiness", label: "Happiness vs. taxes" },
      { id: "milestones", label: "The at-least-once rule" },
      { id: "research", label: "Make research pay twice" },
      { id: "midgame", label: "Mid-game: trade & defense" },
      { id: "mistakes", label: "Common early mistakes" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-27",
    prev: { slug: "guide", title: "Beginner Guide" },
    next: { slug: "layout", title: "Town Layouts" },
  },
  layout: {
    slug: "layout",
    eyebrow: "Layout",
    h1: "Hearth and Hamlet Layout Guide",
    title: "Hearth and Hamlet Layout Guide: The Predetermined City & Building Order",
    description:
      "How the Hearth and Hamlet layout works: the developer confirmed the city is predetermined, so progress is building order, upgrades, and terrain effects — not free city planning.",
    canonicalKeyword: "hearth and hamlet layout",
    heroImage: {
      src: "/img/game-1.webp",
      alt: "A fortified waterfront city layout in Hearth and Hamlet",
      caption: "The map is a pre-designed diorama — your decisions are when and what to build, not where.",
    },
    sectionMedia: {
      districts: {
        src: "/img/game-9.webp",
        alt: "A river and waterfall district in Hearth and Hamlet",
        caption: "Water features divide the fixed map into naturally readable districts.",
      },
    },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Steam Discussion: couple questions (Phorust, developer)",
        url: "https://steamcommunity.com/app/4315040/discussions/0/589561020200037325/",
      },
      {
        name: "Steam Discussion: Where to increase magic-s storage",
        url: "https://steamcommunity.com/app/4315040/discussions/0/588435430711664607/",
      },
    ],
    toc: [
      { id: "how-it-works", label: "The layout is predetermined" },
      { id: "terrain", label: "What terrain does" },
      { id: "order", label: "Building order in a fixed map" },
      { id: "districts", label: "Reading the districts" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-27",
    prev: { slug: "tips", title: "Tips & Tricks" },
    next: { slug: "tech-tree", title: "Tech Tree" },
  },
  "tech-tree": {
    slug: "tech-tree",
    eyebrow: "Research",
    h1: "Hearth and Hamlet Tech Tree Guide",
    title: "Hearth and Hamlet Tech Tree & Research Order Guide",
    description:
      "Hearth and Hamlet research guide covering permanent unlocks, priority decisions, policies, magic, and advanced building progression.",
    canonicalKeyword: "hearth and hamlet tech tree",
    heroImage: {
      src: "/img/game-8.webp",
      alt: "The Soldiers research book interface in Hearth and Hamlet",
      caption: "The Soldiers branch shows combat upgrades and their resource costs.",
    },
    sectionMedia: {
      policies: {
        src: "/img/game-10.webp",
        alt: "The Keep Policies panel comparing low, medium, and high taxes",
        caption: "Kingdom policies trade happiness for income — this panel shows the tax choices directly.",
      },
    },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Hearth and Hamlet: Best Early Game Tips and Tricks (Into Indie Games)",
        url: "https://intoindiegames.com/tips-and-guides/hearth-and-hamlet-best-early-game-tips-and-tricks/",
      },
      {
        name: "Tips for trade? - Hearth and Hamlet Steam discussion",
        url: "https://steamcommunity.com/app/4315040/discussions/0/589561964325282177/",
      },
      {
        name: "Broken task is to pay 40,000 gold - Steam thread with dev reply",
        url: "https://steamcommunity.com/app/4315040/discussions/0/588435738025223107/",
      },
    ],
    toc: [
      { id: "overview", label: "Research system overview" },
      { id: "branches", label: "Confirmed branch themes" },
      { id: "order", label: "Recommended unlock order" },
      { id: "policies", label: "Kingdom Policies" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-25",
    prev: { slug: "layout", title: "Town Layouts" },
    next: { slug: "buildings", title: "Buildings" },
  },
  buildings: {
    slug: "buildings",
    eyebrow: "Building Guide",
    h1: "Hearth and Hamlet Buildings List",
    title: "Hearth and Hamlet Buildings & Progression Guide",
    description:
      "Hearth and Hamlet building roles and progression, including officially named production, civic, magical, and defensive structures.",
    canonicalKeyword: "hearth and hamlet buildings",
    heroImage: {
      src: "/img/game-5.webp",
      alt: "A dense town showing many Hearth and Hamlet building types",
      caption: "Buildings work as a system: housing, services, storage, and production all compete for space.",
    },
    sectionMedia: {
      production: {
        src: "/img/game-7.webp",
        alt: "Town buildings and service labels in Hearth and Hamlet",
        caption: "A developed town combines production, housing, services, trade, research, and defense.",
      },
    },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Broken task is to pay 40,000 gold - Hearth and Hamlet Steam discussion",
        url: "https://steamcommunity.com/app/4315040/discussions/0/588435738025223107/",
      },
    ],
    toc: [
      { id: "production", label: "Production buildings" },
      { id: "storage", label: "Storage & the gold cap" },
      { id: "housing", label: "Housing & services" },
      { id: "wonder", label: "Late-game structures" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-27",
    prev: { slug: "tech-tree", title: "Tech Tree" },
    next: { slug: "trade", title: "Trade" },
  },
  trade: {
    slug: "trade",
    eyebrow: "Trade",
    h1: "Hearth and Hamlet Trade Guide",
    title: "Hearth and Hamlet Trade Guide: Demand Tiers & Profit Rules",
    description:
      "How Hearth and Hamlet trade works: setting up expeditions, reading demand tiers, community timing rules, trading past the gold cap, and both trade achievements.",
    canonicalKeyword: "hearth and hamlet trade",
    heroImage: {
      src: "/img/game-3.webp",
      alt: "The Hearth and Hamlet expedition interface showing a destination map with demand levels and trade goods",
      caption: "The Shipwright expedition screen: pick transport, destination, and goods, then read each kingdom demand before sending.",
    },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Tips for trade? - Hearth and Hamlet Steam discussion",
        url: "https://steamcommunity.com/app/4315040/discussions/0/589561964325282177/",
      },
    ],
    toc: [
      { id: "overview", label: "How trade works" },
      { id: "destinations", label: "Destinations & transport" },
      { id: "demand", label: "Reading demand tiers" },
      { id: "timing", label: "When a trade is worth it" },
      { id: "gold-cap", label: "Trading past the gold cap" },
      { id: "achievements", label: "Trade achievements" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-27",
    prev: { slug: "buildings", title: "Buildings" },
    next: { slug: "difficulty", title: "Difficulty" },
  },
  difficulty: {
    slug: "difficulty",
    eyebrow: "Difficulty",
    h1: "Hearth and Hamlet Difficulty Guide",
    title: "Hearth and Hamlet Difficulty Modes & Intense Survival Guide",
    description:
      "All four Hearth and Hamlet difficulty modes compared with official completion rates, which mode fits your run, and the two brutal challenges: no-defeat wins and Intense.",
    canonicalKeyword: "hearth and hamlet difficulty",
    heroImage: {
      src: "/img/game-6.webp",
      alt: "The soldier recruitment interface showing costs, happiness impact, and army strength in Hearth and Hamlet",
      caption: "On the higher difficulties, the recruit-soldiers panel becomes your most-visited screen.",
    },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Intense impossible without defeat? - Hearth and Hamlet Steam discussion",
        url: "https://steamcommunity.com/app/4315040/discussions/0/589561964325296211/",
      },
    ],
    toc: [
      { id: "modes", label: "The four difficulty modes" },
      { id: "picking", label: "Which difficulty should you pick?" },
      { id: "unlocks", label: "Special completion achievements" },
      { id: "undefeated", label: "No-defeat runs" },
      { id: "intense", label: "Intense mode strategy" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-27",
    prev: { slug: "trade", title: "Trade" },
    next: { slug: "combat", title: "Combat" },
  },
  "best-settings": {
    slug: "best-settings",
    eyebrow: "Performance",
    h1: "Hearth and Hamlet Best Settings",
    title: "Hearth and Hamlet Best Settings for Performance & Idle Play",
    description:
      "Practical Hearth and Hamlet PC settings guidance: official requirements, resolution picks, the confirmed 60 FPS cap and its launch-option fix, Vulkan-mode crash workarounds, and idle-play tuning.",
    canonicalKeyword: "hearth and hamlet best settings",
    heroImage: {
      src: "/img/game-7.webp",
      alt: "A dense late-game Hearth and Hamlet town with several active buildings",
      caption: "Performance settings matter most once the town becomes busy and visually dense.",
    },
    sectionMedia: {
      accessibility: {
        src: "/img/game-3.webp",
        alt: "The expedition interface showing a map, destinations, goods, and transport options",
        caption: "Dense management panels make readable resolution and reliable input behavior important.",
      },
    },
    toc: [
      { id: "graphics", label: "Graphics & resolution" },
      { id: "fps", label: "The 60 FPS cap & how to lift it" },
      { id: "crashes", label: "Crash & VRAM fixes" },
      { id: "accessibility", label: "Accessibility & input checks" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-27",
    prev: { slug: "difficulty", title: "Difficulty" },
    next: { slug: "save-file-location", title: "Save File Location" },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "[issue] 60 FPS cap on Linux native build (v1.0.04) - Steam discussion",
        url: "https://steamcommunity.com/app/4315040/discussions/0/589561964325310943/",
      },
      {
        name: "Ongoing Development Update - Phorust [developer], Aug 25, 2026",
        url: "https://steamcommunity.com/app/4315040/discussions/0/588435430711648941/",
      },
      {
        name: "Bug Reports (pinned) - Vulkan launch-mode guidance from Phorust",
        url: "https://steamcommunity.com/app/4315040/discussions/0/588435430711549152/",
      },
    ],
  },
  combat: {
    slug: "combat",
    eyebrow: "Combat",
    h1: "Hearth and Hamlet Combat Guide",
    title: "Hearth and Hamlet Combat Guide: Soldiers, Garrisons & Battles",
    description:
      "How Hearth and Hamlet combat works: the soldier-from-population rule, happiness thresholds, raid timing, garrison size for Ashenholt's 120-soldier fight, and why battles feel opaque.",
    canonicalKeyword: "hearth and hamlet combat",
    heroImage: {
      src: "/img/game-6.webp",
      alt: "The Hearth and Hamlet recruit-soldiers panel showing army strength, upkeep, and happiness impact",
      caption: "Army strength is rented from your workforce; the panel tracks what each extra soldier costs your economy.",
    },
    toc: [
      { id: "basics", label: "How soldiers work" },
      { id: "battles", label: "Resolving battles" },
      { id: "raids", label: "Raids & defense timing" },
      { id: "ashenholt", label: "The 120-soldier Ashenholt fight" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-27",
    prev: { slug: "difficulty", title: "Difficulty" },
    next: { slug: "achievements", title: "Achievements" },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Losing workers even after winning a battle with 0 losses - answered Steam thread",
        url: "https://steamcommunity.com/app/4315040/discussions/0/588435738025274130/",
      },
      {
        name: "[Spoiler][BUG] Quest completes automatically even if you fail? - Steam thread with dev reply",
        url: "https://steamcommunity.com/app/4315040/discussions/0/588435738025077571/",
      },
      {
        name: "Intense impossible without defeat? - Steam discussion",
        url: "https://steamcommunity.com/app/4315040/discussions/0/589561964325296211/",
      },
    ],
  },
  achievements: {
    slug: "achievements",
    eyebrow: "Achievements",
    h1: "Hearth and Hamlet Achievements Guide",
    title: "Hearth and Hamlet Achievements: Full List, Unlock Rates & Tips",
    description:
      "All 24 Hearth and Hamlet achievements with official global unlock rates: which mode-dependent ones to plan for, the 120-soldier army fight, Steadfast Resolve, and Flawless Victory.",
    canonicalKeyword: "hearth and hamlet achievements",
    heroImage: {
      src: "/img/game-5.webp",
      alt: "A fully developed Hearth and Hamlet city with a castle, the end-state most completion achievements track",
      caption: "Most of the list unlocks naturally on the road to a fully upgraded kingdom.",
    },
    toc: [
      { id: "list", label: "All 24 achievements" },
      { id: "hardest", label: "The rare ones & how to plan them" },
      { id: "synergies", label: "Combining achievements in one run" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-27",
    prev: { slug: "combat", title: "Combat" },
    next: { slug: "best-settings", title: "Best Settings" },
    sources: [
      {
        name: "Hearth and Hamlet - Steam global achievement stats (retrieved Aug 27, 2026)",
        url: "https://steamcommunity.com/stats/4315040/achievements",
      },
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
      {
        name: "Intense impossible without defeat? - Steam discussion",
        url: "https://steamcommunity.com/app/4315040/discussions/0/589561964325296211/",
      },
      {
        name: "[Spoiler][BUG] Quest completes automatically even if you fail? - Steam thread with dev reply",
        url: "https://steamcommunity.com/app/4315040/discussions/0/588435738025077571/",
      },
    ],
  },
  "save-file-location": {
    slug: "save-file-location",
    eyebrow: "PC Help",
    h1: "Hearth and Hamlet Save File Location",
    title: "Hearth and Hamlet Save File Location on PC",
    description:
      "Community-reported Windows save path for Hearth and Hamlet, how to verify it, and safe steps for backing up or transferring settlement saves.",
    canonicalKeyword: "hearth and hamlet save file location",
    heroImage: {
      src: "/img/game-7.webp",
      alt: "A Hearth and Hamlet town with multiple named service buildings",
      caption: "Back up your settlement before moving files or testing a major update.",
    },
    sectionMedia: {
      backup: {
        src: "/img/game-1.webp",
        alt: "A large fortified Hearth and Hamlet settlement worth backing up",
        caption: "A developed kingdom represents hours of progression — keep a separate backup copy.",
      },
    },
    toc: [
      { id: "path", label: "Save file path" },
      { id: "backup", label: "Back up your saves" },
      { id: "faq", label: "FAQ" },
    ],
    prev: { slug: "achievements", title: "Achievements" },
    next: { slug: "codes", title: "Codes" },
  },
  codes: {
    slug: "codes",
    eyebrow: "Codes",
    h1: "Hearth and Hamlet Codes",
    title: "Hearth and Hamlet Codes Status — No Verified Redemption System",
    description:
      "Current Hearth and Hamlet codes status, where an official redemption system would appear, and how we verify future code claims.",
    canonicalKeyword: "hearth and hamlet codes",
    heroImage: {
      src: "/img/game-12.webp",
      alt: "A Hearth and Hamlet story dialog shown over the game world",
      caption: "No public redemption interface was found in the official material reviewed for this page.",
    },
    toc: [
      { id: "active", label: "Current codes status" },
      { id: "redeem", label: "How redemption would work" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-25",
    prev: { slug: "save-file-location", title: "Save File Location" },
  },
};

export const GUIDE_ORDER = [
  "guide",
  "tips",
  "layout",
  "tech-tree",
  "buildings",
  "trade",
  "difficulty",
  "combat",
  "achievements",
  "best-settings",
  "save-file-location",
  "codes",
] as const;
