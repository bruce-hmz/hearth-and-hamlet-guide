"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const IN_PAGE_PUSH_SRC =
  "https://pl31103675.profitableratecpmnetwork.com/40c2b3c4e355f983cb0d7a6621613c38/invoke.js";
const IN_PAGE_PUSH_CONTAINER = "container-40c2b3c4e355f983cb0d7a6621613c38";

const BANNER_KEY = "0247e1f1db67751f2592ae7c57339c0e";
const BANNER_SRC = `https://www.highrevenueformat.com/${BANNER_KEY}/invoke.js`;
const BANNER_WIDTH = 300;
const BANNER_HEIGHT = 250;

/**
 * In-Page Push unit: the async invoke.js fills the container div on its own,
 * so it can load after hydration anywhere in the body.
 */
export function AdsterraInPagePush() {
  return (
    <aside className="ad-slot" aria-label="Advertisement">
      <Script
        src={IN_PAGE_PUSH_SRC}
        strategy="afterInteractive"
        data-cfasync="false"
      />
      <div id={IN_PAGE_PUSH_CONTAINER} />
    </aside>
  );
}

/**
 * 300x250 iframe banner. The network's invoke.js reads the global `atOptions`
 * and renders with document.write, which would blank the page if it ran in the
 * top document after load, so the whole snippet runs inside a same-origin
 * about:blank iframe written once on mount.
 */
export function AdsterraBanner() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const frame = document.createElement("iframe");
    frame.width = String(BANNER_WIDTH);
    frame.height = String(BANNER_HEIGHT);
    frame.title = "Advertisement";
    frame.setAttribute("scrolling", "no");
    frame.setAttribute("frameborder", "0");
    frame.style.cssText = "border:0;display:block";
    host.appendChild(frame);

    const doc = frame.contentDocument;
    if (!doc) return;
    doc.open();
    doc.write(
      `<!doctype html><html><body style="margin:0">` +
        `<script>atOptions = { 'key': '${BANNER_KEY}', 'format': 'iframe', ` +
        `'height': ${BANNER_HEIGHT}, 'width': ${BANNER_WIDTH}, 'params': {} };` +
        `</script>` +
        `<script src="${BANNER_SRC}"></script>` +
        `</body></html>`,
    );
    doc.close();

    return () => {
      frame.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="ad-slot ad-slot--banner"
      role="complementary"
      aria-label="Advertisement"
    />
  );
}
