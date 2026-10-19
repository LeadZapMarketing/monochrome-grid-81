// One WhatsApp link and one tracker for every WhatsApp button on the site.
const phone = "60167442330";
const message = "Hi, I would like to know more about your services.";
export const WHATSAPP_LINK = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const trackWhatsAppClick = () => {
  if (typeof window === "undefined") return;

  // Google Ads Conversion Tracking
  if ((window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-11342839562/aySGCNSJiqAcEIr-16Aq",
    });

    // GA4 engagement event — the console counts on this exact event name
    (window as any).gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "whatsapp_button",
    });
  }

  // GTM path, in case gtag.js is blocked or tags are managed in GTM
  if (Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push({
      event: "whatsapp_click",
      event_category: "engagement",
      event_label: "whatsapp_button",
    });
  }
};
