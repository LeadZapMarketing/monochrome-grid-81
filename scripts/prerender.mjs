import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

const routes = [
  "/",
  "/about/",
  "/services/",
  "/services/architectural-design/",
  "/services/interior-design/",
  "/services/authority-submissions/",
  "/services/craftsmanship/",
  "/contact/",
  "/project/ritz-carlton-langkawi/",
  "/project/rabbit-hole-kl/",
  "/project/courtyard-house/",
  "/project/eco-sanctuary/",
  "/project/east-meets-west/",
  "/project/iconic-terrace/",
  "/project/sutera-terrace/",
  "/project/indah-putra/",
  "/project/horizon-hills/",
  "/project/winter-pavillion/",
  "/project/langkawi-kitchen/",
  "/project/beach-grill/",
  "/project/kluang-resort-farmhouse/",
  // Journal. Posts have no trailing slash: they are saved as dist/blog/<slug>.html
  // (see .htaccess), so a directory never forces a redirect to /blog/<slug>/.
  "/blog/",
  "/blog/hiring-an-architect-in-johor-bahru",
  "/blog/design-and-build-your-dream-house",
  "/blog/architecture-and-interior-design-planning",
  "/blog/architecture-in-johor-bahru",
  "/blog/pam-member-in-architect-industry",
  "/blog/certificate-of-completion-and-compliance-malaysia",
  "/blog/what-does-an-architect-do-malaysia",
  "/blog/build-house-on-own-land-malaysia",
  // Guides with their own address (a folder, like the service pages)
  "/guides/interior-design-malaysia/",
];

// Simple static file server for dist/
function startServer(port) {
  const mime = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url.split("?")[0];
      let filePath = join(DIST, url);

      // SPA fallback
      if (!existsSync(filePath) || !filePath.includes(".")) {
        filePath = join(DIST, "index.html");
      }

      try {
        const data = readFileSync(filePath);
        const ext = "." + filePath.split(".").pop();
        res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  console.log("Starting prerender...");
  const PORT = Number(process.env.PRERENDER_PORT) || 4173;
  const server = await startServer(PORT);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Rendering: ${route}`);

    // A tag that keeps the network busy (Tag Manager, a slow image) must not fail
    // the whole build: if the page never goes quiet, keep it once it has rendered.
    try {
      await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
    } catch (err) {
      if (err?.name !== "TimeoutError") throw err;
      const rendered = await page
        .waitForFunction(() => document.getElementById("root")?.children.length > 0, { timeout: 30000 })
        .then(() => true, () => false);
      if (!rendered) throw err;
      console.warn(`  ! ${route}: network never went quiet; saved once rendered`);
    }

    // Wait a bit for any animations/lazy content
    await new Promise((r) => setTimeout(r, 1000));

    // Journal pages load their posts from Supabase: wait for the loading skeleton to go.
    // If it never does, skip the page so it keeps the SPA fallback instead of a skeleton.
    if (route.startsWith("/blog/")) {
      const postsLoaded = () =>
        page
          .waitForFunction(() => !document.querySelector("main .animate-pulse"), { timeout: 45000 })
          .then(() => true, () => false);
      let loaded = await postsLoaded();
      // Supabase is sometimes slow on the build machine: reload once before giving up.
      if (!loaded) {
        console.warn(`  ! ${route}: posts slow, reloading once`);
        await page.reload({ waitUntil: "load", timeout: 60000 }).catch(() => {});
        loaded = await postsLoaded();
      }
      if (!loaded) {
        console.warn(`  ! Skipped ${route}: posts did not load`);
        await page.close();
        continue;
      }
    }

    /*
     * Strip portal-rendered floating widgets before saving.
     *
     * WhatsAppChatWidget renders through createPortal into document.body, and it
     * only appears after mount (`if (!mounted) return null`). Puppeteer runs a
     * real browser, so the effect fires and the widget ends up baked into the
     * captured HTML — as a direct child of <body>, outside React's root.
     *
     * On a real visit that static copy is served, React then hydrates and mounts
     * its OWN copy, and the page ends up with TWO identical buttons stacked at
     * the same fixed position. Measured live 2026-08-07: two <a> to wa.me, both
     * z-index 9999, one with React props and one without.
     *
     * Today the tracked (React) copy happens to win, because equal z-index means
     * the later DOM node paints on top and React's is appended after. That is
     * luck, not design — flip the order and every WhatsApp click stops being
     * counted while the button still works, which is exactly the kind of silent
     * analytics failure that is invisible until someone asks why leads dropped.
     *
     * React re-creates the widget on mount regardless, so removing it here costs
     * nothing and leaves exactly one button.
     */
    await page.evaluate(() => {
      document
        .querySelectorAll('body > a[aria-label="Contact us on WhatsApp"], body > div > a[href*="wa.me"]')
        .forEach((el) => (el.closest('body > *') || el).remove());
    });

    // The Tag Manager snippet in index.html adds its own gtm.js tag when it runs.
    // Drop the copy it added during the render, or every visit downloads it twice.
    await page.evaluate(() => {
      document
        .querySelectorAll('script[src*="googletagmanager.com/gtm.js"]')
        .forEach((el) => el.remove());
    });

    const html = await page.content();

    // Determine output path
    const outFile = route.endsWith("/")
      ? join(route === "/" ? DIST : join(DIST, route), "index.html")
      : join(DIST, `${route}.html`);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, html);
    console.log(`  → Saved: ${outFile}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log(`\nPrerendered ${routes.length} pages successfully!`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
