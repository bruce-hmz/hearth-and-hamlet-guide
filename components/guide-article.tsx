import Link from "next/link";
import type { ReactNode } from "react";
import type { GuidePageMeta } from "@/content/pages";
import { DATE_PUBLISHED, GAME_VERSION, LAST_REVIEWED } from "@/content/pages";
import { GAME_NAME, SITE_URL, STEAM_URL } from "@/lib/site";
import { GameFigure } from "./game-media";
import { AdsterraBanner } from "./adsterra";

const SOURCES = [
  { name: "Hearth and Hamlet on Steam (Phorust Studios / Runic Forge)", url: STEAM_URL },
];

export function GuideArticle({
  page,
  children,
}: {
  page: GuidePageMeta;
  children: ReactNode;
}) {
  const articleSources = page.sources ?? SOURCES;
  const reviewed = page.lastReviewed ?? LAST_REVIEWED;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.h1,
        url: `${SITE_URL}/${page.slug}/`,
        inLanguage: "en",
        datePublished: DATE_PUBLISHED,
        dateModified: reviewed,
        image: [`${SITE_URL}/img/og-cover.jpg`],
        author: {
          "@type": "Organization",
          name: "Hearth & Hamlet Community Guide",
          url: `${SITE_URL}/about/`,
        },
        publisher: {
          "@type": "Organization",
          name: "Hearth & Hamlet Community Guide",
          url: `${SITE_URL}/`,
        },
        about: { "@type": "VideoGame", name: GAME_NAME },
        isAccessibleForFree: true,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/${page.slug}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Hearth & Hamlet Guide",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: `${SITE_URL}/${page.slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">{page.eyebrow}</span>
            </li>
          </ol>
        </nav>

        <header className="article-head">
          <div className="article-head__grid">
            <div className="article-head__copy">
              <span className="eyebrow eyebrow--bare">{page.eyebrow}</span>
              <h1>{page.h1}</h1>
              <p className="lede">{page.description}</p>
              <div className="article-meta">
                <span>
                  Reviewed <strong>{reviewed}</strong>
                </span>
                <span>
                  Game version <strong>{GAME_VERSION}</strong>
                </span>
                <span>
                  Platform <strong>PC (Steam)</strong>
                </span>
              </div>
            </div>
            <GameFigure
              className="article-head__media"
              src={page.heroImage.src}
              alt={page.heroImage.alt}
              caption={page.heroImage.caption}
              eager
            />
          </div>
        </header>

        <div className="article-body">
          <aside className="toc" aria-label="On this page">
            <div className="toc__label">On this page</div>
            <ol>
              {page.toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="prose">
            {children}

            <AdsterraBanner />

            <div className="sources">
              <h2>Sources</h2>
              <ul>
                {articleSources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav className="pager" aria-label="More guides">
              {page.prev ? (
                <Link href={`/${page.prev.slug}/`}>
                  <span className="pager__dir">← Previous</span>
                  <span className="pager__title">{page.prev.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {page.next ? (
                <Link className="next" href={`/${page.next.slug}/`}>
                  <span className="pager__dir">Next →</span>
                  <span className="pager__title">{page.next.title}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
