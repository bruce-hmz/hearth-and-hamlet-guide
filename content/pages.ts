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
      { id: "mistakes", label: "Common early mistakes" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-25",
    prev: { slug: "guide", title: "Beginner Guide" },
    next: { slug: "layout", title: "Town Layouts" },
  },
  layout: {
    slug: "layout",
    eyebrow: "City Planning",
    h1: "Hearth and Hamlet Best Layouts",
    title: "Hearth and Hamlet Best Layout & City Planning Guide",
    description:
      "Practical Hearth and Hamlet layout planning for readable districts, short routes, and room to expand without relying on unverified formulas.",
    canonicalKeyword: "hearth and hamlet layout",
    heroImage: {
      src: "/img/game-1.webp",
      alt: "A fortified waterfront city layout in Hearth and Hamlet",
      caption: "A readable district plan keeps related work together and preserves room for expansion.",
    },
    sectionMedia: {
      districts: {
        src: "/img/game-9.webp",
        alt: "A river and waterfall district in Hearth and Hamlet",
        caption: "Natural boundaries can help separate production and residential districts.",
      },
    },
    sources: [
      {
        name: "Hearth and Hamlet on Steam (Phorust Studios)",
        url: "https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/",
      },
    ],
    toc: [
      { id: "adjacency", label: "How to think about adjacency" },
      { id: "terrain", label: "Work with the terrain" },
      { id: "grids", label: "A flexible starter grid" },
      { id: "districts", label: "Industry vs. housing districts" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-25",
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
    toc: [
      { id: "production", label: "Production buildings" },
      { id: "housing", label: "Housing & services" },
      { id: "wonder", label: "Late-game structures" },
      { id: "faq", label: "FAQ" },
    ],
    prev: { slug: "tech-tree", title: "Tech Tree" },
    next: { slug: "best-settings", title: "Best Settings" },
  },
  "best-settings": {
    slug: "best-settings",
    eyebrow: "Performance",
    h1: "Hearth and Hamlet Best Settings",
    title: "Hearth and Hamlet Best Settings for Performance & Idle Play",
    description:
      "Practical Hearth and Hamlet PC settings guidance using the official requirements, readable resolution choices, FPS caps, and idle-play troubleshooting.",
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
      { id: "fps", label: "FPS cap for idle sessions" },
      { id: "accessibility", label: "Accessibility & input checks" },
      { id: "faq", label: "FAQ" },
    ],
    lastReviewed: "2026-08-25",
    prev: { slug: "buildings", title: "Buildings" },
    next: { slug: "save-file-location", title: "Save File Location" },
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
    prev: { slug: "best-settings", title: "Best Settings" },
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
  "best-settings",
  "save-file-location",
  "codes",
] as const;
