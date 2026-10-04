/**
 * Lead events — the ONE way LeadZap counts leads on every client site
 * (owner, 2026-10-04). The SEO console reads these exact GA4 event names
 * every hour; do not rename them:
 *   whatsapp_click — a tap on the WhatsApp button (WhatsAppChatWidget sends it)
 *   generate_lead  — a contact form the lead backend accepted (not spam)
 *   phone_click    — a tap on the phone number
 * Sent through gtag (GA4) and the dataLayer (GTM), like the WhatsApp button.
 */
export type LeadEvent = "whatsapp_click" | "generate_lead" | "phone_click";

export function trackLead(event: LeadEvent, label: string): void {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", event, { event_category: "lead", event_label: label });
  }
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, event_category: "lead", event_label: label });
  }
}
