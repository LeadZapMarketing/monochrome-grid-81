// LeadZap enquiry intake (9 Oct 2026): every enquiry is sent here AS WELL AS the
// form's own delivery (Apps Script sheet + email). Never instead of it.
// Queued in localStorage and retried until stored (same id = same enquiry, so
// retries are safe). The intake answers 403 to any origin but the live site.
const URL = "https://kira-prod.tail1a5ab5.ts.net/intake/v1/lzs_G3ziqPNjhH9NENSA0rgIOilM";
const Q = "lz-enquiries";

type Item = {
  id: string;
  form: string;
  page: string;
  fields: Record<string, string>;
  submitted_at: string;
  hp: string;
};

function load(): Item[] {
  try { return JSON.parse(localStorage.getItem(Q) || "[]"); } catch { return []; }
}

function save(q: Item[]) {
  try {
    if (q.length) localStorage.setItem(Q, JSON.stringify(q.slice(-20)));
    else localStorage.removeItem(Q);
  } catch { /* storage blocked: nothing to queue */ }
}

function post(item: Item): Promise<boolean> {
  return fetch(URL, {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(item),
  })
    // Stored, or never storable (400/403/404/413): stop retrying.
    .then((r) => r.ok || [400, 403, 404, 413].includes(r.status))
    .catch(() => false);
}

function flush() {
  const q = load().filter((i) => Date.now() - Date.parse(i.submitted_at) < 7 * 864e5);
  if (!q.length) { save([]); return; }
  Promise.all(q.map(post)).then((ok) => save(q.filter((_, i) => !ok[i])));
}

export function lzEnquiry(
  form: string,
  fields: Record<string, string>,
  opts: { test?: boolean; hp?: string } = {},
) {
  if (typeof window === "undefined") return;
  try {
    const id = (opts.test ? "lztest-" : "") +
      (window.crypto?.randomUUID
        ? window.crypto.randomUUID()
        : Date.now().toString(36) + Math.random().toString(36).slice(2));
    const q = load();
    q.push({
      id, form, page: location.href, fields,
      submitted_at: new Date().toISOString(), hp: opts.hp ?? "",
    });
    save(q);
    flush();
  } catch { /* the backup must never break the form */ }
}

// Anything a closed tab left behind goes now; console tests use window.lzEnquiry.
if (typeof window !== "undefined") {
  (window as unknown as { lzEnquiry: typeof lzEnquiry }).lzEnquiry = lzEnquiry;
  flush();
}
